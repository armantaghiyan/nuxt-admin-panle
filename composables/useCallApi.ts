import axios from "axios";

export function useCallApi() {
    const config = useAppConfig();
    const pending = ref(false);
    const apiToken = useCookie('api_token');
    const $app = appStore();
    const lang = useCookie('i18n_redirected');

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

        config.headers['Accept-Language'] = lang.value;

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

        try {
            if(error?.response?.data?.result === 'error_validation'){
                addErrorToInput(error?.response?.data?.errors);
            }else if(error?.response?.data?.result === 'error_message'){
                errorToast(error?.response?.data?.message);
            }
        }catch (e) {}

        return Promise.reject(error);
    });


    function addErrorToInput(errors: object){
        Object.entries(errors).map(error => {
            const id = error[0];
            const message = error[1][error[1].length - 1];

            const element = document.getElementById(id);
            if(element){
                const errorMessageElement = element.querySelector('.error-message');
                if(!errorMessageElement){
                    const newDiv = document.createElement('div');
                    newDiv.textContent = message;
                    newDiv.classList.add('error-message');
                    element.appendChild(newDiv);

                    const inputChild = element.querySelector('input');
                    if (inputChild){
                        inputChild.classList.add('error-input');
                    }
                }
            }
        })
    }

    return {
        callApi,
        pending
    }
}