export default function Navbar() {
	return (
		<nav class="border-b border-black mb-10 py-5">
			<div class="flex justify-between max-w-screen-lg mx-auto">
				<h2>Task Master</h2>
				<div class="w-2/6 text-right">
					<a href="/" class="mr-10 hover:underline">Homepage</a>
					<a href="/" class="hover:underline">About page</a>
				</div>
			</div>
		</nav>
	);
}
