<template>
  <div class="p-[42px] flex justify-center">
    <div class="max-w-[674px] bg-white p-8">
      <p class="text-xl text-start text-black font-bold mb-1">
        Create an event
      </p>
      <p class="text-sm text-start mb-[20px]">
        Tell us about your upcoming event
      </p>
      <form class="space-y-[20px]" @submit.prevent="onSubmit">
        <div class="grid grid-cols-2 gap-x-5">
          <div class="w-full grid place-items-start">
            <label
              for="eventName"
              class="text-xs mb-2 font-medium text-gray-500"
              >Name of event</label
            >
            <input
              @change="setFormValidity"
              type="text"
              name="eventName"
              id="eventName"
              v-model="title"
              class="border border-gray-300 rounded-md h-[50px] w-full p-3"
            />
          </div>
          <div class="w-full grid place-items-start relative">
            <label
              for="eventType"
              class="text-xs mb-2 font-medium text-gray-500"
              >Event type</label
            >
            <button
              @click="focusSelect"
              class="absolute top-6 right-0 h-[50px] bg-transparent flex items-center rounded-r-md"
              type="button"
            >
              <img
                class="pr-3"
                src="@/assets/images/select-down.svg"
                alt="select-down"
              />
            </button>
            <input
              @change="setFormValidity"
              @click="focusSelect"
              @blur="blurSelect"
              type="text"
              readonly
              name="eventType"
              id="eventType"
              ref="eventType"
              v-model="type"
              class="border border-gray-300 rounded-md h-[50px] w-full p-3"
            />
            <div
              v-show="isEventOptionOpen"
              class="absolute bg-white w-full top-[75px] z-20"
            >
              <button
                v-for="(option, index) in eventOptions"
                class="px-3 py-2 w-full border border-gray-300 text-start hover:bg-gray-100"
                @click="setSelectValue(option)"
                :key="index"
                type="button"
              >
                {{ option }}
              </button>
            </div>
            <!-- <select class="border border-gray-300 rounded-md h-[50px] w-full px-3 appearance-none bg-[select]" ref="eventType" v-model="type" name="eventType" id="eventType" >
                            <option selected value=""></option>
                            <option value="">Religious</option>
                        </select> -->
          </div>
        </div>
        <div>
          <p class="text-xs mb-2 font-medium text-start text-gray-500">
            Description
          </p>
          <vue-editor
            @selection-change="setFormValidity"
            v-model="description"
            :editor-toolbar="customToolbar"
          />
        </div>
        <div class="grid grid-cols-2 gap-x-5">
          <div class="w-full grid place-items-start">
            <label
              for="eventLocation"
              class="text-xs mb-2 font-medium text-gray-500"
              >Location of event</label
            >
            <input
              @change="setFormValidity"
              type="text"
              name="eventLocation"
              id="eventLocation"
              v-model="location"
              class="border border-gray-300 rounded-md h-[50px] w-full p-3"
            />
          </div>
          <div class="w-full grid place-items-start">
            <label
              for="eventDate"
              class="text-xs mb-2 font-medium text-gray-500"
              >Date of event</label
            >
            <input
              @change="setFormValidity"
              type="date"
              name="eventDate"
              id="eventDate"
              v-model="tripDate"
              class="border border-gray-300 rounded-md h-[50px] w-full p-3"
            />
          </div>
        </div>
        <div class="grid grid-cols-2 gap-x-5">
          <div class="w-full grid place-items-start">
            <label
              for="attendees"
              class="text-xs mb-2 font-medium text-gray-500"
              >Estimated number of atendees</label
            >
            <input
              @change="setFormValidity"
              type="number"
              name="attendees"
              id="attendees"
              v-model="attendees"
              class="border border-gray-300 rounded-md h-[50px] w-full p-3"
            />
          </div>
          <div class="w-full mt-4 relative">
            <div class="absolute top-4 relative w-12 h-6">
              <input
                @change="setFormValidity"
                type="checkbox"
                class="w-full h-full absolute z-10 opacity-0 cursor-pointer"
                v-model="returnTrip"
                @click="toggleSwitch"
              />
              <label
                class="absolute w-full h-full bg-gray-300 rounded-full shadow-inner"
              >
                <span
                  class="absolute w-6 h-6 bg-white rounded-full shadow inset-0 transition-all ease-in-out duration-200"
                  :style="{
                    transform: returnTrip
                      ? 'translateX(100%)'
                      : 'translateX(0%)',
                  }"
                ></span>
              </label>
            </div>
            <span
              class="text-xs absolute top-3 left-14 text-left font-medium text-black whitespace-normal"
            >
              Would you like us to take the attendees to and fro?
            </span>
          </div>
        </div>
        <div class="">
          <p class="text-xs mb-2 font-medium text-start text-gray-500">
            Event banner
          </p>
          <div class="flex items-center justify-between">
            <div
              class="relative"
              :class="{
                'w-full': !isBannerSelected,
                'w-11/12': isBannerSelected,
              }"
            >
              <label
                for="dropzone-file"
                class="w-full h-[120px] flex items-center justify-center border-2 border-gray-300 border-dashed rounded-lg cursor-pointer"
              >
                <div class="flex flex-col items-center">
                  <svg
                    aria-hidden="true"
                    class="w-10 h-10 mb-3 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                    ></path>
                  </svg>
                  <p class="mb-2 text-sm text-gray-500 dark:text-gray-400">
                    <span class="font-semibold">Click to upload</span> or drag
                    and drop
                  </p>
                  <p class="text-xs text-gray-500 dark:text-gray-400">
                    SVG, PNG, JPG or GIF (MAX. 800x400px)
                  </p>
                </div>
              </label>
              <input
                id="dropzone-file"
                type="file"
                accept="image/*"
                ref="bannerInput"
                class="absolute top-0 h-[120px] z-10 opacity-0"
                @change="selectBanner($event)"
              />
              <img
                class="absolute top-0 w-full h-[120px] rounded-lg"
                :class="{ hidden: !isBannerSelected, block: isBannerSelected }"
                ref="banner"
                :src="banner"
                alt="banner"
              />
            </div>
            <button
              @click.prevent="clearBanner"
              :class="{ hidden: !isBannerSelected, block: isBannerSelected }"
              type="button"
            >
              <img
                class="bg-red-50 p-4 rounded-full"
                src="@/assets/images/cancel.svg"
                alt="cancel"
              />
            </button>
          </div>
        </div>
        <div class="flex items-center space-x-4">
          <input
            @change="setFormValidity"
            class="border border-gray-300 w-[16.5px] h-[16.5px]"
            id="termsAndConditons"
            name="termsAndConditons"
            type="checkbox"
            v-model="payment"
          />
          <label
            class="text-xs w-3/5 text-start text-gray-500"
            for="termsAndConditons"
            >By clicking on this box, you agree that the attendees will be in
            full control of paying the bills for the event.</label
          >
        </div>
        <AppModal
          v-model="openModal"
          @closeModal="closeModal"
          :modalTitle="'Title'"
        >
          <template #head>
            <div class="w-full grid place-items-center gap-y-[30px]">
              <div>
                <SuccessIcon />
              </div>
              <p class="text-lg font-medium">{{ message }}</p>
            </div>
          </template>
          <template #body>
            <p class="text-center text-[#737876]">
              Your event was created successfully, our team would reach out to
              you once your request has been accepted.
            </p>
          </template>
          <template #footer>
            <button
              @click="$router.push('/events/my-events')"
              class="w-full bg-[#00E069] rounded-lg py-2.5 px-[18px] font-medium text-sm"
              type="button"
            >
              Manage event
            </button>
          </template>
        </AppModal>
        <input
          :disabled="!isFormValid"
          class="w-full font-bold py-[13px] rounded-md"
          :class="{
            'bg-gray-300': !isFormValid,
            'bg-green-500': isFormValid,
            'text-black': isFormValid,
            'text-gray-100': !isFormValid,
          }"
          type="submit"
          value="Submit request"
        />
      </form>
    </div>
  </div>
</template>

<script lang="ts" src="./CreateEventFormComponent.ts"></script>
