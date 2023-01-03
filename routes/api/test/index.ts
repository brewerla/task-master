import { HandlerContext } from "$fresh/server.ts";

export const handler = (_req: Request, _ctx: HandlerContext): Response => {
	if(_req.method === "POST") {
		//The deno request object has a form data method to convert it to a form data object
		console.log(_req.formData());
	}

	return new Response(undefined, {
		status: 303,
		headers: {
			Location: '/'
		}
	});
}