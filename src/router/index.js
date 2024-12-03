import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  ,
  {
    path: '/north',
    name: 'North',

    component: () => import('../views/North.vue')
  },
  {
    path: '/video',
    name: 'video',

    component: () => import('../components/VideoGallery.vue')
  },
  {
    path: '/east',
    name: 'East',

    component: () => import('../views/East.vue')
  },
  {
    path: '/contact',
    name: 'contact',

    component: () => import('../views/contact.vue')
  },
  {
    path: '/login',
    name: 'login',

    component: () => import('../views/login.vue')
  },
  {
    path: '/northeast',
    name: 'Northeast',

    component: () => import('../views/Northeast.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

East
export default router
