<script setup lang="ts">
const model = defineModel();
const emit = defineEmits(['onChange']);

watch(model, () => {
    emit('onChange');
});
</script>

<template>
    <select-input :options="[
        {label:7, value: 7},
        {label:10, value: 10},
        {label:25, value: 25},
        {label:50, value: 50},
        {label:100, value: 100},
    ]" class="sm:w-[82px] w-full" v-model="model"/>
</template>