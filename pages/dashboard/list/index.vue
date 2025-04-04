<script setup lang="ts">
import BtnSearch from "~/components/btn/btn-search.vue";

const params = reactive({
    id: '',
    name: '',
    status: '',
    search: '',
    page_rows: 7,
});

function fetchData() {
    console.log('fetch data');
}

onMounted(() => {
    fetchData();
});
</script>

<template>
    <div>
        <card :title="$t('app.filter')">

            <filter-content>
                <text-input :title="$t('global.id')" v-model="params.id"/>
                <text-input :title="$t('global.name')" v-model="params.name"/>
                <select-input with-all v-model="params.status" :title="$t('global.status')" :options="[ {value: 1, label: 'option 1'}, {value: 2, label: 'option 2'}, {value: 3, label: 'option 3'}, {value: 4, label: 'option 4'}, {value: 5, label: 'option 5'},{value: 6, label: 'option 6'}, {value: 7, label: 'option 7'}, {value: 8, label: 'option 8'},{value: 9, label: 'option 9'},{value: 10, label: 'option 10'}, ]"/>
            </filter-content>

            <action-content>
                <div class="flex gap-4">
                    <text-input :placeholder="$t('global.search')" class="sm:w-50 w-full" v-model="params.search"/>
                    <btn-search @click="fetchData"/>
                </div>

                <div class="flex gap-4">
                    <page-rows v-model="params.page_rows" @on-change="fetchData"/>

                    <btn-primary-add/>
                </div>
            </action-content>

            <custom-table>
                <custom-thead>
                    <custom-tr>
                        <custom-th>{{ $t('global.id') }}</custom-th>
                        <custom-th>{{ $t('global.date') }}</custom-th>
                        <custom-th>{{ $t('global.customers') }}</custom-th>
                        <custom-th>{{ $t('global.status') }}</custom-th>
                        <custom-th>{{ $t('global.price') }}</custom-th>
                        <custom-th>{{ $t('global.actions') }}</custom-th>
                    </custom-tr>
                </custom-thead>
                <custom-tbody>
                    <custom-tr v-for="i in 7" class="border-b border-gray-5">
                        <custom-td>
                            <nuxt-link href="#" class="text-primary">#4498</nuxt-link>
                        </custom-td>
                        <custom-td>Oct 25, 2022, 10:48</custom-td>
                        <custom-td>
                            <user-data image="/images/icon/user.png" name="arman taghiyan" sub="test@gmail.com"/>
                        </custom-td>
                        <custom-td>
                            <div class="flex items-center gap-1 font-medium text-success">
                                <div class="size-3 rounded-full bg-success"></div>
                                <div>Paid</div>
                            </div>
                        </custom-td>
                    </custom-tr>
                </custom-tbody>
            </custom-table>
        </card>
    </div>
</template>