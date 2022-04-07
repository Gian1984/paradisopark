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
                <p class="mt-1 text-3xl font-extrabold text-gray-900">Modify Groups</p>
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
                        <label for="email" class="block text-xs font-small text-gray-700">Email:</label>
                        <div class="mt-1">
                          <input v-model="data.email" type="email" name="email" id="email" class="bg-gray-200 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"/>
                        </div>
                      </div>
                    </div>

                    <div v-if="data.is_admin==0" class="py-2 sm:py-2 sm:gap-4">
                      <div class="flex justify-between">
                        <label for="not_admin" class="block text-xs font-medium text-gray-700 mt-2">Is Admin ?</label>
                      </div>
                      <div class="mt-1 flex">
                        <label><input type="checkbox" class="ios-switch green tinyswitch" id="not_admin" name="not_admin" checked required v-model="data.is_admin"/><div><div></div></div></label>
                        <span class="ml-2 text-sm mt-4">Cochez cette case pour rendre l'utilisateur administrateur</span>
                      </div>
                    </div>

                    <div v-else class="py-2 sm:py-2 sm:gap-4">
                      <div class="flex justify-between">
                        <label for="is-admin" class="block text-xs font-medium text-gray-700 mt-2">Is Admin ?</label>
                      </div>
                      <div class="mt-2">
                        <button type="button" @click="data.is_admin = 0" id="is-admin" class="inline-flex items-center px-4 py-2 border border-transparent text-xs font-medium rounded-full shadow-sm text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                          Désactiver la modalité d'administration
                        </button>
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
  props: ['user'],
  computed: {
    data: function() {
      if (this.user != null) {
        return this.user
      }
      return {
        name:'',
        email: '',
        is_admin:'',
      }
    }
  },
  /*eslint-disable */
  methods: {
    uploadFile(id) {
      this.$emit('close', this.user)
    },
    close(){
      this.$emit('close', this.user)
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
