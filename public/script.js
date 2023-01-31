let form = document.querySelector('form');
let button = document.querySelector('a');

button.addEventListener('click', function () {
	form.submit();
})

button.style.color = 'red';
console.log('teeeest');

; (function () {
	const form = document.querySelector('#them87_1_form');
	const input = document.querySelector('#them87_1_form input');
	form.addEventListener('submit', function (event) {
		if (!/^[\w\d]+@[a-z]+\.[a-z]+/.test(input.value)) {
			event.preventDefault();
			input.value = 'email is not valid';
		}
	})
})();