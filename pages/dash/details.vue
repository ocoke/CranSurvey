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
	<h1 class="text-h4">{{ $t("results.results") }}</h1>
	<div class="card-group results">
		<v-card :title="$t('results.country')" variant="outlined" :loading="chartLoading">
			<v-card-text style="max-height: 450px">
				<Pie :data="chartData" style="margin: 0 auto" v-if="!chartLoading && chartData" />
				<p v-else>{{ $t("results.chart_unavailable") }}</p>
			</v-card-text>
		</v-card>
		<v-card :title="$t('ai.askai')" variant="outlined" style="margin-right: 0">
			<v-card-text style="">
				<!-- <p style="margin-bottom: 15%;">{{ $t('ai.unavailable') }}</p> -->
				<v-card class="aiResults" variant="tonal" style="width: 100%" :loading="aiLoading">
					<v-card-text>
						<p v-if="!aiKey">{{ $t("ai.no_apikey") }}</p>
						<p v-else-if="aiResp">{{ aiResp }}</p>
						<p v-else>{{ $t("ai.start") }}</p>
					</v-card-text>
				</v-card>
				<div class="btnGroup" v-if="aiKey">
					<v-btn variant="tonal" @click="sendAI('suggestions')"> 🤔 {{ $t("ai.give_me_suggestions") }} </v-btn>
					<v-btn variant="tonal" @click="sendAI('analyze')"> 🙌 {{ $t("ai.help_me_analyze") }} </v-btn>
					<div style="display: flex; margin-top: 0.5rem; justify-content: center; align-items: center">
						<v-text-field
							:label="'👨‍💻' + $t('ai.custom_input')"
							density="compact"
							hide-details="auto"
							style="width: 92%; margin-right: 2%"
							v-model="customInput"
						></v-text-field>
						<v-btn variant="tonal" style="width: 6%; margin-top: 2px" @click="sendAI('custom')">
							<v-icon icon="mdi-send"></v-icon>
						</v-btn>
					</div>
					<p style="margin-top: 0.6rem; text-align: right; opacity: 0.7">
						AI can make mistakes,<br />Powered by OpenAI.
					</p>
				</div>
			</v-card-text>
		</v-card>
	</div>
	<v-card variant="outlined" style="margin: 20px auto; padding: 15px">
		<template v-slot:text>
			<v-text-field
				v-model="search"
				:label="$t('results.search')"
				prepend-inner-icon="mdi-magnify"
				single-line
				variant="outlined"
				hide-details
			></v-text-field>
		</template>

		<v-card-text>
			<v-data-table-server
				class="resultsDataTable"
				:headers="headers"
				:items="tableItems"
				:search="search"
				v-model:items-per-page="itemsPerPage"
				:items-length="totalItems"
				:loading="loading"
				@update:options="loadItems"
			>
				<template v-slot:item="{ item }">
					<tr>
						<td>{{ item.user }}</td>
						<td>{{ item.date }}</td>
						<v-dialog width="800">
							<template v-slot:activator="{ props }">
								<td><v-btn variant="tonal" density="comfortable" v-bind="props">View</v-btn></td>
							</template>
							<template v-slot:default="{ isActive }">
								<v-card :title="$t('results.results')">
									<v-card-text>
										<v-table>
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
												<tr v-for="(item, index) in item.ans">
													<td @click="dialogs[index] = true" style="cursor: pointer">
														{{ desc(surveyQuestions[index].question) }}
													</td>
													<td @click="dialogs[index] = true" style="cursor: pointer">
														<span
															v-if="
																(surveyQuestions[index].type == 'multiple' ||
																	surveyQuestions[index].type == 'dropdown') &&
																surveyQuestions[index].options &&
																surveyQuestions[index].options.optionsData
															"
															>{{ surveyQuestions[index].options.optionsData[item.answer] }}</span
														>
														<span
															v-else-if="surveyQuestions[index].type == 'checkboxes'"
															style="text-decoration: underline"
															>{{ $t("results.details") }}</span
														>
														<span v-else>{{ desc(item.answer) }}</span>
													</td>
													<td>
														{{ $t("new.types." + surveyQuestions[item.id].type) }}
													</td>
													<v-dialog v-model="dialogs[index]" width="600">
														<v-card>
															<v-card-text>
																<p><b>Question: </b>{{ surveyQuestions[index].question }}<br /></p>
																<p>
																	<b>Answer: </b>
																	<span
																		v-if="
																			(surveyQuestions[index].type == 'multiple' ||
																				surveyQuestions[index].type == 'dropdown') &&
																			surveyQuestions[index].options &&
																			surveyQuestions[index].options.optionsData
																		"
																		>{{ surveyQuestions[index].options.optionsData[item.answer] }}</span
																	>
																	<span
																		v-else-if="
																			surveyQuestions[index].type == 'checkboxes' &&
																			surveyQuestions[index].options &&
																			surveyQuestions[index].options.optionsData
																		"
																	>
																		<v-checkbox
																			hide-details
																			disabled
																			class="viewing-checkboxes"
																			:label="i"
																			v-model="item.answer[index]"
																			v-for="(i, index) in surveyQuestions[index].options.optionsData"
																		></v-checkbox>
																	</span>
																	<span v-else>{{ item.answer }}</span>
																</p>
															</v-card-text>
															<v-card-actions>
																<v-spacer></v-spacer>
																<v-btn color="primary" @click="dialogs[index] = false">Close</v-btn>
															</v-card-actions>
														</v-card>
													</v-dialog>
												</tr>
											</tbody>
										</v-table>
									</v-card-text>

									<v-card-actions>
										<v-spacer></v-spacer>

										<v-btn text="Close" @click="isActive.value = false"></v-btn>
									</v-card-actions>
								</v-card>
							</template>
						</v-dialog>

						<td>{{ item.country }}</td>
						<td>{{ item.city }}</td>
					</tr>
				</template>
			</v-data-table-server>
		</v-card-text>
	</v-card>
