import { createVuetify } from "vuetify"
import * as components from "vuetify/components"
import * as directives from "vuetify/directives"
import { md3 } from "vuetify/blueprints"
import { VDatePicker } from 'vuetify/labs/VDatePicker'


export default defineNuxtPlugin((nuxtApp) => {
	const vuetify = createVuetify({
		ssr: true,
		directives,
		blueprint: md3,
		components: {
			...components,
			VDatePicker,
		},
	})

	nuxtApp.vueApp.use(vuetify)
})
