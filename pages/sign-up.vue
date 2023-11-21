<script setup>
import "~/src/styles/sign-in.css"
</script>

<template>
	<v-card class="signinPage" variant="text" :loading="loading" :disabled="loading">
		<h4 class="text-h4">{{ $t("signup.signup") }}</h4>
		<v-text-field :label="$t('signup.username')" v-model="username"></v-text-field>
		<v-text-field :label="$t('signup.password')" type="password" v-model="password"></v-text-field>
		<v-text-field :label="$t('signup.password_re')" type="password" v-model="password_re"></v-text-field>
		<p>
			<v-btn variant="tonal" class="font-weight-bold" @click="sign">
				{{ $t("signup.continue") }}
			</v-btn>
			<v-btn
				variant="outlined"
				class="font-weight-bold"
				@click="navigateTo(useLocalePath()('/sign-in'))"
				style="margin-left: 0.6rem"
			>
				{{ $t("signup.or_signin") }}
			</v-btn>
		</p>
	</v-card>
	<v-dialog width="500" v-model="inviteCodeTab">
		<v-card>
			<v-card-title>Invite Code</v-card-title>
			<v-card-subtitle>The site required an invite code to sign up.</v-card-subtitle>
			<v-card-text>
				<v-text-field
					:label="$t('signup.invite_code')"
					variant="outlined"
					placeholder=""
					v-model="inviteCode"
					hide-details="auto"
				></v-text-field>
			</v-card-text>
			<v-card-actions>
				<v-spacer></v-spacer>
				<v-btn color="primary" @click="inviteCodeTab = false">Close</v-btn>
				<v-btn color="primary" @click="sign(1)">{{ $t("signup.continue") }}</v-btn>
			</v-card-actions>
		</v-card>
	</v-dialog>
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
			inviteCodeTab: false,
			inviteCode: null,
			loading: false,
		}
	},
	methods: {
		async sign(inviteCode) {
			this.loading = true
			this.inviteCodeTab = false
			if (!this.username || !this.password) {
				toast.error(this.$t("signup.invalid_params"), toastCfg)
				this.loading = false
				return false
			}
			if (this.password_re != this.password) {
				toast.error(this.$t("signup.invalid_password"), toastCfg)
				this.loading = false
				return false
			}
			const hashPwd = md5(this.password)
			const rsp = await $fetch("/api/usr/sign-up", {
				method: "POST",
				body: JSON.stringify({
					id: this.username,
					pwd: hashPwd,
					icode: inviteCode ? this.inviteCode : null,
				}),
			})

			if (rsp && rsp.code == 0) {
				toast.success(this.$t("signup.success"), toastCfg)
				this.loading = false
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
			} else if (rsp.code == 1004) {
				if (inviteCode == 1) {
					toast.error(this.$t("signup.invalid_invite_code"), toastCfg)
					this.loading = false
					return false
				}
				this.inviteCodeTab = true
				this.loading = false
			} else {
				toast.error(this.$t("signup.error") + " (" + this.$t("error_codes." + rsp.code) + ")", toastCfg)
				console.warn(rsp)
				this.loading = false
			}
		},
	},
}
</script>
