import { Head } from "$fresh/runtime.ts";
import Counter from "../islands/Counter.tsx";
import Navbar from "../components/Navbar.tsx";
import DataForm from "../components/DataForm.tsx";

export default function Home() {
	return (
		<>
			<Head>
				<title>Task Master</title>
				<link rel="stylesheet" href="/style.css"/>
			</Head>
			<Navbar />
			<div class="mx-auto max-w-screen-lg">
				<Counter start={3} />
				<DataForm/>
			</div>
		</>
	);
}