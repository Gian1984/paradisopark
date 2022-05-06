<template>

  <section class="max-w-xl mx-auto pt-24 pb-8 px-4 sm:pt-32 sm:px-6 lg:max-w-7xl lg:px-8">

    <!-- STEP -->
    <nav aria-label="Progress" class="flex justify-center">
      <ol role="list" class="flex items-center">
        <li v-for="(step, stepIdx) in steps" :key="step.name" :class="[stepIdx !== steps.length - 1 ? 'pr-8 sm:pr-20' : '', 'relative']">
          <template v-if="step.status === 'complete'">
            <div class="absolute inset-0 flex items-center" aria-hidden="true">
              <div class="h-0.5 w-full bg-indigo-600" />
            </div>
            <router-link :to="step.href" class="relative w-8 h-8 flex items-center justify-center bg-indigo-600 rounded-full hover:bg-indigo-900">
              <CheckIcon class="w-5 h-5 text-white" aria-hidden="true" />
              <span class="sr-only">{{ step.name }}</span>
            </router-link>
          </template>
          <template v-else-if="step.status === 'current'" condition="step.status === 'current'">
            <div class="absolute inset-0 flex items-center" aria-hidden="true">
              <div class="h-0.5 w-full bg-beige" />
            </div>
            <router-link :to="step.href" class="relative w-8 h-8 flex items-center justify-center bg-white border-2 border-indigo-600 rounded-full" aria-current="step">
              <span class="h-2.5 w-2.5 bg-indigo-600 rounded-full" aria-hidden="true" />
              <span class="sr-only">{{ step.name }}</span>
            </router-link>
          </template>
          <template v-else>
            <div class="absolute inset-0 flex items-center" aria-hidden="true">
              <div class="h-0.5 w-full bg-beige" />
            </div>
            <router-link :to="step.href" class="group relative w-8 h-8 flex items-center justify-center bg-white border-2 border-gray-300 rounded-full hover:border-gray-400">
              <span class="h-2.5 w-2.5 bg-transparent rounded-full group-hover:bg-gray-300" aria-hidden="true" />
              <span class="sr-only">{{ step.name }}</span>
            </router-link>
          </template>
        </li>
      </ol>
    </nav>

    <main class="lg:min-h-full lg:overflow-hidden lg:flex lg:flex-row-reverse py-12">

      <h1 class="sr-only">Checkout</h1>


      <!-- Mobile order summary -->
      <section aria-labelledby="order-heading" class="bg-gray-50 px-4 py-6 sm:px-6 lg:hidden">
        <Disclosure as="div" class="max-w-lg mx-auto" v-slot="{ open }">
          <div class="flex items-center justify-between">
            <h2 id="order-heading" class="text-lg font-medium text-gray-900">Your Order</h2>
            <DisclosureButton class="font-medium text-indigo-600 hover:text-indigo-500">
              <span v-if="open">Hide full summary</span>
              <span v-if="!open">Show full summary</span>
            </DisclosureButton>
          </div>

          <DisclosurePanel>

            <dl class="text-sm font-medium text-gray-500 mt-10 space-y-6">

              <div class="flex justify-between">
                <dt>Guests</dt>
                <dd class="text-gray-900">{{ reservation.guests }}</dd>
              </div>

              <div class="flex justify-between">
                <dt>Date</dt>
                <dd class="text-gray-900">{{ moment(reservation.date).format('DD-MM-YYYY') }} €</dd>
              </div>

              <div class="flex justify-between">
                <dt>Room</dt>
                <dd class="text-gray-900">{{ reservation.amount / 100 }} €</dd>
              </div>

              <div v-for="additional in additionals" :key="additional.id">
                <div v-if="additional.total != 0" class="flex justify-between">
                  <dt>{{additional.name}}</dt>
                  <dd class="text-gray-900">{{ additional.total / 100 }} €</dd>
                </div>
              </div>

            </dl>

          </DisclosurePanel>

          <p class="flex items-center justify-between text-sm font-medium text-gray-900 border-t border-gray-200 pt-6 mt-6">
            <span class="text-base">Total</span>
            <span class="text-base">{{ totalAmount / 100 }} €</span>
          </p>

        </Disclosure>
      </section>

      <!-- Order summary -->
      <section aria-labelledby="summary-heading" class="hidden bg-beige w-full max-w-md flex-col lg:flex">
        <h2 id="summary-heading" class="sr-only">Order summary</h2>

        <div class="sticky bottom-0 flex-none bg-beige border-gray-200 p-6">

          <dl class="text-sm font-medium text-gray-500 mt-10 space-y-6">

            <div class="flex justify-between">
              <dt>Guests</dt>
              <dd class="text-gray-900">{{ reservation.guests }}</dd>
            </div>

            <div class="flex justify-between">
              <dt>Date</dt>
              <dd class="text-gray-900">{{ moment(reservation.date).format('DD-MM-YYYY') }}</dd>
            </div>

            <div class="flex justify-between">
              <dt>Room</dt>
              <dd class="text-gray-900">{{ reservation.amount / 100 }} €</dd>
            </div>

            <div v-for="additional in additionals" :key="additional.id">
              <div v-if="additional.total != 0" class="flex justify-between">
                <dt>{{additional.name}}</dt>
                <dd class="text-gray-900">{{ additional.total / 100 }} €</dd>
              </div>
            </div>

            <div class="flex items-center justify-between border-t border-gray-500 text-gray-900 pt-6">
              <dt class="text-base">Total</dt>
              <dd class="text-base">{{ totalAmount / 100}} € </dd>
            </div>

          </dl>
        </div>
      </section>

      <!-- Checkout form -->
      <section aria-labelledby="payment-heading" class="flex-auto overflow-y-auto px-4 pt-12 pb-16 sm:px-6 sm:pt-16 lg:px-8 lg:pt-0 lg:pb-24">

        <div class="max-w-lg mx-auto">
          <h1 class="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">Checkout</h1>

          <form @submit.prevent="placeOrder" class="mt-6">
            <div class="grid grid-cols-12 gap-y-6 gap-x-4">

              <div class="col-span-full">
                <label for="card-element" class="block text-sm font-medium text-gray-700">Card number</label>
                <div class="mt-1">
                  <div id="card-element"></div>
                </div>
              </div>

            </div>

            <button type="submit" class="w-full mt-6 bg-indigo-600 border border-transparent rounded-md shadow-sm py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Pay € {{ totalAmount / 100  }}</button>

            <p class="flex justify-center text-sm font-medium text-gray-500 mt-6">
              <LockClosedIcon class="w-5 h-5 text-gray-400 mr-1.5" aria-hidden="true" />
              Payment details stored in plain text
            </p>
          </form>

          <div v-if="error  != 0" class="rounded-md bg-red-50 p-4 mt-10">
            <div class="flex">
              <div class="flex-shrink-0">
                <XCircleIcon class="h-5 w-5 text-red-400" aria-hidden="true" />
              </div>
              <div class="ml-3">
                <h3 class="text-sm font-medium text-red-800">
                  error
                </h3>
                <div class="mt-2 text-sm text-red-700">
                  {{ error }}
                </div>
              </div>
              <div class="ml-auto pl-3">
                <div class="-mx-1.5 -my-1.5">
                  <button v-on:click="closeError()" type="button" class="inline-flex bg-red-50 rounded-md p-1.5 text-red-500 hover:bg-red-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-red-50 focus:ring-red-600">
                    <span class="sr-only">Dismiss</span>
                    <XIcon class="h-5 w-5" aria-hidden="true" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div class="mt-4" v-if="loading">
            <!-- here put a spinner or whatever you want to indicate that a request is in progress -->
            <div class="flex justify-center items-center">
              <div
                  class="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-bord"
              ></div>
            </div>
          </div>

          <div v-else>
            <!-- request finished -->
            <div class="col-span-6 sm:col-span-6 px-4">
              <div v-if="alertOpen" class="rounded-md bg-green-50 p-4">
                <div class="flex">
                  <div class="flex-shrink-0">
                    <CheckCircleIcon class="h-5 w-5 text-green-400" aria-hidden="true" />
                  </div>
                  <div class="ml-3">
                    <p class="text-sm font-medium text-green-800">
                      success
                    </p>
                  </div>
                  <div class="ml-auto pl-3">
                    <div class="-mx-1.5 -my-1.5">
                      <button v-on:click="closeAlert()" type="button" class="inline-flex bg-red-50 rounded-md p-1.5 text-red-500 hover:bg-red-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-red-50 focus:ring-red-600">
                        <span class="sr-only">Dismiss</span>
                        <XIcon class="h-5 w-5" aria-hidden="true" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>
    </main>
  </section>
