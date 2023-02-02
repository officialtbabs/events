<template>
    <div class="">
        <div class="flex justify-between bg-white rounded-t-lg px-6 py-5 ">
            <div class="flex items-center space-x-[25px]">
                <p class="font-medium text-lg">Attendee list</p>
                <p class="bg-purple-700 text-white text-xs py-0.5 px-2 font-meduim rounded-full">400</p>
            </div>

            <button class="flex items-center space-x-1.5">
                <img src="@/assets/images/download.svg" alt="download">
                <p class="ext-black text-sm font-bold">Export list</p>
            </button>
        </div>
        <table class="w-full text-left border-collapse">
            <thead>
                <tr class="bg-gray-50 text-white text-xs font-medium">
                    <th class="px-6 py-[13px] text-gray-500">ATTENDEE NAME</th>
                    <th class="px-4 py-[13px] text-gray-500">EMAIL ADDRESS</th>
                    <th class="px-4 py-[13px] text-gray-500">PHONE NUMBER</th>
                    <th class="pl-4 pr-6 py-[13px] text-gray-500">NEAREST BUS STOP</th>
                </tr>
            </thead>
            <tbody class="rounded-b-lg">
                <tr class="border-y" v-for="(item, index) in attendeeTableData" :key="index"
                    :class="index % 2 === 0 ? 'bg-white' : 'bg-gray-50'">
                    <td class="px-6 py-[26px]">{{ item.attendeeName }}</td>
                    <td class="px-4 py-[26px]">{{ item.email }}</td>
                    <td class="px-4 py-[26px]">{{ item.phone }}</td>
                    <td class="pl-4 pr-6 py-[26px]">{{ item.nearestStop }}</td>
                </tr>
            </tbody>
        </table>
        <div class="flex items-center justify-between px-6 py-4 rounded-b-lg bg-white text-sm">
            <button @click="prevPage"
                    :disabled="currentPage === 1"
                    class="bg-white text-black px-3.5 py-2 rounded-lg flex items-center space-x-2 border border-gray-300 hover:border-gray-900">
                    <img src="@/assets/images/arrow-left.svg" alt="prev" />
                    <p>Prev</p>
                </button>
            <p class="px-4 py-2">Page {{ currentPage }} of {{ totalPages }}</p>
            <button @click="nextPage"
                    :disabled="currentPage === totalPages"
                    class="bg-white text-black px-3.5 py-2 rounded-lg flex items-center space-x-2 border border-gray-300 hover:border-gray-900">
                    <p>Next</p>
                    <img src="@/assets/images/arrow-right.svg" alt="next" />
                </button>
        </div>
    </div>
</template>

<script lang="ts" src="./AttendeeTable.ts"></script>