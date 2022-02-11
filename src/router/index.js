import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Rooms from '../views/Rooms.vue'
import Events from '../views/Events.vue'
import Contact from '../views/Contact.vue'
import Booking from '../views/Booking.vue'
import Timeslot from '../views/Timeslot.vue'
import Additionaltimeslot from '../views/Additionaltimeslot.vue'
import Fullday from '../views/Fullday.vue'
import Additionalfullday from '../views/Additionalfullday.vue'

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
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  },
  {
    path: '/booking',
    name: 'Booking',
    component: Booking
  },
  {
    path: '/timeslot',
    name: 'Timeslot',
    component: Timeslot
  },
  {
    path: '/additionaltimeslot',
    name: 'Additionaltimeslot',
    component: Additionaltimeslot
  },
  {
    path: '/fullday',
    name: 'Fullday',
    component: Fullday
  },
  {
    path: '/additionalfullday',
    name: 'Additionalfullday',
    component: Additionalfullday
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
