<template>
    <div class="w-full">
        <nav class="bg-black">
            <ul class="flex justify-between font-bold">
                <li class="text-white" v-for="(data, index) in navData" :key="index">{{ data }}</li>
            </ul>
        </nav>
       
    </div>
</template>

<script lang="ts" src="./UserView.ts"></script>