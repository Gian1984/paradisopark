import { createStore } from 'vuex'
import createPersistedState from "vuex-persistedstate";

export default createStore({
  state: {
    reservation:'',
    additionals:'',
    totalAmount:'',
    lateCheckout:'',
    setUser:'',
    setRoute:'',
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
    setUser(state, user) {
      state.setUser = user
    },
    setRoute(state, route){
      state.setRoute = route
    },
  },
  actions: {
  },
  modules: {
  },
})
