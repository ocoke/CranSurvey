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
            <h1 class="text-h4">{{ $t('dashboard.dashboard') }}</h1>
            <div class="card-group">
                <v-card
                    :title="$t('dashboard.surveys')"
                    :text="ongoingSurveysData"
                    :loading="ongoingLoading"
                    variant="tonal"
                    >
                    <v-card-actions>
                        <v-btn @click="navigateTo(localePath('/dash/surveys'))">{{ $t('dashboard.manage') }}</v-btn>
                    </v-card-actions>
                </v-card>
                <v-card
                    :title="$t('dashboard.users')"
                    :text="siteUsersData"
                    :loading="siteUsersLoading"
                    variant="tonal"
                    >
                    <v-card-actions>
                        <v-btn @click="navigateTo(localePath('/dash/users'))">{{ $t('dashboard.manage') }}</v-btn>
                    </v-card-actions>
                </v-card>
            </div>
            <div class="card-group">
                <v-card
                    :title="$t('dashboard.today')"
                    :text="$t('dashboard.today_collected', 1)"
                    variant="tonal"
                    >
                    <v-card-actions>
                        <v-btn>{{ $t('dashboard.manage') }}</v-btn>
                    </v-card-actions>
                </v-card>
                <v-card
                    :title="$t('dashboard.this_week')"
                    :text="$t('dashboard.week_collected', 7)"
                    variant="tonal"
                    >
                    <v-card-actions>
                        <v-btn>{{ $t('dashboard.manage') }}</v-btn>
                    </v-card-actions>
                </v-card>
            </div>
        </v-main>
      </v-layout>
    </v-card>
  </template>

<script>
  export default {
    data () {
      return {
        drawer: true,
        rail: true,
        ongoingLoading: true,
        ongoingSurveysData: '',
        lang: useI18n().locale.value,
        siteUsersLoading: true,
        siteUsersData: '',
      }
    },
    methods: {
      switchLang () {
        navigateTo(useSwitchLocalePath()(this.lang))
      }
    },
    async mounted () {
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
      

      let siteUsers = await $fetch('/api/dash/users', {
        method: "POST",
        body: JSON.stringify({
          token: sessionStorage.getItem("_cransurvey_token")
        })
      })

      if (siteUsers.code == 0) {
        this.siteUsersData = this.$t('dashboard.site_users', siteUsers.count)
      } else {
        this.siteUsersData = this.$t('dashboard.error_fetching_data')
      }

      this.siteUsersLoading = false

    }
  }
</script>
