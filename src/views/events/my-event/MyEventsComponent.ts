import Vue, { defineAsyncComponent } from "vue";

const EventCardComponent = defineAsyncComponent(() => import('@/components/event-card/EventCardComponent.vue'))

const MyEventsComponent = Vue.component('my-event-component', {
    components: {
        EventCardComponent
    }
})

export default MyEventsComponent;