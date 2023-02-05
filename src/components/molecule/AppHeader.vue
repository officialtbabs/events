<template>
    <div class="fixed flex justify-between items-center bg-black pl-[150px] pr-24 w-screen h-[72px]">
        <div class="flex items-center gap-10 h-full">
            <app-logo />
            <router-link to="/" class="text-white text-sm h-full pt-6 font-bold border-green-500 hover:border-b-8">Charter</router-link>
            <div class="relative h-full">
              <button @click="isOpen = !isOpen" class="text-white text-sm h-full pt-6 flex font-bold border-green-500 hover:border-b-8" :class="{'border-b-8' : ($route.name === 'Create' || $route.name === 'MyEvents')}">
                  Event <img v-show="!isOpen" class="ml-2 mt-[7.5px]" src="@/assets/images/arrow-down.svg" alt="arrow-down" /> <img v-show="isOpen"  class="ml-2 mt-[7.5px]" src="@/assets/images/arrow-up.svg" alt="arrow-down" />
              </button>
              <div v-if="isOpen" class="absolute left-0 bg-black py-6 rounded-b-lg shadow-xl grid gap-3">
                  <router-link @click.native="isOpen = !isOpen" to="/events/create" class="text-white text-sm whitespace-nowrap h-[41px] px-5 font-bold border-green-500 hover:border-b-8" :class="{'border-b-8': ($route.name === 'Create')}">Create event</router-link>
                  <router-link @click.native="isOpen = !isOpen" to="/events/my-events" class="text-white text-sm whitespace-nowrap h-[41px] px-5 font-bold border-green-500 hover:border-b-8" :class="{'border-b-8': ($route.name === 'MyEvents')}">Manage event</router-link>
              </div>
            </div>
            <router-link to="/" class="text-white text-sm h-full pt-6 font-bold border-green-500 hover:border-b-8">Home</router-link>
            <router-link to="/" class="text-white text-sm h-full pt-6 font-bold border-green-500 hover:border-b-8">My bookings</router-link>
            <router-link to="/" class="text-white text-sm h-full pt-6 font-bold border-green-500 hover:border-b-8">My wallet</router-link>
        </div>
        <div>
          <profile-card />
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import AppLogo from '../atom/AppLogo.vue';
import ProfileCard from './ProfileCard.vue'
import { MainNavigations } from '@/utilities'



export default Vue.extend({
  components: {
    AppLogo,
    ProfileCard
  },
  data: () => ({
    MainNavigations,
    isOpen: false,
  })
})
</script>
