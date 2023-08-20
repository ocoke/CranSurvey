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
            <h1 class="text-h4">{{ $t('users.users') }}</h1>
            <div class="mainGroup">
                <p class="text-subtitle-1" v-html="$t('users.signed', { username: '<code>' + username + '</code>', })"></p>
                <p class="text-subtitle-1">{{ siteUsersData }}</p>
                <v-card variant="tonal" style="margin: 20px auto; padding: 15px; padding-top: 5px;">
                    <v-list lines="one" item-props :items="siteUsers">
                        <template v-slot:title="{ title }">
                            <div v-html="title"></div>
                        </template>
                    </v-list>
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
        siteUsers: [],
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

      let uid = 0
    
      for (let i in siteUsers.list) {
        uid++
        this.siteUsers.push({
            title: '<code>#' + uid + ': ' + siteUsers.list[i] + '</code>',
        })
        this.siteUsers.push({
            type: "divider",
        })
      }


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