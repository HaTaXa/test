// Задача № 67. Сделайте функцию inArray, которая определяет, есть в массиве элемент с заданным текстом или нет. Функция первым параметром должна принимать текст элемента, а вторым - массив, в котором делается поиск. Функция должна возвращать true или false.

// ИНИЦИАЛИЗАЦИЯ

let inputFieldText = document.getElementById('fieldText');
let inputFieldSearch = document.getElementById('fieldSearch');
let btnSearch = document.getElementById('btn-search');

// СОБЫТИЯ ЭЛЕМЕНТОВ

// обработчик события нажатие клавиши ввод на клавиатуре
document.addEventListener("keydown", function(event) {
	if (event.key == "Enter") {
		setParametrs();
	}
});

// --- inputFieldText
// обработчик события на ввод значений в поле текст
inputFieldText.addEventListener("input", () => {
	if (checkValue(inputFieldText)) {
		inputFieldSearch.removeAttribute("disabled");
		if(checkValue(inputFieldSearch)) {
			btnSearch.removeAttribute("disabled");
		}
	}
	else {
		inputFieldSearch.setAttribute("disabled", "disabled");
		btnSearch.setAttribute("disabled", "disabled");
	}
// (i) проверка условия напрямую без вынесения в функцию
	// if (inputFieldText.value == "") {
	// 	inputFieldSearch.setAttribute("disabled", "disabled");
	// 	btnSearch.setAttribute("disabled", "disabled");
	// }
	// else if (inputFieldText.value != "") {
	// 	inputFieldSearch.removeAttribute("disabled");
	// 	if ((inputFieldSearch.value != "") && (inputFieldSearch.getAttribute("disabled") != "disabled")) {
	// 		btnSearch.removeAttribute("disabled");
	// 	}
	// }
});
// --- inputFieldText
// обработчик события на изменение значений поля текст
inputFieldText.addEventListener("change", () => {
	if (checkValue(inputFieldText)) {
		inputFieldSearch.removeAttribute("disabled");
	}
	else {
		inputFieldSearch.setAttribute("disabled", "disabled");
	}
});
// --- inputFieldSearch
// обработчик события на ввод значений в поле поиск
inputFieldSearch.addEventListener("input", () => {
	if (checkValue(inputFieldSearch)) {
		btnSearch.removeAttribute("disabled");
	}
	else {
		btnSearch.setAttribute("disabled", "disabled");
	}
// (i) проверка условия напрямую без вынесения в функцию
	// if (inputFieldSearch.value == "") {
	// 	btnSearch.setAttribute("disabled", "disabled");
	// }
	// else if (inputFieldSearch.value != "") {
	// 	btnSearch.removeAttribute("disabled");
	// }
});
// --- inputFieldSearch
// обработчик события на изменение значений поля поиск
inputFieldSearch.addEventListener("change", () => {
	if (checkValue(inputFieldSearch)) {
		btnSearch.removeAttribute("disabled");
	}
	else {
		btnSearch.setAttribute("disabled", "disabled");
	}
});
// ---
// обработчик события нажатие кнопки мыши
btnSearch.addEventListener("click", function() {
	setParametrs();
	if (btnSearch.getAttribute("disabled") != "disabled") {
		// вешаем гор.клав.на кнопку поиск
		document.addEventListener("keydown", function(event) {
			if (event.key == "Enter") {
				setParametrs();
			}
		});
	}
});

// --- ФУНКЦИИ

// проверка на заполнение полей (поле текст/поле поиск)
function checkValue(item) {
	if (item.value == "") {
		console.log(`item.value == ""\n` + `item.value = ${item.value}`);
		return false;
	}
	else if (item.value != "") {
		console.log(`item.value != ""\n` + `item.value = ${item.value}`);
		return true;
	}
}
// ---
function setParametrs() {
	// создаем массив данных, кот.содержится в поле поиск
	let createArr = setArrSearch(inputFieldSearch.value);
	// console.log(`createArr = ${createArr}`);
	// сравниваем массив с текстом в поле текст
	alert(`Функция «inArray»:\n` + inArray(inputFieldText.value, createArr));
}
// ---
// создаем массив данных, кот.содержится в поле поиск
function setArrSearch(str) {
	// [ ({«!*';^:@&\[\]\/<>=\t\s-`~+|$.,?%#»})]
	// let chrRegExp = new RegExp(/ !;:-.,?/igm);
	let arrCount = 0; // счетчик для масиива, в кот.будет находится каждое слово из переменной «str» разделенное пробелом
	let arr = [];
	// console.log(`str = ${str}`);
	for (let i = 0; i < str.length; i++) {
		// console.log(`str.charAt(i) = ${str.charAt(i)}`);

		// str.isLetterOrDigit()
		// str.isSpaceChar()
		if (str[i] == " ") {
			arrCount++; // расширяем размер массива
			console.log(`str[i] == " ": str[${i}]`);
		}
		// else if (chrRegExp.test(str[i])) {
		// 	console.log(`chrRegExp.test(str[i]): str[${i}]`);
		// 	arrCount++; // расширяем размер массива
		// }
		else {
			if (arr.length == 0 || arr[arrCount] == "" || arr[arrCount] == null || arr[arrCount] == undefined || arr[arrCount] == NaN) {
				arr[arrCount] = str[i]; // присваиваем первичное значение
			}
			else {
				arr[arrCount] += str[i]; // добавляем значение к предыдущему
			}
		}
	}
	// проверка массива в консоле
	for (let i = 0; i < arr.length; i++) {
		console.log(`arr[${i}] = ${arr[i]}\n`);
	}
	return arr;
}
// ---
// сравниваем массив с текстом в поле текст
function inArray(strText, arrSearch) {
	let strValue = "";

	if (strText.length == 0) {
		return strValue = "В поле текст пусто, нечего искать.";
	}
	else if (arrSearch.length == 0) {
		return strValue = "Строка поиска пуста, нечего искать.";
	}

	for (let index = 0; index < arrSearch.length; index++) {
		console.log(`strValue = ${strValue}strText.indexOf(${strText.indexOf(arrSearch[index])})\n`);
		if (strText.indexOf(arrSearch[index]) == -1) {
			if (strValue == "") {
				strValue = `«${arrSearch[index]}»` + " = False;\n";
			}
			else {
				strValue += `«${arrSearch[index]}»` + " = False;\n";
			}
		}
		else {
			if (strValue == "") {
				strValue = `«${arrSearch[index]}»` + " = True;\n";
			}
			else {
				strValue += `«${arrSearch[index]}»` + " = True;\n";
			}
		}
	}
	strValue = strValue.substring(0, strValue.length - 2) + ".";
	return strValue;
}