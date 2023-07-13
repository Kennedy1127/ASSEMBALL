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
<<<<<<< HEAD
    path: '/signin',
    name: 'signin',
    component: () => import('@/views/SigninView.vue'),
=======
    path: "/login",
    name: "login",
    component: () => import("@/views/LoginView.vue"),
    path: "/productsdetail",
    name: "productsdetail",
    component: () => import("@/views/ProductDetails.vue"),
>>>>>>> 441591bce27dc0764d41a124b0f5bfff9ad2193e
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
