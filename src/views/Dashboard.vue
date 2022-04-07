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

  <main class="max-w-7xl mx-auto top-20 py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
    <div style="max-height: 200Vh">
      <div id="user">
        <h1 class="mt-10 mb-4 p-4 font-bold text-3xl" >Modifier un utilisateur</h1>

        <!--  start search box-->

        <div class="px-4">
          <label for="first-name" class="mt-5 block text-sm font-medium text-gray-700">
            Recherche par adresse e-mail
          </label>
          <input type="search" v-model="searchQuery" name="first-name"  id="first-name" class="mt-1 appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" placeholder="Enter a search here!" />
        </div>

        <div>
          <p class="mb-2 text-right" v-if="searchQuery && filterUsers.length > 1 ">{{filterUsers.length}} results</p>
          <div v-if="!searchQuery"></div>
          <div v-else class="border-2 border-red-600 mt-2">


            <div class="mt-4 shadow overflow-hidden border-b border-gray-200 sm:rounded-lg ">
              <div class="max-w-7xl mx-auto pb-12 px-4 sm:pb-16 sm:px-6 lg:px-8">
                <div class="mx-auto divide-y-2 divide-gray-200">
                  <dl class="mt-6 space-y-6 divide-y divide-gray-200">
                    <Disclosure as="div" v-for="user in filterUsers" v-bind:key="user.id" v-slot="{ open }">
                      <dt class="text-lg">
                        <DisclosureButton class="text-left w-full flex justify-between items-start text-gray-400">
                          <div class="flex items-center justify-between">
                            <p class="text-sm font-medium text-indigo-600 truncate">
                              <span class="text-black">Name : </span>{{ user.firstname }} {{ user.lastname}}<br>
                              <span class="text-black">Ref. utlisateur n° : </span>{{ user.id }}<br>
                              <span class="text-black">Email : </span> <a class="pr-2 pl-2 inline-flex items-center underline ... hover:text-gray-700" :href="`mailto: ${user.email}`"><input v-model="user.email"/></a><br>
                            </p>
                          </div>
                          <span class="ml-6 h-7 flex items-center">
                    <ChevronDownIcon :class="[open ? '-rotate-180' : 'rotate-0', 'h-6 w-6 transform']" aria-hidden="true" />
                  </span>
                        </DisclosureButton>
                      </dt>
                      <DisclosurePanel as="dd" class="mt-2">
                        <div class="bg-white shadow overflow-hidden sm:rounded-lg">
                          <div class="px-4 py-5 sm:px-6">
                            <h3 class="text-lg leading-6 font-medium text-gray-900">
                              Détail du client
                            </h3>
                          </div>
                          <div class="border-t border-gray-200">
                            <dl>
                              <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt class="text-sm font-medium text-gray-500">
                                  Est-il administrateur ?
                                </dt>
                                <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                          <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                            {{user.is_admin == 1? "Oui" : "No"}}
                          </span>
                                </dd>
                              </div>

                              <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">

                                <div class="sm:flex mt-2">
                                  <div>
                                    <button type="button" @click="editingUser = user"  class="inline-flex items-center p-1.5 border border-transparent rounded-full shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                      <PencilAltIcon class="h-5 w-5" aria-hidden="true" />
                                    </button>
                                  </div>
                                  <div class="ml-2 mt-2 md:mt-0 lg:mt-0">
                                    <button type="button" @click="removeUser(user.id, index)" class="inline-flex items-center p-1.5 border border-transparent rounded-full shadow-sm text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
                                      <TrashIcon class="h-5 w-5" aria-hidden="true" />
                                    </button>
                                  </div>
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

          </div>
        </div>


        <div class="mt-4 shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
          <div class="max-w-7xl mx-auto pb-12 px-4 sm:pb-16 sm:px-6 lg:px-8">
            <div class="mx-auto divide-y-2 divide-gray-200">
              <dl class="mt-6 space-y-6 divide-y divide-gray-200">
                <Disclosure as="div" v-for="(user,index) in users" v-bind:key="index" class="pt-6" v-slot="{ open }">
                  <dt class="text-lg">
                    <DisclosureButton class="text-left w-full flex justify-between items-start text-gray-400">
                      <div class="flex items-center justify-between">
                        <p class="text-sm font-medium text-indigo-600 truncate">
                          <span class="text-black">Name : </span>{{ user.firstname }} {{ user.lastname}}<br>
                          <span class="text-black">Ref. utlisateur n° : </span>{{ user.id }}<br>
                          <span class="text-black">Email : </span> <a class="pr-2 pl-2 inline-flex items-center underline ... hover:text-gray-700" :href="`mailto: ${user.email}`"><input v-model="user.email"/></a><br>
                        </p>
                      </div>
                      <span class="ml-6 h-7 flex items-center">
                    <ChevronDownIcon :class="[open ? '-rotate-180' : 'rotate-0', 'h-6 w-6 transform']" aria-hidden="true" />
                  </span>
                    </DisclosureButton>
                  </dt>
                  <DisclosurePanel as="dd" class="mt-2">
                    <div class="bg-white shadow overflow-hidden sm:rounded-lg">
                      <div class="px-4 py-5 sm:px-6">
                        <h3 class="text-lg leading-6 font-medium text-gray-900">
                          Détail du client
                        </h3>
                      </div>
                      <div class="border-t border-gray-200">
                        <dl>
                          <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt class="text-sm font-medium text-gray-500">
                              Est-il administrateur ?
                            </dt>
                            <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                          <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                            {{user.is_admin == 1? "Oui" : "No"}}
                          </span>
                            </dd>
                          </div>

                          <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">

                            <div class="sm:flex mt-2">
                              <div>
                                <button type="button" @click="editingUser = user"  class="inline-flex items-center p-1.5 border border-transparent rounded-full shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                  <PencilAltIcon class="h-5 w-5" aria-hidden="true" />
                                </button>
                              </div>
                              <div class="ml-2 mt-2 md:mt-0 lg:mt-0">
                                <button type="button" @click="removeUser(user.id, index)" class="inline-flex items-center p-1.5 border border-transparent rounded-full shadow-sm text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
                                  <TrashIcon class="h-5 w-5" aria-hidden="true" />
                                </button>
                              </div>
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
      </div>
    </div>

    <Usermodal @close="endEditingUser"  :user="editingUser" v-show="editingUser != null"></Usermodal>
    <Usermodal @close="addUser"  :user="addingUser" v-show="addingUser != null"></Usermodal>

  </main>

