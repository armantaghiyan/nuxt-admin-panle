<script setup lang="ts">
const {breakpoint} = useBreakpoint();
const $app = appStore()


watch(breakpoint, () => {
    if(breakpoint.value === 'xl'){
        $app.isOpenSidebar = true;
    }else{
        $app.isOpenSidebar = false;
    }
});
</script>

<template>
    <div>
        <fade-animate :duration="200">
            <div v-if="$app.isOpenSidebar && breakpoint !== 'xl'" @click="$app.isOpenSidebar = false" class="bg-gray-4/50 w-full h-screen fixed to-pink-50 right-0 left-0 z-40"></div>
        </fade-animate>

        <aside class="fixed bg-menu-theme text-menu-color w-[260px] duration-200 h-full z-40" :class="{'start-0': $app.isOpenSidebar, 'start-[-260px]': !$app.isOpenSidebar}">
            <div>
                <div class="h-16 flex items-center gap-2 ps-[22px] pe-2">
                    <logo/>
                    <span class="text-white text-[22px] font-bold">{{ $t('app_name')}}</span>
                </div>
                <div class="px-3">
                    <nuxt-link href="/dashboard">
                        <menu-item v-for="i in 3" class="mt-1.5">{{ $t('menu.dashboard') }}</menu-item>
                    </nuxt-link>

                    <menu-section>{{$t('menu.settings')}}</menu-section>

                    <nuxt-link href="/dashboard/list">
                        <menu-item  class="mt-1.5">{{ $t('menu.list') }}</menu-item>
                    </nuxt-link>
                </div>
            </div>
        </aside>
    </div>
</template>