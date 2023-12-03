<script setup>
import "~/src/styles/sign-in.css"
import md5 from "md5"
import { useToast } from "vue-toastification"
import toastCfg from "~/src/functions/toastCfg"
const { t, localePath } = useI18n()
const toast = useToast()
const username = ref("")
const password = ref("")
const sign = async () => {
	if (!username.value || !password.value) {
		toast.error(t("signin.invalid_params"), toastCfg)
		return false
	}
	const hashPwd = md5(password.value)
	const rsp = await $fetch("/api/usr/sign-in", {
		method: "POST",
		body: JSON.stringify({
			id: username.value,
			pwd: hashPwd,
		}),
	})

	if (rsp && rsp.code == 0) {
		toast.success(t("signin.success"), toastCfg)
		console.debug(rsp)
		sessionStorage.setItem("_cransurvey_token", rsp.token)
		sessionStorage.setItem("_cransurvey_usr", username.value)
		setTimeout(() => {
			navigateTo(localePath("/dash"))
		}, 2000)
	} else {
		toast.error(t("signin.error") + " (" + t("error_codes." + rsp.code) + ")", toastCfg)
		console.warn(rsp)
	}
}
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
