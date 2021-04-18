// 1. Программа хранит в двух переменных курс доллара и евро. В первой переменной у вас
// хранится стоимость одного евро в рублях, во второй - стоимость одного доллара в рублях.
// Вы спрашиваете у пользователя, сколько рублей он хочет сконвертировать, получаете это
// число и считаете. Результат надо вывести на страницу с помощью alert.

// let kursDollar = 76;
// let kursEuro = 90;
// let sumRubles = Number(prompt("Введите сумму в рублях:"));
// let sumDollars = 0,
// let sumEuro = 0;

// if(sumRubles.toString() !== "NaN") {
// 	// sumDollars = sumRubles / kursDollar;
// 	// sumEuro = sumRules / kursEuro;
// 	sumDollars = (sumRubles / kursDollar).toFixed(2);
// 	sumEuro = (sumRubles / kursEuro).toFixed(2);

// 	alert(`Сумма в рублях ${sumRubles} в долларах = ${sumDollars},\n в евро = ${sumEuro}`);
// }
// else {
// 	alert("Неверная сумма!");
// }

// ------------------------------

// 2. Пользователь вводит длину оснований трапеции (a и b), а также высоту трапеции h.
// Программа выводит сообщение: «Площадь трапеции будет равна <значение>». Площадь
// вычисляется по формуле ((a + b) / 2) * h, где a, b - основания, h - высота.

// let a, b; // длинна основания трапеции
// let h; // высота трапеции
// let s; // площадь

// a = +prompt("Введите длинну основания трапеции (a):");
// if(a == "" || a == null || isNaN(a)) {
// 	alert("Поле не может быть пустым\n" +
// 			"и не должно содержать текст.");
// }
// else {
// 	b = +prompt("Введите длинну основания трапеции (b):");
// 	if(b == "" || b == null || isNaN(b)) {
// 		alert("Поле не может быть пустым\n" +
// 				"и не должно содержать текст.");
// 	}
// 	else {
// 		h = +prompt("Введите высоту трапеции (h):");
// 		if(h == "" || h == null || isNaN(h)) {
// 			alert("Поле не может быть пустым\n" +
// 					"и не должно содержать текст.");
// 		}
// 		else {
// 			s = ((a + b) / 2) * h;
// 			alert(`Площадь трапеции = ${s}`);
// 		}
// 	}
// }

// --------------------------

// 3. Пользователь вводит сумму вклада и процент, который будет начисляться ежегодно.
// Отобразить размер вклада поочередно на ближайшие 5 лет.

// let PercentYear = 0;
// let DepositSumYear = 0;

// // a !== 10 || a === 0 || a > 10 || a < 0 || a == null || a == "" || isNaN(a)

// let DepositAmount = +prompt("Введите годовую сумму депозита:");
// if(isNaN(DepositAmount) || DepositAmount == "" || DepositAmount == null) {
// 	alert("Неправильно заполнено поле «Сумма».\n" +
// 			"(i) Поле не может быть пустым\n" +
// 			"и не должно содержать текст.");
// }
// else if (DepositAmount <= 0) {
// 	alert("Неправильно заполнено поле «Сумма».\n" +
// 			"(i) Сумма не может быть отрицательным числом или равной 0.");
// } else {
// 	let DepositPercent = Number(prompt("Введите годовой % от вклада:"));
// 	if(isNaN(DepositPercent) || DepositPercent == "" || DepositPercent == null) {
// 		alert("Неправильно заполнено поле «Процент».\n" +
// 				"(i) Поле не может быть пустым\n" +
// 				"и не должно содержать текст.");
// 	}
// 	else if (DepositPercent <= 0) {
// 		alert("Неправильно заполнено поле «Процент».\n" +
// 				"(i) Процентное число не может быть отрицательным или равным 0.");
// 	}
// 	else {
// 		// процент от суммы
// 		PercentYear = DepositAmount * DepositPercent / 100;
// 		// PercentYear = DepositAmount % DepositPercent;

// 		// сумма за год с процентами
// 		DepositSumYear = DepositAmount + PercentYear;
		
// 		for(let i = 1; i <= 5; i++) {
// 			alert(`Годовой процент: ${PercentYear}\n` +
// 					`Годовой размер вклада: ${DepositSumYear}`);
			
// 			// перезаписываем процент от годовой суммы
// 			PercentYear = DepositSumYear * DepositPercent / 100;
// 			// PercentYear = DepositSumYear % DepositPercent;
// 			console.log(`${PercentYear}`);

// 			// перезаписываем сумму за год с процентами
// 			DepositSumYear = DepositSumYear + PercentYear;
// 			console.log(`${DepositSumYear}`);
// 		}
// 	}
// }

// --------------------------

// 4. Запросить у пользователя ввод числа и сохранить это число в переменную a.
// Если переменная a равна 10, то выведите 'Верно', иначе выведите 'Неверно'.

// let a = +prompt("Введите число от 1 до 10:");
// if(a !== 10) {
// 	alert(`a = ${a} - 'Неверно'`);
// } else {
// 	alert(`a = ${a} - 'Верно'`);
// }

// -------------------------

// 6. Даны переменные:
// let a = 10;
// let b = 3;
// let a = 14;
// let b = 3;
// // Найдите остаток от деления a на b.
// alert(`Остаток от деления «a» на «b» = ${a % b}`);

// ----------------------------

// 5. Выведите столбец чисел от 1 до 50.
// let i = 1 // инициализация переменной
// i <= 50 // условие
// i++ // оператор инкремирования, т.е.увеличение на единицу (счетчик), тоже самое что i = i + 1

// for(let i = 1; i <= 50; i++) {
// 	console.log(`${i}\n`);
// }

// ------------------------

// for(let i = 2; i <= 50; i = i + 2) {
// 	console.log(`${i}\n`);
// }

