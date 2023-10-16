<template>
<div class="main">

    <v-card style="box-shadow: none; background-color: #DCEDC8; padding: 10px 5px;">
        <v-card-title style="font-size: 1.5rem;">{{ surveyInfo.title }}</v-card-title>
        <v-card-subtitle>{{ surveyInfo.description }}</v-card-subtitle>
        <v-card-text v-if="!collected">
            <v-card variant="tonal" v-for="item in surveyInfo.questions">
                <v-card-title style="font-size: 1rem;">{{ item.question }}</v-card-title>
                <v-card-subtitle>{{ item.prompt }}</v-card-subtitle>
                <v-card-text>
                    <div class="short_answer" v-show="item.type == 'short_answer'">
                        <v-text-field variant="outlined" label="Your Answer" :placeholder="item.placeholder" counter :rules="[v => ansValidate(v || '', item.type, item.validate) || 'The answer doesn\'t meet the requirements.']" v-model="ans[item.id]"></v-text-field>
                    </div>
                </v-card-text>
            </v-card>
        </v-card-text>
        <v-card-text v-if="collected">
            <p>Your response has been recorded.</p>
        </v-card-text>
    </v-card>
    <v-btn style="box-shadow: none; background-color: #DCEDC8!important; float: right; color: rgba(0, 0, 0, .8)!important; margin-top: 10px; text-align: right;" @click="submit" :disabled="!ans" v-show="!collected">Submit</v-btn>
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
            if (!ans || ans == [] || !ans[0]) {
                toast.error('Please fill out all the required question.', toastCfg)
                return false
            }
            let answers = []
            
            for (let i in ans) {
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
    }
}
</script>
<style scoped>
.main {
    max-width: 650px;
    margin: 30px auto;
    padding: 15px;
}
</style>