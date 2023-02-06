import * as eventService from "@/services/event-service/EventService";
import Vue, { ref } from "vue";
import EventCardComponent from "@/components/event-card/EventCardComponent.vue";

const eventList = ref();

const MyEventsComponent = Vue.component("my-event-component", {
  components: {
    EventCardComponent,
  },
  data() {
    return {
      eventList: eventList,
    };
  },
  async mounted() {
    try {
      const result = await eventService.getEventsbyUserID();
      if (result) {
        eventList.value = [...result.data];
      }
    } catch (e) {
      console.error("error", e);
    }
  },
});

export default MyEventsComponent;
