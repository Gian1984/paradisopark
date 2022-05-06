<template>
  <section class="max-w-xl mx-auto pt-24 pb-8 px-4 sm:pt-32 sm:px-6 lg:max-w-7xl lg:px-8">

    <nav aria-label="Progress" class="relative flex justify-center">
      <router-link to="/booking" class="absolute left-0 inline-flex items-center px-3 py-2 border border-black shadow-sm text-sm leading-4 font-medium text-black bg-white hover:bg-black hover:text-white focus:outline-none focus:ring-0 focus:ring-offset-2 focus:ring-indigo-500 ">
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

<!--    <h2 class="text-center">Book your wellness moment here easily and quickly</h2>-->
    <form class="mt-8 lg:grid lg:grid-cols-12 lg:gap-x-12 lg:items-start xl:gap-x-16">
      <section aria-labelledby="cart-heading" class="lg:col-span-7">
        <h2 id="cart-heading" class="sr-only">Items in your shopping cart</h2>
        <div class="items-center bg-beige mb-4 p-4">
          <!-- SELECT NUMBER OF PEOPLE -->
          <div>
            <Listbox as="div" v-model="selected">
              <ListboxLabel class="block text-sm font-medium text-gray-700"> Number of people </ListboxLabel>
              <div class="mt-1 relative">
                <ListboxButton class="bg-white relative w-full border border-gray-300  shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-0 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                  <span class="block truncate">{{ selected.name }}</span>
                  <span class="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                        <SelectorIcon class="h-5 w-5 text-gray-400" aria-hidden="true" />
                      </span>
                </ListboxButton>

                <transition leave-active-class="transition ease-in duration-100" leave-from-class="opacity-100" leave-to-class="opacity-0">
                  <ListboxOptions class="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-60 py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
                    <ListboxOption as="template" v-for="person in numberOfPeopleTimeSlot" :key="person.id" :value="person" v-slot="{ active, selected }">
                      <li :class="[active ? 'text-white bg-beige' : 'text-gray-900', 'cursor-default select-none relative py-2 pl-3 pr-9']" v-on:click="checknumberOfPeople(person.value)">
                            <span :class="[selected ? 'font-semibold' : 'font-normal', 'block truncate']">
                              {{ person.name }}
                            </span>

                        <span v-if="selected" :class="[active ? 'text-white' : 'text-green-500v', 'absolute inset-y-0 right-0 flex items-center pr-4']">
                              <CheckIcon class="h-5 w-5" aria-hidden="true" />
                            </span>
                      </li>
                    </ListboxOption>
                  </ListboxOptions>
                </transition>
              </div>
            </Listbox>
            <small class="text-gray-400">The minimum price start for a group of 6 persons.</small>

            <!-- BTN CONTACT-->
            <div class="mx-auto">
              <div class="mt-4 flex mx-auto text-center">
                <p class="text-center text-sm mt-1">More than 60 persons?</p>
                <div class="text-center">
                  <router-link to="/contact" class="ml-2 inline-flex items-center px-2.5 py-1.5 border border-black text-xs font-medium shadow-sm text-black bg-white hover:bg-black hover:text-white focus:outline-none focus:ring-0 focus:ring-offset-2 focus:ring-indigo-500">
                    <MailIcon class="-ml-0.5 mr-2 h-4 w-4" aria-hidden="true" />
                    Contact us
                  </router-link>
                </div>
              </div>
            </div>

          </div>
        </div>


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
                <button type="button" v-on:click="this.emptyGuests = ''" class="inline-flex bg-red-50 rounded-md p-1.5 text-red-500 hover:bg-red-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-red-50 focus:ring-red-600">
                  <span class="sr-only">Dismiss</span>
                  <XIcon class="h-5 w-5" aria-hidden="true" />
                </button>
              </div>
            </div>
          </div>
        </div>


        <div v-if="this.emptyDates" class="rounded-md bg-red-50 p-4 mb-4">
          <div class="flex">
            <div class="flex-shrink-0">
              <XCircleIcon class="h-5 w-5 text-red-400" aria-hidden="true" />
            </div>
            <div class="ml-3">
              <p class="text-sm font-medium text-red-800">{{ emptyDates }}</p>
            </div>
            <div class="ml-auto pl-3">
              <div class="-mx-1.5 -my-1.5">
                <button type="button" v-on:click="this.emptyDates = ''" class="inline-flex bg-red-50 rounded-md p-1.5 text-red-500 hover:bg-red-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-red-50 focus:ring-red-600">
                  <span class="sr-only">Dismiss</span>
                  <XIcon class="h-5 w-5" aria-hidden="true" />
                </button>
              </div>
            </div>
          </div>
        </div>


        <!-- DATE PICKER -->
        <v-date-picker class="mycutomcalendar"
                       is-expanded
                       color="green"
                       :disabled-dates='disableCalendar'
                       :min-date='new Date()'
                       :attributes="attributes"
                       v-model="date"
                       @click.stop
                       mode= 'dateTime'
                       :valid-hours="availableHourSlots" is24hr
                       :minute-increment="60"
                       v-on:click="input()"
        />

        <!-- TIME SLOT CARDS -->
        <RadioGroup v-model="selectedTimeSlots">
          <!-- <RadioGroupLabel class="text-base font-medium text-gray-900"> Select a time slot </RadioGroupLabel> -->


          <div class="grid grid-cols-1 gap-y-6 sm:grid-cols-3 sm:gap-x-4 bg-white mt-4 p-4">
            <RadioGroupOption as="template" v-for="timeslot in timeslots" :key="timeslot.start" :value="timeslot" v-slot="{ checked, active }" :disabled="timeslot.available == 0">
              <div :class="[checked ? 'border-green-500' : 'border-gray-300', active ? 'ring-1 ring-green-500' : '', 'relative bg-white border shadow-sm p-4 flex cursor-pointer focus:outline-none']" v-on:click="ex(timeslot.start, timeslot.end, timeslot.slot_id)">
                <div class="flex-1 flex">
                  <div class="flex flex-col items-center justify-center text-center text-base font-medium text-gray-900">
                    <RadioGroupLabel as="span" class="text-sm font-medium text-gray-900 uppercase">de</RadioGroupLabel>
                    <RadioGroupLabel as="span" class="text-sm font-medium text-gray-900 uppercase hidden">{{ timeslot.id }}</RadioGroupLabel>
                    <RadioGroupLabel as="span" class="text-sm font-medium text-gray-900 uppercase hidden">{{ timeslot.slot_id }}</RadioGroupLabel>
                    <RadioGroupDescription as="span" class="flex items-center text-sm text-gray-500">{{ timeslot.start }}:00</RadioGroupDescription>
                    <RadioGroupDescription as="span" class="text-sm font-medium text-gray-900 uppercase">JUSQU'Á</RadioGroupDescription>
                    <RadioGroupDescription as="span" class="flex items-center text-sm text-gray-500">{{ timeslot.end }}:00</RadioGroupDescription>
                  </div>
                </div>
                <LockClosedIcon v-if="timeslot.available == '0'" :class="[checked ? 'invisible' : '', 'h-5 w-5 text-gray-500 opacity-50']" aria-hidden="true" />
                <PlusCircleIcon v-if="timeslot.available == '1'" :class="[checked ? 'invisible' : '', 'h-5 w-5 text-gray-500']" aria-hidden="true" />
                <CheckCircleIcon :class="[!checked ? 'invisible' : '', 'h-5 w-5 text-green-500']" aria-hidden="true" />
                <div :class="[active ? 'border' : 'border-1', checked ? 'border-green-500' : 'border-transparent', 'absolute -inset-px pointer-events-none']" aria-hidden="true" />
              </div>
            </RadioGroupOption>
          </div>
        </RadioGroup>

      </section>
      <!-- Order summary -->
      <section aria-labelledby="summary-heading" class="mt-16 bg-beige px-4 py-6 sm:p-6 lg:p-8 lg:mt-0 lg:col-span-5">
        <h2 id="summary-heading" class="text-lg font-medium text-gray-900">Order summary</h2>

        <dl class="mt-6 space-y-4">
          <div class="flex items-center justify-between">
            <dt class="text-sm text-gray-600">Guests</dt>
            <dd class="text-sm font-medium text-gray-900">{{ guests }}</dd>
          </div>
          <div v-if="date" class="border-t border-gray-200 pt-4 flex items-center justify-between">
            <dt class="flex text-sm text-gray-600">
              <span>Date</span>
            </dt>
            <dd class="text-sm font-medium text-gray-900">{{ moment(date).format('DD-MM-YYYY') }}</dd>
          </div>
          <div class="border-t border-gray-200 pt-4 flex items-center justify-between">
            <dt class="flex text-sm text-gray-600">
              <span>Total room</span>
            </dt>
            <dd class="text-sm font-medium text-gray-900">{{ amount / 100 }}</dd>
          </div>
          <div class="border-t border-gray-200 pt-4 flex items-center justify-between">
            <dt class="text-base font-medium text-gray-900">Order total</dt>
            <dd class="text-base font-medium text-gray-900">{{ amount / 100 }} €</dd>
          </div>
        </dl>

        <div class="mt-6">
          <button v-on:click="next( date, amount, guests)" type="button" class="w-full bg-white border border-black shadow-sm py-3 px-4 text-base font-medium text-black hover:bg-black hover:text-white focus:outline-none focus:ring-0 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-indigo-500">Next</button>
        </div>


        <div v-if="this.emptySelection" class="rounded-md bg-red-50 p-4 mb-4">
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
import moment from 'moment'
import 'v-calendar/dist/style.css';
import { ref } from 'vue'
import {
  Listbox,
  ListboxButton,
  ListboxLabel,
  ListboxOption,
  ListboxOptions,
  RadioGroup,
  RadioGroupDescription,
  RadioGroupLabel,
  RadioGroupOption,
} from '@headlessui/vue'
import {
  XIcon,
  XCircleIcon,
  CheckIcon,
  ChevronLeftIcon,
  SelectorIcon,
  MailIcon,
  LockClosedIcon,
  CheckCircleIcon,
} from '@heroicons/vue/solid'
import {
  PlusCircleIcon,
}from '@heroicons/vue/outline'
const steps = [
  { name: 'Step 1', href: '/timeslot', status: 'current' },
  { name: 'Step 2', href: '/additionaltimeslot', status: 'upcoming' },
  { name: 'Step 3', href: '#', status: 'upcoming' },
]
const numberOfPeopleTimeSlot = [
  { id: 1,  value: 0, name: 'Make your choise' },
  { id: 2,  value: 1, name: '1' },
  { id: 3,  value: 2, name: '2' },
  { id: 4,  value: 3, name: '3' },
  { id: 5,  value: 4, name: '4' },
  { id: 6,  value: 5, name: '5' },
  { id: 7,  value: 6, name: '6' },
  { id: 8,  value: 7, name: '7' },
  { id: 9,  value: 8, name: '8' },
  { id: 10, value: 9, name: '9' },
  { id: 11, value: 10, name: '10' },
  { id: 12, value: 11, name: '11' },
  { id: 13, value: 12, name: '12' },
  { id: 14, value: 13, name: '13' },
  { id: 15, value: 14, name: '14' },
  { id: 16, value: 15, name: '15' },
  { id: 17, value: 16, name: '16' },
  { id: 18, value: 17, name: '17' },
  { id: 19, value: 18, name: '18' },
  { id: 20, value: 19, name: '19' },
  { id: 21, value: 20, name: '20' },
  { id: 22, value: 21, name: '21' },
  { id: 23, value: 22, name: '22' },
  { id: 24, value: 23, name: '23' },
  { id: 25, value: 24, name: '24' },
  { id: 26, value: 25, name: '25' },
  { id: 27, value: 26, name: '26' },
  { id: 28, value: 27, name: '27' },
  { id: 29, value: 28, name: '28' },
  { id: 30, value: 29, name: '29' },
  { id: 31, value: 30, name: '30' },
  { id: 32, value: 31, name: '31' },
  { id: 33, value: 32, name: '32' },
  { id: 34, value: 33, name: '33' },
  { id: 35, value: 34, name: '34' },
  { id: 36, value: 35, name: '35' },
  { id: 37, value: 36, name: '36' },
  { id: 38, value: 37, name: '37' },
  { id: 39, value: 38, name: '38' },
  { id: 40, value: 39, name: '39' },
  { id: 41, value: 40, name: '40' },
  { id: 42, value: 41, name: '41' },
  { id: 43, value: 42, name: '42' },
  { id: 44, value: 43, name: '43' },
  { id: 45, value: 44, name: '44' },
  { id: 46, value: 45, name: '45' },
  { id: 47, value: 46, name: '46' },
  { id: 48, value: 47, name: '47' },
  { id: 49, value: 48, name: '48' },
  { id: 50, value: 49, name: '49' },
  { id: 51, value: 50, name: '50' },
  { id: 52, value: 51, name: '51' },
  { id: 53, value: 52, name: '52' },
  { id: 54, value: 53, name: '53' },
  { id: 55, value: 54, name: '54' },
  { id: 56, value: 55, name: '55' },
  { id: 57, value: 56, name: '56' },
  { id: 58, value: 57, name: '57' },
  { id: 59, value: 58, name: '58' },
  { id: 60, value: 59, name: '59' },
  { id: 61, value: 60, name: '60' },
]

