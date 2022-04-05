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

  {{users}}



</template>

<script>

const tabs = [
  { name: 'My Account', href: '/dashboard', current: true },
  { name: 'Timeslot reservations', href: '/timeslotreservations', current: false },
  { name: 'Full day reservations', href: '/fulldayreservations', current: false },
  { name: 'Price & date options', href: '/pricedateoptions', current: false },
  { name: 'Additional options', href: '/additionaloptions', current: false },
]

export default {



  mounted() {

    this.axios.get(process.env.VUE_APP_URL_API + "api/reservations")
        .then(response => {
          this.reservations = response.data
        })

    this.axios.get(process.env.VUE_APP_URL_API + "api/users")
        .then(response => {
          this.users = response.data
        })
  },

  data(){
    return{
      reservations:'',
      users:''
    }
  },


  setup() {
    return {
      tabs,
    }
  },
}
</script>
