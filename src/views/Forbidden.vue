<template>
  <main class="min-h-screen  bg-top sm:bg-top">
    <div class="max-w-7xl mx-auto px-4 py-16 text-center sm:px-6 sm:py-24 lg:px-8 lg:py-48">
      <p class="text-sm font-semibold text-black text-opacity-50 uppercase tracking-wide">Désolé</p>
      <h1 class="mt-2 text-4xl font-extrabold text-white tracking-tight sm:text-5xl">mais il semble que vous n'ayez pas les autorisations suffisantes</h1>
      <p class="mt-2 text-lg font-medium text-black text-opacity-50">pour accéder à cette page !</p>
      <div class="mt-6">
        <div class="space-x-4 ...">
          <div class="inline-block ...">
            <button @click="this.$router.push({path:'/'})" class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-black text-opacity-75 bg-white bg-opacity-75 sm:bg-opacity-25 sm:hover:bg-opacity-50">
              Retour à la page principale
            </button>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
