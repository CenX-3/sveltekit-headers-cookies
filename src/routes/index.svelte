<script>
	import { browser } from '$app/env';
	import { session } from '$app/stores';
	// if (browser && !$session.username) {
	// 	document.cookie = 'kit_username=user1; expires=Tue, 18 Dec 2022 12:00:00 UTC;';
	// }
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
COOKIE {JSON.stringify($session?.cookies)}

<br>
<br>
HEADERS {JSON.stringify($session?.headers)}

