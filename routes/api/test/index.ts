import { HandlerContext } from "$fresh/server.ts";
import { runQuery } from "../../../db/db.ts";

export const handler = async (_req: Request, _ctx: HandlerContext): Promise<Response> => {
	if(_req.method === "POST") {
		//The deno request object has a form data method to convert it to a form data object
		const data = await _req.formData();
		await runQuery(`INSERT INTO test (test_data) VALUES ('${data.get('testingname')}')`);

	}

	return new Response(undefined, {
		status: 303,
		headers: {
			Location: '/'
		}
	});
}