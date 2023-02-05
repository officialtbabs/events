import Vue, { ref } from "vue";
import { VueEditor } from "vue2-editor";
import * as uploadService from "@/services/ImageUploadService";

const title = ref('');
const type = ref('');
const description = ref('');
const location = ref('');
const attendees = ref('');
const tripDate = ref('');
const banner = ref('');
const returnTrip = ref(false);
const returnDate = ref('');
const payment = ref(false);
const isBannerSelected = ref(false);

const uploadImage = async (fileInput: any) =>  {
   try {
      const result = await uploadService.imageUploadService(fileInput);
   }
   catch (e) {
      console.log(e)
   }
}

export default Vue.component("create-card-component", {
   components: {
      VueEditor,
      

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
      isEventOptionOpen: false,
      isFormValid: false,
      isBannerSelected: isBannerSelected,
      eventOptions: [
         "Religion",
         "IT",
         "Business"
      ],
      customToolbar: [
         ["bold", "italic", "underline"],
         [{ color: [] }],
         [{ align: "" }, { align: "center" }],
         [{ list: "ordered" }],
         [{ 'direction': 'rtl' }],
       ]
    }
   },
   computed: {
      
   },
   methods: {
      focusSelect () {
         this.isEventOptionOpen = !this.isEventOptionOpen;
         (this.$refs.eventType as HTMLInputElement).focus();
      },
      blurSelect () {
         setTimeout(() => {
            this.isEventOptionOpen = !this.isEventOptionOpen;
         }, 100)
      },
      setSelectValue (value: string) {
         const element = this.$refs.eventType as HTMLInputElement;
         element.value = value;
         element.dispatchEvent(new Event('input'));
      },
      toggleSwitch () {
         this.returnTrip = !this.returnTrip;
      },
       selectBanner (e: any) {
         const selectedFile = e.target;
         const reader = new FileReader();

         const imgTag = this.$refs.banner as HTMLImageElement;
         imgTag.title = selectedFile.name;

         reader.onload = function(event) {
            if(event.target) {
               imgTag.src = event.target.result as any;
               if ( imgTag.src) {
                  isBannerSelected.value = true;
               }
            }
         };
         reader.readAsDataURL(selectedFile.files[0]);
         uploadImage(selectedFile);
         this.setFormValidity();
      },
      setFormValidity () {
         this.isFormValid = false; 
         if (this.title && this.type && this.description && this.location && this.attendees && this.tripDate && this.payment) {
            this.isFormValid = true;
         }
      }
   }
})