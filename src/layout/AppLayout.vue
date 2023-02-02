<template>
    <div>
        <app-header />
        <router-view />
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import AppHeader from '@/components/molecule/AppHeader.vue'
export default Vue.extend({
    name: 'App-Layout',
    components: {
        AppHeader
    }
})
</script>