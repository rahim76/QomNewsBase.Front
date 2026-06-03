import { createRouter, createWebHistory } from 'vue-router'
import DefaultLayout from '../layouts/DefaultLayout.vue'

const routes = [
  {
    path: '/',
    component: DefaultLayout,
    children: [
      // {
      //   path: 'admin',
      //   component: () => import('@/pages/admin/AdminPage.vue'),
      //   meta: {
      //     requiresAuth: true,
      //   },
      // },
      {
        path: '',
        component: () => import('@/features/news/pages/NewsPage.vue'),
      },
      {
        path: '/news/:id',
        name: 'news-detail',
        component: () => import('@/features/news/pages/NewsDetailPage.vue'),
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

// router.beforeEach((to, from, next) => {
//   const isAuthenticated = true

//   if (to.meta.requiresAuth && !isAuthenticated) {
//     next('/login')
//     return
//   }

//   next()
// })

export default router
