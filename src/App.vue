<template>
  <TransitionRoot as="template" :show="mobileMenuOpen">
    <Dialog as="div" class="fixed inset-0 flex z-40 lg:hidden" @close="mobileMenuOpen = false">
      <TransitionChild as="template" enter="transition-opacity ease-linear duration-300" enter-from="opacity-0" enter-to="opacity-100" leave="transition-opacity ease-linear duration-300" leave-from="opacity-100" leave-to="opacity-0">
        <DialogOverlay class="fixed inset-0 bg-black bg-opacity-25" />
      </TransitionChild>

      <TransitionChild as="template" enter="transition ease-in-out duration-300 transform" enter-from="-translate-x-full" enter-to="translate-x-0" leave="transition ease-in-out duration-300 transform" leave-from="translate-x-0" leave-to="-translate-x-full">
        <div class="relative max-w-xs w-full bg-beige shadow-xl pb-12 pt-12 flex flex-col overflow-y-auto">
          <!-- <div class="px-4 pt-5 pb-2 flex justify-end">
            <button type="button" class="-m-2 p-2 inline-flex items-center justify-center text-gray-400 outline-none" @click="mobileMenuOpen = false">
              <span class="sr-only">Close menu</span>
              <XIcon class="h-6 w-6" aria-hidden="true" />
            </button>
          </div> -->

          <!-- MOBILE Links -->
          <img src="img/logos/paradiso_logo1.png" alt="Paradiso park logo" class="h-auto w-auto" />

          <!-- ABOUT BTN-->
          <div class="py-3 px-4 space-y-2">
            <div v-for="mobilepage in navigation.mobilepages" :key="mobilepage.name" class="flow-root">
              <router-link :to="mobilepage.href" class="-m-2 p-2 block font-light text-black" @click="mobileMenuOpen = false">{{ mobilepage.name }}</router-link>
            </div>
          </div>

          <div class="border-t border-gray-200 py-2 px-4 space-y-2">
            <div class="flow-root">
              <router-link to="/useraccount" class="-m-2 p-2 block font-light text-black">My reservation</router-link>
            </div>
            <div class="flow-root">
              <router-link to="/register" class="-m-2 p-2 block font-light text-black">Register</router-link>
            </div>
            <div class="flow-root">
              <router-link to="/login" class="-m-2 p-2 block font-light text-black">Sign in</router-link>
            </div>
            <div v-if="this.setUser" class="flow-root">
              <router-link v-on:click="logout" to="/" :class="[active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-bord flex']">
                logout
              </router-link>
            </div>
          </div>

        </div>
      </TransitionChild>
    </Dialog>
  </TransitionRoot>

  <!-- Hero section -->
  <!-- :class="{change_color_text: scrollPosition > 20}" -->
  <div class="transition_navbar fixed z-50 w-full bg-white">
    <!-- Decorative image and overlay -->
    <!-- <div aria-hidden="true" class="absolute inset-0 overflow-hidden">
      <img src="https://tailwindui.com/img/ecommerce-images/home-page-01-hero-full-width.jpg" alt="" class="w-full h-full object-center object-cover" />
    </div> -->
    <!-- <div aria-hidden="true" class="absolute inset-0 bg-gray-900 opacity-50" /> -->

    <!-- Navigation -->
    <header class="relative z-10">
      <nav aria-label="Top">

        <!-- Secondary navigation -->
        <!-- backdrop-blur-md backdrop-filter bg-opacity-10 bg-white -->
        <div>
          <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div>
              <div class="h-16 flex items-center justify-between">
                <!-- Logo (lg+) -->
                <div class="hidden lg:flex-1 lg:flex lg:items-center">
                  <router-link to="/">
                    <span class="sr-only">Workflow</span>
                    <img class="h-12 w-auto" src="img/logos/paradiso_logo1.png" alt="paradisopark_logo" />
                  </router-link>
                </div>

                <div class="hidden h-full lg:flex">
                  <!-- Flyout menus -->
                  <PopoverGroup class="px-4 bottom-0 inset-x-0">
                    <div class="h-full flex justify-center space-x-8">

                    <!-- Other btn -->
                    <!-- :class="{change_color_text: scrollPosition > 20}" -->
                      <router-link v-for="firstpage in navigation.firstpages" :key="firstpage.name" :to="firstpage.href" class="transition_navbar flex items-center font-light text-black hover:text-grey-400">{{ firstpage.name }}</router-link>

                      <!-- BTN DROPDOWN -->



                      <Popover v-for="category in navigation.categories" :key="category.name" class="flex" v-slot="{ open }">
                        <div class="relative flex">
                          <!-- :class="{change_color_text: scrollPosition > 20}" -->
                          <PopoverButton class="transition_navbar hover:text-black relative z-10 outline-none flex items-center justify-center transition-colors ease-out duration-200 font-light text-black">
                            {{ category.name }}
                            <span :class="[open ? 'bg-transparent' : '', 'absolute -bottom-px inset-x-0 h-0.5 transition ease-out duration-200']" aria-hidden="true" />
                          </PopoverButton>
                        </div>

                        <transition enter-active-class="transition ease-out duration-200" enter-from-class="opacity-0" enter-to-class="opacity-100" leave-active-class="transition ease-in duration-150" leave-from-class="opacity-100" leave-to-class="opacity-0">
                          <PopoverPanel class="absolute top-full font-light text-gray-500">
                            <!-- Presentational element used to render the bottom shadow, if we put the shadow on the actual panel it pokes out the top, so we use this shorter element to hide the top of the shadow -->
                            <div class="absolute inset-0 top-1/2 bg-transparent" aria-hidden="true" />

                            <!-- :class="{change_background: scrollPosition > 20}" -->
                            <div class="relative bg-white">
                              <div class="max-w-7xl px-4 sm:px-6 lg:px-8">
                                <div class="flex flex-col justify-center py-2">
                                  <div v-for="item in category.featured" :key="item.name" class="group relative px-2">
                                    <!-- <div class="h-32 w-32 bg-gray-100 overflow-hidden group-hover:opacity-75">
                                      <img :src="item.imageSrc" :alt="item.imageAlt" class="object-center object-cover" />
                                    </div> -->
                                    <!-- :class="{change_color_text: scrollPosition > 20}" -->
                                    <router-link :to="item.href" class="transition_navbar mt-2 block font-light text-black">
                                      <span class="absolute z-10 inset-0" aria-hidden="true" />
                                      {{ item.name }}
                                    </router-link>
                                    <p aria-hidden="true" class="mt-0">{{ item.role }}</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </PopoverPanel>
                        </transition>
                      </Popover>

                      <!-- Other btn -->
                      <!-- :class="{change_color_text: scrollPosition > 20}" -->
                      <router-link v-for="page in navigation.pages" :key="page.name" :to="page.href" class="transition_navbar flex items-center font-light text-black hover:text-black">{{ page.name }}</router-link>
                    </div>
                  </PopoverGroup>
                </div>

                <!-- Mobile menu and search (lg-) -->
                <div class="flex-1 flex items-center lg:hidden">
                  <!-- :class="{change_color_text: scrollPosition > 20}" -->
                  <button type="button" class="-ml-2 p-2 text-black" @click="mobileMenuOpen = true">
                    <span class="sr-only">Open menu</span>
                    <MenuIcon class="h-6 w-6" aria-hidden="true" />
                  </button>

                </div>

                <!-- Logo (lg-) -->
                <!-- :class="{change_color_text: scrollPosition > 20}" -->
                <router-link to="/booking" class="text-white lg:hidden">Réserver en ligne</router-link>

                <div class="flex-1 flex items-center justify-end">
                  <!--                  <a href="#" class="hidden text-sm font-medium text-white lg:block">-->
                  <!--                    Search-->
                  <!--                  </a>-->

                  <div class="flex items-center lg:ml-8">
                    <!-- Help -->
                    <!-- <a href="#" class="p-2 text-white lg:hidden">
                      <span class="sr-only">Help</span>
                      <QuestionMarkCircleIcon class="w-6 h-6" aria-hidden="true" />
                    </a>
                    <a href="#" class="hidden text-sm font-medium text-white lg:block">Help</a> -->

                    <!-- BOOKING DESKTOP -->
                    <!-- :class="[{change_color_text: scrollPosition > 20},{change_border: scrollPosition > 20}]" -->
                    <router-link to="/booking" class="transition_navbar hidden font-light text-black border-black hover:text-white hover:bg-black lg:block custom-border-btn p-2 text-center uppercase">Réserver</router-link>

                    <!-- LANGUAGES DESKTOP -->
                    <div class="border-t border-gray-200 py-6 pl-4 space-y-6">
                      <form>
                        <div class="inline-block">
                          <label for="mobile-languages" class="sr-only">Languages</label>
                          <div class="-ml-2 group relative border-transparent focus-within:ring-0 focus-within:ring-none">
                            <!-- :class="{change_color_text: scrollPosition > 20}" -->
                            <select v-model="$i18n.locale" id="mobile-languages" name="language" class="select_custom transition_navbar bg-transparent text-black border-transparent py-0.5 pl-2 pr-2 flex items-center font-light focus:outline-none focus:ring-0 focus:border-transparent">
                              <option value="fr">FR</option>
                              <option value="en">EN</option>
                              <option value="nl">NL</option>
                            </select>
                          </div>
                        </div>
                      </form>
                    </div>

                    <!-- PROFIL DROPDOWN DESKTOP -->
                    <Menu as="div" class="hidden lg:block ml-3 relative">
                      <div>
                        <MenuButton class="bg-transparent rounded-full flex text-sm focus:outline-none focus:ring-0 focus:ring-offset-0 focus:ring-indigo-500" @click="mobileMenuOpen = false">
                          <span class="sr-only">Open user menu</span>
                          <!-- :class="{change_color_text: scrollPosition > 20}" -->
                          <UserCircleIcon class="transition_navbar h-8 w-8 font-light text-black"/>
                        </MenuButton>
                      </div>
                      <transition enter-active-class="transition ease-out duration-200" enter-from-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100" leave-active-class="transition ease-in duration-75" leave-from-class="transform opacity-100 scale-100" leave-to-class="transform opacity-0 scale-95">
                        <MenuItems class="origin-top-right absolute right-0 mt-2 w-48 shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                          <MenuItem v-if="! this.setUser" v-slot="{ active }">
                            <router-link to="/Register" :class="[active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700']">
                              Register
                            </router-link>
                          </MenuItem>
                          <MenuItem v-if="! this.setUser" v-slot="{ active }">
                            <router-link to="/Login" :class="[active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700']">
                              Login
                            </router-link>
                          </MenuItem>
                          <MenuItem v-if="this.setUser"  v-slot="{ active }">
                            <router-link to="/useraccount" :class="[active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700']">
                              <span class="text-sm font-medium mt-1 uppercase">{{ this.setUser.name }}</span><br>
                              reservation
                            </router-link>
                          </MenuItem>
                          <MenuItem v-if="this.setUser"  v-slot="{ active }">
                            <router-link v-on:click="logout" to="/" :class="[active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700']">
                              Logout
                            </router-link>
                          </MenuItem>
                        </MenuItems>
                      </transition>
                    </Menu>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  </div>

  <router-view/>


  <footer class="bg-beige" aria-labelledby="footer-heading">

    <!-- CONTACT FORM -->
    <div class="relative" id="contact">
      <div class="absolute inset-0">
        <div class="absolute inset-y-0 left-0 w-1/2 bg-beige" />
      </div>
      <div class="relative max-w-7xl mx-auto lg:grid lg:grid-cols-5">
        <div class="bg-beige pt-8 px-4 sm:px-6 lg:col-span-2 lg:px-8 lg:pt-8 xl:pr-12">
          <div class="max-w-lg mx-auto">
            <h2 class="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">{{ $t("contact.title") }}</h2>
            <p class="mt-3 text-lg leading-6 text-gray-500">{{ $t("contact.description") }}</p>
            <dl class="mt-8 text-base text-gray-500">
              <div>
                <dt class="sr-only">{{ $t("contact.address") }}</dt>
                <dd>
                  <p>269 Lintsesteenweg</p>
                  <p>2570 Duffel, Belgique</p>
                </dd>
              </div>
              <div class="mt-6">
                <dt class="sr-only">{{ $t("contact.phone") }}</dt>
                <dd class="flex">
                  <PhoneIcon class="flex-shrink-0 h-6 w-6 text-gray-400" aria-hidden="true" />
                  <span class="ml-3"> +32 493 47 07 07 </span>
                </dd>
              </div>
              <div class="mt-3">
                <dt class="sr-only">{{ $t("contact.mail") }}</dt>
                <dd class="flex">
                  <MailIcon class="flex-shrink-0 h-6 w-6 text-gray-400" aria-hidden="true" />
                  <span class="ml-3"> info@paradisopark.be </span>
                </dd>
              </div>
            </dl>
          </div>
        </div>
        <div class="bg-beige pt-8 px-4 sm:px-6 lg:col-span-3 lg:pt-8 lg:px-8 xl:pl-12">
          <div class="max-w-lg mx-auto lg:max-w-none">
            <form action="#" method="POST" class="grid grid-cols-1 gap-y-6">
              <div>
                <label for="full-name" class="sr-only">{{ $t("contact.label.name") }}</label>
                <input type="text" name="full-name" id="full-name" autocomplete="name" class="block w-full shadow-sm py-2 px-4 bg-white placeholder-gray-500 focus:ring-gray-400 focus:border-gray-400 border-gray-300" placeholder="Full name" />
              </div>
              <div>
                <label for="email" class="sr-only">{{ $t("contact.label.mail") }}</label>
                <input id="email" name="email" type="email" autocomplete="email" class="block w-full shadow-sm py-2 px-4 bg-white placeholder-gray-500 focus:ring-gray-400 focus:border-gray-400 border-gray-300" placeholder="Email" />
              </div>
              <div>
                <label for="phone" class="sr-only">{{ $t("contact.label.phone") }}</label>
                <input type="text" name="phone" id="phone" autocomplete="tel" class="block w-full shadow-sm py-2 px-4 bg-white placeholder-gray-500 focus:ring-gray-400 focus:border-gray-400 border-gray-300" placeholder="Phone" />
              </div>
              <div>
                <label for="message" class="sr-only">{{ $t("contact.label.message") }}</label>
                <textarea id="message" name="message" rows="4" class="block w-full shadow-sm py-2 px-4 bg-white placeholder-gray-500 focus:ring-gray-400 focus:border-gray-400 border border-gray-300" placeholder="Message" />
              </div>
              <div class="flex justify-end">
                <button type="submit" class="inline-flex justify-center py-2 px-6 shadow-sm text-base font-medium border bg-white text-black hover:text-white hover:bg-black focus:ring-0 focus:outline-none">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>

    <!-- FOOTER LINK -->
    <div class="bg-beige">
      <div class="max-w-7xl mx-auto py-8 px-4 overflow-hidden sm:px-6 lg:px-8">
        <nav class=" lg:flex text-center flex-wrap justify-between items-center pt-4 pb-4 border-t border-b border-gray-400" aria-label="Footer">
          <div class="lg:flex">
            <div v-for="item in navigationfooter.main" :key="item.name" class="px-5 py-2">
              <a :href="item.href" class="text-base text-gray-500 hover:text-gray-900">
                {{ item.name }}
              </a>
            </div>
          </div>
          
            <div class="mt-8 xl:mt-0 lg:flex lg:items-center text-center">
              <h3 class="lg:mr-4 text-sm font-semibold text-gray-400 tracking-wider uppercase">Subscribe to our newsletter</h3>
              <!-- <p class="mt-4 text-base text-gray-500">The latest news, articles, and resources, sent to your inbox weekly.</p> -->
              <form class="sm:flex sm:max-w-md">
                <label for="email-address" class="sr-only">Email address</label>
                <input type="email" name="email-address" id="email-address" autocomplete="email" required="" class="appearance-none min-w-0 w-full bg-white border border-gray-300 shadow-sm py-2 px-4 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-gray-400 focus:border-gray-400 focus:placeholder-gray-400" placeholder="Enter your email" />
                <div class="mt-3 sm:mt-0 sm:ml-3 sm:flex-shrink-0">
                  <button type="submit" class="w-full bg-white flex items-center justify-center py-2 px-4 text-base font-medium  text-black hover:text-white hover:bg-black focus:ring-0">Subscribe</button>
                </div>
              </form>
            </div>
          
        </nav>
        <div class="max-w-7xl mx-auto pt-8 md:flex md:items-center md:justify-between">
          <div class="flex justify-center space-x-6 md:order-2">
            <a v-for="item in navigationfooter.social" :key="item.name" :href="item.href" class="text-gray-400 hover:text-gray-500">
              <span class="sr-only">{{ item.name }}</span>
              <component :is="item.icon" class="h-6 w-6" aria-hidden="true" />
            </a>
          </div>
          <div class="mt-8 md:mt-0 md:order-1">
            <p class="text-center text-base text-gray-400">&copy; {{new Date().getFullYear()}} Paradiso Park, All rights reserved - Website carefully craffted by <a class="hover:text-teal-500" href="https://www.artexa.agency" target="_blank">Artexa Agency</a></p>
          </div>
        </div>
      </div>
    </div>



      <!-- <h2 id="footer-heading" class="sr-only">Footer</h2>
      <div class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div class="pb-8 xl:grid xl:grid-cols-5 xl:gap-8">
          <div class="grid grid-cols-2 gap-8 xl:col-span-4">
            <div class="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 class="text-sm font-semibold text-gray-400 tracking-wider uppercase">Solutions</h3>
                <ul role="list" class="mt-4 space-y-4">
                  <li v-for="item in footernavigation.solutions" :key="item.name">
                    <router-link :to="item.href" class="text-base text-gray-300 hover:text-white">
                      {{ item.name }}
                    </router-link>
                  </li>
                </ul>
              </div>
              <div class="mt-12 md:mt-0">
                <h3 class="text-sm font-semibold text-gray-400 tracking-wider uppercase">Support</h3>
                <ul role="list" class="mt-4 space-y-4">
                  <li v-for="item in footernavigation.support" :key="item.name">
                    <router-link :to="item.href" class="text-base text-gray-300 hover:text-white">
                      {{ item.name }}
                    </router-link>
                  </li>
                </ul>
              </div>
            </div>
            <div class="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 class="text-sm font-semibold text-gray-400 tracking-wider uppercase">Company</h3>
                <ul role="list" class="mt-4 space-y-4">
                  <li v-for="item in navigation.company" :key="item.name">
                    <router-link :to="item.href" class="text-base text-gray-300 hover:text-white">
                      {{ item.name }}
                    </router-link>
                  </li>
                </ul>
              </div>
              <div class="mt-12 md:mt-0">
                <h3 class="text-sm font-semibold text-gray-400 tracking-wider uppercase">Legal</h3>
                <ul role="list" class="mt-4 space-y-4">
                  <li v-for="item in footernavigation.legal" :key="item.name">
                    <router-link :to="item.href" class="text-base text-gray-300 hover:text-white">
                      {{ item.name }}
                    </router-link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="mt-12 xl:mt-0">
            <h3 class="text-sm font-semibold text-gray-400 tracking-wider uppercase">Language &amp; Currency</h3>
            <form class="mt-4 sm:max-w-xs">
              <fieldset class="w-full">
                <label for="language" class="sr-only">Language</label>
                <div class="relative">
                  <select id="language" name="language" class="appearance-none block w-full bg-none bg-gray-700 border border-transparent rounded-md py-2 pl-3 pr-10 text-base text-white focus:outline-none focus:ring-white focus:border-white sm:text-sm">
                    <option selected="">English</option>
                    <option>French</option>
                    <option>German</option>
                    <option>Japanese</option>
                    <option>Spanish</option>
                  </select>
                  <div class="pointer-events-none absolute inset-y-0 right-0 px-2 flex items-center">
                    <ChevronDownIcon class="h-4 w-4 text-white" aria-hidden="true" />
                  </div>
                </div>
              </fieldset>
              <fieldset class="mt-4 w-full">
                <label for="currency" class="sr-only">Currency</label>
                <div class="mt-1.5 relative">
                  <select id="currency" name="currency" class="appearance-none w-full bg-none bg-gray-700 border border-transparent rounded-md block py-2 pl-3 pr-10 text-base text-white focus:outline-none focus:ring-white focus:border-white sm:text-sm">
                    <option>ARS</option>
                    <option selected="">AUD</option>
                    <option>CAD</option>
                    <option>CHF</option>
                    <option>EUR</option>
                    <option>GBP</option>
                    <option>JPY</option>
                    <option>USD</option>
                  </select>
                  <div class="pointer-events-none absolute inset-y-0 right-0 px-2 flex items-center">
                    <ChevronDownIcon class="h-4 w-4 text-white" aria-hidden="true" />
                  </div>
                </div>
              </fieldset>
            </form>
          </div>
        </div>
        <div class="border-t border-gray-700 pt-8 lg:flex lg:items-center lg:justify-between xl:mt-0">
          <div>
            <h3 class="text-sm font-semibold text-gray-400 tracking-wider uppercase">Subscribe to our newsletter</h3>
            <p class="mt-2 text-base text-gray-300">The latest news, articles, and resources, sent to your inbox weekly.</p>
          </div>
          <form class="mt-4 sm:flex sm:max-w-md lg:mt-0">
            <label for="email-address" class="sr-only">Email address</label>
            <input type="email" name="email-address" id="email-address" autocomplete="email" required="" class="appearance-none min-w-0 w-full bg-white border border-transparent rounded-md py-2 px-4 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white focus:border-white focus:placeholder-gray-400 sm:max-w-xs" placeholder="Enter your email" />
            <div class="mt-3 rounded-md sm:mt-0 sm:ml-3 sm:flex-shrink-0">
              <button type="submit" class="w-full bg-indigo-500 border border-transparent rounded-md py-2 px-4 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-indigo-500">Subscribe</button>
            </div>
          </form>
        </div>
        <div class="mt-8 border-t border-gray-700 pt-8 md:flex md:items-center md:justify-between">
          <div class="flex space-x-6 md:order-2">
            <a v-for="item in footernavigation.social" :key="item.name" :href="item.href" class="text-gray-400 hover:text-gray-300">
              <span class="sr-only">{{ item.name }}</span>
              <component :is="item.icon" class="h-6 w-6" aria-hidden="true" />
            </a>
          </div>
          <p class="mt-8 text-base text-gray-400 md:mt-0 md:order-1">&copy; {{new Date().getFullYear()}} Artexa Agency, Inc. All rights reserved.</p>
        </div>
      </div> -->


      <vue-cookie-comply
          :preferences="[
              {
                title: 'Required Information / Information requise',
                description:
                  'Personal information collected such as names, telephone numbers and places are mandatory to allow the application to function properly and will in no way be disclosed to third parties. / Les informations personnelles collectées telles que noms, numéros de téléphone et lieux sont obligatoires pour permettre le bon fonctionnement de l\'application et ne seront en aucun cas divulguées à des tiers.',
                items: [{ label: 'Active', value: 'I understand / je comprend ', isRequired: true }],
              },
              {
                title: 'GoogleAnalytics',
                description:
                    'We ask for permission to collect statistical information relating to our site in a completely anonymous form to understand on average how many users use our application, the type of browser used or the type of device used (smartphone rather than PC) in order to improve our service. / Nous demandons l\'autorisation de collecter des informations statistiques relatives à notre site sous une forme totalement anonyme pour comprendre en moyenne combien d\'utilisateurs utilisent notre application, le type de navigateur utilisé ou le type d\'appareil utilisé (smartphone plutôt que PC) afin d\'améliorer notre service. ',
                items: [
                  { label: 'GoogleAnalytics', value: 'Allow / Permettre ?' },
                ],
              },
            ]"
      >
        <template v-slot:header class="bg-white">
          <header>{{ $t('cookies.title') }}</header>

          <footer class="mt-1">
            <p class="text-xs text-gray-500">{{ $t('cookies.click') }} <a href="/Terms" class="text-artexa-teal-400">{{ $t('cookies.terms') }}</a> {{ $t('cookies.and') }} <a href="/Privacy" class="text-artexa-teal-400">{{ $t('cookies.privacy') }}</a> {{ $t('cookies.service') }}</p>
          </footer>
        </template>

        <template v-slot:modal-body="{ preference }">
          <div class="mt-6">
            <h4 class="text-bold text-sm">{{ preference.title }}</h4>
            <p class="mt-2 text-xs text-gray-500">{{ preference.description }}</p>

            <div v-for="(item, index) in preference.items" v-bind:key="index"  class="cookie-comply__modal-switches my-3">
              <h3 class="text-sm">{{item.value}}</h3>
              <label class="cookie-comply-switch" title="ok">
                <input id="sentry" type="checkbox" value="ok">
                <span class="cookie-comply-slider cookie-comply-round"></span>
              </label>
            </div>
          </div>
        </template>

      </vue-cookie-comply>


  </footer>

