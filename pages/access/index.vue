<script setup lang="ts">
import {Permissions} from "~/utils/models/enums";

const {fetchData, items, destroy} = useAccess();
const {hasPermission} = usePermission();

function destroyRole(roleId: number, index: number){
    destroy(roleId, () => {
        items.value.splice(index, 1)
    });
}

onMounted(() => {
    fetchData();
});
</script>

<template>
    <div>
        <card :title="$t('menu.access')">
            <action-content>
                <div class="flex gap-4"></div>

                <div class="flex gap-4">
                    <nuxt-link v-if="hasPermission(Permissions.ROLE_STORE)"  href="/access/create">
                        <btn-primary-add/>
                    </nuxt-link>
                </div>
            </action-content>

            <custom-table>
                <custom-thead>
                    <custom-tr>
                        <custom-th fixed :width="120">{{ $t('global.id') }}</custom-th>
                        <custom-th>{{ $t('global.name') }}</custom-th>
                        <custom-th>{{ $t('global.created_at') }}</custom-th>
                        <custom-th>{{ $t('global.updated_at') }}</custom-th>
                        <custom-th>{{ $t('global.actions') }}</custom-th>
                    </custom-tr>
                </custom-thead>
                <custom-tbody>
                    <custom-tr v-for="(item, index) in items" :key="item.id" class="border-b border-gray-5">
                        <custom-td :copy="item.id">
                            <id-formater :id="item.id"/>
                        </custom-td>
                        <custom-td>{{ item.name }}</custom-td>
                        <custom-td>{{ item.created_at }}</custom-td>
                        <custom-td>{{ item.updated_at }}</custom-td>
                        <custom-td class="flex">
                            <btn-see v-if="hasPermission(Permissions.ROLE_UPDATE)" :href="`/access/${item.id}`"/>
                            <btn-delete v-if="hasPermission(Permissions.ROLE_DESTROY)" @click="destroyRole(item.id, index)"/>
                            <nuxt-link v-if="hasPermission(Permissions.ADMIN_UPDATE)" :href="`/access/create/${item.id}`">
                                <btn-edit/>
                            </nuxt-link>
                        </custom-td>
                    </custom-tr>
                </custom-tbody>
            </custom-table>

        </card>
    </div>
</template>