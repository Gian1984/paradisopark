<template>
<!--  NAVIGATION ADMIN MENU-->

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

<!--TITLE-->
  <div class="bg-white">
    <div class="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
      <div class="text-center">
        <h2 class="text-base font-semibold text-indigo-600 tracking-wide uppercase">Pricing</h2>
        <p class="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">handle time slots reservations</p>
        <p class="max-w-xl mt-5 mx-auto text-xl text-gray-500">Start building for free, then add a site plan to go live. Account plans unlock additional features.</p>
      </div>
    </div>
  </div>

<!--  BOOKING TIME SLOT FOR ADMIN-->
  <section>
    <div class="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
      <!--    <h2 class="text-center">Book your wellness moment here easily and quickly</h2>-->
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

            <div class="grid grid-cols-1 gap-y-6 sm:grid-cols-3 sm:gap-x-4 bg-gray-50 mt-4 p-4">
              <RadioGroupOption as="template" v-for="timeslot in timeslots" :key="timeslot.start" :value="timeslot" v-slot="{ checked, active }" :disabled="timeslot.available == 0">
                <div :class="[checked ? 'border-green-500' : 'border-gray-300', active ? 'ring-1 ring-green-500' : '', 'relative bg-white border shadow-sm p-4 flex cursor-pointer focus:outline-none']" v-on:click="ex(timeslot.start, timeslot.end, timeslot.slot_id)">
                  <div class="flex-1 flex">
                    <div class="flex flex-col items-center justify-center text-center text-base font-medium text-gray-900">
                      <RadioGroupLabel as="span" class="text-sm font-medium text-gray-900 uppercase">de</RadioGroupLabel>
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



          <div v-if="addAdditionals">
            <!-- Additional elements-->
            <h1 class="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl mt-10">Additionals</h1>
            <form >
              <section aria-labelledby="cart-heading" class="lg:col-span-7">
                <h2 id="heading" class="sr-only">Items in your shopping cart</h2>

                <ul role="list" class="border-t border-b border-gray-200 divide-y divide-gray-200">
                  <li v-for="(product, productIdx) in additionals" :key="product.id" class="flex py-3 sm:py-4" @change="additional()">
                    <div class="flex-shrink-0">
                      <img :src="product.image" :alt="product.imageAlt" class="w-16 h-16 rounded-md object-center object-cover sm:w-20 sm:h-20" />
                    </div>

                    <div class="ml-4 flex-1 flex flex-col justify-between sm:ml-6">
                      <div class="pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
                        <div>
                          <div class="flex justify-between">
                            <h3 class="text-sm">
                              <a :href="product.href" class="font-medium text-gray-700 hover:text-gray-800">
                                {{ product.name }}
                              </a>
                            </h3>
                          </div>
                          <div class="mt-1 flex text-sm">
                            <p v-if="product.description" class="text-gray-500">
                              {{ product.description }}
                            </p>
                          </div>
                          <p class="mt-1 text-sm font-medium text-gray-900">{{ product.price / 100 }} €</p>
                        </div>

                        <div class="mt-4 sm:mt-0 sm:pr-9 flex flex-col">
                          <label :for="`quantity-${productIdx}`" class="mt-3 text-sm text-gray-500">Quantity</label>
                          <select v-model="product.quantity" :id="`quantity-${productIdx}`" :name="`quantity-${productIdx}`" class="max-w-full rounded-md border border-gray-300 py-1.5 text-base leading-5 font-medium text-gray-700 text-left shadow-sm focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                            <option  value="0">0</option>
                            <option v-for="index in 60" :key="index" :value="index">{{index}}</option>
                          </select>
                        </div>
                      </div>

                    </div>
                  </li>
                </ul>
              </section>
            </form>
          </div>






        </section>
        <!-- Order summary -->
        <section aria-labelledby="summary-heading" class="mt-16 bg-gray-50 px-4 py-6 sm:p-6 lg:p-8 lg:mt-0 lg:col-span-5">
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
            <div v-if="secondStage" class="border-t border-gray-200 pt-4 flex items-center justify-between">
              <dt class="flex text-sm text-gray-600">
                <span>Total room</span>
              </dt>
              <dd class="text-sm font-medium text-gray-900">{{ secondStage.amount / 100 }} €</dd>
            </div>
            <div v-if="additionalAmount" class="border-t border-gray-200 pt-4 flex items-center justify-between" >
              <dt class="flex items-center text-sm text-gray-600">
                <span>Total additional</span>
              </dt>
              <dd class="text-sm font-medium text-gray-900" :id="additionalAmount" >{{ additionalAmount / 100 }} €
                <input v-model="additionalAmount" class="hidden">
              </dd>
            </div>
            <div class="border-t border-gray-200 pt-4 flex items-center justify-between">
              <dt class="text-base font-medium text-gray-900">Order total</dt>
              <dd class="text-base font-medium text-gray-900">{{ amount / 100 }} €</dd>
            </div>
          </dl>

          <div class="mt-6">
            <button v-if="addAdditionals == '' " v-on:click="next( date, amount, guests)" type="button" class="w-full bg-indigo-600 border border-transparent rounded-md shadow-sm py-3 px-4 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-indigo-500">Next</button>
            <button v-else v-on:click="confirmation()" type="button" class="mt-4 w-full bg-red-600 border border-transparent rounded-md shadow-sm py-3 px-4 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-red-500">Confirm</button>
          </div>


          <div v-if="this.emptySelection" class="mt-4 rounded-md bg-red-50 p-4 mb-4">
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

          <!--ERROR sending data to DB-->
          <div v-if="this.error" class="mt-4 rounded-md bg-red-50 p-4 mb-4">
            <div class="flex">
              <div class="flex-shrink-0">
                <CheckIcon class="h-5 w-5 text-red-400" aria-hidden="true" />
              </div>
              <div class="ml-3">
                <p class="text-sm font-medium text-red-800">{{ error }}</p>
              </div>
              <div class="ml-auto pl-3">
                <div class="-mx-1.5 -my-1.5">
                  <button type="button" v-on:click="this.error = ''" class="inline-flex bg-red-50 rounded-md p-1.5 text-red-500 hover:bg-red-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-red-50 focus:ring-red-600">
                    <span class="sr-only">Dismiss</span>
                    <XIcon class="h-5 w-5" aria-hidden="true" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          <!--Success sending data to DB-->
          <div v-if="this.success" class="mt-4 rounded-md bg-green-50 p-4 mb-4">
            <div class="flex">
              <div class="flex-shrink-0">
                <XCircleIcon class="h-5 w-5 text-green-400" aria-hidden="true" />
              </div>
              <div class="ml-3">
                <p class="text-sm font-medium text-green-800">{{ success }}</p>
              </div>
              <div class="ml-auto pl-3">
                <div class="-mx-1.5 -my-1.5">
                  <button type="button" v-on:click="this.success = ''" class="inline-flex bg-green-50 rounded-md p-1.5 text-green-500 hover:bg-green-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-green-50 focus:ring-green-600">
                    <span class="sr-only">Dismiss</span>
                    <XIcon class="h-5 w-5" aria-hidden="true" />
                  </button>
                </div>
              </div>
            </div>
          </div>

        </section>
      </form>
    </div>
  </section>


