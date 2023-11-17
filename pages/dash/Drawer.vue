<script setup>
const localePath = useLocalePath()
const { locales } = useI18n()
// const switchLocalePath = useSwitchLocalePath()

const availableLocales = computed(() => {
	// return (locales.value).filter(i => i.code !== locale.value)
	return locales.value
})
import { useTheme } from "vuetify"

const theme = useTheme()

function toggleTheme() {
	theme.global.name.value = theme.global.current.value.dark ? "light" : "dark"
}
</script>

<template>
	<v-navigation-drawer v-model="drawer" :rail="rail" permanent @click="rail = false">
		<v-list-item prepend-avatar="/icons/64x64.png" title="CranSurvey" nav>
			<template v-slot:append>
				<v-btn variant="text" icon="mdi-chevron-left" @click.stop="rail = !rail"></v-btn>
			</template>
		</v-list-item>

		<v-divider></v-divider>

		<v-list density="compact" nav>
			<v-list-item
				rounded="xl"
				color="primary"
				prepend-icon="mdi-home-city"
				:title="$t('dashboard.dashboard')"
				value="dashboard"
				@click="navigateTo(localePath('/dash'))"
			></v-list-item>
			<v-list-item
				rounded="xl"
				color="primary"
				prepend-icon="mdi-list-box-outline"
				:title="$t('dashboard.surveys')"
				value="surveys"
				@click="navigateTo(localePath('/dash/surveys'))"
			></v-list-item>
			<v-list-item
				rounded="xl"
				color="primary"
				prepend-icon="mdi-account-group-outline"
				:title="$t('dashboard.users')"
				value="users"
				@click="navigateTo(localePath('/dash/users'))"
			></v-list-item>
			<v-list-item
				rounded="xl"
				color="primary"
				prepend-icon="mdi-cog-outline"
				:title="$t('settings.settings')"
				value="settings"
				@click="navigateTo(localePath('/dash/settings'))"
			></v-list-item>
			<v-list-item
				rounded="xl"
				color="primary"
				prepend-icon="mdi-brightness-6"
				:title="$t('dashboard.toggleTheme')"
				value="theme"
				@click="toggleTheme"
			></v-list-item>

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
	data() {
		return {
			drawer: true,
			rail: true,
			lang: useI18n().locale.value,
		}
	},
	methods: {
		switchLang() {
			navigateTo(useSwitchLocalePath()(this.lang))
		},
	},
}
</script>
