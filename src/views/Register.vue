<template>
  <div class="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">


    <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-3xl">
      <div class="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
        <form @submit.prevent="handleSubmit" class="space-y-6" novalidate>
          <div class="space-y-6 sm:pt-10 sm:space-y-5">
            <div class="sm:mx-auto sm:w-full bg-white">
<!--              <img class="mx-auto h-12 w-auto" src="img/BELGA-MOBILITY.png" alt="Workflow" />-->
              <h2 class="mt-6 text-center text-3xl font-extrabold text-gold">register
              </h2>
            </div>
            <div class="space-y-6 sm:space-y-5">

              <div class="grid grid-cols-6 gap-6">
                <div class="col-span-6 sm:col-span-3">
                  <label for="first-name" class="block text-sm font-medium text-bord">firstname</label>
                  <input v-model="firstname" type="text" name="first-name" id="first-name" autocomplete="given-name" class="max-w-lg block w-full shadow-sm focus:ring-gold focus:border-gold sm:max-w-xs sm:text-sm border-bord rounded-md" required/>
                </div>

                <div class="col-span-6 sm:col-span-3">
                  <label for="last-name" class="block text-sm font-medium text-bord">lastname</label>
                  <input v-model="lastname" type="text" name="last-name" id="last-name" autocomplete="family-name" class="max-w-lg block w-full shadow-sm focus:ring-gold focus:border-gold sm:max-w-xs sm:text-sm border-bord rounded-md" required/>
                </div>



                <div class="col-span-6 sm:col-span-3">
                  <label for="email" class="block text-sm font-medium text-bord">email</label>
                  <input v-model="email" id="email" name="email" type="email" autocomplete="email" class="max-w-lg block w-full shadow-sm focus:ring-gold focus:border-gold sm:max-w-xs sm:text-sm border-bord rounded-md" required />
                </div>


                <div class="col-span-6 sm:col-span-3">
                  <label for="password" class="block text-sm font-medium text-bord">Password</label>
                  <input v-model="password" type="password" name="password" id="password" autocomplete="current-password" placeholder="min 8 car., 1 chiffre, 1 maj. , 1 symbole"  class="max-w-lg block w-full shadow-sm focus:ring-gold focus:border-gold sm:max-w-xs sm:text-sm border-bord rounded-md" required />
                </div>

              </div>

              <div class="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                <label for="password" class="block text-sm font-medium text-bord sm:mt-px">
                  footer
                </label>
                <div class="flex mt-1 sm:mt-0 sm:col-span-2">
                  <label><input type="checkbox" class="ios-switch green tinyswitch" checked required v-model="checked"/><div><div></div></div></label>
                  <p id="candidates-description" class="text-bord text-sm ml-2">
                    terms <a href="/Terms" class="text-gold">terms</a> terms <a href="/Privacy" class="text-gold">terms</a> terms</p>
                </div>
              </div>
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
                  <p v-if="prefixError" class="mt-2 text-red-800">- {{prefixError}}</p>
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
            <button type="submit" class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-gold bg-bord hover:bg-bord-light focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gold" required>
              submit
            </button>
          </div>
        </form>


      </div>
    </div>
  </div>
</template>

<script>

import { ExclamationIcon, XIcon } from '@heroicons/vue/solid'



export default {



  data(){
    return {
      firstname:'',
      lastname:'',
      email : "",
      password : "",
      submitted: false,
      errorsRegister:"",
      checked: false,
      alertOpen: true
    }
  },



  methods : {
    async handleSubmit(e) {
      e.preventDefault()

      let name = this.firstname+' '+this.lastname
      let email = this.email
      let password = this.password

        this.axios.post(process.env.VUE_APP_URL_API + 'api/register',
            {
              name,
              email,
              password,

            }).then(response => {
          let data = response.data
          localStorage.setItem('bigStore.user', JSON.stringify(data.user))
          localStorage.setItem('bigStore.jwt', data.token)
          if (localStorage.getItem('bigStore.jwt') != null) {
            this.$emit('loggedIn')

            let nextUrl = this.$route.params.nextUrl
            this.$router.push((nextUrl != null ? nextUrl : '/Login'))
          }
        }).catch((error) => {
          this.errorsRegister = error.response.data
          this.password = ""
          this.checked = false
        });
    },



    closeAlert: function () {
      this.errorsRegister = "";
    }
  },



  components: {
    ExclamationIcon,
    XIcon,
  },


}
</script>

<style>

input[type="checkbox"] {
  position: absolute;
  opacity: 0;
}

/* Normal Track */
input[type="checkbox"].ios-switch + div {
  vertical-align: middle;
  width: 40px;	height: 20px;
  border: 1px solid rgba(0,0,0,.4);
  border-radius: 999px;
  background-color: rgba(0, 0, 0, 0.1);
  -webkit-transition-duration: .4s;
  -webkit-transition-property: background-color, box-shadow;
  box-shadow: inset 0 0 0 0px rgba(0,0,0,0.4);
  margin: 15px 1.2em 15px 2.5em;
}

/* Checked Track (Blue) */
input[type="checkbox"].ios-switch:checked + div {
  width: 40px;
  background-position: 0 0;
  background-color: #3b89ec;
  border: 1px solid #0e62cd;
  box-shadow: inset 0 0 0 10px rgba(59,137,259,1);
}

/* Tiny Track */
input[type="checkbox"].tinyswitch.ios-switch + div {
  width: 34px;
}


/* Green Track */
input[type="checkbox"].green.ios-switch:checked + div {
  background-color: #00e359;
  border: 1px solid rgba(0, 162, 63,1);
  box-shadow: inset 0 0 0 10px rgba(0,227,89,1);
}

/* Normal Knob */
input[type="checkbox"].ios-switch + div > div {
  float: left;
  width: 18px; height: 18px;
  border-radius: inherit;
  background: #ffffff;
  -webkit-transition-timing-function: cubic-bezier(.54,1.85,.5,1);
  -webkit-transition-duration: 0.4s;
  -webkit-transition-property: transform, background-color, box-shadow;
  -moz-transition-timing-function: cubic-bezier(.54,1.85,.5,1);
  -moz-transition-duration: 0.4s;
  -moz-transition-property: transform, background-color;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.3), 0px 0px 0 1px rgba(0, 0, 0, 0.4);
  pointer-events: none;
  margin-top: 1px;
  margin-left: 1px;
}


/* Tiny Knob */
input[type="checkbox"].tinyswitch.ios-switch + div > div {
  width: 16px; height: 16px;
  margin-top: 1px;
}

/* Checked Tiny Knob (Blue Style) */
input[type="checkbox"].tinyswitch.ios-switch:checked + div > div {
  -webkit-transform: translate3d(16px, 0, 0);
  -moz-transform: translate3d(16px, 0, 0);
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.3), 0px 0px 0 1px rgba(8, 80, 172,1);
}

/* Big Knob */
input[type="checkbox"].bigswitch.ios-switch + div > div {
  width: 23px; height: 23px;
  margin-top: 1px;
}


/* Green Knob */
input[type="checkbox"].green.ios-switch:checked + div > div {
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(0, 162, 63,1);
}

</style>
