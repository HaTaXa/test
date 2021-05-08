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
		let num = getSumNumbers(int);
		
		do {
			console.log(`(i) Функция «setSumNumbers()»:\n` + `1) ∑: ` + num + `\n длинна строки: ` + String(num).length);
			if (String(num).length > 1) {
				if (num > 9) {
					alert(`∑ значений из числа «${int}» = «` + num + `» и она явно > «9»\n` + `Суммируем дальше.`);
					num = getSumNumbers(num);
				}
				else if (num <= 9) {
					console.log(`(i) Функция «setSumNumbers()»:\n` + `2) ∑: ` + num + `\n длинна строки: ` + String(num).length);

					if (String(num).length > 1) {
						alert(`∑ значений из числа «${int}» = «` + num + `» и она явно < «9»`);
						break;
					}
					else {
						console.log("(i) Функция «setSumNumbers()»:\n" + "Невозможно выполнить суммирование однозначного числа!!!\n" + "Целочисленное значение состоит из одной цифры.");
						
						alert(`∑ значений из числа «${int}» = «${num}».\n` + `(!!!) Невозможно выполнить суммирование однозначного числа!!!\n` + `(i) Целочисленное значение состоит из одной цифры.`);
						break;
					}
				}
			}
			else {
				console.log("(i) Функция «setSumNumbers()»:\n" + "Невозможно выполнить суммирование однозначного числа!!!\n" + "Целочисленное значение состоит из одной цифры.");
						
				alert(`∑ значений из числа «${int}» = «${num}».\n` + `(!!!) Невозможно выполнить суммирование однозначного числа!!!\n` + `(i) Целочисленное значение состоит из одной цифры.`);
				break;
			}
			console.log(`(i) Функция «setSumNumbers()»:\n` + `3) ∑: ` + num + `\n длинна строки: ` + String(num).length);
		} while (num > 9);
	}
}

function getSumNumbers(sumNum) {
	let sum = 0;
	
	console.log(`Функция: «getSumNumbers()», переменная = ` + sumNum + `\n длинна строки: ` + String(sumNum).length);
	// перестраховка с проверкой условия
	if (String(sumNum).length > 1) {
		for (let i = 0; i < sumNum.toString().length; i++) {
			sum += Number(sumNum[i]); // !!! взято из нета
			// alert(i + `) ` + sum);
			console.log(i + `) ` + sum);
		}
	}
	else {
		console.log("(i) Функция «getSumNumbers()»:\n" + "Невозможно выполнить суммирование однозначного числа!!!\n" + "Целочисленное значение состоит из одной цифры.");
		// alert("(i) Функция «getSumNumbers()»:\n" + "Невозможно выполнить суммирование однозначного числа!!!\n" + "Целочисленное значение состоит из одной цифры.");
	}
	return sum;
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
	let strInput = "Введите целочисленное (число > 9):";
	let strError = `Неверный ввод!!!\n` + "Исправьте значение и повторите попытку.";
	let userAction = false;

	do {
		int = prompt(strInput);
		// console.log(`(i) Функция «getUserAction()»:\n` + `длинна строки: ` + String(num).length);
		if (!int && typeof int == "object") {
			userAction = false;
			console.log(`typeof «${int}» - нажата клавиша «Отмена»: ${userAction}`);
			break; // юзер нажал «Отмену», прерываем цикл
		}
		else if (int === null) {
			userAction = false;
			console.log(`«${int}» - юзер нажал отмену: " ${userAction}`);
			break; // юзер нажал «Отмену», прерываем цикл
		}
		else if (isNaN(int)) {
			userAction = false;
			console.log(`«${int}»: ${userAction}`);
			alert (strError);
		}
		else if (int === "undefined") {
			userAction = false;
			console.log(`«${int}»: ${userAction}`);
			alert (strError);
		}
		else if (int === " ") {
			userAction = false;
			console.log(`«${int}» - пробелы не допустимы: ${userAction}`);
			alert (strError);
		}
		else if (int === "") {
			userAction = false;
			console.log(`«${int}» - пустая строка: ${userAction}`);
			alert (strError);
		}
		else if (int == 0) {
			userAction = false;
			console.log(`«${int}»: ${userAction}`);
			alert (strError);
		}
		else if (int <= 9) {
			userAction = false;
			console.log(`«${int}» <= 9: ${userAction}`);
			alert (`Число ${int} не является 2-значным числом и оно <= 9\n` + strError);
		}
		else {
			userAction = true;
			console.log(`«${int}»: ${userAction}`);
			return userAction;
		}
	} while (userAction == false); // !!! тестировала всяко, НО цикл перестает работать, как только убираю явное указание не важно на "True" или на "False", т.е.отлавливает только 1 раз и выходит из цикла, см.консоль
}