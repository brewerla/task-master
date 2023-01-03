export default function test() {
	return (
		<form action="/api/test" method="POST" class="flex flex-col mt-3">
			<input class="w-full p-2 mb-3" type="text" name="testingname" placeholder="Test Data" required/>
			<button class='btn p-2 border(grey-200 2) w-1/6'>Submit</button>
		</form>
	);
}
