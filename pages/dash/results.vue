<script setup>
const localePath = useLocalePath()
if (process.client) {
	const token = sessionStorage.getItem("_cransurvey_token")
	const username = sessionStorage.getItem("_cransurvey_usr")
	if (!token || !username) {
		navigateTo(localePath("/sign-in"))
	}
}
import "~/src/styles/dash.css"
</script>

<template>
	<h1 class="text-h4">{{ $t("results.results") }}</h1>
	<div class="mainGroup">
		<p class="text-subtitle-1">{{ surveyText }}</p>
		<v-card variant="outlined" style="margin: 20px auto; padding: 15px">
			<v-expansion-panels>
				<v-expansion-panel v-for="survey in []">
					<v-expansion-panel-title>
						<template v-slot:default="{ expanded }">
							<v-row no-gutters>
								<v-col cols="4" class="d-flex justify-start"> Survey </v-col>
								<v-col cols="8" class="text-grey">
									<v-fade-transition leave-absolute>
										<span v-if="expanded"> #1 </span>
									</v-fade-transition>
								</v-col>
							</v-row>
						</template>
					</v-expansion-panel-title>
					<v-expansion-panel-text>
						<p>Result #1</p>
						<v-card-actions>
							<v-spacer></v-spacer>
							<v-btn variant="text" color="primary" @click="navigateTo(localePath('/dash/edit?id='))">
								{{ $t("edit.edit") }}
							</v-btn>
							<v-btn variant="text" color="primary" @click="navigateTo(localePath('/dash/results?id='))">
								{{ $t("results.results") }}
							</v-btn>
						</v-card-actions>
					</v-expansion-panel-text>
				</v-expansion-panel>
			</v-expansion-panels>
		</v-card>
		<v-btn variant="outlined" @click="signout">{{ $t("users.signout") }}</v-btn>
	</div>
</template>

<script>
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
	data() {
		return {
			drawer: true,
			rail: true,
			surveyResp: {},
			surveyText: "",
		}
	},
	methods: {
		signout() {
			if (process.client) {
				sessionStorage.removeItem("_cransurvey_token")
				sessionStorage.removeItem("_cransurvey_usr")
				toast.success(this.$t("users.signout_success"), toastCfg)
				navigateTo(useLocalePath()("/sign-in"))
			}
		},
	},
	async mounted() {
		const surveyData = await $fetch("/api/survey/result", {
			method: "POST",
			body: JSON.stringify({
				token: sessionStorage.getItem("_cransurvey_token"),
				uniqueId: useRoute().query.id,
			}),
		})

		if (surveyData.code == 0) {
			this.surveyResp = surveyData
			this.surveyText = this.$t("results.success")
		} else {
			this.surveyResp = {}
			this.surveyText = this.$t("dashboard.error_fetching_data")
		}

		this.ongoingLoading = false

		//   for (let i in ongoingSurveys.list) {
		//     this.surveys.push({
		//         title: ongoingSurveys.list[i].title,
		//     })
		//   }

		this.username = sessionStorage.getItem("_cransurvey_usr")
	},
}
</script>
<style>
.mainGroup {
	margin-top: 20px;
	padding: 10px;
}
</style>
