---
title: Data visualisation - Security
description: Visualization of firewall logs in real time.
author: Kalidou DIA
---

# <center>Security & data viz</center>
<img src="/img/elk/elk_filebeat1.png#center" alt="archi_elk" width="500"  />

### <center>View firewall logs in real time with ELK ?</center>
<div style="text-align: right" class="date-update">
Last update :  Mar, 10 2024
</div>

________________________________________________________________
## 1. Presentation
Firewall logs can be used to monitor connections to an information system. There are many ways of producing real-time logs. These include the elasticsearch stack, kibana, logstash and filebeat : <a href="https://www.elastic.co/guide/en/beats/filebeat/current/configuring-howto-filebeat.html" target="_blank">(documentation)</a>.<br><br>
Our architecture consists of filebeat and logstash, which are installed in our kali linux VM, and two containers, elasticsearch and kibana, which run on our local machine.
Our firewall saves logs in a file (/var/log/sise.log).

<li>Filebeat captures the logs in the file "/var/log/sise.log" and transmits them to logstash, which listens on port 5044.</li><br>
<li>Logstash is responsible for parsing the logs in a structured way and transmitting them to our elasticsearch + kibana (ELK) services, which run on docker containers.</li><br>
<li>ELK allows us to visualise logs in real time and graph them.</li><br>

<br>

## 2. Filebeat and logstash installation
We'll need to run the commands below to get filebeat running properly.
```bash
# pre-config

sudo apt-get install apt-transport-https gpg

wget -qO - https://artifacts.elastic.co/GPG-KEY-elasticsearch | sudo gpg --dearmor -o /etc/apt/trusted.gpg.d/elastic.gpg

echo "deb https://artifacts.elastic.co/packages/8.x/apt stable main" | sudo tee -a /etc/apt/sources.list.d/elastic-8.x.list

#--------------------------------------------------
# install filebeat
sudo apt-get update && sudo apt-get install filebeat

#-------------------------------------------------
#install logstash
sudo apt-get install logstath

export PATH=$PATH:/usr/share/logstash/bin/
```
<br>

### 2.1 Filebeat config
After installing filebeat, we add the following lines to the **filebeat.yml** file
```yml
filebeat.inputs:
- type: log
  paths:
    - /var/log/sise.log

output.logstash:
  hosts: ["127.0.0.1:5044"]
```
<br>

### 2.2 Logstash config
In a **myconf.conf** file that we have created, we put the content below.  
```shell
input {
    beats {
        port => "5044"
    }
}
filter {
    grok { 
        match => { "message" => "%{TIMESTAMP_ISO8601:timestamp} %{SYSLOGHOST:sysloghost} kernel: \s*\[%{DATA:kern}\]\s* ACTION=%{DATA:action} RULE=%{INT:rule} IN=%{WORD:in} OUT=%{DATA:null} MAC=%{DATA:mac} SRC=%{IP:srcip} DST=%{IP:dstip} LEN=%{INT:len1} TOS=%{WORD:tos} PREC=%{WORD:prec} (?:TTL=%{WORD:prec})? ID=%{INT:ID} (?:%{DATA:DF})?PROTO=%{WORD:proto} SPT=%{INT:src_port} DPT=%{INT:dst_port} (?: LEN=%{INT:len2})?(?: WINDOW=%{INT:window})?(?: RES=%{INT:res})?(?: URGP=%{INT:urgp})?(?: RES=%{WORD:res})?(?: %{WORD:ack})?"} 
    }
}
output {
   elasticsearch {
    # 192.168.137.95 is the host ip where elasticsearch runs
      hosts => [ "192.168.137.95:9200" ] 
	    action => "index"
	    index => "sise"
    }
    stdout {}
}
```
This file takes as input the logs that logstash receives on port 5044. It then filters them using <a href="http://" target="_blank">grok</a> which retrieves the information we need and puts it into variables.

The content of the grok filter depends on the logs. We recommend that you use online grok filter tools to obtain a good match of the data.

The file sends the output (filtered and structured logs) to an elasticsearch service running in a container on the local machine (192.168.137.95).
![alt text](</img/elk/filter logstash.png>)
<br>

________________________________________________________________
## 3. Start-up of elasticsearch and kibana services
Run Elasticsearch
```bash
docker run -itd -p 9200:9200 -p 9300:9300 dck_elastic:latest
```

Run kibana
```bash
docker run -itd -p 5601:5601 dck_kibana:latest 
```
dck_elastic and dck_kibana are docker images that we have installed using DockerFiles.

