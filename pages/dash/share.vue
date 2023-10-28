<script setup lang="ts">
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
    <h1 class="text-h4">{{ $t("share.share") }}</h1>
	<div class="mainGroup"></div>
</template>
