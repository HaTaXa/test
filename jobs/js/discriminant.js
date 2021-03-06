// Вычисление дискриминанта корней квадратного уравнения.

let strDiscrim = "", strFRQE = "";
let paramDRQE = setParametrs();
// let flag = true;

// декларация - объявляем функцию
function setParametrs () {
	let a, b, c; // коэф.кв.ур.
	// let strResult; // строка итоговых значений
	// let solutionResult; // вывод решения

// alert(`«a» = ` + a + ` - ` + checkParam(a)); // тест-проверка
// a = a.trim(); // ??? при использовании функции «trim()» в окне prompt независимо от выбора действий юзера «ок/отмена» возникает ошибка: «Не удается прочитать свойство 'trim' null»

// --- вариант 1 --- окно prompt будет выдаваться до тех пор, пока не будет введено числовое значение для каждой переменной, см.консоль, (!!!) но это не правильно - у юзера всегда должна быть возможность отмены/прерывание действий.
// ??? почему в if не работают операторы «"break"» и «"continue"».
// ??? есть ли тогда альтернатива оператору GoTo.

	while (checkParam(a = prompt(`Задачка. Вычисляем дискриминант корней квадратного уравнения.\n` + `1. Введите коэф. «a»:`)) == false) {
		alert ("Неправильный ввод данных!!!\n" +
				"Введите число и повторите попытку.");
	}
	if (a !== null) {
		while (checkParam(b = prompt(`Задачка. Вычисляем дискриминант корней квадратного уравнения.\n` + `2. Введите коэф. «b»:`)) == false) {
			alert ("Неправильный ввод данных!!!\n" +
					"Введите число и повторите попытку.");
		}
		if (b !== null) {
			while (checkParam(c = prompt(`Задачка. Вычисляем дискриминант корней квадратного уравнения.\n` + `3. Введите коэф. «c»:`)) == false) {
				alert ("Неправильный ввод данных!!!\n" +
						"Введите число и повторите попытку.");
			}
			if (c !== null) {
				solutionDiscrim (a, b, c); // вычисляем дискриминант
				// strResult = solutionsRoots (paramA, paramB, paramC, D); // вычисляем корни квадратного уравнения
				// getSolution (a, b, c, D);
			}
		}
	}

// --- вариант 2 --- не работает из-за «break» и «continue»
// ??? почему в if не работают операторы break и continue, см.консоль.
// ??? есть ли альтернатива оператору GoTo.
	// tryAgain1:
	// a = prompt(`Задачка. Вычисляем дискриминант.\n` + `1. Введите коэф. «a»:`);
	// // проверка 1-го значения
	// if (checkParam(a) == true) {
	// 	tryAgain2:
	// 	b = prompt(`Задачка. Вычисляем дискриминант.\n` + `2. Введите коэф. «b»:`);
	// 	// проверка 2-го значения
	// 	if (checkParam(b) == true) {
	// 		tryAgain3:
	// 		c = prompt(`Задачка. Вычисляем дискриминант.\n` + `3. Введите коэф. «c»:`);
	// 		// проверка 3-го значения
	// 		if (checkParam(b) == true) {
	// 			alert (`Дальше ищем инфу как вычислить дискриминант`);
	// 		}
	// 		else {
	// 			if (a == null) {
	// 				break;
	// 			}
	// 			else {
	// 				continue tryAgain3;
	// 			}
	// 		}
	// 	}
	// 	else {
	// 		if (a == null) {
	// 			break;
	// 		}
	// 		else {
	// 			continue tryAgain2;
	// 		}
	// 	}
	// }
	// else {
	// 	if (a == null) {
	// 		break;
	// 	}
	// 	else {
	// 		continue tryAgain1;
	// 	}
	// }
}

// Функция проверки и определения значения для переменных
function checkParam (param) {
	console.dir("«param» = " + param);
	if (isNaN(param)) {
		console.dir(`Переменная «param» содержит значение «NaN»`);
		return false;
	}
	else if (param == null) {
		console.dir(`Переменная «param» содержит значение «null»`);
		return true;
	}
	else if (param == undefined) {
		console.dir(`Переменная «param» содержит значение «Undefined»`);
		return false;
	}
	else if (param == "") {
		console.dir(`Переменная «param» содержит пустую строку`);
		return false;
	}
	// ??? проверка не срабатывает
	else if (Number.isInteger(param)) {
		console.dir(`Переменная «param» является числовым типом данных`);
		return false;
	}
	else if (param == 0) {
		console.dir(`Переменная «param» содержит значение «0»`);
		return true;
	}
	else if (param <= 0) {
		console.dir(`Переменная «param» содержит значение <= 0`);
		return true;
	}
	else if (param > 0) {
		console.dir(`Переменная «param» содержит значение > 0`);
		return true;
	}
	else {
		// Something else other...
		console.dir(`Переменная «param» содержит Something else other...`);
		return false;
	}
}

