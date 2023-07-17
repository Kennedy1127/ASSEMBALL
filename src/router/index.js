import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("@/views/HomeView.vue"),
  },
  {
    path: "/authentication",
    name: "authentication",
    component: () => import("@/views/AuthenticationView.vue"),
  },
  {
    path: "/products",
    name: "products",
    component: () => import("@/views/ProductsView.vue"),
  },
  {
    path: "/products/:id",
    name: "productDetail",
    component: () => import("@/views/ProductDetail.vue"),
  },
  {
    path: "/product-post", //url- 網址的文字
    name: "productPost",
    component: () => import("@/views/ProductPost.vue"), // 檔名
  },
  {
    path: "/products/products-manage",
    name: "productsManage",
    component: () => import("@/views/ProductManageView.vue"),
  },
  {
    path: "/recruitment",
    name: "recruitment",
    component: () => import("@/views/recruitment/RecruitmentView.vue"),
  },
  {
    path: "/rookie",
    name: "rookie",
    component: () => import("@/views/rookie.vue"),
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