<!--MANAGE TIMESLOT RESERVATION FOR ADMIN-->
  <div class="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
    <div class="flex flex-col mt-10" style="max-height: 200Vh">
      <h1 class="mt-10 font-bold text-3xl px-4" id="order">Commandes actives</h1>
      <button type="button" @click="refresh()"  class="my-2 mx-4 inline-flex items-center px-2 py-2 border border-transparent shadow-sm text-sm leading-4 font-medium rounded-full text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
        <RefreshIcon class="h-4 w-4 mr-2" aria-hidden="true" />
        <span>Refresh orders</span>
      </button>

      <!--  start search box-->

      <div class="px-4">
        <label for="first-name" class="mt-5 block text-sm font-medium text-gray-700">
          Recherche par identifiant de commande
        </label>
        <input type="search" v-model="searchQuery" name="first-name" id="first-name" class="mt-1 appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" placeholder="Enter a search here!" />
      </div>

      <div>
        <p class="mb-2 text-right" v-if="searchQuery && filterOrders.length > 1 ">{{filterOrders.length}} results</p>
        <div v-if="!searchQuery"></div>

        <div v-else class="border-2 border-red-600 mt-2 overflow-hidden">
          <div v-for="order in filterOrders" :key="order.id" class="py-3 border-b-4 border-indigo-600 mb-2" >
            <div class="bg-white py-3 border-t border-b border-gray-200 shadow-sm sm:border">
              <div class="py-6 px-4 sm:px-6 lg:grid lg:grid-cols-12 lg:gap-x-8 lg:p-8">
                <div class="sm:flex lg:col-span-7 border-b ">

                  <div class="mt-6 sm:mt-0 sm:ml-6">
                    <h1 class="text-base font-xlarge text-gray-900">
                      Commande n° {{ order.id }}
                    </h1>
                  </div>
                </div>


                <div class="sm:flex lg:col-span-7 mt-5">
                  <dl class="grid grid-cols-2 gap-x-6 text-sm">
                    <div>
                      <dt class="font-medium text-gray-900">Date:</dt>
                      <dd class="text-gray-500">
                        <span class="block">{{order.startdate}}</span>
                      </dd>
                      <dt class="font-medium text-gray-900 mt-3">Start time:</dt>
                      <dd class="text-gray-500">
                        <span class="block">{{order.starttime}}.00 </span>
                      </dd>
                    </div>
                    <div>
                      <dt class="font-medium text-gray-900">N° of Guests:</dt>
                      <dd class="text-gray-500 space-y-3">
                        <p>
                          {{ order.guests }}
                        </p>
                      </dd>
                      <dt class="mt-3 font-medium text-gray-900">Finish time:</dt>
                      <dd class="text-gray-500 space-y-3">
                        <p>
                          {{order.finishtime}}.00
                        </p>
                      </dd>
                    </div>
                  </dl>
                </div>

                <div class="mt-6 lg:mt-0 lg:col-span-5 lg:mt-5">
                  <dl class="grid grid-cols-2 gap-x-6 text-sm">
                    <div>
                      <dt class="font-medium text-gray-900">Additionals:</dt>
                      <dd v-for="extra in order.extras" v-bind:key="extra.id" class="text-gray-500">
                        <span class="block">{{extra.name}}: {{extra.quantity}}</span>
                      </dd>
                    </div>
                  </dl>
                </div>
              </div>
            </div>

            <div class="bg-gray-100 py-6 px-4 sm:px-6 lg:px-8 lg:py-8 lg:grid lg:grid-cols-12 lg:gap-x-8">
              <dl class="grid grid-cols-2 gap-6 text-sm sm:grid-cols-2 md:gap-x-8 lg:col-span-7">
                <div v-if="order.user">
                  <dt class="font-medium text-gray-900">User account:</dt>
                  <dd class="mt-3 text-gray-500">
                    <span class="block">{{order.user.name}}</span>
                    <span class="block">{{order.user.email}}</span>
                  </dd>
                </div>
                <div v-else>
                  <dt class="font-medium text-gray-900">User account:</dt>
                  <dd class="mt-3 text-gray-500">
                    <span class="block">this user has been deleted</span>
                  </dd>
                </div>
                <div>
                  <dt class="font-medium text-gray-900">Informations de paiement:</dt>
                  <div class="mt-3">
                    <dd class="-ml-4 -mt-4 flex flex-wrap">

                      <div class="ml-4 mt-4">
                        <p class="text-gray-500">
                          <CreditCardIcon class="h-6 w-6"></CreditCardIcon>
                        </p>
                        <p class="text-gray-500">
                          Brand:  <span class="uppercase">{{ order.cardBrand }}</span>
                        </p>
                        <p class="text-gray-500">
                          Termine par: {{ order.lastFour }}
                        </p>
                        <p class="text-gray-500">
                          Expire: {{order.expire}}
                        </p>
                      </div>
                    </dd>
                  </div>
                </div>
              </dl>

              <dl class="mt-8 divide-y divide-gray-200 text-sm lg:mt-0 lg:col-span-5">
                <div class="pt-4 flex items-center justify-between">
                  <dt class="font-medium text-gray-900">ID transaction:</dt>
                  <dd class="font-medium text-indigo-600">{{ order.transactionID }}</dd>
                </div>
                <div class="pt-4 flex items-center justify-between">
                  <dt class="font-medium text-gray-900">Total de la commande</dt>
                  <dd class="font-medium text-indigo-600">€ {{order.amount/100}}</dd>
                </div>
                <div class="sm:flex p-2 text-right mt-2">
                  <div class="ml-2  md:mt-0 lg:mt-0 text-right">
                    <button type="button" @click="removeOrder(order.id, index)" class="inline-flex items-center p-2 border border-transparent rounded-full shadow-sm text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 text-right">
                      <TrashIcon class="h-4 w-4" aria-hidden="true" />
                    </button>
                  </div>
                </div>
              </dl>
            </div>
          </div>
        </div>

      </div>

      <!--  end search box-->

      <div class="-my-2 overflow-x-auto lg:-mx-8 mt-5">
        <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <main class="mx-auto">
              <div class="bg-gray-50">
                <div class="max-w-7xl mx-auto pb-12 px-4 sm:pb-16 sm:px-6 lg:px-8">
                  <div class="mx-auto divide-y-2 divide-gray-200">
                    <dl class="mt-6 space-y-6 divide-y divide-gray-200">
                      <Disclosure as="div" v-for="order in sortedOrders" :key="order.id" class="pt-6" v-slot="{ open }">
                        <dt class="text-lg">
                          <DisclosureButton class="text-left w-full flex justify-between items-start text-gray-400">
                            <p class="text-sm font-medium text-indigo-600 truncate">
                              <span class="text-black">Reference order:</span> n° {{order.id}}
                            </p>
                            <p class="text-sm font-medium text-indigo-600 truncate">
                              <span class="text-black">Date: </span>{{moment(order.startdate).format('DD-MM-YYYY')}}
                            </p>
                            <span class="ml-6 h-7 flex items-center">
                              <ChevronDownIcon :class="[open ? '-rotate-180' : 'rotate-0', 'h-6 w-6 transform']" aria-hidden="true" />
                            </span>
                          </DisclosureButton>
                        </dt>
                        <DisclosurePanel as="dd" class="mt-2">
                          <div class="py-3 border-b-4 border-indigo-600 " >
                            <div class="bg-white py-3 border-t border-b border-gray-200 shadow-sm sm:border">
                              <div class="py-6 px-4 sm:px-6 lg:grid lg:grid-cols-12 lg:gap-x-8 lg:p-8">
                                <div class="sm:flex lg:col-span-7 border-b ">
                                  <div class="mt-6 sm:mt-0 sm:ml-6">
                                    <h1 class="text-base font-xlarge text-gray-900">
                                      Référence de l'achat n° {{ order.id }}
                                    </h1>
                                  </div>
                                </div>
                                <div class="sm:flex lg:col-span-7 mt-5">
                                  <dl class="grid grid-cols-2 gap-x-6 text-sm">
                                    <div>
                                      <dt class="font-medium text-gray-900">Date:</dt>
                                      <dd class="text-gray-500">
                                        <span class="block">{{order.startdate}}</span>
                                      </dd>
                                      <dt class="font-medium text-gray-900 mt-3">Start time:</dt>
                                      <dd class="text-gray-500">
                                        <span class="block">{{order.starttime}}.00 </span>
                                      </dd>
                                    </div>
                                    <div>
                                      <dt class="font-medium text-gray-900">N° of Guests:</dt>
                                      <dd class="text-gray-500 space-y-3">
                                        <p>
                                          {{ order.guests }}
                                        </p>
                                      </dd>
                                      <dt class="mt-3 font-medium text-gray-900">Finish time:</dt>
                                      <dd class="text-gray-500 space-y-3">
                                        <p>
                                          {{order.finishtime}}.00
                                        </p>
                                      </dd>
                                    </div>
                                  </dl>
                                </div>

                                <div class="mt-6 lg:mt-0 lg:col-span-5 lg:mt-5">
                                  <dl class="grid grid-cols-2 gap-x-6 text-sm">
                                    <div>
                                      <dt class="font-medium text-gray-900">Additionals:</dt>
                                      <dd v-for="extra in order.extras" v-bind:key="extra.id" class="text-gray-500">
                                        <span class="block">{{extra.name}}: {{extra.quantity}}</span>
                                      </dd>
                                    </div>
                                  </dl>
                                </div>
                              </div>
                            </div>

                            <div class="bg-gray-100 py-6 px-4 sm:px-6 lg:px-8 lg:py-8 lg:grid lg:grid-cols-12 lg:gap-x-8">
                              <dl class="grid grid-cols-2 gap-6 text-sm sm:grid-cols-2 md:gap-x-8 lg:col-span-7">
                                <div v-if="order.user">
                                  <dt class="font-medium text-gray-900">User account:</dt>
                                  <dd class="mt-3 text-gray-500">
                                    <span class="block">{{order.user.name}}</span>
                                    <span class="block">{{order.user.email}}</span>
                                  </dd>
                                </div>
                                <div v-else>
                                  <dt class="font-medium text-gray-900">User account:</dt>
                                  <dd class="mt-3 text-gray-500">
                                    <span class="block">This user has been deleted</span>
                                  </dd>
                                </div>
                                <div>
                                  <dt class="font-medium text-gray-900">Payment information:</dt>
                                  <div class="mt-3">
                                    <dd class="-ml-4 -mt-4 flex flex-wrap">

                                      <div class="ml-4 mt-4">
                                        <p class="text-gray-500">
                                          <CreditCardIcon class="h-6 w-6"></CreditCardIcon>
                                        </p>
                                        <p class="text-gray-500">
                                          Brand:  <span class="uppercase">{{ order.cardBrand }}</span>
                                        </p>
                                        <p class="text-gray-500">
                                          Termine par: {{ order.lastFour }}
                                        </p>
                                        <p class="text-gray-500">
                                          Expire: {{order.expire}}
                                        </p>
                                      </div>
                                    </dd>
                                  </div>
                                </div>
                              </dl>

                              <dl class="mt-8 divide-y divide-gray-200 text-sm lg:mt-0 lg:col-span-5">
                                <div class="pt-4 flex items-center justify-between">
                                  <dt class="font-medium text-gray-900">ID trans:</dt>
                                  <dd class="font-medium text-indigo-600">{{ order.transactionID }}</dd>
                                </div>
                                <div class="pt-4 flex items-center justify-between">
                                  <dt class="font-medium text-gray-900">Total de la commande :</dt>
                                  <dd class="font-medium text-indigo-600">€ {{order.amount/100}}</dd>
                                </div>
                                <div class="sm:flex p-2 text-right mt-2">
                                  <div class="ml-2  md:mt-0 lg:mt-0 text-right">
                                    <button type="button" @click="removeOrder(order.id, index)" class="inline-flex items-center p-2 border border-transparent rounded-full shadow-sm text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 text-right">
                                      <TrashIcon class="h-4 w-4" aria-hidden="true" />
                                    </button>
                                  </div>
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
            </main>
          </div>
        </div>
      </div>
    </div>
  </div>



