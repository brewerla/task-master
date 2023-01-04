import { MiddlewareHandlerContext } from "$fresh/server.ts";
import { getCookies, deleteCookie } from "https://deno.land/std@0.170.0/http/cookie.ts";
import { verify } from "https://deno.land/x/djwt@v2.2/mod.ts";

const jwt_secret = Deno.env.get("JWT_SECRET") as string;

interface State {
	data: string;
}

//Middleware function to verify that the user is logged in. The entire 'working' route is protected in this way.
export async function handler(_req: Request, _ctx: MiddlewareHandlerContext<State>) {
	//If there is a cookie named 'auth'...
	if(getCookies(_req.headers)['auth']) {
		try {
			//try verifying the secret. If the secret is invalid it throws an error. If valid the route continues
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