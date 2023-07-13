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
    path: '/signin',
    name: 'signin',
    component: () => import('@/views/SigninView.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
