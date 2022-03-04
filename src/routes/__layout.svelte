<script context="module" lang="ts">
	// import { t, locale, loadTranslations } from '$lib/translations';
	// import { languages } from '$lib/stores/language';
	// import type { Load } from '@sveltejs/kit';

	// export const load: Load = async ({ url, session }) => {
	// 	const defaultLocale = languages.find((e) => e.language == session.language);
	// 	const initLocale = defaultLocale?.locale || locale.get() || 'en';
	// 	await loadTranslations(initLocale, url.pathname);

	// 	return {
	// 		props: { session: session },
	// 		stuff: { headerHeight: 64 }
	// 	};
	// };
</script>

<script lang="ts">
	// import PageLoading from '$lib/components/PageLoading.svelte';
	// import { websocketStore } from '$lib/stores/websocket';
	// import Header from '$lib/header/Header.svelte';
	// import Footer from '$lib/footer/Footer.svelte';
	// import { theme, Theme } from '$lib/stores/theme';
	import { browser } from '$app/env';
	import { onMount } from 'svelte';
	import '../app.css';

	// onMount(async () => {
	//  TODO Fix Websocket
	//   if (browser) $websocketStore;
	// });

	// if (browser)
	// 	theme.subscribe((element) =>
	// 		element === Theme.Dark
	// 			? document.body.classList.add('dark')
	// 			: document.body.classList.remove('dark')
	// 	);

	// const headerHeight = 48;
	// const footerHeight = 60;
</script>

<div class={`select-none h-full max-h-screen overflow-hidden antialiased`}>
	<div class="h-full max-h-screen">
		<!-- <Header {headerHeight} />

		<PageLoading {headerHeight} />

		<section
			style={`top:${headerHeight}px ;max-height: calc(100% - ${headerHeight}px);`}
			class="absolute w-screen overflow-x-hidden md:scrollbar-thin md:scrollbar-track-slate-200 md:scrollbar-thumb-slate-400 md:dark:scrollbar-thumb-blue-100 md:dark:scrollbar-track-gray-700 bg-gradient-to-b from-slate-200 via-slate-100 to-slate-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-700"
		>
			<div
				class="relative bg-gradient-home from-slate-200/75 via-slate-100/75 to-slate-50/75 dark:from-slate-700/50 dark:via-slate-800/50 dark:to-slate-900/50"
			>
				<main class="relative" style={`min-height: calc(100vh - ${headerHeight + footerHeight}px)`}>
			
				</main>
				<Footer {footerHeight} /> -->
		<!-- </div>
		</section> -->
		<slot />
	</div>
</div>
