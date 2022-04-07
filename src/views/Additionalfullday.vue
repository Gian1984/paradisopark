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

    <!-- Additional elements-->
    <h1 class="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">Additionals</h1>
    <form class="mt-8 lg:grid lg:grid-cols-12 lg:gap-x-12 lg:items-start xl:gap-x-16">
      <section aria-labelledby="cart-heading" class="lg:col-span-7">
        <h2 id="cart-heading" class="sr-only">Items in your shopping cart</h2>

        <ul role="list" class="border-t border-b border-gray-200 divide-y divide-gray-200">
          <li v-for="(product, productIdx) in additionals" :key="product.id" class="flex py-3 sm:py-4" @change="additional()">
            <div class="flex-shrink-0">
              <img :src="product.image" :alt="product.imageAlt" class="w-16 h-16 rounded-md object-center object-cover sm:w-20 sm:h-20" />
            </div>

            <div class="ml-4 flex-1 flex flex-col justify-between sm:ml-6">
              <div class="pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
                <div>
                  <div class="flex justify-between">
                    <h3 class="text-sm">
                      <a :href="product.href" class="font-medium text-gray-700 hover:text-gray-800">
                        {{ product.name }}
                      </a>
                    </h3>
                  </div>
                  <div class="mt-1 flex text-sm">
                    <p v-if="product.description" class="text-gray-500">
                      {{ product.description }}
                    </p>
                  </div>
                  <p class="mt-1 text-sm font-medium text-gray-900">{{ product.price / 100  }} €</p>
                </div>

                <div class="mt-4 sm:mt-0 sm:pr-9 flex flex-col">
                  <label :for="`quantity-${productIdx}`" class="mt-3 text-sm text-gray-500">Quantity</label>
                  <select v-model="product.quantity" :id="`quantity-${productIdx}`" :name="`quantity-${productIdx}`" class="max-w-full rounded-md border border-gray-300 py-1.5 text-base leading-5 font-medium text-gray-700 text-left shadow-sm focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                    <option  value="0">0</option>
                    <option v-for="index in 60" :key="index" :value="index">{{index}}</option>
                  </select>
                </div>
              </div>

            </div>
          </li>
        </ul>
      </section>

      <!-- Order summary -->
      <section aria-labelledby="summary-heading" class="mt-16 bg-gray-50 rounded-lg px-4 py-6 sm:p-6 lg:p-8 lg:mt-0 lg:col-span-5">
        <h2 id="summary-heading" class="text-lg font-medium text-gray-900">Order summary</h2>

        <dl class="mt-6 space-y-4">
          <div class="flex items-center justify-between">
            <dt class="text-sm text-gray-600">Number of guests</dt>
            <dd class="text-sm font-medium text-gray-900">{{ reservation.guests }}</dd>
          </div>
          <div class="border-t border-gray-200 pt-4 flex items-center justify-between">
            <dt class="flex text-sm text-gray-600">
              <span>From</span>
            </dt>
            <dd class="text-sm font-medium text-gray-900">{{ moment(reservation.start).format('DD-MM-YYYY')}} </dd>
          </div>
          <div class="border-t border-gray-200 pt-4 flex items-center justify-between">
            <dt class="flex text-sm text-gray-600">
              <span>To</span>
            </dt>
            <dd class="text-sm font-medium text-gray-900">{{ moment(reservation.end).format('DD-MM-YYYY')}} </dd>
          </div>
          <div class="border-t border-gray-200 pt-4 flex items-center justify-between">
            <dt class="flex text-sm text-gray-600">
              <span>Total room</span>
            </dt>
            <dd class="text-sm font-medium text-gray-900">{{ reservation.onlyRoomPrice / 100   }} €</dd>
          </div>
          <div v-if="reservation.checkoutPrice" class="border-t border-gray-200 pt-4 flex items-center justify-between">
            <dt class="flex text-sm text-gray-600">
              <span>Late checkout</span>
            </dt>
            <dd class="text-sm font-medium text-gray-900">{{ reservation.checkoutPrice / 100   }} €</dd>
          </div>
          <div v-if="additionalAmount" class="border-t border-gray-200 pt-4 flex items-center justify-between">
            <dt class="flex items-center text-sm text-gray-600">
              <span>Total additional</span>
            </dt>
            <dd class="text-sm font-medium text-gray-900">{{ additionalAmount / 100  }} €</dd>
          </div>
          <div class="border-t border-gray-200 pt-4 flex items-center justify-between">
            <dt class="text-base font-medium text-gray-900">Order total</dt>
            <dd class="text-base font-medium text-gray-900">{{ amount / 100  }} €</dd>
          </div>
        </dl>

        <div class="mt-6">
          <button v-on:click="next()" type="button"  class="w-full bg-indigo-600 border border-transparent rounded-md shadow-sm py-3 px-4 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-indigo-500">Next</button>
        </div>
      </section>
    </form>


  </section>
</template>

<script>
import {
  CheckIcon,
} from '@heroicons/vue/solid'
import moment from "moment";
const steps = [
  { name: 'Step 1', href: '/timeslot', status: 'complete' },
  { name: 'Step 2', href: '/additionaltimeslot', status: 'current' },
  { name: 'Step 3', href: '/checkouttimeslot', status: 'upcoming' },
]

export default {
  mounted() {
    this.axios.get(process.env.VUE_APP_URL_API + "api/additionals")
        .then(response => {
          let additionals = response.data
          this.additionals = additionals.map(element=>{
            return {id:element.id, name: element.name, description: element.description, price:element.price, image:element.image, language:element.language, quantity: 0 }
          })
        })
    this.amount = this.reservation.amount
  },
  data(){
    return{
      add:'',
      additionals:'',
      additionalAmount:'',
      amount:'',
    }
  },
  methods:{
    additional(){

      let additionalAmount  = this.additionals.map(element => {
        return{id:element.id, name:element.name, description:element.description, price:element.price, quantity: element.quantity, total:(parseInt(element.price) * element.quantity)}
      });

      this.add = additionalAmount

      let total = additionalAmount.reduce(function(prev, cur) {
        return prev + cur.total;
      }, 0);

      this.additionalAmount = total
      this.amount = parseInt(this.additionalAmount) + parseInt(this.reservation.amount)
    },
    next(){
      const additionals = this.add
      const totalAmount = this.amount
      this.$store.commit('setAdditionals',( additionals ))
      this.$store.commit('totalAmount',( totalAmount ))
      this.$router.push({path: '/checkoutfullday'})
    },
  },
  computed: {
    reservation:{
      get(){
        return this.$store.state.reservation
      },
    },
    lateCheckout:{
      get(){
        return this.$store.state.lateCheckout
      },
    },
  },
  components: {
    CheckIcon,
  },
  setup() {
    return {
      steps,
      moment
    }
  },
}
</script>
