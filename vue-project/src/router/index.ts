import { createRouter, createWebHistory } from 'vue-router'
import LandingPage from '../views/LandingPage.vue'
import Redirects from '../components/Redirects.vue'

const routes = [
  {
    path: '/',
    name: 'index',
    component: LandingPage
  },
  {
    path: '/redirects',
    name: 'redirects',
    component: Redirects
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router