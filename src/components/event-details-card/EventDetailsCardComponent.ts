import Vue, { defineAsyncComponent } from "vue";
import Link from '@/components/atom/Link.vue'

// const tableData = [
//     {
//         label: "WAITLIST COUNT",
//         value: `<p class="px-3 py-1 text-purple-700 rounded-full bg-purple-200">400 attendees</p>`
//     }
// ]
// const Link = defineAsyncComponent(() => import('@/components/atom/Link.vue'))

const EventDetailsCardComponent = Vue.component('event-details-card', {
    components: {
        Link
    },
    data: () => {
        return {
            tableData: [
                {
                    label: '<p class="text-sm font-medium text-gray-500">WAITLIST COUNT</p>',
                    value: `<p class="px-3 py-1 text-sm text-purple-700 rounded-full bg-purple-200 font-bold text-end">400 attendees</p>`
                },
                {
                    label: '<p class="text-sm font-medium text-gray-500">REQUEST STATUS</p>',
                    value: `<p class="text-sm font-medium text-green-500 text-end">Request accepted</p>`
                },
                {
                    label: '<p class="text-sm font-medium text-gray-500">LOCATION</p>',
                    value: `<p class="text-sm font-medium text-black w-5/6 text-end">Redemption camp, 10113, Pakuro, Lagos state.</p>`
                },
                {
                    label: '<p class="text-sm font-medium text-gray-500">EVENT DATE</p>',
                    value: `<p class="text-sm font-medium text-black text-end">2022-07-11</p>`
                },
                {
                    label: '<p class="text-sm font-medium w-5/6 text-gray-500">ESTIMATED NO. OF ATTENDEE</p>',
                    value: `<p class="text-sm font-medium text-black text-end">~20,000</p>`
                },
                {
                    label: '<p class="text-sm font-medium text-gray-500">WHO WILL BE PAYING?</p>',
                    value: `<p class="text-sm font-medium text-black text-end">Attendee</p>`
                }
                ,
                {
                    label: '<p class="text-sm font-medium text-gray-500">ONBOARDING LINK</p>',
                    value: `<a class="text-sm font-medium text-black text-end flex space-x-3"><p>https://www.shuttlers.ng/join-event</p><span class="hue-rotate-60 saturate-200 contrast-200">🔗</span></a>`
                }
            ]
        }
    }
})

export default EventDetailsCardComponent;