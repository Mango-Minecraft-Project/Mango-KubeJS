<template>
  <img :src="src" class="icon-image" />
</template>

<style scoped>
.icon-image {
  height: 1em;
}
</style>

<script lang="ts">
enum URL_PREFIX {
  WIKI = "https://minecraft.wiki/images/",
}

enum PRESET {
  SWORD = URL_PREFIX.WIKI + "ItemSprite_iron-sword.png",
  PICKAXE = URL_PREFIX.WIKI + "ItemSprite_iron-pickaxe.png",
  AXE = URL_PREFIX.WIKI + "ItemSprite_iron-axe.png",
  SHOVEL = URL_PREFIX.WIKI + "ItemSprite_iron-shovel.png",
  HOE = URL_PREFIX.WIKI + "ItemSprite_iron-hoe.png",
  HELMET = URL_PREFIX.WIKI + "ItemSprite_iron-helmet.png",
  CHESTPLATE = URL_PREFIX.WIKI + "ItemSprite_iron-chestplate.png",
  LEGGINGS = URL_PREFIX.WIKI + "ItemSprite_iron-leggings.png",
  BOOTS = URL_PREFIX.WIKI + "ItemSprite_iron-boots.png",
  SHIELD = URL_PREFIX.WIKI + "ItemSprite_shield.png",
  BOW = URL_PREFIX.WIKI + "ItemSprite_bow.png",
  CROSSBOW = URL_PREFIX.WIKI + "ItemSprite_crossbow.png",
  TRIDENT = URL_PREFIX.WIKI + "ItemSprite_trident.png",
  FISHING_ROD = URL_PREFIX.WIKI + "ItemSprite_fishing-rod.png",
  FLINT_AND_STEEL = URL_PREFIX.WIKI + "ItemSprite_flint-and-steel.png",
  SHEARS = URL_PREFIX.WIKI + "ItemSprite_shears.png",
  COMPASS = URL_PREFIX.WIKI + "ItemSprite_compass.png",
  CLOCK = URL_PREFIX.WIKI + "ItemSprite_clock.png",
}

export default {
  props: {
    src: String,
    preset: String,
  },
  computed: {
    src() {
      return PRESET[this.preset] ?? this.src;
    },
  },
};
</script>
