const form = document.getElementById('form')
const checkbox = document.getElementById('apply')
const submitBtn = document.getElementById('submit')

const isCheckboxActive = checkbox.hasAttribute('checked')

const submitForm = function (event) {
	event.preventDefault()

	const domEl = document.querySelector('[name="cto-input"]')

	if (!domEl.value) return

	console.log(event)
	console.log(domEl.value)
}

const onDisableButton = function (active) {
	if (active) {
		submitBtn.removeAttribute('disabled')
	} else {
		submitBtn.setAttribute('disabled', 'disabled')
	}
}

const inputListener = function (event) {
	onDisableButton(event.target.checked)
}

form.addEventListener('submit', submitForm)
checkbox.addEventListener('change', inputListener)

onDisableButton(isCheckboxActive)