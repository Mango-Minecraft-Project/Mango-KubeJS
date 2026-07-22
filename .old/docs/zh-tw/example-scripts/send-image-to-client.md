---
title: 發送圖片到客戶端
tags: [KubeJS 6]
layout: AddonPage
author:
  - name: 小忆然喵
    url: https://www.mcmod.cn/author/34643.html
  - name: 木板
    url: https://center.mcmod.cn/207729/
source: https://www.mcmod.cn/post/5190.html
---

::: note 前言
原作者：[小忆然喵](https://www.mcmod.cn/author/34643.html)  
使用模組：[JavaScript JS](https://www.mcmod.cn/class/19279.html)  

FilesJS 雖然很強大，但是只能載入客戶端的檔案，而 JavaScript JS 雖然可以在客戶端使用，卻不能複製或發送圖片，  
於是為了發送圖片，需要在 Minecraft 中 *發明* 傳真技術。!!雖然不發送僅複製也是可以的!!
:::

## 跨端傳送圖片

### 發送端

```javascript
const $ImageIO = Java.loadClass("javax.imageio.ImageIO");
const $CompoundTag = Java.loadClass("net.minecraft.nbt.CompoundTag");
const $FastByteArrayOutputStream = Java.loadClass("it.unimi.dsi.fastutil.io.FastByteArrayOutputStream");

/**@type {$Class_<?>} */
const clazz = $CompoundTag.__javaObject__;
const methods = clazz.getDeclaredMethods();
const method = methods.find(m => m.getName() == "m_128382_");
const output = new $FastByteArrayOutputStream();

//复制前所在的路径，如 kubejs/assets/capejs/textures/capes/cape.png
const image = $ImageIO.read("图片路径");

// png 可以换成其他格式，但是需要与文件后缀统一
$ImageIO["write(java.awt.image.RenderedImage,java.lang.String,java.io.OutputStream)"](image, "png", output);
const nbt = new $CompoundTag();
method.invoke(nbt, "image", output.array);

// player是事件中的玩家，如果不解构需要改为 event.player
player.sendData("image", nbt);
output.close();
```

### 接收端

```javascript
const $ImageIO = Java.loadClass("javax.imageio.ImageIO");
const $FastByteArrayInputStream = Java.loadClass("it.unimi.dsi.fastutil.io.FastByteArrayInputStream");

NetworkEvents.dataReceived("image", (event) => {
  const { data: { image: output }, player } = event;
  const input = new $FastByteArrayInputStream(output.getAsByteArray());

  /**@type {$RenderedImage_}*/
  const image2 = $ImageIO["read(java.io.InputStream)"](input);

  //目标路径，png和后缀与上文提到的规则一致
  $ImageIO.write(image2, "png", "图片路径");
  input.close();
})
```

## 客戶端複製圖片

```javascript
const $ImageIO = Java.loadClass("javax.imageio.ImageIO");
const $FastByteArrayOutputStream = Java.loadClass("it.unimi.dsi.fastutil.io.FastByteArrayOutputStream");
const $FastByteArrayInputStream = Java.loadClass("it.unimi.dsi.fastutil.io.FastByteArrayInputStream");

const output = new $FastByteArrayOutputStream();
const image = $ImageIO.read("原图路径");
$ImageIO["write(java.awt.image.RenderedImage,java.lang.String,java.io.OutputStream)"](image, "png", output);
const input = new $FastByteArrayInputStream(output.array);

/**@type {$RenderedImage_}*/
const image2 = $ImageIO["read(java.io.InputStream)"](input);
$ImageIO.write(image2, "png", "目标路径");
input.close();
output.close();
```