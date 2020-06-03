import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/home/Index')
  },
  {
    path: '/courses/n1',
    component: () => import('@/views/courses/n1/Index'),
    children: [
      {
        path: '',
        component: () => import('@/views/courses/n1/lessons/Index')
      },
      {
        path: ':id',
        component: () => import('@/views/courses/n1/lessons/Index')
      }
    ]
  },
  {
    path: '/courses/n2',
    component: () => import('@/views/courses/n2/Index'),
    children: [
      {
        path: '',
        component: () => import('@/views/courses/n2/lessons/Index')
      },
      {
        path: ':id',
        component: () => import('@/views/courses/n2/lessons/Index')
      }
    ]
  },
  {
    path: '/courses/n3',
    component: () => import('@/views/courses/n3/Index'),
    children: [
      {
        path: '',
        component: () => import('@/views/courses/n3/lessons/Index')
      },
      {
        path: ':id',
        component: () => import('@/views/courses/n3/lessons/Index')
      }
    ]
  },
  {
    path: '/courses/n4',
    component: () => import('@/views/courses/n4/Index'),
    children: [
      {
        path: '',
        component: () => import('@/views/courses/n4/lessons/Index')
      },
      {
        path: ':id',
        component: () => import('@/views/courses/n4/lessons/Index')
      }
    ]
  },
  {
    path: '/courses/n5',
    component: () => import('@/views/courses/n5/Index'),
    children: [
      {
        path: '',
        component: () => import('@/views/courses/n5/lessons/Index')
      },
      {
        path: ':id',
        component: () => import('@/views/courses/n5/lessons/Index')
      }
    ]
  },
  {
    path: '/word-research',
    name: 'WordResearch',
    component: () => import('@/views/word-research/Index')
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