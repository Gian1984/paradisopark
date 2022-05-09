<!--https://github.com/rap2hpoutre/vue-picture-swipe?ref=morioh.com&utm_source=morioh.com-->
<template>
  <div class="bg-white">
    <div class="max-w-7xl mx-auto top-20 py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
      <h2 class="py-4 text-3xl font-bold text-center text-black flex">Gallerie</h2>
      <vue-picture-swipe :items="items" :options="{shareEl: false}"></vue-picture-swipe>
    </div>
  </div>
</template>
<script>
import VuePictureSwipe from 'vue-picture-swipe';



export default {
  data() {
    return {
      items: [
        {
          src: 'https://cdn.pixabay.com/photo/2021/11/11/13/08/leopard-6786267__340.jpg',
          thumbnail: 'https://cdn.pixabay.com/photo/2021/11/11/13/08/leopard-6786267__340.jpg',
          w: 600,
          h: 400,
          alt: 'some numbers on a grey background', // optional alt attribute for thumbnail image
          href:'https://www.paradisopark.be/'
        },
        {
          src: 'https://cdn.pixabay.com/photo/2020/07/01/17/34/wolf-5360340__340.jpg',
          thumbnail: 'https://cdn.pixabay.com/photo/2020/07/01/17/34/wolf-5360340__340.jpg',
          w: 600,
          h: 400,
          alt: 'some numbers on a grey background' // optional alt attribute for thumbnail image
        },
        {
          src: 'https://cdn.pixabay.com/photo/2020/09/23/17/12/flowers-5596564__340.png',
          thumbnail: 'https://cdn.pixabay.com/photo/2020/09/23/17/12/flowers-5596564__340.png',
          w: 600,
          h: 400,
          alt: 'some numbers on a grey background' // optional alt attribute for thumbnail image
        },
        {
          src: 'https://cdn.pixabay.com/photo/2021/10/27/08/43/forest-6746433__340.jpg',
          thumbnail: 'https://cdn.pixabay.com/photo/2021/10/27/08/43/forest-6746433__340.jpg',
          w: 600,
          h: 400,
          alt: 'some numbers on a grey background' // optional alt attribute for thumbnail image
        },
        {
          src: 'https://cdn.pixabay.com/photo/2021/11/03/09/25/squirrel-6765124__340.jpg',
          thumbnail: 'https://cdn.pixabay.com/photo/2021/11/03/09/25/squirrel-6765124__340.jpg',
          w: 600,
          h: 400,
          alt: 'some numbers on a grey background' // optional alt attribute for thumbnail image
        },
        {
          src: 'https://cdn.pixabay.com/photo/2021/05/09/06/07/dog-6240043__340.jpg',
          thumbnail: 'https://cdn.pixabay.com/photo/2021/05/09/06/07/dog-6240043__340.jpg',
          w: 600,
          h: 400,
          alt: 'some numbers on a grey background' // optional alt attribute for thumbnail image
        },
        {
          src: 'https://cdn.pixabay.com/photo/2021/11/11/13/08/leopard-6786267__340.jpg',
          thumbnail: 'https://cdn.pixabay.com/photo/2021/11/11/13/08/leopard-6786267__340.jpg',
          w: 600,
          h: 400,
          alt: 'some numbers on a grey background' // optional alt attribute for thumbnail image
        },
        {
          src: 'https://cdn.pixabay.com/photo/2020/07/01/17/34/wolf-5360340__340.jpg',
          thumbnail: 'https://cdn.pixabay.com/photo/2020/07/01/17/34/wolf-5360340__340.jpg',
          w: 600,
          h: 400,
          alt: 'some numbers on a grey background' // optional alt attribute for thumbnail image
        },
        {
          src: 'https://cdn.pixabay.com/photo/2021/11/11/13/08/leopard-6786267__340.jpg',
          thumbnail: 'https://cdn.pixabay.com/photo/2021/11/11/13/08/leopard-6786267__340.jpg',
          w: 600,
          h: 400,
          alt: 'some numbers on a grey background' // optional alt attribute for thumbnail image
        },
        {
          src: 'https://cdn.pixabay.com/photo/2020/07/01/17/34/wolf-5360340__340.jpg',
          thumbnail: 'https://cdn.pixabay.com/photo/2020/07/01/17/34/wolf-5360340__340.jpg',
          w: 600,
          h: 400,
          alt: 'some numbers on a grey background' // optional alt attribute for thumbnail image
        },
        {
          src: 'https://cdn.pixabay.com/photo/2020/09/23/17/12/flowers-5596564__340.png',
          thumbnail: 'https://cdn.pixabay.com/photo/2020/09/23/17/12/flowers-5596564__340.png',
          w: 600,
          h: 400,
          alt: 'some numbers on a grey background' // optional alt attribute for thumbnail image
        },
        {
          src: 'https://cdn.pixabay.com/photo/2021/10/27/08/43/forest-6746433__340.jpg',
          thumbnail: 'https://cdn.pixabay.com/photo/2021/10/27/08/43/forest-6746433__340.jpg',
          w: 600,
          h: 400,
          alt: 'some numbers on a grey background' // optional alt attribute for thumbnail image
        },
        {
          src: 'https://cdn.pixabay.com/photo/2021/11/03/09/25/squirrel-6765124__340.jpg',
          thumbnail: 'https://cdn.pixabay.com/photo/2021/11/03/09/25/squirrel-6765124__340.jpg',
          w: 600,
          h: 400,
          alt: 'some numbers on a grey background' // optional alt attribute for thumbnail image
        },
        {
          src: 'https://cdn.pixabay.com/photo/2021/05/09/06/07/dog-6240043__340.jpg',
          thumbnail: 'https://cdn.pixabay.com/photo/2021/05/09/06/07/dog-6240043__340.jpg',
          w: 600,
          h: 400,
          alt: 'some numbers on a grey background' // optional alt attribute for thumbnail image
        },
        {
          src: 'https://cdn.pixabay.com/photo/2021/11/11/13/08/leopard-6786267__340.jpg',
          thumbnail: 'https://cdn.pixabay.com/photo/2021/11/11/13/08/leopard-6786267__340.jpg',
          w: 600,
          h: 400,
          alt: 'some numbers on a grey background' // optional alt attribute for thumbnail image
        },
        {
          src: 'https://cdn.pixabay.com/photo/2020/07/01/17/34/wolf-5360340__340.jpg',
          thumbnail: 'https://cdn.pixabay.com/photo/2020/07/01/17/34/wolf-5360340__340.jpg',
          w: 600,
          h: 400,
          alt: 'some numbers on a grey background' // optional alt attribute for thumbnail image
        },
      ],
    };
  },

  components:{
    VuePictureSwipe
  },


};
</script>

