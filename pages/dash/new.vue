<script setup>
import "~/src/styles/dash.css"
import country_data from "~/src/data/country.ts"
import { useToast } from "vue-toastification"
import toastCfg from "~/src/functions/toastCfg"

const localePath = useLocalePath()
const country = ref([])
const toast = useToast()
const { t } = useI18n()

const surveyType = ref("")
const promptWindowPosition = ref("bottom_right")
const priority = ref(0)
const editUpdate = ref(false)	
const surveyTitle = ref("")
const surveyDesc = ref("")
const optionText = ref("")
const deleteOptionText = ref(null)
const availableTypes = ref([
	{
		name: t("new.types.short_answer"),
		value: "short_answer",
	},
	{
		name: t("new.types.paragraph"),
		value: "paragraph",
	},
	{
		name: t("new.types.multiple"),
		value: "multiple",
	},
	{
		name: t("new.types.checkboxes"),
		value: "checkboxes",
	},
	{
		name: t("new.types.dropdown"),
		value: "dropdown",
	},
	// {
	// 	name: t("new.types.linear"),
	// 	value: "linear",
	// },
	{
		name: t("new.types.file"),
		value: "file",
	},
	{
		name: t("new.types.date"),
		value: "date",
	},
	// {
	// 	name: t("new.types.time"),
	// 	value: "time",
	// },
])
const fileTypes = ref([
	{
		name: t("new.files.images"),
		value: "images",
	},
	{
		name: t("new.files.docs"),
		value: "docs",
	},
	{
		name: t("new.files.videos"),
		value: "videos",
	},
	{
		name: t("new.files.audios"),
		value: "audios",
	},
	{
		name: t("new.files.sheets"),
		value: "sheets",
	},
	{
		name: t("new.files.slides"),
		value: "slides",
	},
	{
		name: t("new.files.archives"),
		value: "archives",
	},
])
const textTypes = ref([
	{
		name: t("new.text.email"),
		value: "email",
	},
	{
		name: t("new.text.url"),
		value: "url",
	},
	{
		name: t("new.text.phone"),
		value: "phone",
	},
	{
		name: t("new.text.number"),
		value: "number",
	},
])
const promptContentRules = ref([(v) => v.length <= 2048 || "Max 2048 Characters"])
const simple = ref({
	type: "short_answer",
	validate: {
		min: 1,
		max: 2048,
	},
	required: true,
	options: {
		optionsData: [],
	},
})
const advanced = ref({
	questions: [],
})
const prompt = ref({
	title: "",
	content: "",
})
const tempValidate = ref(null)
const tempPhoneCountry = ref([])


const create = async () => {
	let data
	if (surveyType.value == "simple") {
		const info = simple.value
		if (!info.question || !info.type || !surveyTitle.value || !surveyDesc.value) {
			toast.error(t("new.miss_required"), toastCfg)
			return false
		}
		const validate = simple.value.validate
		const validateStr =
			(validate.min || 1) +
			":" +
			(validate.max || 2048) +
			(tempValidate.value ? ":" + tempValidate.value : "") +
			(tempPhoneCountry.value.length ? ":" + tempPhoneCountry.value.join(",") : "")
		data = {
			title: surveyTitle.value,
			description: surveyDesc.value,
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
				priority: priority.value,
				promptWindowPosition: promptWindowPosition.value,
			},
		}
	} else if (surveyType.value == "prompt") {
		data = {
			title: surveyTitle.value,
			description: surveyDesc.value,
			token: sessionStorage.getItem("_cransurvey_token"),
			type: "prompt",
			questions: [
				{
					id: 0,
					type: "info",
					validate: "disabled",
					question: prompt.value.title,
					prompt: prompt.value.content,
					required: false,
				},
			],
			site: {
				domain: simple.value.domain,
				priority: priority.value,
				promptWindowPosition: promptWindowPosition.value,
			},
		}
	} else if (surveyType.value == "advanced") {
		data = {
			title: surveyTitle.value,
			description: surveyDesc.value,
			token: sessionStorage.getItem("_cransurvey_token"),
			type: "advanced",
			questions: advanced.value.questions,
			site: {
				domain: simple.value.domain,
				priority: priority.value,
				promptWindowPosition: promptWindowPosition.value,
			},
		}
	}
	if (editUpdate.value) {
		data.id = (useRoute().params.id)
	}
	const rsp = await $fetch("/api/survey/create", {
		method: "POST",
		body: JSON.stringify(data),
	})

	if (rsp.code == 0) {
		toast.success(t("new.success"), toastCfg)
		navigateTo(useLocalePath()("/dash/surveys"))
	} else {
		toast.error(t("new.error") + " (" + t("error_codes." + rsp.code) + ")", toastCfg)
	}
}

