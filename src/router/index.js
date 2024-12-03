import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProductView from '@/views/ProductView.vue'
import OrderView from '@/views/OrderView.vue'
import ContactView from '@/views/ContactView.vue'
import SignPage from '@/views/SignPage.vue'
import LoginPage from '@/views/LoginPage.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: { requiresAuth: true },
  },
  {
    path: '/Product',
    name: 'product',
    component: ProductView,
    meta: { requiresAuth: true },
  },
  {
    path: '/Signin',
    name: 'Signin',
    component: SignPage,
  },
  {
    path: '/Order',
    name: 'Order',
    component: OrderView,
    meta: { requiresAuth: true },
  },
  {
    path: '/Contact',
    name: 'Contact',
    component: ContactView,
    meta: { requiresAuth: true },
  },
  {
    path: '/Login',
    name: 'Login',
    component: LoginPage,
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

router.beforeEach((to, from, next) => {
  const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true'
  if (to.matched.some((record) => record.meta.requiresAuth) && !isAuthenticated) {
    next('/Login')
  } else if ((to.path === '/Login' || to.path === '/Signin') && isAuthenticated) {
    next('/')
  } else {
    next()
  }
})

export default router
