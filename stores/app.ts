import {defineStore} from 'pinia';

export const appStore = defineStore('app', {
    state: () => ({
        loading: true,
    }),
    actions: {
        stopLoading() {
            this.loading = false;
        }
    },
})