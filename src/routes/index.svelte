<script context="module">
	export const prerender = true;
</script>

<script lang="ts">
	import { browser } from '$app/env';
	import { session } from '$app/stores';
	if (browser && !$session.cookies) {
		document.cookie = 'testcookie=omnomnom; expires=Tue, 18 Dec 2099 12:00:00 UTC;';
	}
</script>

COOKIE {JSON.stringify($session?.cookies)}

<br />
<br />
HEADERS {JSON.stringify($session?.headers)}
