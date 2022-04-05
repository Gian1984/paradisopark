<template>
  <main class="min-h-screen  bg-top sm:bg-top" style="background-image: url('https://images.unsplash.com/photo-1545972154-9bb223aac798?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3050&q=80&exp=8&con=-15&sat=-75');">
    <div class="max-w-7xl mx-auto px-4 py-16 text-center sm:px-6 sm:py-24 lg:px-8 lg:py-48">
<!--      <img class="mx-auto h-12 w-auto" src="https://belgamobility.com/img/BELGA-MOBILITY.png" alt="Workflow" />-->
      <p class="text-sm font-semibold text-black  uppercase tracking-wide text-bord mt-10">blabla</p>
      <h1 class="mt-2 text-4xl font-extrabold text-gold tracking-tight sm:text-5xl">blabla</h1>
      <p class="mt-2 text-lg font-medium text-bord">blabla</p>
      <div class="mt-6">
        <div class="space-x-4 ...">
          <div class="inline-block ...">
            <button @click="login" class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-gold text-opacity-75 bg-bord">
              Login
            </button>
          </div>
          <div class="inline-block ...">
            <button @click="register" class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-gold text-opacity-75 bg-bord">
              Register
            </button>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>

export default {

  methods:{

    login() {
      this.$router.push({name: 'Login'})
    },
    register() {
      this.$router.push({name: 'Register'})
    },

  },

}



</script>
