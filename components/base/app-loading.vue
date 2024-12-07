<script setup lang="ts">
const $app = appStore();
</script>

<template>
    <div>
        <slot/>
        <div v-if="$app.loading" class="fixed top-0 w-full min-h-screen bg-white"></div>
    </div>
</template>