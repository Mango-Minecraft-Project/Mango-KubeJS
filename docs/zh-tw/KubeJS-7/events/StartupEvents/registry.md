---
title: StartupEvents.registry
shortTitle: registry
article: false
timeline: false
---

```ts
function registry(type: "attribute", handler: (event: $Attribute) => void): void
function registry(type: "item", handler: (event: $Item) => void): void
function registry(type: "particle_type", handler: (event: $ParticleType) => void): void
function registry(type: "fluid", handler: (event: $Fluid) => void): void
function registry(type: "neoforge:fluid_type", handler: (event: $FluidType) => void): void
function registry(type: "custom_stat", handler: (event: $CustomStat) => void): void
function registry(type: "potion", handler: (event: $Potion) => void): void
function registry(type: "villager_type", handler: (event: $VillagerType) => void): void
function registry(type: "sound_event", handler: (event: $SoundEvent) => void): void
function registry(type: "block", handler: (event: $Block) => void): void
function registry(type: "armor_material", handler: (event: $ArmorMaterial) => void): void
function registry(type: "mob_effect", handler: (event: $MobEffect) => void): void
function registry(type: "creative_mode_tab", handler: (event: $CreativeModeTab) => void): void
function registry(type: "point_of_interest_type", handler: (event: $PointOfInterestType) => void): void
function registry(type: "villager_profession", handler: (event: $VillagerProfession) => void): void
```