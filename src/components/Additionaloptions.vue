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
        <p class="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">Handle Additionals</p>
        <p class="max-w-xl mt-5 mx-auto text-xl text-gray-500">Start building for free, then add a site plan to go live. Account plans unlock additional features.</p>
      </div>
    </div>
  </div>

<!--  <div class="bg-white">-->
<!--    <div class="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">-->
<!--      <h2 class="text-xl font-bold text-gray-900">Customers also bought</h2>-->
<!--      <div class="mt-8 grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">-->
<!--        <div v-for="(product, index) in products" v-bind:key="index">-->
<!--          <div class="relative">-->
<!--            <div class="relative w-full h-72 rounded-lg overflow-hidden">-->
<!--              <img :src="product.image" alt="additional-image" class="w-full h-full object-center object-cover" />-->
<!--            </div>-->
<!--            <div class="relative mt-4">-->
<!--              <h3 class="text-sm font-medium text-gray-900">{{ product.name }}</h3>-->
<!--              <p class="mt-1 text-sm text-gray-500">{{ product.description }}</p>-->
<!--            </div>-->
<!--            <div class="absolute top-0 inset-x-0 h-72 rounded-lg p-4 flex items-end justify-end overflow-hidden">-->
<!--              <div aria-hidden="true" class="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-black opacity-50" />-->
<!--              <p class="relative text-lg font-semibold text-white">{{ product.price }} €</p>-->
<!--            </div>-->

<!--            <button type="button" @click="editingItem = product"  class=" inline-flex items-center px-2 py-2 border border-transparent shadow-sm text-sm leading-4 font-medium rounded-full text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">-->
<!--              <PencilAltIcon class="h-4 w-4" aria-hidden="true" />-->
<!--            </button>-->
<!--          </div>-->
<!--        </div>-->
<!--      </div>-->

<!--    </div>-->
<!--  </div>-->

<!--  <Additionalmodal @close="endEditing" :product="editingItem" v-show="editingItem != null"></Additionalmodal>-->
<!--  <Additionalmodal @close="addProduct" :product="addingProduct" v-show="addingProduct != null"></Additionalmodal>-->

<!--  <button type="button" @click="newProduct" class="ml-4 mt-5 inline-flex items-center px-3 py-2 border border-transparent shadow-sm text-sm leading-4 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">-->
<!--    Add Product-->
<!--    <PlusCircleIcon class="ml-2 -mr-0.5 h-4 w-4" aria-hidden="true" />-->
<!--  </button>-->

  <div class="bg-white">
    <div class="max-w-7xl mx-auto pb-12 px-4 sm:pb-16 sm:px-6 lg:px-8">
      <div class="mx-auto divide-y-2 divide-gray-200">
        <dl class="mt-6 space-y-6 divide-y divide-gray-200">
          <Disclosure as="div" v-for="(product,index) in products" v-bind:key="index" class="pt-6" v-slot="{ open }">
            <dt class="text-lg">
              <DisclosureButton class="text-left w-full flex justify-between items-start text-gray-400">
                <div class="text-sm text-gray-900">
                  <p class="text-sm font-medium text-indigo-600 truncate">
                    {{ product.name }} <br>
                    Ref. produit n° {{ product.id }}
                  </p>
                </div>
                <div class="justify-end flex">
                  <div class="ml-2 inline ... flex">
                    <button type="button" @click="editingItem = product"  class=" inline-flex items-center px-2 py-2 border border-transparent shadow-sm text-sm leading-4 font-medium rounded-full text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                      <PencilAltIcon class="h-4 w-4" aria-hidden="true" />
                    </button>
                  </div>
                  <span class="ml-6 h-7 flex items-center">
                    <ChevronDownIcon :class="[open ? '-rotate-180' : 'rotate-0', 'h-6 w-6 transform']" aria-hidden="true" />
                  </span>
                </div>
              </DisclosureButton>
            </dt>
            <DisclosurePanel as="dd" class="mt-2">
              <div class="bg-white shadow overflow-hidden sm:rounded-lg">
                <div class="border-t border-gray-200 px-4 py-5 sm:p-0">
                  <dl class="sm:divide-y sm:divide-gray-200">
                    <div class="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                      <dt class="flex text-sm font-medium text-gray-500">
                        <MapIcon class="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" aria-hidden="true" />
                        Prix / KM €
                      </dt>
                      <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                        <input v-model="product.pricekm" >
                      </dd>
                    </div>
                    <div class="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                      <dt class="flex text-sm font-medium text-gray-500">
                        <ClockIcon class="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" aria-hidden="true" />
                        Prix / Hour €
                      </dt>
                      <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                        <input v-model="product.price" >
                      </dd>
                    </div>



                    <div class="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                      <dt class="flex text-sm font-medium text-gray-500">
                        <BriefcaseIcon class="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" aria-hidden="true" />
                        N° des bagages
                      </dt>
                      <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                        <input v-model="product.language" >
                      </dd>
                    </div>

                    <div class="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                      <dt class="flex  text-sm font-medium text-gray-500">
                        <DocumentTextIcon class="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" aria-hidden="true" />
                        Description
                      </dt>
                      <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                        {{ product.description }}
                      </dd>
                    </div>
                    <div class="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                      <dt class="flex text-sm font-medium text-gray-500">
                        <PhotographIcon class="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" aria-hidden="true" />
                        Photo
                      </dt>
                      <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                        <div class="flex-shrink-0 h-10">
                          <img class="h-10 rounded-full" :src="product.image" alt="car-photo" />
                        </div>
                      </dd>
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
  <Additionalmodal @close="endEditing" :product="editingItem" v-show="editingItem != null"></Additionalmodal>
  <Additionalmodal @close="addProduct"  :product="addingProduct" v-show="addingProduct != null"></Additionalmodal>
  <button type="button" @click="newProduct"  class="ml-4 mt-5 inline-flex items-center px-3 py-2 border border-transparent shadow-sm text-sm leading-4 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
    Add Product
    <PlusCircleIcon class="ml-2 -mr-0.5 h-4 w-4" aria-hidden="true" />
  </button>

