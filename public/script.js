let form = document.querySelector('form');
let button = document.querySelector('a');

button.addEventListener('click', function () {
	form.submit();
})

button.style.color = 'red';
console.log('teeeest');