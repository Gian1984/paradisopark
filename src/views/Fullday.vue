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

        <div class="sm:flex items-center justify-between bg-gray-50 mb-4 p-4">
          <!-- SELECT NUMBER OF PEOPLE -->
          <div>

            <Listbox as="div" class="mr-1" v-model="NumPeople" >
              <ListboxLabel class="block text-sm font-medium text-gray-700"> Number of people </ListboxLabel>
              <div class="mt-1 relative">
                <ListboxButton class="bg-white relative w-full border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                  <span v-if="NumPeople.name" class="block truncate">{{ NumPeople.name }}</span>
                  <span v-else class="block truncate">Make your Choise</span>
                  <span class="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                    <SelectorIcon class="h-5 w-5 text-gray-400" aria-hidden="true" />
                  </span>
                </ListboxButton>

                <transition leave-active-class="transition ease-in duration-100" leave-from-class="opacity-100" leave-to-class="opacity-0">
                  <ListboxOptions class="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-60 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
                    <ListboxOption as="template" v-for="person in numberOfPeopleFullDay" :key="person.id" :value="person" v-slot="{ active, selected }">
                      <li :class="[active ? 'text-white bg-indigo-600' : 'text-gray-900', 'cursor-default select-none relative py-2 pl-3 pr-9']" v-on:click="checknumberOfPeople(person.value, person.name)">
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

            <Listbox as="div" class="ml-1" v-model=" PreSelectedCheckOut">
              <ListboxLabel class="block text-sm font-medium text-gray-700"> Checkout </ListboxLabel>
              <div class="mt-1 relative">
                <ListboxButton class="bg-white relative w-full border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                  <span v-if=" PreSelectedCheckOut.name" class="block truncate">{{  PreSelectedCheckOut.name }}</span>
                  <span v-else class="block truncate">Make your Choise</span>
                  <span class="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                    <SelectorIcon class="h-5 w-5 text-gray-400" aria-hidden="true" />
                  </span>
                </ListboxButton>

                <transition leave-active-class="transition ease-in duration-100" leave-from-class="opacity-100" leave-to-class="opacity-0">
                  <ListboxOptions class="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-60 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
                    <ListboxOption as="template" v-for="time in lateCheckout" :key="time.id" :value="time" v-slot="{ active, selected }">
                      <li :class="[active ? 'text-white bg-indigo-600' : 'text-gray-900', 'cursor-default select-none relative py-2 pl-3 pr-9']" v-on:click="latecheckout(time.price, time.slot, time.start, time.end)">
                        <span :class="[selected ? 'font-semibold' : 'font-normal', 'block truncate']">
                          {{ time.name }}
                        </span>
                        <span class="hidden">{{ time.start }}</span>
                        <span class="hidden">{{ time.end }}</span>
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


        <!--ERROR No guests selected-->
        <div v-if="this.emptyGuests" class="rounded-md bg-red-50 p-4 mb-4">
          <div class="flex">
            <div class="flex-shrink-0">
              <XCircleIcon class="h-5 w-5 text-red-400" aria-hidden="true" />
            </div>
            <div class="ml-3">
              <p class="text-sm font-medium text-red-800">{{ emptyGuests }}</p>
            </div>
            <div class="ml-auto pl-3">
              <div class="-mx-1.5 -my-1.5">
                <button type="button" v-on:click="clearError" class="inline-flex bg-red-50 rounded-md p-1.5 text-red-500 hover:bg-red-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-red-50 focus:ring-red-600">
                  <span class="sr-only">Dismiss</span>
                  <XIcon class="h-5 w-5" aria-hidden="true" />
                </button>
              </div>
            </div>
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
                       v-on:click="calculate()"

        />

      </section>

      <!-- Order summary -->
      <section aria-labelledby="summary-heading" class="mt-16 bg-gray-50 px-4 py-6 sm:p-6 lg:p-8 lg:mt-0 lg:col-span-5">
        <h2 id="summary-heading" class="text-lg font-medium text-gray-900">Order summary</h2>

        <dl class="mt-6 space-y-4">
          <div class="flex items-center justify-between">
            <dt class="text-sm text-gray-600">Numbers of guest</dt>
            <dd class="text-sm font-medium text-gray-900">{{ guests }}</dd>
          </div>
          <div v-if="range" class="border-t border-gray-200 pt-4 flex items-center justify-between">
            <dt class="flex items-center text-sm text-gray-600">
              <span>From date</span>
            </dt>
            <dd class="text-sm font-medium text-gray-900">{{ moment(range.start).format('DD-MM-YYYY')}} </dd>
          </div>
          <div v-if="range" class="border-t border-gray-200 pt-4 flex items-center justify-between">
            <dt class="flex items-center text-sm text-gray-600">
              <span>To date</span>
            </dt>
            <dd class="text-sm font-medium text-gray-900">{{ moment(range.end).format('DD-MM-YYYY')}} </dd>
          </div>
          <div v-if="onlyRoomPrice" class="border-t border-gray-200 pt-4 flex items-center justify-between">
            <dt class="flex items-center text-sm text-gray-600">
              <span>Room total</span>
            </dt>
            <dd class="text-sm font-medium text-gray-900">{{ onlyRoomPrice / 100 }} €</dd>
          </div>
          <div v-if="checkoutPrice" class="border-t border-gray-200 pt-4 flex items-center justify-between">
            <dt class="flex text-sm text-gray-600">
              <span>Late checkout</span>
            </dt>
            <dd class="text-sm font-medium text-gray-900">{{ checkoutPrice / 100  }} €</dd>
          </div>
          <div class="border-t border-gray-200 pt-4 flex items-center justify-between">
            <dt class="text-base font-medium text-gray-900">Order total</dt>
            <dd class="text-base font-medium text-gray-900">{{ amount / 100  }} €</dd>
          </div>
        </dl>

        <div class="mt-6">
          <button v-on:click="next( range, amount, guests)" type="button" class="w-full bg-indigo-600 border border-transparent rounded-md shadow-sm py-3 px-4 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-indigo-500">Next</button>
        </div>


        <!--ERROR No all the field are filled-->
        <div v-if="this.emptySelection" class="rounded-md bg-red-50 p-4 mb-4 mt-4">
          <div class="flex">
            <div class="flex-shrink-0">
              <XCircleIcon class="h-5 w-5 text-red-400" aria-hidden="true" />
            </div>
            <div class="ml-3">
              <p class="text-sm font-medium text-red-800">{{ emptySelection }}</p>
            </div>
            <div class="ml-auto pl-3">
              <div class="-mx-1.5 -my-1.5">
                <button type="button" v-on:click="this.emptySelection = ''" class="inline-flex bg-red-50 rounded-md p-1.5 text-red-500 hover:bg-red-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-red-50 focus:ring-red-600">
                  <span class="sr-only">Dismiss</span>
                  <XIcon class="h-5 w-5" aria-hidden="true" />
                </button>
              </div>
            </div>
          </div>
        </div>

      </section>
    </form>

  </section>
