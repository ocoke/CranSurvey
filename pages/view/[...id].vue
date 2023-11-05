<template>
<div class="bg"></div>
<div class="main">
    <Title>{{ surveyInfo.title }} - CranSurvey</Title>
    <v-card style="box-shadow: none; padding: 10px 6px 16px 6px;" color="light-green-lighten-4">
        <v-card-title style="font-size: 1.5rem;">{{ surveyInfo.title }}</v-card-title>
        <v-card-text style="opacity: .7;padding-bottom: .5rem;">{{ surveyInfo.description }}</v-card-text>
        <v-card-text class="subtitle-text"><v-divider></v-divider></v-card-text>
        <v-card-text class="text-deep-orange-darken-3 subtitle-text" style="padding-top: .5rem;">* Indicates required question</v-card-text>
    </v-card>
    <!-- <v-card color="light-green-lighten-4" style="box-shadow: none; margin-top: 20px;">
        <v-card-text v-if="!collected">
            
        </v-card-text>
        <v-card-text v-if="collected">
            <p>Your response has been recorded.</p>
        </v-card-text>
    </v-card> -->
    <v-card color="light-green-lighten-4" v-for="item in surveyInfo.questions" style="margin-top: 10px; box-shadow: none;" v-show="!collected">
        <v-card-title class="quesition_card_title" style="font-size: 1rem;">{{ item.question }}<span v-show="item.required">*</span></v-card-title>
        <v-card-subtitle v-show="item.type != 'info' && item.prompt" class="question_card_subtitle">{{ item.prompt }}</v-card-subtitle>
        <v-card-text class="question_card_text">
            <div class="short_answer" v-if="item.type == 'short_answer'">
                <v-text-field variant="outlined" label="Your Answer" :placeholder="item.placeholder" counter :rules="[v => ansValidate(v || '', item.type, item.validate) || ('The answer doesn\'t meet the requirements. (' + item.validate.split(':')[0] + '-' + item.validate.split(':')[1] + ')')]" v-model="ans[item.id]"></v-text-field>
            </div>
            <div class="paragraph" v-if="item.type == 'paragraph'">
                <v-textarea label="Your Answer" variant="outlined" :placeholder="item.placeholder" counter :rules="[v => ansValidate(v || '', item.type, item.validate) || ('The answer doesn\'t meet the requirements. (' + item.validate.split(':')[0] + '-' + item.validate.split(':')[1] + ')')]" v-model="ans[item.id]"></v-textarea>
            </div>
            <div class="prompt" v-if="item.type == 'info'">
                <p>{{ item.prompt }}</p>
            </div>
            <div class="multiple" v-if="item.type == 'multiple' && item.options && item.options.optionsData">
                <v-radio-group v-model="ans[item.id]">
                    <v-radio :label="i" :value="index" v-for="(i, index) in item.options.optionsData"></v-radio>
                </v-radio-group>
            </div>
            <div class="checkboxes" v-if="item.type == 'checkboxes' && item.options && item.options.optionsData">
                <v-checkbox class="viewing-checkboxes" @change="checkboxesItem($event, item.id, item.options.optionsData.length)" :label="i" :value="index" v-for="(i, index) in item.options.optionsData"></v-checkbox>
            </div>
            <div class="dropdown" v-if="item.type == 'dropdown' && item.options && item.options.optionsData">
                <v-select :items="item.options.optionsData" v-model="ans[item.id]" item-title="text" item-value="value" label="Select"></v-select>
            </div>
            <div class="date" v-if="item.type == 'date' && item.options && item.options.optionsData">
                <v-dialog width="500">
                    <template v-slot:activator="{ props }" >
                        <p><v-btn v-bind="props" text="Select Date" variant="outlined"></v-btn>
                        <span v-show="ans[item.id]" style="margin-left: 1rem;">{{ new Date(ans[item.id]).toLocaleString() }}</span></p>
                        <p v-if="ans[item.id] && !ansValidate(new Date(ans[item.id]).getTime(), 'date', item.options.optionsData)" class="text-deep-orange-darken-3" style="margin-top: 1rem;">Your answer doesn't meet the requirements.</p>
                    </template>

                    <template v-slot:default="{ isActive }">
                        <v-card title="Date">
                        <v-card-text>
                            <v-date-picker v-model="ans[item.id]" variant="outlined" style="margin: 0 auto; box-shadow: none;"></v-date-picker>
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
            </div>
        </v-card-text>
    </v-card>
    <v-card color="light-green-lighten-4" v-show="collected" style="margin-top: 10px; box-shadow: none;">
        <v-card-text>
            <p>Your response has been recorded.</p>
        </v-card-text>
    </v-card>
    <v-btn style="box-shadow: none; background-color: #DCEDC8!important; float: right; color: rgba(0, 0, 0, .8)!important; margin-top: 10px; text-align: right; margin-bottom: 30px;" @click="submit" :disabled="!ans" v-show="!collected">Submit</v-btn>
    <span style="display: none;" id="_info">{{ surveyInfo }}</span>
