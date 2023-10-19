<template>
	<NuxtLayout>
		<div v-if="$route.path.includes('dash')">
			<NuxtLoadingIndicator />
			<!-- here -->
			<v-card class="dash_nav">
				<v-layout>
					<Drawer />
					<v-main>
						<NuxtPage />
						<Footer style="margin-top: 30px;" />
					</v-main>
				</v-layout>
			</v-card>
			
		</div>
		<div v-else>
			<NuxtLoadingIndicator />
			<!-- here -->
			<NuxtPage />
			<Footer style="margin-top: 60px;"/>
		</div>
		
	</NuxtLayout>
</template>
<script setup>
import "~/src/styles/global.css"
import Drawer from "~/pages/dash/Drawer.vue"
import Footer from '~/pages/Footer.vue'
</script>
