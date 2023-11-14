<script setup>
const localePath = useLocalePath()
const username = useRoute().query.username
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
	<h1 class="text-h4">{{ $t("editUser.editUser", { username }) }}</h1>
	<div class="mainGroup">
		<v-card variant="outlined">
			<v-card-title>{{ $t("editUser.password", { username }) }}</v-card-title>
			<v-card-text style="padding-bottom: 0">
				<v-text-field :label="$t('signup.password')" type="password" v-model="password"></v-text-field>
				<v-text-field
					:label="$t('editUser.enter_password', { username })"
					type="password"
					v-model="newPassword"
				></v-text-field>
				<v-text-field
					:label="$t('editUser.enter_password_re', { username })"
					type="password"
					v-model="newPasswordRe"
				></v-text-field>
				<v-card-actions style="padding-top: 0">
					<v-spacer></v-spacer>
					<v-btn variant="text" @click="updatePwd">{{ $t("editUser.update") }}</v-btn>
				</v-card-actions>
			</v-card-text>
		</v-card>
	</div>
</template>
<script>
import { useToast } from "vue-toastification"
import md5 from "md5"
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
			password: "",
			newPassword: "",
			newPasswordRe: "",
		}
	},
	methods: {
		async updatePwd() {
			if (!this.password || !this.newPassword || !this.newPasswordRe) {
				toast.error(this.$t("signup.invalid_params"), toastCfg)
				return false
			}
			if (this.newPassword != this.newPasswordRe) {
				toast.error(this.$t("signup.invalid_password"), toastCfg)
				return false
			}
			// todo
			const updatePwdStatus = await $fetch("/api/usr/update", {
			    method: "POST",
			    body: JSON.stringify({
			        token: sessionStorage.getItem("_cransurvey_token"),
			        username: useRoute().query.username,
			        password: md5(this.password),
			        newPassword: md5(this.newPassword),
			        type: "pwd"
			    }),
			})
			if (updatePwdStatus.code == 0) {
				toast.success(this.$t("editUser.update_success"), toastCfg)
			} else {
				toast.error(this.$t("editUser.update_error") + ' (' + this.$t("error_codes." + updatePwdStatus.code) + ')', toastCfg)
			}
		},
	},
	async mounted() {},
}
</script>
<style>
.mainGroup {
	margin-top: 20px;
	padding: 10px;
}
</style>
