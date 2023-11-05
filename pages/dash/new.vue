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
	<h1 class="text-h4" v-if="editUpdate">{{ $t("edit.edit_for", { title: surveyTitle, }) }}</h1>
	<h1 class="text-h4" v-else>{{ $t("new.new") }}</h1>
	<div class="mainGroup new_survey">
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
				<v-checkbox :label="$t('new.required')" v-model="simple.required"></v-checkbox>
				<h3 class="ques_title">{{ $t('new.question.answer_validate') }}</h3>
				<v-card v-if="simple.type == 'short_answer' || simple.type == 'paragraph'" variant="outlined" style="margin-bottom: 1rem; overflow-x: initial;">
					<v-card-text style="padding-bottom: 0;"><p style="display: flex; align-items: center; font-size: 1rem;" class="validateText">
						<span>{{ $t('new.validate.length') }} {{ $t('new.validate.from') }} </span>
						<v-text-field :label="$t('new.validate.min')" type="number" class="inline-num-input" density="compact" v-model="simple.validate.min"></v-text-field> 
						<span>{{ $t('new.validate.to') }} </span>
						<v-text-field :label="$t('new.validate.max')" type="number" class="inline-num-input" density="compact" v-model="simple.validate.max"></v-text-field>
					</p></v-card-text>
				</v-card>
				<v-card v-if="simple.type == 'date'" variant="outlined" style="margin-bottom: 1rem; overflow-x: initial;">
					<v-card-text>
					
						<v-dialog width="500">
							<template v-slot:activator="{ props }">
								<p><v-btn v-bind="props" :text="$t('new.validate.start')" variant="outlined"></v-btn>
								<span v-show="simple.options.optionsData[0]" style="margin-left: 1rem;">{{ new Date(simple.options.optionsData[0]).toLocaleString() }}</span></p>
							</template>

							<template v-slot:default="{ isActive }">
								<v-card title="Date">
								<v-card-text>
									<v-date-picker v-model="simple.options.optionsData[0]" variant="outlined" style="margin: 0 auto; box-shadow: none;"></v-date-picker>
								</v-card-text>

								<v-card-actions>
									<v-spacer></v-spacer>

									<v-btn
										:text="$t('results.close')"
										@click="isActive.value = false"
									></v-btn>
									
								</v-card-actions>
								</v-card>
							</template>
						</v-dialog>
						<v-dialog width="500">
							<template v-slot:activator="{ props }">
								<p style="margin-top: .5rem;"><v-btn v-bind="props" :text="$t('new.validate.end')" variant="outlined"></v-btn>
								<span v-show="simple.options.optionsData[1]" style="margin-left: 1rem;">{{ new Date(simple.options.optionsData[1]).toLocaleString() }}</span></p>
							</template>

							<template v-slot:default="{ isActive }">
								<v-card title="Date">
								<v-card-text>
									<v-date-picker v-model="simple.options.optionsData[1]" variant="outlined" style="margin: 0 auto; box-shadow: none;"></v-date-picker>
								</v-card-text>

								<v-card-actions>
									<v-spacer></v-spacer>

									<v-btn
									:text="$t('results.close')"
									@click="isActive.value = false"
									></v-btn>
								</v-card-actions>
								</v-card>
							</template>
						</v-dialog>
					</v-card-text>
				</v-card>
				<v-card v-if="simple.type == 'time'" variant="outlined" style="margin-bottom: 1rem; overflow-x: initial;">
					<v-card-text style="padding-bottom: 0;"><p style="display: flex; align-items: center; font-size: 1rem;" class="validateText">
						<span>{{ $t('new.validate.length') }} {{ $t('new.validate.from') }} </span>
						<v-text-field :label="$t('new.validate.min')" type="number" class="inline-num-input" density="compact" v-model="simple.validate.min"></v-text-field> 
						<span>{{ $t('new.validate.to') }} </span>
						<v-text-field :label="$t('new.validate.max')" type="number" class="inline-num-input" density="compact" v-model="simple.validate.max"></v-text-field>
					</p></v-card-text>
				</v-card>
				<v-card v-if="simple.type == 'multiple' || simple.type == 'checkboxes' || simple.type == 'dropdown'" variant="outlined" style="margin-bottom: 1rem; overflow-x: initial;">
					<v-card-text style="padding-bottom: 0;">
						<v-text-field :label="$t('new.validate.text')" variant="outlined" v-model="optionText"></v-text-field>
						<v-btn variant="outlined" @click="addOptions" style="margin-bottom: 1rem;">{{ $t('new.add') }}</v-btn>
						<v-card variant="tonal" :title="$t('new.validate.preview')" style="margin: 0.5rem 0 1.5rem 0;" v-if="simple.options.optionsData.length != 0">
						<v-card-text>
							<div v-if="simple.type == 'multiple'">
								<v-radio-group v-model="deleteOptionText">
									<v-radio v-for="(i, index) in simple.options.optionsData" :label="i" :value="index"></v-radio>
								</v-radio-group>
							</div>
							<div v-else-if="simple.type == 'dropdown'">
								<v-select :items="simple.options.optionsData" v-model="deleteOptionText" :label="$t('new.validate.preview')"></v-select>
							</div>
							<div v-else>
								<v-checkbox class="preview_checkbox" v-for="i in simple.options.optionsData" :label="i" :value="i" v-model="deleteOptionText"></v-checkbox>
							</div>
						</v-card-text></v-card>
						<v-btn variant="outlined" @click="deleteOption" style="margin-bottom: 1rem;" v-show="simple.options.optionsData.length != 0">{{ $t('new.delete_selected') }}</v-btn>
						<!-- <v-btn variant="outlined" @click="setDefaultOption" style="margin-bottom: 1rem; margin-left: .5rem;" v-show="simple.options.optionsData.length != 0">{{ $t('new.set_default') }}</v-btn> -->
					</v-card-text>
				</v-card>
				<h3 class="ques_title">{{ $t("new.question.question_placeholder") }}</h3>
				<v-text-field
					:label="$t('new.question.question_placeholder_sub')"
					variant="outlined"
					maxlength="500"
					v-model="simple.placeholder"
					:disabled="simple.type == 'multiple' || simple.type == 'checkboxes' || simple.type == 'dropdown' || simple.type == 'date' || simple.type == 'time'"
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
							<tr v-if="item.type == 'multiple' || item.type == 'checkboxes' || item.type == 'dropdown' || item.type == 'date' || item.date == 'time'">
								<td>{{ $t('new.options') }}</td>
								<td><code>{{ item.options.optionsData }}</code></td>
							</tr>
							<tr v-else>
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

		<v-btn variant="outlined" @click="create" style="margin-top: 20px" v-show="surveyType">
			<span v-if="editUpdate">{{ $t('edit.edit') }}</span>
			<span v-else>{{ $t('new.create') }}</span>
		</v-btn>
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
			editUpdate: false,
			simple: {
				type: "short_answer",
				validate: {
					min: 1,
					max: 2048,
				},
				required: true,
				options: {
					optionsData: [],
				},
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
			optionText: "",
			deleteOptionText: null,
			availableTypes: [
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
							required: info.required,
							options: info.options,
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
							required: false,
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
			if (this.editUpdate) {
				data.id = useRoute().query.id
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
			let info = this.simple
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
				required: info.required,
				options: {
					optionsData: this.simple.options.optionsData,
					...this.simple.options,
				},
			})
			if (this.simple.options.optionsData.length != 0) {
				this.simple.options.optionsData = []
			}
		},
		deleteQuestion(id) {
			this.advanced.questions.splice(id, 1)
			for (let i in this.advanced.questions) {
				this.advanced.questions[i].id = i
			}
		},
		addOptions() {
			if (!this.optionText) {
				return false
			}
			if (this.simple.options.optionsData.includes(this.optionText)) {
				toast.error(this.$t("new.option_exists"), toastCfg)
				return false
			}
			this.simple.options.optionsData.push(this.optionText)
			this.optionText = ""
		},
		deleteOption() {
			if (!this.deleteOptionText) {
				return false
			}
			if (!this.simple.options.optionsData) {
				this.simple.options.optionsData = []
			}
			this.simple.options.optionsData = this.simple.options.optionsData.filter((item) => {
				return item != this.deleteOptionText
			})
			this.deleteOptionText = ""
		},
		setDefaultOption() {
			if (this.deleteOptionText == null) {
				return false
			}
			this.simple.placeholder = this.simple.options.optionsData[this.deleteOptionText]
			this.simple.options.default = this.deleteOptionText
		}
	},
	async mounted() {
		this.username = sessionStorage.getItem("_cransurvey_usr")
		if (useRoute().query.id) {
			let editId = useRoute().query.id
			const rsp = await $fetch("/api/survey/get", {
				method: "POST",
				body: JSON.stringify({
					token: sessionStorage.getItem("_cransurvey_token"),
					uniqueId: editId,
				}),
			})
			if (rsp.code == 0) {
				this.editUpdate = true;
				this.surveyTitle = rsp.survey.title
				this.surveyDesc = rsp.survey.description
				this.surveyType = rsp.survey.type
				this.priority = rsp.survey.site.priority
				this.promptWindowPosition = rsp.survey.site.promptWindowPosition
				this.simple.domain = rsp.survey.site.domain
				if (rsp.survey.type == 'simple') {
					this.simple = rsp.survey.questions[0]
					if (rsp.survey.questions[0].validate) {
						let validate = rsp.survey.questions[0].validate.split(":")
						this.simple.validate.min = validate[0]
						this.simple.validate.max = validate[1]
					}
				} else if (rsp.survey.type == 'prompt') {
					this.prompt = rsp.survey.questions[0]
				} else if (rsp.survey.type == 'advanced') {
					this.advanced.questions = rsp.survey.questions
				}
			} else {
				toast.error(this.$t("dashboard.error_fetching_data") + " (" + this.$t("error_codes." + rsp.code) + ")", toastCfg)
			}
		}
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
.mainGroup.new_survey .v-card-subtitle {
	white-space: inherit;
	overflow: auto;
	text-overflow: clip;
}
.preview_checkbox .v-input__details {
	display: none;
}
</style>
