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

              <div v-for="additional in additionals" :key="additional.id" class="flex justify-between">
                <dt>{{additional.name}}</dt>
                <dd class="text-gray-900">{{ additional.total }} €</dd>
              </div>

              <div class="flex justify-between">
                <dt>Room</dt>
                <dd class="text-gray-900">{{ reservation.get('amount') }} €</dd>
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

            <div v-for="additional in additionals" :key="additional.id" class="flex justify-between">
              <dt>{{additional.name}}</dt>
              <dd class="text-gray-900">{{ additional.total }} €</dd>
            </div>

            <div class="flex justify-between">
              <dt>Room</dt>
              <dd class="text-gray-900">{{ reservation.get('amount') }} €</dd>
            </div>

            <div class="flex items-center justify-between border-t border-gray-200 text-gray-900 pt-6">
              <dt class="text-base">Total</dt>
              <dd class="text-base">{{ totalAmount }}</dd>
            </div>

          </dl>

        </div>
      </section>

      <!-- Checkout form -->
      <section aria-labelledby="payment-heading" class="flex-auto overflow-y-auto px-4 pt-12 pb-16 sm:px-6 sm:pt-16 lg:px-8 lg:pt-0 lg:pb-24">


        <div class="max-w-lg mx-auto">

          <h1 class="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">Checkout</h1>

          {{ additionals }}

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

          <form class="mt-6">
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

              <div class="col-span-8 sm:col-span-9">
                <label for="expiration-date" class="block text-sm font-medium text-gray-700">Expiration date (MM/YY)</label>
                <div class="mt-1">
                  <input type="text" name="expiration-date" id="expiration-date" autocomplete="cc-exp" class="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                </div>
              </div>

              <div class="col-span-4 sm:col-span-3">
                <label for="cvc" class="block text-sm font-medium text-gray-700">CVC</label>
                <div class="mt-1">
                  <input type="text" name="cvc" id="cvc" autocomplete="csc" class="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
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

            <button type="submit" class="w-full mt-6 bg-indigo-600 border border-transparent rounded-md shadow-sm py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Pay {{ total }}</button>

            <p class="flex justify-center text-sm font-medium text-gray-500 mt-6">
              <LockClosedIcon class="w-5 h-5 text-gray-400 mr-1.5" aria-hidden="true" />
              Payment details stored in plain text
            </p>
          </form>
        </div>
      </section>
    </main>
  </section>
</template>

<script>
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'
import { LockClosedIcon, CheckIcon } from '@heroicons/vue/solid'

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
    }
  },
}
</script>
