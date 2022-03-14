import { createStore } from 'vuex'

export default createStore({
  state: {
    reservation:'',
    // amount:'',
    // range:'',
    // guests:'',
  },
  mutations: {
    setReservation(state, book){
      state.reservation = book
    },
    // setReservationAmount(state, amount){
    //   state.amount = amount
    // },
    // setReservationGuests(state, guests){
    //   state.guests = guests
    // },

  },
  actions: {
  },
  modules: {
  }
})
