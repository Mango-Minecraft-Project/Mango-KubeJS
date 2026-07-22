import ColorCode from "./ColorCode.vue";
import ItemIcon from "./ItemIcon.vue";
import IconImage from "./IconImage.vue";
import Attachment from "./attachment/Attachment.vue";
import Http from "./badge/http/http.vue";
import Side from "./badge/side/index.js";
import ArticleSource from "./layout/AddonPage/ArticleSource.vue";
import ModInfo from "./layout/AddonPage/ModInfo.vue";
import BadgeComponent from "./shields/index.js";

const alias = {
  Attach: Attachment,
};

export default {
  ...BadgeComponent,
  ColorCode,
  ItemIcon,
  IconImage,
  Attachment,
  ModInfo,
  ArticleSource,
  Http,
  ...Side,

  ...alias,
};
