<script setup>
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
	<h1 class="text-h4">{{ $t("surveys.surveys") }}</h1>
	<v-btn variant="outlined" @click="navigateTo(localePath('/dash/new'))" style="margin-top: 20px; margin-left: 8px">{{
		$t("new.new")
	}}</v-btn>
	<div class="mainGroup">
		<code
			class="text-subtitle-1"
			style="font-family: monospace !important"
			v-text="$t('users.signed', { username: '`' + username + '`' })"
		></code>
		<p class="text-subtitle-1">{{ ongoingSurveysData }}</p>
		<v-card variant="outlined" style="margin: 20px auto; padding: 15px">
			<v-expansion-panels>
				<v-expansion-panel v-for="survey in surveys">
					<v-expansion-panel-title>
						<template v-slot:default="{ expanded }">
							<v-row no-gutters>
								<v-col cols="4" class="d-flex justify-start">
									{{ survey.title }}
								</v-col>
								<v-col cols="8" class="text-grey">
									<v-fade-transition leave-absolute>
										<span v-if="expanded"> #{{ survey.id.slice(-6) }} </span>
									</v-fade-transition>
								</v-col>
							</v-row>
						</template>
					</v-expansion-panel-title>
					<v-expansion-panel-text>
						<v-table>
							<thead>
								<tr>
									<th class="text-left">
										{{ $t("surveys.description") }}
									</th>
									<th class="text-left">
										{{ $t("surveys.enabled") }}
									</th>
									<th class="text-left">
										{{ $t("results.type") }}
									</th>
									<th class="text-left">
										{{ $t("surveys.number_of_questions") }}
									</th>
									<th class="text-left">
										{{ $t("surveys.created_at") }}
									</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>{{ survey.description }}</td>
									<td>{{ $t("surveys.enable_" + (survey.enable || false).toString()) }}</td>
									<td>{{ $t("new.q1_" + survey.type) }}</td>
									<td>{{ survey.questions.length }}</td>
									<td>{{ new Date(survey.created_at) }}</td>
								</tr>
							</tbody>
						</v-table>

						<v-card-actions>
							<v-spacer></v-spacer>
							<v-btn variant="text" color="primary" @click="navigateTo(localePath('/dash/edit?id=' + survey.id))">
								{{ $t("edit.edit") }}
							</v-btn>
							<v-btn variant="text" color="primary" @click="navigateTo(localePath('/dash/results?id=' + survey.id))">
								{{ $t("results.results") }}
							</v-btn>
						</v-card-actions>
					</v-expansion-panel-text>
				</v-expansion-panel>
			</v-expansion-panels>
		</v-card>
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
			surveys: [],
			ongoingLoading: true,
			ongoingSurveysData: "",
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


		const ongoingSurveys = await $fetch("/api/dash/ongoing", {
			method: "POST",
			body: JSON.stringify({
				token: sessionStorage.getItem("_cransurvey_token"),
				isdash: true,
			}),
		})

		if (ongoingSurveys.code == 0) {
			this.ongoingSurveysData = this.$t("dashboard.ongoing_surveys", ongoingSurveys.count)
		} else {
			this.ongoingSurveysData = this.$t("dashboard.error_fetching_data")
		}

		this.ongoingLoading = false

		//   for (let i in ongoingSurveys.list) {
		//     this.surveys.push({
		//         title: ongoingSurveys.list[i].title,
		//     })
		//   }

		this.surveys = ongoingSurveys.list

		this.username = sessionStorage.getItem("_cransurvey_usr")
	},
}
</script>
<style scoped>
.mainGroup {
	margin-top: 10px;
	padding: 10px;
}
</style>
