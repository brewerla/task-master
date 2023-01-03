import { runQuery } from "../../db/db.ts";
import { testData } from "../../types.ts";

export async function index() {

}

export async function getTestData(id: number) {
	const data = await runQuery(`SELECT * FROM test WHERE test_id = ${id}`);
	//use the logical OR assignment operator to replace data that was not found
	data.rows[0] ||= {test_id: id, test_data: 'NO DATA FOUND'};
	return data;
}