<script setup>
import "~/src/styles/sign-in.css"
</script>

<template>
	<div class="signinPage">
		<h4 class="text-h4">{{ $t("signin.signin") }}</h4>
		<v-text-field :label="$t('signin.username')" v-model="username"></v-text-field>
		<v-text-field :label="$t('signin.password')" type="password" v-model="password"></v-text-field>

		<p>
			<v-btn variant="tonal" class="font-weight-bold" @click="sign">
				{{ $t("signin.continue") }}
			</v-btn>
			<v-btn
				variant="outlined"
				class="font-weight-bold"
				@click="navigateTo(useLocalePath()('/sign-up'))"
				style="margin-left: 0.6rem"
			>
				{{ $t("signin.or_signup") }}
			</v-btn>
		</p>
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
		}
	},
	methods: {
		async sign() {
			if (!this.username || !this.password) {
				toast.error(this.$t("signin.invalid_params"), toastCfg)
				return false
			}
			const hashPwd = md5(this.password)
			const rsp = await $fetch("/api/usr/login", {
				method: "POST",
				body: JSON.stringify({
					id: this.username,
					pwd: hashPwd,
				}),
			})

			if (rsp && rsp.code == 0) {
				toast.success(this.$t("signin.success"), toastCfg)
				console.debug(rsp)
				sessionStorage.setItem("_cransurvey_token", rsp.token)
				sessionStorage.setItem("_cransurvey_usr", this.username)
				setTimeout(() => {
					navigateTo(this.localePath("/dash"))
				}, 2000)
			} else {
				toast.error(this.$t("signin.error") + " (" + this.$t("error_codes." + rsp.code) + ")", toastCfg)
				console.warn(rsp)
			}
		},
	},
}
</script>