const addQuestion = () => {
	if (!simple.value.question || !simple.value.type) {
		toast.error(t("new.miss_required"), toastCfg)
		return false
	}
	const validate = simple.value.validate
	const validateStr =
		(validate.min || 1) +
		":" +
		(validate.max || 2048) +
		(tempValidate.value ? ":" + tempValidate.value : "") +
		(tempPhoneCountry.value.length ? ":" + tempPhoneCountry.value.join(",") : "")
	advanced.value.questions.push({
		id: advanced.value.questions.length,
		type: simple.value.type,
		validate: validateStr,
		question: simple.value.question,
		placeholder: simple.value.placeholder,
		prompt: simple.value.prompt,
		required: simple.value.required,
		options: simple.value.options,
	})
	if (simple.value.options.optionsData.length != 0) {
		simple.value.options.optionsData = []
	}
	simple.value = {
		type: "short_answer",
		validate: {
			min: 1,
			max: 2048,
		},
		required: true,
		options: {
			optionsData: [],
		},
	}
	tempValidate.value = null
	tempPhoneCountry.value = []
}

const deleteQuestion = (id) => {
	advanced.value.questions.splice(id, 1)
	for (const i in advanced.value.questions) {
		advanced.value.questions[i].id = i
	}
}

const moveQuestion = (id, mode) => {
	// mode == 1, up
	// mode == 2, down
	if (mode == 1) {
		if (id == 0) {
			return false
		}
		const tmp = advanced.value.questions[id - 1]
		advanced.value.questions[id - 1] = advanced.value.questions[id]
		advanced.value.questions[id] = tmp
		advanced.value.questions[id - 1].id = id - 1
		advanced.value.questions[id].id = id
	} else {
		if (id == advanced.value.questions.length - 1) {
			return false
		}
		const tmp = advanced.value.questions[id + 1]
		advanced.value.questions[id + 1] = advanced.value.questions[id]
		advanced.value.questions[id] = tmp
		advanced.value.questions[id + 1].id = id + 1
		advanced.value.questions[id].id = id
	}
}

const addOptions = () => {
	if (!optionText.value) {
		return false
	}
	if (simple.value.options.optionsData.includes(optionText.value)) {
		toast.error(t("new.option_exists"), toastCfg)
		return false
	}
	simple.value.options.optionsData.push(optionText.value)
	optionText.value = ""
}

const deleteOption = () => {
	if (!simple.value.options.optionsData) {
		simple.value.options.optionsData = []
	}
	if (simple.value.type == "multiple") {
		deleteOptionText.value = simple.value.options.optionsData[deleteOptionText.value]
	}
	if (!deleteOptionText.value) {
		return false
	}

	simple.value.options.optionsData = simple.value.options.optionsData.filter((item) => {
		return item != deleteOptionText.value
	})
	deleteOptionText.value = null
}

const setDefaultOption = () => {
	if (deleteOptionText.value == null) {
		return false
	}
	simple.value.placeholder = simple.value.options.optionsData[deleteOptionText.value]
	simple.value.options.default = deleteOptionText.value
}

