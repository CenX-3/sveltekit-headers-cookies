import type { Handle } from '@sveltejs/kit';

/** @type {import('@sveltejs/kit').Handle} */
export async function handle({ event, resolve }): Handle {
	// request.locals.user = await getUserInformation(request.headers.cookie);
	event.locals.cookies = await event.request.headers.get('cookie');

	let test = '';
	for (const pair of await event.request.headers.entries()) {
		test = test.concat(pair[0] + ': ' + pair[1]);
	}
	event.locals.headers = test;

	const response = await resolve(event);

	return response;
}

export function getSession(request) {
	return { cookies: request.locals.cookies, headers: request.locals.headers };
}
