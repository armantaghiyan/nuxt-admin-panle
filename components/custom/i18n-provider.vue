<script setup lang="ts">
const {locale, locales} = useI18n();


watch(locale, () => {
    setFont();
});

const direction = ref('ltr');

function setFont() {
    locales.value.map(item => {
        if (locale.value === item.code) {
            document.body.classList.add(item.fontClass);
            direction.value = item.dir;
        }else{
            document.body.classList.remove(item.fontClass);
        }
    })
}

setFont();
</script>

<template>
    <div :style="`direction: ${direction};`">
        <slot/>
    </div>
</template>