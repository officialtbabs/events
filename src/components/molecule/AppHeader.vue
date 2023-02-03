<template>
  <!-- <div class="bg-black pl-[150px] pr-24 h-[72px]"> -->
    <div class="fixed flex justify-between items-center bg-black pl-[150px] pr-24 w-screen h-[72px]">
        <div class="flex items-center gap-10 h-full">
            <app-logo />
            <router-link to="/" class="text-white text-sm h-full pt-6 font-bold border-green-500 hover:border-b-8">Charter</router-link>
                    
            <div class="relative h-full">
              <button @click="isOpen = !isOpen" class="text-white text-sm h-full pt-6 flex font-bold border-green-500 hover:border-b-8">
                  Event
              </button>
              <div v-if="isOpen" class="absolute left-0 bg-black py-6 rounded-b-lg shadow-xl grid gap-3">
                  <router-link to="/events/create" class="text-white text-sm whitespace-nowrap h-[41px] px-5 font-bold border-green-500 hover:border-b-8">Create event</router-link>
                  <router-link to="/events/my-events" class="text-white text-sm whitespace-nowrap h-[41px] px-5 font-bold border-green-500 hover:border-b-8">Manage event</router-link>
              </div>
            </div>
            <router-link to="/" class="text-white text-sm h-full pt-6 font-bold border-green-500 hover:border-b-8">Home</router-link>
            <router-link to="/" class="text-white text-sm h-full pt-6 font-bold border-green-500 hover:border-b-8">My bookings</router-link>
            <router-link to="/" class="text-white text-sm h-full pt-6 font-bold border-green-500 hover:border-b-8">My wallet</router-link>
        <!-- <router-link 
          v-for="(navigation, navigationIndex) in MainNavigations"
          :to="navigation.to" 
          :key="navigationIndex"
          class="text-white"
        >
          {{ navigation.title }}
        </router-link> -->
          </div>
      <div>
        <profile-card />
      </div>
    </div>
    <!-- <div class="flex h-full justify-between">
      <a class="text-white h-full py-6">
        <app-logo />
      </a>
      <a
        class="text-white text-sm h-full py-6 font-bold border-green-500 hover:border-b-8"
        >Charter</a
      >
      <div class="h-full">
        <div class="relative">
          <button
            class="flex items-center text-sm m-0 font-bold text-white h-full py-6 border-green-500 hover:border-b-8 focus:outline-none"
          >
            <span class="">Menu</span>
            <svg class="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M5.293 7.293 a1 1 0 011. 414 -1. 414 l7 7 a1 1 0 01-1. 414 1. 414 l-7 -7a1 1 0 010 -1. 414 z" clip-rule="evenodd" />
                            </svg>
          </button>
          <div
            class="absolute left-0 top-[] bg-black mt-2 py-2 w-[220px] h-[148px] rounded-lg shadow-xl"
          >
            <a
              class="block px-4 py-2 text-sm font-medium text-white hover:bg-gray-700"
              href="#"
              >Item 1</a
            >
            <a
              class="block px-4 py-2 text-sm font-medium text-white hover:bg-gray-700"
              href="#"
              >Item 2</a
            >
            <a
              class="block px-4 py-2 text-sm font-medium text-white hover:bg-gray-700"
              href="#"
              >Item 3</a
            >
          </div>
        </div>
      </div>
      <a
        class="text-white text-sm h-full py-6 font-bold border-green-500 hover:border-b-8"
        >Home</a
      >
      <a
        class="text-white text-sm h-full py-6 font-bold border-green-500 hover:border-b-8"
        >My bookings</a
      >
      <a
        class="text-white text-sm h-full py-6 font-bold border-green-500 hover:border-b-8"
        >My wallet</a
      >

      <div class="h-full ml-80 flex items-center">
        <ProfileCardComponent />
      </div>
    </div> -->
  <!-- </div> -->
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
    isOpen: false
  })
})
</script>
