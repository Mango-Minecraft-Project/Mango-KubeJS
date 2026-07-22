::: details `MaterialTraitsBuilder`

<table><thead><tr>
  <th>方法</th>
  <th>說明</th>
</tr></thead><tbody><tr>
  <td>

```ts :no-line-numbers
add(
  name: string, // 特性名稱
  level: int // 特性等級
)
```

  </td>
  <td>添加材料特性</td>
</tr><tr>
<td>

```ts :no-line-numbers
addAll(
  traits: map<string, int> // 特性名稱與等級的映射
)
```

  </td>
  <td>添加多個材料特性</td>
</tr><tr>
  <td>

```ts :no-line-numbers
perStat(
  partId: string, // 部件 ID
  traitName: String, // 特性名稱
  level: int // 特性等級
)
```

  </td>
  <td>為指定部件添加材料特性</td>
</tr><tr>
  <td>

```ts :no-line-numbers
perStatAll(
  partId: string, // 部件 ID
  traits: map<string, int> // 特性名稱與等級的映射
)
```

  </td>
  <td>為指定部件添加多個材料特性</td>
</tr></tbody></table>

:::