export default {
  mounted() {
    // this.$store.dispatch("getTimeslots");
    this.axios.get(process.env.VUE_APP_URL_API + "api/timeslots")
        .then(response => {
         this.timeslots = response.data
        })

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
          // merge de result in order to correctly populate the calendar daily based ( if standard checkout book only the first slot - else book the full day )
          let dates = [...slot1, ...otherSlot]
          this.dates = dates
          let disable =  [
            dates
          ]
          // Block the weekend days coz on timeslot we cannot get access to them
          let weekend = {weekdays: [6, 7,]}
          disable[0].unshift(weekend);
          let bookeed =  [
            disable[0]
          ]
          this.disableCalendar = bookeed[0]
        })
    this.axios.get(process.env.VUE_APP_URL_API + "api/products ")
        .then(response => {
          this.products = response.data
        })
  },
  data() {
    return {
      timeslots:'',
      setectedSlotId:'',
      setectedSlotStart:'',
      setectedSlotEnd:'',
      emptySelection:'',
      emptyGuests:'',
      emptyDates:'',
      EndOfDay:'',
      fulldaysFinishSlot:[],
      slots:'',
      fulldays:'',
      day:'',
      availableHourSlots:[],
      products:'',
      amount:'',
      guests:'',
      disableCalendar:'',
      selectedTimeSlots:'',
      // timeslots:'',
      date:'',
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
    };
  },
  methods:{
    input(){
      let date = moment(this.date).format('YYYY-M-DD')
      this.axios.get(process.env.VUE_APP_URL_API + "api/timeslots")
          .then(response => {
            this.timeslots = response.data
          })
      // get all the reservations for the chosen day by the finishdate ( In timeslot finish date & start date are the same - taking the finish date & time we can understand where finish the fullday reservation too )  )
      this.axios.post(process.env.VUE_APP_URL_API + 'api/slotdisponibilityEnd ', {date}).then(response => {
        this.day = response.data

        //take slot booked slots form reservation table
        let hourFrom = this.day.map(a=>{ return { start:a.starttime, end:a.finishtime, slot_id:a.slot_id}})

        //2 - order hours min to max
        const from = hourFrom.sort(function(a, b) {
          return a.start - b.start;
        })

        //taking all the timeslot how set by admin in admin pabel
        let slotsFrom = this.timeslots.map(a => { return { start:a.start, end:a.end, slot_id:a.id}})

        //difference to understand available timeslot in array - free slots
        let valuesB = from.reduce(function(a,c){a[c.start] = c.start; return a; }, {});
        let valuesA = slotsFrom.reduce(function(a,c){a[c.start] = c.start; return a; }, {});
        let slotsFree = slotsFrom.filter(function(c){ return !valuesB[c.start]}).concat(from.filter(function(c){ return !valuesA[c.start]}));

        //adding available key set to 1 to recognise on css free slots
        const slotsFreeActive = slotsFree.map(v => ({...v, available:1}))

        // difference to understand booked timeslot in array -  booked slots
        let valueB = from.reduce(function(a,c){a[c.start] = c.start; return a; }, {});
        let valueA = slotsFrom.reduce(function(a,c){a[c.start] = c.start; return a; }, {});
        let slotsTaken = slotsFrom.filter(function(c){ return valueB[c.start]}).concat(from.filter(function(c){ return !valueA[c.start]}));

        //adding available key set to o to recognise on css booked slots
        const slotsTakenInactive = slotsTaken.map(v => ({...v, available:0}))

        // Mergin 2 result
        let todaySLOTS = [...slotsFreeActive, ...slotsTakenInactive]

        // Sort by min to max hour start slots
        let todaySorted = todaySLOTS.sort(function(a, b) {
          return a.start - b.start;
        })


        this.timeslots = todaySorted
        console.log(todaySorted)
      })
    },

    ex (start, end, id){

      this.setectedSlotEnd = end
      this.setectedSlotStart = start
      this.setectedSlotId = id

      if(this.date == '') {
        this.emptyDates = 'Please select a valid range of days'
      } else {
        if(this.guests ==''){
          this.emptyGuests = 'Please select number of guests'
          this.date = ''
        } else {
          this.amount = this.products[0]['price'] * this.guests
        }
      }
    },

    checknumberOfPeople(e){
      this.emptySelection = ''
      this.emptyGuests = ''
      this.emptyDates = ''
      this.guests = ''
      this.amount = ''
      this.guests = e
    },

    next( date, amount, guests ){
      if(this.amount == ''){
        this.emptySelection = 'Please fill all the field necessary to complete your reservation '
      } else {

        const book =
            {
              date: date,
              amount: amount,
              guests: guests,
              slot:this.setectedSlotId,
              start: this.setectedSlotStart,
              end: this.setectedSlotEnd,
            }

        this.$store.commit('setReservation', (book))
        this.$router.push({path: '/additionaltimeslot'})
      }
    },
  },
  components: {
    XIcon,
    XCircleIcon,
    CheckIcon,
    ChevronLeftIcon,
    SelectorIcon,
    MailIcon,
    LockClosedIcon,
    CheckCircleIcon,
    PlusCircleIcon,
    Listbox,
    ListboxButton,
    ListboxLabel,
    ListboxOption,
    ListboxOptions,
    RadioGroup,
    RadioGroupDescription,
    RadioGroupLabel,
    RadioGroupOption,
  },
  setup() {
    const selected = ref(numberOfPeopleTimeSlot[0])
    return {
      steps,
      numberOfPeopleTimeSlot,
      selected,
      moment,
    }
  },

  // computed: {
  //   timeslots() {
  //     return this.$store.state.timeslots
  //   }
  // },
}
</script>
<style>
.mycutomcalendar{
  background: #ebe6d8;
  border-radius: 0;
  border: none;
  /*box-shadow: 0px 3px 20px 3px lightgrey;*/
}
/* .vc-weekday{
  color:#2D3748;
} */
.vc-time-picker{
  visibility: hidden !important;
}
</style>
