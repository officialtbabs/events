<template>
    <div class="px-[149px] py-16">
        <div class="flex text-gray-500 text-sm font-medium space-x-2.5"><p>Events</p><img src="@/assets/images/arrow-right.svg" alt="arrow right" /><span><router-link  to="/events/my-events">My events</router-link></span><img src="@/assets/images/arrow-right.svg" alt="arrow right" /><span class="text-black">Event detail</span></div>
        <div class="grid grid-cols-2 gap-x-[122px] text-justify py-12">
            <div class="max-w-[489px]">
                <p class="text-4xl font-bold text-black">RCCG 70th convention: Golden Jubilee celebration</p>
                <p class="text-xl text-gray-500 mt-4 mb-9">The Bible is replete with virtually inexhaustible provisions for Man's comfort here on earth and in eternity. The oldest singular limitation is Man’s refusal to simply obey the WORD of GOD. 3 John 2 for instance reaffirmed God's persistent intention and plan for man: </p>
                <div>
                    <p class="text-2xl font-bold">Things to consider</p>
                    <ul class="text-xl text-gray-500 space-y-[17px] pt-[17px] pl-2">
                        <li>&#x2022; You will be in charge of covering all your trip charges</li>
                        <li>&#x2022; You can decide to book a return trip if your organizer did not cater for that</li>
                    </ul>
                </div>
            </div>
            <div class="justify-self-end">
                <EventDetailsCardComponent />
            </div>
        </div>
        <AttendeeTable />
    </div>

</template>

<script lang="ts" src="./EventDetailsComponent.ts"></script>