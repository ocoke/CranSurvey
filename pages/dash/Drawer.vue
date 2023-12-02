<script setup>
import { useDisplay, useTheme } from "vuetify"

const localePath = useLocalePath()
const { locales } = useI18n()

const availableLocales = computed(() => {
	return locales.value
})

const theme = useTheme()

function toggleTheme() {
	theme.global.name.value = theme.global.current.value.dark ? "light" : "dark"
}

const { mobile } = useDisplay()

const drawer = ref(true)

if (mobile.value) {
	drawer.value = false
}

const lang = ref(useI18n().locale.value)

const rail = ref(true)

const switchLang = () => {
	navigateTo(useSwitchLocalePath()(lang.value))
}
</script>

<template>
	<v-app-bar collapse :elevation="0" density="compact" style="width: 256px" v-if="mobile">
		<!-- prettier-ignore-attribute -->
		<v-app-bar-nav-icon @click.stop="drawer = !drawer; rail = false;"></v-app-bar-nav-icon>
		<v-app-bar-title>CranSurvey</v-app-bar-title>
	</v-app-bar>
	<v-navigation-drawer
		v-model="drawer"
		:rail="rail"
		:permanent="!mobile"
		:temporary="mobile"
		@click="rail = false"
		style="border-radius: 0 24px 0 0"
	>
		<v-list-item prepend-avatar="/icons/64x64.png" title="CranSurvey" nav v-if="!mobile" style="margin-left: 0.35rem">
			<template v-slot:append>
				<v-btn variant="text" icon="mdi-chevron-left" @click.stop="rail = !rail"></v-btn>
			</template>
		</v-list-item>

		<v-divider></v-divider>

		<v-list nav>
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
