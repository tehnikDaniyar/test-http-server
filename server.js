const arr = [1, 2, 3, 4, 5];
let obj;

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
	'/handler/': function ({ get }) {
		return Number(get.numOne) + Number(get.numTwo);
	},
	'/average/': function (nums) {
		let sum = 0;
		console.log(nums);
		for (let key in nums.get) {
			sum += Number(nums.get[key]);
		};
		return sum;
	},
	'/authorization/': function ({ get }) {
		console.log(get);
		if (get.name && get.surname) {
			return 'data is resived';
		} else {
			return 'data is not full';
		}
	},
	'/formDate/': function ({ get }) {
		console.log(get.date);
		if (/\d{4}\.\d{2}\.\d{2}$/.test(get.date)) {
			return 'date is correct'
		} else {
			return 'date is not correct'
		}
	}
};
