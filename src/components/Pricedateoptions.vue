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

  <div class="bg-white">
    <div class="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
      <div class="text-center">
        <h2 class="text-base font-semibold text-indigo-600 tracking-wide uppercase">Pricing</h2>
        <p class="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">Handle price & data options</p>
        <p class="max-w-xl mt-5 mx-auto text-xl text-gray-500">Start building for free, then add a site plan to go live. Account plans unlock additional features.</p>
      </div>
    </div>
  </div>

  <div class="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">

    <!--    START MANAGE SPECIALDAYS-->
    <div>
      <div class="md:grid md:grid-cols-2 md:gap-6">
        <div class="md:col-span-1">
          <div class="px-4 sm:px-0">
            <h3 class="text-lg font-medium leading-6 text-gray-900">Specialdays</h3>
            <p class="mt-1 text-sm text-gray-600">This information will be displayed publicly so be careful what you share.</p>
          </div>
        </div>
        <div class="mt-5 md:mt-0 md:col-span-2">
          <form action="#" method="POST">
            <div class="shadow sm:rounded-md sm:overflow-hidden">
              <div class="px-4 py-5 bg-white space-y-6 sm:p-6">
                <div v-for="(specialday, index) in specialdays" v-bind:key="specialday.id" class="grid grid-cols-4 gap-6">

                  <div>
                    <label for="specialday_name" class="block text-sm font-medium text-indigo-600">Period :</label>
                      <p class="hidden">spacing</p><br>
                      <input v-model="specialday.name" type="text" name="specialday_name" id="specialday_name" class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md" disabled/>
                  </div>


                  <div class="grid grid-cols-2 gap-6">
                    <div>
                      <label for="from_day" class="block text-sm font-medium text-gray-700">
                        <span class="text-indigo-600">From:</span><br>
                        day
                      </label>
                      <select v-model="specialday.fromDate" id="from_day" name="from_day" class="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md" disabled>
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

                    <div>
                      <label for="from_month" class="block text-sm font-medium text-gray-700">
                        <span class="hidden">spacing</span><br>
                        month
                      </label>
                      <select v-model="specialday.fromMonth" id="from_month" name="from_month" class="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md" disabled>
                        <option>month</option>
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
                      </select>
                    </div>

                  </div>

                  <div class="grid grid-cols-2 gap-6">
                    <div>
                      <label for="to-day" class="block text-sm font-medium text-gray-700">
                        <span class="text-indigo-600">To:</span><br>
                        day
                      </label>
                      <select v-model="specialday.toDate" id="to-day" name="to-day" class="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md" disabled>
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

                    <div>
                      <label for="to_month" class="block text-sm font-medium text-gray-700">
                        <span class="hidden">spacing</span><br>
                        month
                      </label>
                      <select v-model="specialday.toMonth" id="to_month" name="to_month" class="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md" disabled>
                        <option>month</option>
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
                      </select>
                    </div>
                  </div>
                  <div class="sm:flex p-2 text-right mt-9 justify-center">
                    <div class="ml-2  md:mt-0 lg:mt-0 text-right">
                      <button type="button" @click="editingSpecial = specialday"  class="mr-2 inline-flex items-center px-2 py-2 border border-transparent shadow-sm text-sm leading-4 font-medium rounded-full text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                        <PencilAltIcon class="h-4 w-4" aria-hidden="true" />
                      </button>
                      <button type="button" @click="removeSpecial(specialday.id, index)" class="inline-flex items-center p-2 border border-transparent rounded-full shadow-sm text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 text-right">
                        <TrashIcon class="h-4 w-4" aria-hidden="true" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div class="flex justify-end bg-gray-50">
                <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
                  <button type="button" @click="newSpecialDays"  class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    Add Special period
                    <PlusCircleIcon class="ml-2 -mr-0.5 h-4 w-4 mt-0.5" aria-hidden="true" />
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
    <Addspecialdatemodal @close="endEditing"  :special="editingSpecial" v-show="editingSpecial != null"></Addspecialdatemodal>
    <Addspecialdatemodal @close="addSpecialDays"  :special="addingSpecialDays" v-show="addingSpecialDays != null"></Addspecialdatemodal>

    <!--    START MANAGE CHECKOUTS-->
    <div class="hidden sm:block" aria-hidden="true">
      <div class="py-5">
        <div class="border-t border-gray-200" />
      </div>
    </div>

    <div class="mt-10 sm:mt-0">
      <div class="md:grid md:grid-cols-2 md:gap-6">
        <div class="md:col-span-1">
          <div class="px-4 sm:px-0">
            <h3 class="text-lg font-medium leading-6 text-gray-900">Checkouts</h3>
            <p class="mt-1 text-sm text-gray-600">Use a permanent address where you can receive mail.</p>
          </div>
        </div>
        <div class="mt-5 md:mt-0 md:col-span-2">
          <form action="#" method="POST">
            <div class="shadow sm:rounded-md sm:overflow-hidden">
              <div class="px-4 py-5 bg-white space-y-6 sm:p-6">
                <div v-for="(checkout, index) in checkouts" v-bind:key="checkout.id" class="grid grid-cols-4 gap-6">

                  <div>
                    <label for="checkout_name" class="block text-sm font-medium text-indigo-600">Period :</label>
                    <input v-model="checkout.name" type="text" name="checkout_name" id="checkout_name" class="mt-1 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md" disabled/>
                  </div>


                  <div class="grid grid-cols-2 gap-6">
                    <div>
                      <label for="checkout_slot" class="block text-sm font-medium text-gray-700">
                        <span class="text-indigo-600">Slot:</span>
                      </label>
                      <select v-model="checkout.slot" id="checkout_slot" name="checkout_slot" class="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md" disabled>
                        <option>day</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
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
                      </select>
                    </div>

                    <div>
                      <label for="checkout_start" class="block text-sm font-medium text-gray-700">
                        <span class="text-indigo-600">Start:</span>
                      </label>
                      <select v-model="checkout.start" id="checkout_start" name="checkout_start" class="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md" disabled>
                        <option>hour</option>
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
                      </select>
                    </div>

                  </div>

                  <div class="grid grid-cols-2 gap-6">
                    <div>
                      <label for="checkout_end" class="block text-sm font-medium text-gray-700">
                        <span class="text-indigo-600">End:</span>
                      </label>
                      <select v-model="checkout.end" id="checkout_end" name="checkout_end" class="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md" disabled>
                        <option>hour</option>
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
                      </select>
                    </div>

                    <div>
                      <label for="price" class="block text-sm font-medium text-gray-700">
                        <span class="text-indigo-600">Price:</span>
                      </label>
                      <input v-model="checkout.price" type="text" name="price" id="price" class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md" placeholder="you@example.com" disabled/>
                    </div>
                  </div>
                  <div class="sm:flex p-2 text-right mt-4 justify-center">
                    <div class="ml-2  md:mt-0 lg:mt-0 text-right">
                      <button type="button" @click="editingCheckout = checkout"  class="mr-2 inline-flex items-center px-2 py-2 border border-transparent shadow-sm text-sm leading-4 font-medium rounded-full text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                        <PencilAltIcon class="h-4 w-4" aria-hidden="true" />
                      </button>
                      <button type="button" @click="removeCheckout(checkout.id, index)" class="inline-flex items-center p-2 border border-transparent rounded-full shadow-sm text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 text-right">
                        <TrashIcon class="h-4 w-4" aria-hidden="true" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div class="flex justify-end bg-gray-50">
                <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
                  <button type="button" @click="newCheckout"  class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    Add checkout
                    <PlusCircleIcon class="ml-2 -mr-0.5 h-4 w-4 mt-0.5" aria-hidden="true" />
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
    <Checkoutmodal @close="endEditingCheckout"  :checkout="editingCheckout" v-show="editingCheckout != null"></Checkoutmodal>
    <Checkoutmodal @close="addCheckout"  :checkout="addingCheckout" v-show="addingCheckout != null"></Checkoutmodal>


