import {defineStore} from 'pinia';

export const useStore = defineStore('user', {
    state: () => ({
        count: 0,
    }),
    actions: {},
})