import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export const routes = [
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/login/Index')
  }
];

const createRouter = () => new Router({
  mode: 'history',
  scrollBehavior: () => ({
    y: 0
  }),
  routes: routes,
});

const router = createRouter();

export default router;