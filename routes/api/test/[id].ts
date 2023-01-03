import { HandlerContext } from "$fresh/server.ts";
import { getTestData } from "../../../HTTP/controllers/testController.ts";

//Request and response are Deno objects. HandlerContext is imported above
export const handler = async (_req: Request, _ctx: HandlerContext): Response => {
	//Switch method for POST, GET, and other http methods
	switch(_req.method) {
		case "GET":
			//Get some information from database here
			let data = await getTestData(_ctx.params.id);

			return Response.json(data.rows[0]) //Get the path params using context variable
		case "POST":
			//Insert or update information from database here
			return new Response(undefined, {
				status: 302,
				headers: { Location: '/'}
			});
		default:
			//Print out the method that was used.
			console.log(_req.method);
			return new Response(undefined, {
				status: 302,
				headers: {
					Location: '/'
				}
			});
	}
};
