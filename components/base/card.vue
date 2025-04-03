<script setup lang="ts">
defineProps<{
    title?: string
}>();
</script>

<template>
    <div class="bg-white rounded-[6px] base-shadow">
        <div v-if="title">
            <h5 class="text-[18px] font-medium">{{title}}</h5>
        </div>

        <slot/>
    </div>
</template>