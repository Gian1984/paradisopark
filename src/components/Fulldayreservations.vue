<template>
  <div class="max-w-5xl mx-auto top-20 py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
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

  <div class="bg-white">
    <div class="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
      <div class="text-center">
        <h2 class="text-base font-semibold text-indigo-600 tracking-wide uppercase">Pricing</h2>
        <p class="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">Handle Full day reservations</p>
        <p class="max-w-xl mt-5 mx-auto text-xl text-gray-500">Start building for free, then add a site plan to go live. Account plans unlock additional features.</p>
      </div>
    </div>
  </div>

  <!--START RESERVATIONS FORM FOR ADMIN-->
  <div class="max-w-7xl mx-auto top-20 px-4 sm:px-6 lg:px-8">
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

        <!--START ADDITIONAL RESERVATIONS FOR ADMIN-->

        <div v-if="addAdditional">
          <form class="mt-10">
            <section aria-labelledby="cart-heading" class="lg:col-span-7">
              <h2 id="cart" class="sr-only">Items in your shopping cart</h2>

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


        <!--END MANAGING ADDITIONALS FOR ADMIN-->

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
          <div v-if="additionalAmount" class="border-t border-gray-200 pt-4 flex items-center justify-between" >
            <dt class="flex items-center text-sm text-gray-600">
              <span>Total additional</span>
            </dt>
            <dd class="text-sm font-medium text-gray-900" :id="additionalAmount" >{{ additionalAmount / 100 }} €
              <input v-model="additionalAmount" class="hidden">
            </dd>
          </div>
          <div v-if="checkoutPrice" class="border-t border-gray-200 pt-4 flex items-center justify-between">
            <dt class="flex text-sm text-gray-600">
              <span>Late checkout</span>
            </dt>
            <dd class="text-sm font-medium text-gray-900">{{ checkoutPrice / 100 }} €</dd>
          </div>
          <div class="border-t border-gray-200 pt-4 flex items-center justify-between">
            <dt class="text-base font-medium text-gray-900">Order total</dt>
            <dd class="text-base font-medium text-gray-900">{{ amount / 100 }} €</dd>
          </div>
        </dl>

        <div class="mt-6">
          <button v-if="addAdditional==''" v-on:click="next( range, amount, guests)" type="button" class="w-full bg-indigo-600 border border-transparent rounded-md shadow-sm py-3 px-4 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-indigo-500">Next</button>
          <button v-else v-on:click="confirmation()" type="button" class="mt-4 w-full bg-red-600 border border-transparent rounded-md shadow-sm py-3 px-4 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-red-500">Confirm</button>
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

        <!--ERROR sending data to DB-->

        <div v-if="this.error" class="mt-4 rounded-md bg-red-50 p-4 mb-4">
          <div class="flex">
            <div class="flex-shrink-0">
              <XCircleIcon class="h-5 w-5 text-red-400" aria-hidden="true" />
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
              <CheckIcon class="h-5 w-5 text-green-400" aria-hidden="true" />
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
  <!--END RESERVATIONS FORM FOR ADMIN-->


  <!--START MANAGING RESERVATIONS FOR ADMIN-->



  <div class="max-w-7xl mx-auto top-20 py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
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
        <input type="search" v-model="searchQuery" name=""  class="mt-1 appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" placeholder="Enter a search here!" />
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
                    <p class="text-gray-500 font-medium">blabla</p>
                  </div>
                </div>


                <div class="sm:flex lg:col-span-7 mt-5">
                  <dl class="grid grid-cols-2 gap-x-6 text-sm">
                    <div>
                      <dt class="font-medium text-gray-900">From:</dt>
                      <dd class="text-gray-500">
                        {{moment(order.startdate).format('DD-MM-YYYY')}}
                      </dd>
                      <dt class="font-medium text-gray-900 mt-3">Number of guests:</dt>
                      <dd class="text-gray-500">
                        <span class="block">{{order.guests}}</span>
                      </dd>
                    </div>
                    <div>
                      <dt class="font-medium text-gray-900">To:</dt>
                      <dd class="text-gray-500 space-y-3">
                        <p>
                          {{moment(order.finishdate).format('DD-MM-YYYY')}}
                        </p>
                      </dd>
                      <dt class="mt-3 font-medium text-gray-900">Checkout time:</dt>
                      <dd class="text-gray-500 space-y-3">
                        <p>
                          {{order.starttime}}:00
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
                              <span class="text-sm font-medium text-gray-600 truncate">Reference order n° :</span>
                              {{order.id}}
                            </p>
                            <p class="text-sm font-medium text-indigo-600 truncate">
                              <span class="text-sm font-medium text-gray-600 truncate">From :</span>
                              {{moment(order.startdate).format('DD-MM-YYYY')}}
                            </p>
                            <p class="text-sm font-medium text-indigo-600 truncate">
                              <span class="text-sm font-medium text-gray-600 truncate">To :</span>
                              {{moment(order.finishdate).format('DD-MM-YYYY')}}
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
                                  <div class="mt-6 mb-1 sm:mt-0">
                                    <h1 class="text-base font-xlarge text-gray-900">
                                      Référence de l'achat n° {{ order.id }}
                                    </h1>
                                    <p class="text-gray-500 font-medium">blabla</p>
                                  </div>
                                </div>
                                <div class="sm:flex lg:col-span-7 mt-5">
                                  <dl class="grid grid-cols-2 gap-x-6 text-sm">
                                    <div>
                                      <dt class="font-medium text-gray-900">From:</dt>
                                      <dd class="text-gray-500">
                                        <span class="block">
                                          {{moment(order.finishdate).format('DD-MM-YYYY')}}
                                        </span>
                                      </dd>
                                      <dt class="font-medium text-gray-900 mt-3">Number of guests:</dt>
                                      <dd class="text-gray-500">
                                        <span class="block">{{order.guests}}</span>
                                      </dd>
                                    </div>
                                    <div>
                                      <dt class="font-medium text-gray-900">To:</dt>
                                      <dd class="text-gray-500 space-y-3">
                                        <p>
                                          {{moment(order.startdate).format('DD-MM-YYYY')}}
                                        </p>
                                      </dd>
                                      <dt class="mt-3 font-medium text-gray-900">Checkout time:</dt>
                                      <dd class="text-gray-500 space-y-3">
                                        <p>
                                          {{order.starttime}}:00
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
                                          Brand:  <span class="uppercase">{{order.cardBrand}}</span>
                                        </p>
                                        <p class="text-gray-500">
                                          Ending with: {{order.lastFour}}
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
                                  <dd class="font-medium text-indigo-600">{{order.transactionID}}</dd>
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
import { CreditCardIcon, ChevronDownIcon, TrashIcon, RefreshIcon } from '@heroicons/vue/outline'
import { Disclosure, DisclosureButton, DisclosurePanel,Listbox, ListboxButton, ListboxLabel, ListboxOption, ListboxOptions, } from '@headlessui/vue'
import moment from 'moment'
import 'v-calendar/dist/style.css';
import {CheckIcon, SelectorIcon, XCircleIcon, XIcon,} from '@heroicons/vue/solid'