onMounted(async () => {
	username.value = sessionStorage.getItem("_cransurvey_usr")
	if (useRoute().query.id) {
		const editId = useRoute().query.id
		const rsp = await $fetch("/api/survey/get", {
			method: "POST",
			body: JSON.stringify({
				token: sessionStorage.getItem("_cransurvey_token"),
				uniqueId: editId,
			}),
		})
		if (rsp.code == 0) {
			editUpdate.value = true
			surveyTitle.value = rsp.survey.title
			surveyDesc.value = rsp.survey.description
			surveyType.value = rsp.survey.type
			priority.value = rsp.survey.site.priority
			promptWindowPosition.value = rsp.survey.site.promptWindowPosition
			simple.value.domain = rsp.survey.site.domain
			if (rsp.survey.type == "simple") {
				simple.value = rsp.survey.questions[0]
				if (rsp.survey.questions[0].validate) {
					const validate = rsp.survey.questions[0].validate.split(":")
					simple.value.validate.min = validate[0]
					simple.value.validate.max = validate[1]
				}
			} else if (rsp.survey.type == "prompt") {
				prompt.value = rsp.survey.questions[0]
			} else if (rsp.survey.type == "advanced") {
				advanced.value.questions = rsp.survey.questions
			}
		} else {
			toast.error(
				t("dashboard.error_fetching_data") + " (" + t("error_codes." + rsp.code) + ")",
				toastCfg,
			)
		}
	}
})

if (process.client) {
	country.value = country_data[useI18n().locale.value.replace("-", "_")]
}


</script>

