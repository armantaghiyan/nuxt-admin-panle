<script setup>
const {show, rolePermissions, rolePermissionLoaded} = useAccess();

const route = useRoute();
const $user = userStore();

onMounted(() => {
    show(route.params.id);
});
</script>

<template>
    <card :title="$t('access.permissions')">
        <div v-if="rolePermissionLoaded" class="px-6 pb-6">
            <permission-adapter v-for="permission in $user.permissions" :permission="permission" :role-permissions="rolePermissions" :role-id="route.params.id"/>
        </div>
    </card>
</template>