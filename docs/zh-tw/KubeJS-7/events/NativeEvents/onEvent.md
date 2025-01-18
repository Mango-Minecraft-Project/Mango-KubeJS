---
title: NativeEvents.onEvent
shortTitle: onEvent
article: false
timeline: false
---

```ts
function onEvent<T extends typeof $Event<(unknown)>>(arg1: T, arg2: (event: InstanceType<(T)>) => void): void
function onEvent<T extends typeof $Event<(unknown)>>(arg1: T, arg2: (event: InstanceType<(T)>) => void, arg3: $Consumer$$Type<($Event)>): void
```