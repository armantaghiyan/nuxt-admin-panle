export default function useList() {
    const {callApi} = useCallApi();

    const items = ref<any[]>([]);
    const count = ref(2500);
    const params = reactive({
        id: '',
        name: '',
        status: '',

        search: '',
        page_rows: 7,
        page: 1,
        sort: 'id',
        sort_type: 'desc',
    });

    function fetchData() {
        callApi.get('/data.json')
            .then(res => {
                items.value = res.data;
            });
    }

    function reFetchData() {
        params.page = 1;
        fetchData();
    }

    watch(() => params.sort, reFetchData);
    watch(() => params.sort_type, reFetchData);
    watch(() => params.page_rows, reFetchData);

    return {
        fetchData,
        items,
        params,
        count,
        reFetchData,
    }
}