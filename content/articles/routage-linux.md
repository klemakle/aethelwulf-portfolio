---
title: Routing linux
description: Restricted connections between different Linux machines
author: Kalidou DIA
---

# <center>Routing Linux</center>
<img src="/img/routing/archi1.png#center" alt="archi_elk" width="500"  />

### <center>Configure restricted connections between VM</center>
<div style="text-align: right" class="date-update">
Last update :  Apr, 14 2024
</div>

## Presentation
When setting up a private VM network, security requires us to restrict certain direct connections.
We must not be able to contact a machine directly without going through an intermediary. This is the type of architecture we find when setting up a reverse proxy or a firewall, for example, which will have a public address.
