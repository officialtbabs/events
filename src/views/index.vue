<template>
    <div>
        <button @click="openModal = true">Open Modal</button>
        <app-modal v-model="openModal" @closeModal="openModal = false" :modalTitle="'Title '">
            <template #body>
                <h1> This is a modal body</h1>
            </template>
            <template #footer>
                <h1> This is a modal footer</h1>
            </template>
        </app-modal>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import AppModal from '@/components/molecule/AppModal.vue'

export default Vue.extend({
    name: 'home-index',
    components: {
        AppModal
    },
    data: () => ({
        openModal: false
    })
})
</script>