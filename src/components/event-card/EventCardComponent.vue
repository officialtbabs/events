
import router from '@/router';

<template>
    <div class="w-[428px] h-[434px]">
        <div class="mb-10 overflow-hidden rounded-lg bg-white">
            <img
                src="https://cdn.tailgrids.com/2.0/image/application/images/cards/card-01/image-01.jpg"
                alt="image"
                class="w-full h-[180px]"
            />
            <div class="px-5 pt-5 text-center">
                <div class="flex justify-between items-start space-x-[97px]">
                    <h3 class="text-xl text-start font-bold">RCCG 70th convention: Golden Jubilee celebration</h3>
                    <router-link to="/events/my-events/details"><img class="scale-150 font-bold" src="../../assets/images/more.svg" alt="more" /></router-link>
                </div>
                <!-- <a
                    href="javascript:void(0)"
                    class="text-dark hover:text-primary mb-4 block text-xl font-semibold sm:text-[22px] md:text-xl lg:text-[22px] xl:text-xl 2xl:text-[22px]"
                >
                    50+ Best creative website themes & templates
                </a> -->
                <p class="text-gray-500 text-sm text-start leading-relaxed mt-3">
                    The Bible is replete with virtually inexhaustible provisions for Man's comfort here on earth and in eternity.
                </p>
                <p class="text-gray-500 text-xs font-medium text-start leading-relaxed my-4">
                    Created on: 14th July, 2022
                </p>
                
            </div>
            <hr />
                <p class="text-green-500 text-sm px-5 pb-5 font-medium text-start leading-relaxed mt-[22px]">
                    Request accepted
                </p>
        </div>
    </div>
</template>

<script lang="ts" src="./EventCardComponent.ts"></script>