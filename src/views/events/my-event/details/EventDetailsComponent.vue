<template>
  <div class="px-[150px] py-16">
    <div class="flex justify-between">
      <div
        ref="table"
        class="block flex items-center text-gray-500 text-sm font-medium whitespace-nowrap space-x-2.5"
      >
        <p>Events</p>
        <img src="@/assets/images/arrow-right.svg" alt="arrow right" /><span
          ><router-link to="/events/my-events">My events</router-link></span
        ><img src="@/assets/images/arrow-right.svg" alt="arrow right" /><span
          class="text-black"
          >Event detail</span
        >
      </div>
      <div class="flex items-center gap-x-[31px]">
        <button
          class="text-white flex items-center bg-[#4848ED] py-2.5 px-4 rounded-lg"
          type="button"
        >
          <img
            class="pr-2"
            src="@/assets/images/modify.svg"
            alt="arrow right"
          />Modify event
        </button>
        <button class="" type="button">
          <img src="@/assets/images/more.svg" alt="arrow right" />
        </button>
      </div>
    </div>
    <div class="h-[194px] mt-[37px]">
      <img class="h-full w-full rounded-[10px]" :src="banner" alt="banner" />
    </div>
    <div class="grid grid-cols-2 gap-x-[20%] text-justify py-12">
      <div class="">
        <p class="text-4xl font-bold text-black">{{ title }}</p>
        <p class="text-xl text-gray-500 mt-4 mb-9">{{ description }}</p>
        <div>
          <p class="text-2xl font-bold">Things to consider</p>
          <ul class="text-xl text-gray-500 space-y-[17px] pt-[17px] pl-2">
            <li>
              &#x2022; You will be in charge of covering all your trip charges
            </li>
            <li>
              &#x2022; You can decide to book a return trip if your organizer
              did not cater for that
            </li>
          </ul>
        </div>
      </div>
      <div class="justify-self-end">
        <EventDetailsCardComponent
          :tripDate="tripDate"
          :status="status"
          :location="location"
          :attendeesEstimate="attendeesEstimate"
        />
      </div>
    </div>
    <AttendeeTable />
  </div>
</template>

<script lang="ts" src="./EventDetailsComponent.ts"></script>
