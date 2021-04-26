// Задача № 54.
// Дано число. Сложите его цифры. Если сумма получилась более 9-ти, опять сложите его цифры. И так, пока сумма не станет однозначным числом (9 и менее).
// Как делать методом «Array.prototype.reduce()» не поняла, но в нете нашла другой способ: https://javascript.ru/forum/misc/66911-najjti-summu-cifr-chisla.html
// ---
// let value = alert([-2, -4, 5, 20, 5, 2, 7].reduce(function(previousValue, currentValue, index, array) {
// 	return previousValue + currentValue;
//   }));
// ---
// [0, 1, 2, 3, 4].reduce(function(accumulator, currentValue, index, array) {
// 	return accumulator + currentValue;
// }, 10);
// ---

let int = 0;
let btnSum = document.getElementById('btn-sum');

// window.document.getElementById("btn-sum").style.cursor
btnSum.onmouseover = function(event) {
	btnSum.style.cursor = 'pointer';
}

btnSum.onmouseout = function(event) {
	btnSum.style.cursor = 'auto';
}

btnSum.addEventListener("click", () => {
	setSumNumbers();
});

function setSumNumbers() {
	if (getUserAction()) {
		let sum = 0;
		// !!! взято из нета
		for (let i = 0; i < int.toString().length; i++) {
			sum += Number(int[i]);
			alert(i + `) ` + sum);
		}
	}
}

// ---
// function setSumNumbers() {
// 	if (getUserAction()) {
// 		let value = int;
// 		value = (''+int).split('');
// 		// alert((''+int).split('')); // !!! взято из нета
// 		console.log(`value = ` + value);

// 		for (let i = 1; i < 9; i++) {
// 			value = value.reduce(function(previousValue, currentValue) {
// 				return previousValue + currentValue;
// 			});
// 			console.log(i + `) ` + value);
// 			alert(i + `) ` + value);
// 		}
// 	}
// }

// проверка выбора действий юзера
function getUserAction() {
	let strInput = "Введите целочисленное число:";
	let strError = `«${int}» - ` + "неверный ввод!!!\n" + "Исправьте значение и повторите попытку.";
	let userAction = false;

	do {
		int = prompt(strInput);
		if (int == null) {
			userAction = false;
			console.log(`«${int}» - юзер нажал отмену: ${userAction}`);
			break; // юзер нажал «Отмену», прерываем цикл
		}
		else {
			if (isNaN(int)) {
				userAction = false;
				console.log(`«${int}»: ${userAction}`);
				alert (strError);
			}
			else if (int == "undefined") {
				userAction = false;
				console.log(`«${int}»: ${userAction}`);
				alert (strError);
			}
			else if (int == " ") {
				userAction = false;
				console.log(`«${int}» - пробелы не допустимы: ${userAction}`);
				alert (strError);
			}
			else if (int == "") {
				userAction = false;
				console.log(`«${int}» - пустая строка: ${userAction}`);
				alert (strError);
			}
			else if (int == 0) {
				userAction = false;
				console.log(`«${int}»: ${userAction}`);
				alert (strError);
			}
			else {
				userAction = true;
				console.log(`«${int}»: ${userAction}`);
				return userAction;
			}
		}
	} while (userAction == false); // !!! тестировала всяко, НО цикл перестает работать, как только убираю явное указание не важно на "True" или на "False", т.е.отлавливает только 1 раз и выходит из цикла, см.консоль
}