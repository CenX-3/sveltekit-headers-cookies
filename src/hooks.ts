import type { Handle } from '@sveltejs/kit';

/** @type {import('@sveltejs/kit').Handle} */
export async function handle({ request, resolve }):Handle {
	// request.locals.user = await getUserInformation(request.headers.cookie);
  request.locals.cookies = request.headers.cookie
  request.locals.headers = request.headers

  console.log(request.headers)

	const response = await resolve(request);

	return {
		...response,
		headers: {
			...response.headers,
			'x-custom-header': 'potato'
		}
	};
}

export function getSession(request) {
  return { cookies: request.locals.cookies, headers: request.locals.headers };
}
