---
title: NativeEvents.onEvent
shortTitle: onEvent
---

```ts
function onEvent<T extends typeof $Event<(unknown)>>(arg1: T, arg2: (event: InstanceType<(T)>) => void): void
function onEvent<T extends typeof $Event<(unknown)>>(arg1: T, arg2: (event: InstanceType<(T)>) => void, arg3: $Consumer$$Type<($Event)>): void
```