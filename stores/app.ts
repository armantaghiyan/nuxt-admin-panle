import {defineStore} from 'pinia';

export const appStore = defineStore('app', {
    state: () => ({
        loading: true,
        isOpenSidebar: true,
        dir: 'ltr',
    }),
    actions: {
        stopLoading() {
            this.loading = false;
        }
    },
})