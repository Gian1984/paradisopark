<template>
  <div class="bg-white">
    <main class="overflow-hidden">
      <!-- Header -->
      <div class="bg-warm-gray-50">
        <div class="pt-24 lg:pt-32 pb-8 lg:pb-12">
          <div class="relative z-10 max-w-7xl mx-auto pl-4 pr-8 sm:px-6 lg:px-8">
            <h1 class="text-4xl font-extrabold tracking-tight text-warm-gray-900 sm:text-5xl lg:text-6xl">Get in touch</h1>
            <p class="mt-6 text-xl text-warm-gray-500 max-w-3xl">Vel nunc non ut montes, viverra tempor. Proin lectus nibh phasellus morbi non morbi. In elementum urna ut volutpat. Sagittis et vel et fermentum amet consequat.</p>
          </div>
        </div>
      </div>

      <!-- Contact section -->
      <section class="relative bg-white" aria-labelledby="contact-heading">
        <div class="absolute w-full h-1/2 bg-warm-gray-50" aria-hidden="true" />
        <!-- Decorative dot pattern -->
        <!-- <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <svg class="absolute z-0 top-0 right-0 transform -translate-y-16 translate-x-1/2 sm:translate-x-1/4 md:-translate-y-24 lg:-translate-y-72" width="404" height="384" fill="none" viewBox="0 0 404 384" aria-hidden="true">
            <defs>
              <pattern id="64e643ad-2176-4f86-b3d7-f2c5da3b6a6d" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <rect x="0" y="0" width="4" height="4" class="text-warm-gray-200" fill="currentColor" />
              </pattern>
            </defs>
            <rect width="404" height="384" fill="url(#64e643ad-2176-4f86-b3d7-f2c5da3b6a6d)" />
          </svg>
        </div> -->
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="relative bg-white shadow-xl">
            <h2 id="contact-heading" class="sr-only">Contact us</h2>

            <div class="grid grid-cols-1 lg:grid-cols-3">
              <!-- Contact information -->
              <div class="relative overflow-hidden py-10 px-6 bg-gradient-to-b from-teal-500 to-teal-600 sm:px-10 xl:p-12">
                <!-- Decorative angle backgrounds -->
                <div class="absolute inset-0 pointer-events-none sm:hidden" aria-hidden="true">
                  <svg class="absolute inset-0 w-full h-full" width="343" height="388" viewBox="0 0 343 388" fill="none" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
                    <path d="M-99 461.107L608.107-246l707.103 707.107-707.103 707.103L-99 461.107z" fill="url(#linear1)" fill-opacity=".1" />
                    <defs>
                      <linearGradient id="linear1" x1="254.553" y1="107.554" x2="961.66" y2="814.66" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#fff" />
                        <stop offset="1" stop-color="#fff" stop-opacity="0" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
                <div class="hidden absolute top-0 right-0 bottom-0 w-1/2 pointer-events-none sm:block lg:hidden" aria-hidden="true">
                  <svg class="absolute inset-0 w-full h-full" width="359" height="339" viewBox="0 0 359 339" fill="none" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
                    <path d="M-161 382.107L546.107-325l707.103 707.107-707.103 707.103L-161 382.107z" fill="url(#linear2)" fill-opacity=".1" />
                    <defs>
                      <linearGradient id="linear2" x1="192.553" y1="28.553" x2="899.66" y2="735.66" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#fff" />
                        <stop offset="1" stop-color="#fff" stop-opacity="0" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
                <div class="hidden absolute top-0 right-0 bottom-0 w-1/2 pointer-events-none lg:block" aria-hidden="true">
                  <svg class="absolute inset-0 w-full h-full" width="160" height="678" viewBox="0 0 160 678" fill="none" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
                    <path d="M-161 679.107L546.107-28l707.103 707.107-707.103 707.103L-161 679.107z" fill="url(#linear3)" fill-opacity=".1" />
                    <defs>
                      <linearGradient id="linear3" x1="192.553" y1="325.553" x2="899.66" y2="1032.66" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#fff" />
                        <stop offset="1" stop-color="#fff" stop-opacity="0" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
                <h3 class="text-lg font-medium text-white">Contact information</h3>
                <p class="mt-6 text-base text-teal-50 max-w-3xl">Nullam risus blandit ac aliquam justo ipsum. Quam mauris volutpat massa dictumst amet. Sapien tortor lacus arcu.</p>
                <dl class="mt-8 space-y-6">
                  <dt><span class="sr-only">Phone number</span></dt>
                  <dd class="flex text-base text-teal-50">
                    <PhoneIcon class="flex-shrink-0 w-6 h-6 text-teal-200" aria-hidden="true" />
                    <span class="ml-3">+1 (555) 123-4567</span>
                  </dd>
                  <dt><span class="sr-only">Email</span></dt>
                  <dd class="flex text-base text-teal-50">
                    <MailIcon class="flex-shrink-0 w-6 h-6 text-teal-200" aria-hidden="true" />
                    <span class="ml-3">support@workcation.com</span>
                  </dd>
                  <dt><span class="sr-only">Address</span></dt>
                  <dd>
                    <div class="flex items-center text-teal-50" v-for="office in offices" :key="office.id">
                      <HomeIcon class="flex-shrink-0 w-6 h-6 text-teal-200" aria-hidden="true" />
                      <div class="text-base ml-3">
                        <h3 class="text-white">{{ office.city }}</h3>
                        <p class="text-white">
                          <span v-for="line in office.address" :key="line" class="block">{{ line }}</span>
                        </p>
                      </div>
                    </div>
                  </dd>
                </dl>
                <ul role="list" class="mt-8 flex space-x-12">
                  <li>
                    <a class="text-teal-200 hover:text-teal-100" href="#">
                      <span class="sr-only">Facebook</span>
                      <svg class="w-7 h-7" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
                        <path fill-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clip-rule="evenodd" />
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a class="text-teal-200 hover:text-teal-100" href="#">
                      <span class="sr-only">GitHub</span>
                      <svg class="w-7 h-7" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
                        <path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd" />
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a class="text-teal-200 hover:text-teal-100" href="#">
                      <span class="sr-only">Twitter</span>
                      <svg class="w-7 h-7" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                      </svg>
                    </a>
                  </li>
                </ul>
              </div>

              <!-- Contact form -->
              <div class="py-10 px-6 sm:px-10 lg:col-span-2 xl:p-12">
                <h3 class="text-lg font-medium text-warm-gray-900">Send us a message</h3>
                <form action="#" method="POST" class="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
                  <div>
                    <label for="first-name" class="block text-sm font-medium text-warm-gray-900">First name</label>
                    <div class="mt-1">
                      <input type="text" name="first-name" id="first-name" autocomplete="given-name" class="py-3 px-4 block w-full shadow-sm text-warm-gray-900 focus:ring-teal-500 focus:border-teal-500 border-warm-gray-300 rounded-md" />
                    </div>
                  </div>
                  <div>
                    <label for="last-name" class="block text-sm font-medium text-warm-gray-900">Last name</label>
                    <div class="mt-1">
                      <input type="text" name="last-name" id="last-name" autocomplete="family-name" class="py-3 px-4 block w-full shadow-sm text-warm-gray-900 focus:ring-teal-500 focus:border-teal-500 border-warm-gray-300 rounded-md" />
                    </div>
                  </div>
                  <div>
                    <label for="email" class="block text-sm font-medium text-warm-gray-900">Email</label>
                    <div class="mt-1">
                      <input id="email" name="email" type="email" autocomplete="email" class="py-3 px-4 block w-full shadow-sm text-warm-gray-900 focus:ring-teal-500 focus:border-teal-500 border-warm-gray-300 rounded-md" />
                    </div>
                  </div>
                  <div>
                    <div class="flex justify-between">
                      <label for="phone" class="block text-sm font-medium text-warm-gray-900">Phone</label>
                      <span id="phone-optional" class="text-sm text-warm-gray-500">Optional</span>
                    </div>
                    <div class="mt-1">
                      <input type="text" name="phone" id="phone" autocomplete="tel" class="py-3 px-4 block w-full shadow-sm text-warm-gray-900 focus:ring-teal-500 focus:border-teal-500 border-warm-gray-300 rounded-md" aria-describedby="phone-optional" />
                    </div>
                  </div>
                  <div class="sm:col-span-2">
                    <label for="subject" class="block text-sm font-medium text-warm-gray-900">Subject</label>
                    <div class="mt-1">
                      <input type="text" name="subject" id="subject" class="py-3 px-4 block w-full shadow-sm text-warm-gray-900 focus:ring-teal-500 focus:border-teal-500 border-warm-gray-300 rounded-md" />
                    </div>
                  </div>
                  <div class="sm:col-span-2">
                    <div class="flex justify-between">
                      <label for="message" class="block text-sm font-medium text-warm-gray-900">Message</label>
                      <span id="message-max" class="text-sm text-warm-gray-500">Max. 500 characters</span>
                    </div>
                    <div class="mt-1">
                      <textarea id="message" name="message" rows="4" class="py-3 px-4 block w-full shadow-sm text-warm-gray-900 focus:ring-teal-500 focus:border-teal-500 border border-warm-gray-300 rounded-md" aria-describedby="message-max" />
                    </div>
                  </div>
                  <div class="sm:col-span-2 sm:flex sm:justify-end">
                    <button type="submit" class="mt-2 w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-teal-500 hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 sm:w-auto">Submit</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

    </main>

    <!-- Newsletter -->
    <!--<div class="relative">
        <div class="absolute left-0 right-0 h-1/2 bg-warm-gray-50" aria-hidden="true" />
        <div class="relative max-w-md mx-auto mb-8 px-4 sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
            <div class="py-10 px-6 bg-gradient-to-l from-sky-800 to-cyan-700 sm:py-16 sm:px-12 lg:py-20 lg:px-20 lg:flex lg:items-center">
                <div class="lg:w-0 lg:flex-1">
                    <h2 class="text-3xl font-extrabold tracking-tight text-white">Sign up for our newsletter</h2>
                    <p class="mt-4 max-w-3xl text-lg text-cyan-100">Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui Lorem cupidatat commodo. Elit sunt amet fugiat.</p>
                </div>
                <div class="mt-12 sm:w-full sm:max-w-md lg:mt-0 lg:ml-8 lg:flex-1">
                    <form class="sm:flex">
                        <label for="email-address" class="sr-only">Email address</label>
                        <input id="email-address" name="email-address" type="email" autocomplete="email" required="" class="w-full border-white px-5 py-3 placeholder-warm-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-cyan-700 focus:ring-white rounded-md" placeholder="Enter your email" />
                        <button type="submit" class="mt-3 w-full flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-400 hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-cyan-700 focus:ring-green-400 sm:mt-0 sm:ml-3 sm:w-auto sm:flex-shrink-0">Notify me</button>
                    </form>
                    <p class="mt-3 text-sm text-cyan-100">We care about the protection of your data. Read our
                        {{ ' ' }}
                        <a href="/privacy" class="text-white font-medium underline"> Privacy Policy. </a>
                    </p>
                </div>
            </div>
        </div>
    </div> -->

  </div>
</template>

<script>
// import { defineComponent, h } from 'vue'
import { MailIcon, PhoneIcon, HomeIcon} from '@heroicons/vue/outline'

const offices = [
  { id: 1, city: 'Zemst', address: ['34 rue Principale', 'Zemst, BE 1980'] },
]

export default {
  components: {
    MailIcon,
    PhoneIcon,
    HomeIcon,
  },
  setup() {
    return {
      offices,
    }
  },
}
</script>