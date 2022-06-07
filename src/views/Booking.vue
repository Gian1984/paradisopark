<template>
    <section aria-labelledby="collection-heading" class="h-screen max-w-xl mx-auto pt-24 px-4 sm:pt-32 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 id="collection-heading" class="mt-10 text-center text-4xl font-extrabold tracking-tight text-gray-900">{{ $t("booking.title") }}</h2>
        <!-- <p class="text-center mt-4 text-base text-gray-500">Choose your category</p> -->

        <div class="lg:max-w-3xl mx-auto mt-20 mb-20 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-x-20">
        <router-link :to="collection.href" v-for="collection in collections" :key="collection.name" class="group block">
            <div aria-hidden="true" class="aspect-w-3 aspect-h-2 overflow-hidden group-hover:opacity-75 lg:aspect-w-5 lg:aspect-h-6">
            <img :src="collection.imageSrc" :alt="collection.imageAlt" class="w-full h-full object-center object-cover" />
            </div>
            <h3 class="mt-4 text-base font-semibold text-gray-900 uppercase">{{ collection.name }}</h3>
            <p class="mt-2 text-sm text-gray-500">{{ collection.description }}</p>
            <p class="mt-2 text-sm text-right text-gray-500 font-bold">{{ collection.button }}</p>
        </router-link>
        </div>
    </section>
</template>

<script>
    // const collections = [
    //     {
    //         name: this.$t('booking.timeslot.title'),
    //         href: '/timeslot',
    //         imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-01-collection-01.jpg',
    //         imageAlt: 'Brown leather key ring with brass metal loops and rivets on wood table.',
    //         description: this.$t('booking.timeslot.description'),
    //         button: this.$t('booking.timeslot.button'),
    //     },
    //     {
    //         name: this.$t('booking.fullday.title'),
    //         href: '/fullday',
    //         imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-01-collection-02.jpg',
    //         imageAlt: 'Natural leather mouse pad on white desk next to porcelain mug and keyboard.',
    //         description: this.$t('booking.fullday.description'),
    //         button: this.$t('booking.fullday.button'),
    //     },
    //     // More Options
    // ]

export default {
  setup() {
    return {

    }
  },
  computed: {

    collections() {

      return [
        {
            name: this.$t('booking.timeslot.title'),
            href: '/timeslot',
            imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-01-collection-01.jpg',
            imageAlt: 'Brown leather key ring with brass metal loops and rivets on wood table.',
            description: this.$t('booking.timeslot.description'),
            button: this.$t('booking.timeslot.button'),
        },
        {
            name: this.$t('booking.fullday.title'),
            href: '/fullday',
            imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-01-collection-02.jpg',
            imageAlt: 'Natural leather mouse pad on white desk next to porcelain mug and keyboard.',
            description: this.$t('booking.fullday.description'),
            button: this.$t('booking.fullday.button'),
        },
      ]
    },
  }
}
</script>