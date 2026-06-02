import { createRouter, createWebHistory } from 'vue-router'
import DefaultLayout from '../layouts/DefaultLayout.vue'

const routes = [
  {
    path: '/',
    component: DefaultLayout,
    children: [
      {
        path: '',
        component: () => import('@/features/news/pages/NewsPage.vue'),
      },
      {
        path: 'about',
        component: () => import('@/pages/about/AboutPage.vue'),
      },
      {
        path: 'contact',
        component: () => import('@/pages/contactUs/ContactUsPage.vue'),
      },
      {
        path: '/:pathMatch(.*)*',
        component: () => import('@/pages/NotFound/NotFoundPage.vue'),
      },
    ],
  },
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
