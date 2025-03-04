<template>
  <SiteInfo
    v-for="data in schematicData"
    :name="data.name"
    :desc="data.description"
    :logo="data.avatarUrl"
    :url="'https://www.mcschematic.top/home/' + data.uuid"
    :preview="'https://www.mcschematic.top/api/preview?uuid=' + data.uuid"
  />
  <!-- <VPBanner
    v-for="data in schematicData"
    :title="data.name"
    :content="data.description"
    :logo="data.avatarUrl"
    :background='"https://www.mcschematic.top/api/preview?uuid=" + data.uuid'
    :action='[
      {
        text: "前往",
        link: "https://www.mcschematic.top/home/" + data.uuid,
      },
      {
        text: "下載",
        link: "https://www.mcschematic.top/api/schematicFile?uuid=" + data.uuid,
        type: "default",
      }
    ]'
  /> -->
</template>

<script lang="ts">
type schematicsData_ = {
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
  updateTime: Date;
  uploadTime: Date;
  imgs: string;
  models: string;
};

const URL = "https://www.mcschematic.top/api/schematics?";

export default {
  props: {
    params: String,
  },
  data(): { schematicData: schematicsData_[] | null; loading: boolean; error: string | null } {
    return {
      schematicData: null,
      loading: true,
      error: null,
    };
  },
  created() {
    this.fetchData();
  },
  methods: {
    async fetchData() {
      try {
        let url = URL + this.params;
        console.log(url);
        const response = await fetch(url);
        this.schematicData = JSON.parse(await response.text());
      } catch (error) {
        this.error = "Failed to fetch data";
      } finally {
        this.loading = false;
      }
    },
  },
};
</script>
