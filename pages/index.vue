<script setup>
const { locale } = useI18n()
</script>

<template>
    <h1>{{ $t('welcome') }}</h1>
    <form>
      <select v-model="locale">
        <option value="en-US">English</option>
        <option value="zh-CN">简体中文</option>
      </select>
    </form>
</template>