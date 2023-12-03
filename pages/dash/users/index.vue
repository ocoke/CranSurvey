<script setup>
import "~/src/styles/dash.css"
import { useToast } from "vue-toastification"
import toastCfg from "~/src/functions/toastCfg"

const toast = useToast()
const { t } = useI18n()
const localePath = useLocalePath()

const siteUsersLoading = ref(true)
const siteUsersData = ref("")
const siteUsers = ref([])
const siteAdmins = ref([])
const loading = ref(true)

// func: signout
const signout = () => {
	if (process.client) {
		sessionStorage.removeItem("_cransurvey_token")
		sessionStorage.removeItem("_cransurvey_usr")
		toast.success(t("users.signout_success"), toastCfg)
		navigateTo(useLocalePath()("/sign-in"))
	}
}

// onmounted: get users list
onMounted(async () => {
	const siteUsers = await $fetch("/api/dash/users", {
		method: "POST",
		body: JSON.stringify({
			token: sessionStorage.getItem("_cransurvey_token"),
		}),
	})

	let uid = 0
	siteAdmins.value = siteUsers.admins

	for (const i in siteUsers.list) {
		uid++
		siteUsers.value.push({
			title: siteUsers.list[i],
			uid: uid,
		})
	}

	if (siteUsers.code == 0) {
		siteUsersData.value = t("dashboard.site_users", siteUsers.count)
	} else {
		siteUsersData.value = t("dashboard.error_fetching_data")
	}

	siteUsersLoading.value = false

	loading.value = false
})
</script>

<template>
	<h1 class="text-h4">{{ $t("users.users") }}</h1>
	<div class="mainGroup">
		<code
			class="text-subtitle-1"
			style="font-family: monospace !important"
			v-text="$t('users.signed', { username: '`' + username + '`' })"
		></code>
		<p class="text-subtitle-1">{{ siteUsersData }}</p>
		<v-card variant="flat" style="margin: 20px auto; padding: 15px" :loading="loading">
			<v-expansion-panels>
				<v-expansion-panel v-for="user in siteUsers">
					<v-expansion-panel-title>
						<template v-slot:default="{ expanded }">
							<v-row no-gutters>
								<v-col cols="4" class="d-flex justify-start">
									<code>{{ user.title }}</code>
								</v-col>
								<v-col cols="8" class="text-grey">
									<v-fade-transition leave-absolute>
										<span v-if="expanded"> #{{ user.uid }} </span>
									</v-fade-transition>
								</v-col>
							</v-row>
						</template>
					</v-expansion-panel-title>
					<v-expansion-panel-text>
						<v-card-actions>
							<v-spacer></v-spacer>
							<v-btn
								variant="text"
								color="primary"
								@click="navigateTo(localePath('/dash/users/edit?username=' + user.title))"
								v-if="user.title == username || siteAdmins.includes(username)"
							>
								{{ $t("edit.edit") }}
							</v-btn>
						</v-card-actions>
					</v-expansion-panel-text>
				</v-expansion-panel>
			</v-expansion-panels></v-card
		>
		<v-btn variant="outlined" @click="signout">{{ $t("users.signout") }}</v-btn>
	</div>
</template>
<style>
.mainGroup {
	margin-top: 20px;
	padding: 10px;
}
</style>
