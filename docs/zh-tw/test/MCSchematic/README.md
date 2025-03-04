---
title: MCSchematic
---

::: details 目錄
<Catalog />
:::

```
https://www.mcschematic.top/api/
```

---

## Authentication

All authentication information is passed in the `Cookie` in headers.

- `Cookies: string`
  `uuid={uuid}; user_auth={user_auth}`
  - `uuid`: UUID of the user
  - `user_auth`: session token

## General

### <GET/> `schematics`

Get a list of schematics.

::: details Response Types
```ts
type Response = type schematicsData_ = {
  uuid: string;
  type: number;
  bgType: number;
  belong: number;
  heat: number;
  author: string;
  nickName: string;
  authority: number;
  avatarUrl: string;
  size: string;
  name: string;
  tags: string;
  description: string;
  userPrivate: number;
  updateTime: string;
  uploadTime: string;
  imgs: string;
  models: string;
}[];
```
:::

#### Parameters

- `begin: integer`: index of the first schematic
- `filter: string`: filter by schematic name
- `heatSort: boolean`: sort by heat
- `type: integer`: filter by schematic type
  - `0`: Public schematic
  - `1`: Preferred schematic

### <GET/> `mods`

Get a list of mods.

```ts
type Response = {
  data: {
    modId: String,
    version: String,
    displayName: String,
    description: String,
    blocks: String[]
  }[];
};
```

---

## `User`

### <GET/> `userSchematics` <Badge text="Authentication Required"/>

Get a list of user's schematics.

#### Parameters

- `begin: integer`: index of the first schematic
- `filter: string`: filter by schematic name
- `heatSort: boolean`: sort by heat

### <GET/> `collections` <Badge text="Authentication Required"/>

Get a list of user's collections.

#### Parameters

- `begin: integer`: index of the first schematic
- `filter: string`: filter by schematic name
- `heatSort: boolean`: sort by heat

### <GET/> `addUserCollections` <Badge text="Authentication Required"/>

Add a schematic to user's collections.

#### Parameters

- `uuid: string`: UUID of the schematic

### <GET/> `removeUserCollections` <Badge text="Authentication Required"/>

Remove a schematic from user's collections.

#### Parameters

- `uuid: string`: UUID of the schematic

---

## Information

### <GET/> `preview`

Get the preview of a schematic.

#### Parameters

- `uuid: string`: UUID of the schematic

### <GET/> `markdown`

Get the markdown of a schematic.

#### Parameters

- `uuid: string`: UUID of the schematic


### <GET/> `requirements`

Get the requirement blocks of a schematic.

#### Parameters

- `uuid: string`: UUID of the schematic

---

## Download

### <GET/> `schematicFile`

Get the schematic file.

#### Parameters

- `uuid: string`: UUID of the schematic


### <GET/> `modules/{uuid}.obj` <Badge text="Restful"/>

Get the OBJ file of a schematic.


### <GET/> `modules/{uuid}.mtl` <Badge text="Restful"/>

Get the MTL file of a schematic.


### <GET/> `MtlImages`

Get the block textures of a schematic.

#### Parameters

- `uuid: string`: UUID of the schematic


### <GET/> `convertSchematicFile`

Covert the schematic file to a different format.

#### Parameters

- `uuid: string`: UUID of the schematic
- `type: number`: type of the file
  - `0`: Vanilla Schematic / Create Schematic
  - `1`: Litematica Schematic
  - `2`: Building Gadgets Schematic
  - `3`: WorldEdit Schematic
- `bgType: number`: version of the Building Gadgets Schematic
  - `0`: 1.20+
  - `1`: 1.16+
  - `2`: 1.12+

---

<script setup>
import GET from "@components/badge/http/GET.vue";
</script>