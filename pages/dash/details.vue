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
			<v-card-text style="max-height: 300px;">
				
				<Pie :data="chartData" style="margin: 0 auto;" v-if="!chartLoading"/>
			</v-card-text>
		</v-card>
		<v-card :title="$t('ai.askai')" variant="outlined" style="margin-right: 0;">
			<v-card-text style="display: flex; justify-content: center; align-items: center; height: 100%;">
				<p style="margin-bottom: 15%;">{{ $t('ai.unavailable') }}</p>
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
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Pie } from 'vue-chartjs'
import colors from 'vuetify/util/colors'
// let materialColors = ['red', 'pink', 'purple', 'deep-purple', 'indigo', 'blue', 'light-blue', 'cyan', 'teal', 'green', 'light-green', 'lime', 'yellow', 'amber', 'orange', 'deep-orange', 'brown', 'grey', 'blue-grey']
let hashMaterialColorsOrder = []

for (let i in colors) {
	for (let j in colors[i]) {
		if (j == "lighten5") continue
		hashMaterialColorsOrder.push(colors[i][j])
	}
}

let hashMaterialColors = []

while (hashMaterialColorsOrder.length > 0) {
  // 生成一个随机索引
  const randomIndex = Math.floor(Math.random() * hashMaterialColorsOrder.length);
  
  // 从原始数组中取出随机元素
  const randomElement = hashMaterialColorsOrder.splice(randomIndex, 1)[0];
  
  // 将选中的元素添加到已选择的数组中
  hashMaterialColors.push(randomElement);
}

// import { ChoroplethController, GeoFeature, ColorScale, ProjectionScale } from 'chartjs-chart-geo';
ChartJS.register(ArcElement, Tooltip, Legend)
export default {
	components: {
		Pie,
	},
	computed: {
      chartData() { return this.countryData },
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
			token: "",
			search: "",
			surveyQuestions: [],
			dialogs: [],
			countryData: {
				labels: [],
				datasets: [
					{
						backgroundColor: [],
						data: []
					}
				]
			},
			chartLoading: true,
		}
	},
	methods: {
		loadItems({ page, itemsPerPage, sortBy }) {
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
				if (resp.code == 0) {
					const answers = []
					for (const i in resp.answers) {
						answers.push({
							user: "#" + resp.answers[i].usr.slice(-6),
							date: new Date(resp.answers[i].created_at).toLocaleString(),
							answers: resp.answers[i].ans.length,
							ans: resp.answers[i].ans,
							country: resp.answers[i].geoip[1],
							city: resp.answers[i].geoip[0],
						})
						if (!this.countryData.labels.includes(resp.answers[i].geoip[1])) {
							this.countryData.labels.push(resp.answers[i].geoip[1])
							

							this.countryData.datasets[0].backgroundColor.push(hashMaterialColors[this.countryData.labels.length - 1])

							this.countryData.datasets[0].data[this.countryData.labels.indexOf(resp.answers[i].geoip[1])] = 1
						} else {
							this.countryData.datasets[0].data[this.countryData.labels.indexOf(resp.answers[i].geoip[1])]++
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
	},
	mounted() {
		this.token = sessionStorage.getItem("_cransurvey_token")
		this.loadItems({ page: 1, itemsPerPage: 10 })
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
	},
}
</script>
