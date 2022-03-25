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
              <div class="h-0.5 w-full bg-gray-200" />
            </div>
            <router-link :to="step.href" class="relative w-8 h-8 flex items-center justify-center bg-white border-2 border-indigo-600 rounded-full" aria-current="step">
              <span class="h-2.5 w-2.5 bg-indigo-600 rounded-full" aria-hidden="true" />
              <span class="sr-only">{{ step.name }}</span>
            </router-link>
          </template>
          <template v-else>
            <div class="absolute inset-0 flex items-center" aria-hidden="true">
              <div class="h-0.5 w-full bg-gray-200" />
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
                <dt>From</dt>
                <dd class="text-gray-900">{{ moment(reservation.start).format('DD-MM-YYYY')}}</dd>
              </div>

              <div class="flex justify-between">
                <dt>To</dt>
                <dd class="text-gray-900">{{ moment(reservation.end).format('DD-MM-YYYY')}}</dd>
              </div>

              <div class="flex justify-between">
                <dt>Room</dt>
                <dd class="text-gray-900">{{ reservation.onlyRoomPrice }} €</dd>
              </div>

              <div v-if="reservation.checkoutPrice" class="flex justify-between">
                <dt>Late Checkout</dt>
                <dd class="text-gray-900">{{ reservation.checkoutPrice }} €</dd>
              </div>

              <div  v-for="additional in additionals" :key="additional.id" >
                <div v-if="additional.total != '0' " class="flex justify-between">
                  <dt>{{additional.name}}</dt>
                  <dd class="text-gray-900">{{ additional.total }} €</dd>
                </div>
              </div>

            </dl>

          </DisclosurePanel>

          <p class="flex items-center justify-between text-sm font-medium text-gray-900 border-t border-gray-200 pt-6 mt-6">
            <span class="text-base">Total</span>
            <span class="text-base">{{ totalAmount }}</span>
          </p>

        </Disclosure>
      </section>

      <!-- Order summary -->
      <section aria-labelledby="summary-heading" class="hidden bg-gray-50 w-full max-w-md flex-col lg:flex">
        <h2 id="summary-heading" class="sr-only">Order summary</h2>

        <div class="sticky bottom-0 flex-none bg-gray-50 border-gray-200 p-6">

          <dl class="text-sm font-medium text-gray-500 mt-10 space-y-6">
            <div class="flex justify-between">
              <dt>Guests</dt>
              <dd class="text-gray-900">{{ reservation.guests }} </dd>
            </div>

            <div class="flex justify-between">
              <dt>From</dt>
              <dd class="text-gray-900">{{ moment(reservation.start).format('DD-MM-YYYY')}} </dd>
            </div>

            <div class="flex justify-between">
              <dt>To</dt>
              <dd class="text-gray-900">{{ moment(reservation.end).format('DD-MM-YYYY')}} </dd>
            </div>

            <div class="flex justify-between">
              <dt>Room</dt>
              <dd class="text-gray-900">{{ reservation.onlyRoomPrice }} €</dd>
            </div>

            <div v-if="reservation.checkoutPrice" class="flex justify-between">
              <dt>Late Checkout</dt>
              <dd class="text-gray-900">{{ reservation.checkoutPrice }} €</dd>
            </div>

            <div  v-for="additional in additionals" :key="additional.id" >
              <div v-if="additional.total != 0" class="flex justify-between">
                <dt>{{additional.name}}</dt>
                <dd class="text-gray-900">{{ additional.total }} €</dd>
              </div>
            </div>


            <div class="flex items-center justify-between border-t border-gray-200 text-gray-900 pt-6">
              <dt class="text-base">Total</dt>
              <dd class="text-base">{{ totalAmount }} €</dd>
            </div>

          </dl>
        </div>
      </section>

      <!-- Checkout form -->
      <section aria-labelledby="payment-heading" class="flex-auto overflow-y-auto px-4 pt-12 pb-16 sm:px-6 sm:pt-16 lg:px-8 lg:pt-0 lg:pb-24">


        <div class="max-w-lg mx-auto">

          <h1 class="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">Checkout</h1>

          {{ additionals }}
          -----------------
          {{ reservation }}

          ----------------
          {{ totalAmount }}


          <!--          APPLE PAY BUTTON MOBILE-->

          <!--          <button type="button" class="w-full flex items-center justify-center bg-black border border-transparent text-white rounded-md py-2 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900">-->
          <!--            <span class="sr-only">Pay with Apple Pay</span>-->
          <!--            <svg class="h-5 w-auto" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 20">-->
          <!--              <path d="M9.536 2.579c-.571.675-1.485 1.208-2.4 1.132-.113-.914.334-1.884.858-2.484C8.565.533 9.564.038 10.374 0c.095.951-.276 1.884-.838 2.579zm.829 1.313c-1.324-.077-2.457.751-3.085.751-.638 0-1.6-.713-2.647-.694-1.362.019-2.628.79-3.323 2.017-1.429 2.455-.372 6.09 1.009 8.087.676.99 1.485 2.075 2.552 2.036 1.009-.038 1.409-.656 2.628-.656 1.228 0 1.58.656 2.647.637 1.104-.019 1.8-.99 2.475-1.979.771-1.122 1.086-2.217 1.105-2.274-.02-.019-2.133-.828-2.152-3.263-.02-2.036 1.666-3.007 1.742-3.064-.952-1.408-2.437-1.56-2.951-1.598zm7.645-2.76v14.834h2.305v-5.072h3.19c2.913 0 4.96-1.998 4.96-4.89 0-2.893-2.01-4.872-4.885-4.872h-5.57zm2.305 1.941h2.656c2 0 3.142 1.066 3.142 2.94 0 1.875-1.142 2.95-3.151 2.95h-2.647v-5.89zM32.673 16.08c1.448 0 2.79-.733 3.4-1.893h.047v1.779h2.133V8.582c0-2.14-1.714-3.52-4.351-3.52-2.447 0-4.256 1.399-4.323 3.32h2.076c.171-.913 1.018-1.512 2.18-1.512 1.41 0 2.2.656 2.2 1.865v.818l-2.876.171c-2.675.162-4.123 1.256-4.123 3.159 0 1.922 1.495 3.197 3.637 3.197zm.62-1.76c-1.229 0-2.01-.59-2.01-1.494 0-.933.752-1.475 2.19-1.56l2.562-.162v.837c0 1.39-1.181 2.379-2.743 2.379zM41.1 20c2.247 0 3.304-.856 4.227-3.454l4.047-11.341h-2.342l-2.714 8.763h-.047l-2.714-8.763h-2.409l3.904 10.799-.21.656c-.352 1.114-.923 1.542-1.942 1.542-.18 0-.533-.02-.676-.038v1.779c.133.038.705.057.876.057z" />-->
          <!--            </svg>-->
          <!--          </button>-->

          <!--          <div class="relative mt-8">-->
          <!--            <div class="absolute inset-0 flex items-center" aria-hidden="true">-->
          <!--              <div class="w-full border-t border-gray-200" />-->
          <!--            </div>-->
          <!--            <div class="relative flex justify-center">-->
          <!--              <span class="px-4 bg-white text-sm font-medium text-gray-500"> or </span>-->
          <!--            </div>-->
          <!--          </div>-->


          <!--          APPLE PAY BUTTON MOBILE-->

          <form @submit.prevent="placeOrder" class="mt-6">
            <div class="grid grid-cols-12 gap-y-6 gap-x-4">
              <div class="col-span-full">
                <label for="email-address" class="block text-sm font-medium text-gray-700">Email address</label>
                <div class="mt-1">
                  <input type="email" id="email-address" name="email-address" autocomplete="email" class="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                </div>
              </div>

              <div class="col-span-full">
                <label for="name-on-card" class="block text-sm font-medium text-gray-700">Name on card</label>
                <div class="mt-1">
                  <input type="text" id="name-on-card" name="name-on-card" autocomplete="cc-name" class="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                </div>
              </div>

              <div class="col-span-full">
                <label for="card-number" class="block text-sm font-medium text-gray-700">Card number</label>
                <div class="mt-1">
                  <input type="text" id="card-number" name="card-number" autocomplete="cc-number" class="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                </div>
              </div>

              <div class="col-span-full">
                <label for="card-number" class="block text-sm font-medium text-gray-700">Card number</label>
                <div class="mt-1">
                  <div id="card-element"></div>
                </div>
              </div>

              <div class="col-span-full">
                <label for="address" class="block text-sm font-medium text-gray-700">Address</label>
                <div class="mt-1">
                  <input type="text" id="address" name="address" autocomplete="street-address" class="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                </div>
              </div>

              <div class="col-span-full sm:col-span-4">
                <label for="city" class="block text-sm font-medium text-gray-700">City</label>
                <div class="mt-1">
                  <input type="text" id="city" name="city" autocomplete="address-level2" class="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                </div>
              </div>

              <div class="col-span-full sm:col-span-4">
                <label for="region" class="block text-sm font-medium text-gray-700">State / Province</label>
                <div class="mt-1">
                  <input type="text" id="region" name="region" autocomplete="address-level1" class="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                </div>
              </div>

              <div class="col-span-full sm:col-span-4">
                <label for="postal-code" class="block text-sm font-medium text-gray-700">Postal code</label>
                <div class="mt-1">
                  <input type="text" id="postal-code" name="postal-code" autocomplete="postal-code" class="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                </div>
              </div>
            </div>

            <div class="mt-6 flex space-x-2">
              <div class="flex items-center h-5">
                <input id="same-as-shipping" name="same-as-shipping" type="checkbox" checked="" class="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500" />
              </div>
              <label for="same-as-shipping" class="text-sm font-medium text-gray-900">Billing address is the same as shipping address</label>
            </div>

            <button type="submit" class="w-full mt-6 bg-indigo-600 border border-transparent rounded-md shadow-sm py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Pay € {{ totalAmount }}</button>

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
  { name: 'Step 3', href: '/checkoutfullday', status: 'current' },
]

