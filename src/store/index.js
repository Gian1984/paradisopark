import { createStore } from 'vuex'

export default createStore({
  state: {
    amount:'',
    range:'',
    guests:'',
  },
  mutations: {
    setReservationRange(state, range){
      state.range = range
    },
    setReservationAmount(state, amount){
      state.amount = amount
    },
    setReservationGuests(state, guests){
      state.guests = guests
    },

  },
  actions: {
  },
  modules: {
  }
})
