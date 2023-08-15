<template>
    <h1>Dashboard</h1>
</template>
<script setup>
    const localePath = useLocalePath()
    const route = useRoute()
    if (process.client) {
        let token = sessionStorage.getItem("_cransurvey_token")
        if (!token) {
            navigateTo(localePath('/sign-in'))
        }
    }
</script>