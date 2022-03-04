<script context="module">
	export const prerender = true;
</script>

<script lang="ts">
	// import SearchMiner from '../lib/components/SearchMiner.svelte';
	// import HomeInfo from '../lib/components/HomeInfo.svelte';
	// import { t } from '$lib/translations';
	import { browser } from '$app/env';
	import { onMount } from 'svelte';
	import { session } from '$app/stores';

	onMount(() => {
		// if (browser) setTimeout(async () => document.getElementById('searchminer').focus(), 0);
	});
</script>

<svelte:head>
	<!-- <title>hexapool.net - {$t('common.head')}</title> -->
</svelte:head>

COOKIE {JSON.stringify($session?.cookies)}

<br />
<br />
HEADERS {JSON.stringify($session?.headers)}

<div
	style="height: calc(100vh - 48px)"
	class="absolute w-screen bg-hero dark:bg-hero-dark opacity-40 bg-center bg-no-repeat bg-cover"
/>

<div class="absolute inset-0 flex flex-col h-full w-full max-h-home mx-auto xl:container">
	<div class="flex gap-4 h-2/6 place-content-end place-items-end" />
	<div class="flex h-2/6 place-content-center">
		<!-- <SearchMiner /> -->
	</div>
	<div class="flex h-2/6 place-items-center hide-scroll-bar snap-x">
		<!-- <HomeInfo /> -->
	</div>
</div>
