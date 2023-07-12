import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/HomeView.vue'),
  },
  {
    path: '/products',
    name: 'products',
    component: () => import('@/views/ProductsView.vue'),
  },
  {
<<<<<<< HEAD
    path: '/login',
    name: 'login',
    component: () => import('@/views/LoginView.vue'),
=======
    path: '/productsdetail',
    name: 'productsdetail',
    component: () => import('@/views/ProductDetails.vue'),
>>>>>>> db83cc1c6a3193fc03a76ec82fe5381e26426a21
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
