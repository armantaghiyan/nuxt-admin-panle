<script setup lang="ts">
import {Permissions} from "~/utils/models/enums";

const {fetchData, items, count, params, reFetchData} = useAdmin();
const {hasPermission} = usePermission();

onMounted(() => {
    fetchData();
});
</script>

<template>
    <div>
        <card :title="$t('app.filter')">
            <form @submit.prevent="reFetchData">
                <filter-content>
                    <text-input :title="$t('global.id')" v-model="params.id"/>
                    <text-input :title="$t('global.name')" v-model="params.name"/>
                    <text-input :title="$t('global.username')" v-model="params.username"/>
                </filter-content>

                <action-content>
                    <div class="flex gap-4">
                        <text-input :placeholder="$t('global.search')" class="sm:w-50 w-full" v-model="params.search"/>
                        <btn-search/>
                    </div>

                    <div class="flex gap-4">
                        <page-rows v-model="params.page_rows"/>

                        <nuxt-link v-if="hasPermission(Permissions.ADMIN_STORE)" href="/admin/create">
                            <btn-primary-add/>
                        </nuxt-link>
                    </div>
                </action-content>
            </form>

            <custom-table>
                <custom-thead>
                    <custom-tr>
                        <custom-th fixed :width="120" sort-key="id" v-model:sort="params.sort" v-model:sort-type="params.sort_type">{{ $t('global.id') }}</custom-th>
                        <custom-th>{{ $t('global.name') }}</custom-th>
                        <custom-th>{{ $t('global.username') }}</custom-th>
                        <custom-th :width="165" sort-key="last_login" v-model:sort="params.sort" v-model:sort-type="params.last_login">{{ $t('admin.last_login') }}</custom-th>
                        <custom-th :width="165" sort-key="created_at" v-model:sort="params.sort" v-model:sort-type="params.created_at">{{ $t('global.created_at') }}</custom-th>
                        <custom-th :width="165" sort-key="updated_at" v-model:sort="params.sort" v-model:sort-type="params.updated_at">{{ $t('global.updated_at') }}</custom-th>
                        <custom-th fixed :width="100">{{ $t('global.actions') }}</custom-th>
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
                            <nuxt-link v-if="hasPermission(Permissions.ADMIN_UPDATE)" :href="`/admin/create/${item.id}`">
                                <btn-edit/>
                            </nuxt-link>
                        </custom-td>
                    </custom-tr>
                </custom-tbody>
            </custom-table>

            <pagination v-model="params.page" :count="count" :page-rows="params.page_rows" @change="fetchData"/>
        </card>
    </div>
</template>