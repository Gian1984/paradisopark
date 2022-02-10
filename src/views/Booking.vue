
<template>
    <section aria-labelledby="collection-heading" class="max-w-xl mx-auto pt-24 px-4 sm:pt-32 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 id="collection-heading" class="mt-10 text-center text-4xl font-extrabold tracking-tight text-gray-900">Make your choice</h2>
        <!-- <p class="text-center mt-4 text-base text-gray-500">Choose your category</p> -->

        <div class="lg:max-w-3xl mx-auto mt-20 mb-20 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-x-20">
        <a v-for="collection in collections" :key="collection.name" :href="collection.href" class="group block">
            <div aria-hidden="true" class="aspect-w-3 aspect-h-2 rounded-lg overflow-hidden group-hover:opacity-75 lg:aspect-w-5 lg:aspect-h-6">
            <img :src="collection.imageSrc" :alt="collection.imageAlt" class="w-full h-full object-center object-cover" />
            </div>
            <h3 class="mt-4 text-base font-semibold text-gray-900 uppercase">{{ collection.name }}</h3>
            <p class="mt-2 text-sm text-gray-500">{{ collection.description }}</p>
            <p class="mt-2 text-sm text-right text-gray-500">{{ collection.button }}</p>
        </a>
        </div>
    </section>
</template>

<script>
    const collections = [
        {
            name: 'Time slot',
            href: '/timeslot',
            imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-01-collection-01.jpg',
            imageAlt: 'Brown leather key ring with brass metal loops and rivets on wood table.',
            description: 'Need a break during the week, book a time slot and privatize Paradiso Park.',
            button: 'Book now',
        },
        {
            name: 'Full day',
            href: '/fullday',
            imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-01-collection-02.jpg',
            imageAlt: 'Natural leather mouse pad on white desk next to porcelain mug and keyboard.',
            description: 'Enjoy a unique moment with family or friends at Paradiso Park.',
            button: 'Book now',
        },
        // More Options
    ]

export default {
  setup() {
    return {
      collections,
    }
  },
}
</script>