</template>

<script>
import Usermodal from "@/components/Usermodal";
import { TrashIcon, ChevronDownIcon, PencilAltIcon  } from '@heroicons/vue/outline'
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'

const tabs = [
  { name: 'My Account', href: '/dashboard', current: true },
  { name: 'Timeslot reservations', href: '/timeslotreservations', current: false },
  { name: 'Full day reservations', href: '/fulldayreservations', current: false },
  { name: 'Price & date options', href: '/pricedateoptions', current: false },
  { name: 'Additional options', href: '/additionaloptions', current: false },
]

export default {



  mounted() {

    this.axios.get(process.env.VUE_APP_URL_API + "api/users")
        .then(response => {
          this.users = response.data
        })
  },

  methods: {

    newGroup() {
      this.addingUser = {
        name: null,
        value: null,
        discount:null,
      }
    },

    addUser(user) {
      this.addingUser = null

      let name = user.name
      let email = user.email
      let admin = user.is_admin

      /* eslint-disable */
      this.axios.post(process.env.VUE_APP_URL_API + "api/users/", {name, email, admin, })
          .then(response => this.users.push(user),
          )

    },

    endEditingUser(user) {
      this.editingUser = null

      let index = this.users.indexOf(user)
      let name = user.name
      let email = user.email
      let admin = user.is_admin
      /*eslint-disable */
      this.axios.put(process.env.VUE_APP_URL_API + `api/users/${user.id}`, {name, email, admin,})
          .then(response => this.users[index] = user,)
    },

    removeUser(ID, index) {
      this.axios.delete(process.env.VUE_APP_URL_API + "api/users/" + ID)
          .then(response => {
            this.users.splice(index, 1)
          })

          .catch(error => {
            console.log(error);
          })
    },
  },

  computed: {

    filterUsers() {
      return this.users.filter(result => {
        console.log(result)

        const myRegex = new RegExp(this.searchQuery, 'gi');
        let resultFacet = this.facet;
        if (resultFacet.length == 0) {
          return (result.email.match(myRegex) || result.email.match(myRegex))
        }
        return (result.email.match(myRegex) || result.email.match(myRegex)) && (resultFacet.includes(result.id));
      })
    },
  },

  data(){
    return{
      users: [],
      addingUser: null,
      editingUser: null,
      facet: [],
      searchQuery: null,
    }
  },

  components:{
    PencilAltIcon,
    TrashIcon,
    ChevronDownIcon,
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
    Usermodal
  },


  setup() {
    return {
      tabs,
    }
  },
}
</script>
