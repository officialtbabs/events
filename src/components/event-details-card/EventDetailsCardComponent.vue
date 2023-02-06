<template>
  <div class="max-w-[524.1px] w-full py-8 px-6 bg-white rounded-xl">
    <table ref="table" class="w-full border-collapse table-auto">
      <tbody>
        <tr class="border-y">
          <td class="py-5">
            <p class="text-sm font-medium text-gray-500">WAITLIST COUNT</p>
          </td>
          <td class="flex items-center justify-end py-5">
            <p
              class="px-3 py-1 text-sm text-[#4848ed] rounded-full bg-[#e5e5fe] font-bold text-end"
            >
              400 attendees
            </p>
          </td>
        </tr>
        <tr class="border-y">
          <td class="py-5">
            <p class="text-sm font-medium text-gray-500">REQUEST STATUS</p>
          </td>
          <td class="flex items-center justify-end py-5">
            <p
              class="text-sm font-medium text-end"
              :class="{
                'text-green-500': status === 'accepted',
                'text-yellow-500': status === 'pending',
                'text-red-500': status === 'cancelled',
              }"
            >
              Request {{ status }}
            </p>
          </td>
        </tr>
        <tr class="border-y">
          <td class="py-5">
            <p class="text-sm font-medium text-gray-500">LOCATION</p>
          </td>
          <td class="flex items-center justify-end py-5">
            <p class="text-sm font-medium text-black w-5/6 text-end">
              {{ location }}
            </p>
          </td>
        </tr>
        <tr class="border-y">
          <td class="py-5">
            <p class="text-sm font-medium text-gray-500">EVENT DATE</p>
          </td>
          <td class="flex items-center justify-end py-5">
            <p class="text-sm font-medium text-black text-end">
              {{ tripDate }}
            </p>
          </td>
        </tr>
        <tr class="border-y">
          <td class="py-5">
            <p class="text-sm font-medium w-5/6 text-gray-500">
              ESTIMATED NO. OF ATTENDEE
            </p>
          </td>
          <td class="flex items-center justify-end py-5">
            <p class="text-sm font-medium text-black text-end">
              ~{{ attendeesEstimate }}
            </p>
          </td>
        </tr>
        <tr class="border-y">
          <td class="py-5">
            <p class="text-sm font-medium text-gray-500">WHO WILL BE PAYING?</p>
          </td>
          <td class="flex items-center justify-end py-5">
            <p class="text-sm font-medium text-black text-end">Attendee</p>
          </td>
        </tr>
        <tr class="border-y">
          <td class="py-5">
            <p class="text-sm font-medium text-gray-500">ONBOARDING LINK</p>
          </td>
          <td class="flex items-center justify-end py-5">
            <a
              class="text-sm font-medium text-black text-end flex space-x-3 cursor-pointer"
              ><p>https://www.shuttlers.ng/join-event</p>
              <span><LinkIcon /></span
            ></a>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts" src="./EventDetailsCardComponent.ts"></script>
