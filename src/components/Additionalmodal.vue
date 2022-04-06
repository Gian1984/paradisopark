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
                <p class="mt-1 text-3xl font-extrabold text-gray-900">Modify additional</p>
                <p class="max-w-md mt-5 mx-auto text-md text-gray-500">Start building for free, then add a site plan to go live.</p>
              </div>

              <div>
                <div class="flex justify-between">
                  <label for="photo" class="block text-xs font-medium text-gray-900">Photo</label>
                </div>
                <div class="mt-1 sm:border-t sm:border-gray-200 sm:pt-5">
                  <div class="flex justify-center max-w-12">
                    <div class="max-w-lg flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                      <div class="space-y-1 text-center">
                        <div class="mt-1 flex justify-center max-w-7">
                          <img :src="data.image" v-show="data.image != null" class="w-1/4" alt="car-image">
                        </div>
                        <div class="flex text-sm text-gray-600 justify-center">
                          <label class="custom-file-upload inline-flex items-center px-1 py-1 border border-transparent text-xs font-medium rounded-full shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                            <input type="file" id="file" @change="attachFile"/>
                            Upload
                          </label>
                        </div>
                        <p class="text-xs text-gray-500">
                          PNG, JPG, GIF up to 10MB
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="mt-2 divide-y divide-gray-200">

                <div class="mt-6">
                  <dl class="divide-y divide-gray-200">

                    <div class="py-2 sm:py-2 sm:gap-4">
                      <div class="relative border border-gray-300 rounded-md px-3 py-2 shadow-sm focus-within:ring-1">
                        <label for="name" class="absolute -top-2 left-2 -mt-px inline-block px-1 text-xs font-medium text-gray-900">Name</label>
                        <input v-model="data.name" type="text" name="name" id="name" class="block bg-gray-200 w-full border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm" :placeholder="data.name" />
                      </div>
                    </div>

                    <div class="py-2 sm:py-2 sm:gap-4">
                      <div class="relative border border-gray-300 rounded-md px-3 py-2 shadow-sm focus-within:ring-1">
                        <label for="description" class="absolute -top-2 left-2 -mt-px inline-block px-1 text-xs font-medium text-gray-900">Decription:</label>
                        <input v-model="data.description" type="text" name="description" id="description" class="block bg-gray-200 w-full border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm" :placeholder="data.description" />
                      </div>
                    </div>

                    <div class="py-2 sm:py-2 sm:gap-4">
                      <div class="relative border border-gray-300 rounded-md px-3 py-2 shadow-sm focus-within:ring-1">
                        <label for="price" class="absolute -top-2 left-2 -mt-px inline-block px-1 text-xs font-medium text-gray-900">Price:</label>
                        <input v-model="data.price" type="text" name="price" id="price" class="block bg-gray-200 w-full border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm" :placeholder="data.price + ' €'" />
                      </div>
                    </div>

                    <div class="py-2 sm:py-2 sm:gap-4">
                      <div class="relative border border-gray-300 rounded-md px-3 py-2 shadow-sm focus-within:ring-1">
                        <label for="language" class="absolute -top-2 left-2 -mt-px inline-block px-1 text-xs font-medium text-gray-900">Language:</label>
                        <input v-model="data.language" type="text" name="language" id="language" class="block bg-gray-200 w-full border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm" :placeholder="data.language" />
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
  props: ['product'],
  data() {
    return {
      attachment: null
    }
  },
  computed: {
    data: function() {
      if (this.product != null) {
        return this.product
      }
      return {
        attachment: null,
        name: "",
        price: "",
        description: "",
        language:"",
        image: false
      }
    }
  },
  /*eslint-disable */
  methods: {
    attachFile(event) {
      this.attachment = event.target.files[0];
      console.log(this.attachment)
    },
    uploadFile(id) {
      if (this.attachment != null) {
        let formData = new FormData();
        formData.append("image", this.attachment)
        let headers = {'Content-Type': 'multipart/form-data'}
        this.axios.post(process.env.VUE_APP_URL_API + `api/upload-file`, formData, {headers}).then(response => {
          this.product.image = response.data
          this.$emit('close', this.product)
        })
      } else {
        this.$emit('close', this.product)
      }
    },
    close(){
      this.$emit('close', this.product)
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
