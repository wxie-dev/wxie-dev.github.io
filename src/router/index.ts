import { createRouter, createWebHashHistory } from 'vue-router'
import type { RouterScrollBehavior } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import ProjectCaseStudy from '../views/ProjectCaseStudy.vue'

const scrollBehavior: RouterScrollBehavior = (to, _from, savedPosition) => {
  if (savedPosition) {
    return savedPosition
  }
  if (to.hash) {
    return {
      el: to.hash,
      behavior: 'smooth'
    }
  }
  return { top: 0 }
}

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      path: '/projects/:slug',
      name: 'project-case-study',
      component: ProjectCaseStudy
    },
    {
      path: '/:pathMatch(.*)*',
      redirect: '/'
    }
  ],
  scrollBehavior
})

export default router
