<template>

  <div class="bg-white">
    <div class="max-w-2xl mx-auto py-10 px-4 sm:px-6 lg:max-w-7xl lg:px-8 lg:py-20">
      <div class="max-w-3xl mx-auto text-center">
        <h2 class="text-3xl font-extrabold tracking-tight text-gold sm:text-4xl uppercase">
          {{ $t("events.title") }}
        </h2>
        <p class="mt-4 text-gray-500">
        </p>
      </div>

      <div class="mt-5 lg:mt-20 space-y-16">
        <div v-for="(person, featureIdx) in events" :key="person.name" class="flex flex-col-reverse lg:grid lg:grid-cols-12 lg:gap-x-2 py-4 lg:items-center">
          <div :class="[featureIdx % 2 === 0 ? 'lg:col-start-1' : 'lg:col-start-6 xl:col-start-5', 'mt-6 lg:mt-0 lg:row-start-1 lg:col-span-8 xl:col-span-7']">
            <h3 :class="[featureIdx % 2 === 0 ? 'text-center lg:text-left' : 'text-center lg:text-right']" class="text-xl font-medium uppercase" style="font-weight: 800;">{{ person.name }}</h3>
            <p :class="[featureIdx % 2 === 0 ? 'text-center lg:text-left' : 'text-center lg:text-right']" class="mt-2 text-base">{{ person.bio }}</p>
          </div>
          <div :class="[featureIdx % 2 === 0 ? 'lg:col-start-10 xl:col-start-9' : 'lg:col-start-1', 'flex-auto lg:row-start-1 lg:col-span-3 xl:col-span-3']">
            <div class="bg-gray-100 overflow-hidden custom-shadow">
              <img :src="person.imageUrl" :alt="person.alt" class="object-center object-cover h-96 w-full" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>

export default {
  data() {
    return {
    }
  },

  components: {
   
  },

  setup() {
    return {
    }
  },

  mounted() {

  },


  computed: {

    events() {

      return [
        {
          name: this.$t('events.wedding.title'),
          imageUrl: 'img/candles.jpg',
          bio: this.$t('events.wedding.description'),
          alt: this.$t('events.wedding.alt'),
        },
        {
          name: this.$t('events.seminar.title'),
          imageUrl: 'img/IMG_0332.webp',
          bio: this.$t('events.seminar.description'),
          alt: this.$t('events.seminar.alt'),
        },
      ]
    },
  }
}
</script>
