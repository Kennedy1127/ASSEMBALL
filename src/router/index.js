import { createRouter, createWebHistory } from "vue-router";
import store from "@/store/index";
import { auth } from "@/firebase/config";
import getData from "@/composables/data/getData";

const { getDocument, getUser } = getData();

const routes = [
  {
    path: "/",
    name: "test",
    component: () => import("@/views/test.vue"),
  },
  {
    path: "/homeloading",
    name: "HomeLoading",
    component: () => import("@/views/HomeLoading.vue"),
  },
  {
    path: "/home",
    name: "Home",
    component: () => import("@/views/HomeView.vue"),
  },
  {
    path: "/register",
    name: "Register",
    component: () => import("@/views/authentications/RegisterView.vue"),
    beforeEnter: () => {
      if (store.state.isLoggedIn) return { name: "Home" };
    },
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("@/views//authentications/LogInView.vue"),
    beforeEnter: () => {
      if (store.state.isLoggedIn) return { name: "Home" };
    },
  },
  {
    path: "/forgot-password",
    name: "ForgotPassword",
    component: () => import("@/views/authentications/ForgotPasswordView.vue"),
    beforeEnter: () => {
      if (store.state.isLoggedIn) return { name: "Home" };
    },
  },
  {
    path: "/reset-password",
    name: "ResetPassword",
    component: () => import("@/views/authentications/ResetPasswordView.vue"),
    beforeEnter: () => {
      if (store.state.isLoggedIn) return { name: "Home" };
    },
  },
  /////////////////////////////////////////
  {
    path: "/products",
    name: "Products",
    component: () => import("@/views/products/ProductsView.vue"),
    beforeEnter: (to, from, next) => {
      if (from.name === "ProductDetail") {
        next();
        return;
      }
      store.commit("resetPaginationCurPage");
      store.commit("resetProductsFilterAndTag");
      next();
    },
  },
  {
    path: "/products/:productId",
    name: "ProductDetail",
    component: () => import("@/views/products/ProductDetail.vue"),
  },
  {
    path: "/products/product-post", //url- 網址的文字
    name: "ProductPost",
    component: () => import("@/views/products/ProductPost.vue"), // 檔名
    beforeEnter: () => {
      if (!store.state.isLoggedIn || !auth.currentUser) return { name: "Home" };
    },
  },
  {
    path: "/products/products-manage",
    name: "ProductsManage",
    component: () => import("@/views/products/ProductManageView.vue"),
    beforeEnter: () => {
      if (!store.state.isLoggedIn || !auth.currentUser) return { name: "Home" };
    },
  },
  {
    path: "/products/products-payment",
    name: "ProductPayment",
    component: () => import("@/views/products/ProductPayment.vue"),
    beforeEnter: (to, from, next) => {
      if (!store.state.isLoggedIn) {
        alert("請先登入才可以進行購買喔！");
        next({ name: "Login" }); // 導向到 Login 頁面
      } else {
        next();
      }
    },
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
      store.commit("resetPaginationCurPage", "copywritings");
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
    beforeEnter: async () => {
      if (!store.state.isLoggedIn || !auth.currentUser) return { name: "Home" };
      const user = await getUser();
      if (!user.team_id) return { name: "Home" };
      const team = await getDocument("TEAMS", user.team_id);
      if (team.user_id !== user.id) return { name: "Home" };
    },
  },
  {
    path: "/recruitments/recruitment-manage",
    name: "recruitmentManage",
    component: () =>
      import("@/views/recruitments/backside/RecruitmentManageView.vue"),
    beforeEnter: async (to, from, next) => {
      if (!store.state.isLoggedIn || !auth.currentUser) next({ name: "Home" });
      const user = await getUser();
      if (!user.team_id) next({ name: "Home" });
      const team = await getDocument("TEAMS", user.team_id);
      if (team.user_id !== user.id) next({ name: "Home" });

      store.commit("resetPaginationCurPage");
      store.commit("resetFilters");
      next();
    },
  },
  {
    path: "/recruitments/recruitment-verify",
    name: "recruitmentVerify",
    component: () =>
      import("@/views/recruitments/backside/RecruitmentVerifyView.vue"),
    beforeEnter: async (to, from, next) => {
      if (!store.state.isLoggedIn || !auth.currentUser) next({ name: "Home" });
      const user = await getUser();
      if (!user.team_id) next({ name: "Home" });
      const team = await getDocument("TEAMS", user.team_id);
      if (team.user_id !== user.id) next({ name: "Home" });

      store.commit("resetPaginationCurPage");
      store.commit("resetFilters");
      next();
    },
  },
  {
    path: "/recruitments/recruitment-verify-detail",
    name: "recruitmentVerifyDetail",
    component: () =>
      import("@/views/recruitments/backside/RecruitmentVerifyDetailView.vue"),
    beforeEnter: async () => {
      if (!store.state.isLoggedIn || !auth.currentUser) return { name: "Home" };
      const user = await getUser();
      if (!user.team_id) return { name: "Home" };
      const team = await getDocument("TEAMS", user.team_id);
      if (team.user_id !== user.id) return { name: "Home" };
    },
  },
  {
    path: "/recruitments/recruitment-history",
    name: "recruitmentHistory",
    component: () =>
      import("@/views/recruitments/backside/RecruitmentHistoryView.vue"),
    beforeEnter: async () => {
      if (!store.state.isLoggedIn || !auth.currentUser) return { name: "Home" };
      const user = await getUser();
      if (!user.team_id) return { name: "Home" };
      const team = await getDocument("TEAMS", user.team_id);
      if (team.user_id !== user.id) return { name: "Home" };
    },
  },
  /////////////////////////////////////////
  {
    path: "/myplayerTeam/:id",
    name: "myplayerTeam",
    component: () => import("@/views/MyPlayerTeam.vue"),
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
    path: "/BackstageLogin",
    name: "BackstageLogin",
    component: () => import("@/views/BackstageLogin.vue"),
  },
  {
    path: "/Backstage",
    name: "Backstage",
    component: () => import("@/views/Backstage.vue"),
  },
  {
    path: "/MyplayerGallery/:id",
    name: "MyplayerGallery",
    component: () => import("@/views/MyPlayerGallery.vue"),
  },
  /////////////////////////////////////////
  {
    path: "/MemberCenter-Order",
    name: "MemberCenterOrder",
    component: () => import("@/views/memberCenter/MemberCenterOrder.vue"),
  },
  {
    path: "/MemberCenter-Createteam",
    name: "MemberCenterCreateteam",
    component: () => import("@/views/memberCenter/MemberCenterCreateteam.vue"),
  },
  {
    path: "/MemberCenter-Application",
    name: "MemberCenterApplication",
    component: () => import("@/views/memberCenter/MemberCenterApplication.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to, from) {
    if (from.name === "ProductDetail" && to.name === "Products") {
      return { top: Number(from.query.h) };
    }

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
  store.state.myplayerEditOpen = 0;
});

export default router;
