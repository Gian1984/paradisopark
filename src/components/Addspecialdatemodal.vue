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
                <p class="mt-1 text-3xl font-extrabold text-gray-900">Modify Special days</p>
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
                        <label for="from_day" class="block text-xs font-small text-gray-700">From day:</label>
                        <select v-model="data.fromDate" id="from_day" name="from_day" class="bg-gray-200 mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md">
                          <option>day</option>
                          <option value="01">01</option>
                          <option value="02">02</option>
                          <option value="03">03</option>
                          <option value="04">04</option>
                          <option value="05">05</option>
                          <option value="06">06</option>
                          <option value="07">07</option>
                          <option value="08">08</option>
                          <option value="09">09</option>
                          <option value="10">10</option>
                          <option value="11">11</option>
                          <option value="12">12</option>
                          <option value="13">13</option>
                          <option value="14">14</option>
                          <option value="15">15</option>
                          <option value="16">16</option>
                          <option value="17">17</option>
                          <option value="18">18</option>
                          <option value="19">19</option>
                          <option value="20">20</option>
                          <option value="21">21</option>
                          <option value="22">22</option>
                          <option value="23">23</option>
                          <option value="24">24</option>
                          <option value="25">25</option>
                          <option value="26">26</option>
                          <option value="27">27</option>
                          <option value="28">28</option>
                          <option value="29">29</option>
                          <option value="30">30</option>
                          <option value="31">31</option>
                        </select>
                      </div>
                    </div>

                    <div class="py-2 sm:py-2 sm:gap-4">
                      <div>
                        <label for="from_month" class="block text-xs font-small text-gray-700">From month:</label>
                        <select v-model="data.fromMonth" id="from_month" name="from_month" class="bg-gray-200 mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md">
                          <option>month</option>
                          <option value="01">January</option>
                          <option value="02">February</option>
                          <option value="03">March</option>
                          <option value="04">April</option>
                          <option value="05">May</option>
                          <option value="06">June</option>
                          <option value="07">July</option>
                          <option value="08">August</option>
                          <option value="09">September</option>
                          <option value="10">October</option>
                          <option value="11">November</option>
                          <option value="12">December</option>
                        </select>
                      </div>
                    </div>

                    <div class="py-2 sm:py-2 sm:gap-4">
                      <div>
                        <label for="to-day" class="block text-xs font-small text-gray-700">To day:</label>
                        <select v-model="data.toDate" id="to-day" name="to-day" class="bg-gray-200 mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md">
                          <option>day</option>
                          <option value="01">01</option>
                          <option value="02">02</option>
                          <option value="03">03</option>
                          <option value="04">04</option>
                          <option value="05">05</option>
                          <option value="06">06</option>
                          <option value="07">07</option>
                          <option value="08">08</option>
                          <option value="09">09</option>
                          <option value="10">10</option>
                          <option value="11">11</option>
                          <option value="12">12</option>
                          <option value="13">13</option>
                          <option value="14">14</option>
                          <option value="15">15</option>
                          <option value="16">16</option>
                          <option value="17">17</option>
                          <option value="18">18</option>
                          <option value="19">19</option>
                          <option value="20">20</option>
                          <option value="21">21</option>
                          <option value="22">22</option>
                          <option value="23">23</option>
                          <option value="24">24</option>
                          <option value="25">25</option>
                          <option value="26">26</option>
                          <option value="27">27</option>
                          <option value="28">28</option>
                          <option value="29">29</option>
                          <option value="30">30</option>
                          <option value="31">31</option>
                        </select>
                      </div>
                    </div>

                    <div class="py-2 sm:py-2 sm:gap-4">
                      <div>
                        <label for="to_month" class="block text-xs font-small text-gray-700">To month:</label>
                        <select v-model="data.toMonth" id="to_month" name="to_month" class="bg-gray-200 mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md">
                          <option>month</option>
                          <option value="01">January</option>
                          <option value="02">February</option>
                          <option value="03">March</option>
                          <option value="04">April</option>
                          <option value="05">May</option>
                          <option value="06">June</option>
                          <option value="07">July</option>
                          <option value="08">August</option>
                          <option value="09">September</option>
                          <option value="10">October</option>
                          <option value="11">November</option>
                          <option value="12">December</option>
                        </select>
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
  props: ['special'],
  data() {
    return {
      attachment: null
    }
  },
  computed: {
    data: function() {
      if (this.special != null) {
        return this.special
      }
      return {
        name: "",
        fromDate: "",
        toDate: "",
        fromMonth: "",
        toMonth: "",
      }
    }
  },
  /*eslint-disable */
  methods: {
    uploadFile(id) {
        this.$emit('close', this.special)
    },
    close(){
      this.$emit('close', this.special)
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
