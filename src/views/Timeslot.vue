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

        <!-- <h1 class="mt-8 text-3xl text-center font-extrabold tracking-tight text-gray-900 sm:text-4xl">Time slot</h1>
        <h2 class="text-center">Book your wellness moment here easily and quickly</h2> -->
        <form class="mt-8 lg:grid lg:grid-cols-12 lg:gap-x-12 lg:items-start xl:gap-x-16">
          <section aria-labelledby="cart-heading" class="lg:col-span-7">
            <h2 id="cart-heading" class="sr-only">Items in your shopping cart</h2>
            <div class="items-center bg-gray-50 mb-4 p-4">
              <!-- SELECT NUMBER OF PEOPLE -->
              <div>
                <Listbox as="div" v-model="selected">
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
                        <ListboxOption as="template" v-for="person in numberOfPeopleTimeSlot" :key="person.id" :value="person" v-slot="{ active, selected }">
                          <li :class="[active ? 'text-white bg-indigo-600' : 'text-gray-900', 'cursor-default select-none relative py-2 pl-3 pr-9']">
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

                <!-- BTN CONTACT-->
                <div class="mx-auto">
                  <div class="mt-4 flex mx-auto text-center">
                    <p class="text-center text-sm mt-1">More than 60 persons?</p>
                    <div class="text-center">
                      <router-link to="/contact" class="ml-2 inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                        <MailIcon class="-ml-0.5 mr-2 h-4 w-4" aria-hidden="true" />
                        Contact us
                      </router-link>
                    </div>
                  </div>
                </div>


              </div>
            </div>
            <!-- DATE PICKER -->
            <v-date-picker class="mycutomcalendar"
              is-expanded
              color="green"
              :disabled-dates='{ weekdays: [6, 7] }'
              :min-date='new Date()'
              :attributes="attributes"
              v-model="date"
            />
            <!-- <div class="w-full flex">
              <p>Legendary</p>
              <p class="bg-blue-500 rounded-2xl py-1 px-3 text-white mx-4">Today</p>
              <p class="bg-green-500 rounded-2xl py-1 px-3 text-white mx-4">Selection</p>
              <p class="bg-red-600 rounded-2xl py-1 px-3 text-white mx-4">Not available</p>
            </div> -->

            <!-- TIME SLOT CARDS -->
            <RadioGroup v-model="selectedTimeSlots">
              <!-- <RadioGroupLabel class="text-base font-medium text-gray-900"> Select a time slot </RadioGroupLabel> -->

              <div class="grid grid-cols-1 gap-y-6 sm:grid-cols-3 sm:gap-x-4 bg-gray-50 mt-4 p-4">
                <RadioGroupOption as="template" v-for="timeslot in timeslots" :key="timeslot.id" :value="timeslot" v-slot="{ checked, active }">
                  <div :class="[checked ? 'border-green-500' : 'border-gray-300', active ? 'ring-1 ring-green-500' : '', 'relative bg-white border shadow-sm p-4 flex cursor-pointer focus:outline-none']">
                    <div class="flex-1 flex">
                      <div class="flex flex-col items-center justify-center text-center text-base font-medium text-gray-900">
                        <RadioGroupLabel as="span" class="text-sm font-medium text-gray-900 uppercase">de</RadioGroupLabel>
                        <RadioGroupDescription as="span" class="flex items-center text-sm text-gray-500">{{ timeslot.start }}</RadioGroupDescription>
                        <RadioGroupDescription as="span" class="text-sm font-medium text-gray-900 uppercase">JUSQU'Á</RadioGroupDescription>
                        <RadioGroupDescription as="span" class="flex items-center text-sm text-gray-500">{{ timeslot.end }}</RadioGroupDescription>
                      </div>
                    </div>
                    <LockClosedIcon :class="[checked ? 'invisible' : '', 'h-5 w-5 text-gray-500']" aria-hidden="true" />
                    <CheckCircleIcon :class="[!checked ? 'invisible' : '', 'h-5 w-5 text-green-500']" aria-hidden="true" />
                    <div :class="[active ? 'border' : 'border-1', checked ? 'border-green-500' : 'border-transparent', 'absolute -inset-px pointer-events-none']" aria-hidden="true" />
                  </div>
                </RadioGroupOption>
              </div>
            </RadioGroup>

          </section>
          <!-- Order summary -->
          <section aria-labelledby="summary-heading" class="mt-16 bg-gray-50 px-4 py-6 sm:p-6 lg:p-8 lg:mt-0 lg:col-span-5">
            <h2 id="summary-heading" class="text-lg font-medium text-gray-900">Order summary</h2>

            <dl class="mt-6 space-y-4">
              <div class="flex items-center justify-between">
                <dt class="text-sm text-gray-600">Subtotal</dt>
                <dd class="text-sm font-medium text-gray-900">$99.00</dd>
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
                <dd class="text-base font-medium text-gray-900">$112.32</dd>
              </div>
            </dl>

            <div class="mt-6">
              <button type="submit" class="w-full bg-indigo-600 border border-transparent rounded-md shadow-sm py-3 px-4 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-indigo-500">Add to cart</button>
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
  RadioGroup,
  RadioGroupDescription,
  RadioGroupLabel,
  RadioGroupOption,
} from '@headlessui/vue'

