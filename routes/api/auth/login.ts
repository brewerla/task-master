import { HandlerContext } from "$fresh/server.ts";
import {Cookie, setCookie} from "https://deno.land/std@0.170.0/http/cookie.ts";
import { create } from "https://deno.land/x/djwt@v2.2/mod.ts";

const jwt_secret = Deno.env.get("JWT_SECRET") as string;



export const handler = async (_req: Request, _ctx: HandlerContext): Promise<Response> => {
	//See if the user information matches here

	//Mock user
	const mock_user = {
		user_id: '13',
		username: 'brewerla'
	}

	//Create the json web token
	const jwt = await create({ alg: "HS512", typ: "JWT" }, mock_user, jwt_secret);

	//Create a cookie to store the jwt in named auth
	const cookie: Cookie = {
		name: 'auth',
		value: jwt,
		httpOnly: true,
		sameSite: 'Lax',
		path: '/'
	};

	//Create a new response and add the cookie
	const res = new Response(undefined, {
		status: 303,
		headers: {
			Location: '/'
		}
	});
	setCookie(res.headers, cookie);

	//Return the response
	return res;
}