// Функция решения дискриминанта:
// Формула дискриминанта корней квадратного уравнения: D = b² − 4ac
function solutionDiscrim(paramA, paramB, paramC) {
	let D; // дискриминант
	let strRoots;

	D = (Math.pow (paramB, 2) - (4 * paramA * paramC)).toFixed(2);
	// D = (paramB ** - 4 * paramA * paramC).toFixed(2); // неправильный подсчет

	console.dir (`Формула дискриминанта: «D = b² − 4ac»,\n` +
				`Решение: D = ${paramB}² - 4 * ${paramA} * ${paramC} = ${D}.\n` +
				`Варианты определения корней квадратного уравнения:\n` +
				`    1. Если D < 0, корней нет;\n` +
				`    2. Если D = 0, есть 1 корень;\n` +
				`    3. Если D > 0, корней будет 2.\n`);

	strRoots = solutionsRoots (paramA, paramB, paramC, D); // вычисляем корни квадратного уравнения
	// return strRoots;
}

// Функция решения корней квадратного уравнения:
//                                                     -b + √D         -b - √D
// Формулы решения корней квадратного уравнения: x1 = ---------; x2 = ---------.
//                                                        2a              2a
function solutionsRoots(a, b, c, D) {
	let x1, x2; // корни кв.ур.
	
	// x1 = ((- b + Math.sqrt (D)) / (2 * a));
	// x2 = ((- b - Math.sqrt (D)) / (2 * a));
	x1 = ((- b + Math.sqrt (D)) / (2 * a)).toFixed(2);
	x2 = ((- b - Math.sqrt (D)) / (2 * a)).toFixed(2);


	if (D < 0) {
		strDiscrim = "корней нет.";
		strFRQE = "корней нет - нечего считать.";
	}
	else if (D == 0) {
		strDiscrim = "уравнение имеет 1 корень.";
		strFRQE = `корни квадратного уравнения:\n` +
					`    x1 = -${b} + √${D} / 2 * ${a} = ${x1};\n` +
					`или\n` +
					`    x2 = -${b} - √${D} / 2 * ${a} = ${x2}.`;
	}
	else if (D > 0) {
		strDiscrim = "уравнение имеет 2 различных корня.";
		strFRQE = `корни квадратного уравнения:\n` +
					`    x1: -${b} + √${D} / 2 * ${a} = ${x1};\n` +
					`    x2: -${b} - √${D} / 2 * ${a} = ${x2}.`;
	}

	console.dir (`                                             -b + √D         -b - √D\n` +
				`Формулы корней квадратного уравнения: «x1 = ---------; x2 = ---------».\n` +
				`                                                2a              2a`);
	console.dir (`Решение: ${strFRQE}`);

	getSolution (a, b, c, D);
	return [strDiscrim, strFRQE];
}

function getSolution (paramA, paramB, paramC, paramD) {

	alert (`Формула дискриминанта корней квадратного уравнения:\n` +
			`    «D = b² - 4ac».\n` +
			`Варианты определения корней квадратного уравнения:\n` +
			`    1. Если D < 0, корней нет;\n` +
			`    2. Если D = 0, есть 1 корень;\n` +
			`    3. Если D > 0, корней будет 2.\n` +
			`-------------------------------------\n` +
			`В итоге дискриминант: ${paramB}² - 4 * ${paramA} * ${paramC} = ${paramD}.\n` +
			`Следовательно: ${strDiscrim}\n` +
			`-------------------------------------\n` +
			`Формулы корней квадратного уравнения:\n` +
			`    «x1 = -b + √D / 2a»;\n` +
			`    «x2 = -b - √D / 2a».\n` +
			`-------------------------------------\n` +
			`В итоге ${strFRQE}\n` +
			`____________________________________\n` +
			`Спасибо за внимание! ^_^`);
}