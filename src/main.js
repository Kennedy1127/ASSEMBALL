import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

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
  faEnvelope,
  faPhone,
  faCalendarDays,
  faFilePen,
  faCommentDots,
  faFileLines,
  faAddressCard,
  faArrowUpRightFromSquare
);

createApp(App)
  .use(store)
  .use(router)
  .component("font-awesome-icon", FontAwesomeIcon) //icon 設定
  .mount("#app");
