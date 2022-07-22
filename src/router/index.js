import { createRouter, createWebHistory } from 'vue-router';
// import HomeView from '../pages/HomeView.vue';
import MainPage from '../pages/MainPage/MainPage.vue';
import CasesPage from '@/pages/CasesPage/CasesPage.vue';

const routes = [
  {
    path: '/',
    name: 'cases',
    component: CasesPage,
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '@/pages/AboutView.vue'),
  },
  {
    path: '/main',
    name: 'main',
    component: MainPage,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
