<script setup lang="ts">
defineProps<{
    href: string
}>();
</script>

<template>
    <nuxt-link :href="href">
        <icon-button>
            <i class="ti ti-eye text-gray-6"></i>
        </icon-button>
    </nuxt-link>
</template>