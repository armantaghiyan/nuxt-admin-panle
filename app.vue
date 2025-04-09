<script setup lang="ts">
const route = useRoute();

function fullPage (){
    return route.fullPath === '/login' || route.fullPath === '/register';
}
</script>

<template>
    <i18n-provider>
        <app-loading>
            <div v-if="!fullPage()" class="w-full min-h-screen start-0 bg-panel">
                <app-sidebar/>

                <app-content>
                    <app-header/>

                    <div class="pt-6">
                        <Transition name="blur" mode="out-in">
                            <NuxtPage/>
                        </Transition>
                    </div>
                </app-content>
            </div>
            <Transition v-else name="blur" mode="out-in">
                <NuxtPage/>
            </Transition>
        </app-loading>
    </i18n-provider>
</template>

<style scoped>
.blur-enter-active,
.blur-leave-active {
    transition: all 0.2s ease;
}

.blur-enter-from {
    opacity: 0;
    filter: blur(10px);
}

.blur-leave-to {
    opacity: 0;
    filter: blur(10px);
}
</style>