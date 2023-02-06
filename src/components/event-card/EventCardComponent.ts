import Vue from "vue";

const EventCardComponent = Vue.component("event-card-component", {
  props: {
    id: String,
    title: String,
    banner: String,
    description: String,
    status: String,
    date: String,
  },
});

export default EventCardComponent;