<style>
.my-gallery{
  line-height:0 !important;
  -webkit-column-count:4 !important; /* split it into 5 columns */
  -webkit-column-gap:5px !important; /* give it a 5px gap between columns */
  -moz-column-count:4 !important;
  -moz-column-gap:5px !important;
  column-count:4 !important;
  column-gap:5px!important;
}

.gallery-thumbnail{
  padding-bottom: 5px!important;
  width: 100% !important;
  height: auto !important;
  margin-bottom:5px !important;  /* to match column gap */
}

[itemprop~="thumbnail"] {
  margin-bottom:5px !important;  /* to match column gap */
}

@media (max-width: 1200px) {
  .my-gallery {
    -moz-column-count:    4 !important;
    -webkit-column-count: 4 !important;
    column-count:         4 !important;
  }
}

@media (max-width: 1000px) {
  .my-gallery {
    -moz-column-count:    3 !important;
    -webkit-column-count: 3 !important;
    column-count:         3 !important;
  }

  @media (max-width: 800px) {
    .my-gallery {
      -moz-column-count:    2 !important;
      -webkit-column-count: 2 !important;
      column-count:         2 !important;
    }
  }

  @media (max-width: 400px) {
    .my-gallery {
      -moz-column-count:    1 !important;
      -webkit-column-count: 1 !important;
      column-count:         1 !important;
    }
  }
}
</style>
