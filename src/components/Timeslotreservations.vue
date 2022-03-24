<template>
  <div class="max-w-7xl mx-auto top-20 py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
    <div class="sm:hidden">
      <label for="tabs" class="sr-only">Select a tab</label>
      <!-- Use an "onChange" listener to redirect the user to the selected tab URL. -->
      <select id="tabs" name="tabs" class="block w-full focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md">
        <option v-for="tab in tabs" :key="tab.name" :selected="tab.current">{{ tab.name }}</option>
      </select>
    </div>
    <div class="hidden sm:block">
      <div class="border-b border-gray-200">
        <nav class="-mb-px flex" aria-label="Tabs">
          <router-link v-for="tab in tabs" :key="tab.name" :to="tab.href" :class="[tab.current ? 'border-indigo-500 text-indigo-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300', 'w-1/4 py-4 px-1 text-center border-b-2 font-medium text-sm']" :aria-current="tab.current ? 'page' : undefined">
            {{ tab.name }}
          </router-link>
        </nav>
      </div>
    </div>
  </div>


  <div class="bg-white">
    <div class="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
      <div class="text-center">
        <h2 class="text-base font-semibold text-indigo-600 tracking-wide uppercase">Pricing</h2>
        <p class="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">handle time slots reservations</p>
        <p class="max-w-xl mt-5 mx-auto text-xl text-gray-500">Start building for free, then add a site plan to go live. Account plans unlock additional features.</p>
      </div>
    </div>
  </div>

  <div class="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
    <div class="flex flex-col mt-10" style="max-height: 200Vh">
      <h1 class="mt-10 font-bold text-3xl px-4" id="order">Commandes actives</h1>

      <!--  start search box-->

      <div class="px-4">
        <label for="first-name" class="mt-5 block text-sm font-medium text-gray-700">
          Recherche par identifiant de commande
        </label>
        <input type="search" v-model="searchQuery" name=""  class="mt-1 appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" placeholder="Enter a search here!" />
      </div>

      <div>
        <p class="mb-2 text-right" v-if="searchQuery && filterOrders.length > 1 ">{{filterOrders.length}} results</p>
        <div v-if="!searchQuery"></div>

        <div v-else class="border-2 border-red-600 mt-2 overflow-hidden">
          <div v-for="order in filterOrders" :key="order.id" class="py-3 border-b-4 border-indigo-600 mb-2" >
            <div class="bg-white py-3 border-t border-b border-gray-200 shadow-sm sm:border">
              <div class="py-6 px-4 sm:px-6 lg:grid lg:grid-cols-12 lg:gap-x-8 lg:p-8">
                <div class="sm:flex lg:col-span-7 border-b ">

                  <div class="mt-6 sm:mt-0 sm:ml-6">
                    <h1 class="text-base font-xlarge text-gray-900">
                      Commande n° {{ order.id }}
                    </h1>
                    <p class="text-gray-500 font-medium">blabla</p>
                  </div>
                </div>


                <div class="sm:flex lg:col-span-7 mt-5">
                  <dl class="grid grid-cols-2 gap-x-6 text-sm">
                    <div>
                      <dt class="font-medium text-gray-900">From:</dt>
                      <dd class="text-gray-500">
                        <span class="block">31-12-2022</span>
                      </dd>
                      <dt class="font-medium text-gray-900 mt-3">Number of guests:</dt>
                      <dd class="text-gray-500">
                        <span class="block">3 </span>
                      </dd>
                    </div>
                    <div>
                      <dt class="font-medium text-gray-900">To:</dt>
                      <dd class="text-gray-500 space-y-3">
                        <p>
                          30-11-2022
                        </p>
                      </dd>
                      <dt class="mt-3 font-medium text-gray-900">Checkout time:</dt>
                      <dd class="text-gray-500 space-y-3">
                        <p>
                          14:00
                        </p>
                      </dd>
                    </div>
                  </dl>
                </div>

                <div class="mt-6 lg:mt-0 lg:col-span-5 lg:mt-5">
                  <dl class="grid grid-cols-2 gap-x-6 text-sm">
                    <div>
                      // v-for on additionals
                      <dt class="font-medium text-gray-900">additionals:</dt>
                      <dd class="text-gray-500">
                        <span class="block">towels</span>
                        <span class="block">price</span>
                        <span class="block">quantity</span>
                      </dd>
                    </div>
                  </dl>
                </div>
              </div>
            </div>

            <div class="bg-gray-100 py-6 px-4 sm:px-6 lg:px-8 lg:py-8 lg:grid lg:grid-cols-12 lg:gap-x-8">
              <dl class="grid grid-cols-2 gap-6 text-sm sm:grid-cols-2 md:gap-x-8 lg:col-span-7">
                <div>
                  <dt class="font-medium text-gray-900">User account:</dt>
                  <dd class="mt-3 text-gray-500">
                    <span class="block">blabla</span>
                  </dd>
                </div>
                <div>
                  <dt class="font-medium text-gray-900">Informations de paiement:</dt>
                  <div class="mt-3">
                    <dd class="-ml-4 -mt-4 flex flex-wrap">

                      <div class="ml-4 mt-4">
                        <p class="text-gray-500">
                          <CreditCardIcon class="h-6 w-6"></CreditCardIcon>
                        </p>
                        <p class="text-gray-500">
                          Brand:  <span class="uppercase">{{ order.cardBrand }}</span>
                        </p>
                        <p class="text-gray-500">
                          Termine par: {{ order.lastFour }}
                        </p>
                        <p class="text-gray-500">
                          Expire: {{order.expire}}
                        </p>
                      </div>
                    </dd>
                  </div>
                </div>
              </dl>

              <dl class="mt-8 divide-y divide-gray-200 text-sm lg:mt-0 lg:col-span-5">
                <div class="pt-4 flex items-center justify-between">
                  <dt class="font-medium text-gray-900">ID transaction:</dt>
                  <dd class="font-medium text-indigo-600">{{ order.transactionID }}</dd>
                </div>
                <div class="pt-4 flex items-center justify-between">
                  <dt class="font-medium text-gray-900">Total de la commande</dt>
                  <dd class="font-medium text-indigo-600">€ {{order.amount/100}}</dd>
                </div>
              </dl>
            </div>
          </div>
        </div>

      </div>

      <!--  end search box-->

      <div class="-my-2 overflow-x-auto lg:-mx-8 mt-5">
        <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <main class="mx-auto">
              <div class="bg-gray-50">
                <div class="max-w-7xl mx-auto pb-12 px-4 sm:pb-16 sm:px-6 lg:px-8">
                  <div class="mx-auto divide-y-2 divide-gray-200">
                    <dl class="mt-6 space-y-6 divide-y divide-gray-200">
                      <Disclosure as="div" v-for="order in sortedOrders" :key="order.id" class="pt-6" v-slot="{ open }">
                        <dt class="text-lg">
                          <DisclosureButton class="text-left w-full flex justify-between items-start text-gray-400">
                            <p class="text-sm font-medium text-indigo-600 truncate">
                              Reference order n°{{order.id}}
                            </p>
                            <span class="ml-6 h-7 flex items-center">
                              <ChevronDownIcon :class="[open ? '-rotate-180' : 'rotate-0', 'h-6 w-6 transform']" aria-hidden="true" />
                            </span>
                          </DisclosureButton>
                        </dt>
                        <DisclosurePanel as="dd" class="mt-2">
                          <div class="py-3 border-b-4 border-indigo-600 " >
                            <div class="bg-white py-3 border-t border-b border-gray-200 shadow-sm sm:border">
                              <div class="py-6 px-4 sm:px-6 lg:grid lg:grid-cols-12 lg:gap-x-8 lg:p-8">
                                <div class="sm:flex lg:col-span-7 border-b ">
                                  <div class="mt-6 sm:mt-0 sm:ml-6">
                                    <h1 class="text-base font-xlarge text-gray-900">
                                      Référence de l'achat n° {{ order.id }}
                                    </h1>
                                    <p class="text-gray-500 font-medium">blabla</p>
                                  </div>
                                </div>
                                <div class="sm:flex lg:col-span-7 mt-5">
                                  <dl class="grid grid-cols-2 gap-x-6 text-sm">
                                    <div>
                                      <dt class="font-medium text-gray-900">From:</dt>
                                      <dd class="text-gray-500">
                                        <span class="block">31-12-2022</span>
                                      </dd>
                                      <dt class="font-medium text-gray-900 mt-3">Number of guests:</dt>
                                      <dd class="text-gray-500">
                                        <span class="block">3 </span>
                                      </dd>
                                    </div>
                                    <div>
                                      <dt class="font-medium text-gray-900">To:</dt>
                                      <dd class="text-gray-500 space-y-3">
                                        <p>
                                          30-11-2022
                                        </p>
                                      </dd>
                                      <dt class="mt-3 font-medium text-gray-900">Checkout time:</dt>
                                      <dd class="text-gray-500 space-y-3">
                                        <p>
                                          14:00
                                        </p>
                                      </dd>
                                    </div>
                                  </dl>
                                </div>

                                <div class="mt-6 lg:mt-0 lg:col-span-5 lg:mt-5">
                                  <dl class="grid grid-cols-2 gap-x-6 text-sm">
                                    <div>
                                      // v-for on additionals
                                      <dt class="font-medium text-gray-900">additionals:</dt>
                                      <dd class="text-gray-500">
                                        <span class="block">towels</span>
                                        <span class="block">price</span>
                                        <span class="block">quantity</span>
                                      </dd>
                                    </div>
                                  </dl>
                                </div>
                              </div>
                            </div>

                            <div class="bg-gray-100 py-6 px-4 sm:px-6 lg:px-8 lg:py-8 lg:grid lg:grid-cols-12 lg:gap-x-8">
                              <dl class="grid grid-cols-2 gap-6 text-sm sm:grid-cols-2 md:gap-x-8 lg:col-span-7">
                                <div>
                                  <dt class="font-medium text-gray-900">User account:</dt>
                                  <dd class="mt-3 text-gray-500">
                                    <span class="block">blabla</span>
                                    <span class="block">blabla</span>
                                    <span class="block">blabla</span>
                                  </dd>
                                </div>
                                <div>
                                  <dt class="font-medium text-gray-900">Payment information:</dt>
                                  <div class="mt-3">
                                    <dd class="-ml-4 -mt-4 flex flex-wrap">

                                      <div class="ml-4 mt-4">
                                        <p class="text-gray-500">
                                          <CreditCardIcon class="h-6 w-6"></CreditCardIcon>
                                        </p>
                                        <p class="text-gray-500">
                                          Brand:  <span class="uppercase">blabla</span>
                                        </p>
                                        <p class="text-gray-500">
                                          Ending with: blabla
                                        </p>
                                        <p class="text-gray-500">
                                          Expire: blabla
                                        </p>
                                      </div>
                                    </dd>
                                  </div>
                                </div>
                              </dl>

                              <dl class="mt-8 divide-y divide-gray-200 text-sm lg:mt-0 lg:col-span-5">
                                <div class="pt-4 flex items-center justify-between">
                                  <dt class="font-medium text-gray-900">ID trans:</dt>
                                  <dd class="font-medium text-indigo-600">blabla</dd>
                                </div>
                                <div class="pt-4 flex items-center justify-between">
                                  <dt class="font-medium text-gray-900">Total de la commande</dt>
                                  <dd class="font-medium text-indigo-600">€ {{order.amount/100}}</dd>
                                </div>
                                <div class="sm:flex p-2 text-right mt-2">
                                  <div class="ml-2  md:mt-0 lg:mt-0 text-right">
                                    <button type="button" @click="removeOrder(order.id, index)" class="inline-flex items-center p-2 border border-transparent rounded-full shadow-sm text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 text-right">
                                      <TrashIcon class="h-4 w-4" aria-hidden="true" />
                                    </button>
                                  </div>
                                </div>
                              </dl>
                            </div>
                          </div>
                        </DisclosurePanel>
                      </Disclosure>
                    </dl>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>
    </div>
  </div>



