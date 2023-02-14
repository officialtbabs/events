<template>
  <div class="px-[150px] py-16">
    <div class="flex justify-between items-center">
      <div
        class="block flex items-center text-gray-500 text-sm font-medium whitespace-nowrap space-x-2.5"
        :class="{
          'animate-loading h-[20px] w-[237px] bg-gray-200 rounded-md overflow-hidden':
            isLoading,
        }"
      >
        <p v-show="!isLoading">Events</p>
        <img
          v-show="!isLoading"
          src="@/assets/images/arrow-right.svg"
          alt="arrow right"
        />
        <span v-show="!isLoading"
          ><router-link to="/events/my-events">My events</router-link></span
        >
        <img
          v-show="!isLoading"
          src="@/assets/images/arrow-right.svg"
          alt="arrow right"
        /><span v-show="!isLoading" class="text-black">Event detail</span>
      </div>
      <div
        class="flex items-center gap-x-[31px]"
        :class="{
          'animate-loading h-[40px] w-[181px] bg-gray-200 rounded-md overflow-hidden':
            isLoading,
        }"
      >
        <button
          v-show="!isLoading"
          class="text-white flex items-center bg-[#4848ED] py-2.5 px-4 rounded-lg"
          type="button"
        >
          <img
            class="pr-2"
            src="@/assets/images/modify.svg"
            alt="arrow right"
          />Modify event
        </button>
        <button v-show="!isLoading" type="button">
          <img src="@/assets/images/more.svg" alt="arrow right" />
        </button>
      </div>
    </div>
    <div
      class="h-[194px] mt-[37px]"
      :class="{
        'animate-loading w-full bg-gray-200 rounded-md overflow-hidden':
          isLoading,
      }"
    >
      <img
        v-show="!isLoading"
        class="h-full w-full rounded-[10px]"
        :src="banner"
        alt="banner"
      />
    </div>
    <div class="grid grid-cols-2 gap-x-[20%] text-justify py-12">
      <div class="">
        <p
          class="text-4xl font-bold text-black"
          :class="{
            'animate-loading h-[80px] w-full bg-gray-200 rounded-md overflow-hidden':
              isLoading,
          }"
        >
          {{ isLoading ? "" : title }}
        </p>
        <p
          class="text-xl text-gray-500 mt-4 mb-9"
          :class="{
            'animate-loading h-[160px] w-full bg-gray-200 rounded-md overflow-hidden':
              isLoading,
          }"
        >
          {{ isLoading ? "" : description }}
        </p>
        <div>
          <p
            class="text-2xl font-bold"
            :class="{
              'animate-loading h-[28px] w-full bg-gray-200 rounded-md overflow-hidden':
                isLoading,
            }"
          >
            {{ isLoading ? "" : "Things to consider" }}
          </p>
          <ul
            class="text-xl text-gray-500 space-y-[17px] pt-[17px] pl-2"
            :class="{
              'animate-loading h-[32px] w-full bg-gray-200 rounded-md overflow-hidden':
                isLoading,
            }"
          >
            <li v-show="!isLoading">
              &#x2022; You will be in charge of covering all your trip charges
            </li>
            <li v-show="!isLoading">
              &#x2022; You can decide to book a return trip if your organizer
              did not cater for that
            </li>
          </ul>
        </div>
      </div>
      <div
        class="justify-self-end"
        :class="{
          'animate-loading w-[524.1px] h-[501px] bg-gray-200 rounded-md overflow-hidden':
            isLoading,
        }"
      >
        <EventDetailsCardComponent
          v-show="!isLoading"
          :tripDate="tripDate"
          :status="status"
          :location="location"
          :attendeesEstimate="attendeesEstimate"
        />
      </div>
    </div>
    <div
      :class="{
        'animate-loading w-full h-[901px] bg-gray-200 rounded-md overflow-hidden':
          isLoading,
      }"
    >
      <AttendeeTable v-show="!isLoading" />
    </div>
  </div>
</template>

<script lang="ts" src="./EventDetailsComponent.ts"></script>

<style>
.animate-loading {
  position: relative;
  /* background: #cccccc; */
}
.animate-loading:after {
  content: "";
  display: block;
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  transform: translateX(-100px);
  background: linear-gradient(
    90deg,
    transparent,
    rgba(255, 255, 255, 0.5),
    transparent
  );
  animation: loading 0.8s infinite;
}
@keyframes loading {
  100% {
    transform: translateX(100%);
  }
}
</style>
