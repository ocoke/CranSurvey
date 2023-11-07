<template>
	<footer>
		<p>
			&copy; 2023
			<NuxtLink style="color: unset; text-decoration: underline" to="https://github.com/ocoke/CranSurvey"
				>CranSurvey</NuxtLink
			>.
		</p>
		<p v-show="useI18n().locale.value != 'en-US'">{{ $t("footer.translate") }}</p>
	</footer>
</template>
<style>
footer {
	margin: 0 auto;
	text-align: center;
	padding: 15px;
	/* border-top: 1px solid #eee; */
	opacity: 0.8;
}
</style>
