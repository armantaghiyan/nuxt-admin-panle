import type {AdminLoginResponse} from "~/utils/api/admin";
import {showLoading} from "~/utils/helper";

export default function useAdmin() {
    const router = useRouter();
    const $user = userStore();
    const apiToken = useCookie('api_token', {
        maxAge: 60 * 60 * 24 * 7,
    });

    //==================================================================================================================
    const {callApi} = useCallApi();

    const loginForm = reactive({
        username: '',
        password: '',
    });

    function login() {
        showLoading();
        callApi.post<AdminLoginResponse>('admin/login', loginForm).then(res => {
            $user.login(res.data.data.admin);
            apiToken.value = res.data.data.api_token;
            router.replace({path: '/'});
        });
    }

    //==================================================================================================================

    function logout() {
        showLoading();
        callApi.post<AdminLoginResponse>('admin/logout', loginForm).then(res => {
            $user.logout();
            apiToken.value = null;
            router.replace({path: '/login'});
        });
    }

    //==================================================================================================================

    return {
        loginForm,
        login,
        logout
    }
}