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
	<h1 class="text-h4">{{ $t("settings.settings") }}</h1>

	<div class="mainGroup">
		<v-card variant="flat" style="margin: 10px auto 30px 0; padding: 10px" :loading="loading" :disabled="loading">
			<v-expansion-panels multiple>
				<v-expansion-panel>
					<v-expansion-panel-title>{{ $t("settings.site") }}</v-expansion-panel-title>
					<v-expansion-panel-text>
						<div style="margin-top: 20px">
							<v-text-field
								:label="$t('settings.site_title')"
								variant="outlined"
								placeholder="CranSurvey"
								v-model="config.site.title"
							></v-text-field>
						</div>
						<div style="margin-top: 10px">
							<v-text-field
								:label="$t('settings.site_url')"
								variant="outlined"
								placeholder="https://csur-preview.vercel.app"
								v-model="config.site.url"
							></v-text-field>
						</div>
					</v-expansion-panel-text>
				</v-expansion-panel>
				<v-expansion-panel>
					<v-expansion-panel-title>{{ $t("settings.users") }}</v-expansion-panel-title>
					<v-expansion-panel-text>
						<div>
							<v-switch
								:label="$t('settings.use_captcha_sign')"
								inset
								v-model="config.users.useCaptcha"
								disabled
							></v-switch>
						</div>
						<div>
							<v-switch :label="$t('settings.allow_signup')" inset v-model="config.users.allowSignUp"></v-switch>
						</div>

						<div style="margin-top: 10px" v-if="config.users.allowSignUp">
							<v-text-field
								:label="$t('settings.invite_code')"
								variant="outlined"
								placeholder=""
								v-model="config.users.inviteCode"
							></v-text-field>
						</div>
					</v-expansion-panel-text>
				</v-expansion-panel>
				<v-expansion-panel>
					<v-expansion-panel-title>{{ $t("settings.surveys") }}</v-expansion-panel-title>
					<v-expansion-panel-text>
						<div>
							<v-switch
								:label="$t('settings.use_captcha_survey')"
								inset
								v-model="config.surveys.useCaptcha"
								disabled
							></v-switch>
						</div>
					</v-expansion-panel-text>
				</v-expansion-panel>
				<v-expansion-panel>
					<v-expansion-panel-title>{{ $t("settings.ai") }}</v-expansion-panel-title>
					<v-expansion-panel-text>
						<div>
							<div style="margin-top: 10px">
							<v-text-field
								:label="$t('settings.ai_key')"
								variant="outlined"
								placeholder=""
								v-model="config.ai.key"
							></v-text-field>
						</div>
						</div>
					</v-expansion-panel-text>
				</v-expansion-panel>
				<v-expansion-panel disabled>
					<v-expansion-panel-title>{{ $t("settings.captcha") }}</v-expansion-panel-title>
					<v-expansion-panel-text></v-expansion-panel-text>
				</v-expansion-panel> </v-expansion-panels
		></v-card>
		<v-btn variant="outlined" @click="update">{{ $t("settings.update") }}</v-btn>
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
			config: {
				users: {},
				site: {},
				surveys: {},
				captcha: {},
				ai: {},
			},
			originalConfig: {
				users: {},
				site: {},
				surveys: {},
				captcha: {},
				ai: {},
			},
			loading: true,
		}
	},
	methods: {
		async update() {
			let noChanges = true
			for (const key in this.config) {
				if (typeof this.config[key] == "object") {
					for (const subKey in this.config[key]) {
						if (this.config[key][subKey] != this.originalConfig[key][subKey]) {
							noChanges = false
						}
					}
				} else if (this.config[key] != this.originalConfig[key]) {
					noChanges = false
				}
			}
			if (noChanges) {
				toast.info(this.$t("settings.no_changes"), toastCfg)
				return false
			}
			this.loading = true
			const updateSiteConfig = await $fetch("/api/config/set", {
				method: "POST",
				body: JSON.stringify({
					token: sessionStorage.getItem("_cransurvey_token"),
					data: this.config,
				}),
			})

			if (updateSiteConfig.code == 0) {
				toast.success(this.$t("editUser.update_success"), toastCfg)
			} else {
				toast.error(this.$t("editUser.update_failed"), toastCfg)
			}

			this.loadConfig()
		},
		async loadConfig() {
			const siteConfig = await $fetch("/api/config/get", {
				method: "POST",
				body: JSON.stringify({
					token: sessionStorage.getItem("_cransurvey_token"),
				}),
			})

			this.config = siteConfig.data

			if (!this.config.users) this.config.users = {}
			if (!this.config.site) this.config.site = {}
			if (!this.config.surveys) this.config.surveys = {}
			if (!this.config.captcha) this.config.captcha = {}
			if (!this.config.ai) this.config.ai = {}

			this.originalConfig = structuredClone(siteConfig.data)
			this.loading = false
		},
	},
	async mounted() {
		this.loading = true
		this.loadConfig()
	},
}
</script>
<style>
.mainGroup {
	margin-top: 20px;
	padding: 10px;
}
</style>
