<template>
    <aside class="fixed bg-menu-theme text-menu-color w-[260px] h-full">
        <div>
            <div class="h-16 flex items-center gap-2 ps-[22px] pe-2">
                <logo/>
                <span class="text-white text-[22px] font-bold">{{ $t('app_name')}}</span>
            </div>
            <div class="px-3">
                <menu-item v-for="i in 3">{{ $t('menu.dashboard') }}</menu-item>

                <menu-section>{{$t('menu.settings')}}</menu-section>

                <menu-item v-for="i in 3">{{ $t('menu.dashboard') }}</menu-item>

                <menu-section>{{$t('menu.settings')}}</menu-section>

                <menu-item v-for="i in 3">{{ $t('menu.dashboard') }}</menu-item>
            </div>
        </div>
    </aside>
</template>