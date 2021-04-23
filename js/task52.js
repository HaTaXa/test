// Задача № 52.
// Сделайте функцию isNumberInRange, которая параметром принимает число и проверяет, что оно больше нуля и меньше 10. Если это так - пусть функция возвращает 'true', если не так - 'false'.

// тупо без проверки
// alert(`${isNumberInRange(+prompt("Введите целочисленное число (от «0» до «10»:)"))}`);

getUserAction();

// проверка выбора действий юзера через if
function getUserAction() {
	let int = 0;
	let str = "Введите целочисленное число (от «0» до «10»):";
	let blnUserAction = false;
	do {
		int = prompt(str);
		if (int == null) {
			blnUserAction = false; // юзер нажал «Отмену», прерываем цикл
			console.log(`${blnUserAction}: int = «${int}»`);
			break;
		}
		else {
			if (isNaN(int)) {
				blnUserAction = false;
				str = "Неверный ввод!!!\n" + "Исправьте число и повторите попытку.";
				console.log(`isNaN(int): ${blnUserAction}: int = «${int}»`);
				// alert (str);
			}
			else if (int == "undefined") {
				blnUserAction = false;
				str = "Неверный ввод!!!\n" + "Исправьте число и повторите попытку.";
				console.log(`int == "undefined": ${blnUserAction}: int = «${int}»`);
				// alert (str);
			}
			else if (int == "") {
				blnUserAction = false;
				str = "Неверный ввод!!!\n" + "Исправьте число и повторите попытку.";
				console.log(`int == "": ${blnUserAction}: int = «${int}»`);
				// alert (str);
			}
			else if (int <= 0 || int > 10) {
				blnUserAction = false;
				str = "Неверный ввод!!!\n" + "Исправьте число и повторите попытку.";
				console.log(`int <= 0 или > 10: ${blnUserAction}: int = «${int}»`);
				alert(`${str}\n` + `return «${isNumberInRange(int)}»`);
				str = "Введите целочисленное число (от «0» до «10»):";
			}
			// else if (int == 0) {
			// 	blnUserAction = false;
			// 	str = "Неверный ввод!!!\n" + "Исправьте число и повторите попытку.";
			// 	console.log(`int = 0: ${blnUserAction}: int = «${int}»`);
			// 	alert (str);
			// }
			// 	else if (int < 0) {
			// 	blnUserAction = false;
			// str = "Неверный ввод!!!\n" + "Исправьте число и повторите попытку.";
			// 	console.log(`int < 0: ${blnUserAction}: int = «${int}»`);
			// 	alert (str);
			// }
			// else if (int > 10) {
			// 	blnUserAction = false;
			// 	str = "Неверный ввод!!!\n" + "Исправьте число и повторите попытку.";
			// 	console.log(`int > 10: ${blnUserAction}: int = «${int}»`);
			// 	alert (str);
			// }
			else {
				if (int > 0 && int <= 10) {
					blnUserAction = false;
					str = "Введите целочисленное число (от «0» до «10»):";
					console.log(`int > 0 && int <= 10: ${blnUserAction}: int = «${int}»`);
					alert(`return «${isNumberInRange(int)}»`);
				}
				else {
					blnUserAction = true;
					str = "Cработало не учтенное условие, переменная содержит: ";
					console.log(str + int);
					break;
				}
			}
		}
	} while (blnUserAction == false); // !!! всегда надо указывать условие явно true/false
}

// проверка выбора действий юзера через switch case не получается
// function getUserAction() {
// 	let int = 0;
// 	let blnUserAction = false;
// 	do {
// 		int = prompt("Введите целочисленное число (от «0» до «10»:)");
// 		console.log(int);

// 		switch (int) {
// 			case null:
// 				blnUserAction = false; // юзер нажал «Отмену», прерываем цикл
// 				break;
// 			case NaN:
// 				blnUserAction = false;
// 				alert ("Неверный ввод!!!\n" + "Исправьте число и повторите попытку.");
// 			case undefined:
// 				blnUserAction = false;
// 				alert ("Неверный ввод!!!\n" + "Исправьте число и повторите попытку.");
// 			case "":
// 				blnUserAction = false;
// 				alert ("Неверный ввод!!!\n" + "Исправьте число и повторите попытку.");
// 			case 0:
// 				if (int <= 0 || int > 10) {
// 					blnUserAction = false;
// 					alert ("Неверный ввод!!!\n" + "Исправьте число и повторите попытку.");
// 				}
// 				else {
// 					if (int > 0 && int < 10) {
// 						blnUserAction = true;
// 						alert(`return ${isNumberInRange(int)}`);
// 					}
// 				}
// 			default:
// 				blnUserAction = true;
// 				alert(`Неизвестный косяк, значение юзера = «${int}», далее выход из функции`);
// 		}
// 	} while (blnUserAction == false); // !!! всегда надо указывать условие явно true/false
// }

function isNumberInRange(rngIsNum) {
	if (rngIsNum > 0 && rngIsNum <= 10) {
		return true;
	}
	else {
		return false;
	}
}