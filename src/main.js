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
  faCircleExclamation,
  faPaperPlane,
  faPen,
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
  faCircleExclamation,
  faPaperPlane,
  faPen
);

createApp(App)
  .use(store)
  .use(router)
  .component("font-awesome-icon", FontAwesomeIcon) //icon 設定
  .use(ViewUIPlus)
  .mount("#app");
