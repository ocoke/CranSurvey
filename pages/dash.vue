<script setup>
    const localePath = useLocalePath()
    const route = useRoute()
    const { locale, locales } = useI18n()
    if (process.client) {
        let token = sessionStorage.getItem("_cransurvey_token")
        if (!token) {
            navigateTo(localePath('/sign-in'))
        }
    }
    import '~/src/styles/dash.css'
    const switchLocalePath = useSwitchLocalePath()

    const availableLocales = computed(() => {
      // return (locales.value).filter(i => i.code !== locale.value)
      return locales.value
    })

    

</script>

<template>
    <v-card class="dash_nav">
      <v-layout>
        <v-navigation-drawer
          v-model="drawer"
          :rail="rail"
          permanent

          @click="rail = false"
        >
          <v-list-item
            prepend-avatar="/icons/64x64.png"
            title="CranSurvey"
            nav
          >
            <template v-slot:append>
              <v-btn
                variant="text"
                icon="mdi-chevron-left"
                @click.stop="rail = !rail"
              ></v-btn>
            </template>
          </v-list-item>
  
          <v-divider></v-divider>
  
          <v-list density="compact" nav>
            <v-list-item prepend-icon="mdi-home-city" :title="$t('dashboard.dashboard')" value="dashboard"></v-list-item>
            <v-list-item prepend-icon="mdi-account-group-outline" :title="$t('dashboard.users')" value="users"></v-list-item>
            <v-select
              :label="$t('dashboard.language')"
              :items="availableLocales"
              item-title="name"
              item-value="code"
              v-model="lang"
              @update:modelValue="switchLang()"
            ></v-select>
          </v-list>
        </v-navigation-drawer>
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
                        <v-btn>{{ $t('dashboard.manage') }}</v-btn>
                    </v-card-actions>
                </v-card>
                <v-card
                    :title="$t('dashboard.users')"
                    :text="$t('dashboard.site_users', 1)"
                    variant="tonal"
                    >
                    <v-card-actions>
                        <v-btn>{{ $t('dashboard.manage') }}</v-btn>
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

      console.log(ongoingSurveys)

      if (ongoingSurveys.code == 0) {
        this.ongoingSurveysData = this.$t('dashboard.ongoing_surveys', ongoingSurveys.count)
      } else {
        this.ongoingSurveysData = this.$t('dashboard.error_fetching_data')
      }

      this.ongoingLoading = false
      

    }
  }
</script>
