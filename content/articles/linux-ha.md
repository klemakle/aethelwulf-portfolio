---
title: Linux HA
description: Configuration de la haute disponibilité dans un cluster de machines linux avec Linux-HA
author: Kalidou DIA
img: /img/linux_ha/linuxHA1.png
date: 2024-05-26
updated: Jun, 09th 2024
border: border-red-300
read: 6
tags:
  - 
    name: Network
    class: bg-gray-500 hover:bg-teal-600
  - 
    name: Linux
    class: bg-gray-600 hover:bg-teal-700
  - 
    name: French
    class: bg-gray-700 hover:bg-sky-700
---

# <center>Linux HA</center>
<img src="/img/linux_ha/linuxHA1.png#center" alt="archi_elk" width="700"  />

### <center>Configuration de la haute disponibilité avec Linux-HA</center>
<div style="text-align: right" class="date-update">
Dernier màj :  09 Juin 2024
</div>



## Présentation
Dans l’ère des données, les entreprises ont l’obligation de fournir des services qui répondent aux clients peu importe la demande.<br>
Les demandes augmentant de jour en jour, un certain nombre de facteurs doit être pris en compte pour assurer la disponibilité des applications et des services. <br>
**Linux HA** est un système permettant, sous Linux, la mise en cluster (en groupe) de plusieurs machines. C'est plus clairement un outil de haute disponibilité qui va permettre à plusieurs routeurs ou serveurs d'effectuer entre eux un processus de "**tolérance aux pannes**" .

Le principe du **"tolérance aux pannes"** (ou fail-over) est le fait qu'un serveur appelé *"passif"* ou *"esclave"* soit en attente et puisse prendre le relais d'un serveur *"actif"* ou *"maitre"* si ce dernier serait amené à tomber en panne ou à ne plus fournir un service. Dans cet article nous allons parler de la disponibilité des services et comment faire en sorte que des serveurs puissent assurer la haute disponibilité.

## Architecture
<img src="/img/linux_ha/archi1.png#center" alt="archi_elk" width="500"  /><br>
Nous avons comme architecture deux routeurs linux, fonctionnant en haute disponibilité, de telle manière que si un routeur ne fonctionne plus, l’autre prend le relais. De ce fait la haute disponibilité est assurée.<br>
Pour mettre en place les besoins de cette solution nous avons préparé 3 machines virtuelles debian : 2 routeurs et un pc “client”.
Les 3 machines sont dans un même réseau “LAN3” avec un IDR (identifiant du réseau) 192.168.200.0/24. <br>
- <b>Machine 1</b>
  - <u>Nom</u> : client
  - <u>adresse ip</u> :  192.168.200.9
  - <u>Type</u> : PC
<br>

- <b>Machine 2</b>
  - <u>Nom</u> : maitre
  - <u>adresse ip</u> : 192.168.200.11
  - <u>Type</u> : routeur
<br>

- <b>Machine 3</b>
  - <u>Nom</u> : esclave
  - <u>adresse ip</u> : 192.168.200.12
  - <u>Type</u> :  routeur

<br>

Comme le montre la figure de l'architecture, les PC de notre réseau doivent pouvoir avoir accès à internet par l’intermédiaire du routeur virtuel (192.168.200.10). Nous allons utiliser
<u><b>heartbeat</b></u> dans ce cas pour assurer la haute disponibilité. Ainsi le routeur maitre  sera notre routeur passif. Le routeur esclave sera le routeur passif. L‘idée est de faire en sorte que si le maitre tombe, l’esclave prend le relais. De ce fait le pc “client”  aura toujours accès à internet

### Présentation de heartbeat
Heartbeat signifie "battements de cœur". Ceci pour dire que nos serveurs enverront un paquet à nos autres serveurs de façon périodique pour détecter "en temps réel" les serveurs qui deviendraient inaccessibles.Si un serveur n'envoie plus de paquets, cela pourrait dire que ce serveur est en panne ou que sa carte réseau est défaillante.
<br>
Maintenant on verra comment on a pu installer HeartBeatet mettre en oeuvre  l’architecture de la haute disponibilité. 

__________
## Configuration

### a) Installation de heartbeat
 ```bash
  apt-get install heartbeat
 ```

- <b>Routeur maire</b>
![heartbeat maitre](/img/linux_ha/maitre_heartbeat.png)

