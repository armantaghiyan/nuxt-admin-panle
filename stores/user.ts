import {defineStore} from 'pinia';
import type Admin from "~/utils/models/Admin";
import type Permission from "~/utils/models/Permission";

export const userStore = defineStore('user', {
    state: () => ({
        isAuth: false as boolean,
        user: {} as Partial<Admin>,
        tryGetUser: 0,
        permissions: [] as Permission[]
    }),
    actions: {
        login(user: Admin) {
            this.user = user;
            this.isAuth = true;
        },
        setPermissions(permissions: Permission[]) {
            this.permissions = permissions;
        },
        logout() {
            this.user = {};
            this.isAuth = false;
        }
    },
})