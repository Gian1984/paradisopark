import { createStore } from 'vuex'
import createPersistedState from "vuex-persistedstate";

export default createStore({
  state: {
    reservation:'',
    additionals:'',
    totalAmount:'',
    lateCheckout:'',
    setTest:''
  },
  plugins: [createPersistedState()],
  mutations: {
    setReservation(state, book){
      state.reservation = book
    },
    setAdditionals(state, additionals){
      state.additionals = additionals
    },
    totalAmount(state, totalAmount){
      state.totalAmount = totalAmount
    },
    lateCheckout(state, lateCheckout){
      state.lateCheckout = lateCheckout
    },
    clearReservation(state){
      state.reservation = ''
    },
    clearAdditionals(state){
      state.additionals = ''
    },
    cleartotalAmount(state){
      state.totalAmount = ''
    },
    clearlateCheckout(state){
      state.lateCheckout = ''
    },
  },
  actions: {
  },
  modules: {
  },
})