<!--    START MANAGE ROOMS-->
    <div class="hidden sm:block" aria-hidden="true">
      <div class="py-5">
        <div class="border-t border-gray-200" />
      </div>
    </div>

    <div class="mt-10 sm:mt-0">
      <div class="md:grid md:grid-cols-2 md:gap-6">
        <div class="md:col-span-1">
          <div class="px-4 sm:px-0">
            <h3 class="text-lg font-medium leading-6 text-gray-900">Rooms</h3>
            <p class="mt-1 text-sm text-gray-600">Use a permanent address where you can receive mail.</p>
          </div>
        </div>
        <div class="mt-5 md:mt-0 md:col-span-2">
          <form action="#" method="POST">
            <div class="shadow sm:rounded-md sm:overflow-hidden">
              <div class="px-4 py-5 bg-white space-y-6 sm:p-6">
                <div v-for="(room, index) in rooms" v-bind:key="room.id" class="grid grid-cols-4 gap-6">

                  <div>
                    <label for="room_name" class="block text-sm font-medium text-indigo-600">Name :</label>
                    <p class="hidden">spacing</p><br>
                    <input v-model="room.name" type="text" name="room_name" id="room_name" class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md" disabled/>
                  </div>


                  <div class="grid grid-cols-2 gap-6">
                    <div>
                      <label for="room_price" class="block text-sm font-medium text-gray-700">
                        <span class="text-indigo-600">Price:</span><br>
                        <span class="hidden">spacing</span><br>
                      </label>
                      <input v-model="room.price" type="text" name="room_price" id="room_price" class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md" disabled/>
                    </div>

                    <div>
                      <label for="weekend_inflation" class="block text-sm font-medium text-gray-700">
                        <span class="text-indigo-600">Weekend</span><br>
                        <span class="text-indigo-600">inflation :</span><br>
                      </label>
                      <input v-model="room.weekendinflation" type="text" name="weekend_inflation" id="weekend_inflation" class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md" placeholder="you@example.com" disabled/>
                    </div>

                  </div>

                  <div class="grid grid-cols-2 gap-6">
                    <div>
                      <label for="specialday_inflation" class="block text-sm font-medium text-gray-700">
                        <span class="text-indigo-600">Specialday</span><br>
                        <span class="text-indigo-600">inflation :</span><br>
                      </label>
                      <input v-model="room.specialdayinflation" type="text" name="specialday_inflation" id="specialday_inflation" class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md" placeholder="you@example.com" disabled/>
                    </div>

                    <div>
                      <label for="group_discount" class="block text-sm font-medium text-gray-700">
                        <span class="text-indigo-600">Group</span><br>
                        <span class="text-indigo-600">discount :</span><br>
                      </label>
                      <input v-model="room.groupdiscount" type="text" name="groupd_iscount" id="group_discount" class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md" placeholder="you@example.com" disabled/>
                    </div>
                  </div>
                  <div class="sm:flex p-2 text-right mt-9 justify-center">
                    <div class="ml-2  md:mt-0 lg:mt-0 text-right">
                      <button type="button" @click="editingRoom = room"  class="mr-2 inline-flex items-center px-2 py-2 border border-transparent shadow-sm text-sm leading-4 font-medium rounded-full text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                        <PencilAltIcon class="h-4 w-4" aria-hidden="true" />
                      </button>
                      <button type="button" @click="removeRoom(room.id, index)" class="inline-flex items-center p-2 border border-transparent rounded-full shadow-sm text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 text-right">
                        <TrashIcon class="h-4 w-4" aria-hidden="true" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div class="flex justify-end bg-gray-50">
                <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
                  <button type="button" @click="newRoom"  class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    Add room
                    <PlusCircleIcon class="ml-2 -mr-0.5 h-4 w-4 mt-0.5" aria-hidden="true" />
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
    <Checkoutmodal @close="endEditingRoom"  :room="editingRoom" v-show="editingRoom != null"></Checkoutmodal>
    <Checkoutmodal @close="addRoom"  :room="addingRoom" v-show="addingRoom != null"></Checkoutmodal>


    <!--    START MANAGE GROUPS-->
    <div class="hidden sm:block" aria-hidden="true">
      <div class="py-5">
        <div class="border-t border-gray-200" />
      </div>
    </div>

    <div class="mt-10 sm:mt-0">
      <div class="md:grid md:grid-cols-3 md:gap-6">
        <div class="md:col-span-1">
          <div class="px-4 sm:px-0">
            <h3 class="text-lg font-medium leading-6 text-gray-900">Groups</h3>
            <p class="mt-1 text-sm text-gray-600">Use a permanent address where you can receive mail.</p>
            {{groups}}
          </div>
        </div>
        <div class="mt-5 md:mt-0 md:col-span-2">
          <form action="#" method="POST">
            <div class="shadow overflow-hidden sm:rounded-md">
              <div class="px-4 py-5 bg-white sm:p-6">
                <div class="grid grid-cols-6 gap-6">
                  <div class="col-span-6 sm:col-span-3">
                    <label for="first-name" class="block text-sm font-medium text-gray-700">First name</label>
                    <input type="text" name="first-name" id="first-name" autocomplete="given-name" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                  </div>

                  <div class="col-span-6 sm:col-span-3">
                    <label for="last-name" class="block text-sm font-medium text-gray-700">Last name</label>
                    <input type="text" name="last-name" id="last-name" autocomplete="family-name" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                  </div>

                  <div class="col-span-6 sm:col-span-4">
                    <label for="email-address" class="block text-sm font-medium text-gray-700">Email address</label>
                    <input type="text" name="email-address" id="email-address" autocomplete="email" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                  </div>

                  <div class="col-span-6 sm:col-span-3">
                    <label for="country" class="block text-sm font-medium text-gray-700">Country</label>
                    <select id="country" name="country" autocomplete="country-name" class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                      <option>United States</option>
                      <option>Canada</option>
                      <option>Mexico</option>
                    </select>
                  </div>

                  <div class="col-span-6">
                    <label for="street-address" class="block text-sm font-medium text-gray-700">Street address</label>
                    <input type="text" name="street-address" id="street-address" autocomplete="street-address" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                  </div>

                  <div class="col-span-6 sm:col-span-6 lg:col-span-2">
                    <label for="city" class="block text-sm font-medium text-gray-700">City</label>
                    <input type="text" name="city" id="city" autocomplete="address-level2" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                  </div>

                  <div class="col-span-6 sm:col-span-3 lg:col-span-2">
                    <label for="region" class="block text-sm font-medium text-gray-700">State / Province</label>
                    <input type="text" name="region" id="region" autocomplete="address-level1" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                  </div>

                  <div class="col-span-6 sm:col-span-3 lg:col-span-2">
                    <label for="postal-code" class="block text-sm font-medium text-gray-700">ZIP / Postal code</label>
                    <input type="text" name="postal-code" id="postal-code" autocomplete="postal-code" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                  </div>
                </div>
              </div>
              <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
                <button type="submit" class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Save</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>


    <!--    START MANAGE TIMESLOTS-->
    <div class="hidden sm:block" aria-hidden="true">
      <div class="py-5">
        <div class="border-t border-gray-200" />
      </div>
    </div>

    <div class="mt-10 sm:mt-0">
      <div class="md:grid md:grid-cols-3 md:gap-6">
        <div class="md:col-span-1">
          <div class="px-4 sm:px-0">
            <h3 class="text-lg font-medium leading-6 text-gray-900">Timeslots</h3>
            <p class="mt-1 text-sm text-gray-600">Decide which communications you'd like to receive and how.</p>
            {{timeslots}}
          </div>
        </div>
        <div class="mt-5 md:mt-0 md:col-span-2">
          <form action="#" method="POST">
            <div class="shadow overflow-hidden sm:rounded-md">
              <div class="px-4 py-5 bg-white space-y-6 sm:p-6">
                <fieldset>
                  <legend class="text-base font-medium text-gray-900">By Email</legend>
                  <div class="mt-4 space-y-4">
                    <div class="flex items-start">
                      <div class="flex items-center h-5">
                        <input id="comments" name="comments" type="checkbox" class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded" />
                      </div>
                      <div class="ml-3 text-sm">
                        <label for="comments" class="font-medium text-gray-700">Comments</label>
                        <p class="text-gray-500">Get notified when someones posts a comment on a posting.</p>
                      </div>
                    </div>
                    <div class="flex items-start">
                      <div class="flex items-center h-5">
                        <input id="candidates" name="candidates" type="checkbox" class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded" />
                      </div>
                      <div class="ml-3 text-sm">
                        <label for="candidates" class="font-medium text-gray-700">Candidates</label>
                        <p class="text-gray-500">Get notified when a candidate applies for a job.</p>
                      </div>
                    </div>
                    <div class="flex items-start">
                      <div class="flex items-center h-5">
                        <input id="offers" name="offers" type="checkbox" class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded" />
                      </div>
                      <div class="ml-3 text-sm">
                        <label for="offers" class="font-medium text-gray-700">Offers</label>
                        <p class="text-gray-500">Get notified when a candidate accepts or rejects an offer.</p>
                      </div>
                    </div>
                  </div>
                </fieldset>
                <fieldset>
                  <div>
                    <legend class="text-base font-medium text-gray-900">Push Notifications</legend>
                    <p class="text-sm text-gray-500">These are delivered via SMS to your mobile phone.</p>
                  </div>
                  <div class="mt-4 space-y-4">
                    <div class="flex items-center">
                      <input id="push-everything" name="push-notifications" type="radio" class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300" />
                      <label for="push-everything" class="ml-3 block text-sm font-medium text-gray-700"> Everything </label>
                    </div>
                    <div class="flex items-center">
                      <input id="push-email" name="push-notifications" type="radio" class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300" />
                      <label for="push-email" class="ml-3 block text-sm font-medium text-gray-700"> Same as email </label>
                    </div>
                    <div class="flex items-center">
                      <input id="push-nothing" name="push-notifications" type="radio" class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300" />
                      <label for="push-nothing" class="ml-3 block text-sm font-medium text-gray-700"> No push notifications </label>
                    </div>
                  </div>
                </fieldset>
              </div>
              <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
                <button type="submit" class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Save</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
