import { createRouter, createWebHistory } from "vue-router";
import store from "@/store/index";

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("@/views/HomeView.vue"),
  },
  {
    path: "/authentication",
    name: "Authentication",
    component: () => import("@/views/authentications/AuthenticationView.vue"),
  },
  {
    path: "/auth-logIn",
    name: "LogIn",
    component: () => import("@/views/authentications/LogInView.vue"),
  },
  {
    path: "/auth-psw-forgot",
    name: "psw-forgot",
    component: () => import("@/views/authentications/PswForgotView.vue"),
  },
  {
    path: "/auth-psw-reset",
    name: "psw-reset",
    component: () => import("@/views/authentications/PswResetView.vue"),
  },

  /////////////////////////////////////////
  {
    path: "/products",
    name: "Products",
    component: () => import("@/views/products/ProductsView.vue"),
  },
  {
    path: "/products/:id",
    name: "ProductDetail",
    component: () => import("@/views/products/ProductDetail.vue"),
  },
  {
    path: "/product-post", //url- 網址的文字
    name: "ProductPost",
    component: () => import("@/views/products/ProductPost.vue"), // 檔名
  },
  {
    path: "/products/products-manage",
    name: "ProductsManage",
    component: () => import("@/views/products/ProductManageView.vue"),
  },
  /////////////////////////////////////////
  {
    path: "/recruitments",
    name: "Recruitments",
    component: () => import("@/views/recruitments/RecruitmentsView.vue"),
    beforeEnter: (to, from, next) => {
      if (from.name === "Copywriting") {
        next();
        return;
      }
      store.commit("resetCopywritingsCurPage");
      store.commit("resetFiltersAndSearch");
      next();
    },
  },
  {
    path: "/recruitments/copywriting/:id",
    name: "Copywriting",
    component: () => import("@/views/recruitments/CopywritingView.vue"),
  },
  {
    path: "/recruitments/recruitment-post",
    name: "recruitmentPost",
    component: () =>
      import("@/views/recruitments/backside/RecruitmentPostView.vue"),
  },
  {
    path: "/recruitments/recruitment-manage",
    name: "recruitmentManage",
    component: () =>
      import("@/views/recruitments/backside/RecruitmentManageView.vue"),
  },
  {
    path: "/recruitments/recruitment-verify",
    name: "recruitmentVerify",
    component: () =>
      import("@/views/recruitments/backside/RecruitmentVerifyView.vue"),
  },
  {
    path: "/recruitments/recruitment-verify-detail",
    name: "recruitmentVerifyDetail",
    component: () =>
      import("@/views/recruitments/backside/RecruitmentVerifyDetailView.vue"),
  },
  {
    path: "/recruitments/recruitment-history",
    name: "recruitmentHistory",
    component: () =>
      import("@/views/recruitments/backside/RecruitmentHistoryView.vue"),
  },
  /////////////////////////////////////////
  {
    path: "/myplayer_team",
    name: "myplayer_team",
    component: () => import("@/views/MyPlayer_Team.vue"),
  },
  /////////////////////////////////////////
  {
    path: "/rookie",
    name: "rookie",
    component: () => import("@/views/rookie.vue"),
  },
  {
    path: "/rookie/rookieListCurve",
    name: "rookieListCurve",
    component: () => import("@/views/rookieListCurve.vue"),
  },
  /////////////////////////////////////////
  {
    path: "/Backstage",
    name: "Backstage",
    component: () => import("@/views/Backstage.vue"),
  },
  /////////////////////////////////////////
  {
    path: "/MemberCenter-Order",
    name: "MemberCenterOrder",
    component: () => import("@/views/memberCenter/MemberCenterOrder.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to, from) {
    if (from.name === "Copywriting" && to.name === "Recruitments") {
      return { top: Number(from.query.h) };
    }
    return { top: 0 };
  },
});

router.beforeEach(() => {
  // 在每次路由跳轉前關閉通知、會員頁面
  store.state.isNotifyVisible = 0;
  store.state.isMemberVisible = 0;
  store.state.isPersonalVisible = 0;
});

export default router;
