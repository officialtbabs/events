import Vue, { defineAsyncComponent } from "vue";

const ProfileCardComponent = defineAsyncComponent(() => import('../../components/profile-card/ProfileCardComponent.vue'));
const CreateCardComponent = defineAsyncComponent(() => import('../../components/create-event/CreateEventFormComponent.vue'));

export default Vue.component('user-view', {
    components: {
        ProfileCardComponent,
        CreateCardComponent
    },
    data() {
        return {
            navData: [
                "Charter",
                "Event",
                "Home",
                "My bookings",
                "My wallet"
            ]
        }
    },
    methods: {

    }
})