</template>

<script>
import { defineComponent, h } from 'vue'
import { ref } from 'vue'
import {
  Dialog,
  DialogOverlay,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
  Tab,
  TabGroup,
  TabList,
  TabPanel,
  TabPanels,
  TransitionChild,
  TransitionRoot,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from '@headlessui/vue'
import { MenuIcon, SearchIcon, ShoppingCartIcon, UserIcon, XIcon, QuestionMarkCircleIcon, ShoppingBagIcon, UserCircleIcon, MailIcon, PhoneIcon  } from '@heroicons/vue/outline'
import { ChevronDownIcon } from '@heroicons/vue/solid'
import 'vue-cookie-comply/dist/style.css'

const languages = ['FR', 'EN', 'NL']

const navigation = {
  mobilepages: [
    { name: 'Paradiso', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Chambres', href: '/rooms' },
    { name: 'Événements', href: '/events' },
    { name: 'Contact', href: '#contact' },
  ],

  firstpages: [
    { name: 'Paradiso', href: '/' },
    
  ],

  categories: [
    {
      name: 'Services',
      featured: [
        {
          name: 'Sauna & Hammam',
          href: '/services',
          imageSrc: 'https://tailwindui.com/img/ecommerce-images/mega-menu-01-men-category-01.jpg',
          imageAlt: 'Hats and sweaters on wood shelves next to various colors of t-shirts on hangers.',
        },
        {
          name: 'Piscine',
          href: '/services',
          imageSrc: 'img/candles.jpg',
          imageAlt: 'Model wearing light heather gray t-shirt.',
        },
        {
          name: 'Jardin d\'hiver',
          href: '/services',
          imageSrc: 'img/dish.jpg',
          imageAlt:
              'Grey 6-panel baseball hat with black brim, black mountain graphic on front, and light heather gray body.',
        },
        {
          name: 'Jardin et étang',
          href: '/services',
          imageSrc: 'img/dish.jpg',
          imageAlt:
              'Grey 6-panel baseball hat with black brim, black mountain graphic on front, and light heather gray body.',
        },
        {
          name: 'Traiteur',
          href: '/services',
          imageSrc: 'img/dish.jpg',
          imageAlt:
              'Grey 6-panel baseball hat with black brim, black mountain graphic on front, and light heather gray body.',
        },
      ],
    }
  ],
  pages: [
    { name: 'Chambres', href: '/rooms' },
    { name: 'Événements', href: '/events' },
    { name: 'Contact', href: '#contact' },
    
  ],
}

const navigationfooter = {
  main: [
    { name: 'Terms', href: '/terms' },
    { name: 'Policy', href: '/privacy' },
    { name: 'FAQ', href: '/faq' },
  ],
  social: [
    {
      name: 'Facebook',
      href: 'https://www.facebook.com/paradiso.park.belgium/',
      icon: defineComponent({
        render: () =>
          h('svg', { fill: 'currentColor', viewBox: '0 0 24 24' }, [
            h('path', {
              'fill-rule': 'evenodd',
              d: 'M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z',
              'clip-rule': 'evenodd',
            }),
          ]),
      }),
    },
    {
      name: 'Instagram',
      href: 'https://www.instagram.com/paradiso.park/',
      icon: defineComponent({
        render: () =>
          h('svg', { fill: 'currentColor', viewBox: '0 0 24 24' }, [
            h('path', {
              'fill-rule': 'evenodd',
              d: 'M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z',
              'clip-rule': 'evenodd',
            }),
          ]),
      }),
    },
    {
      name: 'Twitter',
      href: '#',
      icon: defineComponent({
        render: () =>
          h('svg', { fill: 'currentColor', viewBox: '0 0 24 24' }, [
            h('path', {
              d: 'M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84',
            }),
          ]),
      }),
    },

  ],
}

// const footernavigation = {
//   solutions: [
//     { name: 'Marketing', href: '#' },
//     { name: 'Analytics', href: '#' },
//     { name: 'Commerce', href: '#' },
//     { name: 'Insights', href: '#' },
//   ],
//   support: [
//     { name: 'Pricing', href: '#' },
//     { name: 'Documentation', href: '#' },
//     { name: 'Guides', href: '#' },
//     { name: 'API Status', href: '#' },
//   ],
//   company: [
//     { name: 'About', href: '#' },
//     { name: 'Blog', href: '#' },
//     { name: 'Jobs', href: '#' },
//     { name: 'Press', href: '#' },
//     { name: 'Partners', href: '#' },
//   ],
//   legal: [
//     { name: 'Claim', href: '#' },
//     { name: 'Privacy', href: '#' },
//     { name: 'Terms', href: '#' },
//   ],
//   social: [
//     {
//       name: 'Facebook',
//       href: '#',
//       icon: defineComponent({
//         render: () =>
//             h('svg', { fill: 'currentColor', viewBox: '0 0 24 24' }, [
//               h('path', {
//                 'fill-rule': 'evenodd',
//                 d: 'M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z',
//                 'clip-rule': 'evenodd',
//               }),
//             ]),
//       }),
//     },
//     {
//       name: 'Instagram',
//       href: '#',
//       icon: defineComponent({
//         render: () =>
//             h('svg', { fill: 'currentColor', viewBox: '0 0 24 24' }, [
//               h('path', {
//                 'fill-rule': 'evenodd',
//                 d: 'M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z',
//                 'clip-rule': 'evenodd',
//               }),
//             ]),
//       }),
//     },
//     {
//       name: 'Twitter',
//       href: '#',
//       icon: defineComponent({
//         render: () =>
//             h('svg', { fill: 'currentColor', viewBox: '0 0 24 24' }, [
//               h('path', {
//                 d: 'M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84',
//               }),
//             ]),
//       }),
//     },
//     {
//       name: 'GitHub',
//       href: '#',
//       icon: defineComponent({
//         render: () =>
//             h('svg', { fill: 'currentColor', viewBox: '0 0 24 24' }, [
//               h('path', {
//                 'fill-rule': 'evenodd',
//                 d: 'M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z',
//                 'clip-rule': 'evenodd',
//               }),
//             ]),
//       }),
//     },
//     {
//       name: 'Dribbble',
//       href: '#',
//       icon: defineComponent({
//         render: () =>
//             h('svg', { fill: 'currentColor', viewBox: '0 0 24 24' }, [
//               h('path', {
//                 'fill-rule': 'evenodd',
//                 d: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z',
//                 'clip-rule': 'evenodd',
//               }),
//             ]),
//       }),
//     },
//   ],
// }
export default {
  components: {
    Dialog,
    DialogOverlay,
    Popover,
    PopoverButton,
    PopoverGroup,
    PopoverPanel,
    Tab,
    TabGroup,
    TabList,
    TabPanel,
    TabPanels,
    TransitionChild,
    TransitionRoot,
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
    Menu,
    MenuButton,
    MenuItem,
    MenuItems,
    MenuIcon,
    SearchIcon,
    ShoppingCartIcon,
    UserCircleIcon,
    UserIcon,
    XIcon,
    ChevronDownIcon,
    QuestionMarkCircleIcon,
    ShoppingBagIcon,
    MailIcon,
    PhoneIcon,
  },

  beforeMount() {

    if (localStorage.getItem('bigStore.jwt') != null) {
      this.user = JSON.parse(localStorage.getItem('bigStore.user'))
      let user = this.user
      this.axios.defaults.headers.common['Content-Type'] = 'application/json'
      this.axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('bigStore.jwt')
      this.$store.commit('setUser', user)
    }

  },

  data(){

    return{
      scrollPosition: null,
      wa:false,
      preference: [
        {
          title: 'Performance',
          description:
              'Bla bla serviços que podemos oferecer erviços que podemos oferecer erviços que podemos oferecer erviços que podemos oferecer serviços que podemos oferecer.',
          items: [{ label: 'Active', value: 'performance', isRequired: true }],
        },
        {
          title: 'Analytics',
          description:
              'Bla bla serviços que podemos oferecer erviços que podemos oferecer erviços que podemos oferecer erviços que podemos oferecer serviços que podemos oferecer.',
          items: [
            { label: 'GoogleAnalytics', value: 'ga' },
            { label: 'Sentry', value: 'sentry', isEnable: true },
            { label: 'Mapbox', value: 'mapbox' },
            { label: 'New Relic', value: 'newRelic', isEnable: true },
            { label: 'Dog Food', value: 'dogfood' },
          ],
        },
      ]
    }
  },

  mounted() {
    window.addEventListener('scroll', this.updateScroll);
  },

  methods:{
    logout(){
      localStorage.removeItem('bigStore.jwt')
      localStorage.removeItem('bigStore.user')
      this.user = null
      this.setUser = ''
      this.$store.commit('setUser', null)
      this.$store.commit('setRoute', this.$route.fullPath = null)
      this.$router.push({path:'/'})
    },


    updateScroll() {
       this.scrollPosition = window.scrollY
    },
    waz(){
      this.wa = true
    },
  },


  setup() {
    const mobileMenuOpen = ref(false)
    return {
      languages,
      navigation,
      // footernavigation,
      navigationfooter,
      mobileMenuOpen,
    }
  },

  computed: {

    setUser:{
      get(){
        return this.$store.state.setUser
      }
    },
  },

}
</script>

<style scoped>
   /* .change_color {
       background-color: #fffbf4;
       color: #101010;
   }
   .change_color_text {
       color: #101010;
   }
   .change_border{
     border: 1px black solid;
   }
   .change_border:hover{
     background: #101010;
     color: white;
   }
   .change_background{
     background: #fffbf4;
   } */
</style>

<style>
/* BOOKING BTN */
.custom-border-btn{
  border: 1px white solid;
}
.custom-border-btn:hover{
  background: white;
  color: #101010;
}

.select_custom {
  background-image: none !important;
}

/* For IE10 */
select::-ms-expand {
  display: none;
}

.transition_navbar{
  transition: ease-in-out 0.5s ;
}
.cookie-comply{
  position: fixed !important;
  left: 0 !important;
  bottom: 0 !important;
}

.cookie-comply__back-arrow{
  display: none !important;
}

.cookie-comply__button-accept {
  background-color: black !important;
  color: var(--color-white);
  border: none;
}

a[type=button] {
  -webkit-appearance: none !important;
  -webkit-border-radius: 0 !important;
}

</style>