import {
  CheckIcon,
  ChevronLeftIcon,
  SelectorIcon,
  MailIcon,
  QuestionMarkCircleIcon,
  LockClosedIcon,
  CheckCircleIcon,
} from '@heroicons/vue/solid'
const steps = [
  { name: 'Step 1', href: '/timeslot', status: 'current' },
  { name: 'Step 2', href: '/additionaltimeslot', status: 'upcoming' },
  { name: 'Step 3', href: '#', status: 'upcoming' },
]
const numberOfPeopleTimeSlot = [
  { id: 1, name: '1' },
  { id: 2, name: '2' },
  { id: 3, name: '3' },
  { id: 4, name: '4' },
  { id: 5, name: '5' },
  { id: 6, name: '6' },
  { id: 7, name: '7' },
  { id: 8, name: '8' },
  { id: 9, name: '9' },
  { id: 10, name: '10' },
  { id: 1, name: '11' },
  { id: 2, name: '12' },
  { id: 3, name: '13' },
  { id: 4, name: '14' },
  { id: 5, name: '15' },
  { id: 6, name: '16' },
  { id: 7, name: '17' },
  { id: 8, name: '18' },
  { id: 9, name: '19' },
  { id: 10, name: '20' },
  { id: 1, name: '21' },
  { id: 2, name: '22' },
  { id: 3, name: '23' },
  { id: 4, name: '24' },
  { id: 5, name: '25' },
  { id: 6, name: '26' },
  { id: 7, name: '27' },
  { id: 8, name: '28' },
  { id: 9, name: '29' },
  { id: 10, name: '30' },
  { id: 1, name: '31' },
  { id: 2, name: '32' },
  { id: 3, name: '33' },
  { id: 4, name: '34' },
  { id: 5, name: '35' },
  { id: 6, name: '36' },
  { id: 7, name: '37' },
  { id: 8, name: '38' },
  { id: 9, name: '39' },
  { id: 10, name: '40' },
  { id: 1, name: '41' },
  { id: 2, name: '42' },
  { id: 3, name: '43' },
  { id: 4, name: '44' },
  { id: 5, name: '45' },
  { id: 6, name: '46' },
  { id: 7, name: '47' },
  { id: 8, name: '48' },
  { id: 9, name: '49' },
  { id: 10, name: '50' },
  { id: 1, name: '51' },
  { id: 2, name: '52' },
  { id: 3, name: '53' },
  { id: 4, name: '54' },
  { id: 5, name: '55' },
  { id: 6, name: '56' },
  { id: 7, name: '57' },
  { id: 8, name: '58' },
  { id: 9, name: '59' },
  { id: 10, name: '60' },
]

// const timeslots = [
//   { id: 1,
//     name: '10-14',
//     start: '10:00',
//     end: '14:00',
//   },
//   {
//     id: 2,
//     name: '15-19',
//     start: '15:00',
//     end: '19:00',
//   },
//   {
//     id: 3,
//     name: '20-00',
//     start: '20:00',
//     end: '00:00',
//   },
// ]

export default {


  mounted() {
    this.axios.get(process.env.VUE_APP_URL_API + "api/timeslots")
        .then(response => {
          this.timeslots = response.data
        })
  },

  data() {
  return {
    selectedTimeSlots:'',
    timeslots:'',
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
      {
        highlight: {
          color: 'green',
          fillMode: 'solid',
        },
        dates: new Date(2022, 1, 13),
      },
      {
        highlight: {
          color: 'red',
          fillMode: 'solid',
        },
        dates: new Date(2022, 1, 14),
      },
    ],
  };
},

  components: {
    CheckIcon,
    ChevronLeftIcon,
    SelectorIcon,
    MailIcon,
    QuestionMarkCircleIcon,
    LockClosedIcon,
    CheckCircleIcon,
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
    const selected = ref(numberOfPeopleTimeSlot[5])
    return {
      steps,
      numberOfPeopleTimeSlot,
      selected,
    }
  },
}
</script>
<style>
.mycutomcalendar{
  background: rgb(249, 250, 251);
  border-radius: 0;
  border: none;
  /*box-shadow: 0px 3px 20px 3px lightgrey;*/
}
/* .vc-weekday{
  color:#2D3748;
} */

</style>
