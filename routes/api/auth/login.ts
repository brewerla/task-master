import { HandlerContext } from "$fresh/server.ts";
const secret = Deno.env.get("JWT_SECRET")


export const handler = (_req: Request, _ctx: HandlerContext): Response => {
	return Response.json({secret});
}