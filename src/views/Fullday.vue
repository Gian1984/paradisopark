<template>
<section class="max-w-xl mx-auto pt-24 pb-8 px-4 sm:pt-32 sm:px-6 lg:max-w-7xl lg:px-8">
  <nav aria-label="Progress" class="flex justify-center">
    <ol role="list" class="flex items-center">
      <li v-for="(step, stepIdx) in steps" :key="step.name" :class="[stepIdx !== steps.length - 1 ? 'pr-8 sm:pr-20' : '', 'relative']">
        <template v-if="step.status === 'complete'">
          <div class="absolute inset-0 flex items-center" aria-hidden="true">
            <div class="h-0.5 w-full bg-indigo-600" />
          </div>
          <router-link :to="step.href" class="relative w-8 h-8 flex items-center justify-center bg-indigo-600 rounded-full hover:bg-indigo-900">
            <CheckIcon class="w-5 h-5 text-white" aria-hidden="true" />
            <span class="sr-only">{{ step.name }}</span>
          </router-link>
        </template>
        <template v-else-if="step.status === 'current'" condition="step.status === 'current'">
          <div class="absolute inset-0 flex items-center" aria-hidden="true">
            <div class="h-0.5 w-full bg-gray-200" />
          </div>
          <router-link :to="step.href" class="relative w-8 h-8 flex items-center justify-center bg-white border-2 border-indigo-600 rounded-full" aria-current="step">
            <span class="h-2.5 w-2.5 bg-indigo-600 rounded-full" aria-hidden="true" />
            <span class="sr-only">{{ step.name }}</span>
          </router-link>
        </template>
        <template v-else>
          <div class="absolute inset-0 flex items-center" aria-hidden="true">
            <div class="h-0.5 w-full bg-gray-200" />
          </div>
          <router-link :to="step.href" class="group relative w-8 h-8 flex items-center justify-center bg-white border-2 border-gray-300 rounded-full hover:border-gray-400">
            <span class="h-2.5 w-2.5 bg-transparent rounded-full group-hover:bg-gray-300" aria-hidden="true" />
            <span class="sr-only">{{ step.name }}</span>
          </router-link>
        </template>
      </li>
    </ol>
  </nav>
  <router-link to="/booking" class="inline-flex items-center px-3 py-2 border border-transparent shadow-sm text-sm leading-4 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
    <ChevronLeftIcon class="-ml-0.5 mr-2 h-4 w-4" aria-hidden="true" />
    Back
  </router-link>

  <h1 class="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">Time slot</h1>
    <form class="mt-12 lg:grid lg:grid-cols-12 lg:gap-x-12 lg:items-start xl:gap-x-16">
      <section aria-labelledby="cart-heading" class="lg:col-span-7">
        <h2 id="cart-heading" class="sr-only">Items in your shopping cart</h2>
        <h2>Book your wellness moment here easily and quickly</h2>

      </section>

      <!-- Order summary -->
      <section aria-labelledby="summary-heading" class="mt-16 bg-gray-50 rounded-lg px-4 py-6 sm:p-6 lg:p-8 lg:mt-0 lg:col-span-5">
        <h2 id="summary-heading" class="text-lg font-medium text-gray-900">Order summary</h2>

        <dl class="mt-6 space-y-4">
          <div class="flex items-center justify-between">
            <dt class="text-sm text-gray-600">Subtotal</dt>
            <dd class="text-sm font-medium text-gray-900">$99.00</dd>
          </div>
          <div class="border-t border-gray-200 pt-4 flex items-center justify-between">
            <dt class="flex items-center text-sm text-gray-600">
              <span>Shipping estimate</span>
              <a href="#" class="ml-2 flex-shrink-0 text-gray-400 hover:text-gray-500">
                <span class="sr-only">Learn more about how shipping is calculated</span>
                <QuestionMarkCircleIcon class="h-5 w-5" aria-hidden="true" />
              </a>
            </dt>
            <dd class="text-sm font-medium text-gray-900">$5.00</dd>
          </div>
          <div class="border-t border-gray-200 pt-4 flex items-center justify-between">
            <dt class="flex text-sm text-gray-600">
              <span>Tax estimate</span>
              <a href="#" class="ml-2 flex-shrink-0 text-gray-400 hover:text-gray-500">
                <span class="sr-only">Learn more about how tax is calculated</span>
                <QuestionMarkCircleIcon class="h-5 w-5" aria-hidden="true" />
              </a>
            </dt>
            <dd class="text-sm font-medium text-gray-900">$8.32</dd>
          </div>
          <div class="border-t border-gray-200 pt-4 flex items-center justify-between">
            <dt class="text-base font-medium text-gray-900">Order total</dt>
            <dd class="text-base font-medium text-gray-900">$112.32</dd>
          </div>
        </dl>

        <div class="mt-6">
          <button type="submit" class="w-full bg-indigo-600 border border-transparent rounded-md shadow-sm py-3 px-4 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-indigo-500">Add to cart</button>
        </div>
      </section>
    </form>

  </section>
</template>

<script>
import { CheckIcon,ChevronLeftIcon } from '@heroicons/vue/solid'

const steps = [
  { name: 'Step 1', href: '/fullday', status: 'current' },
  { name: 'Step 2', href: '/additionalfullday', status: 'upcoming' },
  { name: 'Step 3', href: '#', status: 'upcoming' },
]

export default {
  components: {
    CheckIcon,
    ChevronLeftIcon,
  },
  setup() {
    return {
      steps,
    }
  },
}
</script>