- <b>Routeur esclave</b>
- ![heartbeat esclave](/img/linux_ha/esclave_heartbeat.png)

<br><br>

### b) Configuration de heartbeat avec le fichier "ha.cf"
Ouverture du fichier ha.cf
```bash 
vim /etc/heartbeat/ha.cf
```
![ha maitre](/img/linux_ha/maitre_ha.cf1.png)

<br>

### c) Authentification au cluster
Ouverture du fichier authkeys
```bash
vim /etc/heartbeat/authkeys 
```
- <b>Routeur maitre</b>
![authkeys maitre](/img/linux_ha/maitre_authkeys.png)

<br>

- <b>Routeur esclave</b>
![authkeys esclave](/img/linux_ha/esclave_authkeys.png)

### d) Configuration pour le basculement
Ouverture du fichier "haresources"
```bash
vim /etc/heartbeat/haresources
```

Le contenu est également le même sur les deux routeurs.<br>
On spécifie le nom du routeur actif et aussi l’adresse ip du routeur virtuel 

![maitre](/img/linux_ha/maitre_haresources.png)
![esclave](/img/linux_ha/esclave_haresources.png)

----------------------------------------------------------------

## Démarrage et validation
<img src="/img/linux_ha/archi2.png#center" alt="archi_elk" width="500"  />
<b style="display:flex; justify-content:center">Fonctionnement attendu avec le maitre actif</b>
<br>

Après avoir effectué les configurations sur nos différents routeurs, nous allons démarrer heartbeat sur le maitre et aussi sur l’esclave. 
La commande pour lancer heartbeat :  
```shell
/etc/init.d/heartbeat start
```
![start heartbeat](/img/linux_ha/start_heartbeat_esclave.png)
<br><br>
Au démarrage de heartbeat sur les routeurs, on voit une nouvelle adresse ip qui apparait dans l’interface enp0s3 du routeur maitre.
  - Sur enp0s3, ip par défaut : 192.168.200.11
  - Sur enp0s3 : 0, l’ip virtuel : 192.168.200.10

![after start](/img/linux_ha/after_start_on_esclave.png#center)
<br>
<br>

Montrons la table de routage du PC client ci-dessous.<br>
Nous voyons que pour aller à internet, le pc client passe par le routeur virtuel : 192.168.200.10
![table routage](/img/linux_ha/table_routage_pc_client.png#center)
<br>
Maintenant vérifions si on a accès à internet depuis le pc “client“
Pour cela, faisons un ``ping www.google.com``.

![alt text](/img/linux_ha/ping_google.png)<br>
Nous remarquons que le ping passe. Le pc “client” a donc accès à internet.

________________________________________________________________

## Test de basculement
Nous allons maintenant désactiver le routeur maitre. <br>
Ensuite nous allons tester si le basculement est fait au niveau du routeur esclave. <br>
Enfin nous allons à nouveau vérifier si le pc “client” a toujours accès à internet.<br>
Après avoir éteint le routeur maitre pour simuler une panne, nous remarquons ci-dessous que l’ip virtuel est ajoutée au niveau du routeur esclave. <br>
![basculement vers esclave](/img/linux_ha/basculement_esclave.png#center)
<br>

Testons à nouveau l’accès à internet du pc “client” avec un ``ping www.google.com``<br>
![ping vers esclave](/img/linux_ha/ping_vers_esclave.png)

<b>
Le pc “client” a toujours accès à internet.
Le basculement a donc réussi, la haute disponilibité marche. 👍
</b>

--------------------------------------------------------
<br>

## Test de l'auto fail back
Lors de la configuration des routeurs, nous avons stipulé que quand le routeur maitre redevient disponible, il reprend le relais : c’est 
<b>l’auto fail back</b>
<br>
Allumons le routeur maitre pour vérifier cette configuration et vérifions si l’ip virtuel est supprimé sur l’esclave.

![auto fialback](/img/linux_ha/auto_fail_back_esclave.png)<br>

<b>
L’ip virtuelle a été enlevée sur le routeur esclave.
</b>

Il est à nouveau sur le routeur maitre <br>
On voit l’ip virtuelle à la ligne enp0s3

![maitre autofailback](/img/linux_ha/maitre_auto_failback.png#center)


