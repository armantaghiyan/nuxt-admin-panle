<script setup lang="ts">
const {
    width = null,
    fixed = false,
} = defineProps<{
    width?: number
    fixed?: boolean
}>();

function getFixWidth(){
    if(!fixed){
        return 'auto';
    }
    return width? `${width}px`: 'auto';
}

function getWidth(){
    return width? `${width}px`: 'auto';
}
</script>

<template>
    <th class="font-medium px-5 py-4 text-start text-[13px]" :style="`width: ${getFixWidth()};min-width: ${getWidth()};max-width: ${getWidth()};`">
        <slot/>
    </th>
</template>