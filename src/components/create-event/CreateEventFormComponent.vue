<template>
    <div class="flex justify-center">
        <div class="max-w-[674px] bg-white p-8">
            <p class="text-xl text-start text-black font-bold mb-1">Create an event</p>
            <p class="text-sm text-start mb-[20px]">Tell us about your upcoming event</p>
            <form class="space-y-[20px]">
                <div class="grid grid-cols-2 gap-x-5">
                    <div class="w-full grid place-items-start">
                        <label for="eventName" class="text-xs mb-2 font-medium text-gray-500">Name of event</label>
                        <input type="text" name="eventName" id="eventName" class="border border-gray-300 rounded-md h-[50px] w-full p-3">
                    </div>
                    <div class="w-full grid place-items-start">
                        <label for="eventType" class="text-xs mb-2 font-medium text-gray-500">Name of event</label>
                        <select class="border border-gray-300 rounded-md h-[50px] w-full px-3"  name="eventType" id="eventType" >
                            <option selected value=""></option>
                            <option value="">Religious</option>
                        </select>
                    </div>
                </div>
                <div >
                    <p class="text-xs mb-2 font-medium text-start text-gray-500">Description</p>
                    <vue-editor  />
                </div>
                <div class="grid grid-cols-2 gap-x-5">
                    <div class="w-full grid place-items-start">
                        <label for="eventLocation" class="text-xs mb-2 font-medium text-gray-500">Location of event</label>
                        <input type="text" name="eventLocation" id="eventLocation" class="border border-gray-300 rounded-md h-[50px] w-full p-3">
                    </div>
                    <div class="w-full grid place-items-start">
                        <label for="eventDate" class="text-xs mb-2 font-medium text-gray-500">Date of event</label>
                        <input type="date" name="eventDate" id="eventDate" class="border border-gray-300 rounded-md h-[50px] w-full p-3">
                    </div>
                </div>
                <div class="grid grid-cols-2 gap-x-5">
                    <div class="w-full grid place-items-start">
                        <label for="eventLocation" class="text-xs mb-2 font-medium text-gray-500">Location of event</label>
                        <input type="text" name="eventLocation" id="eventLocation" class="border border-gray-300 rounded-md h-[50px] w-full p-3">
                    </div>
                    <div class="w-full grid place-items-start py-4">
                        <label for="themeSwitcherTwo" class="themeSwitcherTwo relative inline-flex cursor-pointer select-none items-center">
                            <input type="checkbox" name="themeSwitcherTwo" id="themeSwitcherTwo" class="sr-only" :value="true">
                            <span class="slider mr-4 flex h-8 w-[60px] items-center rounded-full bg-[#CCCCCE] p-1 duration-200">
                                <span class="dot h-6 w-6 rounded-full bg-white duration-200"></span>
                            </span>
                            <span class="label flex items-center text-sm text-left font-medium text-black">
                                Would you like us to take the attendees to and fro?
                            </span>
                        </label>
                    </div>
                </div>
                <div>
                    <p class="text-xs mb-2 font-medium text-start text-gray-500">Event banner</p>
                    <div class="flex items-center justify-center w-full ">
                        <label for="dropzone-file" class="flex flex-col items-center justify-center w-full h-[120px] border-2 border-gray-300 border-dashed rounded-lg cursor-pointer ">
                            <div class="flex flex-col items-center justify-center pt-5 pb-6">
                                <svg aria-hidden="true" class="w-10 h-10 mb-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
                                <p class="mb-2 text-sm text-gray-500 dark:text-gray-400"><span class="font-semibold">Click to upload</span> or drag and drop</p>
                                <p class="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                            </div>
                            <input id="dropzone-file" type="file" class="hidden" />
                        </label>
                    </div> 
                </div>
                <div class="flex items-center space-x-4">
                    <input class="border border-gray-300  p-10" id="termsAndConditons" name="termsAndConditons" type="checkbox">
                    <label class="text-xs w-3/5 text-start text-gray-500" for="termsAndConditons">By clicking on this box, you agree that the attendees will be in full control of paying the bills for the event.</label>
                </div>
                <button :disabled="true" class="w-full text-black font-bold py-[13px] rounded-md" :class="{'bg-gray': false, 'bg-green-500': true}" type="submit">Submit request</button>
            </form>
        </div>
    </div>
</template>

<script lang="ts" src="./CreateEventFormComponent.ts"></script>