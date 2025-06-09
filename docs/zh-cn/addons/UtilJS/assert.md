---
title: 断言（Assert）
---

嗯，通过 `UtilJS.asserts` 可以使用定制的测试方法，大概就类似于，用来判断你期望的值和实际的值是否匹配，如果不匹配会直接抛出异常，但不用担心，KubeJS 不会导致游戏直接崩溃掉，请放心使用（？

提供了以下方法：（以后可能会有改动？）

```java
// T指的是任意类型，例如你输入的类型是字符串（String），那么T就是String
public <T> T assertNotNull(T value);
public <T> T assertNotNull(T value, String message);
public <T> T requireNotNull(T value);
public <T> T requireNotNull(T value, String message);
public <T> T requireNotNull(T value, Supplier<String> lazyMessage);
public void assertTrue(boolean condition);
public void assertTrue(boolean condition, String message);
public void assertFalse(boolean condition);
public void assertFalse(boolean condition, String message);
public <T> void assertEquals(T expected, T actual);
public <T> void assertNotEquals(T unexpected, T actual);
public void assertNull(Object obj);
// 直接抛出一个断言异常
public void fail();
public void fail(String message)
```

请确保你的调试代码不会在正式发行版运行，目前本 mod 没有 Test 类框架的功能，这仅仅只是用来测试的方法而已。