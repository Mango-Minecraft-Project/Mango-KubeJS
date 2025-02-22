import BadgeComponent from "./shields/index.js";
import ColorCode from "./ColorCode.vue";
import IconImage from "./IconImage.vue";
import Attachment from "./Attachment.vue";
import ModInfo from "./layout/ModInfo.vue";
import ArticleSource from "./layout/ArticleSource.vue";

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

  ...alias,
};
