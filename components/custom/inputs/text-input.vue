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
            class="auto-placeholder w-full h-[38px] rounded-[6px] border border-gray-2 hover:border-gray-3 focus:border-[2px] focus:border-primary px-3.5 focus:px-4 duration-150"
            :class="{
                '!placeholder:text-start': type === 'password',
             }"
            :type="type"
            :placeholder="placeholder??''"
            dir="auto"
            v-model="model">

    </div>
</template>

<style>
.auto-placeholder::placeholder {
    text-align: start;
    direction: auto;
    unicode-bidi: plaintext;
}
</style>
