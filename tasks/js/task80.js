// Задача № 80.
// 1. Создай массив чисел.
// 2. Добавь в массив 10 чисел с клавиатуры.
// 3. Вывести на экран длину самой длинной последовательности повторяющихся чисел в списке.
// Пример для списка <i>2, 4, 4, 4, 8, 8, 4, 12, 12, 14</i>: 3.

let inputFieldText = document.getElementById('txt-field');
let inputButtonGo = document.getElementById('btn-go');
let inputButtonClear = document.getElementById('btn-clear');
let inputLabelFieldText = document.getElementById('lbl-txtField');

// нажатие клавиш на клавиатуре
document.addEventListener("keydown", function(event) {
	if (event.key == "Enter") {
		console.log(`"document", событие "keydown": 1) Старт программы`);
		if (checkFieldValue(inputFieldText.value)) {
			setLenLongOrderRepeatNum(inputFieldText.value);
		}
		else {
			console.log(`"document", событие "keydown": 1.1) Не заполнено поле текст`);
			alert(`(i) Поле текст не заполнено!!!\n` + `Введите 10 любых чисел, разделенных между собой пробелом.`);
		}
		console.log(`"document", событие "keydown": 2) Финиш программы`);
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
	console.log(`"inputButtonGo", событие "click": 1) Старт программы`);
	if (checkFieldValue(inputFieldText.value)) {
		setLenLongOrderRepeatNum();
	}
	else {
		console.log(`"document", событие "keydown": 1.1) Не заполнено поле текст`);
		alert(`(i) Поле текст не заполнено!!!\n` + `Введите 10 любых чисел, разделенных между собой пробелом.`);
	}
	console.log(`"inputButtonGo", событие «click»: 2) Финиш программы`);
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

inputFieldText.focus(); // наконец то фокус заработал
inputFieldText.value = "6 10 5 23 23 14 6 6 1 2"; // временно, чтобы не вводить каждый раз при тесте


// событие лейбла
inputLabelFieldText.onchange = function(event) {

}




// головная программа
function setLenLongOrderRepeatNum(valueNum) {
	if (generateRandomAndPush()) {
		console.log(`1) Функция "setLenLongOrderRepeatNum()": valueNum[${valueNum}], valueNum.length = ${valueNum.length}`);

		let arr = checkAddArrayValues(inputFieldText.value);
		console.log(`2) Функция "setLenLongOrderRepeatNum()": arr[${arr}], arr.length = ${arr.length}`);
		if (arr.length == 20) {
			// ??? результат не выводится, почему?
			inputLabelFieldText.value = `Длина самой длинной последовательности повторяющихся чисел: ` + getLenLongOrderRepeatNum(arr);
		}
		else {
			inputLabelFieldText.value = "!!! Не удалось добавить в массив значения из поля текст!";
		}
	}
	else {
		inputLabelFieldText.value = "!!! Не удалось создать массив чисел!";
	}
	console.log(`3) Функция "setLenLongOrderRepeatNum()": ${inputLabelFieldText.value}\n` + `«The End»`);
}

function getLenLongOrderRepeatNum(strArr) {
	console.log(`1) Функция "getLenLongOrderRepeatNum()": arr[${strArr}], arr.length = ${strArr.length}`);
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
	console.log(`2) Функция "getLenLongOrderRepeatNum()": длинна = ${max}`);
	return max;
}
// проверка и добавление в массив значений
function checkAddArrayValues(strValue) {
	let arr = [];
	let arrNew = [];

	console.log(`1) Функция "checkAddArrayValues()": strValue = ${strValue}, strValue.length = ${strValue.length}`);

	for (let i = 0, iCounter = 0; i < strValue.length; i++) {
		if (strValue[i] == " " || strValue[i] == "," || strValue[i] == ";") {
			continue;
		}
		else {
			arrNew[iCounter] = strValue[i];
			iCounter++; // расширяем размер массива
		}
	}
	console.log(`2) Функция "checkAddArrayValues()": arrNew = ${arrNew}, arrNew.length = ${arrNew.length}`);

	if (arrNew.length == 10) {
		// arrNew.push(arrNew); // ??? проверить, интересно что будет
		arr.push(arrNew); // добавляем массив в массив
		console.log(`3) Функция "checkAddArrayValues()": arr = ${arr}, arr.length = ${arr.length}`);
		return arr;
	}
	else {
		console.log(`3) Функция "checkAddArrayValues()": arr = ${arr}, arr.length = ${arr.length}`);
		return arr;
	}
}
// генерирование порядка случайных чисел
function generateRandomAndPush() {
	let arr = [];
	
	for (let i = 0; i < 10; i++) {
		// arr[i] = i;
		arr[i] = (Math.random() * 100).toFixed();
	}
	console.log(`Функция "generateRandomAndPush()": Math.random() - arr[${arr}], arr.length = ${arr.length}`);

	if (arr.length == 10) {
		return true;
	}
	else {
		return false;
	}
}
// проверка поля текст на наличие значений
function checkFieldValue(fieldValue) {
	console.log(`Функция "checkFieldValue()": fieldValue = "${fieldValue}", fieldValue.length = ${fieldValue.length}`);
	if (fieldValue != "") {
		return true;
	}
	else if (fieldValue == "") {
		return false;
	}
}