</template>

<script>
import { loadStripe } from '@stripe/stripe-js';
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'
import { LockClosedIcon, CheckCircleIcon, XIcon, XCircleIcon,  } from '@heroicons/vue/solid'
import { CheckIcon, } from '@heroicons/vue/outline'
import moment from "moment";

const steps = [
  { name: 'Step 1', href: '/timeslot', status: 'complete' },
  { name: 'Step 2', href: '/additionaltimeslot', status: 'complete' },
  { name: 'Step 3', href: '/checkouttimeslot', status: 'current' },
]

const subtotal = '$210.00'
const discount = { code: 'CHEAPSKATE', amount: '$24.00' }
const taxes = '$23.68'
const shipping = '$22.00'
const total = '$341.68'


export default {
  beforeMount() {
    this.axios.post(process.env.VUE_APP_URL_API + "api/verifyfulldays")
        .then(response => {
              let fulldays = response.data
              console.log('verifyfulldays',response.data)
              this.verifyfulldays = fulldays.map(element=>{
                return { start: new Date(element.startdate), end: new Date(element.finishdate) }
              })
        })
  },

  async mounted() {
    // this.isLoggedIn = localStorage.getItem('bigStore.jwt') != null
    this.stripe = await loadStripe(process.env.VUE_APP_STRIPE_KEY);
    const elements = this.stripe.elements();
    this.cardElement = elements.create('card', {
      classes: {
        base: 'rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 p-3 leading-8 transition-colors duration-200 ease-in-out'
      },
      hidePostalCode:true
    });
    this.cardElement.mount('#card-element');
  },

  methods:{

    closeError(){
      this.error="";
    },


    closeAlert: function(){
      this.alertOpen = false;
    },



    async placeOrder(e) {
      e.preventDefault()
      this.loading = true
      this.paymentProcessing = true;





      let fullday = '0'
      let startdate = moment(this.reservation.date).format('YYYY-M-DD')
      // let startdate = '2022-5-15'
      let finishdate = moment(this.reservation.date).format('YYYY-M-DD')
      // let finishdate = '2022-5-15'
      let slot_id = this.reservation.slot

      let verify = this.verifyfulldays.filter(e=>moment(this.reservation.date).format('YYYY-M-DD') >= moment(e.start).format('YYYY-M-DD') &&  moment(this.reservation.date).format('YYYY-M-DD') <= moment(e.start).format('YYYY-M-DD'))
      console.log(verify.length)

      await this.axios.post(process.env.VUE_APP_URL_API + 'api/verifytimeslots',
          {
            startdate,
            finishdate,
            slot_id,
            fullday,

          })
          .then((response) => {

            if ( typeof response.data[0] === 'undefined' || verify.length != 0){

              this.verify = false

            } else {

              this.verify = true

            }
            console.log('lookatthis',response.data[0])
            console.log(this.verify)
          })


      if(this.verify === true){

        this.paymentProcessing = false;
        this.loading = false
        this.error = 'already taken'

      }else{

        const {paymentMethod, error} = await this.stripe.createPaymentMethod(
            'card', this.cardElement, {
              billing_details: {
                name: this.setUser.name,
                email: this.setUser.email,
                // address: {
                //   line1: 'via aldo bronx 3',
                //   city: 'bruxelles',
                //   state: 'belgium',
                //   postal_code: '1050'
                // }
              }
            }
        );

        if (error) {
          //test
          this.paymentProcessing = false;
          this.loading = false
          console.error(error);
        } else {
          this.paymentMethod = paymentMethod
          let language = 'EN'
          let transactionID = paymentMethod.id
          let cardBrand = paymentMethod.card.brand
          let lastFour = paymentMethod.card.last4
          let expire = paymentMethod.card.exp_year
          let user_id = this.setUser.id
          let product_id = '1'
          let startdate = moment(this.reservation.date).format('YYYY-M-DD')
          let finishdate = moment(this.reservation.date).format('YYYY-M-DD')
          let starttime = this.reservation.start
          let finishtime = this.reservation.end
          let slot_id = this.reservation.slot
          let fullday = '0'
          let guests = this.reservation.guests
          let amount = parseInt(this.totalAmount)
          let payment_method_id = paymentMethod.id;

          await this.axios.post(process.env.VUE_APP_URL_API + 'api/reservations',
              {
                user_id,
                product_id,
                startdate,
                finishdate,
                starttime,
                finishtime,
                slot_id,
                fullday,
                guests,
                transactionID,
                cardBrand,
                lastFour,
                expire,
                amount,
                payment_method_id,
                language
              })
              .then((response) => {
                let extras = this.additionals.map(element => this.axios.post(process.env.VUE_APP_URL_API + 'api/extras', {
                  reservation_id: response.data.id,
                  name: element.name,
                  price: element.price,
                  quantity: element.quantity
                }))
                console.log(extras)
                this.paymentProcessing = false;
                this.loading = false
                console.log(response.data.id)
                this.$router.push({path: '/'})
              })
              .catch((error) => {
                this.paymentProcessing = false;
                this.loading = false
                this.error = error.response.data.message;
              });
        }


      }

    },

  },

  data(){
    return {
      verifyfulldays:'',
      order:'',
      stripe: {},
      cardElement: {},
      customer: {
        email: '',
        phone : '',
      },
      user:'',
      verify: false,
      loading: false,
      paymentProcessing: false,
      paymentMethod:'',
      error:'',
      isLoggedIn : null,
      product : [],
      checked: false,
      alertOpen:'',
      alertsOpen: true,
    }
  },

  computed: {
    reservation:{
      get(){
        return this.$store.state.reservation
      },
    },
    additionals:{
      get(){
        return this.$store.state.additionals
      },
    },
    totalAmount:{
      get(){
        return this.$store.state.totalAmount
      },
    },
    setUser:{
      get(){
        return this.$store.state.setUser
      }
    },
  },


  components: {
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
    XCircleIcon,
    XIcon,
    CheckCircleIcon,
    LockClosedIcon,
    CheckIcon
  },
  setup() {
    return {
      steps,
      subtotal,
      discount,
      taxes,
      shipping,
      total,
      moment
    }
  },
}
</script>
