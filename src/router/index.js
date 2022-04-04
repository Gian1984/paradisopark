import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Domain from '../views/Domain.vue'
import Philosophy from '../views/Philosophy.vue'
import Sauna from '../views/Sauna.vue'
import Pool from '../views/Pool.vue'
import Wintergarden from '../views/Wintergarden.vue'
import Eventroom from '../views/Eventroom.vue'
import Rooms from '../views/Rooms.vue'
import Garden from '../views/Garden.vue'
import Catering from '../views/Catering.vue'
import Celebrations from '../views/Celebrations.vue'
import Talks from '../views/Talks.vue'
import Gallery from '../views/Gallery.vue'
import Contact from '../views/Contact.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import Resetpassword from '../views/Resetpassword.vue'
import Forgetpassword from '../views/Forgetpassword.vue'
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
import Additionaloptions from '../components/Additionaloptions.vue'
import Fulldayreservations from '../components/Fulldayreservations.vue'
import Pricedateoptions from '../components/Pricedateoptions.vue'
import Timeslotreservations from '../components/Timeslotreservations.vue'
import Additionalmodal from '../components/Additionalmodal.vue'
import Addspecialdatemodal from '../components/Addspecialdatemodal.vue'
import Checkoutmodal from '../components/Checkoutmodal.vue'


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/domain',
    name: 'Domain',
    component: Domain
  },
  {
    path: '/philosophy',
    name: 'Philosophy',
    component: Philosophy
  },
  {
    path: '/sauna',
    name: 'Sauna',
    component: Sauna
  },
  {
    path: '/pool',
    name: 'Pool',
    component: Pool
  },
  {
    path: '/wintergarden',
    name: 'Wintergarden',
    component: Wintergarden
  },
  {
    path: '/eventroom',
    name: 'Eventroom',
    component: Eventroom
  },
  {
    path: '/rooms',
    name: 'Rooms',
    component: Rooms
  },
  {
    path: '/garden',
    name: 'Garden',
    component: Garden
  },
  {
    path: '/catering',
    name: 'Catering',
    component: Catering
  },
  {
    path: '/celebrations',
    name: 'Celebrations',
    component: Celebrations
  },
  {
    path: '/talks',
    name: 'Talks',
    component: Talks
  },
  {
    path: '/gallery',
    name: 'Gallery',
    component: Gallery
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/resetpassword',
    name: 'Resetpassword',
    component: Resetpassword
  },
  {
    path: '/forgetpassword',
    name: 'Forgetpassword',
    component: Forgetpassword
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
  {
    path: '/additionaloptions',
    name: 'Additionaloptions',
    component: Additionaloptions
  },
  {
    path: '/fulldayreservations',
    name: 'Fulldayreservations',
    component: Fulldayreservations
  },
  {
    path: '/pricedateoptions',
    name: 'Pricedateoptions',
    component: Pricedateoptions
  },
  {
    path: '/timeslotreservations',
    name: 'Timeslotreservations',
    component: Timeslotreservations
  },
  {
    path: '/additionalmodal',
    name: 'Additionalmodal',
    component: Additionalmodal
  },
  {
    path: '/addspecialdatemodal',
    name: 'Addspecialdatemodal',
    component: Addspecialdatemodal
  },
  {
    path: '/checkoutmodal',
    name: 'Checkoutmodal',
    component: Checkoutmodal
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
