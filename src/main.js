import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './index.css'
import VCalendar from 'v-calendar';
import axios from 'axios'
import VueAxios from 'vue-axios'
import moment from 'moment';
import VueCookieComply from 'vue-cookie-comply';
import createPersistedState from 'vuex-persistedstate';
import 'vue-cookie-comply/dist/style.css'
import i18n from './i18n'
import 'tw-elements'
import VuePictureSwipe from 'vue-picture-swipe';




createApp(App).use(store).use(router).use(VueAxios, axios).use(moment).use(VCalendar,{}).use(createPersistedState).use(VueCookieComply).use(i18n).use('vue-picture-swipe', VuePictureSwipe).mount('#app')
