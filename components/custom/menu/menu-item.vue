<script setup lang="ts">
defineProps<{
    title: string,
    href: string,
}>();
</script>

<template>
    <nuxt-link :href="href" active-class="menu-active-item" class="flex gap-2 w-full items-center h-[38px] px-3 mt-1.5 rounded-[6px] hover:bg-menu-color-light hover:text-white duration-300 cursor-pointer">
        <slot/>
        <span class="text-[15px] pt-1">
            {{title}}
        </span>
    </nuxt-link>
</template>