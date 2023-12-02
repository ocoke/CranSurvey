<script setup>
const localePath = useLocalePath()
const { t } = useI18n()
const ongoingLoading = ref(true)
const ongoingSurveysData = ref("")
const siteUsersLoading = ref(true)
const siteUsersData = ref("")
onMounted(async () => {
	// fetch data
	// POST /api/dash/ongoing
	const ongoingSurveys = await $fetch("/api/dash/ongoing", {
		method: "POST",
		body: JSON.stringify({
			token: sessionStorage.getItem("_cransurvey_token"),
		}),
	})

	if (ongoingSurveys.code == 0) {
		// fetch successfully
		ongoingSurveysData.value = t("dashboard.ongoing_surveys", ongoingSurveys.count)
	} else {
		ongoingSurveysData.value =
			t("dashboard.error_fetching_data") + " (" + t("error_codes." + ongoingSurveys.code) + ")"
	}

	ongoingLoading.value = false

	const siteUsers = await $fetch("/api/dash/users", {
		method: "POST",
		body: JSON.stringify({
			token: sessionStorage.getItem("_cransurvey_token"),
		}),
	})

	if (siteUsers.code == 0) {
		siteUsersData.value = t("dashboard.site_users", siteUsers.count)
	} else {
		siteUsersData.value =
			t("dashboard.error_fetching_data") + " (" + t("error_codes." + siteUsers.code) + ")"
	}

	siteUsersLoading.value = false
})

import "~/src/styles/dash.css"
</script>

<template>
	<h1 class="text-h4">{{ $t("dashboard.dashboard") }}</h1>
	<div class="card-group">
		<v-card :title="$t('dashboard.surveys')" :text="ongoingSurveysData" :loading="ongoingLoading" variant="outlined">
			<v-card-actions>
				<v-btn @click="navigateTo(localePath('/dash/surveys'))">{{ $t("dashboard.manage") }}</v-btn>
			</v-card-actions>
		</v-card>
		<v-card :title="$t('dashboard.users')" :text="siteUsersData" :loading="siteUsersLoading" variant="outlined">
			<v-card-actions>
				<v-btn @click="navigateTo(localePath('/dash/users'))">{{ $t("dashboard.manage") }}</v-btn>
			</v-card-actions>
		</v-card>
	</div>
</template>
