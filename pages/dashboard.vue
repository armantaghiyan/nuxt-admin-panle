<template>
    <div class="w-full min-h-screen start-0 bg-panel">
        <app-sidebar/>

        <app-content>
            <app-header/>

            <div class="pt-6">
                <router-view/>
            </div>

            <app-footer/>
        </app-content>
    </div>
</template>