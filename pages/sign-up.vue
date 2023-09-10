<script setup>
import "~/src/styles/sign-in.css"
</script>

<template>
	<div class="signinPage">
		<h4 class="text-h4">{{ $t("signup.signup") }}</h4>
		<v-text-field :label="$t('signup.username')" v-model="username"></v-text-field>
		<v-text-field :label="$t('signup.password')" type="password" v-model="password"></v-text-field>
		<v-text-field :label="$t('signup.password_re')" type="password" v-model="password_re"></v-text-field>
		<v-btn variant="tonal" class="font-weight-bold" @click="sign">
			{{ $t("signup.continue") }}
		</v-btn>
	</div>
</template>

<script>
import md5 from "md5"
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
	name: "MyComponent",
	data() {
		return {
			username: "",
			password: "",
			password_re: "",
		}
	},
	methods: {
		async sign() {
			if (!this.username || !this.password) {
				toast.error(this.$t("signup.invalid_params"), toastCfg)
				return false
			}
			if (this.password_re != this.password) {
				toast.error(this.$t("signup.invalid_password"), toastCfg)
				return false
			}
			const hashPwd = md5(this.password)
			const rsp = await $fetch("/api/usr/reg", {
				method: "POST",
				body: JSON.stringify({
					id: this.username,
					pwd: hashPwd,
				}),
			})

			if (rsp && rsp.code == 0) {
				toast.success(this.$t("signup.success"), toastCfg)
				console.debug(rsp)
				sessionStorage.setItem("_cransurvey_token", rsp.token)
				sessionStorage.setItem("_cransurvey_usr", this.username)
				if (rsp.init) {
					toast.info(this.$t("signup.init"), toastCfg)
					setTimeout(() => {
						navigateTo(this.localePath("/dash"))
					}, 2500)
				} else {
					setTimeout(() => {
						navigateTo(this.localePath("/dash"))
					}, 2000)
				}
			} else {
				toast.error(this.$t("signup.error") + " (" + this.$t("error_codes." + rsp.code) + ")", toastCfg)
				console.warn(rsp)
			}
		},
	},
}
</script>
