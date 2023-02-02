<template>
    <div>
        <div class="bg-black pl-[150px] pr-24 h-[72px]">
            <div class="flex h-full justify-between">
                <a class="text-white h-full py-6">
                    <img class="w-32 h-6" src="../../assets/images/shuttlerslogo.svg" alt="logo">
                </a>
                <a class="text-white text-sm h-full py-6 font-bold border-green-500 hover:border-b-8">Charter</a>
                <div class="h-full">
                    <div class="relative">
                        <button class="flex items-center text-sm m-0 font-bold text-white h-full py-6 border-green-500 hover:border-b-8 focus:outline-none">
                            <span class="">Menu</span>
                            <!-- <svg class="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M5.293 7.293 a1 1 0 011. 414 -1. 414 l7 7 a1 1 0 01-1. 414 1. 414 l-7 -7a1 1 0 010 -1. 414 z" clip-rule="evenodd" />
                            </svg> -->
                        </button>
                        <div class="absolute left-0 top-[] bg-black mt-2 py-2 w-[220px] h-[148px] rounded-lg shadow-xl ">
                            <a class="block px-4 py-2 text-sm font-medium text-white hover:bg-gray-700" href="#">Item 1</a>
                            <a class="block px-4 py-2 text-sm font-medium text-white hover:bg-gray-700" href="#">Item 2</a>
                            <a class="block px-4 py-2 text-sm font-medium text-white hover:bg-gray-700" href="#">Item 3</a>
                        </div>
                    </div>
                </div>
                <a class="text-white text-sm h-full py-6 font-bold border-green-500 hover:border-b-8">Home</a>
                <a class="text-white text-sm h-full py-6 font-bold border-green-500 hover:border-b-8">My bookings</a>
                <a class="text-white text-sm h-full py-6 font-bold border-green-500 hover:border-b-8">My wallet</a>
            
                <div class="h-full ml-80 flex items-center">
                    <ProfileCardComponent />
                </div>
            </div>
        </div>
        <div class="p-[72px] bg-[#F5F5F5]">
            <CreateEventFormComponent />
        </div>
    </div>
</template>

<script lang="ts" src="./UserView.ts"></script>