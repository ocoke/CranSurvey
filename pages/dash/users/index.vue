<script setup>
const localePath = useLocalePath()
if (process.client) {
	const token = sessionStorage.getItem("_cransurvey_token")
	const username = sessionStorage.getItem("_cransurvey_usr")
	if (!token || !username) {
		navigateTo(localePath("/sign-in"))
	} else if (!sessionStorage.getItem("_cransurvey_token_lock")) {
		$fetch("/api/usr/token", {
			method: "POST",
			body: JSON.stringify({
				token: token,
			}),
		}).then((rsp) => {
			if (rsp.code == 0) {
				sessionStorage.setItem("_cransurvey_token_lock", true)
			} else {
				sessionStorage.removeItem("_cransurvey_token")
				sessionStorage.removeItem("_cransurvey_usr")
				navigateTo(localePath("/sign-in"))
			}
		})
	}
}
import "~/src/styles/dash.css"
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
		<v-card variant="outlined" style="margin: 20px auto; padding: 15px">
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
								@click="navigateTo(localePath('/dash/users/edit?username=' + username))"
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

<script>
import { useToast } from "vue-toastification"

const toast = useToast()
const toastCfg = {
	position: "top-right",
	timeout: 5000,
	closeOnClick: true,
	pauseOnFocusLoss: true,
	pauseOnHover: true,
	draggable: false,
	draggablePercent: 0.6,
	showCloseButtonOnHover: true,
	hideProgressBar: true,
	closeButton: "button",
	icon: true,
	rtl: false,
}
export default {
	data() {
		return {
			drawer: true,
			rail: true,
			siteUsersLoading: true,
			siteUsersData: "",
			siteUsers: [],
			siteAdmins: [],
		}
	},
	methods: {
		signout() {
			if (process.client) {
				sessionStorage.removeItem("_cransurvey_token")
				sessionStorage.removeItem("_cransurvey_usr")
				toast.success(this.$t("users.signout_success"), toastCfg)
				navigateTo(useLocalePath()("/sign-in"))
			}
		},
	},
	async mounted() {
		const siteUsers = await $fetch("/api/dash/users", {
			method: "POST",
			body: JSON.stringify({
				token: sessionStorage.getItem("_cransurvey_token"),
			}),
		})

		let uid = 0
		this.siteAdmins = siteUsers.admins

		for (const i in siteUsers.list) {
			uid++
			this.siteUsers.push({
				title: siteUsers.list[i],
				uid: uid,
			})
			// this.siteUsers.push({
			// 	type: "divider",
			// })
		}

		if (siteUsers.code == 0) {
			this.siteUsersData = this.$t("dashboard.site_users", siteUsers.count)
		} else {
			this.siteUsersData = this.$t("dashboard.error_fetching_data")
		}

		this.siteUsersLoading = false

		this.username = sessionStorage.getItem("_cransurvey_usr")
	},
}
</script>
<style>
.mainGroup {
	margin-top: 20px;
	padding: 10px;
}
</style>
