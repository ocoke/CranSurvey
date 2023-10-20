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
	<h1 class="text-h4">{{ $t("results.results") }}{{ surveyTitle }}</h1>
	<div class="mainGroup">
		<p style="font-family: monospace !important" class="text-subtitle-1">{{ surveyText }}</p>
		<v-card variant="outlined" style="margin: 20px auto; padding: 15px">
			<v-expansion-panels>
				<v-expansion-panel v-for="asw in surveyAnswers">
					<v-expansion-panel-title>
						<template v-slot:default="{ expanded }">
							<v-row no-gutters>
								<v-col cols="4" class="d-flex justify-start">
									<code>{{ $t("results.from_user", { usr: asw.usr.slice(-6) }) }}</code>
								</v-col>
								<v-col cols="8" class="text-grey">
									<v-fade-transition leave-absolute>
										<span v-if="expanded"> #{{ asw.id.slice(-6) }} </span>
									</v-fade-transition>
								</v-col>
							</v-row>
						</template>
					</v-expansion-panel-title>
					<v-expansion-panel-text>
						<p>{{ $t("results.collected_at", { date: new Date(asw.created_at) }) }}</p>
						<!-- <div v-for="aw in asw.ans" style="margin-top: 1.5rem;">
							<v-text-field :label="aw.answer" variant="outlined" :value="aw.answer"></v-text-field>
						</div> -->
						<v-table style="margin-top: 1.5rem">
							<thead>
								<tr>
									<th class="text-left">
										{{ $t("results.question") }}
									</th>
									<th class="text-left">
										{{ $t("results.answer") }}
									</th>
									<th class="text-left">
										{{ $t("results.type") }}
									</th>
								</tr>
							</thead>
							<tbody>
								<tr v-for="(item, index) in asw.ans" :key="item.name">
									<!-- <td>{{ surveyQuestions[index].question }}</td> -->
									<td>
										<v-dialog width="500">
											<template v-slot:activator="{ props }">
												<p v-bind="props">{{ surveyQuestions[index].question }}</p>
											</template>

											<template v-slot:default="{ isActive }">
												<v-card :title="$t('results.results')">
													<v-card-text>
														{{ surveyQuestions[index].question }}
													</v-card-text>
													<v-card-actions>
														<v-spacer></v-spacer>
														<v-btn :text="$t('results.close')" @click="isActive.value = false"></v-btn>
													</v-card-actions>
												</v-card>
											</template>
										</v-dialog>
									</td>
									<td>
										<v-dialog width="500">
											<template v-slot:activator="{ props }">
												<p v-bind="props" style="cursor: pointer;">
													<span v-if="surveyQuestions[index].type == 'multiple' && surveyQuestions[index].options && surveyQuestions[index].options.optionsData">{{ surveyQuestions[index].options.optionsData[item.answer] }}</span>
													<span v-else-if="surveyQuestions[index].type == 'checkboxes'" style="text-decoration: underline;">{{ $t('results.details') }}</span>
													<span v-else>{{ desc(item.answer) }}</span>
												</p>
											</template>

											<template v-slot:default="{ isActive }">
												<v-card :title="$t('results.results')">
													<v-card-text>
														<span v-if="surveyQuestions[index].type == 'multiple' && surveyQuestions[index].options && surveyQuestions[index].options.optionsData">{{ surveyQuestions[index].options.optionsData[item.answer] }}</span>
														<div v-else-if="surveyQuestions[index].type == 'checkboxes' && surveyQuestions[index].options && surveyQuestions[index].options.optionsData">
															<v-checkbox hide-details disabled class="viewing-checkboxes" :label="i" v-model="item.answer[index]" v-for="(i, index) in surveyQuestions[index].options.optionsData"></v-checkbox>
														</div>
														<span v-else>{{ item.answer }}</span>
													</v-card-text>

													<v-card-actions>
														<v-spacer></v-spacer>

														<v-btn :text="$t('results.close')" @click="isActive.value = false"></v-btn>
													</v-card-actions>
												</v-card>
											</template>
										</v-dialog>
									</td>
									<td>
										{{ $t('new.types.' + surveyQuestions[item.id].type) }}
									</td>
								</tr>
							</tbody>
						</v-table>
						<v-card-actions>
							<v-spacer></v-spacer>
							<v-btn variant="text" color="primary" @click="navigateTo(localePath('/dash/edit?id='))">
								{{ $t("results.delete") }}
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
			surveyTitle: "",
			surveyAnswers: [],
			surveyQuestions: [],
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
		desc(text) {
			if (typeof text != "string") return text
			if (text.length <= 100) return text
			text = text.slice(0, 100)
			if (text.endsWith(" ")) {
				return text.slice(0, 99) + "..."
			} else {
				return text + "..."
			}
		}
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

			this.surveyText = this.$t("results.survey_preview", {
				count: surveyData.answers.length,
				id: surveyData.survey.id,
				time: "`" + new Date(surveyData.survey.created_at) + "`",
				title: surveyData.survey.title,
			})
			this.surveyAnswers = surveyData.answers
			this.surveyQuestions = surveyData.survey.questions

			this.surveyTitle = ': "' + surveyData.survey.title + '"'
		} else {
			this.surveyResp = {}
			this.surveyText = this.$t("results.no_results")
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
