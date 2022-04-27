<template>

  <main class="bg-white">
    <header class="relative flex items-center justify-start h-screen overflow-hidden">
      
      <div class=" z-30 py-16 sm:py-24 lg:max-w-7xl lg:mx-auto lg:py-32 lg:px-8 w-screen mx-auto">
        <h1 class="mt-6 text-4xl font-extrabold tracking-tight text-white md:text-5xl lg:text-6xl">{{ $t("home.title") }}</h1>
        <p class="mt-6 max-w-3xl text-xl text-white">{{ $t("home.description") }}</p>
        <div class="w-32">
          <router-link to="/booking" class="custom-border-btn mt-2 p-2 block font-light text-white text-center">{{ $t("home.button") }}</router-link>
        </div>
      </div>
      <video autoplay loop muted class="absolute z-10 w-auto min-w-full min-h-full max-h-full max-w-none">
        <source src="https://assets.mixkit.co/videos/preview/mixkit-set-of-plateaus-seen-from-the-heights-in-a-sunset-26070-large.mp4" type="video/mp4"/>
        Your browser does not support the video tag.
      </video>
    </header>

    <!-- <div class="relative h-screen pb-32 bg-gray-800 pt-40">
      <div class="absolute inset-0">
        <img class="w-full h-full object-cover" src="img/domaine_complet.webp" />
        <div class="absolute inset-0 bg-gray-900 opacity-50" aria-hidden="true" />
      </div>
      
    </div> -->

    <section class="h-screen">
    <div class="pt-8 sm:pt-8 lg:max-w-7xl lg:mx-auto lg:pt-16 lg:px-8">
      <div class="mb-8 px-4 w-2/3 mx-auto text-center sm:px-6 lg:px-0">
          <p>Bienvenue à Paradiso Park, un domaine exceptionnel entre Anvers et Bruxelles. Majestueux et discret. Avec un espace vert de 20 hectares. Le domaine est lumineux. Réalisez vos rêves et voyagez dans le temps...</p>
      </div>
      <div class="flex">
        
        <!-- CAROUSEL SERVICES -->
        <div class="w-1/2 h-1/2  pr-4">
        <h2 id="trending-heading" class="text-2xl font-semibold tracking-tight text-gray-900">Services</h2>
          <div id="carouselServicesCaptions" class="carousel slide relative" data-bs-ride="carousel">
            <div class="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
              <button type="button" data-bs-target="#carouselServicesCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#carouselServicesCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#carouselServicesCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
              <button type="button" data-bs-target="#carouselServicesCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
              <button type="button" data-bs-target="#carouselServicesCaptions" data-bs-slide-to="4" aria-label="Slide 5"></button>
              <button type="button" data-bs-target="#carouselServicesCaptions" data-bs-slide-to="5" aria-label="Slide 6"></button>
              <button type="button" data-bs-target="#carouselServicesCaptions" data-bs-slide-to="6" aria-label="Slide 7"></button>
            </div>
            <div class="carousel-inner relative w-full overflow-hidden">
              <div class="carousel-item active relative float-left w-full">
                <img src="https://picsum.photos/190" class="block w-full" alt="..." />
                <div class="carousel-caption hidden md:block absolute text-center">
                  <h5 class="text-xl">Sauna & Hammam</h5>
                  <p>Détendez-vous dans notre centre de balnéothérapie, dans notre sauna ou encore notre hamman.</p>
                </div>
              </div>
              <div class="carousel-item relative float-left w-full">
                <img src="https://picsum.photos/980" class="block w-full" alt="..."/>
                <div class="carousel-caption hidden md:block absolute text-center">
                  <h5 class="text-xl">Salle de réception</h5>
                  <p>Une capacité de places assises pour conférences de 200 personnes et pour dîner de 100 personnes, un écran TV, support projecteur et fait 300m².</p>
                </div>
              </div>
              <div class="carousel-item relative float-left w-full">
                <img src="https://picsum.photos/670" class="block w-full" alt="..."/>
                <div class="carousel-caption hidden md:block absolute text-center">
                  <h5 class="text-xl">Jardin</h5>
                  <p>Le domaine contient un grand espace vert. Idéal pour vos fêtes en extérieur ou rassembler vos convives.</p>
                </div>
              </div>
              <div class="carousel-item relative float-left w-full">
                <img src="https://picsum.photos/320" class="block w-full" alt="..."/>
                <div class="carousel-caption hidden md:block absolute text-center">
                  <h5 class="text-xl">Interieur</h5>
                  <p>L\'endroit rêvé pour votre évènement. Que ce soit pour un anniversaire, pour un séminaire ou un gala.</p>
                </div>
              </div>
              <div class="carousel-item relative float-left w-full">
                <img src="https://picsum.photos/230" class="block w-full" alt="..."/>
                <div class="carousel-caption hidden md:block absolute text-center">
                  <h5 class="text-xl">Fifth slide label</h5>
                  <p>Some representative placeholder content for the third slide.</p>
                </div>
              </div>
              <div class="carousel-item relative float-left w-full">
                <img src="https://picsum.photos/120" class="block w-full" alt="..."/>
                <div class="carousel-caption hidden md:block absolute text-center">
                  <h5 class="text-xl">Sixth slide label</h5>
                  <p>Some representative placeholder content for the third slide.</p>
                </div>
              </div>
              <div class="carousel-item relative float-left w-full">
                <img src="https://picsum.photos/20" class="block w-full" alt="..."/>
                <div class="carousel-caption hidden md:block absolute text-center">
                  <h5 class="text-xl">Seventh slide label</h5>
                  <p>Some representative placeholder content for the third slide.</p>
                </div>
              </div>
            </div>
            <button class="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0" type="button" data-bs-target="#carouselServicesCaptions" data-bs-slide="prev">
              <span class="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0" type="button" data-bs-target="#carouselServicesCaptions" data-bs-slide="next">
              <span class="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
          </div>

          <!-- CHAMRES CAROUSEL -->
          <div class="w-1/2 pl-4">
          <h2 id="trending-heading" class="text-2xl font-semibold tracking-tight text-gray-900">Chambres</h2>
          <div id="carouselRoomCaptions" class="carousel slide relative" data-bs-ride="carousel">
            <div class="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
              <button type="button" data-bs-target="#carouselRoomCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#carouselRoomCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#carouselRoomCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
              <button type="button" data-bs-target="#carouselRoomCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
            </div>
            <div class="carousel-inner relative w-full overflow-hidden">
              <div class="carousel-item active relative float-left w-full">
                <img src="img/room1.jpg" class="block w-full" alt="..." />
                <div class="carousel-caption hidden md:block absolute text-center">
                  <h5 class="text-xl">Sauna & Hammam</h5>
                  <p>Détendez-vous dans notre centre de balnéothérapie, dans notre sauna ou encore notre hamman.</p>
                </div>
              </div>
              <div class="carousel-item relative float-left w-full">
                <img src="img/room2.jpg" class="block w-full" alt="..."/>
                <div class="carousel-caption hidden md:block absolute text-center">
                  <h5 class="text-xl">Salle de réception</h5>
                  <p>Une capacité de places assises pour conférences de 200 personnes et pour dîner de 100 personnes, un écran TV, support projecteur et fait 300m².</p>
                </div>
              </div>
              <div class="carousel-item relative float-left w-full">
                <img src="img/room3.jpg" class="block w-full" alt="..."/>
                <div class="carousel-caption hidden md:block absolute text-center">
                  <h5 class="text-xl">Jardin</h5>
                  <p>Le domaine contient un grand espace vert. Idéal pour vos fêtes en extérieur ou rassembler vos convives.</p>
                </div>
              </div>
              <div class="carousel-item relative float-left w-full">
                <img src="img/room4.jpg" class="block w-full" alt="..."/>
                <div class="carousel-caption hidden md:block absolute text-center">
                  <h5 class="text-xl">Interieur</h5>
                  <p>L\'endroit rêvé pour votre évènement. Que ce soit pour un anniversaire, pour un séminaire ou un gala.</p>
                </div>
              </div>
            </div>
            <button class="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0" type="button" data-bs-target="#carouselRoomCaptions" data-bs-slide="prev">
              <span class="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0" type="button" data-bs-target="#carouselRoomCaptions" data-bs-slide="next">
              <span class="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
          </div>
          </div>
    </div>
    </section>



    <!-- CHAMRES -->
    <!-- <section aria-labelledby="trending-heading" class="bg-white">
      <div class="pt-8 sm:py-16 lg:max-w-7xl lg:mx-auto lg:py-24 lg:px-8">
        <div class="px-4 flex items-center justify-between sm:px-6 lg:px-0">
          <h2 id="trending-heading" class="text-2xl font-semibold tracking-tight text-gray-900">Chambres</h2>
          <a href="/rooms" class="hidden sm:block text-sm font-light text-black hover:text-beige">Voir plus<span aria-hidden="true"> &rarr;</span></a>
        </div>

        <div class="mt-8 relative">
          <div class="relative w-full overflow-x-auto">
            <ul role="list" class="mx-4 inline-flex space-x-8 sm:mx-6 lg:mx-0 lg:space-x-0 lg:grid lg:grid-cols-4 lg:gap-x-8">
              <li v-for="product in trendingProducts" :key="product.id" class="w-64 inline-flex flex-col text-center lg:w-auto">
                <div class="group relative">
                  <div class="w-full bg-gray-200 overflow-hidden aspect-w-1 aspect-h-1">
                    <img :src="product.imageSrc" :alt="product.imageAlt" class="w-full h-full object-center object-cover group-hover:opacity-75" />
                  </div>
                  <div class="mt-6">
                    <h3 class="mt-1 font-semibold text-gray-900">
                      <a :href="product.href">
                        <span class="absolute inset-0" />
                        {{ product.name }}
                      </a>
                    </h3>
                    <p class="mt-1 text-gray-900">
                      {{ product.description }}
                    </p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div class="mt-12 px-4 sm:hidden">
          <a href="#" class="text-sm font-semibold text-indigo-600 hover:text-indigo-500">See everything<span aria-hidden="true"> &rarr;</span></a>
        </div>
      </div>
    </section> -->

    <section>
      <div class="relative bg-white pt-16 pb-32 overflow-hidden">
        <div class="relative">
          <div class="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
            <div class="px-4 max-w-xl mx-auto sm:px-6 lg:py-16 lg:max-w-none lg:mx-0 lg:px-0">
              <div>
                <div class="mt-6">
                  <h2 class="text-3xl font-extrabold tracking-tight text-gray-900">Notre philosophie</h2>
                  <p class="mt-4 text-lg text-gray-500">Bienvenue à Paradiso Park, un domaine exceptionnel entre Anvers et Bruxelles. Majestueux et discret. Avec un espace vert de 20 hectares. Le domaine est lumineux. Réalisez vos rêves et voyagez dans le temps...</p>
                  <div class="mt-6">
                    <a href="#" class="inline-flex px-4 py-2 border border-transparent text-base font-medium shadow-sm text-black bg-beige hover:bg-indigo-700"> Plus d'info </a>
                  </div>
                </div>
              </div>
              <div class="mt-8 border-t border-gray-200 pt-6">
                <blockquote>
                  <div>
                    <p class="text-base text-gray-500">&ldquo;En pleine nature, laissez le domaine vous ressourcer. Grâce à son élégance et sa décoration d'intérieur majestueuse, vous vous retrouverez téléporté ailleurs.&rdquo;</p>
                  </div>
                  <footer class="mt-3">
                    <div class="flex items-center space-x-3">
                      <div class="flex-shrink-0">
                        <img class="h-6 w-6 rounded-full" src="img/IMG_0332.webp" alt="jardin relax" />
                      </div>
                      <div class="text-base font-medium text-gray-700">Marcia Hill, Digital Marketing Manager</div>
                    </div>
                  </footer>
                </blockquote>
              </div>
            </div>
            <div class="mt-12 sm:mt-16 lg:mt-0">
              <div class="pl-4 sm:pl-6 lg:px-0 lg:m-0 lg:relative lg:h-full">
                <img class="w-1/2 object-cover shadow-xl lg:absolute lg:left-0 lg:h-full lg:w-auto" src="img/domaine_complet.webp" alt="Inbox user interface" />
              </div>
            </div>
          </div>
        </div>

        <!-- <div class="mt-24">
          <div class="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
            <div class="px-4 max-w-xl mx-auto sm:px-6 lg:py-32 lg:max-w-none lg:mx-0 lg:px-0 lg:col-start-2">
              <div>
                <div>
              <span class="h-12 w-12 rounded-md flex items-center justify-center bg-indigo-600">
                <SparklesIcon class="h-6 w-6 text-white" aria-hidden="true" />
              </span>
                </div>
                <div class="mt-6">
                  <h2 class="text-3xl font-extrabold tracking-tight text-gray-900">La salle de réception</h2>
                  <p class="mt-4 text-lg text-gray-500">
                    La salle de réception a une capacité de places assises pour conférences de 200 personnes et pour dîner de 100 personnes, un écran TV, support projecteur et fait 300m².Celle-ci s'adapte en fonction de vos besoins. Celle-ci possède un coin cuisine sur le côté pour le coin traiteur. Le bar est aussi à votre disposition ainsi que le reste du domaine.
                  </p>
                  <div class="mt-6">
                    <a href="#" class="inline-flex px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700"> Demander un devis </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="mt-12 sm:mt-16 lg:mt-0 lg:col-start-1">
              <div class="pr-4 -ml-48 sm:pr-6 md:-ml-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
                <img class="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:right-0 lg:h-full lg:w-auto lg:max-w-none" src="img/receptionsoir.jpeg" alt="Customer profile user interface" />
              </div>
            </div>
          </div>
        </div> -->
      </div>
    </section>

    <!-- Collections -->
    <!-- <section aria-labelledby="collections-heading" class="bg-gray-100">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="max-w-2xl mx-auto py-16 sm:py-24 lg:py-32 lg:max-w-none">
          <h2 id="collections-heading" class="text-2xl font-extrabold text-gray-900">Collections</h2>

          <div class="mt-6 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-6">
            <div v-for="collection in collections" :key="collection.name" class="group relative">
              <div class="relative w-full h-80 bg-white rounded-lg overflow-hidden group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
                <img :src="collection.imageSrc" :alt="collection.imageAlt" class="w-full h-full object-center object-cover" />
              </div>
              <h3 class="mt-6 text-sm text-gray-500">
                <a :href="collection.href">
                  <span class="absolute inset-0" />
                  {{ collection.name }}
                </a>
              </h3>
              <p class="text-base font-semibold text-gray-900">{{ collection.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section> -->

    <!-- Sale and testimonials -->
    <div class="relative overflow-hidden">
      <!-- Decorative background image and gradient -->
      <div aria-hidden="true" class="absolute inset-0">
        <div class="absolute inset-0 max-w-7xl mx-auto overflow-hidden xl:px-8">
          <img src="https://tailwindui.com/img/ecommerce-images/home-page-02-sale-full-width.jpg" alt="" class="w-full h-full object-center object-cover" />
        </div>
        <div class="absolute inset-0 bg-white bg-opacity-75" />
        <div class="absolute inset-0 bg-gradient-to-t from-white via-white" />
      </div>

      <!-- Sale -->
      <!-- <section aria-labelledby="sale-heading" class="relative max-w-7xl mx-auto pt-32 px-4 flex flex-col items-center text-center sm:px-6 lg:px-8">
        <div class="max-w-2xl mx-auto lg:max-w-none">
          <h2 id="sale-heading" class="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">Get 25% off during our one-time sale</h2>
          <p class="mt-4 max-w-xl mx-auto text-xl text-gray-600">Most of our products are limited releases that won't come back. Get your favorite items while they're in stock.</p>
          <a href="#" class="mt-6 inline-block w-full bg-gray-900 border border-transparent rounded-md py-3 px-8 font-medium text-white hover:bg-gray-800 sm:w-auto">Get access to our one-time sale</a>
        </div>
      </section> -->

      <!-- Testimonials -->
      <!-- <section aria-labelledby="testimonial-heading" class="relative py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:py-32 lg:px-8">
        <div class="max-w-2xl mx-auto lg:max-w-none">
          <h2 id="testimonial-heading" class="text-2xl font-extrabold tracking-tight text-gray-900">What are people saying?</h2>

          <div class="mt-16 space-y-16 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-8">
            <blockquote v-for="testimonial in testimonials" :key="testimonial.id" class="sm:flex lg:block">
              <svg width="24" height="18" viewBox="0 0 24 18" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" class="flex-shrink-0 text-gray-300">
                <path d="M0 18h8.7v-5.555c-.024-3.906 1.113-6.841 2.892-9.68L6.452 0C3.188 2.644-.026 7.86 0 12.469V18zm12.408 0h8.7v-5.555C21.083 8.539 22.22 5.604 24 2.765L18.859 0c-3.263 2.644-6.476 7.86-6.451 12.469V18z" fill="currentColor" />
              </svg>
              <div class="mt-8 sm:mt-0 sm:ml-6 lg:mt-10 lg:ml-0">
                <p class="text-lg text-gray-600">
                  {{ testimonial.quote }}
                </p>
                <cite class="mt-4 block font-semibold not-italic text-gray-900">
                  {{ testimonial.attribution }}
                </cite>
              </div>
            </blockquote>
          </div>
        </div>
      </section> -->

      <!-- INSTAGRAM INTEGRATION -->

    </div>
  </main>
</template>

<script>
import { ref } from 'vue'
import 'tw-elements'

// const trendingProducts = [
//   {
//     id: 1,
//     name: 'Espace détente',
//     description: 'Détendez-vous dans notre centre de balnéothérapie, dans notre sauna ou encore notre hamman.',
//     href: '/rooms',
//     imageSrc: 'img/IMG_4244.webp',
//     imageAlt: 'Détendez-vous dans notre centre de balnéothérapie, dans notre sauna ou encore notre hamman.',
//   },
//   {
//     id: 2,
//     name: 'Salle de réception',
//     description: 'Une capacité de places assises pour conférences de 200 personnes et pour dîner de 100 personnes, un écran TV, support projecteur et fait 300m².',
//     href: '/rooms',
//     imageSrc: 'img/IMG_9937.webp',
//     imageAlt: 'L\'endroit rêvé pour votre évènement. Que ce soit pour un anniversaire, pour un séminaire ou un gala',
//   },
//   {
//     id: 3,
//     name: 'Jardin',
//     description: 'Le domaine contient un grand espace vert. Idéal pour vos fêtes en extérieur ou rassembler vos convives.',
//     href: '/rooms',
//     imageSrc: 'img/IMG_9971.webp',
//     imageAlt: 'Le domaine contient un grand espace vert. Idéal pour vos fêtes en extérieur ou rassembler vos convives.',

//   },
//   {
//     id: 4,
//     name: 'Interieur',
//     description: 'L\'endroit rêvé pour votre évènement. Que ce soit pour un anniversaire, pour un séminaire ou un gala.',
//     href: '/rooms',
//     imageSrc: 'img/IMG_9990.webp',
//     imageAlt: 'Black machined steel pen with hexagonal grip and small white logo at top.',
//   }
// ]

const collections = [
  {
    name: 'Desk and Office',
    description: 'Work from home accessories',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-02-edition-01.jpg',
    imageAlt: 'Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.',
    href: '#',
  },
  {
    name: 'Self-Improvement',
    description: 'Journals and note-taking',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-02-edition-02.jpg',
    imageAlt: 'Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.',
    href: '#',
  },
  {
    name: 'Travel',
    description: 'Daily commute essentials',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-02-edition-03.jpg',
    imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
    href: '#',
  },
]
const testimonials = [
  {
    id: 1,
    quote:
        'My order arrived super quickly. The product is even better than I hoped it would be. Very happy customer over here!',
    attribution: 'Sarah Peters, New Orleans',
  },
  {
    id: 2,
    quote:
        'I had to return a purchase that didn’t fit. The whole process was so simple that I ended up ordering two new items!',
    attribution: 'Kelly McPherson, Chicago',
  },
  {
    id: 3,
    quote:
        'Now that I’m on holiday for the summer, I’ll probably order a few more shirts. It’s just so convenient, and I know the quality will always be there.',
    attribution: 'Chris Paul, Phoenix',
  },
]

export default {
  components: {
    
  },


  setup() {
    const mobileMenuOpen = ref(false)

    return {
      // trendingProducts,
      collections,
      testimonials,
      mobileMenuOpen,
    }
  },
}
</script>
<style>
.custom-border-btn{
  border: 1px white solid;
}
.custom-border-btn:hover{
  background: white;
  color: #101010;
}

</style>