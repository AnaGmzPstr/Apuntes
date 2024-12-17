import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/components/Home.vue'),
    },
    {
      path: '/provInject',
      name: 'provInject',
      component: () => import('../views/provInjectView.vue'),
    },
    {
      path: '/watch',
      name: 'watch',
      component: () => import('../views/watchView.vue'),
    },
    {
      path: '/computed',
      name: 'computed',
      component: () => import('../views/computedView.vue'),
    },
    {
      path: '/json',
      name: 'json',
      component: () => import('../views/jsonView.vue'),
    },
    {
      path: '/propsEmit',
      name: 'propsEmit',
      component: () => import('../views/propsEmitView.vue'),
    },
  ],
})

export default router
