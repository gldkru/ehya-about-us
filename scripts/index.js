const form = document.getElementById('form')
const input = document.getElementById('apply')
const submitBtn = document.getElementById('submit')

const submitForm = function (event) {
	event.preventDefault()

	const domEl = document.querySelector('[name="cto-input"]')

	console.log(event)
	console.log(domEl.value)
}

const inputListener = function (event) {
	if (event.target.checked) {
		submitBtn.removeAttribute('disabled')
	} else {
		submitBtn.setAttribute('disabled', 'disabled')
	}
}

form.addEventListener('submit', submitForm)
input.addEventListener('change', inputListener)