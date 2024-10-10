import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '@/views/LoginView'
import RegisterView from '@/views/RegisterView'
import AboutView from '../views/AboutView.vue'

import store from '../store'

const routes = [
  {
    path: '/login',
    component: LoginView
  },
  {
    path: '/Register',
    component: RegisterView
  },
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/protected',
    name: 'AboutView',
    component: AboutView,
    meta: {
      requiresAuth: true
    }
  },
  // otherwise redirect to home
  { path: '/:catchAll(.*)', redirect: '/' }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!store.getters.isLoggedIn) {
      alert('로그인안됌')
      next({
        path: '/login'
      })
    } else {
      next()
    }
  } else {
    next()
  }
})

export default router
