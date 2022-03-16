import { createStore } from 'vuex'

export default createStore({
  state: {
    reservation:'',
    additionals:'',
    totalAmount:'',
  },
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
  },
  actions: {
  },
  modules: {
  }
})
