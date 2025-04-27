import {defineStore} from 'pinia';
import type Admin from "~/utils/models/Admin";

export const userStore = defineStore('user', {
    state: () => ({
        isAuth: false as boolean,
        user: {} as Admin,
        tryGetUser: 0
    }),
    actions: {
        login(user: Admin) {
            this.user = user;
            this.isAuth = true;
        }
    },
})