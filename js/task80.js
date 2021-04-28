// Задача № 80.
// 1. Создай массив чисел.
// 2. Добавь в массив 10 чисел с клавиатуры.
// 3. Вывести на экран длину самой длинной последовательности повторяющихся чисел в списке.
// Пример для списка <i>2, 4, 4, 4, 8, 8, 4, 12, 12, 14</i>: 3.

let arr = [];

let inputFieldText = document.getElementById('txt-field');
let inputButtonGo = document.getElementById('btn-go');
let inputButtonClear = document.getElementById('btn-clear');
let inputLabelFieldText = document.getElementById('lbl-txtField');

// !!! не срабатывает не понимаю как применять
// document.addEventListener("focus", function(event) {
// 	inputFieldText.select();
// 	inputFieldText.focus();
// });

// нажатие клавиш на клавиатуре
document.addEventListener("keydown", function(event) {
	if (event.key == "Enter") {
		if (inputFieldText.value != "") {
			console.log(`Событие «keydown»`);
			setArrNumbers();
		}
	}
});
// события кнопки GO
inputButtonGo.onmouseover = function(event) {
	inputButtonGo.style.cursor = 'pointer';
}

inputButtonGo.onmouseout = function(event) {
	inputButtonGo.style.cursor = 'auto';
}

inputButtonGo.addEventListener("click", () => {
	if (inputFieldText.value != "") {
		console.log(`Событие «click»`);
		setArrNumbers();
	}
});
// --- события кнопки Clear
inputButtonClear.onmouseover = function(event) {
	inputButtonClear.style.cursor = 'pointer';
}

inputButtonClear.onmouseout = function(event) {
	inputButtonClear.style.cursor = 'auto';
}

inputButtonClear.addEventListener("click", () => {
	inputFieldText.value = "";
	inputLabelFieldText.value = "Введите 10 любых чисел, разделенных между собой пробелом";
});

// !!! не срабатывает не понимаю как применять
// inputFieldText.addEventListener("focus", function(event) {
// 	inputFieldText.select();
// 	inputFieldText.focus();
// });

// 
function setArrNumbers() {
	if (createArrNumbers()) {
		console.log(`1) Функция «setArrNumbers()»: arr[${arr}], arr.length = ${arr.length}`);
		if (checkAddInputNumbers(inputFieldText.value)) {
			console.log(`2) Функция «setArrNumbers()»: arr[${arr}], arr.length = ${arr.length}`);
			let str = getLongOrderNumbers(arr);
			// ??? результат не выводится
			inputLabelFieldText.value = `Длина самой длинной последовательности повторяющихся чисел: ` + str;

		}
		else {
			inputLabelFieldText.value = "!!! Не удалось добавить в массив значения из поля текст!";
		}
	}
	else {
		inputLabelFieldText.value = "!!! Не удалось создать массив чисел!";
	}
	console.log(`3) Функция «setArrNumbers()»: ${inputLabelFieldText.value}\n` + `«The End»`);
}

function getLongOrderNumbers(strArr) {
	console.log(`1) Функция «getLongOrderNumbers()»: arr[${strArr}], arr.length = ${strArr.length}`);
	let max = 0;
	let iCounter = 1;

	for (let i = 1; i < arr.length; i++) {
		if (arr[i] == arr[i - 1]) {
			iCounter++;
			if (iCounter > max) {
				max = iCounter;
			}
		} else iCounter = 1;
	}
	console.log(`2) Функция «getLongOrderNumbers()»: длинна = ${max}`);
	return max;
}

function checkAddInputNumbers(arrString) {
	let newArr = [];
	
	console.log(`1) Функция «checkAddInputNumbers()»: arrString = ${arrString}, arrString.length = ${arrString.length}`);
	for (let i = 0, iCounter = 0; i < arrString.length; i++) {
		if (arrString[i] == " ") {
			iCounter++; // расширяем размер массива
			continue;
		}
		else {
			newArr[iCounter] = arrString[i];
		}
	}
	console.log(`2) Функция «checkAddInputNumbers()»: newArr = ${newArr}, newArr.length = ${newArr.length}`);
	if (newArr.length == 10) {
		arr.push(newArr);
		console.log(`3) Функция «checkAddInputNumbers()»: arr = ${arr}, newArr.length = ${arr.length}`);
		return true;
	}
	else {
		console.log(`3) Функция «checkAddInputNumbers()»: arr = ${arr}, newArr.length = ${arr.length}`);
		return false;
	}
}

function createArrNumbers() {
	for (let i = 0; i < 10; i++) {
		// arr[i] = i;
		arr.push( Math.round( Math.random() * 10 ));
	}
	console.log(`Функция «createArrNumbers()»: arr[${arr}], arr.length = ${arr.length}`);
	if (arr.length == 10) {
		return true;
	}
	else {
		return false;
	}
}