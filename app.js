const input = document.querySelector('textarea')

work()

input.addEventListener('input', e => {
	work()
})

function work() {
	const lines = input.value.split('\n')

	const swapped_lines = []

	for (let i = 0; i < lines.length; i++) {
		let line = lines[i]

		if (line.length < 1) continue

		let first_replaced = replace_character(line, 0, line[line.length - 1])
		let last_replaced = replace_character(first_replaced, line.length - 1, line[0])

		swapped_lines.push(last_replaced)
	}

	document.querySelector('#result').innerHTML = swapped_lines.join('<br>')
}

function replace_character(string, index, replacement) {
	return string.substring(0, index) + replacement + string.substring(index + replacement.length);
}