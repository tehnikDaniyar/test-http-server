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

//=====them90===============================================
; (function () {
	let path = 'http://site.ru:3000/dir/eee/page.html#show?a=1&b=2&c=3';
	let url = new URL(path);
	console.log(url);
	console.log(url.host, url.port, url.protocol, url.pathname);
	console.log(url.toJSON());
	console.log(url.searchParams.get('a'));
})();

//=====them91===============================================
; (function () {
	//========async download images===========
	let img = document.createElement('img');
	img.src = 'data:image/jpeg;base64,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';
	img.addEventListener('load', () => {
		console.log('img is downloaded');
		document.body.append(img);
	});
	img.addEventListener('error', () => {
		console.log('error');
	});
	//-------------------------------------------

	//====asyunc function=============
	function make(callback) {
		setTimeout(function () {
			console.log('1');
			callback();
		}, 3000);
	};

	make(function () {
		console.log('2');
	});

})();

//=====them92===============================================
; (function () {
	//====them92_1=============
	function make(callback) {
		setTimeout(function () {
			let res = [1, 2, 3, 4, 5];
			callback(res);
		}, 3000);
	};

	make(function (res) {
		let summ = res.reduce((summ, num) => summ + num);
		console.log(summ);
	});

	//====them92_2=============
	function make2(num1, num2, callback) {
		setTimeout(function () {
			let arr = [1, 2, 3, 4, 5];
			callback(arr[num1], arr[num2]);
		}, 3000)
	};

	make2(0, 2, function (num1, num2) {
		console.log(num1 + num2);
	});

	//====them92_3=============
	function make3(index, callback) {
		setTimeout(function () {
			let arr = [1, 2, 3, 4, 5];
			let err;

			if (arr[index] === undefined) {
				err = 'error, index is not found';
			} else {
				err = null;
			}
			callback(arr[index], err);
		}, 3000)
	};

	make3(1, function (num, err) {
		if (!err) {
			console.log(num);
		} else {
			console.log(err);
		}
	});

	//====them92_4=============
	function loadImage(path, callback) {

		let img = document.createElement('img');
		img.src = path;
		let err;

		img.addEventListener('error', () => {
			console.log('error');
			err = 'image is not downloaded';
			callback(img, err);
		});

		img.addEventListener('load', () => {
			callback(img, err);
		})
	};

	loadImage('https://i.pinimg.com/736x/6e/ba/1f/6eba1fcb161e0a89a60833d753dc29c5.jpg', (img, err) => {
		console.log('callback working');
		if (!err) {
			document.body.append(img);
			console.log('Cat is on the page');
		} else {
			console.log(err);
		}
	});

	//====them92_5===callback hell==========
	let path1 = 'https://cs.amdm.ru/images/artist/120x120/11191.jpg';
	let path2 = 'https://cs.amdm.ru/images/artist/120x120/11191.jpg';
	let path3 = 'https://cs.amdm.ru/images/artist/120x120/11191.jpg';

	loadImage(path1, (img, err) => {
		if (!err) {
			document.body.append(img);
		} else {
			console.log(err);
		};
		loadImage(path2, (img, err) => {
			if (!err) {
				document.body.append(img);
			} else {
				console.log(err);
			};
			loadImage(path3, (img, err) => {
				if (!err) {
					document.body.append(img);
				} else {
					console.log(err);
				};
				loadImage(path3, (img, err) => {
					if (!err) {
						document.body.append(img);
					} else {
						console.log(err);
					};
					loadImage(path3, (img, err) => {
						if (!err) {
							document.body.append(img);
						} else {
							console.log(err);
						};
						loadImage(path3, (img, err) => {
							if (!err) {
								document.body.append(img);
							} else {
								console.log(err);
							};
							loadImage(path3, (img, err) => {
								if (!err) {
									document.body.append(img);
								} else {
									console.log(err);
								};
								loadImage(path3, (img, err) => {
									if (!err) {
										document.body.append(img);
									} else {
										console.log(err);
									};
									loadImage(path3, (img, err) => {
										if (!err) {
											document.body.append(img);
										} else {
											console.log(err);
										};
										loadImage(path3, (img, err) => {
											if (!err) {
												document.body.append(img);
											} else {
												console.log(err);
											};
											loadImage(path3, (img, err) => {
												if (!err) {
													document.body.append(img);
												} else {
													console.log(err);
												};
											})
										})
									})
								})
							})
						})
					})
				})
			})
		})
	})


})();

//=====them93===============================================
; (function () {
	//=====them93_1=======================
	let parent = document.querySelector('#them93_1_parent');
	let them = '#them93_1_';

	function getData(parent, them) {
		setTimeout(() => {
			let arr = [1, 2, 3, 4, 5]
			showMessage(parent, them);
			addItems(parent, them, arr);
			showAmount(parent, them, arr);
			showResult(parent, them, arr);
		}, 5000);
	};

	function showMessage(parent, them) {
		parent.querySelector(`${them}message`).textContent = 'Data is resived';
	};

	function addItems(parent, them, arr) {
		let list = parent.querySelector(`${them}list`);
		arr.forEach(elem => {
			let item = document.createElement('li');
			item.textContent = elem;
			list.append(item);
		});
	}

	function showAmount(parent, them, arr) {
		parent.querySelector(`${them}amount`).textContent = arr.length;
	};

	function showResult(parent, them, arr) {
		parent.querySelector(`${them}result`).textContent =
			arr.reduce((summ, num) => summ + num);
	}

	getData(parent, them);





})();