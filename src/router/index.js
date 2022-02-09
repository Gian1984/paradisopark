import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Rooms from '../views/Rooms.vue'
import Events from '../views/Events.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/rooms',
    name: 'Rooms',
    component: Rooms
  },
  {
    path: '/events',
    name: 'Events',
    component: Events
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  /*eslint-disable */
  scrollBehavior (to, from, savedPosition) {
    window.scrollTo(0, 0);
  }
})

export default router
