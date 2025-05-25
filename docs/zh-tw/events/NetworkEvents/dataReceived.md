---
title: NetworkEvents.dataReceived
shortTitle: dataReceived
---

```ts
/**
 * Invoked when a network packet is received.
 * 
 * Note that the behaviour of this event is depending on the **script type**.
 * 
 * In `server_scripts`, this event is invoked on the server side when a packet is received from a client.
 * 
 * In `client_scripts`, this event is invoked on the client side when a packet is received from the server.
 */
function dataReceived(extra: string, handler: (event: $NetworkKubeEvent) => void): void
```