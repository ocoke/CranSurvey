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
	<h1 class="text-h4">{{ $t("new.new") }}</h1>
	<div class="mainGroup">
		<v-card :title="$t('new.q1')" :subtitle="$t('new.q1_sub')" variant="outlined" style="margin-bottom: 20px">
			<v-card-text>
				<h3 class="ques_title">{{ $t("new.title") }}</h3>
				<v-text-field
					:label="$t('new.title_sub')"
					variant="outlined"
					maxlength="150"
					v-model="surveyTitle"
				></v-text-field>
				<h3 class="ques_title">{{ $t("new.description") }}</h3>
				<v-text-field
					:label="$t('new.description_sub')"
					variant="outlined"
					maxlength="500"
					v-model="surveyDesc"
				></v-text-field>
				<v-radio-group inline v-model="surveyType">
					<v-radio :label="$t('new.q1_simple')" value="simple"></v-radio>
					<v-radio :label="$t('new.q1_advanced')" value="advanced"></v-radio>
					<v-radio :label="$t('new.q1_prompt')" value="prompt"></v-radio>
				</v-radio-group>
			</v-card-text>
		</v-card>
		<v-card
			variant="outlined"
			:title="$t('new.q1_advanced')"
			:subtitle="$t('new.advanced_sub')"
			v-show="surveyType == 'advanced'"
			style="margin-bottom: 20px;"
		></v-card>
		<v-card
			variant="outlined"
			v-show="surveyType == 'simple' || surveyType == 'advanced'"
		>
			<v-card-title v-if="surveyType == 'simple'">{{ $t('new.q1_simple') }}</v-card-title>
			<v-card-title v-else>{{ $t('new.advanced_q') }}</v-card-title>
			<v-card-subtitle v-if="surveyType == 'advanced'">{{ $t('new.simple_sub') }}</v-card-subtitle>
			<v-card-subtitle v-else>{{ $t('new.advanced_q_sub') }}</v-card-subtitle>
			<v-card-text>
				<h3 class="ques_title">{{ $t("new.question.question") }}</h3>
				<v-text-field
					:label="$t('new.question.question_sub')"
					variant="outlined"
					maxlength="150"
					v-model="simple.question"
				></v-text-field>
				<h3 class="ques_title">{{ $t("new.question.question_prompt") }}</h3>
				<v-text-field
					:label="$t('new.question.question_prompt_sub')"
					variant="outlined"
					maxlength="500"
					v-model="simple.prompt"
				></v-text-field>
				<h3 class="ques_title">{{ $t("new.question.question_type") }}</h3>
				<v-select
					label="Select"
					:items="availableTypes"
					item-title="name"
					item-value="value"
					v-model="simple.type"
					variant="outlined"
				></v-select>
				<h3 class="ques_title">{{ $t('new.question.answer_validate') }}</h3>
				<v-card v-if="simple.type == 'short_answer' || simple.type == 'paragraph'" variant="outlined" style="margin-bottom: 1rem; overflow-x: initial;">
					<v-card-text style="padding-bottom: 0;"><p style="display: flex; align-items: center; font-size: 1rem;" class="validateText">
						<span>{{ $t('new.validate.length') }} {{ $t('new.validate.from') }} </span>
						<v-text-field :label="$t('new.validate.min')" type="number" class="inline-num-input" density="compact" v-model="simple.validate.min"></v-text-field> 
						<span>{{ $t('new.validate.to') }} </span>
						<v-text-field :label="$t('new.validate.max')" type="number" class="inline-num-input" density="compact" v-model="simple.validate.max"></v-text-field>
					</p></v-card-text>
				</v-card>
				<h3 class="ques_title">{{ $t("new.question.question_placeholder") }}</h3>
				<v-text-field
					:label="$t('new.question.question_placeholder_sub')"
					variant="outlined"
					maxlength="500"
					v-model="simple.placeholder"
				></v-text-field>
				<v-btn variant="outlined" v-show="surveyType == 'advanced'" @click="addQuestion">{{ $t('new.add') }}</v-btn>
			</v-card-text>
		</v-card>
		<v-card
			variant="outlined"
			:title="$t('new.questions_list')"
			:subtitle="$t('new.questions_list_sub')"
			v-show="surveyType == 'advanced'"
			style="margin-top: 20px;"
		>
			<v-card-text>
				<v-expansion-panels>
				<v-expansion-panel v-for="item in advanced.questions">
					<v-expansion-panel-title>
						<template v-slot:default="{ expanded }">
							<v-row no-gutters>
								<v-col cols="4" class="d-flex justify-start">
									{{ item.question }}
								</v-col>
								<v-col cols="8" class="text-grey">
									<v-fade-transition leave-absolute>
										<span v-if="expanded"> #{{ item.id }} </span>
									</v-fade-transition>
								</v-col>
							</v-row>
						</template>
					</v-expansion-panel-title>
					<v-expansion-panel-text>
						<v-table density="compact">
							<thead>
							<tr>
								<th class="text-left">
									{{ $t('results.attributes') }}
								</th>
								<th class="text-left">
									{{ $t('results.value') }}
								</th>
							</tr>
							</thead>
							<tbody>
							<tr>
								<td>{{ $t('results.type') }}</td>
								<td>{{ $t('new.types.' + item.type) }}</td>
							</tr>
							<tr>
								<td>{{ $t('new.question.question_placeholder') }}</td>
								<td>{{ item.placeholder }}</td>
							</tr>
							<tr>
								<td>{{ $t('new.question.question_prompt') }}</td>
								<td>{{ item.prompt }}</td>
							</tr>
							<tr>
								<td>{{ $t('new.question.answer_validate') }}</td>
								<td>{{ item.validateStr }}</td>
							</tr>
							</tbody>
						</v-table>
						<v-card-actions>
							<v-spacer></v-spacer>
							<v-btn variant="text" color="primary" @click="deleteQuestion(item.id)">
								{{ $t("results.delete") }}
							</v-btn>
						</v-card-actions>
					</v-expansion-panel-text>
				</v-expansion-panel>
			</v-expansion-panels>
	
			</v-card-text>
		</v-card>
		<v-card
			variant="outlined"
			:title="$t('new.q1_prompt')"
			:subtitle="$t('new.prompt_sub')"
			v-show="surveyType == 'prompt'"
		>
			<v-card-text>
				<h3 class="ques_title">{{ $t("new.title") }}</h3>
				<v-text-field
					:label="$t('new.question.prompt_title_sub')"
					variant="outlined"
					maxlength="150"
					v-model="prompt.title"
				></v-text-field>
				<h3 class="ques_title">{{ $t("new.question.prompt_content") }}</h3>
				<v-textarea
					:label="$t('new.question.prompt_content_sub')"
					variant="outlined"
					v-model="prompt.content"
					maxlength="2048"
					counter
					:rules="promptContentRules"
				></v-textarea>
			</v-card-text>
		</v-card>

		<v-card
			variant="outlined"
			:title="$t('new.site')"
			:subtitle="$t('new.site_sub')"
			v-show="surveyType"
			style="margin-top: 20px"
		>
			<v-card-text>
				<h3 class="ques_title">{{ $t("new.domain") }}</h3>
				<v-text-field
					:label="$t('new.domain_sub')"
					variant="outlined"
					maxlength="500"
					v-model="simple.domain"
				></v-text-field>

				<h3 class="ques_title">{{ $t("new.position") }}</h3>
				<v-radio-group inline v-model="promptWindowPosition" :label="$t('new.position_sub')">
					<v-radio :label="$t('new.position_options.bottom_left')" value="bottom_left"></v-radio>
					<v-radio :label="$t('new.position_options.bottom_right')" value="bottom_right"></v-radio>
					<v-radio :label="$t('new.position_options.bottom_banner')" value="bottom_banner"></v-radio>
				</v-radio-group>

				<h3 class="ques_title">{{ $t("new.priority") }}</h3>
				<v-slider v-model="priority" class="align-center ques_title" max="10s" min="0" step="1" hide-details>
					<template v-slot:append>
						<v-text-field
							v-model="priority"
							hide-details
							single-line
							density="compact"
							type="number"
							style="width: 70px"
						></v-text-field>
					</template>
				</v-slider>
			</v-card-text>
		</v-card>

		<v-btn variant="outlined" @click="create" style="margin-top: 20px" v-show="surveyType">{{
			$t("new.create")
		}}</v-btn>
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
			surveyType: "",
			promptWindowPosition: "bottom_right",
			priority: 0,
			simple: {
				type: "short_answer",
				validate: {
					min: 1,
					max: 2048,
				}
			},
			advanced: {
				questions: [],
			},
			prompt: {
				title: "",
				content: ""
			},
			promptContentRules: [v => v.length <= 2048 || 'Max 2048 characters'],
			surveyTitle: "",
			surveyDesc: "",
			availableTypes: [
				// ["short_answer", "paragraph", "multiple_choice", "checkboxes", "dropdown", "linear", "file", "date", "time"],
				// short_answer: this.$t('new.types.short_answer'),
				// paragraph: this.$t('new.types.paragraph'),
				// multiple: this.$t('new.types.multiple'),
				// checkboxes: this.$t('new.types.checkboxes'),
				// dropdown: this.$t('new.types.dropdown'),
				// linear: this.$t('new.types.linear'),
				// file: this.$t('new.types.file'),
				// date: this.$t('new.types.date'),
				// time: this.$t('new.types.time'),
				{
					name: this.$t("new.types.short_answer"),
					value: "short_answer",
				},
				{
					name: this.$t("new.types.paragraph"),
					value: "paragraph",
				},
				{
					name: this.$t("new.types.multiple"),
					value: "multiple",
				},
				{
					name: this.$t("new.types.checkboxes"),
					value: "checkboxes",
				},
				{
					name: this.$t("new.types.dropdown"),
					value: "dropdown",
				},
				{
					name: this.$t("new.types.linear"),
					value: "linear",
				},
				{
					name: this.$t("new.types.file"),
					value: "file",
				},
				{
					name: this.$t("new.types.date"),
					value: "date",
				},
				{
					name: this.$t("new.types.time"),
					value: "time",
				},
			]
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
		async create() {
			let data;
			if (this.surveyType == "simple") {
				const info = this.simple
				if (!info.question || !info.type || !this.surveyTitle || !this.surveyDesc) {
					toast.error(this.$t("new.miss_required"), toastCfg)
					return false
				}
				const validate = this.simple.validate;
				let validateStr = (validate.min || 1) + ":" + (validate.max || 2048)
				data = {
					title: this.surveyTitle,
					description: this.surveyDesc,
					token: sessionStorage.getItem("_cransurvey_token"),
					type: "simple",
					questions: [
						{
							id: 0,
							type: info.type,
							validate: validateStr,
							question: info.question,
							placeholder: info.placeholder,
							prompt: info.prompt,
						},
					],
					site: {
						domain: info.domain,
						priority: this.priority,
						promptWindowPosition: this.promptWindowPosition,
					},
				}
			} else if (this.surveyType == 'prompt') {
				data = {
					title: this.surveyTitle,
					description: this.surveyDesc,
					token: sessionStorage.getItem("_cransurvey_token"),
					type: "prompt",
					questions: [
						{
							id: 0,
							type: 'info',
							validate: 'disabled',
							question: this.prompt.title,
							prompt: this.prompt.content,
						},
					],
					site: {
						domain: this.simple.domain,
						priority: this.priority,
						promptWindowPosition: this.promptWindowPosition,
					},
				}
				
			} else if (this.surveyType == 'advanced') {
				data = {
					title: this.surveyTitle,
					description: this.surveyDesc,
					token: sessionStorage.getItem("_cransurvey_token"),
					type: "advanced",
					questions: this.advanced.questions,
					site: {
						domain: this.simple.domain,
						priority: this.priority,
						promptWindowPosition: this.promptWindowPosition,
					},
				}
			}
			const rsp = await $fetch("/api/survey/create", {
				method: "POST",
				body: JSON.stringify(data),
			})

			if (rsp.code == 0) {
				toast.success(this.$t("new.success"), toastCfg)
				navigateTo(useLocalePath()("/dash/surveys"))
			} else {
				toast.error(this.$t("new.error") + " (" + this.$t("error_codes." + rsp.code) + ")", toastCfg)
			}
		},
		addQuestion() {
			const info = this.simple
			if (!info.question || !info.type) {
				toast.error(this.$t("new.miss_required"), toastCfg)
				return false
			}
			const validate = this.simple.validate;
			let validateStr = (validate.min || 1) + ":" + (validate.max || 2048)
			this.advanced.questions.push({
				id: this.advanced.questions.length,
				type: info.type,
				validate: validateStr,
				question: info.question,
				placeholder: info.placeholder,
				prompt: info.prompt,
			});
		},
		deleteQuestion(id) {
			this.advanced.questions.splice(id, 1)
			for (let i in this.advanced.questions) {
				this.advanced.questions[i].id = i
			}
		}
	},
	async mounted() {
		this.username = sessionStorage.getItem("_cransurvey_usr")
	},
}
</script>
<style>
.mainGroup {
	margin-top: 20px;
	padding: 10px;
}
.ques_title {
	margin-bottom: 1rem;
	margin-left: 0.1rem;
}
.inline-num-input {
	max-width: 6rem;
	min-width:5rem;
	margin: 0 1rem;
}
p.validateText span {
	margin-bottom: 1rem;
}
</style>
