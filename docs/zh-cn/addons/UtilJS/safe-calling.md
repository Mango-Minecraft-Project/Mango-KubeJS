---
title: 安全调用
---

UtilJS 实现了 `runCatching` 方法，其用法如下：

```js
// 可以保证代码不会因为异常而终止
let runCatch = UtilJS.control.runCatching(() => {
  // 在 kubejs 这个 1 会被识别成 1.0 而导致失败，应该传入字符串的1
  Integer.valueOf(1);
  return "OK";
})

// 然后可以通过 result 来获取返回值，此处 value 理应是 null
runCatch.getValue();
runCatch.getError();
```

而 `Result` 是对结果和错误的包装，类似于 kotlin、rust 之类在使用的。

如果你只关注于结果，可以直接 `rusult.getValue()`，但请注意，其结果可能为 null，毕竟你要用这个放着的代码，那肯定不总是执行成功的。

此外，通过 `isSuccess()` 和 `isFailure()` 方法，可以判断是否执行成功。  