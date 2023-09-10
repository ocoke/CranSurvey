<template>
	<NuxtLayout>
		<div v-if="route.path.includes('dash')">
			<NuxtLoadingIndicator />
			<!-- here -->
			<v-card class="dash_nav">
				<v-layout>
					<Drawer />
					<v-main>
						<NuxtPage />
					</v-main>
				</v-layout>
			</v-card>
		</div>
		<div v-else>
			<NuxtLoadingIndicator />
			<!-- here -->
			<NuxtPage />
		</div>
	</NuxtLayout>
</template>
<script setup>
import "~/src/styles/global.css"
import Drawer from "~/pages/dash/Drawer.vue"
</script>
