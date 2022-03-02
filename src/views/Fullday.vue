<template>
<section class="max-w-xl mx-auto pt-24 pb-8 px-4 sm:pt-32 sm:px-6 lg:max-w-7xl lg:px-8">
  <nav aria-label="Progress" class="relative flex justify-center">
    <router-link to="/booking" class="absolute left-0 inline-flex items-center px-3 py-2 border border-transparent shadow-sm text-sm leading-4 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ">
      <ChevronLeftIcon class="-ml-0.5 mr-2 h-4 w-4" aria-hidden="true" />
      Back
    </router-link>
    <ol role="list" class="flex items-center mx-auto">
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

  <!-- <h1 class="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">Full day</h1>
  <h2>Book your wellness moment here easily and quickly</h2> -->
    <form class="mt-12 lg:grid lg:grid-cols-12 lg:gap-x-12 lg:items-start xl:gap-x-16">
      <section aria-labelledby="cart-heading" class="lg:col-span-7">
        <h2 id="cart-heading" class="sr-only">Items in your shopping cart</h2>

        <div class="flex items-center justify-between bg-gray-50 mb-4 p-4">
          <!-- SELECT NUMBER OF PEOPLE -->
          <div>
            <Listbox as="div"  v-model="selected">
              <ListboxLabel class="block text-sm font-medium text-gray-700"> Number of people </ListboxLabel>
              <div class="mt-1 relative">
                <ListboxButton class="bg-white relative w-full border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                  <span class="block truncate">{{ selected.name }}</span>
                  <span class="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                    <SelectorIcon class="h-5 w-5 text-gray-400" aria-hidden="true" />
                  </span>
                </ListboxButton>

                <transition leave-active-class="transition ease-in duration-100" leave-from-class="opacity-100" leave-to-class="opacity-0">
                  <ListboxOptions class="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-60 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
                    <ListboxOption as="template" v-for="person in numberOfPeopleFullDay" :key="person.id" :value="person" v-slot="{ active, selected }">
                      <li :class="[active ? 'text-white bg-indigo-600' : 'text-gray-900', 'cursor-default select-none relative py-2 pl-3 pr-9']" v-on:click="checknumberOfPeople(person.value)">
                        <span :class="[selected ? 'font-semibold' : 'font-normal', 'block truncate']">
                          {{ person.name }}
                        </span>

                        <span v-if="selected" :class="[active ? 'text-white' : 'text-indigo-600', 'absolute inset-y-0 right-0 flex items-center pr-4']">
                          <CheckIcon class="h-5 w-5" aria-hidden="true" />
                        </span>
                      </li>
                    </ListboxOption>
                  </ListboxOptions>
                </transition>
              </div>
            </Listbox>
            <small class="text-gray-400">The minimum price start for a group of 6 persons.</small>
          </div>
          <!-- SELECT CHECKOUT -->
          <div>
            <Listbox as="div" v-model="selectedCheckout">
              <ListboxLabel class="block text-sm font-medium text-gray-700"> Checkout </ListboxLabel>
              <div class="mt-1 relative">
                <ListboxButton class="bg-white relative w-full border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                  <span class="block truncate">{{ selectedCheckout.name }}</span>
                  <span class="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                    <SelectorIcon class="h-5 w-5 text-gray-400" aria-hidden="true" />
                  </span>
                </ListboxButton>

                <transition leave-active-class="transition ease-in duration-100" leave-from-class="opacity-100" leave-to-class="opacity-0">
                  <ListboxOptions class="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-60 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
                    <ListboxOption as="template" v-for="time in lateCheckout" :key="time.id" :value="time" v-slot="{ active, selected }">
                      <li :class="[active ? 'text-white bg-indigo-600' : 'text-gray-900', 'cursor-default select-none relative py-2 pl-3 pr-9']">
                        <span :class="[selected ? 'font-semibold' : 'font-normal', 'block truncate']">
                          {{ time.name }}
                        </span>

                        <span v-if="selected" :class="[active ? 'text-white' : 'text-indigo-600', 'absolute inset-y-0 right-0 flex items-center pr-4']">
                          <CheckIcon class="h-5 w-5" aria-hidden="true" />
                        </span>
                      </li>
                    </ListboxOption>
                  </ListboxOptions>
                </transition>
              </div>
            </Listbox>
            <small class="text-gray-400">The minimum price start for a group of 8 persons.</small>
          </div>
        </div>
        <!-- DATE PICKER -->


        <v-date-picker class="mycustomcalendar"
          :attributes="data.attributes"
          is-expanded
          is-range
          color="green"
          :disabled-dates="disableCalendar"
          :min-date='new Date()'
          v-model="range"

        />

        <div class="mt-6">
          <button v-on:click="calculate()" type="button" class="w-full bg-indigo-600 border border-transparent rounded-md shadow-sm py-3 px-4 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-indigo-500">Calculate</button>
        </div>

      </section>



      <!-- Order summary -->
      <section aria-labelledby="summary-heading" class="mt-16 bg-gray-50 px-4 py-6 sm:p-6 lg:p-8 lg:mt-0 lg:col-span-5">
        <h2 id="summary-heading" class="text-lg font-medium text-gray-900">Order summary</h2>

        <dl class="mt-6 space-y-4">
          <div class="flex items-center justify-between">
            <dt class="text-sm text-gray-600">Numbers of guest</dt>
            <dd class="text-sm font-medium text-gray-900">{{ guests }}</dd>
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
            <dd class="text-base font-medium text-gray-900">{{ amount }} €</dd>
          </div>
        </dl>

        <div class="mt-6">
          <button v-on:click="next( range, amount, guests)" type="button" class="w-full bg-indigo-600 border border-transparent rounded-md shadow-sm py-3 px-4 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-indigo-500">Add to cart</button>
        </div>
      </section>
    </form>

  </section>