**DockerFile of elasticsearch**
```dockerfile
FROM ubuntu

RUN apt update
RUN apt-get -y install openssh-server iptables 
RUN apt install rsyslog -y
RUN apt install apt-transport-https gnupg2 uuid-runtime pwgen curl dirmngr -y
RUN apt install openjdk-11-jre-headless -y
RUN apt install sudo vim wget file  -y
RUN apt update
RUN curl -fsSL https://artifacts.elastic.co/GPG-KEY-elasticsearch |sudo gpg --dearmor -o /etc/apt/trusted.gpg.d/elastic.gpg

RUN echo "deb [signed-by=/etc/apt/trusted.gpg.d/elastic.gpg] https://artifacts.elastic.co/packages/7.x/apt stable main" | sudo tee -a /etc/apt/sources.list.d/elastic-7.x.list
RUN apt update -y
RUN apt list --upgradable
RUN apt install elasticsearch -y
RUN sed -i".bak" 's/^\#PermitRootLogin prohibit-password/PermitRootLogin Yes/' /etc/ssh/sshd_config
EXPOSE 22
EXPOSE 8888
EXPOSE 9200
EXPOSE 9300
COPY elasticsearch.yml /etc/elasticsearch/
COPY demo.sh /entrypoint.sh
RUN chown root.elasticsearch /etc/elasticsearch/elasticsearch.yml
RUN chmod +x /entrypoint.sh
RUN echo "root:toto" | chpasswd
CMD service elasticsearch start
ENTRYPOINT ["/entrypoint.sh"]
#history > histo-ok.txt
```

**DockerFile of kibana**
```dockerfile
FROM ubuntu

RUN apt update
RUN apt-get -y install openssh-server iptables 
RUN apt install rsyslog -y
RUN apt install apt-transport-https gnupg2 uuid-runtime pwgen curl dirmngr -y
RUN apt install openjdk-11-jre-headless -y
RUN apt install sudo vim wget file  -y
RUN apt update
RUN curl -fsSL https://artifacts.elastic.co/GPG-KEY-elasticsearch |sudo gpg --dearmor -o /etc/apt/trusted.gpg.d/elastic.gpg

RUN echo "deb [signed-by=/etc/apt/trusted.gpg.d/elastic.gpg] https://artifacts.elastic.co/packages/7.x/apt stable main" | sudo tee -a /etc/apt/sources.list.d/elastic-7.x.list
RUN apt update -y
RUN apt list --upgradable
RUN apt install kibana logstash -y
RUN sed -i".bak" 's/^\#PermitRootLogin prohibit-password/PermitRootLogin Yes/' /etc/ssh/sshd_config
EXPOSE 22
EXPOSE 8888
EXPOSE 5601
COPY kibana.yml /etc/kibana/
COPY demo.sh /entrypoint.sh
RUN chown root.kibana /etc/kibana/kibana.yml
RUN chmod +x /entrypoint.sh
RUN echo "root:toto" | chpasswd
CMD service kibana start
ENTRYPOINT ["/entrypoint.sh"]
#history > histo-ok.txt
```
Once these two containers are *Up*, we start the kibana in "interactive terminal" and modify the */etc/kibana/kibana.yml* file to add the ip of elasticsearch so that kibana and elasticsearch can communicate.

**Elastic's ip address = 172.17.0.3**
![alt text](</img/elk/link kibana elastic.png>).

✅ elasticsearch ==> localhost:9200 👍
--------------------------------
![alt text](</img/elk/elastic run.png>)

✅ kibana ==> localhost:5601 👍
--------------------------------
![alt text](</img/elk/kibana run.png>)


## 4. Start logstash service
Let's return to our kali VM to start the logstash service. We'll run the following commands in this order.
```bash
# Add the filebeat data source
sudo filebeat -e -c /etc/filebeat/filebeat.yml --strict.perms=false -d "publish"

# run the logstash service
service logstash start

## test if logstash config is OK
/usr/share/logstash/bin/logstash -f myconf.conf --config.test_and_exit

## If the tests are OK, we start logstash, which refreshes itself automatically.
bin/logstash -f myconf.conf --config.reload.automatic
```

If we then go to ELK, we'll see the **sise** index in "stack management", and once we've added it, we'll see the **sise** patten logs in "discover".

Below are some of the data we have chosen to display.
![alt text](</img/elk/capture ELK filebeat.png>)

We can then create a Dashboard that looks like this.
![alt text](</img/elk/elk viz.png>)