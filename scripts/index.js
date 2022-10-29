// const domEl = document.getElementById('cto-input')

// const listener = function (event) {
// 	console.log(event.target.value)
// }

// domEl.addEventListener('keyup', listener)
// domEl.removeEventListener('keyup', listener)

const form = document.getElementById('form')

const listener = function (event) {
	event.preventDefault();

	const domEl = document.querySelector('[name="cto-input"]')

	console.log(event)
	console.log(domEl.value)
}

form.addEventListener('submit', listener)