import {PlusCircleIcon} from '@heroicons/vue/solid'
import {TrashIcon, PencilAltIcon} from '@heroicons/vue/outline'
import Addspecialdatemodal from "@/components/Addspecialdatemodal";
import Checkoutmodal from "@/components/Checkoutmodal";

const tabs = [
  { name: 'My Account', href: '/dashboard', current: false },
  { name: 'Timeslot reservations', href: '/timeslotreservations', current: false },
  { name: 'Full day reservations', href: '/fulldayreservations', current: false },
  { name: 'Price & date options', href: '/pricedateoptions', current: true },
  { name: 'Additional options', href: '/additionaloptions', current: false },
]

export default {

  mounted() {
    // Receiving specialdays
    this.axios.get(process.env.VUE_APP_URL_API + "api/spcialdays",)
        .then(response => {
          this.specialdays = response.data
        })

    // Receiving checkouts
    this.axios.get(process.env.VUE_APP_URL_API + "api/checkouts",)
        .then(response => {
          this.checkouts = response.data
        })

    // Receiving timeslots
    this.axios.get(process.env.VUE_APP_URL_API + "api/timeslots",)
        .then(response => {
          this.timeslots = response.data
        })

    // Receiving groups
    this.axios.get(process.env.VUE_APP_URL_API + "api/groups",)
        .then(response => {
          this.groups = response.data
        })

    // Receiving products (rooms)
    this.axios.get(process.env.VUE_APP_URL_API + "api/products ")
        .then(response => {
          this.rooms = response.data
        })
  },



  data(){
    return{
      specialdays:'',
      checkouts:'',
      timeslots:'',
      groups:'',
      rooms:'',
      editingSpecial: null,
      addingSpecialDays:null,
      editingCheckout:null,
      addingCheckout:null,
      editingRoom:null,
      addingRoom:null,
    }
  },

  methods: {

    // methods for special days

    newSpecialDays() {
      this.addingSpecialDays = {
        name: null,
        fromDate: null,
        toDate: null,
        fromMonth: null,
        toMonth: null,
      }
    },

    addSpecialDays(special) {
      this.addingSpecialDays = null

      let name = special.name
      let fromDate = special.fromDate
      let toDate = special.toDate
      let fromMonth = special.fromMonth
      let toMonth = special.toMonth
      /* eslint-disable */
      this.axios.post(process.env.VUE_APP_URL_API + "api/spcialdays/", {name, fromDate, toDate, fromMonth, toMonth})
          .then(response => this.specialdays.push(special),
          )

    },

    endEditing(spcialday) {
      this.editingSpecial = null

      let index = this.specialdays.indexOf(spcialday)
      let name = spcialday.name
      let fromDate = spcialday.fromDate
      let toDate = spcialday.toDate
      let fromMonth = spcialday.fromMonth
      let toMonth = spcialday.toMonth
      /*eslint-disable */
      this.axios.put(process.env.VUE_APP_URL_API + `api/spcialdays/${spcialday.id}`, {name, fromDate, toDate, fromMonth, toMonth })
          .then(response => this.specialdays[index] = spcialday)
    },

    removeSpecial(specialID, index) {
      this.axios.delete(process.env.VUE_APP_URL_API + "api/spcialdays/" + specialID)
          .then(response => {
            this.specialdays.splice(index, 1)
          })

          .catch(error => {
            console.log(error);
          })
    },

    // methods for checkouts

    newCheckout() {
      this.addingCheckout = {
        name: null,
        slot: null,
        start: null,
        end: null,
        price: null,
      }
    },

    addCheckout(checkout) {
      this.addingCheckout = null

      let name = checkout.name
      let slot = checkout.slot
      let start = checkout.start
      let end = checkout.end
      let price = checkout.price
      /* eslint-disable */
      this.axios.post(process.env.VUE_APP_URL_API + "api/checkouts/", {name, slot, start, end, price})
          .then(response => this.checkouts.push(checkout),
          )

    },

    endEditingCheckout(checkout) {
      this.editingCheckout = null

      let index = this.checkouts.indexOf(checkout)
      let name = checkout.name
      let slot = checkout.slot
      let start = checkout.start
      let end = checkout.end
      let price = checkout.price
      /*eslint-disable */
      this.axios.put(process.env.VUE_APP_URL_API + `api/checkouts/${checkout.id}`, {name, slot, start, end, price})
          .then(response => this.checkouts[index] = checkout)
    },

    removeCheckout(ID, index) {
      this.axios.delete(process.env.VUE_APP_URL_API + "api/checkouts/" + ID)
          .then(response => {
            this.checkouts.splice(index, 1)
          })

          .catch(error => {
            console.log(error);
          })
    },

    // methods for rooms

    newRoom() {
      this.addingRoom = {
        name: null,
        slot: null,
        start: null,
        end: null,
        price: null,
      }
    },

    addRoom(room) {
      this.addingRoom = null

      let name = room.name
      let slot = room.slot
      let start = room.start
      let end = room.end
      let price = room.price
      /* eslint-disable */
      this.axios.post(process.env.VUE_APP_URL_API + "api/checkouts/", {name, slot, start, end, price})
          .then(response => this.checkouts.push(checkout),
          )

    },

    endEditingRoom(checkout) {
      this.editingRoom = null

      let index = this.checkouts.indexOf(checkout)
      let name = checkout.name
      let slot = checkout.slot
      let start = checkout.start
      let end = checkout.end
      let price = checkout.price
      /*eslint-disable */
      this.axios.put(process.env.VUE_APP_URL_API + `api/checkouts/${checkout.id}`, {name, slot, start, end, price})
          .then(response => this.checkouts[index] = checkout)
    },

    removeRoom(ID, index) {
      this.axios.delete(process.env.VUE_APP_URL_API + "api/checkouts/" + ID)
          .then(response => {
            this.checkouts.splice(index, 1)
          })

          .catch(error => {
            console.log(error);
          })
    },

  },

  components:{
    PencilAltIcon,
    TrashIcon,
    PlusCircleIcon,
    Addspecialdatemodal,
    Checkoutmodal
  },


  setup() {
    return {
      tabs,
    }
  },
}
</script>