</template>

<script>
import 'v-calendar/dist/style.css';

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
  XCircleIcon,
  XIcon,
} from '@heroicons/vue/solid'
import moment from "moment";
const steps = [
  { name: 'Step 1', href: '/fullday', status: 'current' },
  { name: 'Step 2', href: '/additionalfullday', status: 'upcoming' },
  { name: 'Step 3', href: '#', status: 'upcoming' },
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
  beforeMount() {

    // Receiving groups
    this.axios.get(process.env.VUE_APP_URL_API + "api/groups",)
        .then(response => {
          this.numberOfPeopleFullDay = response.data
        })

    // Receiving checkouts
    this.axios.get(process.env.VUE_APP_URL_API + "api/checkouts",)
        .then(response => {
          this.lateCheckout = response.data
        })

  },

  mounted() {
    this.axios.get(process.env.VUE_APP_URL_API + "api/timeslots",)
        .then(response => {
          this.timeslots = response.data
        })


    // Receiving specialdays
    this.axios.get(process.env.VUE_APP_URL_API + "api/spcialdays",)
        .then(response => {
          this.specialday = response.data
        })

    // Receiving all the timeslots already booked
    this.axios.post(process.env.VUE_APP_URL_API + "api/slots")
        .then(response => {
          let slots = response.data
          this.slots = slots.map(element=>{
            return { start: new Date(element.startdate), end: new Date(element.finishdate), starttime: element.starttime, finishtime: element.finishtime, slot: element.slot_id }
          })
        })

    this.axios.post(process.env.VUE_APP_URL_API + "api/fulldays")
        .then(response => {
          let fulldays = response.data
          this.fulldays = fulldays.map(element=>{
            return { start: new Date(element.startdate), end: new Date(element.finishdate), starttime: element.starttime, finishtime: element.finishtime, slot: element.slot_id }
          })
          // Filter all the fulldays where the reservation takes only the first slot of the checkout day
          let slot1 = this.fulldays.filter(it => it.slot.includes(1));
          slot1.map(function(item){
            let end =  new Date(item.end)
            end.setDate(end.getDate() - 1)
            item.end = end
            return item;
          })
          // Filter all the fulldays where the the reservtion take more than first slot ( late checkout )
          let otherSlot = this.fulldays.filter(it => it.slot  != 1);
          // merge de result in order to correctly populate the calendar daily based ( if standard checkout we can concat another fulldays reservation - else book the full day )
          // slot1 = standard chekout , otherSlot = take all the day coz there is late checkout, this.slots = if there is a timeslot taken block the fullday
          let dates = [...slot1, ...otherSlot, ...this.slots]
          this.dates = dates
          let disable =  [
            this.dates
          ]
          this.disableCalendar = disable[0]
        })
    this.axios.get(process.env.VUE_APP_URL_API + "api/products ")
        .then(response => {
          this.products = response.data
        })
  },


  methods:{

    latecheckout(price, slot, start, end){
      this.onlyRoomPrice=''
      this.amount = ''
      this.range = ''
      this.checkoutPrice = price
      this.checkOutSlot = slot
      this.checkOutStart = start
      this.checkOutEnd = end
    },

    cons(){
      console.log(this.range)
    },

    checknumberOfPeople(e, name){
      this.PreSelectedNumberOfPeople = name
      this.onlyRoomPrice=''
      this.amount = ''
      this.emptyDates = ''
      this.emptyGuests = ''
      this.axios.post(process.env.VUE_APP_URL_API + "api/fulldays")
          .then(response => {
            let fulldays = response.data
            this.fulldays = fulldays.map(element=>{
              return { start: new Date(element.startdate), end: new Date(element.finishdate), starttime: element.starttime, finishtime: element.finishtime, slot: element.slot_id }
            })
            // Filter all the fulldays where the reservation takes only the first slot of the checkout day
            let slot1 = this.fulldays.filter(it => it.slot.includes(1));
            slot1.map(function(item){
              let end =  new Date(item.end)
              end.setDate(end.getDate() - 1)
              item.end = end
              return item;
            })
            // Filter all the fulldays where the the reservtion take more than first slot ( late checkout )
            let otherSlot = this.fulldays.filter(it => it.slot  != 1);
            // merge de result in order to correctly populate the calendar daily based ( if standard checkout we can concat another fulldays reservation - else book the full day )
            // slot1 = standard chekout , otherSlot = take all the day coz there is late checkout, this.slots = if there is a timeslot taken block the fullday
            let dates = [...slot1, ...otherSlot, ...this.slots]
            this.dates = dates
          })
      // passing like event the number of select number of people and apply condition weekend => less than 16 no weekend
      if(e == "8" || e == "9" || e == "10"){
        this.guests = e
        this.amount = ''
        this.range = ''
        let disable =  [
          this.dates
        ]
        let weekend = {weekdays: [6, 7,]}
        disable[0].unshift(weekend);
        let bookeed =  [
          disable[0]
        ]
        this.disableCalendar = bookeed[0]
        this.guests = e
      } else {
        this.guests = e
        this.amount = ''
        this.range = ''
        // this.dates.shift()
        let disable =  [
          this.dates
        ]
        this.disableCalendar = disable[0]
        this.guests = e
      }
    },

    clearError(){
      this.emptyGuests = ''
      this.range = ''
    },

    calculate() {

      if(this.range == '') {
        this.emptyDates = 'Please select a valid range of days'
      } else {
        if(this.guests ==''){
          this.emptyGuests = 'Please select number of guests'
        } else {
          // setting const = to data from DB
          const specialday = this.specialday
          // Formatting selected starting date
          let startDate = moment(this.range['start']).format('MM-DD-YYYY')
          // Formatting selected ending date
          let toDate = moment(this.range['end']).format('MM-DD-YYYY')
          // Filter if selected starting date OR selected ending date are inside range of special day
          let resultProductData = specialday.filter(element => {
            // Formatting special day starting range
            let fromDate = element.fromMonth+'-'+element.fromDate+'-'+moment(this.range['start']).format('YYYY')
            // Formatting special day ending range
            let endDate = element.toMonth+'-'+element.toDate+'-'+moment(this.range['end']).format('YYYY')
            // check condition
            if  (  startDate >= fromDate && startDate <=  endDate ||  toDate >= fromDate && toDate <=  endDate  ){
              // return an array with the special day period range hit by the day starting range or the day ending range
              return true
            }
          });
          if (resultProductData != ''){
            //THERE ARE SPECIAL DATE IN THE SELECTED RANGE OF DATE
            let difference = this.range['start'] - this.range['end']
            let daysdifference = Math.ceil(difference / (1000 * 3600 * 24));
            let days = Math.abs(daysdifference )
            let amount = days * this.products[0]['price'] * this.guests
            // Partial total wihtout late checkout
            this.onlyRoomPrice = (((amount / 100) * this.products[0].specialdayinflation) + amount)
            //Total
            if(this.checkoutPrice != '') {
              this.amount = (((amount / 100) * this.products[0].specialdayinflation) + amount) + parseInt(this.checkoutPrice)
            } else {
              this.amount = (((amount / 100) * this.products[0].specialdayinflation) + amount)
            }
          } else {
            // NO SPECIAL DATE IN THE SELECTED RANGE OF DATE
            // Calculate how many Friday & Saturay & Sunday in the range of reservation
            let dDate1 = new Date(this.range['start'])
            let dDate2 = new Date(this.range['end'])
            //We are working with time stamps
            let from = dDate1.getTime()
            let to = dDate2.getTime()
            let tempDate = new Date()
            let count = 0;
            //loop through each day between the dates 86400000 = 1 day
            for(let _from = from; _from < to; _from += 86400000){
              //set the day
              tempDate.setTime(_from);
              //If it is a weekend add 1 to count
              if ((tempDate.getDay() <= 0) || (tempDate.getDay() >= 4)) {
                count++;
              }
            }
            if(count == 0){
              //  NO WEEKEND BETWEEN RANGE OF DATE
              // Total number of day from dates range picker
              let difference = this.range['start'] - this.range['end']
              let daysdifference = Math.ceil(difference / (1000 * 3600 * 24));
              let days = Math.abs(daysdifference )
              // Total
              let amount = days * this.products[0]['price'] * this.guests
              // Partial total wihtout late checkout
              this.onlyRoomPrice = amount
              // Total
              if(this.checkoutPrice != '') {
                this.amount = amount + parseInt(this.checkoutPrice)
              } else {
                this.amount = amount
              }

            } else {
              // THERE IS WEEKEND BETWEEN RANGE OF DATE
              // Total number of day from dates range picker
              let difference = this.range['start'] - this.range['end']
              let daysdifference = Math.ceil(difference / (1000 * 3600 * 24));
              let days = Math.abs(daysdifference )
              //sistem count the weekend days but reservation sistem is based on night so -1
              let night = count -1
              // Amount for weekend nights
              let weekend = night * this.products[0]['price'] * this.guests
              // Adding inflation for weekend nights
              let weekendTotal = (((weekend / 100) * this.products[0].weekendinflation) + weekend)
              // Number of week days
              let weekday = days - night
              // Amount for week nights
              let weekdayTotal = weekday * this.products[0]['price'] * this.guests
              // Partial total wihtout late checkout
              this.onlyRoomPrice =weekendTotal + weekdayTotal
              // Total
              if(this.checkoutPrice != '') {
                this.amount = weekendTotal + weekdayTotal + parseInt(this.checkoutPrice)
              }
              else{
                this.amount = weekendTotal + weekdayTotal
              }
            }
          }
        }
      }
    },

    next( range, amount, guests ){

      if(this.amount == '' || this.onlyRoomPrice ==''){
        this.emptySelection = 'Please fill all the field necessary to complete your reservation '
      } else {

        let fromDate = this.range.start
        let toDate = this.range.end

        if(this.checkoutPrice == '') {
           this.checkoutPrice = 0
        }
        if(this.checkOutStart ==""){
          this.checkOutStart = this.lateCheckout[0]['start']
        }
        if(this.checkOutEnd ==""){
          this.checkOutEnd = this.lateCheckout[0]['end']
        }
        if(this.checkOutSlot==""){
          this.checkOutSlot = this.lateCheckout[0]['slot']
        }

        const book =
            {
              start: fromDate,
              end:toDate,
              dates: range,
              amount: amount,
              guests: guests,
              slot: this.checkOutSlot,
              onlyRoomPrice: this.onlyRoomPrice,
              checkoutPrice: this.checkoutPrice,
              checkOutStart:this.checkOutStart,
              checkOutEnd: this.checkOutEnd,
            }

        // this.$store.commit('lateCheckout', (this.checkoutPrice))
        this.$store.commit('setReservation', (book))
        this.$router.push({path: '/additionalfullday'})
      }
    },
  },

  data() {
    return {
      lateCheckout:'',
      numberOfPeopleFullDay:'',
      specialday:'',
      PreSelectedCheckOut:[{name: 'Make your choise', price: 0}],
      NumPeople:[{name: 'Make your choise'}],
      emptySelection:'',
      onlyRoomPrice:'',
      checkoutPrice:'',
      checkOutSlot: 1,
      checkOutStart:'',
      checkOutEnd: '',
      emptyGuests:'',
      dates:'',
      slots:'',
      timeslots:'',
      fulldays:'',
      guests:'',
      amount:'',
      products:'',
      disabledDays: [],
      disableCalendar:[],
      reservations:'',
      range:'',
      matchSpecialDay: '',
    };
  },
  components: {
    CheckIcon,
    ChevronLeftIcon,
    SelectorIcon,
    XCircleIcon,
    XIcon,
    Listbox,
    ListboxButton,
    ListboxLabel,
    ListboxOption,
    ListboxOptions,
  },
  setup() {

    return {
      steps,
      data,
      moment
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
