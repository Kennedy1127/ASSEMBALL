import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ViewUIPlus from "view-ui-plus";
import "view-ui-plus/dist/styles/viewuiplus.css";
import VCalendar from "v-calendar";
import "v-calendar/style.css";

// Use plugin with optional defaults

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
  faArrowLeft,
  faBell,
  faUser,
  faFlag,
  faBagShopping,
  faUserGroup,
  faMap,
  faCircleExclamation,
  faPaperPlane,
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
  faAngleDown,
  faAngleUp,
  faAngleLeft,
  faCircleArrowRight,
  faCircleXmark,
  faCircleChevronUp,
  faCircleChevronDown,
  faCircleCheck,
  faEye,
  faEyeSlash,
  faHouse,
  faXmark,
  faCheck,
  faRotateRight
} from "@fortawesome/free-solid-svg-icons";

import {
  faFacebook,
  faLine,
  faGoogle,
} from "@fortawesome/free-brands-svg-icons";

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
  faArrowLeft,
  faCircleExclamation,
  faPaperPlane,
  faPen,
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
  faAngleDown,
  faAngleUp,
  faAngleLeft,
  faCircleArrowRight,
  faCircleXmark,
  faCircleChevronUp,
  faCircleChevronDown,
  faCircleCheck,
  faEye,
  faEyeSlash,
  faHouse,
  faFacebook,
  faLine,
  faGoogle,
  faXmark,
  faCheck,
  faRotateRight
);

// firebase 狀態觀察設定
import { auth } from "@/firebase/config";
import { onAuthStateChanged } from "firebase/auth";

// createApp(App)
// .use(store)
// .use(router)
// .component("font-awesome-icon", FontAwesomeIcon) //icon 設定
// .use(ViewUIPlus)
// .use(VCalendar, {})
// .mount("#app");

let app;

onAuthStateChanged(auth, (user) => {
  // console.log(user);

  if (!app) {
    app = createApp(App)
      .use(store)
      .use(router)
      .component("font-awesome-icon", FontAwesomeIcon) //icon 設定
      .use(ViewUIPlus)
      .use(VCalendar, {})
      .mount("#app");
  }
});
