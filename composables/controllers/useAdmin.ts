import type {AdminIndexResponse, AdminLoginResponse, AdminShowResponse} from "~/utils/api/admin";
import {showLoading} from "~/utils/helper";
import type Admin from "~/utils/models/Admin";

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

    const items = ref<Admin[]>([]);
    const count = ref(0);
    const params = reactive({
        id: '',
        name: '',
        username: '',

        search: '',
        page_rows: 7,
        page: 1,
        sort: 'id',
        sort_type: 'desc',
    });

    function fetchData() {
        callApi.get<AdminIndexResponse>('/admin', {
            params: params,
        }).then(res => {
            items.value = res.data.data.items;
            count.value = res.data.data.count;
        });
    }

    function reFetchData() {
        params.page = 1;
        fetchData();
    }

    watch(() => params.sort, reFetchData);
    watch(() => params.sort_type, reFetchData);
    watch(() => params.page_rows, reFetchData);

    //==================================================================================================================

    const item = ref<Admin>();

    function show(id: string|number) {
        callApi.get<AdminShowResponse>(`/admin/${id}`, {
            params: params,
        }).then(res => {
            item.value = res.data.data.item;
        });
    }


    return {
        loginForm,
        login,
        logout,

        fetchData,
        items,
        count,
        params,
        reFetchData,

        item,
        show,
    }
}