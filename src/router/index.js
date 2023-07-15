import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("@/views/HomeView.vue"),
  },
  {
    path: "/products",
    name: "products",
    component: () => import("@/views/ProductsView.vue"),
  },
  {
    path: "/product-detail",
    name: "productDetail",
    component: () => import("@/views/ProductsDetails.vue"),
  },
  {
    path: "/authentication",
    name: "authentication",
    component: () => import("@/views/AuthenticationView.vue"),
  },
  {
    path: "/product-post", //url- 網址的文字
    name: "productPost",
    component: () => import("@/views/ProductPost.vue"), // 檔名
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
