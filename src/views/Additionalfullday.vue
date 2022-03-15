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
          <li v-for="(product, productIdx) in additionals" :key="product.id" class="flex py-3 sm:py-4">
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
                  <p class="mt-1 text-sm font-medium text-gray-900">{{ product.price }} €</p>
                </div>

                <div class="mt-4 sm:mt-0 sm:pr-9 flex flex-col">
                  <label :for="`quantity-${productIdx}`" class="mt-3 text-sm text-gray-500">Quantity</label>
                  <select :id="`quantity-${productIdx}`" :name="`quantity-${productIdx}`" class="max-w-full rounded-md border border-gray-300 py-1.5 text-base leading-5 font-medium text-gray-700 text-left shadow-sm focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                  </select>

                </div>
              </div>

              <!-- <p class="mt-4 flex text-sm text-gray-700 space-x-2">
                <CheckIcon v-if="product.inStock" class="flex-shrink-0 h-5 w-5 text-green-500" aria-hidden="true" />
                <ClockIcon v-else class="flex-shrink-0 h-5 w-5 text-gray-300" aria-hidden="true" />
                <span>{{ product.inStock ? 'In stock' : `Ships in ${product.leadTime}` }}</span>
              </p> -->
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
            <dd class="text-sm font-medium text-gray-900">{{ reservation.get('guests') }}</dd>
          </div>
          <div class="border-t border-gray-200 pt-4 flex items-center justify-between">
            <dt class="flex items-center text-sm text-gray-600">
              <span>Shipping estimate</span>
              <a href="#" class="ml-2 flex-shrink-0 text-gray-400 hover:text-gray-500">
                <span class="sr-only">Learn more about how shipping is calculated</span>
                <QuestionMarkCircleIcon class="h-5 w-5" aria-hidden="true" />
              </a>
            </dt>
            <dd class="text-sm font-medium text-gray-900">$5.00</dd>
          </div>
          <div class="border-t border-gray-200 pt-4 flex items-center justify-between">
            <dt class="flex text-sm text-gray-600">
              <span>Tax estimate</span>
              <a href="#" class="ml-2 flex-shrink-0 text-gray-400 hover:text-gray-500">
                <span class="sr-only">Learn more about how tax is calculated</span>
                <QuestionMarkCircleIcon class="h-5 w-5" aria-hidden="true" />
              </a>
            </dt>
            <dd class="text-sm font-medium text-gray-900">$8.32</dd>
          </div>
          <div class="border-t border-gray-200 pt-4 flex items-center justify-between">
            <dt class="text-base font-medium text-gray-900">Order total</dt>
            <dd class="text-base font-medium text-gray-900">{{ reservation.get('amount') }} €</dd>
          </div>
        </dl>

        <div class="mt-6">
          <button type="submit" class="w-full bg-indigo-600 border border-transparent rounded-md shadow-sm py-3 px-4 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-indigo-500">Add to cart</button>
        </div>
      </section>
    </form>


  </section>
</template>

<script>
import {
  CheckIcon,
  // ClockIcon,
  QuestionMarkCircleIcon,
} from '@heroicons/vue/solid'

const steps = [
  { name: 'Step 1', href: '/timeslot', status: 'complete' },
  { name: 'Step 2', href: 'additionaltimeslot', status: 'current' },
  { name: 'Step 3', href: '#', status: 'upcoming' },
]

// const products = [
//   {
//     id: 1,
//     name: 'Bath linen',
//     price: '9.50',
//     description: 'Comb + Towel + Slippers',
//     image: 'https://tailwindui.com/img/ecommerce-images/shopping-cart-page-01-product-01.jpg',
//     imageAlt: "Front of men's Basic Tee in sienna.",
//   },
//   {
//     id: 2,
//     name: 'Comb',
//     price: '5.50',
//     description: 'Unique size',
//     image: 'https://tailwindui.com/img/ecommerce-images/shopping-cart-page-01-product-02.jpg',
//     imageAlt: "Front of men's Basic Tee in black.",
//   },
//   {
//     id: 3,
//     name: 'Towel',
//     price: '2.00',
//     description: 'Unique size',
//     image: 'https://tailwindui.com/img/ecommerce-images/shopping-cart-page-01-product-03.jpg',
//     imageAlt: 'Insulated bottle with white base and black snap lid.',
//   },
//   {
//     id: 4,
//     name: 'Slippers',
//     price: '2.00',
//     description: 'Unique size',
//     image: 'https://tailwindui.com/img/ecommerce-images/shopping-cart-page-01-product-03.jpg',
//     imageAlt: 'Insulated bottle with white base and black snap lid.',
//   },
//   {
//     id: 5,
//     name: 'Cava',
//     price: '24.50',
//     description: '75cl',
//     image: 'https://tailwindui.com/img/ecommerce-images/shopping-cart-page-01-product-03.jpg',
//     imageAlt: 'Insulated bottle with white base and black snap lid.',
//   },
// ]

export default {

  mounted() {
    this.axios.get(process.env.VUE_APP_URL_API + "api/additionals")
        .then(response => {
          this.additionals = response.data
        })
  },

  data(){
    return{
      additionals:''
    }
  },

  computed: {

    reservation:{
      get(){
        return this.$store.state.reservation
      },
    },
    // range:{
    //   get(){
    //     return this.$store.state.range
    //   }
    // },
    // guests:{
    //   get(){
    //     return this.$store.state.guests
    //   }
    // }
  },


  components: {
    CheckIcon,
    QuestionMarkCircleIcon,
  },
  setup() {
    return {
      steps,
    }
  },
}
</script>
