import Vue, { defineAsyncComponent } from "vue";
import LinkIcon from "@/components/atom/icons/LinkIcon.vue"

const EventDetailsCardComponent = Vue.component("event-details-card", {
  props: {
    status: String,
    tripDate: String,
    location: String,
    attendees: Number,
    attendeesEstimate: Number,
  },
  components: {
    LinkIcon
  }
});

export default EventDetailsCardComponent;
