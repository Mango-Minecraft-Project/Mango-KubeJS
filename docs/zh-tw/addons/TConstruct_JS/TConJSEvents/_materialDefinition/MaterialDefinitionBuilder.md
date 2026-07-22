::: details `MaterialDefinitionBuilder`

<table><thead><tr>
  <th>方法</th>
  <th>說明</th>
</tr></thead><tbody><tr>
  <td>

```ts :no-line-numbers
craftable(
  boolean craftable
)
```

  </td>
  <td>若為 <code>true</code>，則該材料可在 <ItemIcon id="tconstruct:item/part_builder" /> 部件製作台 製作</td>
</tr><tr>
  <td>

```ts :no-line-numbers
hidden(
  boolean hidden
)
```

  </td>
  <td>若為 <code>true</code>，則該材料將不會在書中或材料物品中顯示</td>
</tr><tr>
  <td>

```ts :no-line-numbers
sortOrder(
  int sortOrder
)
```

  </td>
  <td>材料在書中的排序順序，通常按照以下順序排序：

| 分組 | 排序順序 | 描述                           |
| ---- | -------- | ------------------------------ |
| 一般 | 0        | 同時具有攻擊與採集特性         |
| 收穫 | 1        | 具有採集特性，但不具有攻擊特性 |
| 攻擊 | 2        | 具有攻擊特性，但不具有採集特性 |
| 特殊 | 3        | 具有特殊特性                   |
| 遠程 | 4        | 具有遠程攻擊特性               |
| 兼容 | 5        | 僅在添加普通金屬時使用         |
| 地獄 | +10      | 地獄材料，與前項做加法計算     |
| 終界 | +15      | 終界材料，與前項做加法計算     |
| 綁定 | 20       | 只能製作成綁定結或弓弦的材料   |
| 製作 | 25       | 只能用於合成的材料             |

  </td>
</tr><tr>
  <td>
  
```ts :no-line-numbers
tier(
  int tier
)
```

  </td>
  <td>材料的等級，通常按照以下順序排序：

| 等級          | 所屬書名                                                               | 原版材料參考 | 製作方法                                                                                      |
| ------------- | ---------------------------------------------------------------------- | ------------ | --------------------------------------------------------------------------------------------- |
| 0             | <ItemIcon id="tconstruct:item/materials_and_you" /> 匠魂寶典：材料與你 | 木材         | 與等級 1 類似，主要是用於置於材料最前端。<br/>通常不該用於其他材料中，僅用於新的材料類型      |
| 1             | <ItemIcon id="tconstruct:item/materials_and_you" /> 匠魂寶典：材料與你 | 鵝卵石、銅   | 只需要在 <ItemIcon id="tconstruct:item/part_builder" />部件製作台 製作                        |
| 2             | <ItemIcon id="tconstruct:item/puny_smelting" /> 入門熔煉術             | 鐵           | 需要熔煉和鑄造才能製作                                                                        |
| 2（地獄）     | <ItemIcon id="tconstruct:item/puny_smelting" /> 入門熔煉術             | 無           | 用於製作地獄或終界的建材                                                                      |
| 3             | <ItemIcon id="tconstruct:item/mighty_smelting" /> 大師熔煉術           | 鑽石         | 需要透過合金製作的材料                                                                        |
| 3（地獄）     | <ItemIcon id="tconstruct:item/mighty_smelting" /> 大師熔煉術           | 無           | 需要熔煉和鑄造才能製作的地獄或終界材料                                                        |
| 4（烈焰血）   | <ItemIcon id="tconstruct:item/fantastic_foundry" /> 奇異熔鑄術         | 獄髓         | 需要極高的溫度才能製作的材料                                                                  |
| 4（探索）     | 無                                                                     | 無           | 遊戲中後期可獲得的材料，主要指的是終界材料                                                    |
| 4（靈魂鍛造） | 無                                                                     | 無           | 需要透過靈魂熔爐才能製作的材料<br/>***目前尚未在匠魂模組中實現***                             |
| 5             | 無                                                                     | 獄髓＋       | 最高等級的材料，通常需要結合多種製作方法，並且有獨特的特性<br/>***目前尚未在匠魂模組中實現*** |

</td>
</tr></tbody></table>

:::