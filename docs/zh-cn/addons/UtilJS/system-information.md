---
title: 获取系统信息
---

想要在 KubeJS 获取系统信息？通过 `UtilJS.os` 可以快速获取到相关信息。

可以使用以下方法：

```java
public final String EOL;
public String platform();
public String arch();
public List<Map<String, Object>> cpus();
public long freemem();
public long totalmem();
public long uptime();
public long systemUptime();
public long systemTotalMem();
public long systemFreeMem();
public String version();
public String type();
public String release();
public int availableParallelism();
public String cpuName();
```

至于获取这些信息能做到什么操作，那当然是看你的表现啦。

例如根据 CPU 核心数来造成伤害的武器？