</template>


<script>
import Additionalmodal from "@/components/Additionalmodal";
import { PlusCircleIcon,PencilAltIcon, DocumentTextIcon, ClockIcon, MapIcon, ChevronDownIcon, PhotographIcon, BriefcaseIcon, } from '@heroicons/vue/outline'
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'


const tabs = [
  { name: 'My Account', href: '/dashboard', current: false },
  { name: 'Timeslot reservations', href: '/timeslotreservations', current: false },
  { name: 'Full day reservations', href: '/fulldayreservations', current: false },
  { name: 'Price & date options', href: '/pricedateoptions', current: false },
  { name: 'Additional options', href: '/additionaloptions', current: true },
]

export default {

  data(){
    return{
      products:[],
      editingItem: null,
      addingProduct: null,
    }
  },

  components:{
    PlusCircleIcon,
    PencilAltIcon,
    Additionalmodal,
    Disclosure, DisclosureButton, DisclosurePanel,
    DocumentTextIcon, ClockIcon, MapIcon, ChevronDownIcon, PhotographIcon, BriefcaseIcon,
  },

  // beforeMount() {
  //   this.axios.get(process.env.VUE_APP_URL_API + 'api/additionals').then(response => this.products = response.data)
  // },

  mounted() {
    this.axios.get(process.env.VUE_APP_URL_API + "api/additionals")
        .then(response => {
          this.products = response.data
        })
  },

  methods: {
    newProduct() {
      this.addingProduct = {
        name: null,
        description: null,
        price: null,
        image: null,
        language:null,
      }
    },

    endEditing(product) {
      this.editingItem = null

      let index = this.products.indexOf(product)
      let name = product.name
      let description = product.description
      let price = product.price
      let language = product.language
      let image = product.image
      /*eslint-disable */
      this.axios.put(process.env.VUE_APP_URL_API + `api/additionals/${product.id}`, {name, description, price, language, image })
          .then(response => this.products[index] = product)
    },


    addProduct(product) {
      this.addingProduct = null

      let name = product.name
      let description = product.description
      let price = product.price
      let language = product.language
      let image = product.image

      this.axios.post(process.env.VUE_APP_URL_API + "api/additionals/", {name, description, price, language, image})
          .then(response => this.products.push(product))
    }
  },




  setup() {
    return {
      tabs,
    }
  },
}
</script>