// -----------------------

// for(let i = 2; i <= 50; i = i + 2) {
// 	if(i % 2 == 0) {
// 		console.log(`${i}\n`);
// 	}
// }

// ----------------------

// нечетные
// for(let i = 2; i <= 50; i = i + 2) {
// 	if(i % 2 !== 0) {
// 		console.log(`${i}\n`);
// 	}
// }

// ----------------------

// let result = "";
// for(let i = 1; i <= 50; i++) {
//     if(i % 2 != 0) {
//         console.log(`${i}\n`);
//         result = result + i + "\n";
//     }
// }
// alert(result);

// ----------------------

// 7. С помощью цикла for сформируйте строку '123456789' и запишите ее в переменную str.

// const MAXLENSTR = 50; // константа. Обычно регистр букв делается большими
// let str = "";
// // let myVal;
// let symbol = "*";
// let flag = true;

// let lenStr = Number(prompt("Длинна строки:"));

// if(lenStr.toString() != "NaN") {
// 	if(lenStr > 0 && lenStr <= MAXLENSTR) {
// 		let userAnswer = confirm(`Заполняется цифрами?`);
// 		switch(userAnswer) {
// 			case true: for(let i = 1; i <= lenStr; i++ ) {
// 							str += i;
// 						}
// 						break; // оператор прерывания
// 			case false: while(flag) {
// 							symbol = prompt(`Укажите символ для заполнения строки:`);
// 							if(symbol != null) {
// 								if(symbol.length ==1) {
// 									for(let i = 1; i <= lenStr; i++) {
// 										str += symbol;
// 									}
// 									break; // оператор прерывания
// 								}
// 							}
// 							else {
// 								alert(`Ошибка!!!\n` +
// 										`Введите 1 символ`);
// 								flag = false;
// 							}
// 						}
// 						break; // оператор прерывания
// 		}
// 		flag ? alert(`Результат:\n${str}`) : alert(`Вы отменили!`);
// 	}
// 	else if(lenStr == "") {
// 		alert(`Ошибка!!!\n` +
// 				`Длина строки не должна быть пустой`);
// 	}
// 	else {
// 		alert(`Ошибка!!!\n` +
// 				`Длина строки должна быть «> 0» и «<= ${MAXLENSTR}»`);
// 	}
// }
// else {
// 	alert(`Ошибка!!!\n` +
// 			`Длина строки должна быть числом!`);
// }

// --- массивы ---

// let str = "Привет друзья!";
// let resultStr = "";

// for(let i = 0; i <= str.length; i++) {
// 	if(i == str.length - 1) {
// 		resultStr += str[i];
// 	}
// 	else {
// 		resultStr += str[i] + "\n";
// 	}	
// }
// alert(resultStr);

// -----------------------------

// 9. Дан массив с элементами 'Привет, ', 'мир' и '!'. Необходимо вывести на экран фразу 'Привет, мир!'

// let mas = [100, "Привет!", true, -20]; // разноплановые массывы
// alert(typeof mas);
// let mas = ["Привет, ", "мир", "!"];
// // alert(mas[0] + mas[2] + mas[mas.length - 1]);
// let str = "";
// let lenMas = 0;

// --------------------------

// for(let i = 0; i < mas.length; i++) {
// 	str += mas[i];
// }

// mas[0] = "Добрый день, "; // переписать элемент массива
// mas[mas.length - 1] = "!!!"; // добавить в массив
// mas[7] = true;
// mas[10] = 1000;

// for(let index in mas) {
// 	str += mas[index];
// 	lenMas++; // то же самое что: lenStr = lenStr + 1;
// }
// alert(str);
// alert(str + `\nДлина массива неверная: ${lenMas}`);
// alert(str + `\nДлина массива реальная: ${mas.length}`);

// --------------------------

// let str = "";
// let mas = [];
// let countItems = prompt(`Введите кол-во элементов в массиве:`);

// if(countItems > 0 && countItems <= 20) {
// 	for(let i = 0; i < countItems; i++) {
// 		mas[i] = Math.ceil(Math.random() * 10); // заполняем массив
// 	}
// 	for(let index in mas) {
// 		str += mas[index] + `\n`;
// 	}
// 	alert(str);
// }
// else {
// 	alert(`Кол-во элементов в массиве должно быть «> 0», и не «> 20»!`);
// }

// --- массивы - продолжение ---

// let mas1 = [100, 200, 300, 400, 500];
// let mas2 = [600, 700, 800];

// удалить последний элем.массива
// let masItem;
// alert(masItem.push(2, 4));

// удаляет 1 элемент мас
// let firstItem;

// метод "вырезания" содержимого в массиве
// alert(mas1.slice(1, 3) `\n` + mas1);

// let resultMas = mas1.slice(1, 3);
// let resultMas = mas1.slice(start, end);

// alert(resultMas + `\n` + mas1);

// alert(mas1.splice(1, 3, 0, 1000, 2000, [7,10]) + `\n` + mas1);


// --- дата ---

// let today = new Date();
// let currentMonth = today.getMonth();
// let currentDay = today.getDate();


// alert(todate);
// console.dir(todate);
// console.log(todate);
// alert(currentMonth + ` ` + currentDay);

// ----------------------

// let date = new Date();
// let dayWeek = "";
// // создаем объект
// let arrDays = {
// 	0: "воскресение",
// 	1: "понедельник",
// 	2: "вторник",
// 	3: "среда",
// 	4: "четверг",
// 	5: "пятница",
// 	6: "суббота"
// }

// for(let index in arrDays) {
// 	if(date.getDay() == index) {
// 		dayWeek = arrDays[index];
// 	}
// }
// alert(dayWeek);

// ---------- функции ------------

// см.в js/discriminant.js