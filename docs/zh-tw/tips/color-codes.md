---
title: 顏色與格式代碼
layout: AddonPage
source: https://zh.minecraft.wiki/w/格式碼
license: CC BY-NC-SA 3.0
---

## `§` 輸入法快捷鍵

Linux: `Compose keyEvent` + `s` + `o`
Windows: `Alt` + `Num2` + `Num1`

## 顏色代碼

| 代碼  |     名稱     | 前景色                        | 背景色                        | 等效的 ANSI 跳脫序列 |
| :---: | :----------: | ----------------------------- | ----------------------------- | :------------------: |
| `§0`  |    black     | <ColorCode color="#000000" /> | <ColorCode color="#000000" /> |      `\e[0;30m`      |
| `§1`  |  dark_blue   | <ColorCode color="#0000aa" /> | <ColorCode color="#00002a" /> |      `\e[0;34m`      |
| `§2`  |  dark_green  | <ColorCode color="#00aa00" /> | <ColorCode color="#002a00" /> |      `\e[0;32m`      |
| `§3`  |  dark_aqua   | <ColorCode color="#00aaaa" /> | <ColorCode color="#002a2a" /> |      `\e[0;36m`      |
| `§4`  |   dark_red   | <ColorCode color="#aa0000" /> | <ColorCode color="#2a0000" /> |      `\e[0;31m`      |
| `§5`  | dark_purple  | <ColorCode color="#aa00aa" /> | <ColorCode color="#2a002a" /> |      `\e[0;35m`      |
| `§6`  |     gold     | <ColorCode color="#ffaa00" /> | <ColorCode color="#2a2a00" /> |      `\e[0;33m`      |
| `§7`  |     gray     | <ColorCode color="#aaaaaa" /> | <ColorCode color="#2a2a2a" /> |      `\e[0;37m`      |
| `§8`  |  dark_gray   | <ColorCode color="#555555" /> | <ColorCode color="#151515" /> |      `\e[0;90m`      |
| `§9`  |     blue     | <ColorCode color="#5555ff" /> | <ColorCode color="#15153f" /> |      `\e[0;94m`      |
| `§a`  |    green     | <ColorCode color="#55ff55" /> | <ColorCode color="#153f15" /> |      `\e[0;92m`      |
| `§b`  |     aqua     | <ColorCode color="#55ffff" /> | <ColorCode color="#153f3f" /> |      `\e[0;96m`      |
| `§c`  |     red      | <ColorCode color="#ff5555" /> | <ColorCode color="#3f1515" /> |      `\e[0;91m`      |
| `§d`  | light_purple | <ColorCode color="#ff55ff" /> | <ColorCode color="#3f153f" /> |      `\e[0;95m`      |
| `§e`  |    yellow    | <ColorCode color="#ffff55" /> | <ColorCode color="#3f3f15" /> |      `\e[0;93m`      |
| `§f`  |    white     | <ColorCode color="#ffffff" /> | <ColorCode color="#3f3f3f" /> |      `\e[0;97m`      |

## 格式代碼

| 代碼  |  名稱  | 等效的 ANSI 跳脫序列 |
| :---: | :----: | :------------------: |
| `§k`  |  隨機  |       `\e[8m`        |
| `§l`  |  粗體  |       `\e[1m`        |
| `§m`  | 刪除線 |       `\e[9m`        |
| `§n`  |  底線  |       `\e[4m`        |
| `§o`  |  斜體  |       `\e[3m`        |
| `§r`  |  重設  |       `\e[0m`        |
