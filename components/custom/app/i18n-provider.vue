<script setup lang="ts">
const {locale, locales} = useI18n();


const direction = ref<string>('ltr');
const $app = appStore();

watch(locale, () => {
    setFont();

    locales.value.map(item => {
        if(item.code === locale.value && item.dir){
            $app.dir = item.dir;
        }
    });
});


function setFont() {
    locales.value.map(item => {
        if (locale.value === item.code) {
            // @ts-ignore
            document.body.classList.add(item.fontClass);
            if(item.dir){
                direction.value = item.dir;
            }
        }else{
            // @ts-ignore
            document.body.classList.remove(item.fontClass);
        }
    });
}

setFont();
</script>

<template>
    <div :style="`direction: ${direction};`">
        <slot/>
    </div>
</template>