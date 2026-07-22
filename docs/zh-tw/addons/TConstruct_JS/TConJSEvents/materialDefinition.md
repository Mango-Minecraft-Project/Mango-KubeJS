---
title: TConJSEvents.materialDefinition
shortTitle: materialDefinition
isOriginal: true
layout: AddonPage
mod:
  ref: "../README.md"
---

```ts title="<ServerSide/>"
TConJSEvents.materialDefinition(handler: (event: MaterialDefinitionEventJS) => void)
```

---

## 基本語法

```js
TConJSEvents.materialDefinition((event) => {
  event.addMaterialData(
    "tconstruct",
    "cobalt",
    (definition) => {
      definition
        .craftable(false)
        .hidden(false)
        .sortOrder(10)
        .tier(3);
    },
    (stats) => {
      stats
        .binding()
        .maille()
        .head(800, 2.25, 6.5, "minecraft:diamond")
        .handle(0.05, 0.0, 0.05, 0.05)
        .grip(0.05, 0.05, 2.25)
        .limb(0.05, 0.05, 800, 0.05)
        .platingHelmet(2.0, 330, 1.0, 0.05)
        .platingChestplate(7.0, 480, 1.0, 0.05)
        .platingLeggings(5.0, 450, 1.0, 0.05)
        .platingBoots(2.0, 390, 1.0, 0.05)
        .platingShield(540, 1.0, 0.05);
    },
    (traits) => {
      traits
        .add("tconstruct:lightweight", 1)
        .perStat("tconstruct:armor", "tconstruct:melee_protection", 1);
    },
    (smltingRecipe) => {
      smltingRecipe
        .fluid("#forge:molten_cobalt")
        .amount(90)
        .temperature(950)
    }
  );
});
```

## 事件方法

<table><thead><tr>
  <th>方法</th>
  <th>說明</th>
</tr></thead><tbody><tr>
  <td>

```ts :no-line-numbers
addMaterialData(
  namespace: string,
  materialName: string,
  definition: (definition: MaterialDefinitionBuilder) => void,
  stats: (stats: MaterialStatsBuilder) => void,
  traits: (traits: MaterialTraitsBuilder) => void,
  smeltingRecipe: (smeltingRecipe: MaterialSmeltingRecipeBuilder) => void
)
```

  </td>
  <td>添加材料資料</td>
  </tr>

</tbody></table>

---

#### `addMaterialData`

```ts :no-line-numbers
addMaterialData(
  namespace: string,
  materialName: string,
  definition: (definition: MaterialDefinitionBuilder) => void,
  stats: (stats: MaterialStatsBuilder) => void,
  traits: (traits: MaterialTraitsBuilder) => void,
  smeltingRecipe: (smeltingRecipe: MaterialSmeltingRecipeBuilder) => void
)

addMaterialData(
  materialName: string,
  definition: (definition: MaterialDefinitionBuilder) => void,
  stats: (stats: MaterialStatsBuilder) => void,
  traits: (traits: MaterialTraitsBuilder) => void,
  smeltingRecipe: (smeltingRecipe: MaterialSmeltingRecipeBuilder) => void
)
```

##### 參數

- `namespace: string` - 材料命名空間（默認命名空間為 `kubejs`）
- `materialName: string` - 材料名稱
- `definition: (definition: MaterialDefinitionBuilder) => void` - 材料定義構建器
- `stats: (stats: MaterialStatsBuilder) => void` - 材料�
- `traits: (traits: MaterialTraitsBuilder) => void` - 材料特性構建器
- `smeltingRecipe: (smeltingRecipe: MaterialSmeltingRecipeBuilder) => void` - 材料熔煉配方構建器

<!--@include:./_materialDefinition/MaterialDefinitionBuilder.md-->
<!--@include:./_materialDefinition/MaterialStatsBuilder.md-->
<!--@include:./_materialDefinition/MaterialTraitsBuilder.md-->
<!--@include:./_materialDefinition/MaterialSmeltingRecipeBuilder.md-->
