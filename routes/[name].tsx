import { PageProps } from "$fresh/server.ts";
import { Head } from "$fresh/runtime.ts"

export default function Greet(props: PageProps) {
	return <>
		<Head>
			<title>{props.params.name}</title>
			<link rel="stylesheet" href="/style.css"/>
		</Head>
		<div>
			<h1>Hello {props.params.name}</h1>
		</div>
	</>
}
