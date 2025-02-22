<template>
  <img :src="src" class="icon-image" />
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  src: {
    type: String,
    required: false,
  },
  preset: {
    type: String,
    required: false,
  },
});

const urlPrefix = {
  wiki: "https://minecraft.wiki/images/",
};

const presets = {
  sword: urlPrefix.wiki + "ItemSprite_iron-sword.png",
  pickaxe: urlPrefix.wiki + "ItemSprite_iron-pickaxe.png",
  axe: urlPrefix.wiki + "ItemSprite_iron-axe.png",
  shovel: urlPrefix.wiki + "ItemSprite_iron-shovel.png",
  hoe: urlPrefix.wiki + "ItemSprite_iron-hoe.png",
  helmet: urlPrefix.wiki + "ItemSprite_iron-helmet.png",
  chestplate: urlPrefix.wiki + "ItemSprite_iron-chestplate.png",
  leggings: urlPrefix.wiki + "ItemSprite_iron-leggings.png",
  boots: urlPrefix.wiki + "ItemSprite_iron-boots.png",
  shield: urlPrefix.wiki + "ItemSprite_shield.png",
  bow: urlPrefix.wiki + "ItemSprite_bow.png",
  crossbow: urlPrefix.wiki + "ItemSprite_crossbow.png",
  trident: urlPrefix.wiki + "ItemSprite_trident.png",
  fishing_rod: urlPrefix.wiki + "ItemSprite_fishing-rod.png",
  flint_and_steel: urlPrefix.wiki + "ItemSprite_flint-and-steel.png",
  shears: urlPrefix.wiki + "ItemSprite_shears.png",
  compass: urlPrefix.wiki + "ItemSprite_compass.png",
  clock: urlPrefix.wiki + "ItemSprite_clock.png",
};

const src = computed(() => {
  return props.preset ? presets[props.preset] : props.src;
});
</script>

<style scoped>
.icon-image {
  height: 1em;
}
</style>
