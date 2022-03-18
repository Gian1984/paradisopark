import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './index.css'
import VCalendar from 'v-calendar';
import axios from 'axios'
import VueAxios from 'vue-axios'
import moment from 'moment';
import createPersistedState from 'vuex-persistedstate';




createApp(App).use(store).use(router).use(VueAxios, axios).use(moment).use(VCalendar,{}).use(createPersistedState).mount('#app')