</template>

<script>
import { CreditCardIcon, ChevronDownIcon, TrashIcon, PlusCircleIcon, RefreshIcon } from '@heroicons/vue/outline'
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
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Listbox,
  ListboxButton,
  ListboxLabel,
  ListboxOption,
  ListboxOptions,
  RadioGroup,
  RadioGroupDescription,
  RadioGroupLabel,
  RadioGroupOption } from '@headlessui/vue'
import moment from 'moment'
import 'v-calendar/dist/style.css';
import { ref } from 'vue'


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


const tabs = [
  { name: 'My Account', href: '/dashboard', current: false },
  { name: 'Timeslot reservations', href: '/timeslotreservations', current: true },
  { name: 'Full day reservations', href: '/fulldayreservations', current: false },
  { name: 'Price & date options', href: '/pricedateoptions', current: false },
  { name: 'Additional options', href: '/additionaloptions', current: false },
]

export default {

  mounted() {

    this.user = JSON.parse(localStorage.getItem('bigStore.user'))
    // this.axios.post(process.env.VUE_APP_URL_API + "api/slots")
    //     .then(response => {
    //       this.orders = response.data
    //     })

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

    this.axios.get(process.env.VUE_APP_URL_API + "api/additionals")
        .then(response => {
          let additionals = response.data
          this.additionals = additionals.map(element=>{
            return {id:element.id, name: element.name, description: element.description, price:element.price, image:element.image, language:element.language, quantity: 0 }
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

    this.fetchOrders();
  },

  /*eslint-disable */
  beforeMount(){

    this.axios.post(process.env.VUE_APP_URL_API + 'api/slots')
        .then(response =>
            this.orders = response.data
        )
  },

  computed: {

    secondStage:{
      get(){
        return this.$store.state.reservation
      },

      setUser:{
        get(){
          return this.$store.state.setUser
        }
      },
    },

    filterOrders(){
      return this.orders.filter(order => order.id == this.searchQuery)
    },

    sortedOrders: function() {
      this.orders.sort( ( a, b) => {
        return new Date(b.id) - new Date(a.id);
      });
      return this.orders;
    }
  },

  methods: {

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
        this.addAdditionals = 1
      }
    },

    additional(){
      // console.log(this.additionals)
      let additionalAmount  = this.additionals.map(element => {
        return{id:element.id, name:element.name, description:element.description, price:element.price, quantity: element.quantity, total:(element.price* element.quantity)}
      });

      this.add = additionalAmount


      let total = additionalAmount.reduce(function(prev, cur) {
        return prev + cur.total;
      }, 0);

      this.additionalAmount = total
      this.amount = parseInt(this.additionalAmount) + parseInt(this.secondStage.amount)
    },

    watch: {
      'additionalAmount': function(val, oldVal){
        if (val != '') {
          const amount = this.amount
          this.amount= (amount - oldVal + val);
        }else{
          const amount = this.amount
          this.amount= (amount - oldVal + val);
        }
      }
    },

    confirmation(){
      let language = 'FR'
      let transactionID = 'admin reservation'
      let cardBrand = 'no card required'
      let lastFour = 'admin account'
      let expire = 'no expire date'
      let user_id = this.user.id
      let product_id = '1'
      let startdate = moment(this.secondStage.date).format('YYYY-M-DD')
      let finishdate = moment(this.secondStage.date).format('YYYY-M-DD')
      let starttime = this.secondStage.start
      let finishtime = this.secondStage.end
      let slot_id = this.secondStage.slot
      let fullday = '0'
      let guests = this.secondStage.guests
      let amount = parseInt(this.amount)

      this.axios.post(process.env.VUE_APP_URL_API + 'api/adminreservation',
          {
            user_id,
            product_id,
            startdate,
            finishdate,
            starttime,
            finishtime,
            slot_id,
            fullday,
            guests,
            transactionID,
            cardBrand,
            lastFour,
            expire,
            amount,
            language
          })
          .then((response) => {
            let extras = this.add.map(element => this.axios.post(process.env.VUE_APP_URL_API + 'api/extras',{reservation_id: response.data.id, name: element.name, price:element.price, quantity:element.quantity  }))
            console.log(extras)

          })
          .catch((error) => {
            this.error = error.response.data.message;
          });

          if(this.error != ''){

            this.additionalAmount = ''
            this.range = ''
            this.guests = ''
            this.addAdditional = ''
            this.amount = ''
            this.success = 'Successfully book'
            this.$store.commit('clearReservation')
            this.$store.commit('clearAdditionals')
            this.$store.commit('cleartotalAmount')
            this.$store.commit('clearlateCheckout')

            this.error = 'Something goes wrong please try again'

          } else {
            this.additionalAmount = ''
            this.date = ''
            this.guests = ''
            this.addAdditionals = ''
            this.amount = ''
            this.success = 'Successfully book'
            this.$store.commit('clearReservation')
            this.$store.commit('clearAdditionals')
            this.$store.commit('cleartotalAmount')
            this.$store.commit('clearlateCheckout')
          }
    },

    refresh(){
      this.$router.go()
    },

    fetchOrders(){
      this.axios.post(process.env.VUE_APP_URL_API + 'api/slots')
          .then(response =>
              this.orders = response.data
          )
    },

    removeOrder(orderID, index) {
      this.axios.delete(process.env.VUE_APP_URL_API + "api/reservations/" + orderID)
          .then(response => {
            this.orders.splice(index, 1)
          })

          .catch(error => {
            console.log(error);
          })
    },
  },


  data(){
    return{
      orders : [],
      facet: [],
      searchQuery: null,

      add:'',
      additionals:'',
      additionalAmount:'',

      user:'',


      addAdditionals:'',

      error:'',
      success:'',

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
      ],
    }
  },


  setup() {
    const selected = ref(numberOfPeopleTimeSlot[0])
    return {
      numberOfPeopleTimeSlot,
      selected,
      tabs,
      moment
    }
  },

  components: {
    RefreshIcon,
    CreditCardIcon,
    ChevronDownIcon,
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
    TrashIcon,
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
}
</script>
