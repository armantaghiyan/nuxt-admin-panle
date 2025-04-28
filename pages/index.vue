<script setup lang="ts">
const {logout} = useAdmin();
</script>

<template>
    <div>
        <btn-primary @click="logout">Logout</btn-primary>
    </div>
</template>