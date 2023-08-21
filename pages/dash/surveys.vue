<script setup>
    const localePath = useLocalePath()
    const route = useRoute()
    const { locale, locales } = useI18n()
    import Drawer from './Drawer.vue'   
    if (process.client) {
        let token = sessionStorage.getItem("_cransurvey_token")
        let username = sessionStorage.getItem('_cransurvey_usr')
        if (!token || !username) {
            navigateTo(localePath('/sign-in'))
        }
    }
    import '~/src/styles/dash.css'
</script>

<template>
    <v-card class="dash_nav">
      <v-layout>
        <Drawer />
        <v-main>
            <h1 class="text-h4">{{ $t('surveys.surveys') }}</h1>
            <div class="mainGroup">
                <p class="text-subtitle-1" v-html="$t('users.signed', { username: '<code>' + username + '</code>', })"></p>
                <p class="text-subtitle-1">{{ ongoingSurveysData }}</p>
                <v-card variant="outlined" style="margin: 20px auto; padding: 15px;">
                    <v-expansion-panels>
                        <v-expansion-panel
                            v-for="survey in surveys"
                        >
                        <v-expansion-panel-title>
                            <template v-slot:default="{ expanded }">
                            <v-row no-gutters>
                                <v-col cols="4" class="d-flex justify-start">
                                    {{ survey.title  }}
                                </v-col>
                                <v-col
                                cols="8"
                                class="text-grey"
                                >
                                <v-fade-transition leave-absolute>
                                    <span v-if="expanded">
                                     #{{ survey.id }}
                                    </span>
                                </v-fade-transition>
                                </v-col>
                            </v-row>
                        </template>
                        </v-expansion-panel-title>
                        <v-expansion-panel-text>
                            <p>{{ $t('surveys.description') }}: <code>{{ survey.description }}</code></p>
                            <p>{{ $t('surveys.enabled') }}: <code>{{ $t('surveys.enable_' + ( survey.enable || false ).toString())}}.</code></p>
                            <p>{{ $t('surveys.created_at') }}: <code>{{ new Date(survey.created_at) }}</code></p>
                            
                            <v-card-actions>
                                <v-spacer></v-spacer>
                                <v-btn
                                    variant="text"
                                    color="secondary"
                                    @click="navigateTo(localePath('/dash/edit?id=' + survey.id))"
                                >
                                    {{ $t('edit.edit') }}
                                </v-btn>
                                <v-btn
                                    variant="text"
                                    color="primary"
                                    @click="navigateTo(localePath('/dash/results?id=' + survey.id))"
                                >
                                    {{ $t('results.results') }}
                                </v-btn>
                            </v-card-actions>
                        
                        </v-expansion-panel-text>
                       
                        </v-expansion-panel>
                    </v-expansion-panels>
                </v-card>
                <v-btn variant="outlined" @click="signout">{{ $t('users.signout') }}</v-btn>
            </div>
        </v-main>
      </v-layout>
    </v-card>
  </template>

<script>
import { useToast } from 'vue-toastification'

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
    rtl: false
}
  export default {
    data () {
      return {
        drawer: true,
        rail: true,
        siteUsersLoading: true,
        siteUsersData: '',
        surveys: [],
        ongoingLoading: true,
        ongoingSurveysData: '',
      }
    },
    methods: {
        signout() {
            if (process.client) {
                sessionStorage.removeItem('_cransurvey_token')
                sessionStorage.removeItem('_cransurvey_usr')
                toast.success(this.$t('users.signout_success'), toastCfg)
                navigateTo(useLocalePath()('/sign-in'))

            }
        }
    },
    async mounted () {

      let siteUsers = await $fetch('/api/dash/users', {
        method: "POST",
        body: JSON.stringify({
          token: sessionStorage.getItem("_cransurvey_token")
        })
      })

      let ongoingSurveys = await $fetch('/api/dash/ongoing', {
        method: "POST",
        body: JSON.stringify({
          token: sessionStorage.getItem("_cransurvey_token")
        })
      })

      if (ongoingSurveys.code == 0) {
        this.ongoingSurveysData = this.$t('dashboard.ongoing_surveys', ongoingSurveys.count)
      } else {
        this.ongoingSurveysData = this.$t('dashboard.error_fetching_data')
      }

      this.ongoingLoading = false
    
    //   for (let i in ongoingSurveys.list) {
    //     this.surveys.push({
    //         title: ongoingSurveys.list[i].title,
    //     })
    //   }

    this.surveys = ongoingSurveys.list


      if (siteUsers.code == 0) {
        this.siteUsersData = this.$t('dashboard.site_users', siteUsers.count)
      } else {
        this.siteUsersData = this.$t('dashboard.error_fetching_data')
      }

      this.siteUsersLoading = false

      this.username = sessionStorage.getItem('_cransurvey_usr')



    }
  }
</script>
<style>
.mainGroup {
    margin-top: 20px;
    padding: 10px;
}
</style>