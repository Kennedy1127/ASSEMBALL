import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ViewUIPlus from "view-ui-plus";
import "view-ui-plus/dist/styles/viewuiplus.css";

//icon 設定
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faTrashCan,
  faMagnifyingGlass,
  faChevronDown,
  faPaperclip,
  faChevronRight,
  faPlus,
  faPenToSquare,
  faChevronLeft,
  faArrowRight,
  faBell,
  faUser,
  faFlag,
  faBagShopping,
  faUserGroup,
  faMap,
  faCircleExclamation,
  faPen,
  faEnvelope,
  faPhone,
  faCalendarDays,
  faFilePen,
  faCommentDots,
  faFileLines,
  faAddressCard,
  faArrowUpRightFromSquare,
  faTriangleExclamation,
  faImage,
  faCirclePlus,
  faCircleArrowRight,
  faCircleXmark,
} from "@fortawesome/free-solid-svg-icons";

library.add(
  faTrashCan,
  faMagnifyingGlass,
  faChevronDown,
  faPaperclip,
  faChevronRight,
  faPlus,
  faPenToSquare,
  faChevronLeft,
  faArrowRight,
  faBell,
  faUser,
  faFlag,
  faBagShopping,
  faUserGroup,
  faMap,
  faCircleExclamation,
  faPen,
  faPhone,
  faCalendarDays,
  faFilePen,
  faCommentDots,
  faFileLines,
  faAddressCard,
  faArrowUpRightFromSquare,
  faEnvelope,
  faTriangleExclamation,
  faImage,
  faCirclePlus,
  faCircleArrowRight,
  faCircleXmark
);

createApp(App)
  .use(store)
  .use(router)
  .component("font-awesome-icon", FontAwesomeIcon) //icon 設定
  .use(ViewUIPlus)
  .mount("#app");