</template>

<script>
  import 'v-calendar/dist/style.css';
  import { ref } from 'vue'
  import {
    Listbox,
    ListboxButton,
    ListboxLabel,
    ListboxOption,
    ListboxOptions,
  } from '@headlessui/vue'
  import {
    CheckIcon,
    ChevronLeftIcon,
    SelectorIcon,
    QuestionMarkCircleIcon,
  } from '@heroicons/vue/solid'

  const steps = [
    { name: 'Step 1', href: '/fullday', status: 'current' },
    { name: 'Step 2', href: '/additionalfullday', status: 'upcoming' },
    { name: 'Step 3', href: '#', status: 'upcoming' },
  ]

  const numberOfPeopleFullDay = [
    { id: 0, value: 0 ,name: 'Choise how many' },
    { id: 8, value: 8 , name: 'Group of max 8' },
    { id: 9, value: 9 , name: 'Group of max 8 +1' },
    { id: 10, value: 10 , name: 'Group of max 8 +2' },
    { id: 16, value: 16 , name: 'Group of max 16' },
    { id: 17, value: 17 , name: 'Group of max 16 +1' },
    { id: 18, value: 18 , name: 'Group of max 16 +2' },
    { id: 30, value: 30 , name: 'Group of max 30' },
  ]

  const lateCheckout = [
    { id: 10, name: 'Checkout at 10:00' },
    { id: 15, name: 'Late checkout at 15:00 (+350€)' },
    { id: 19, name: ' Late checkout at 19:00 (+600€)' },
  ]

  let data = {
    disable:{},
    attributes: [
      {
        key: 'today',
        highlight: {
          color: 'blue',
          fillMode: 'solid',
        },
        dates: new Date(),
      },
    ],
  }

  export default {

    mounted() {


      this.axios.get(process.env.VUE_APP_URL_API + "api/reservations")
          .then(response => {

            let reservations = response.data
                this.reservations = reservations.map(element=>{

                  console.log(this.reservations)

                  let end = new Date(element.finishdate)
                  end.setDate(end.getDate() - 1)

                  return { start: new Date(element.startdate), end: end }

                })

          })


      this.axios.get(process.env.VUE_APP_URL_API + "api/products ")
          .then(response => {
            this.products = response.data
          })

    },

    methods:{

      cons(){
        console.log(this.range)
      },

      checknumberOfPeople(e){


        this.axios.get(process.env.VUE_APP_URL_API + "api/reservations")
            .then(response => {

              let reservations = response.data
              this.reservations = reservations.map(element=>{

                return { start: new Date(element.startdate), end: new Date(element.finishdate) }

              })

            })


        if(e == "8" || e == "9" || e == "10"){

          this.guests = ''
          this.amount = ''
          this.range = ''

          let disable =  [
            this.reservations
          ]
          let weekend = {weekdays: [6, 7,]}
          disable[0].unshift(weekend);
          let bookeed =  [
            disable[0]
          ]
          this.disableCalendar = bookeed[0]
          this.guests = e

        } else {

          this.guests = ''
          this.amount = ''
          this.range = ''

          let disable =  [
            this.reservations
          ]
          this.disableCalendar = disable[0]
          this.guests = e

        }
      },

      calculate(){
        let difference = this.range['start'] - this.range['end']
        let daysdifference = Math.ceil(difference / (1000 * 3600 * 24));
        let days = Math.abs(daysdifference )
        let amount = days * this.products[0]['price'] * this.guests
        this.amount = amount
      },

      next( range, amount, guests ){

        this.$store.commit('setReservationRange',( range ))
        this.$store.commit('setReservationAmount',( amount ))
        this.$store.commit('setReservationGuests',( guests ))

        this.$router.push({path: '/additionalfullday'})
        },




    },

    data() {
      return {
        guests:'',
        amount:'',
        products:'',
        disabledDays: [],
        disableCalendar:[],
        reservations:'',
        range:''
    };
  },

    components: {
      CheckIcon,
      ChevronLeftIcon,
      SelectorIcon,
      QuestionMarkCircleIcon,
      Listbox,
      ListboxButton,
      ListboxLabel,
      ListboxOption,
      ListboxOptions,

    },
    setup() {
      const selected = ref(numberOfPeopleFullDay[0])
      const selectedCheckout = ref(lateCheckout[0])

      return {
        steps,
        numberOfPeopleFullDay,
        lateCheckout,
        selected,
        selectedCheckout,
        data,
      }
    },
  }



</script>
<style>
.mycustomcalendar{
  background: rgb(249, 250, 251);
  border-radius: 0;
  border: none;
}
/* COLOR WEEKDAY */
/* .vc-weekday{
  color:#2D3748;
} */

</style>
