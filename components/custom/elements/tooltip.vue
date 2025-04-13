<script setup lang="ts">
import tippy from 'tippy.js';

const props = defineProps<{
    text: string,
    for: string,
}>();

onMounted(() => {
  nextTick(() => {
      tippy(`#${props.for}`, {
          content: props.text.toString(),
          placement: 'top',
      });
  });
});
</script>

<template>
    <slot/>
</template>