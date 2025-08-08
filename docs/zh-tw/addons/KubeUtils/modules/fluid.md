---
title: 流體（靜態）
---

## 方法

### `getFluidsByNamespace(namespace: string)`

此方法會根據輸入的命名空間取得流體列表。命名空間可以設為 null，但如果如此，將會回傳 null。

`@return null | net.minecraft.world.level.material.Fluid[]`

```javascript
const fluids = Ku.Fluids.getFluidsByNamespace("minecraft")
console.log(fluids) // [Fluid.WATER, Fluid.LAVA]
```

### `getFluidsByNamespaces(namespaces: string[])`

此方法與上方方法類似，但可以查詢多個命名空間。

這裡的命名空間指的是 modid 或 minecraft。

`@return net.minecraft.world.level.material.Fluid[]`

```javascript
const fluids = Ku.Fluids.getFluidsByNamespaces(["minecraft", "thermal"])
console.log(fluids) // [Fluid.WATER, Fluid.LAVA, Fluid.CREOSOTE]（範例回應）
```

### `notEmpty(fluid: net.minecraft.world.level.material.Fluid)`

此方法會檢查流體是否**不是**空的。

`@return boolean`

### `isEmpty(fluid: net.minecraft.world.level.material.Fluid)`

此方法為上方方法的輔助方法，用來判斷流體是否為空。

`@return boolean`