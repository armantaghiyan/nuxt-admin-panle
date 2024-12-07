export default defineNuxtRouteMiddleware((to, from) => {
    const $app = appStore();
    // const user = useUser();
    // if (!user.value && to.name !== 'login') {
    //     return navigateTo('/login');
    // }

    setTimeout(() => {
        $app.stopLoading();
    }, 4000);

    console.log('run')
});
