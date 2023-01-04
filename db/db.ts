import { Pool } from "postgres";
import {testData} from "../types.ts";

//URI FORMAT: postgresql://[user[:password]@][netloc][:port][/dbname][?param1=value1&...]

//Create a lazy pool with 20 starting connections
const pool = new Pool(Deno.env.get('DBSTRING'), 20, true);

//A function to connect to the pool and run a query, then release the client.
export async function runQuery(query: string) {
	const client = await pool.connect();
	let result;
	try {
		result = await client.queryObject(query);
	} finally {
		client.release();
	}
	return result;
}

//Create insert transaction method here (maybe)