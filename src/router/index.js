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
    component: () => import("@/views/ProductDetails.vue"),
  },
  {
    path: "/authentication",
    name: "authentication",
    component: () => import("@/views/AuthenticationView.vue"),
  },
  {
    path: '/products/products-manage',
    name: 'productsManage',
    component: () => import('@/views/ProductManageView.vue'),
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
