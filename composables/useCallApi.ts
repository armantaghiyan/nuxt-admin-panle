import axios from "axios";

export function useCallApi() {
    const config = useAppConfig();
    const pending = ref(false);
    const apiToken = useCookie('api_token');
    const $app = appStore();

    const callApi = axios.create({
        baseURL: config.baseURL,
        timeout: 15000,
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
        },
    });

    callApi.interceptors.request.use((config) => {
        pending.value = true;

        if (apiToken.value) {
            config.headers.Authorization = `Bearer ${apiToken.value}`;
        }

        return config;
    }, (error) => {
        pending.value = false;
        $app.hideLoading();

        return Promise.reject(error);
    });

    callApi.interceptors.response.use((response) => {
        $app.hideLoading();
        pending.value = false;

        return response;
    }, (error) => {
        $app.hideLoading();
        pending.value = false;

        return Promise.reject(error);
    });

    return {
        callApi,
        pending
    }
}