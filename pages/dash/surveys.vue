<script setup>
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
	<h1 class="text-h4">{{ $t("surveys.surveys") }}</h1>
	<v-btn variant="outlined" @click="navigateTo(localePath('/dash/new'))" style="margin-top: 20px; margin-left: 8px">{{
		$t("new.new")
	}}</v-btn>
	<div class="mainGroup">
		<v-card variant="outlined" style="margin: 20px auto; padding: 15px" :loading="loading">
			<template v-slot:text>
				<v-text-field
					v-model="search"
					:label="$t('results.search')"
					prepend-inner-icon="mdi-magnify"
					single-line
					variant="outlined"
					hide-details
				></v-text-field>
			</template>

			<v-card-text>
				<v-data-table-server
					:headers="headers"
					:items="tableItems"
					:search="search"
					v-model:items-per-page="itemsPerPage"
					:items-length="totalItems"
					:loading="loading"
					@update:options="loadItems"
					class="resultsDataTable"
				>
					<template v-slot:item="{ item }">
						<tr>
							<td>{{ item.id }}</td>
							<td>{{ item.title }}</td>

							<td>{{ desc(item.description) }}</td>
							<td>{{ item.date }}</td>
							<td>{{ $t("surveys.boolean." + item.enabled) }}</td>
							<td>{{ item.questions }}</td>
							<v-dialog width="500">
								<template v-slot:activator="{ props }">
									<td>
										<v-btn variant="tonal" density="comfortable" v-bind="props">{{ $t("surveys.view") }}</v-btn>
									</td>
								</template>
								<template v-slot:default="{ isActive }">
									<v-card>
										<v-card-title>{{ $t("surveys.view") }}</v-card-title>
										<v-card-text>
											<p>{{ $t("surveys.headers.id") }}: {{ item.id }}</p>
											<p>{{ $t("surveys.headers.title") }}: {{ item.title }}</p></v-card-text
										>

										<v-card-actions>
											<v-spacer></v-spacer>
											<v-btn
												variant="text"
												color="primary"
												@click="navigateTo(localePath('/dash/new?id=' + item.fullId))"
											>
												{{ $t("edit.edit") }}
											</v-btn>
											<!-- prettier-ignore -->
											<v-btn variant="text" color="primary" @click="deleteItem = item; deleteConfirm = true;">
								{{ $t("results.delete") }}
							</v-btn>
											<v-btn
												variant="text"
												color="primary"
												@click="navigateTo(localePath('/dash/share?id=' + item.fullId))"
											>
												{{ $t("share.share") }}
											</v-btn>
											<v-btn
												variant="text"
												color="primary"
												@click="navigateTo(localePath('/dash/details?id=' + item.fullId))"
											>
												{{ $t("results.results") }}
											</v-btn>
											<v-btn variant="text" color="primary" @click="isActive.value = false">
												{{ $t("results.close") }}
											</v-btn>
										</v-card-actions>
									</v-card>
								</template>
							</v-dialog>
						</tr>
					</template>
				</v-data-table-server>
			</v-card-text>
		</v-card>
	</div>

	<v-dialog width="500" v-model="deleteConfirm">
		<v-card :title="$t('delete.warning')">
			<v-card-text>
				{{ $t("delete.warning_msg", { title: deleteItem.title }) }}
			</v-card-text>
			<v-card-actions>
				<v-spacer></v-spacer>
				<v-btn :text="$t('delete.cancel')" @click="deleteConfirm = false"></v-btn>
				<!-- prettier-ignore -->
				<v-btn
					:text="$t('delete.confirm')"
					@click="
						deleteSurvey(deleteItem.fullId);
						deleteConfirm = false
					"
				></v-btn>
			</v-card-actions>
		</v-card>
	</v-dialog>
</template>

<script>
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
			surveys: [],
			tableItems: [],
			itemsPerPage: 10,
			totalItems: 0,
			search: "",
			loading: true,
			token: "",
			deleteConfirm: false,
			deleteItem: {},
			headers: [
				{
					align: "start",
					key: "id",
					sortable: false,
					title: "ID",
				},
				{
					align: "start",
					key: "title",
					sortable: false,
					title: "Title",
				},
				{
					align: "start",
					key: "description",
					sortable: false,
					title: "Description",
				},
				{
					align: "start",
					key: "date",
					sortable: true,
					title: "Date",
				},
				{
					align: "start",
					key: "enabled",
					sortable: true,
					title: "Enabled",
				},
				{
					align: "start",
					key: "questions",
					sortable: false,
					title: "Questions",
				},
				{
					align: "start",
					key: "view",
					sortable: false,
					title: "View",
				},
			],
		}
	},
	methods: {
		loadItems({ page, itemsPerPage, sortBy }) {
			this.loading = true
			if (!this.token) return
			$fetch("/api/survey/lists", {
				method: "POST",
				body: JSON.stringify({
					token: this.token,
					uniqueId: useRoute().query.id,
					page,
					pagesize: itemsPerPage,
					sortBy,
					search: this.search,
				}),
			}).then((resp) => {
				if (resp.code == 0) {
					const list = []
					for (const i in resp.list) {
						list.push({
							id: "#" + resp.list[i].id.slice(-6),
							fullId: resp.list[i].id,
							title: resp.list[i].title,
							description: resp.list[i].description,
							date: new Date(resp.list[i].created_at).toLocaleString(),
							enabled: resp.list[i].enable,
							questions: resp.list[i].questions.length,
						})
					}
					this.tableItems = list
					this.totalItems = resp.count
				} else {
					this.tableItems = []
					this.totalItems = 0
				}
				this.loading = false
			})
		},
		desc(text) {
			if (typeof text != "string") return text
			if (text.length <= 80) return text
			text = text.slice(0, 80)
			if (text.endsWith(" ")) {
				return text.slice(0, 79) + "..."
			} else {
				return text + "..."
			}
		},
		async deleteSurvey(id) {
			const token = sessionStorage.getItem("_cransurvey_token")
			const rsp = await $fetch("/api/survey/delete", {
				method: "POST",
				body: JSON.stringify({
					token,
					uniqueId: id,
				}),
			})
			if (rsp.code == 0) {
				toast.success(this.$t("delete.success"), toastCfg)
				this.surveys = this.surveys.filter((survey) => survey.id != id)
			} else {
				toast.error(this.$t("delete.error"), toastCfg)
			}
		},
	},
	async mounted() {
		for (const i in this.headers) {
			this.headers[i].title = this.$t("surveys.headers." + this.headers[i].key)
		}

		this.token = sessionStorage.getItem("_cransurvey_token")

		this.loadItems({ page: 1, itemsPerPage: 10 })

		this.username = sessionStorage.getItem("_cransurvey_usr")
	},
}
</script>
<style scoped>
.mainGroup {
	margin-top: 10px;
	padding: 10px;
}
</style>
