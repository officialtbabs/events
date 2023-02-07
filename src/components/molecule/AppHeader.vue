<template>
  <div
    class="fixed flex justify-between items-center bg-black pl-[150px] pr-24 w-screen h-[72px] z-50"
  >
    <div class="flex items-center gap-10 h-full">
      <app-logo />
      <template v-for="(nav, navIndex) in MainNavigations">
        <router-link
          v-if="!nav.children"
          :to="nav.to"
          :key="navIndex"
          class="text-white text-sm h-full pt-6 font-bold border-green-500 hover:border-b-8"
        >
          {{ nav.title }}
        </router-link>
        <div v-else :key="navIndex" class="relative h-full">
          <button
            @click="isOpen = !isOpen"
            @blur="onBlur"
            class="text-white text-sm h-full pt-6 flex font-bold border-green-500 hover:border-b-8"
            :class="{
              'border-b-8':
                $route.name === 'Create Events' ||
                $route.name === 'Manage Events' ||
                $route.name === 'Event Details',
            }"
          >
            <span class="mr-2">{{ nav.title }}</span>
            <arrow-icon
              class="mt-[7.5px]"
              style="transition: 0.5s"
              :class="[{ 'rotate-180': isOpen }]"
            />
          </button>
          <div
            v-if="isOpen"
            class="absolute left-0 bg-black py-6 rounded-b-lg shadow-xl grid gap-3"
          >
            <router-link
              v-for="(child, childIndex) in nav.children"
              :key="childIndex"
              :to="child.to"
              class="text-white text-sm whitespace-nowrap h-[41px] px-5 font-bold border-green-500 hover:border-b-8"
              :class="{
                'border-b-8':
                  child.title === $route.name ||
                  (child.title === 'Manage Events' &&
                    $route.name === 'Event Details'),
              }"
            >
              {{ child.title }}
            </router-link>
          </div>
        </div>
      </template>
    </div>
    <div>
      <profile-card />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import AppLogo from "../atom/AppLogo.vue";
import ProfileCard from "./ProfileCard.vue";
import { MainNavigations } from "@/utilities";
import ArrowIcon from "../atom/icons/Arrow.vue";

export default Vue.extend({
  components: {
    AppLogo,
    ProfileCard,
    ArrowIcon,
  },
  data() {
    return {
      MainNavigations,
      isOpen: false,
    };
  },
  methods: {
    onBlur() {
      setTimeout(() => {
        this.isOpen = !this.isOpen;
      }, 150);
    },
  }
});
</script>
