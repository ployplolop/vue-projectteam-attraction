import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/video',
    name: 'video',

    component: () => import('../components/VideoGallery.vue')
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
    path: '/north',
    name: 'north',

    component: () => import('../views/North.vue')
  },
  , 
  {
    path: '/south',
    name: 'south',

    component: () => import('../views/South.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})


export default router
