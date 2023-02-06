import Vue, { ref } from "vue";

const currentPage = ref(1);
const totalPages = ref(1);

const AttendeeTable = Vue.component("attendee-table", {
  data: () => {
    return {
      currentPage: currentPage.value,
      totalPages: totalPages.value,
      attendeeTableData: [
        {
          attendeeName: "Ferdinard Ikechukwu Ugo",
          email: "olivia@gmail.com",
          phone: "07039127480",
          nearestStop: "Iyana Ipaja Bus stop",
        },
        {
          attendeeName: "Ferdinard Ikechukwu Ugo",
          email: "olivia@gmail.com",
          phone: "07039127480",
          nearestStop: "Iyana Ipaja Bus stop",
        },
        {
          attendeeName: "Ferdinard Ikechukwu Ugo",
          email: "olivia@gmail.com",
          phone: "07039127480",
          nearestStop: "Iyana Ipaja Bus stop",
        },
        {
          attendeeName: "Ferdinard Ikechukwu Ugo",
          email: "olivia@gmail.com",
          phone: "07039127480",
          nearestStop: "Iyana Ipaja Bus stop",
        },
        {
          attendeeName: "Ferdinard Ikechukwu Ugo",
          email: "olivia@gmail.com",
          phone: "07039127480",
          nearestStop: "Iyana Ipaja Bus stop",
        },
      ],
    };
  },
  mounted() {
    this.nextPage;
  },
  methods: {
    nextPage: () => {},
    prevPage: () => {},
  },
});

export default AttendeeTable;
