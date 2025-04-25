import axios from "axios";

export function useCallApi() {
    const config = useAppConfig();
    const pending = ref(false);

    const callApi = axios.create({
        baseURL: config.baseURL,
        timeout: 15000,
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
        },
    });

    callApi.interceptors.request.use(function (config) {
        pending.value = true;

        return config;
    }, (error) => {
        pending.value = false;

        return Promise.reject(error);
    });

    callApi.interceptors.response.use(function (response) {
        pending.value = false;

        return response;
    }, (error) => {
        pending.value = false;

        return Promise.reject(error);
    });

    return {
        callApi,
        pending
    }
}