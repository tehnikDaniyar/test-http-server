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

; (function () {
	let paramString = 'num1=10&num2=20&num3=30';
	let searchParams = new URLSearchParams(paramString);
	console.log(searchParams.get('num3'));
	console.log(searchParams.get('num4'));
	console.log(searchParams.has('num3'));
	console.log(searchParams.has('num4'));
	console.log(searchParams.toString());
	searchParams.set('num2', '50');
	console.log(searchParams.get('num2'));
	searchParams.set('num4', '40');
	console.log(searchParams.get('num4'));
	searchParams.append('num5', '60');
	console.log(searchParams.get('num5'));
	searchParams.set('num5', '100');
	searchParams.append('num5', '60');
	console.log(searchParams.toString());
	searchParams.delete('num2')
	console.log(searchParams.toString());
	for (let p of searchParams) {
		console.log(p);
	};
	console.log(searchParams.getAll('num5'));
})();

//=====them88==============================================
; (function () {
	let paramString = 'test1=param1&test2=param2&test3=param3';
	let parametrs = new URLSearchParams(paramString);

	//=====them88_1===================
	parametrs.append('test3', 'param3');
	console.log(parametrs.toString());

	//=====them88_2===================
	parametrs.delete('test2');
	console.log(parametrs.toString());

	//=====them88_3===================
	parametrs.set('test1', 'newParam');
	console.log(parametrs.toString());

})();

//=====them89===============================================
; (function () {
	let form = document.querySelector('#them89');
	let button = document.querySelector('#them89_1_button');
	form.addEventListener('submit', function (event) {
		event.preventDefault();
		let formData = new FormData(form);
		console.log([...formData]);
		formData.set('test3', '789');
		formData.delete('test1');
		console.log([...formData]);

		for (let values of formData.values()) {
			console.log(values);
		};

		for (let key of formData.keys()) {
			console.log(key);
		};

		for (let entry of formData.entries()) {
			console.log(entry);
		};

	});
})();