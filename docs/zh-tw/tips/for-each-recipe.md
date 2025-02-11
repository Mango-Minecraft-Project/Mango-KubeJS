---
title: forEachRecipe()
description: 使用 forEachRecipe() 來更改或添加新配方
---

這是一個如何使用 `.forEachRecipe()` 來更改或添加新配方的範例，使用現有的配方。

```js
ServerEvents.recipes((event) => {
  const { kubejs, minecraft } = event.recipes;

  // 有序合成，2x 半磚 → 1x 木材
  event.forEachRecipe({ type: "minecraft:crafting_shaped", output: "#minecraft:slabs" }, (recipe) => {
    let ingredients = recipe.originalRecipeIngredients; // 返回一個 List<Ingredient>
    let output = recipe.originalRecipeResult;           // 返回一個 ItemStack
    kubejs.shaped(ingredients[0], ["S", "S"], { S: output });
  });

  // 切石機，1x 樓梯 -> 1x 木板
  event.forEachRecipe({ type: "minecraft:stonecutting", output: "#minecraft:stairs" }, (recipe) => {
    let ingredients = recipe.originalRecipeIngredients;
    let output = recipe.originalRecipeResult;
    minecraft.stonecutting(ingredients[0], output);
  });

  // 將輸出從原木改為木板，從 4x 改為 2x（這將替換舊配方）
  event.forEachRecipe({ type: "minecraft:crafting_shapeless", input: "#minecraft:logs", output: "#minecraft:planks" }, (recipe) => {
    let ingredients = recipe.originalRecipeIngredients;
    let output = recipe.originalRecipeResult;
    kubejs.shapeless(Item.of(output.id, 2), ingredients[0]).id(recipe.getOrCreateId());
  })
})
```
