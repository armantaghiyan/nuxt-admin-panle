<script setup>
import BtnClickable from "~/components/btn/btn-clickable.vue";

const $app = appStore()
const {locale, setLocale, locales} = useI18n();

const changeLanguage = (newLocale) => {
    setLocale(newLocale)
}
</script>

<template>
    <card class="sticky h-14 px-6 flex items-center justify-between">
        <div>
            <icon-box @click="$app.isOpenSidebar=!$app.isOpenSidebar">
                <i class="ti ti-menu-2"></i>
            </icon-box>
        </div>
        <div class="flex gap-2">
            <div class="flex">
                <option-menu :width="160" :top="60">
                    <template #button>
                        <icon-box>
                            <i class="ti ti-language ti-md"></i>
                        </icon-box>
                    </template>

                    <div class="flex flex-col p-2 gap-1">
                        <btn-clickable v-for="lang in locales"
                           @click="changeLanguage(lang.code)"
                           class="px-4 py-2 rounded-[6px]" :class="{'text-primary bg-light-primary': lang.code === locale}">
                            {{ $t(`app.${lang.code}`) }}
                        </btn-clickable>
                    </div>
                </option-menu>
                <icon-box>
                    <i class="ti ti-bell ti-md"></i>
                </icon-box>
            </div>

            <img src="/images/icon/user.png" alt="user icon" class="size-10">
        </div>
    </card>
</template>