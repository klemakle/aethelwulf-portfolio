---
title: Restrict VM connection
description: Restricted connections between different Linux machines
author: Kalidou DIA
img: /img/routing/archi1.png
date: 2024-04-21
updated: Apr, 21 2024
read: 2
tags:
  - 
    name: Network
    class: bg-gray-800 hover:bg-cyan-800
---

# <center>Routing Linux</center>
<img src="/img/routing/archi1.png#center" alt="archi_elk" width="900"  />

### <center>Configure restricted connections between machines</center>
<div style="text-align: right" class="date-update">
Last update :  Apr, 21 2024
</div>

## Presentation
When setting up a private VM network, security requires us to restrict some direct connections.
We must not be able to contact a machine directly without going through an intermediary. This is the type of architecture we find when setting up a proxy, a reverse proxy or a firewall, for example.

In this article, we'll look at an architecture involving 3 virtual machines communicating with each other over 2 LANs.

## Architecture
It's a small network of machines that can communicate with each other. It's characterized by the network address from which we can derive the number of hosts the LAN could have.
In our architecture, we have 2 LANs and 3 debian linux VMs.

<u><b>A computer is a router</b></u>
<img src="/img/routing/archi21.png#center" alt="archi_elk" width="700"  />

VM1: is a virtual machine belonging to LAN1. It must not be reachable from another network without going through VM2.

VM2: a VM acting as a router here. It's through this router that LAN1 machines pass to reach another network, the Internet for example. It is connected to our VM3 router, with which it shares the LAN 2 network.

VM3: this is the VM that serves as an exit point to another network. It contains the public address on the eth0 interface, which can be reached from the Internet.


## Configuration
Install a Debian VM, then clone the other two.<br>
To activate IP routing, 2 options are available : in memory or "hard-coded" in a file.
- In memory: 
```bash
echo 1 > /proc/sys/net/ipv4/ip_forward
```
- Hard-coded in a file:
```bash
sysctl -w net.ipv4.ip_forward=1
```
or edit ***"/etc/sysctl.conf"*** and look for the value ``net.ipv4.ip_forward=1`` is no longer 0

To add a default route :
```bash
ip route add default via 192.168.100.1
```

To add a route to another network. Here to network 172.16.32.0/24 for example
```bash
ip route add 172.16.32.0/24 via 192.168.100.1 dev eth0
```

...