<template>
	<h1 class="text-h4" v-if="editUpdate">{{ $t("edit.edit_for", { title: surveyTitle }) }}</h1>
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
			style="margin-bottom: 20px"
		></v-card>
		<v-card variant="outlined" v-show="surveyType == 'simple' || surveyType == 'advanced'">
			<v-card-title v-if="surveyType == 'simple'">{{ $t("new.q1_simple") }}</v-card-title>
			<v-card-title v-else>{{ $t("new.advanced_q") }}</v-card-title>
			<v-card-subtitle v-if="surveyType == 'advanced'">{{ $t("new.advanced_q_sub") }}</v-card-subtitle>
			<v-card-subtitle v-else>{{ $t("new.simple_sub") }}</v-card-subtitle>
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
				<h3 class="ques_title">{{ $t("new.question.answer_validate") }}</h3>
				<v-card
					v-if="simple.type == 'short_answer' || simple.type == 'paragraph'"
					variant="outlined"
					style="margin-bottom: 1rem; overflow-x: initial"
				>
					<v-card-text style="padding-bottom: 0"
						><p style="display: flex; align-items: center; font-size: 1rem" class="validateText">
							<span>{{ $t("new.validate.length") }} {{ $t("new.validate.from") }} </span>
							<v-text-field
								:label="$t('new.validate.min')"
								type="number"
								class="inline-num-input"
								density="compact"
								v-model="simple.validate.min"
							></v-text-field>
							<span>{{ $t("new.validate.to") }} </span>
							<v-text-field
								:label="$t('new.validate.max')"
								type="number"
								class="inline-num-input"
								density="compact"
								v-model="simple.validate.max"
							></v-text-field>
						</p>

						<p>
							<v-select
								label="Select"
								:items="textTypes"
								item-title="name"
								item-value="value"
								v-model="tempValidate"
								variant="outlined"
							></v-select>
							<v-autocomplete
								label="Select"
								:items="country"
								item-title="name"
								item-value="code"
								variant="outlined"
								multiple
								v-model="tempPhoneCountry"
								chips
								v-if="tempValidate == 'phone'"
							></v-autocomplete>
							<!-- {{country}} -->
						</p>
					</v-card-text>
				</v-card>
				<v-card v-else-if="simple.type == 'date'" variant="outlined" style="margin-bottom: 1rem; overflow-x: initial">
					<v-card-text>
						<v-dialog width="500">
							<template v-slot:activator="{ props }">
								<p>
									<v-btn v-bind="props" :text="$t('new.validate.start')" variant="outlined"></v-btn>
									<span v-show="simple.options.optionsData[0]" style="margin-left: 1rem">{{
										new Date(simple.options.optionsData[0]).toLocaleString()
									}}</span>
								</p>
							</template>

							<template v-slot:default="{ isActive }">
								<v-card title="Date">
									<v-card-text>
										<v-date-picker
											v-model="simple.options.optionsData[0]"
											variant="outlined"
											style="margin: 0 auto; box-shadow: none"
										></v-date-picker>
									</v-card-text>

									<v-card-actions>
										<v-spacer></v-spacer>

										<v-btn :text="$t('results.close')" @click="isActive.value = false"></v-btn>
									</v-card-actions>
								</v-card>
							</template>
						</v-dialog>
						<v-dialog width="500">
							<template v-slot:activator="{ props }">
								<p style="margin-top: 0.5rem">
									<v-btn v-bind="props" :text="$t('new.validate.end')" variant="outlined"></v-btn>
									<span v-show="simple.options.optionsData[1]" style="margin-left: 1rem">{{
										new Date(simple.options.optionsData[1]).toLocaleString()
									}}</span>
								</p>
							</template>

							<template v-slot:default="{ isActive }">
								<v-card title="Date">
									<v-card-text>
										<v-date-picker
											v-model="simple.options.optionsData[1]"
											variant="outlined"
											style="margin: 0 auto; box-shadow: none"
										></v-date-picker>
									</v-card-text>

									<v-card-actions>
										<v-spacer></v-spacer>

										<v-btn :text="$t('results.close')" @click="isActive.value = false"></v-btn>
									</v-card-actions>
								</v-card>
							</template>
						</v-dialog>
					</v-card-text>
				</v-card>
				<v-card v-else-if="simple.type == 'time'" variant="outlined" style="margin-bottom: 1rem; overflow-x: initial">
					<v-card-text style="padding-bottom: 0"
						><p style="display: flex; align-items: center; font-size: 1rem" class="validateText">
							<span>{{ $t("new.validate.length") }} {{ $t("new.validate.from") }} </span>
							<v-text-field
								:label="$t('new.validate.min')"
								type="number"
								class="inline-num-input"
								density="compact"
								v-model="simple.validate.min"
							></v-text-field>
							<span>{{ $t("new.validate.to") }} </span>
							<v-text-field
								:label="$t('new.validate.max')"
								type="number"
								class="inline-num-input"
								density="compact"
								v-model="simple.validate.max"
							></v-text-field></p
					></v-card-text>
				</v-card>
				<!-- multiple choices, checkboxes and dropdowns -->
				<v-card
					v-else-if="simple.type == 'multiple' || simple.type == 'checkboxes' || simple.type == 'dropdown'"
					variant="outlined"
					style="margin-bottom: 1rem; overflow-x: initial"
				>
					<v-card-text style="padding-bottom: 0">
						<v-text-field :label="$t('new.validate.text')" variant="outlined" v-model="optionText"></v-text-field>
						<v-btn variant="outlined" @click="addOptions" style="margin-bottom: 1rem">{{ $t("new.add") }}</v-btn>
						<v-card
							variant="tonal"
							:title="$t('new.validate.preview')"
							style="margin: 0.5rem 0 1.5rem 0"
							v-if="simple.options.optionsData.length != 0"
						>
							<v-card-text>
								<div v-if="simple.type == 'multiple'">
									<v-radio-group v-model="deleteOptionText">
										<v-radio v-for="(i, index) in simple.options.optionsData" :label="i" :value="index"></v-radio>
									</v-radio-group>
								</div>
								<div v-else-if="simple.type == 'dropdown'">
									<v-select
										:items="simple.options.optionsData"
										v-model="deleteOptionText"
										:label="$t('new.validate.preview')"
									></v-select>
								</div>
								<div v-else>
									<v-checkbox
										class="preview_checkbox"
										v-for="i in simple.options.optionsData"
										:label="i"
										:value="i"
										v-model="deleteOptionText"
									></v-checkbox>
								</div> </v-card-text
						></v-card>
						<v-btn
							variant="outlined"
							@click="deleteOption"
							style="margin-bottom: 1rem"
							v-show="simple.options.optionsData.length != 0"
							>{{ $t("new.delete_selected") }}</v-btn
						>
					</v-card-text>
				</v-card>
				<!-- file -->
				<v-card v-else-if="simple.type == 'file'" variant="outlined" style="margin-bottom: 1rem; overflow-x: initial">
					<v-card-text style="padding-bottom: 0">
						<v-autocomplete
							:label="$t('new.files.specific')"
							:items="fileTypes"
							item-title="name"
							item-value="value"
							multiple
							variant="outlined"
							v-model="simple.options.optionsData"
							chips
						></v-autocomplete>
					</v-card-text>
				</v-card>
				<blockquote v-else style="margin-bottom: 1rem; overflow-x: initial" class="blockquote">
					{{ $t("new.question.answer_validate_unavailable") }}
				</blockquote>
				<h3 class="ques_title">{{ $t("new.question.question_placeholder") }}</h3>
				<v-text-field
					:label="$t('new.question.question_placeholder_sub')"
					variant="outlined"
					maxlength="500"
					v-model="simple.placeholder"
					:disabled="
						simple.type == 'multiple' ||
						simple.type == 'checkboxes' ||
						simple.type == 'dropdown' ||
						simple.type == 'date' ||
						simple.type == 'time'
					"
				></v-text-field>
				<v-btn variant="outlined" v-show="surveyType == 'advanced'" @click="addQuestion">{{ $t("new.add") }}</v-btn>
			</v-card-text>
		</v-card>
		<v-card
			variant="outlined"
			:title="$t('new.questions_list')"
			:subtitle="$t('new.questions_list_sub')"
			v-show="surveyType == 'advanced'"
			style="margin-top: 20px"
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
											{{ $t("results.attributes") }}
										</th>
										<th class="text-left">
											{{ $t("results.value") }}
										</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td>{{ $t("results.type") }}</td>
										<td>{{ $t("new.types." + item.type) }}</td>
									</tr>
									<tr>
										<td>{{ $t("new.question.question_placeholder") }}</td>
										<td>{{ item.placeholder }}</td>
									</tr>
									<tr>
										<td>{{ $t("new.question.question_prompt") }}</td>
										<td>{{ item.prompt }}</td>
									</tr>
									<tr
										v-if="
											item.type == 'multiple' ||
											item.type == 'checkboxes' ||
											item.type == 'dropdown' ||
											item.type == 'date' ||
											item.type == 'time' ||
											item.type == 'file'
										"
									>
										<td>{{ $t("new.options") }}</td>
										<td>
											<code>{{ item.options.optionsData }}</code>
										</td>
									</tr>
									<tr v-else>
										<td>{{ $t("new.question.answer_validate") }}</td>
										<td>{{ item.validate }}</td>
									</tr>
								</tbody>
							</v-table>
							<v-card-actions>
								<v-spacer></v-spacer>
								<v-btn variant="text" color="primary" @click="deleteQuestion(item.id)">
									{{ $t("results.delete") }}
								</v-btn>
								<v-btn variant="text" color="primary" @click="moveQuestion(item.id, 1)">
									{{ $t("new.moveup") }}
								</v-btn>
								<v-btn variant="text" color="primary" @click="moveQuestion(item.id, 2)">
									{{ $t("new.movedown") }}
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

				<h3 class="ques_title">Webhook</h3>
				<v-text-field
					:label="$t('new.webhook_sub')"
					variant="outlined"
					maxlength="500"
					v-model="simple.webhook"
				></v-text-field>
			</v-card-text>
		</v-card>

		<v-btn variant="outlined" @click="create" style="margin-top: 20px" v-show="surveyType">
			<span v-if="editUpdate">{{ $t("edit.edit") }}</span>
			<span v-else>{{ $t("new.create") }}</span>
		</v-btn>
	</div>
</template>

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
	min-width: 5rem;
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
