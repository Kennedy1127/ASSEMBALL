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
    component: () => import("@/views/AuthenticationView.vue"),
  },
  {
    path: "/products",
    name: "Products",
    component: () => import("@/views/ProductsView.vue"),
  },
  {
    path: "/products/:id",
    name: "ProductDetail",
    component: () => import("@/views/ProductDetail.vue"),
  },
  {
    path: "/product-post", //url- 網址的文字
    name: "ProductPost",
    component: () => import("@/views/ProductPost.vue"), // 檔名
  },
  {
    path: "/products/products-manage",
    name: "ProductsManage",
    component: () => import("@/views/ProductManageView.vue"),
  },
  {
    path: "/recruitments",
    name: "Recruitments",
    component: () => import("@/views/recruitments/RecruitmentsView.vue"),
    beforeEnter: (to, from, next) => {
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
    path: "/rookie",
    name: "rookie",
    component: () => import("@/views/rookie.vue"),
  },
  {
    path: "/myplayer_team",
    name: "myplayer_team",
    component: () => import("@/views/MyPlayer_Team.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
