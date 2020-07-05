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
        path: '/',
        name: 'n1',
        component: () => import('@/views/courses/First')
      },
      {
        path: ':id',
        name: 'n1-detail',
        component: () => import('@/views/courses/n1/lessons/Index')
      }
    ]
  },
  {
    path: '/courses/n2',
    component: () => import('@/views/courses/n2/Index'),
    children: [
      {
        path: '/',
        name: 'n2',
        component: () => import('@/views/courses/First')
      },
      {
        path: ':id',
        name: 'n2-detail',
        component: () => import('@/views/courses/n2/lessons/Index')
      }
    ]
  },
  {
    path: '/courses/n3',
    component: () => import('@/views/courses/n3/Index'),
    children: [
      {
        path: '/',
        name: 'n3',
        component: () => import('@/views/courses/First')
      },
      {
        path: ':id',
        name: 'n3-detail',
        component: () => import('@/views/courses/n3/lessons/Index')
      }
    ]
  },
  {
    path: '/courses/n4',
    component: () => import('@/views/courses/n4/Index'),
    children: [
      {
        path: '/',
        name: 'n4',
        component: () => import('@/views/courses/First')
      },
      {
        path: ':id',
        name: 'n4-detail',
        component: () => import('@/views/courses/n4/lessons/Index')
      }
    ]
  },
  {
    path: '/courses/n5',
    component: () => import('@/views/courses/n5/Index'),
    children: [
      {
        path: '/',
        name: 'n5',
        component: () => import('@/views/courses/First')
      },
      {
        path: ':id',
        name: 'n5-detail',
        component: () => import('@/views/courses/n5/lessons/Index')
      }
    ]
  },
  {
    path: '/courses/hiragana',
    component: () => import('@/views/courses/hiragana/Index'),
    children: [
      {
        path: '/',
        name: 'detail-hiragana',
        component: () => import('@/views/courses/First')
      },
    ]
  },
  {
    path: '/courses/katakana',
    component: () => import('@/views/courses/katakana/Index'),
    children: [
      {
        path: '/',
        name: 'detail-katakana',
        component: () => import('@/views/courses/First')
      },
    ]
  },
  {
    path: '/word-research',
    name: 'WordResearch',
    component: () => import('@/views/word-research/Index')
  },
  {
    path: '/list-of-posts',
    component: () => import('@/views/list-of-posts/Index'),
    children: [
      {
        path: '/',
        component: () => import('@/views/list-of-posts/First')
      },
      {
        path: ':id',
        component: () => import('@/views/list-of-posts/Detail')
      }
    ]
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
