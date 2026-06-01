import { createRouter, createWebHistory } from 'vue-router'
import DefaultLayout from '../layouts/DefaultLayout.vue'

const routes = [
  {
    path: '/',
    component: DefaultLayout,
    children: [
      {
        path: '',
        component: () => import('@/pages/News/ui/NewsPage.vue'),
      },
      {
        path: 'about',
        component: () => import('@/pages/about/ui/AboutPage.vue'),
      },
      {
        path: 'contact',
        component: () => import('@/pages/contact/ui/ContactPage.vue'),
      },
      {
        path: '/:pathMatch(.*)*',
        component: () => import('@/pages/NotFound/ui/NotFoundPage.vue'),
      },
    ],
  },
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
