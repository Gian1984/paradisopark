<!--<template>-->
<!--  <div class="relative pb-32 bg-gray-800 pt-40">-->
<!--    <div class="absolute inset-0">-->
<!--      <img class="w-full h-full object-cover" src="img/domaine_complet.webp" />-->
<!--      <div class="absolute inset-0 bg-gray-900 opacity-50" aria-hidden="true" />-->
<!--    </div>-->
<!--    <div class="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">-->
<!--      <h1 class="mt-6 text-4xl font-extrabold tracking-tight text-white md:text-5xl lg:text-6xl">Web Development Company</h1>-->
<!--      <p class="mt-6 max-w-3xl text-xl text-gray-300">Take the software path to your digital future.</p>-->
<!--    </div>-->
<!--  </div>-->
<!--</template>-->

<template>
  <div class="bg-white">
    <!-- Header -->
    <div class="relative pb-32 bg-gray-800">
      <div class="absolute inset-0">
        <img class="w-full h-full object-cover" src="img/swim_night.webp" alt="swimming_at_night" />
      </div>
      <div class="relative max-w-7xl mx-auto py-32 px-4 sm:py-48 sm:px-6 lg:px-8 py-4">
        <h1 class="text-4xl font-extrabold tracking-tight text-white md:text-5xl lg:text-6xl">Paradiso Park</h1>
        <p class="mt-6 max-w-3xl text-xl text-gray-300">Recouvrez la sérénité totale dans le domaine de Paradiso Park</p>
      </div>
    </div>

    <!-- Overlapping cards -->
    <section class="-mt-32 max-w-7xl mx-auto relative z-10 pb-32 px-4 sm:px-6 lg:px-8" aria-labelledby="contact-heading">
      <h2 class="sr-only" id="contact-heading">Contact us</h2>
      <div class="grid grid-cols-1 ">
        <div v-for="link in supportLinks" :key="link.name" class="flex flex-col bg-white rounded-2xl shadow-xl">
          <div class="flex-1 relative pt-16 px-6 pb-8 md:px-8">
            <h1 class="text-5xl font-medium text-center text-gray-900">{{ link.name }}</h1>
            <p class="mt-4 text-base text-gray-500">{{ link.description }}</p>
          </div>
          <div class="p-6 bg-gray-50 rounded-bl-2xl rounded-br-2xl md:px-8">
            <a :href="link.href" class="text-base font-medium text-indigo-700 hover:text-indigo-600">Contact us<span aria-hidden="true"> &rarr;</span></a>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { PhoneIcon, } from '@heroicons/vue/outline'

const supportLinks = [
  {
    name: 'Qui sommes nous ?',
    href: '#',
    description:
        'Varius facilisi mauris sed sit. Non sed et duis dui leo, vulputate id malesuada non. Cras aliquet purus dui laoreet diam sed lacus, fames.',
    icon: PhoneIcon,
  },
]

export default {
  setup() {
    return {
      supportLinks,
    }
  },
}
</script>
