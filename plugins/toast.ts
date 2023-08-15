// toast.js
import Toast from "vue-toastification"
import "vue-toastification/dist/index.css"

export default defineNuxtPlugin((nuxtApp) => {
	nuxtApp.vueApp.use(Toast, {
		hideProgressBar: true,
		transition: "Vue-Toastification__fade",
	})
})
