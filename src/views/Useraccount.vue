<template>

    <header>
      <div class="bg-white">
        <div class="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
          <div class="text-center">
            <h2 class="text-base font-semibold text-indigo-600 tracking-wide uppercase">My reservation</h2>
            <p class="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">Take control of your reservation.</p>
          </div>
        </div>
      </div>
      {{user}}
    </header>

    <main>
      <div class="bg-gray-50">
        <div class="max-w-7xl mx-auto pb-12 px-4 sm:pb-16 sm:px-6 lg:px-8">
          <div class="mx-auto divide-y-2 divide-gray-200">
            <dl class="mt-6 space-y-6 divide-y divide-gray-200">
              <Disclosure as="div" v-for="(order, index) in sortedOrders" :key="index" class="pt-6" v-slot="{ open }">
                <dt class="text-lg">
                  <DisclosureButton class="text-left w-full flex justify-between items-start text-gray-400">

                    <div class="text-sm text-gray-900">
                      <p class="text-sm font-medium text-bord truncate">
                        Order Reference n° {{ order.id }}<br>
                      </p>
                    </div>
                    <div class="justify-end flex">
                      <span class="ml-6 h-7 flex items-center">
                        <ChevronDownIcon :class="[open ? '-rotate-180' : 'rotate-0', 'h-6 w-6 transform']" aria-hidden="true" />
                      </span>
                    </div>

                  </DisclosureButton>
                </dt>
                <DisclosurePanel as="dd" class="mt-2" style="max-height: 200vh">


                  <section aria-labelledby="summary-heading" class="my-4">
                    <h2 id="summary-heading" class="sr-only">Billing Summary</h2>

                    <div class="py-6 px-4 sm:px-6 lg:grid lg:grid-cols-12 lg:gap-x-8 lg:p-8">
                      <div class="sm:flex lg:col-span-7">

                        <div class="mt-6 sm:mt-0 sm:ml-6">
                          <h3 class="text-base font-medium text-gray-900">
                            name
                          </h3>
                          <p class="mt-2 text-sm font-medium text-gray-900">date</p>
                          <p class="mt-3 text-sm text-gray-500">
                            description
                          </p>
                        </div>
                      </div>
                    </div>

                    {{order}}

                    <div class="bg-gray-50 rounded-lg py-6 px-6 lg:px-0 lg:py-8 lg:grid lg:grid-cols-12 lg:gap-x-8">
                      <dl class="grid grid-cols-1 gap-6 text-sm sm:grid-cols-2 md:gap-x-8 lg:pl-8 lg:col-span-5">
                        <div>
                          <dt class="font-medium text-gray-900">Billing address</dt>
                          <dd class="mt-3 text-gray-500">
                            <span class="block">{{ order.user }}</span>
                            <span class="block">7363 Cynthia Pass</span>
                            <span class="block">Toronto, ON N3Y 4H8</span>
                          </dd>
                        </div>
                        <div>
                          <dt class="font-medium text-gray-900">Payment information</dt>
                          <dd class="mt-3 flex">
                            <div>
                              <svg aria-hidden="true" width="36" height="24" viewBox="0 0 36 24" xmlns="http://www.w3.org/2000/svg" class="h-6 w-auto">
                                <rect width="36" height="24" rx="4" fill="#224DBA" />
                                <path d="M10.925 15.673H8.874l-1.538-6c-.073-.276-.228-.52-.456-.635A6.575 6.575 0 005 8.403v-.231h3.304c.456 0 .798.347.855.75l.798 4.328 2.05-5.078h1.994l-3.076 7.5zm4.216 0h-1.937L14.8 8.172h1.937l-1.595 7.5zm4.101-5.422c.057-.404.399-.635.798-.635a3.54 3.54 0 011.88.346l.342-1.615A4.808 4.808 0 0020.496 8c-1.88 0-3.248 1.039-3.248 2.481 0 1.097.969 1.673 1.653 2.02.74.346 1.025.577.968.923 0 .519-.57.75-1.139.75a4.795 4.795 0 01-1.994-.462l-.342 1.616a5.48 5.48 0 002.108.404c2.108.057 3.418-.981 3.418-2.539 0-1.962-2.678-2.077-2.678-2.942zm9.457 5.422L27.16 8.172h-1.652a.858.858 0 00-.798.577l-2.848 6.924h1.994l.398-1.096h2.45l.228 1.096h1.766zm-2.905-5.482l.57 2.827h-1.596l1.026-2.827z" fill="#fff" />
                              </svg>
                              <p class="sr-only">Visa</p>
                            </div>
                            <div class="ml-4">
                              <p class="text-gray-900">Ending with {{ order.lastFour}}</p>
                              <p class="text-gray-600">Expires {{ order.expire }}</p>
                            </div>
                          </dd>
                        </div>
                      </dl>

                      <dl class="mt-8 divide-y divide-gray-200 text-sm lg:mt-0 lg:pr-8 lg:col-span-7">
                        <div class="pb-4 flex items-center justify-between">
                          <dt class="text-gray-600">Subtotal</dt>
                          <dd class="font-medium text-gray-900">$72</dd>
                        </div>
                        <div class="py-4 flex items-center justify-between">
                          <dt class="text-gray-600">Shipping</dt>
                          <dd class="font-medium text-gray-900">$5</dd>
                        </div>
                        <div class="py-4 flex items-center justify-between">
                          <dt class="text-gray-600">Tax</dt>
                          <dd class="font-medium text-gray-900">$6.16</dd>
                        </div>
                        <div class="pt-4 flex items-center justify-between">
                          <dt class="font-medium text-gray-900">Order total</dt>
                          <dd class="font-medium text-indigo-600">{{(order.amount /100).toFixed(2)}} €</dd>
                        </div>
                      </dl>
                    </div>
                  </section>


                </DisclosurePanel>
              </Disclosure>
            </dl>
          </div>
        </div>
      </div>
    </main>
</template>

<script>
import { QuestionMarkCircleIcon, XIcon, ChevronDownIcon } from '@heroicons/vue/outline'
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'

import moment from 'moment'


export default {
  data() {
    return {
      user:null,
      showModal: false,
      orders : [],
    }
  },

mounted() {

    this.user = JSON.parse(localStorage.getItem('bigStore.user'))

    this.axios.defaults.headers.common['Content-Type'] = 'application/json'
    this.axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('bigStore.jwt')
    this.axios.get(process.env.VUE_APP_URL_API + `api/users/${this.user.id}/orders`,)
        .then(response => this.orders = response.data
        )
  },

  /*eslint-disable */

  computed: {
    sortedOrders: function() {
      this.orders.sort( ( a, b) => {
        return new Date(b.id) - new Date(a.id);
      });
      return this.orders;
    },

    setUser:{
      get(){
        return this.$store.state.setUser
      }
    },
  },

  setup() {
    return {
      moment,
    }
  },

  components:{
    QuestionMarkCircleIcon,
    XIcon,
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
    ChevronDownIcon,

  },


}
</script>
