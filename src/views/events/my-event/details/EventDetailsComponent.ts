import Vue, { defineAsyncComponent } from "vue";

const EventDetailsCardComponent = defineAsyncComponent(() => import('@/components/event-details-card/EventDetailsCardComponent.vue'));
const AttendeeTable = defineAsyncComponent(() => import('@/components/attendee-table/AttendeeTable.vue'));

const EventDetailsComponent = Vue.component('event-details-component', {
    components: {
        EventDetailsCardComponent,
        AttendeeTable
    }
})

export default EventDetailsComponent;