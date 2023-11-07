<script setup lang="ts">
const localePath = useLocalePath()
if (process.client) {
	const token = sessionStorage.getItem("_cransurvey_token")
	const username = sessionStorage.getItem("_cransurvey_usr")
	if (!token || !username) {
		navigateTo(localePath("/sign-in"))
	} else if (!sessionStorage.getItem("_cransurvey_token_lock")) {
		$fetch("/api/usr/token", {
			method: "POST",
			body: JSON.stringify({
				token: token,
			}),
		}).then((rsp) => {
			if (rsp.code == 0) {
				sessionStorage.setItem("_cransurvey_token_lock", true)
			} else {
				sessionStorage.removeItem("_cransurvey_token")
				sessionStorage.removeItem("_cransurvey_usr")
				navigateTo(localePath("/sign-in"))
			}
		})
	}
}
import "~/src/styles/dash.css"
</script>
<template>
	<h1 class="text-h4">{{ $t("share.share") }}</h1>
	<div class="mainGroup">
		<div class="card-group">
			<div class="card-side-group">
				<v-card :title="$t('share.link')" variant="outlined">
					<v-card-text style="padding-bottom: 0">
						<v-text-field
							:label="$t('share.link')"
							variant="outlined"
							v-model="page_link"
							ref="pagelink"
						></v-text-field>
					</v-card-text>
					<v-card-actions style="padding-top: 0">
						<v-btn @click="copyPageLink()">{{ $t("share.copy") }}</v-btn>
					</v-card-actions>
				</v-card>
				<v-card :title="$t('share.shorten_link')" variant="outlined" style="margin-top: 20px">
					<v-card-text style="padding-bottom: 0" v-show="shortened_link_generate">
						<v-text-field
							:label="$t('share.shortener_link')"
							variant="outlined"
							v-model="page_shorten_link"
							disabled
						></v-text-field>
						<v-text-field
							:label="$t('share.valid_times')"
							variant="outlined"
							v-model="shorten_link_expire"
							type="number"
						></v-text-field>
						<iframe
							:src="
								'https://t.cky.im/widget.html?expire=' +
								shorten_link_expire +
								'&pid=&url=' +
								encodeURIComponent(page_link)
							"
							frameborder="0"
							style="width: 100%"
							v-if="!page_shorten_link"
						></iframe>
					</v-card-text>
					<v-card-actions style="padding-top: 0">
						<v-btn @click="shortened_link_generate = true" v-show="!shortened_link_generate">{{
							$t("share.generate")
						}}</v-btn>
						<v-btn @click="copyShortenLink()">{{ $t("share.copy") }}</v-btn>
					</v-card-actions>
				</v-card>
			</div>
			<v-card :title="$t('share.qrcode')" variant="outlined">
				<v-card-text class="qrcode_box">
					<v-card class="qrcode_img" variant="tonal">
						<v-card-text v-html="qrcode_html" style="padding: 0"></v-card-text>
					</v-card>
				</v-card-text>
				<v-card-actions>
					<v-btn @click="generateQRCode()">{{ $t("share.generate") }}</v-btn>
				</v-card-actions>
			</v-card>
		</div>
	</div>
</template>
<script lang="ts">
import { useToast } from "vue-toastification"

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
	rtl: false,
}
export default {
	data() {
		return {
			drawer: true,
			rail: true,
			qrcode_html: "",
			page_link: "",
			page_shorten_link: "",
			shorten_link_expire: 0,
			shortened_link_generate: false,
		}
	},
	methods: {
		generateQRCode() {
			this.qrcode_html = `<img src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(
				this.page_link,
			)}">`
		},
		copyPageLink() {
			navigator.clipboard.writeText(this.page_link)
			toast.success(this.$t("share.copied"), toastCfg)
		},
		copyShortenLink() {
			navigator.clipboard.writeText(this.page_shorten_link)
			toast.success(this.$t("share.copied"), toastCfg)
		},
	},
	async mounted() {
		const host = location.host
		this.page_link = "http://" + host + "/view/" + this.$route.query.id
		window.onmessage = (e) => {
			if (e.data && e.data.status && e.data.status == 200) {
				this.page_shorten_link = "https://proj.sbs/" + e.data.url
			}
		}
	},
}
</script>
