// Задача № 73.
// Сделайте функцию getDigitsSum (digit - это цифра), которая параметром принимает целое число и возвращает сумму его цифр.

let int = 0;
let txtSum = document.getElementById('txt-sum')
let btnSum = document.getElementById('btn-sum');

// window.document.getElementById("btn-sum").style.cursor
btnSum.onmouseover = function(event) {
	btnSum.style.cursor = 'pointer';
}

btnSum.onmouseout = function(event) {
	btnSum.style.cursor = 'auto';
}

btnSum.addEventListener("click", () => {
	if (getUserAction()) {
		console.log(int);
		getDigitsSum(int);
		int = 0;
	}
});

// подсчет суммы цифр
function getDigitsSum(digit) {
	let sum = 0;

	for (let i = 0; i < digit.toString().length; i++) {
		sum += Number(digit[i]);
	}
	alert(`Сумма чисел = ` + sum);
}

// проверка выбора действий юзера
function getUserAction() {
	let strError = `«${int}» - ` + "неверный ввод!!!\n" + "Исправьте значение и повторите попытку.";
	int = 0;

	int = txtSum.value;
	if (int == null) {
		console.log(`«${int}»`);
		alert (strError);
		int = 0;
	}
	if (isNaN(int)) {
		console.log(`«${int}»`);
		alert (strError);
		int = 0;
	}
	else if (int == "undefined") {
		console.log(`«${int}»`);
		alert (strError);
		int = 0;
	}
	else if (int == " ") {
		console.log(`«${int}» - пробелы не допустимы`);
		alert (strError);
		int = 0;
	}
	else if (int == "") {
		console.log(`«${int}» - пустая строка`);
		alert (strError);
		int = 0;
	}
	else if (int == 0) {
		console.log(`«${int}»`);
		alert (strError);
		int = 0;
	}
	else {
		console.log(`«${int}»`);
		return int;
	}
}