<script setup lang="ts">
const {fetchData, items, params, count, reFetchData} = useList();

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
                    <btn-search @click="reFetchData"/>
                </div>

                <div class="flex gap-4">
                    <page-rows v-model="params.page_rows"/>

                    <btn-primary-add/>
                </div>
            </action-content>

            <custom-table>
                <custom-thead>
                    <custom-tr>
                        <custom-th fixed :width="180" sort-key="id" v-model:sort="params.sort" v-model:sort-type="params.sort_type">{{ $t('global.id') }}</custom-th>
                        <custom-th :width="180" sort-key="date" v-model:sort="params.sort" v-model:sort-type="params.sort_type">{{ $t('global.date') }}</custom-th>
                        <custom-th :width="280">{{ $t('global.customers') }}</custom-th>
                        <custom-th>{{ $t('global.status') }}</custom-th>
                        <custom-th sort-key="price" v-model:sort="params.sort" v-model:sort-type="params.sort_type">{{ $t('global.price') }}</custom-th>
                        <custom-th fixed :width="160">{{ $t('global.actions') }}</custom-th>
                    </custom-tr>
                </custom-thead>
                <custom-tbody>
                    <custom-tr v-for="item in items" class="border-b border-gray-5">
                        <custom-td :copy="item.id">
                            <id-formater :id="item.id"/>
                        </custom-td>
                        <custom-td>{{ item.date }}</custom-td>
                        <custom-td>
                            <user-data :image="item.user?.image" :name="item.user?.name" :sub="item.user?.email"/>
                        </custom-td>
                        <custom-td>
                            <badge type="label" :theme="item.status_text">{{ item.status }}</badge>
                        </custom-td>
                        <custom-td>{{item.price}}</custom-td>
                        <custom-td class="flex">
                            <btn-delete/>
                            <btn-see href="/"/>
                            <option-menu :width="160" position="auto" :top="40">
                                <template #button>
                                    <btn-option/>
                                </template>

                                <div class="p-2">
                                    <btn-clickable>{{$t('global.edit')}}</btn-clickable>
                                    <btn-clickable>{{$t('global.update')}}</btn-clickable>
                                </div>
                            </option-menu>
                        </custom-td>
                    </custom-tr>
                </custom-tbody>
            </custom-table>

            <pagination v-model="params.page" :count="count" :page-rows="params.page_rows" @change="fetchData"/>
        </card>
    </div>
</template>