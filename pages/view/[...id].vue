<template>
<div class="bg">
    <div class="main">

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
        <v-card color="light-green-lighten-4" v-for="item in surveyInfo.questions" style="margin-top: 10px; box-shadow: none;">
            <v-card-title style="font-size: 1rem;">{{ item.question }}<span v-show="item.required">*</span></v-card-title>
            <v-card-subtitle v-show="item.type != 'info'">{{ item.prompt }}</v-card-subtitle>
            <v-card-text>
                <div class="short_answer" v-show="item.type == 'short_answer'">
                    <v-text-field variant="outlined" label="Your Answer" :placeholder="item.placeholder" counter :rules="[v => ansValidate(v || '', item.type, item.validate) || ('The answer doesn\'t meet the requirements. (' + item.validate.split(':')[0] + '-' + item.validate.split(':')[1] + ')')]" v-model="ans[item.id]"></v-text-field>
                </div>
                <div class="paragraph" v-show="item.type == 'paragraph'">
                    <v-textarea label="Your Answer" variant="outlined" :placeholder="item.placeholder" counter :rules="[v => ansValidate(v || '', item.type, item.validate) || ('The answer doesn\'t meet the requirements. (' + item.validate.split(':')[0] + '-' + item.validate.split(':')[1] + ')')]" v-model="ans[item.id]"></v-textarea>
                </div>
                <div class="prompt" v-show="item.type == 'info'">
                    <p>{{ item.prompt }}</p>
                </div>
            </v-card-text>
        </v-card>
        <v-btn style="box-shadow: none; background-color: #DCEDC8!important; float: right; color: rgba(0, 0, 0, .8)!important; margin-top: 10px; text-align: right; margin-bottom: 30px;" @click="submit" :disabled="!ans" v-show="!collected">Submit</v-btn>
    </div>
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

            const surveyResp = await $fetch('/api/survey/get', {
                method: "POST",
                body: {
                    uniqueId,
                }
            })
            
            let surveyInfo = surveyResp.survey
            
            for (let i in surveyInfo.questions) {
                if (surveyInfo.questions[i].required && !ans[i]) {
                    toast.error('Please answer all the required questions.', toastCfg)
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
</style>