import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/HomeView.vue')
  },
  {
    path: '/registrate-finished',
    name: 'hastel',
    component: () => import('../views/RegistrateView.vue')
  },
  {
    path: '/tel',
    name: 'tel',
    component: () => import('../views/TelView.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  linkActiveClass: 'active',
  routes
})

export default router
