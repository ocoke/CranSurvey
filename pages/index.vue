<script setup>
import "~/src/styles/index.css"
const localePath = useLocalePath()
</script>

<template>
	<div class="welcomePage">
		<h4 class="text-h4">{{ $t("welcome.welcome") }}</h4>
		<Nuxt-Link :to="localePath('/dash')"
			><v-btn variant="outlined">
				{{ $t("welcome.gotoDashboard") }}
			</v-btn></Nuxt-Link
		>
	</div>
</template>
