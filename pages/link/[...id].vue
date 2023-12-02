<template>
	<div v-if="linkResp.code == 0" class="center-container">
		<div class="main">
			<v-card style="box-shadow: none; padding: 10px 6px 16px 6px" color="light-green-lighten-4">
				<v-card-title style="font-size: 1.5rem">{{ pageInfo.title }}</v-card-title>
				<v-card-text style="opacity: 0.7; padding-bottom: 0.5rem">{{ pageInfo.description }}</v-card-text>
				<v-card-text class="subtitle-text">
                    <v-divider></v-divider>
                </v-card-text>
			</v-card>
		</div>
	</div>
</template>
<script setup>
const id = useRoute().params.id.join("/")
const linkResp = ref(await $fetch("/api/link/get?id=" + id))
const linkData = ref(linkResp.value.data)
const lang = useI18n().locale.value.replace("-", "_")
const pageInfo = ref({})
if (linkData.value.title && linkData.value.title[lang]) pageInfo.value.title = linkData.value.title[lang]
else pageInfo.value.title = linkData.value.title[linkData.value.default_lang]
if (linkData.value.description && linkData.value.description[lang]) pageInfo.value.description = linkData.value.description[lang]
else pageInfo.value.description = linkData.value.description[linkData.value.default_lang]
</script>
<style>
.main {
	max-width: 650px;
	margin: 10rem auto;
	padding: 10px 15px;
}
</style>
