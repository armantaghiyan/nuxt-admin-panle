import {defineNuxtRouteMiddleware, navigateTo} from 'nuxt/app';
import type {AdminStartResponse} from '~/utils/api/admin';

export default defineNuxtRouteMiddleware(async (to) => {
    const $app = appStore();
    const $user = userStore();
    const {callApi} = useCallApi();

    if (!$user.isAuth && $user.tryGetUser === 0) {
        try {
            const response = await callApi.get<AdminStartResponse>('admin/start');

            if (response.data.data.admin) {
                $user.login(response.data.data.admin);
            }

            if (response.data.data.permissions) {
                $user.setPermissions(response.data.data.permissions);
            }

            $user.tryGetUser += 1;
        } catch (error) {
            console.error('Error during auto-login:', error);
        }

        $app.stopLoading();
    }

    if (!$user.isAuth) {
        $app.stopLoading();
        if (to.name !== 'login') {
            return navigateTo('/login');
        }
    } else {
        $app.stopLoading();
        if (to.name === 'login') {
            return navigateTo('/');
        }
    }
});

