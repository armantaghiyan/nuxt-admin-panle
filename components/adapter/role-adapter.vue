<script setup lang="ts">
import type Role from "~/utils/models/Role";

const props = defineProps<{
    role: Role
    adminRoles: Role[]
}>();

const {toggleAccess} = useAccess();
const active = ref(false);
const canToggle = ref(true);

function isActive() {
    if (props.adminRoles.find(adminRole => adminRole.id === props.role.id)) {
        active.value = true;
    }
}

function toggleRole() {
    canToggle.value = false;
    showLoading();
    toggleAccess(props.role.id, () => {
        canToggle.value = true;
    });
}

onMounted(() => {
    isActive();
});
</script>

<template>
    <switch-input :title="$t(`roles.${role.name}`)" :href="`/access/${role.id}`" v-model="active" @on-click="toggleRole"/>
</template>