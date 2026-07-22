---
title: TConJSEvents.materialColorSprite
shortTitle: materialColorSprite
isOriginal: true
layout: AddonPage
mod:
  ref: "../README.md"
---

```ts title="<ClientSide/>"
TConJSEvents.materialColorSprite(handler: (event: MaterialColorSpriteEventJS) => void)
```

---

## 基本語法

```js
TConJSEvents.materialColorSprite((event) => {
  event.addMaterialColorSprite(
    "tconstruct",
    "cobalt",
    (sprite) => {
      sprite
        .color("FF2376DD")
        .fallback("metal")
        .suuportStats(
          "tconstruct:head",
          "tconstruct:handle",
          "tconstruct:binding",
          "tconstruct:repair_kit",
          "tconstruct:limb",
          "tconstruct:grip",
          "tconstruct:armor_plating",
          "tconstruct:plating_helmet",
          "tconstruct:plating_chestplate",
          "tconstruct:plating_leggings",
          "tconstruct:plating_boots",
          "tconstruct:plating_shield",
          "tconstruct:maille",
          "tconstruct:armor_maille",
          "tconstruct:shell"
        )
        .transformerType("tconstruct:recolor_sprite")
        .colorMapping("tconstruct:grey_to_color")
        .addPalette(0, "FF000000")
        .addPalette(63, "FF001944")
        .addPalette(102, "FF00296D")
        .addPalette(140, "FF0043A5")
        .addPalette(178, "FF186ACE")
        .addPalette(216, "FF338FEA")
        .addPalette(255, "FF59A6EF");
    }
  );
});
```

## 事件方法

<table><thead><tr>
  <td>方法</td>
  <td>說明</td>
</tr></thead><tbody><tr>
  <td>

```ts :no-line-numbers
addMaterialSprite(
  namespace: string, 
  material: string, 
  builder: (builder: MaterialColorBuilder) => void
): void
```

  </td>
  <td>添加材料顏色精靈圖</td>
</tr><tr>
  <td>

```ts :no-line-numbers
addMaterialSprite(
  material: string, 
  builder: (builder: MaterialColorBuilder) => void
): void
```

  </td>
  <td>添加材料顏色精靈圖（命名空間為 <code>kubejs</code>）</td>
</tr></tbody></table>

---

#### `addMaterialSprite`

```ts :no-line-numbers
addMaterialSprite(
  namespace: string, 
  material: string, 
  builder: (builder: MaterialColorBuilder) => void
): void

addMaterialSprite(
  material: string, 
  builder: (builder: MaterialColorBuilder) => void
): void
```

##### 參數

- `namespace: string` - 材料命名空間（默認命名空間為 `kubejs`）
- `material: string` - 材料名稱
- `builder: (builder: MaterialColorBuilder) => void` - 材料顏色構建器

::: details `MaterialColorBuilder`

<table><thead><tr>
  <td>方法</td>
  <td>說明</td>
</tr></thead><tbody><tr>
  <td>

```ts :no-line-numbers
color(color: string): MaterialColorBuilder
```

  </td>
  <td>設置材料顏色</td>
</tr><tr>
  <td>

```ts :no-line-numbers
fallback(fallback: string): MaterialColorBuilder
```

  </td>
  <td>設置材料顏色精靈圖的回退精靈圖</td>
</tr><tr>
  <td>

```ts :no-line-numbers
fallbacks(...fallbacks: string[]): MaterialColorBuilder
```

  </td>
  <td>設置材料顏色精靈圖的回退精靈圖（多個）</td>
</tr><tr>
  <td>

```ts :no-line-numbers
supportStat(stats: string): MaterialColorBuilder
```

  </td>
  <td>設置材料顏色精靈圖支持的材料屬性</td>
</tr><tr>
  <td>

```ts :no-line-numbers
supportStats(...stats: string[]): MaterialColorBuilder
```

  </td>
  <td>設置材料顏色精靈圖支持的材料屬性（多個）</td> 
</tr><tr>
  <td>

```ts :no-line-numbers
addPalette(gray: int, hexColor: string): MaterialColorBuilder
```

  </td>
  <td>添加材料顏色精靈圖的調色板</td>
</tr><tr>
  <td>

```ts :no-line-numbers
addPaletteFromArray(...palettes: String[]): MaterialColorBuilder
```

  </td>
  <td>添加材料顏色精靈圖的調色板（多個）</td>
</tr><tr>
  <td>

```ts :no-line-numbers
transformerType(type: string): MaterialColorBuilder
```

  </td>
  <td>設置材料顏色精靈圖的轉換器類型</td>
</tr><tr>
  <td>

```ts :no-line-numbers
colorMappingType(type: string): MaterialColorBuilder
```

  </td>
  <td>設置材料顏色精靈圖的顏色映射類型</td>
</tr><tr>
  <td>

```ts :no-line-numbers
extraTransformer(key: string, value: object)
```

  </td>
  <td>設置材料顏色精靈圖的額外轉換器</td>
</tr></tbody></table>