</template>

<script>
import { CreditCardIcon, ChevronDownIcon, TrashIcon } from '@heroicons/vue/outline'
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'
import moment from 'moment'

const tabs = [
  { name: 'My Account', href: '/dashboard', current: false },
  { name: 'Timeslot reservations', href: '/timeslotreservations', current: true },
  { name: 'Full day reservations', href: '/fulldayreservations', current: false },
  { name: 'Price & date options', href: '/pricedateoptions', current: false },
  { name: 'Additional options', href: '/additionaloptions', current: false },
]

export default {

  mounted() {
    this.axios.post(process.env.VUE_APP_URL_API + "api/slots")
        .then(response => {
          this.orders = response.data
        })

    this.fetchOrders();
  },

  /*eslint-disable */
  beforeMount(){

    this.axios.post(process.env.VUE_APP_URL_API + 'api/slots')
        .then(response =>
            this.orders = response.data
        )
  },

  computed: {

    filterOrders(){
      return this.orders.filter(order => order.id == this.searchQuery)
    },

    sortedOrders: function() {
      this.orders.sort( ( a, b) => {
        return new Date(b.id) - new Date(a.id);
      });
      return this.orders;
    }
  },

  methods: {
    fetchOrders(){
      this.axios.post(process.env.VUE_APP_URL_API + 'api/slots')
          .then(response =>
              this.orders = response.data
          )
    },

    removeOrder(orderID, index) {
      this.axios.delete(process.env.VUE_APP_URL_API + "api/reservations/" + orderID)
          .then(response => {
            this.orders.splice(index, 1)
          })

          .catch(error => {
            console.log(error);
          })
    },
  },


  data(){
    return{
      orders : [],
      facet: [],
      searchQuery: null,
    }
  },


  setup() {
    return {
      tabs,
      moment
    }
  },

  components: {
    CreditCardIcon,
    ChevronDownIcon,
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
    TrashIcon
  },
}
</script>
