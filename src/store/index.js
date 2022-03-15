import { createStore } from 'vuex'

export default createStore({
  state: {
    reservation:'',
  },
  mutations: {
    setReservation(state, book){
      state.reservation = book
    },
  },
  actions: {
  },
  modules: {
  }
})
