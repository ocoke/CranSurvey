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
			:title="$t('new.q1_simple')"
			:subtitle="$t('new.simple_sub')"
			v-show="surveyType == 'simple'"
		>
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
				<v-text-field
					:label="$t('new.question.question_type')"
					variant="outlined"
					maxlength="500"
					v-model="simple.type"
					disabled
				></v-text-field>
				<!-- <v-select
					label="Select"
					:items="$t('new.types')"
					v-model="simple.type"
					variant="outlined"
				></v-select> -->

				<h3 class="ques_title">{{ $t("new.question.question_placeholder") }}</h3>
				<v-text-field
					:label="$t('new.question.question_placeholder_sub')"
					variant="outlined"
					maxlength="500"
					v-model="simple.placeholder"
				></v-text-field>
			</v-card-text>
		</v-card>
		<v-card
			variant="outlined"
			:title="$t('new.q1_advanced')"
			:subtitle="$t('new.advanced_sub')"
			v-show="surveyType == 'advanced'"
		>
		</v-card>
		<v-card
			variant="outlined"
			:title="$t('new.q1_prompt')"
			:subtitle="$t('new.prompt_sub')"
			v-show="surveyType == 'prompt'"
		>
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
				type: "string_plain",
			},
			surveyTitle: "",
			surveyDesc: "",
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
			if (this.surveyType == "simple") {
				const info = this.simple
				if (!info.question || !info.type || !this.surveyTitle || !this.surveyDesc) {
					toast.error(this.$t("new.miss_required"), toastCfg)
					return false
				}
				const data = {
					title: this.surveyTitle,
					description: this.surveyDesc,
					token: sessionStorage.getItem("_cransurvey_token"),
					type: "simple",
					questions: [
						{
							id: 0,
							type: info.type,
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
			}
		},
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
</style>
