<template>
  <div class="pt-[59px] px-[155px] pb-16">
    <p
      class="text-xl text-start font-bold mb-1"
      :class="{
        'animate-loading h-7 w-[92px] bg-gray-200 rounded-md overflow-hidden':
          isLoading,
      }"
    >
      {{ isLoading ? '' : 'Your event'}}
    </p>
    <p ref="pageDesc" class="text-sm text-start text-gray-500"
    :class="{
        'animate-loading h-5 w-[258px] bg-gray-200 rounded-md overflow-hidden':
          isLoading,
      }">
      {{ isLoading ? '' : 'All events by you would be displayed here' }}
    </p>
    <div class="mt-8 flex flex-wrap gap-10"
    :class="{
        'animate-loading h-[434px] w-[428px] bg-gray-200 rounded-md overflow-hidden':
          isLoading,
      }">
      <div  v-for="(data, index) in eventList" :key="index">
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
    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.5), transparent);
    animation: loading 0.8s infinite;
}
@keyframes loading {
    100% {
        transform: translateX(100%);
    }
}
</style>
