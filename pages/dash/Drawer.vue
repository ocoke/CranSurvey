<script setup>
    const localePath = useLocalePath()
    const route = useRoute()
    const { locale, locales } = useI18n()
    const switchLocalePath = useSwitchLocalePath()

    const availableLocales = computed(() => {
      // return (locales.value).filter(i => i.code !== locale.value)
      return locales.value
    })
</script>

<template>
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
        <v-list-item prepend-icon="mdi-home-city" :title="$t('dashboard.dashboard')" value="dashboard" @click="navigateTo(localePath('/dash'))"></v-list-item>
        <v-list-item prepend-icon="mdi-list-box-outline" :title="$t('dashboard.surveys')" value="surveys" @click="navigateTo(localePath('/dash/surveys'))"></v-list-item>
        <v-list-item prepend-icon="mdi-account-group-outline" :title="$t('dashboard.users')" value="users" @click="navigateTo(localePath('/dash/users'))"></v-list-item>
        
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
</template>
<script>
  export default {
    data () {
      return {
        drawer: true,
        rail: true,
        lang: useI18n().locale.value,
      }
    },
    methods: {
      switchLang () {
        navigateTo(useSwitchLocalePath()(this.lang))
      }
    },
}
</script>