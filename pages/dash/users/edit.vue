<script setup>
import "~/src/styles/dash.css"
import { useToast } from "vue-toastification"
import md5 from "md5"
import toastCfg from "~/src/functions/toastCfg"

const localePath = useLocalePath()
const username = useRoute().query.username
const toast = useToast()
const { t } = useI18n()

const password = ref("")
const newPassword = ref("")
const newPasswordRe = ref("")

const updatePwd = async() => {
	if (!password.value || !newPassword.value || !newPasswordRe.value) {
		toast.error(t("signup.invalid_params"), toastCfg)
		return false
	}
	if (newPassword.value != newPasswordRe.value) {
		toast.error(t("signup.invalid_password"), toastCfg)
		return false
	}
	const updatePwdStatus = await $fetch("/api/usr/update", {
		method: "POST",
		body: JSON.stringify({
			token: sessionStorage.getItem("_cransurvey_token"),
			username: username,
			password: md5(password.value),
			newPassword: md5(newPassword.value),
			type: "pwd",
		}),
	})
	if (updatePwdStatus.code == 0) {
		toast.success(t("editUser.update_success"), toastCfg)
	} else {
		toast.error(
			t("editUser.update_error") + " (" + t("error_codes." + updatePwdStatus.code) + ")",
			toastCfg,
		)
	}
}
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
<style>
.mainGroup {
	margin-top: 20px;
	padding: 10px;
}
</style>
