import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      props: true,
    },
    {
      path: '/profile',
      name: 'profile',
      component: () => import('@/views/ProfileView.vue'),
      props: true,
    },
    {
      path: '/chart',
      name: 'chart',
      component: () => import('@/views/ChartView.vue'),
      props: true,
    },
    {
      path: '/detail',
      name: 'detail',
      component: () => import('@/views/DetailView.vue'),
      props: true,
    },
    {
      path: '/setting',
      name: 'setting',
      component: () => import('@/views/SettingView.vue'),
      props: true,
    },
  ],
})

export default router
