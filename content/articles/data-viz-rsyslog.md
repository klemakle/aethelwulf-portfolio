---
title: Syslog - security data visualization
description: Collect firewall logs in real time and save it in database
author: Kalidou DIA
img : /img/rsyslog/socanalyst.png
---

# <center>Syslog - Rsyslog config</center>
<img src="/img/rsyslog/socanalyst.png#center" alt="archi_rsyslog"  />
<br>

### <center>Collect firewall logs in real time with rsyslog & syslog-ng</center>
<div style="text-align: right" class="date-update">
Last update :  Mar, 31 2024
</div>

## Presentation
________________________________________________________________
Our goal is to capture incoming connections to our network, record them and view them for analysis of malicious actions. 
Raw logs are not easy to read. That's why we put them through a number of processing stages so that they can be read and analysed easily. <br>

To do this, we have this architecture
<li>A kali linux virtual machine where the rsyslog library is installed. Rsyslog is responsible for retrieving and sending logs.</li>
<li>Three services running in 3 docker containers:</li>
<pre>
  1. Syslog-ng: captures the logs sent by rsyslog, parses them and saves them in a database.
  2. MariaDB: acts as a structured database where we store the logs
  3. PhpMyAdmin: allows us to interact with our database and view its contents.
</pre><br>

![archi - rsyslog](/img/rsyslog/archirsyslog.png#center)



Logging is based on iptables rules. Logs are recorded in a *.log* file we will create. They are then sent to a docker service using rsyslog. These configurations are made on a Kali Linux machine.<br>
Three Docker containers have been set up to receive, store and view the logs.

<br>

### Let's start our 3 docker containers
________________________________________________________________
  - a) <u>Container 1</u> : **Syslog-ng** <br>
    It allows us to receive and filter logs. The *syslog-challenge* image is built using a local DockerFile.
    ```shell
    docker run --name syslog-d-2024  -itd -p 22:22 -p 514:514  syslog-challenge
    ```
<br>

  - b) <u>Container 2</u> : <a name="mariadb"></a>**MariaDB** <br>
    We use it as a database to store our filtered data thanks to syslog-ng.
    ```shell
    docker run --name ma-mariadb -e  MARIADB_ROOT_PASSWORD=mypass123 -d -p 3306:3306 mariadb:10.6.4
    ```
<br>

  - c) <u>Container 3</u> : **PhpMyAdmin** <br>
    It allows us to view our data on a web browser.
    ```shell
    docker run --name mon-phpmyadmin  -d --link ma-mariadb:db -p 8081:80 phpmyadmin
    ```
<br>
<br>

## Config on the kali linux machine
________________________________________________________________
### <a name="iptables"></a> iptables config :
We're going to set up iptables rules that will log connections to our machine.

The image below shows the rules and connections we decide to log.
For example, connections to our web server on port 80 are logged and correspond to rule 4
![iptables rules](</img/rsyslog/iptables.png#center>)


### Rsyslog config
Let's add the rsyslog configuration by specifying the address of our *local machine: 192.168.137.95* where our containers are running. <br>
The screenshot below shows that logs containing the string *"RULE="* are saved in the file **'/var/log/opsie.log'** and are also sent via port 514 to the local machine.<br>
By default, the rsyslog server supports all files with the .conf extension in the rsyslog.d folder. <br>
File ***'/etc/rsyslog.d/challenge.conf'***<br>
![alt text](</img/rsyslog/conf.rsyslog.file.png>)

- Let's start the rsyslog service  : 
  ```shell
  systemctl start rsyslog
  ```

- Let's capture the frames passing through port 514
  ```shell
  tcpdump -vvttttnn -XX dst port 514
  ```
<br>

Be sure that the services for the connexions we log, are running.<br>
For example, for our web server, let's start it with this command : 
```shell
service apache start
```

## Containers config

### Syslog-ng config
After launching the syslog container with the command
```bash
docker start syslog-d-2024
docker exec -it syslog-d-2024 bash
```
We are going modify the conf file **'/etc/syslog-ng/syslog-ng.conf'**. 
<br>

The image below shows the syslog-ng configuration. <br>
The logs are first saved in the ***'brut.log'*** file in a raw form and in the ***'firewall.csv'*** file in a semi-structured form. <br>
The logs we received, are parsed and some informations **(date,ip-src, ip-dst, protocol, destination port, policyId, action, interface)** are saved in the database.<br>
![syslog-ng.conf](</img/rsyslog/syslog.ngconf.png>)

The command below shows a connection with an SQL database. The ip address 172.17.0.3 corresponds to our MariaDB database.
We connect as root with the password "mypass123". Logs_Fw is the schema we load next.
```bash
mysql -h 172.17.0.3 -u root -pmypass123 Logs_fw > /dev/null 
```
<br>

- Let's start the syslog-ng service with the following command

```bash
/etc/init.d/syslog-ng start
```

- Finally, we take a network capture to see the incoming frames.
```bash
tcpdump -vvttttnn -XX dst port 514
```
![dump packets](</img/rsyslog/tcp.dump.paquets.png#center>)
<br>

- Content of ***'brut.log'*** file: raw logs![brut logs](</img/rsyslog/brut1.png#center>)
<br>

- Content of the ***'firewall.csv'*** file: the logs are parsed correctly and saved in the file.
![firewall csv](</img/rsyslog/firewall1.png#centerg>)

Let's go to the web browser after starting our phpmyadmin and mariaDB containers.
- Content of our database : 
![database content](</img/rsyslog/lignesBD.png#center>)