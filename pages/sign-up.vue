<script setup>
import "~/src/styles/sign-in.css"
import md5 from "md5"
import { useToast } from "vue-toastification"
import toastCfg from "~/src/functions/toastCfg"
const { t, localePath } = useI18n()
const toast = useToast()

// page variables
const username = ref("")
const password = ref("")
const password_re = ref("")
const inviteCodeTab = ref(false)
const inviteCode = ref(null)
const loading = ref(false)

// sign up function
const sign = async () => {
	// set loading
	loading.value = true
	inviteCodeTab.value = false
	// check params
	if (!username.value || !password.value) {
		toast.error(t("signup.invalid_params"), toastCfg)
		loading.value = false
		return false
	}
	if (password_re.value != password.value) {
		toast.error(t("signup.invalid_password"), toastCfg)
		loading.value = false
		return false
	}
	const hashPwd = md5(password.value)

	// send request
	const rsp = await $fetch("/api/usr/sign-up", {
		method: "POST",
		body: JSON.stringify({
			id: username.value,
			pwd: hashPwd,
			icode: inviteCode.value,
		}),
	})

	if (rsp && rsp.code == 0) {
		// sign up successfully
		toast.success(t("signup.success"), toastCfg)
		loading.value = false
		sessionStorage.setItem("_cransurvey_token", rsp.token)
		sessionStorage.setItem("_cransurvey_usr", username.value)
		if (rsp.init) {
			toast.info(t("signup.init"), toastCfg)
			setTimeout(() => {
				navigateTo(localePath("/dash"))
			}, 2500)
		} else {
			setTimeout(() => {
				navigateTo(localePath("/dash"))
			}, 2000)
		}
	} else if (rsp.code == 1004) {
		// 1004: invalid invite code
		if (inviteCodeTab.value) {
			toast.error(t("signup.invalid_invite_code"), toastCfg)
			loading.value = false
			return false
		}
		inviteCodeTab.value = true
		loading.value = false
	} else {
		toast.error(t("signup.error") + " (" + t("error_codes." + rsp.code) + ")", toastCfg)
		console.warn(rsp)
		loading.value = false
	}
}
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
