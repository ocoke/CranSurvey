export default defineNuxtConfig({
	css: ["vuetify/lib/styles/main.sass", "@mdi/font/css/materialdesignicons.min.css"],
	build: {
		transpile: ["vuetify", "vue-toastification"],
	},
	vite: {
		define: {
			"process.env.DEBUG": false,
		},
	},
	modules: ["@nuxtjs/i18n"],
	i18n: {
		locales: [
			{
				code: "en-US",
				file: "en_US.json",
				name: "English (US)",
			},
			{
				code: "es-ES",
				file: "es_ES.json",
				name: "Español (España)",
			},
			{
				code: "de-DE",
				file: "de_DE.json",
				name: "Deutsch (Deutschland)",
			},
			{
				code: "fr-FR",
				file: "fr_FR.json",
				name: "Français (France)",
			},
			{
				code: "ja-JP",
				file: "ja_JP.json",
				name: "日本語",
			},
			{
				code: "ko-KR",
				file: "ko_KR.json",
				name: "한국어",
			},
			{
				code: "pt-PT",
				file: "pt_PT.json",
				name: "Português (Portugal)",
			},
			{
				code: "zh-CN",
				file: "zh_CN.json",
				name: "简体中文",
			},
			{
				code: "zh-HK",
				file: "zh_HK.json",
				name: "繁體中文（香港）",
			},
			{
				code: "zh-TW",
				file: "zh_TW.json",
				name: "繁體中文（台灣）",
			},
		],
		defaultLocale: "en-US",
		lazy: true,
		langDir: "locales",
		detectBrowserLanguage: {
			useCookie: true,
			cookieKey: "i18n_redirected",
		},
		strategy: "prefix",
	},
})
