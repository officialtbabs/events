import Vue, { ref } from "vue";
import { VueEditor } from "vue2-editor";

const title = ref('');
const type = ref('');
const description = ref('');
const location = ref('');
const attendees = ref('');
const tripDate = ref('');
const banner = ref('');
const returnTrip = ref('');
const returnDate = ref('');
const payment = ref('');

export default Vue.component("create-card-component", {
   components: {
      VueEditor
   },
   data () {
    return {
      title: title.value,
      type: type.value,
      description: description.value,
      location: location.value,
      attendees: attendees.value,
      tripDate: tripDate.value,
      banner: banner.value,
      returnTrip: returnTrip.value,
      returnDate: returnDate.value,
      payment: payment.value,
    }
   } 
})