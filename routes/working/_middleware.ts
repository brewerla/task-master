import { MiddlewareHandlerContext } from "$fresh/server.ts";

interface State {
	data: string;
}

export async function handler(_req: Request, _ctx: MiddlewareHandlerContext<State>) {
	//If the request has an Authorization token, continue onto the next section
	if(_req.headers.has('Authorization')) {
		console.log('#####', _req.headers.get('Authorization'));
		return _ctx.next();
	}

	console.log('no authorization token found');
	return new Response(undefined, {
		status: 303,
		headers: {
			Location: '/'
		}
	});
}