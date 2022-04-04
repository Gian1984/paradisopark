<template>
  <div class="bg-white bg-opacity-75 overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none justify-center items-center flex">
    <div class="relative w-auto my-6 mx-auto lg:max-w-6xl py-60">
      <!--content-->
      <div class="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none bg-gray-200">
        <!--header-->
        <div class="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t"></div>
        <!--body-->

        <main class="mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8">
          <div class="mx-auto mt-5 max-w-5xl">
            <section aria-labelledby="cart-heading" class="lg:col-span-7">

              <div class="text-center mb-10">
                <p class="mt-1 text-3xl font-extrabold text-gray-900">Modify Rooms</p>
                <p class="max-w-md mt-5 mx-auto text-md text-gray-500">Start building for free, then add a site plan to go live.</p>
              </div>


              <div class="mt-2 divide-y divide-gray-200">

                <div class="mt-6">
                  <dl class="divide-y divide-gray-200">

                    <div class="py-2 sm:py-2 sm:gap-4">
                      <div>
                        <label for="name" class="block text-xs font-small text-gray-700">Name:</label>
                        <div class="mt-1">
                          <input v-model="data.name" type="text" name="name" id="name" class="bg-gray-200 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"  />
                        </div>
                      </div>
                    </div>

                    <div class="py-2 sm:py-2 sm:gap-4">
                      <div>
                        <label for="price" class="block text-xs font-small text-gray-700">Price:</label>
                        <input v-model="data.price" type="text" name="price" id="price" class="bg-gray-200 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"/>
                      </div>
                    </div>

                    <div class="py-2 sm:py-2 sm:gap-4">
                      <div>
                        <label for="weekendinflation" class="block text-xs font-small text-gray-700">Weekend inflation:</label>
                        <div class="mt-1">
                          <input v-model="data.weekendinflation" type="text" name="weekendinflation" id="weekendinflation" class="bg-gray-200 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"  />
                        </div>
                      </div>
                    </div>

                    <div class="py-2 sm:py-2 sm:gap-4">
                      <div>
                        <label for="specialdayinflation" class="block text-xs font-small text-gray-700">Specialday inflation:</label>
                        <div class="mt-1">
                          <input v-model="data.specialdayinflation" type="text" name="specialdayinflation" id="specialdayinflation" class="bg-gray-200 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"  />
                        </div>
                      </div>
                    </div>

                    <div class="py-2 sm:py-2 sm:gap-4">
                      <div>
                        <label for="groupdiscount" class="block text-xs font-small text-gray-700">Group discount:</label>
                        <div class="mt-1">
                          <input v-model="data.groupdiscount" type="text" name="name" id="groupdiscount" class="bg-gray-200 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"  />
                        </div>
                      </div>
                    </div>

                  </dl>
                </div>
              </div>

              <div class="modal-footer mb-5">
                <slot name="footer">
                  <button type="button" @click="uploadFile(data.id)" class="inline-flex items-center px-4 py-2 border border-transparent text-xs rounded-full shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    Envoyer
                  </button>
                  <button type="button" @click="close" class="mt-5 ml-3 inline-flex items-center px-4 py-2 border border-indigo-600 text-xs rounded-full shadow-sm text-indigo-600 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    Quitter
                  </button>
                </slot>
              </div>

            </section>
          </div>
        </main>


      </div>
    </div>
  </div>
</template>

<script>

import { XIcon } from '@heroicons/vue/outline'

export default {
  props: ['room'],
  computed: {
    data: function() {
      if (this.room != null) {
        return this.room
      }
      return {
        name:'',
        price: '',
        weekendinflation:'',
        specialdayinflation:'',
        groupdiscount:'',
      }
    }
  },
  /*eslint-disable */
  methods: {
    uploadFile(id) {
      this.$emit('close', this.room)
    },
    close(){
      this.$emit('close', this.room)
    }
  },
  components:{
    XIcon
  }
}
</script>

<style>

input[type="file"] {
  display: none;
}

</style>
