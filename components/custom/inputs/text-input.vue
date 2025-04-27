<script setup lang="ts">
const {type = 'text'} = defineProps<{
    title?: string
    type?: 'text' | 'password'
    placeholder?: string
}>();

const model = defineModel();
</script>

<template>
    <div>
        <label v-if="title" class="pb-1 text-[13px]">{{ title }}</label>
        <input
            class="w-full h-[38px] rounded-[6px] border border-gray-2 hover:border-gray-3 focus:border-[2px] focus:border-primary px-3.5 focus:px-4 duration-150"
            :type="type"
            :placeholder="placeholder??''"
            v-model="model">

    </div>
</template>
