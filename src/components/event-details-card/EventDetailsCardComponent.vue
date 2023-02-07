<template>
    <div class="max-w-[524.1px] w-full py-8 px-6 bg-white rounded-xl">
        <table class="w-full border-collapse table-auto">
            <tbody>
                <tr class="border-y" v-for="(data, dataIndex) in tableData" :key="dataIndex">
                    <td class="py-5" v-html="data.label"></td>
                    <td class="flex items-center justify-end py-5" v-html="data.value"></td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script lang="ts" src="./EventDetailsCardComponent.ts"></script>