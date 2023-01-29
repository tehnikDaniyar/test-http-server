const arr = [1, 2, 3, 4, 5];

export default {
	'/Calc/': function () {
		return 3 + 2;
	},
	'/getList/': function () {
		let list = '<ul>';
		for (let i = 0; i < 10; i++) {
			list += `<li>${i + 1}</li>`;
		};
		return list + '</ul>';
	},
	'/getParagraphs/': function () {
		let res = '';
		for (let num of arr) {
			let p = `<p>${num}</p>`;
			res += p;
		};
		return res;
	},
	'/handler/': function (data) {
		console.log(data);
		return `data is resived`;
	},
};

