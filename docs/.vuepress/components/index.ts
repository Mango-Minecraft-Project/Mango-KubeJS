import BadgeComponent from "./shields/index.js";
import ColorCode from "./ColorCode.vue";
import IconImage from "./IconImage.vue";
import Attachment from "./attachment/Attachment.vue";
import ModInfo from "./layout/AddonPage/ModInfo.vue";
import ArticleSource from "./layout/AddonPage/ArticleSource.vue";
import Http from "./badge/http/http.vue";
import TerrariaItemInfo from "./layout/TerrariaItem/TerrariaItemInfo.vue";

const alias = {
  Attach: Attachment,
};

export default {
  ...BadgeComponent,
  ColorCode,
  IconImage,
  Attachment,
  ModInfo,
  ArticleSource,
  Http,

  ...alias,

  TerrariaItemInfo,
};