</template>

<script>
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js"
import { Pie } from "vue-chartjs"
import colors from "vuetify/util/colors"
import country_data from "~/src/data/country.code.ts"
import { useI18n } from "vue-i18n"

// let materialColors = ['red', 'pink', 'purple', 'deep-purple', 'indigo', 'blue', 'light-blue', 'cyan', 'teal', 'green', 'light-green', 'lime', 'yellow', 'amber', 'orange', 'deep-orange', 'brown', 'grey', 'blue-grey']
const hashMaterialColorsOrder = []

for (const i in colors) {
	for (const j in colors[i]) {
		if (j == "lighten5") continue
		hashMaterialColorsOrder.push(colors[i][j])
	}
}

const hashMaterialColors = []

// const aiPrompt = "You're CranSurvey Bot. Your job is to help the user analyze their data from the survey on the website. The user will give you JSON format data that includes all the answers that have been collected. Please use the function of get_analytics to analyze them. Please detect the language of the questions and the most 3 countries that the answers are from, Are there many situations where a user answers multiple times? How does it lead to the final results? Are the results credible based on these results? Does the survey content need to be adjusted?"

// random color

while (hashMaterialColorsOrder.length > 0) {
	const randomIndex = Math.floor(Math.random() * hashMaterialColorsOrder.length)

	const randomElement = hashMaterialColorsOrder.splice(randomIndex, 1)[0]

	hashMaterialColors.push(randomElement)
}

