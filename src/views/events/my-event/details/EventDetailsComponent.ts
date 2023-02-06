import Vue, { ref } from "vue";
import * as eventService from "@/services/event-service/EventService";
import EventDetailsCardComponent from "@/components/event-details-card/EventDetailsCardComponent.vue";
import AttendeeTable from "@/components/attendee-table/AttendeeTable.vue"

const eventData = ref();
const title = ref("");
const banner = ref("");
const tripDate = ref("");
const description = ref("");
const status = ref("");
const location = ref("");
const attendeesEstimate = ref(0);

const EventDetailsComponent = Vue.component("event-details-component", {
  props: {
    id: {
      type: String,
      required: true,
    },
  },
  components: {
    EventDetailsCardComponent,
    AttendeeTable,
  },
  data() {
    return {
      title: title,
      banner: "",
      tripDate: tripDate,
      description: description,
      status: status,
      location: location,
      attendeesEstimate: attendeesEstimate,
    };
  },
  async mounted() {
    try {
      const result = await eventService.getEventsbyUserID();
      if (result) {
        eventData.value = { ...result.data[this.$route.params.id] };
        title.value = eventData.value.title;
        this.banner = eventData.value.banner;
        description.value = eventData.value.description;
        status.value = eventData.value.status;
        location.value = eventData.value.location;
        attendeesEstimate.value = eventData.value.attendeesEstimate;
        tripDate.value = new Date(eventData.value.tripDate)
          .toISOString()
          .split("T")[0];
      }
    } catch (e) {
      console.error("error", e);
    }
  },
});

export default EventDetailsComponent;
