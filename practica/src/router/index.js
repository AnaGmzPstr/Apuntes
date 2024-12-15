import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    /* {
      path: '/',
      name: 'home',
      component: HomeView,
    }, */
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
    }
  ],
})

export default router
