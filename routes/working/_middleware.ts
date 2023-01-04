import { MiddlewareHandlerContext } from "$fresh/server.ts";
import { getCookies, deleteCookie } from "https://deno.land/std@0.170.0/http/cookie.ts";
import { verify } from "https://deno.land/x/djwt@v2.2/mod.ts";

const jwt_secret = Deno.env.get("JWT_SECRET") as string;

interface State {
	data: string;
}

export async function handler(_req: Request, _ctx: MiddlewareHandlerContext<State>) {
	//If the request has an Authorization token, continue onto the next section

	if(getCookies(_req.headers)['auth']) {
		try {
			await verify(getCookies(_req.headers)['auth'], jwt_secret, 'HS512');
			return _ctx.next();
		} catch (_err) {
			//If the cookie is invalid, delete it and redirect to homepage
			const res = new Response(undefined, {
				status: 303,
				headers: { Location: '/' }
			});
			deleteCookie(res.headers, 'auth', { path: "/" });

			return res;
		}
	}

	console.log('No auth token found');
	return new Response(undefined, {
		status: 303,
		headers: {
			Location: '/'
		}
	});
}