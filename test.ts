import { create, verify } from "https://deno.land/x/djwt@v2.2/mod.ts";
import {config} from "./dev_deps.ts";

console.log(config());


const jwt_secret = Deno.env.get('JWT_SECRET') as string;

console.log(jwt_secret);

const jwt = await create({ alg: "HS512", typ: "JWT" }, { foo: "bar" }, jwt_secret);

console.log(jwt);

const payload = await verify(jwt, jwt_secret, 'HS512');

console.log(payload);
