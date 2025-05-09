<script setup lang="ts">
const {fetchData, items, count, params, reFetchData} = useAdmin();

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
                <text-input :title="$t('global.username')" v-model="params.username"/>
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
                        <custom-th :width="180">{{ $t('global.name') }}</custom-th>
                        <custom-th :width="180">{{ $t('global.username') }}</custom-th>
                        <custom-th :width="180">{{ $t('admin.last_login') }}</custom-th>
                        <custom-th :width="180">{{ $t('global.created_at') }}</custom-th>
                        <custom-th :width="180">{{ $t('global.updated_at') }}</custom-th>
                        <custom-th fixed :width="160">{{ $t('global.actions') }}</custom-th>
                    </custom-tr>
                </custom-thead>
                <custom-tbody>
                    <custom-tr v-for="item in items" :key="item.id" class="border-b border-gray-5">
                        <custom-td :copy="item.id">
                            <id-formater :id="item.id"/>
                        </custom-td>
                        <custom-td>{{ item.name }}</custom-td>
                        <custom-td>{{ item.username }}</custom-td>
                        <custom-td>{{ item.last_login }}</custom-td>
                        <custom-td>{{ item.created_at }}</custom-td>
                        <custom-td>{{ item.updated_at }}</custom-td>
                        <custom-td class="flex">
                            <btn-see :href="`/admin/${item.id}`"/>
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