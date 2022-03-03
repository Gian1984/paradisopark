import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Rooms from '../views/Rooms.vue'
import Care from '../views/Care.vue'
import Catering from '../views/Catering.vue'
import Events from '../views/Events.vue'
import Contact from '../views/Contact.vue'
import Dashboard from '../views/Dashboard.vue'
import Useraccount from '../views/Useraccount.vue'
import Booking from '../views/Booking.vue'
import Timeslot from '../views/Timeslot.vue'
import Additionaltimeslot from '../views/Additionaltimeslot.vue'
import Checkouttimeslot from '../views/Checkouttimeslot.vue'
import Fullday from '../views/Fullday.vue'
import Additionalfullday from '../views/Additionalfullday.vue'
import Checkoutfullday from '../views/Checkoutfullday.vue'
import Faq from '../views/Faq.vue'
import Privacy from '../views/Privacy.vue'
import Terms from '../views/Terms.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/rooms',
    name: 'Rooms',
    component: Rooms
  },
  {
    path: '/care',
    name: 'Care',
    component: Care
  },
  {
    path: '/catering',
    name: 'Catering',
    component: Catering
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
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard
  },
  {
    path: '/useraccount',
    name: 'Useraccount',
    component: Useraccount
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
    path: '/checkouttimeslot',
    name: 'Checkouttimeslot',
    component: Checkouttimeslot
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
  {
    path: '/checkoutfullday',
    name: 'Checkoutfullday',
    component: Checkoutfullday
  },
  {
    path: '/faq',
    name: 'Faq',
    component: Faq
  },
  {
    path: '/privacy',
    name: 'Privacy',
    component: Privacy
  },
  {
    path: '/terms',
    name: 'Terms',
    component: Terms
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
