export default defineNuxtConfig({
	css: ["vuetify/lib/styles/main.sass", "@mdi/font/css/materialdesignicons.min.css"],
	build: {
		transpile: ["vuetify"],
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
				code: "en",
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
		],
		defaultLocale: "en",
		lazy: true,
		langDir: "locales",
        detectBrowserLanguage: {
            useCookie: true,
            cookieKey: 'i18n_redirected',
        },
	},
})