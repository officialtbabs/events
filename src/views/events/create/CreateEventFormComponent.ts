import Vue, { ref } from "vue";
import { VueEditor } from "vue2-editor";
import * as uploadService from "@/services/ImageUploadService";
import { InputHTMLAttributes } from "vue/types/jsx";
import * as eventService from "@/services/event-service/EventService";
import { Payment } from "./CreateEventFormComponent.model";
import SuccessIcon from "@/components/atom/icons/SuccessIcon.vue";
import AppModal from "@/components/molecule/AppModal.vue";

const title = ref("");
const type = ref("");
const description = ref("");
const location = ref("");
const attendees = ref(0);
const tripDate = ref("");
const banner = ref("");
const message = ref("");
const returnTrip: InputHTMLAttributes["checked"] = false;
const returnDate = ref("");
const payment: InputHTMLAttributes["checked"] = false;
const isBannerSelected = ref(false);

const uploadImage = async (fileInput: any) => {
  try {
    const result = await uploadService.imageUploadService(fileInput);
    if (result) {
      return result;
    }
  } catch (e) {
    console.error("error", e);
  }
};

export default Vue.component("create-card-component", {
  components: {
    VueEditor,
    SuccessIcon,
    AppModal,
  },
  data() {
    return {
      title: title,
      type: type,
      description: description,
      location: location,
      attendees: attendees,
      tripDate: tripDate,
      banner: "",
      returnTrip: returnTrip,
      returnDate: returnDate,
      payment: payment,
      isEventOptionOpen: false,
      isFormValid: false,
      isBannerSelected: isBannerSelected,
      openModal: false,
      message: message,
      eventOptions: ["Religion", "IT", "Business"],
      customToolbar: [
        ["bold", "italic", "underline"],
        [{ color: [] }],
        [{ align: "" }, { align: "center" }],
        [{ list: "ordered" }],
        [{ direction: "rtl" }],
      ],
    };
  },
  computed: {},
  methods: {
    focusSelect() {
      this.isEventOptionOpen = !this.isEventOptionOpen;
      (this.$refs.eventType as HTMLInputElement).focus();
    },
    blurSelect() {
      setTimeout(() => {
        this.isEventOptionOpen = !this.isEventOptionOpen;
      }, 100);
    },
    setSelectValue(value: string) {
      const element = this.$refs.eventType as HTMLInputElement;
      element.value = value;
      element.dispatchEvent(new Event("input"));
      this.setFormValidity();
    },
    toggleSwitch() {
      this.returnTrip = !this.returnTrip;
    },
    async selectBanner(e: any) {
      const selectedFile = e.target;
      const reader = new FileReader();

      const bannerElement = this.$refs.banner as HTMLImageElement;
      bannerElement.title = selectedFile.name;
      bannerElement.src = await uploadImage(selectedFile);
      if (bannerElement.src) {
        isBannerSelected.value = true;
        this.banner = bannerElement.src;
        this.setFormValidity();
      }
      bannerElement.dispatchEvent(new Event("img"));
    },
    clearBanner() {
      const bannerInput = this.$refs.bannerInput as HTMLInputElement;
      const banner = this.$refs.banner as HTMLImageElement;
      bannerInput.value = "";
      banner.src = "";
      isBannerSelected.value = false;
    },
    setFormValidity() {
      if (
        this.title &&
        this.type &&
        this.description &&
        this.location &&
        this.attendees &&
        this.tripDate &&
        this.payment &&
        this.banner
      ) {
        this.isFormValid = true;
      }
    },
    closeModal() {
      this.openModal = !this.openModal;
      description.value = "";
      title.value = "";
      type.value = "";
      location.value = "";
      attendees.value = 0;
      tripDate.value = "";
      banner.value = "";
      this.returnTrip = false;
      returnDate.value = "";
      this.payment = false;
      isBannerSelected.value = false;
      this.isFormValid = false;
    },
    async onSubmit(event: any) {
      const data = {
        title: title.value,
        type: type.value,
        description: description.value
          .replace(/<[^>]*>/g, "")
          .replace(/&amp;/g, "&")
          .replace(/&lt;/g, "<")
          .replace(/&gt;/g, ">"),
        location: location.value,
        attendees: Number(attendees.value),
        tripDate: tripDate.value,
        banner: this.banner,
        returnTrip: this.returnTrip,
        returnDate: returnDate.value ? "" : null,
        payment: this.payment ? Payment.attendees : Payment.notAttendees,
      };

      try {
        const result = await eventService.createEvent(data);
        if (result.message === "Event request was successful") {
          this.message = result.message;
          this.openModal = !this.openModal;
        }
      } catch (e) {
        console.error("error", e);
      }
    },
  },
});
