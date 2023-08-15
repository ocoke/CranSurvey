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
			},
			{
				code: "zh-CN",
				file: "zh_CN.json",
			},
			{
				code: "zh-HK",
				file: "zh_HK.json",
			},
			{
				code: "ja-JP",
				file: "ja_JP.json",
			},
			{
				code: "zh-TW",
				file: "zh_TW.json",
			},
			{
				code: "es-ES",
				file: "es_ES.json",
			},
		],
		defaultLocale: "en",
		lazy: true,
		langDir: "locales",
		detectBrowserLanguage: {
			useCookie: true,
			cookieKey: "i18n_redirected",
		},
		strategy: "prefix",
	},
})