const subtotal = '$210.00'
const discount = { code: 'CHEAPSKATE', amount: '$24.00' }
const taxes = '$23.68'
const shipping = '$22.00'
const total = '$341.68'


export default {

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

    this.amount = this.totalAmount
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

      const {paymentMethod, error} = await this.stripe.createPaymentMethod(
          'card', this.cardElement, {
            billing_details: {
              name: 'gianluca' + ' ' + 'tiengo',
              email: 'gl.tiengo@gmail.com',
              phone: '3494257041',
              address: {
                line1: 'via aldo bronx 3',
                city: 'bruxelles',
                state: 'belgium',
                postal_code: '1050'
              }
            }
          }
      );

      if (error) {
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
        let user_id = '1'
        let product_id = '1'
        let startdate = moment(this.reservation.start).format('YYYY-M-DD')
        let finishdate = moment(this.reservation.end).format('YYYY-M-DD')
        let starttime = this.reservation.checkOutStart
        let finishtime = this.reservation.checkOutEnd
        let slot_id = this.reservation.slot
        let fullday = '1'
        let guests = this.reservation.guests
        let amount = parseInt(this.totalAmount) * 100
        let payment_method_id = paymentMethod.id;

        this.axios.post(process.env.VUE_APP_URL_API + 'api/reservations',
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
              let extras = this.additionals.map(element => this.axios.post(process.env.VUE_APP_URL_API + 'api/extras',{reservation_id: response.data.id, name: element.name, price:element.price, quantity:element.quantity  }))
              console.log(extras)

              this.paymentProcessing = false;
              this.loading = false
              this.$router.push({path:'/'})
            })
            .catch((error) => {
              this.paymentProcessing = false;
              this.loading = false
              this.error = error.response.data.message;
            });
      }

    },

  },

  data(){
    return {
      order:'',
      stripe: {},
      cardElement: {},
      customer: {
        email: '',
        phone : '',
      },
      user:'',
      loading: false,
      paymentProcessing: false,
      paymentMethod:'',
      error:'',
      isLoggedIn : null,
      product : [],
      checked: false,
      alertOpen:'',
      alertsOpen: true,
      amount:'',
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
