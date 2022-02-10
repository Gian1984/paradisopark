<template>
  <header>
    <div class="relative h-screen pb-32 bg-gray-800 pt-40">
      <div class="absolute inset-0">
        <img class="w-full h-full object-cover" src="img/salonday.jpeg" alt="congress-area" />
        <div class="absolute inset-0 bg-gray-900 opacity-50" aria-hidden="true" />
      </div>
      <div class="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
        <h1 class="mt-6 text-4xl font-extrabold tracking-tight text-white md:text-5xl lg:text-6xl">Web Development Company</h1>
        <p class="mt-6 max-w-3xl text-xl text-gray-300">Take the software path to your digital future.</p>
      </div>
    </div>
</header>

  <main>
    <section aria-labelledby="details-heading" class="max-w-7xl mx-auto pt-24 px-4 sm:pt-32 sm:px-6 lg:px-8">
        <div class="flex flex-col items-center text-center">
          <h2 id="details-heading" class="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">Tout types d'évènements</h2>
          <p class="mt-3 max-w-3xl text-lg text-gray-600">Paradiso Park, l'endroit rêvé pour votre évènement. Que ce soit pour un anniversaire, pour un séminaire ou un gala tout notre personnel se tient à votre disposition pour faire de votre évènement un souvenir inoubliable.</p>
        </div>

        <div class="mt-16 grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:gap-x-8">
          <div>
            <div class="w-full aspect-w-3 aspect-h-2 rounded-lg overflow-hidden">
              <img src="https://tailwindui.com/img/ecommerce-images/product-page-04-detail-product-shot-01.jpg" alt="Drawstring top with elastic loop closure and textured interior padding." class="w-full h-full object-center object-cover" />
            </div>
            <p class="mt-8 text-base text-gray-500">The 20L model has enough space for 370 candy bars, 6 cylinders of chips, 1,220 standard gumballs, or any combination of on-the-go treats that your heart desires. Yes, we did the math.</p>
          </div>
          <div>
            <div class="w-full aspect-w-3 aspect-h-2 rounded-lg overflow-hidden">
              <img src="https://tailwindui.com/img/ecommerce-images/product-page-04-detail-product-shot-02.jpg" alt="Front zipper pouch with included key ring." class="w-full h-full object-center object-cover" />
            </div>
            <p class="mt-8 text-base text-gray-500">Up your snack organization game with multiple compartment options. The quick-access stash pouch is ready for even the most unexpected snack attacks and sharing needs.</p>
          </div>
        </div>
    </section>


    <!-- Featured section -->
    <section aria-labelledby="social-impact-heading" class="max-w-7xl mx-auto pt-24 px-4 sm:pt-32 sm:px-6 lg:px-8">
      <div class="relative rounded-lg overflow-hidden">
        <div class="absolute inset-0">
          <img src="https://tailwindui.com/img/ecommerce-images/home-page-01-feature-section-01.jpg" alt="" class="w-full h-full object-center object-cover" />
        </div>
        <div class="relative bg-gray-900 bg-opacity-75 py-32 px-6 sm:py-40 sm:px-12 lg:px-16">
          <div class="relative max-w-3xl mx-auto flex flex-col items-center text-center">
            <h2 id="social-impact-heading" class="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              <span class="block sm:inline">Level up</span>
              <span class="block sm:inline"> your desk</span>
            </h2>
            <p class="mt-3 text-xl text-white">Make your desk beautiful and organized. Post a picture to social media and watch it get more likes than life-changing announcements. Reflect on the shallow nature of existence. At least you have a really nice desk setup.</p>
            <a href="#" class="mt-8 w-full block bg-white border border-transparent rounded-md py-3 px-8 text-base font-medium text-gray-900 hover:bg-gray-100 sm:w-auto">Shop Workspace</a>
          </div>
        </div>
      </div>
    </section>

    <!-- Collection section -->
    <section aria-labelledby="collection-heading" class="max-w-xl mx-auto pt-24 px-4 sm:pt-32 sm:px-6 lg:max-w-7xl lg:px-8">
      <h2 id="collection-heading" class="text-2xl font-extrabold tracking-tight text-gray-900">Shop by Collection</h2>
      <p class="mt-4 text-base text-gray-500">Each season, we collaborate with world-class designers to create a collection inspired by the natural world.</p>

      <div class="mt-10 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-8">
        <a v-for="collection in collections" :key="collection.name" :href="collection.href" class="group block">
          <div aria-hidden="true" class="aspect-w-3 aspect-h-2 rounded-lg overflow-hidden group-hover:opacity-75 lg:aspect-w-5 lg:aspect-h-6">
            <img :src="collection.imageSrc" :alt="collection.imageAlt" class="w-full max-h-56 object-center object-cover" />
          </div>
          <h3 class="mt-4 text-base font-semibold text-gray-900">{{ collection.name }}</h3>
          <p class="mt-2 text-sm text-gray-500">{{ collection.description }}</p>
        </a>
      </div>
    </section>

    <!-- Featured section -->
    <section aria-labelledby="comfort-heading" class="max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
      <div class="relative rounded-lg overflow-hidden">
        <div class="absolute inset-0">
          <img src="https://tailwindui.com/img/ecommerce-images/home-page-01-feature-section-02.jpg" alt="" class="w-full h-full object-center object-cover" />
        </div>
        <div class="relative bg-gray-900 bg-opacity-75 py-32 px-6 sm:py-40 sm:px-12 lg:px-16">
          <div class="relative max-w-3xl mx-auto flex flex-col items-center text-center">
            <h2 id="comfort-heading" class="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">Simple productivity</h2>
            <p class="mt-3 text-xl text-white">Endless tasks, limited hours, a single piece of paper. Not really a haiku, but we're doing our best here. No kanban boards, burndown charts, or tangled flowcharts with our Focus system. Just the undeniable urge to fill empty circles.</p>
            <a href="#" class="mt-8 w-full block bg-white border border-transparent rounded-md py-3 px-8 text-base font-medium text-gray-900 hover:bg-gray-100 sm:w-auto">Shop Focus</a>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>


<script>


const collections = [
  {
    name: 'Gala, Séminaire & Réceptions',
    imageSrc: 'img/events.webp',
    imageAlt: 'Gala, Séminaire & Réceptions',
    description: 'Keep your phone, keys, and wallet together, so you can lose everything at once.',
  },
  {
    name: 'Fête familial & Anniversaires',
    imageSrc: 'img/birthday.jpeg',
    imageAlt: 'Fête familial & Anniversaires',
    description: 'The rest of the house will still be a mess, but your desk will look great.',
  },
  {
    name: 'Conférences & Présentation de produit',
    imageSrc: 'img/conference.jpeg',
    imageAlt: 'Conférences & Présentation de produit',
    description: 'Be more productive than enterprise project managers with a single piece of paper.',
  },
]

export default {
  setup() {

    return {
      collections,
    }
  },
}
</script>
