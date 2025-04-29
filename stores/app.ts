import {defineStore} from 'pinia';

export const appStore = defineStore('app', {
    state: () => ({
        loading: true,
        isOpenSidebar: true,
        dir: 'ltr',

        requestLoading: false,
    }),
    actions: {
        stopLoading() {
            this.loading = false;
        },
        showLoading() {
            this.requestLoading = true;
        },
        hideLoading() {
            this.requestLoading = false;
        }
    },
})