<template>
    <div class="bg-white">
        <div class="max-w-7xl mx-auto top-20 py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
            <h2 class="py-4 text-3xl font-bold text-center text-black">Gallerie</h2>
            <div class="lg:gap-2 lg:grid lg:grid-cols-3">
                <div class="w-full" v-for="image in images" :key="image.id">
                    <img :src="image.photo" alt="image" />
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  data() {
    return {
      images: [
        {
          id: 1,
          photo:
            'https://cdn.pixabay.com/photo/2021/11/11/13/08/leopard-6786267__340.jpg',
        },
        {
          id: 2,
          photo:
            'https://cdn.pixabay.com/photo/2020/07/01/17/34/wolf-5360340__340.jpg',
        },
        {
          id: 3,
          photo:
            'https://cdn.pixabay.com/photo/2020/09/23/17/12/flowers-5596564__340.png',
        },
        {
          id: 4,
          photo:
            'https://cdn.pixabay.com/photo/2021/10/27/08/43/forest-6746433__340.jpg',
        },
        {
          id: 5,
          photo:
            'https://cdn.pixabay.com/photo/2021/11/03/09/25/squirrel-6765124__340.jpg',
        },
        {
          id: 6,
          photo:
            'https://cdn.pixabay.com/photo/2021/05/09/06/07/dog-6240043__340.jpg',
        },
        {
          id: 7,
          photo:
            'https://cdn.pixabay.com/photo/2021/11/11/13/08/leopard-6786267__340.jpg',
        },
        {
          id: 8,
          photo:
            'https://cdn.pixabay.com/photo/2020/07/01/17/34/wolf-5360340__340.jpg',
        },
        {
          id: 9,
          photo:
            'https://cdn.pixabay.com/photo/2020/09/23/17/12/flowers-5596564__340.png',
        }, {
          id: 10,
          photo:
            'https://cdn.pixabay.com/photo/2020/09/23/17/12/flowers-5596564__340.png',
        },
      ],
    };
  },
};
</script>