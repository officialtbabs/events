<template>
  <div class="w-[428px] h-[434px] hover:drop-shadow-xl">
    <div class="mb-10 overflow-hidden rounded-lg bg-white">
      <img :src="banner" alt="image" class="w-full h-[180px]" />
      <div class="px-5 pt-5 text-center">
        <div class="flex justify-between items-start text gap-x-20">
          <h3 class="text-xl text-start font-bold w-3/4 h-14">{{ title }}</h3>
          <router-link :to="{ name: 'Event Details', params: { id: id } }"
            ><img
              class=" font-bold"
              src="@/assets/images/more.svg"
              alt="more"
          /></router-link>
        </div>
        <p class="text-gray-500 text-sm h-12 text-start leading-relaxed mt-3 truncate ">
          {{ description }}
        </p>
        <p
          class="text-gray-500 text-xs font-medium text-start leading-relaxed my-4"
        >
          Created on:
          {{
            new Date(date).toLocaleString("en-US", {
              day: "numeric",
              month: "short",
              year: "numeric",
            })
          }}
        </p>
      </div>
      <hr />
      <p
        class="text-sm px-5 pb-5 font-medium text-start leading-relaxed mt-[22px]"
        :class="{
          'text-green-500': status === 'accepted',
          'text-yellow-500': status === 'pending',
          'text-red-500': status === 'cancelled',
        }"
      >
        Request {{ status }}
      </p>
    </div>
  </div>
</template>

<script lang="ts" src="./EventCardComponent.ts"></script>
