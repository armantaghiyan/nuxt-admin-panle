<script setup>
const $app = appStore()
const {locale, setLocale, locales} = useI18n();

const changeLanguage = (newLocale) => {
    setLocale(newLocale)
}
</script>

<template>
    <div class="sticky top-0 pt-4 px-4 z-50 bg-panel">
        <card class="h-14 flex px-6 items-center justify-between">
            <div>
                <icon-button @click="$app.isOpenSidebar=!$app.isOpenSidebar">
                    <i class="ti ti-menu-2"></i>
                </icon-button>
            </div>
            <div class="flex gap-2">
                <div class="flex">
                    <option-menu :width="160" :top="60" position="auto">
                        <template #button>
                            <icon-button>
                                <i class="ti ti-language ti-md"></i>
                            </icon-button>
                        </template>

                        <div class="flex flex-col p-2 gap-1">
                            <btn-clickable v-for="lang in locales"
                                           @click="changeLanguage(lang.code)"
                                           :class="{'text-primary bg-light-primary': lang.code === locale}">
                                {{ $t(`app.${lang.code}`) }}
                            </btn-clickable>
                        </div>
                    </option-menu>
                    <icon-button>
                        <i class="ti ti-bell ti-md"></i>
                    </icon-button>
                </div>

                <img :src="`/images/icon/user.png`" alt="user icon" class="size-10">
            </div>
        </card>
    </div>
</template>