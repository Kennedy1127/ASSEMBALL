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
    path: "/productsdetail",
    name: "productDetail",
    component: () => import("@/views/ProductsDetails.vue"),
  },
  {
    path: "/authentication",
    name: "authentication",
    component: () => import("@/views/AuthenticationView.vue"),
  },
  {
    path: "/products/products-manage",
    name: "productsManage",
    component: () => import("@/views/ProductManageView.vue"),
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
