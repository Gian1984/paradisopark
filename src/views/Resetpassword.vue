<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
    <div class="max-w-md w-full space-y-8">
      <div>
<!--        <img class="mx-auto h-12 w-auto" src="https://www.belgamobility.com/img/BELGA-MOBILITY.png" alt="Workflow" />-->
        <h2 class="mt-6 text-center text-3xl font-extrabold text-gold">
          Reset Password
        </h2>
        <p class="mt-2 text-center text-sm text-bord">
          insert required data
        </p>
      </div>
      <form class="mt-8 space-y-10" autocomplete="off" @submit.prevent="resetPassword">
        <input type="hidden" name="remember" value="true" />
        <div class="rounded-md shadow-sm -space-y-px">
          <div>
            <label for="email-address" class="text-bord">Email address:</label>
            <input id="email-address" name="email" type="email" v-model="email" placeholder="user@example.com" required="" class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-gold focus:border-gold focus:z-10 sm:text-sm"  />
          </div>
          <div>
            <label for="password" class="text-bord">Password:</label>
            <input id="password" name="password" type="password" v-model="password" autocomplete="current-password" required="" placeholder="Min 8 car., 1 chiffre, 1 maj. , 1 symbole" class="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-gold focus:border-gold focus:z-10 sm:text-sm"  />
          </div>
          <div>
            <label for="password" class="text-bord">Confirm Password:</label>
            <input id="password_confirmation" name="password_confirmation" type="password" v-model="password_confirmation" autocomplete="current-password" required="" class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-gold focus:border-gold focus:z-10 sm:text-sm" placeholder="Confirm password" />
          </div>
        </div>

        <div v-if="errorsRegister">
          <div class="rounded-md bg-red-50 p-4">
            <div class="flex">
              <div class="flex-shrink-0">
                <ExclamationIcon class="h-5 w-5 text-red-400" aria-hidden="true" />
              </div>
              <div class="ml-3">
                <p class="text-sm font-medium text-red-800">
                  error
                </p>
                <p v-if="errorsRegister.password"  class="mt-2 text-red-800">- {{errorsRegister.password[0]}}</p>
                <p v-if="errorsRegister.email" class="mt-2 text-red-800">- {{errorsRegister.email[0]}}</p>
              </div>
              <div class="ml-auto pl-3">
                <div class="-mx-1.5 -my-1.5">
                  <button v-on:click="closeAlert()" type="button" class="inline-flex bg-red-50 rounded-md p-1.5 text-red-500 hover:bg-red-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-red-50 focus:ring-red-600">
                    <span class="sr-only">Dismiss</span>
                    <XIcon class="h-5 w-5" aria-hidden="true" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <button type="submit" class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-gold bg-bord-light hover:bg-bord focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gold">
                        <span class="absolute left-0 inset-y-0 flex items-center pl-3">
                          <LockClosedIcon class="h-5 w-5 text-bord group-hover:text-bord-light" aria-hidden="true" />
                        </span>
            Modify
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { LockClosedIcon, ExclamationIcon, XIcon  } from '@heroicons/vue/solid'

export default {
  components: {
    LockClosedIcon,
    ExclamationIcon,
    XIcon
  },

  data() {
    return {
      token: null,
      email: null,
      password: null,
      password_confirmation: null,
      has_error: false,
      errorsRegister:""
    }
  },

  methods: {
    resetPassword(e) {
      e.preventDefault()
      if (this.password !== this.password_confirmation || this.password.length <= 0) {
        this.password = ""
        this.password_confirmation = ""
        return alert('Passwords do not match')
      }

      let email = this.email
      let password = this.password
      let password_confirmation = this.password_confirmation
      let token = this.$route.params.token

      this.axios.post(process.env.VUE_APP_URL_API + "api/reset-password", {
        token,
        email,
        password,
        password_confirmation
      }).then(response => {
        console.log(response.data)
        this.$router.push({name: 'Login'})
      }).catch((error)=>{
        this.errorsRegister = error.response.data
        this.email= null
        this.password = null
        this.password_confirmation = null
      });
    },

    closeAlert: function(){
      this.errorsRegister="";
    }
  },

}
</script>
