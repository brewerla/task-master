import {useCallback, useEffect, useState} from "https://esm.sh/stable/preact@10.11.0/deno/hooks.js";

export default function Joke() {

	const [joke, setJoke] = useState('');

	const getJoke = useCallback( async () => {
		const response = await fetch('/api/joke');
		const body = await response.json();
		setJoke(body.joke);
	}, []);

	useEffect(() => {
		getJoke();
	}, [getJoke]);

	return <p class="text-base">{joke}</p>
}