// import { ChoroplethController, GeoFeature, ColorScale, ProjectionScale } from 'chartjs-chart-geo';
ChartJS.register(ArcElement, Tooltip, Legend)
export default {
	components: {
		Pie,
	},
	computed: {
		chartData() {
			console.log(this.countryData)
			return this.countryData
		},
		//   chartOptions() { return /* mutable chart options */ }
	},
	data() {
		return {
			headers: [
				{
					align: "start",
					key: "user",
					sortable: false,
					title: "User",
				},
				{
					align: "start",
					key: "date",
					sortable: true,
					title: "Date",
				},
				{
					align: "start",
					key: "answers",
					sortable: false,
					title: "Answers",
				},
				{
					align: "start",
					key: "country",
					sortable: false,
					title: "Country",
				},
				{
					align: "start",
					key: "city",
					sortable: false,
					title: "City",
				},
			],
			tableItems: [],
			itemsPerPage: 10,
			totalItems: 0,
			loading: true,
			aiLoading: false,
			token: "",
			search: "",
			surveyQuestions: [],
			dialogs: [],
			lang: "en-US",
			countryData: {
				labels: [],
				datasets: [
					{
						backgroundColor: [],
						data: [],
					},
				],
			},
			chartLoading: true,
			rawResp: {},
			aiResp: "",
			customInput: "",
			aiKey: "",
		}
	},
	methods: {
		loadItems({ page, itemsPerPage, sortBy }) {
			if (!this.token) return
			console.log(sortBy)
			this.loading = true
			$fetch("/api/survey/results", {
				method: "POST",
				body: JSON.stringify({
					token: this.token,
					uniqueId: useRoute().query.id,
					page,
					pagesize: itemsPerPage,
					sortBy,
					search: this.search,
				}),
			}).then((resp) => {
				const thisSurvey = resp.survey
				try {
					delete thisSurvey.id
					delete thisSurvey.created_at
					delete thisSurvey.enable
					delete thisSurvey.site
				} catch (e) {
					console.warn(e)
				}
				this.rawResp = {
					answers: [],
					survey: resp.survey,
					total: resp.total,
				}
				if (resp.code == 0) {
					const answers = []
					for (const i in resp.answers) {
						answers.push({
							user: "#" + resp.answers[i].usr.slice(-6),
							date: new Date(resp.answers[i].created_at).toLocaleString(),
							answers: resp.answers[i].ans.length,
							ans: resp.answers[i].ans,
							country: country_data[this.lang.replace("-", "_")][resp.answers[i].geoip[4]] || "Unknown",
							city: resp.answers[i].geoip[0],
						})
						const countryCode = resp.answers[i].geoip[4]
						const thisAnswer = resp.answers[i]
						delete thisAnswer.id
						thisAnswer.usr = thisAnswer.usr.slice(-6)
						thisAnswer.geoip = thisAnswer.geoip[0] + "," + thisAnswer.geoip[2] + "," + thisAnswer.geoip[1]
						this.rawResp.answers.push(thisAnswer)
						// let countryName = resp.answers[i].geoip.split(",")[1]
						
						// let countryName = country_data[this.useI18n().locale.value.replace("-", "_")].filter((i) => i.code == countryCode)[0].code
						const countryName = country_data[this.lang.replace("-", "_")][countryCode] || "Unknown"
						if (!this.countryData.labels.includes(countryName)) {
							// there's no country in the list
							this.countryData.labels.push(countryName)
							// push random color
							this.countryData.datasets[0].backgroundColor.push(hashMaterialColors[this.countryData.labels.length - 1])

							this.countryData.datasets[0].data[this.countryData.labels.indexOf(countryName)] = 1
						} else {
							this.countryData.datasets[0].data[this.countryData.labels.indexOf(countryName)]++
						}
					}
					this.tableItems = answers
					this.totalItems = resp.total
					this.surveyQuestions = resp.survey.questions
				} else {
					this.tableItems = []
					this.totalItems = 0
				}
				this.loading = false
				this.chartLoading = false
			})
		},
		desc(text) {
			if (typeof text != "string") return text
			if (text.length <= 80) return text
			text = text.slice(0, 80)
			if (text.endsWith(" ")) {
				return text.slice(0, 79) + "..."
			} else {
				return text + "..."
			}
		},
		async sendAI(arg) {
			this.aiLoading = true
			this.aiResp = ""
			const prompt = {
				model: "gpt-3.5-turbo",
				messages: [
					{
						role: "system",
						content:
							'You\'re CranSurvey Bot. Your job is to help the user analyze their data from the survey on the website. The user will give you JSON format data that includes all the answers that have been collected. \n\nThere are 2 important keys in the JSON format input. They\'re "survey" (questions) and "answers". For every collected answer, the key "usr" is the unique id of the user. The "ans" key includes the answer. (for multiple choice/dropdown/checkboxes, the answer is the index of the options). "geoip" includes the geo data of the user based on their IP. It is in the format of [city, region, country]\nTo ensure accurate content, please check three times before answering. Answer me in ' +
							this.$i18n.locale +
							".",
					},
					{
						role: "system",
						content: "",
					},
					{
						role: "user",
						content: JSON.stringify(this.rawResp),
					},
				],
				temperature: 1,
				max_tokens: 2048,
				top_p: 1,
				frequency_penalty: 0,
				presence_penalty: 0,
				stream: true,
			}
			if (arg == "suggestions") {
				prompt.messages[1].content =
					"Please detect the language of the questions and the most 3 countries that the answers are from, Are there many situations where a user answers multiple times? How does it lead to the final results? Are the results credible based on these results? Does the survey content need to be adjusted? For example, modify the text/, add or delete questions, etc.? And check that the title of the user survey is easy for customers to understand and answer. If so, please give detailed suggestions and tips to help users better understand their customers' needs."
			} else if (arg == "analyze") {
				prompt.messages.push({
					role: "system",
					content:
						"Please detect the language of the questions and the most 3 countries that the answers are from, Are there many situations where a user answers multiple times? How does it lead to the final results? Are the results credible based on these results? Please analyze the results in such ways I mentioned above.",
				})
			} else if (arg == "custom") {
				prompt.messages.push({
					role: "system",
					content: this.customInput,
				})
			}
			const c = await fetch("https://api.openai.com/v1/chat/completions", {
				method: "POST",
				body: JSON.stringify(prompt),
				headers: {
					Authorization: "Bearer " + this.aiKey,
					"Content-Type": "application/json",
				},
			})
			if (c.status != 200) {
				try {
					let clone_resp = await c.clone()
					clone_resp = await clone_resp.json()
					if (clone_resp.error) {
						this.aiResp = clone_resp.error.message
						this.aiLoading = false
						return
					}
				} catch (e) {
					console.warn(e)
				}
			}

			const reader = c.body?.pipeThrough(new TextDecoderStream()).getReader()
			for (;;) {
				const res = await reader?.read()
				if (res?.done) break
				// console.log("Received", res.value);
				let v = "[" + res?.value.replaceAll("data: {", ", {") + "]"
				v = v.replace("data: [DONE]", ', {"done": true, "choices": [{"delta": {"content": ""}}]}')
				v = v.replace("[,", "[")

				v = JSON.parse(v)
				console.log(v)
				for (const i of v) {
					if (i.done) {
						this.aiLoading = false
						break
					}
					if (i.choices[0].delta.content) {
						this.aiResp += i.choices[0].delta.content
					}
				}
			}

			// this.aiResp = c.choices[0].message.content
		},
	},
	mounted() {
		this.token = sessionStorage.getItem("_cransurvey_token")
		this.loadItems({ page: 1, itemsPerPage: 10 })
		this.lang = useI18n().locale.value
		this.headers = [
			{
				align: "start",
				key: "user",
				sortable: false,
				title: this.$t("results.user"),
			},
			{
				align: "start",
				key: "date",
				sortable: true,
				title: this.$t("new.types.date"),
			},
			{
				align: "start",
				key: "answers",
				sortable: false,
				title: this.$t("results.answers"),
			},
			{
				align: "start",
				key: "country",
				sortable: false,
				title: this.$t("results.country"),
			},
			{
				align: "start",
				key: "city",
				sortable: false,
				title: this.$t("results.city"),
			},
		]
		$fetch("/api/config/get", {
			method: "POST",
			body: JSON.stringify({
				token: this.token,
			}),
		}).then((rsp) => {
			if (rsp.code == 0 && rsp.data.ai) {
				this.aiKey = rsp.data.ai.key
			}
		})
	},
}
</script>