</div>  
</template>
<script setup>
import ansValidate from '~/src/functions/validate'
import { v4 as uuidv4 } from 'uuid'

const route = useRoute()

const uniqueId = route.params.id[0]

const surveyResp = await $fetch('/api/survey/get', {
    method: "POST",
    body: {
        uniqueId,
    }
})

for (let i of surveyResp.survey.questions) {
    if (i.type == 'dropdown') {
        for (let j in i.options.optionsData) {
            i.options.optionsData[j] = {
                text: i.options.optionsData[j],
                value: Number(j),
            }
        }
    }
}

const surveyInfo = surveyResp.survey
</script>
<script>
import { useToast } from "vue-toastification"
import { ref } from 'vue'
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
            ans: [],
            surveyInfo: {},
            collected: false,
        }
    },
    methods: {
        async submit() {
            let userId;
            let uniqueId = useRoute().params.id[0]
            let ans = this.ans
            if (localStorage.getItem('cransurvey-usrid')) {
                userId = localStorage.getItem('cransurvey-usrid')
            } else {
                userId = uuidv4()
                localStorage.setItem('cransurvey-usrid', userId)
            }
            let answers = []

            const surveyInfo = JSON.parse(document.getElementById('_info').innerText)
            for (let i in surveyInfo.questions) {
                if (surveyInfo.questions[i].required && !ans[i] && ans[i] != 0) {
                    toast.error('Please answer all the required questions.', toastCfg)
                    return false
                }
                if (surveyInfo.questions[i].type == 'date') {
                    ans[i] = new Date(ans[i]).getTime()
                    surveyInfo.questions[i].validate = surveyInfo.questions[i].options.optionsData
                }
                if (ans[i] && !ansValidate(ans[i], surveyInfo.questions[i].type, surveyInfo.questions[i].validate)) {
                    toast.error('The answer doesn\'t meet the requirements. Please check it and try again.', toastCfg)
                    return false
                }
                answers.push({
                    id: i,
                    answer: ans[i]
                })
            }
            const resp = await $fetch('/api/survey/collect', {
                method: "POST",
                body: {
                    uniqueId,
                    userId,
                    answers,
                }
            })
            if (resp.code == 0) {
                // toast.success('Your response has been recorded.', toastCfg)
                this.collected = true
            } else {
                toast.error('Something went wrong. Please try again later.', toastCfg)
                return false
            }
        },
        checkboxesItem($event, id, length) {
            let ans = this.ans
            if (!ans[id]) {
                ans[id] = []
                for (let i = 0; i <= (length - 1); i++) {
                    ans[id].push(false)
                }
            }
            let v = $event.target.value
            v = Number(v)
            if (ans[id][v] == true) {
                ans[id][v] = false
            } else {
                ans[id][v] = true
            }
        }
    },
    async mounted() {
        
    },
}
</script>
<style scoped>
.main {
    max-width: 650px;
    margin: 10px auto;
    padding: 10px 15px;
}
.bg {
    background-color: #F1F8E9;
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    position: fixed;
    z-index: -1;
    top: 0;
    right: 0;
}
.subtitle-text {
    padding-bottom: 0;
    padding-top: 0;
}
.quesition_card_title {
    padding-bottom: 0;
}
.question_card_subtitle {
    margin-bottom: 1rem;
}
.question_card_text {
    padding-top: 0;
}
</style>

<style>
.viewing-checkboxes .v-input__details, .v-radio-group .v-input__details {
	display: none;
}
</style>