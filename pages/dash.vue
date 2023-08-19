<script setup>
    const localePath = useLocalePath()
    const route = useRoute()
    if (process.client) {
        let token = sessionStorage.getItem("_cransurvey_token")
        if (!token) {
            navigateTo(localePath('/sign-in'))
        }
    }
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
          </v-list>
        </v-navigation-drawer>
        <v-main>
            <h1 class="text-h4">{{ $t('dashboard.dashboard') }}</h1>
            <div class="card-group">
                <v-card
                    :title="$t('dashboard.surveys')"
                    :subtitle="$t('dashboard.ongoing_surveys', 11)"
                    text=""
                    variant="tonal"
                    >
                    <v-card-actions>
                        <v-btn>{{ $t('dashboard.manage') }}</v-btn>
                    </v-card-actions>
                </v-card>
                <v-card
                    :title="$t('dashboard.users')"
                    :subtitle="$t('dashboard.site_users', 1)"
                    text=""
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
                    :subtitle="$t('dashboard.today_collected', 1)"
                    variant="tonal"
                    >
                    <v-card-actions>
                        <v-btn>{{ $t('dashboard.manage') }}</v-btn>
                    </v-card-actions>
                </v-card>
                <v-card
                    :title="$t('dashboard.this_week')"
                    :subtitle="$t('dashboard.week_collected', 7)"
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
      }
    },
  }
</script>
<style>
.dash_nav .v-avatar {
    border-radius: 0;
}
.dash_nav .v-main {
    max-width: 1080px;
    margin: 30px auto;
    padding-left: calc(var(--v-layout-left) + 20px);
    padding-right: calc(var(--v-layout-right) + 20px);
}
.card-group {
    margin-top: 40px;
    display: flex;
}
.card-group .v-card {
    max-width: 550px;
    min-width: 350px;
    width: 48%;
    margin-right: 1%;
    margin: 0 auto;
}
@media screen and (max-width: 810px) {
    .card-group {
        display: block;
    }
    .card-group .v-card {
        width: 100%;
        height: 100%;
        margin-top: 20px;
    }
}
</style>