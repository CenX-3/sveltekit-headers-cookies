import type { Handle, GetSession } from '@sveltejs/kit';

export const handle: Handle = async ({ event, resolve }) => {
	// request.locals.user = await getUserInformation(request.headers.cookie);
	event.locals.cookies = await event.request.headers.get('cookie');

	let test = '';
	for (const pair of await event.request.headers.entries()) {
		test = test.concat(pair[0] + ': ' + pair[1]);
	}
	event.locals.headers = test;

	const response = await resolve(event);

	return response;
};

export const getSession: GetSession = ({ locals }) => {
	return { cookies: locals.cookies, headers: locals.headers };
};
