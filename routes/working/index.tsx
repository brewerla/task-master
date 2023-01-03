import { Head } from "$fresh/runtime.ts";
import Joke from "../../islands/Joke.tsx";

export default function index() {

	return <>
		<Head>
			<title>File based routing</title>
			<link rel="stylesheet" href="/style.css"/>
		</Head>
		<div class='my-10 mx-auto max-w-screen-lg text-3xl overline'>
			<h1>This is a test of the file based routing</h1>
			<Joke/>
		</div>
	</>
}