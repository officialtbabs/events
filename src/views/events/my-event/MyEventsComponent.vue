<template>
  <div class="pt-[59px] px-[155px]">
    <p class="text-xl text-start font-bold mb-1">Your event</p>
    <p class="text-sm text-start text-gray-500">
      All events by you would be displayed here
    </p>
    <div class="mt-8 flex flex-wrap gap-10">
      <div v-for="(data, index) in eventList" :key="index">
        <EventCardComponent
          :id="index.toString()"
          :banner="data.banner"
          :title="data.title"
          :description="data.description"
          :status="data.status"
          :date="data.tripDate"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts" src="./MyEventsComponent.ts"></script>
