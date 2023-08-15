<script setup>
const { locale } = useI18n()
</script>

<template>
    <h1>{{ $t('welcome.welcome') }}</h1>
    <h2>{{ $t('welcome.gotoDashboard') }}</h2>
</template>