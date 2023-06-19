import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/projects',
      name: 'Projects',
      component: () => import('../views/ProjectsView.vue')
    },
    {
      path: "/:catchAll(.*)",
      name: 'NotFound',
      component: () => import('../views/NotFoundView.vue')
    }
  ]
})

export default router