const tabs = [
  { name: 'My Account', href: '/dashboard', current: false },
  { name: 'Timeslot reservations', href: '/timeslotreservations', current: false },
  { name: 'Full day reservations', href: '/fulldayreservations', current: true },
  { name: 'Price & date options', href: '/pricedateoptions', current: false },
  { name: 'Additional options', href: '/additionaloptions', current: false },
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

    // Receiving specialdays
    this.axios.get(process.env.VUE_APP_URL_API + "api/spcialdays",)
        .then(response => {
          this.specialday = response.data
        })


    // this.axios.post(process.env.VUE_APP_URL_API + "api/fulldays")
    //     .then(response => {
    //       this.orders = response.data
    //     })

    this.axios.get(process.env.VUE_APP_URL_API + "api/timeslots",)
        .then(response => {
          this.timeslots = response.data
        })

    // Receiving all the additional information
    this.axios.get(process.env.VUE_APP_URL_API + "api/additionals")
        .then(response => {
          let additionals = response.data
          this.additionals = additionals.map(element=>{
            return {id:element.id, name: element.name, description: element.description, price:element.price, image:element.image, language:element.language, quantity: 0 }
          })
        })

    // Receiving all the timeslots already booked formatted for calendar
    this.axios.post(process.env.VUE_APP_URL_API + "api/slots")
        .then(response => {
          let slots = response.data
          this.slots = slots.map(element=>{
            return { start: new Date(element.startdate), end: new Date(element.finishdate), starttime: element.starttime, finishtime: element.finishtime, slot: element.slot_id }
          })
        })

    // Receiving all the fullday already booked formatted for calendar
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

    // ROOMS DATA
    this.axios.get(process.env.VUE_APP_URL_API + "api/products ")
        .then(response => {
          this.products = response.data
        })

    this.fetchOrders();
  },


  beforeMount(){

    this.axios.post(process.env.VUE_APP_URL_API + 'api/fulldaysadmin')
        .then(response =>
            this.orders = response.data
        )

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

  computed: {
    setUser:{
      get(){
        return this.$store.state.setUser
      }
    },

    secondstage:{
      get(){
        return this.$store.state.reservation
      },
    },

    filterOrders(){
      return this.orders.filter(order => order.id == this.searchQuery)
    },

    /* eslint-disable */
    sortedOrders: function() {
      this.orders.sort( ( a, b) => {
        return new Date(b.id) - new Date(a.id);
      });
      return this.orders;
    }
    /* eslint-enable */
  },

  methods: {
    fetchOrders(){
      this.axios.post(process.env.VUE_APP_URL_API + 'api/fulldaysadmin')
          .then(response =>
              this.orders = response.data
          )
    },

    /* eslint-disable */
    removeOrder(orderID, index) {
      this.axios.delete(process.env.VUE_APP_URL_API + "api/reservations/" + orderID)
          .then(response => {
            this.orders.splice(index, 1)
          })

          .catch(error => {
            console.log(error);
          })
      /* eslint-enable */
    },

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

    checknumberOfPeople(e){
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
              this.onlyRoomPrice = weekendTotal + weekdayTotal
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

    additional(){

      let additionalAmount  = this.additionals.map(element => {
        return{id:element.id, name:element.name, description:element.description, price:element.price, quantity: element.quantity, total:(element.price* element.quantity)}
      });


      this.add = additionalAmount

      let total = additionalAmount.reduce(function(prev, cur) {
        return prev + cur.total;
      }, 0);

      this.additionalAmount = total
      this.amount = parseInt(this.additionalAmount) + parseInt(this.reservation.amount)

    },

    refresh(){
      this.$router.go()
    },

    confirmation(){
      let language = 'FR'
      let transactionID = 'admin reservation'
      let cardBrand = 'no card required'
      let lastFour = 'admin account'
      let expire = 'no expire date'
      let user_id = this.setUser.id
      let product_id = '1'
      let startdate = moment(this.secondstage.start).format('YYYY-M-DD')
      let finishdate = moment(this.secondstage.end).format('YYYY-M-DD')
      let starttime = this.secondstage.checkOutStart
      let finishtime = this.secondstage.checkOutEnd
      let slot_id = this.secondstage.slot
      let fullday = '1'
      let guests = this.secondstage.guests
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
            console.log(response.data.id)
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
        this.range = ''
        this.guests = ''
        this.addAdditional = ''
        this.amount = ''
        this.success = 'Successfully book'
        this.$store.commit('clearReservation')
        this.$store.commit('clearAdditionals')
        this.$store.commit('cleartotalAmount')
        this.$store.commit('clearlateCheckout')
      }
    },


    next( range, amount, guests ){
      if(this.amount == ''|| this.onlyRoomPrice ==''){
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
        this.addAdditional = 1
      }
    },

  },


  /* eslint-disable */
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


  data(){
    return{
      orders : [],
      facet: [],
      searchQuery: null,

      add:'',
      additionals:'',
      additionalAmount:'',
      error:'',
      success:'',

      lateCheckout:'',
      numberOfPeopleFullDay:'',
      specialday:'',
      PreSelectedCheckOut:[{name: 'Make your choise', price: 0,}],
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
      addAdditional:'',
    }
  },


  setup() {
    return {
      tabs,
      data,
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
    CheckIcon,
    SelectorIcon,
    XCircleIcon,
    XIcon,
    Listbox,
    ListboxButton,
    ListboxLabel,
    ListboxOption,
    ListboxOptions,
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

