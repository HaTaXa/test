/***
// 1. Программа хранит в двух переменных курс доллара и евро. В первой переменной у вас
// хранится стоимость одного евро в рублях, во второй - стоимость одного доллара в рублях.
// Вы спрашиваете у пользователя, сколько рублей он хочет сконвертировать, получаете это
// число и считаете. Результат надо вывести на страницу с помощью alert.

let kursDollar = 76;
let kursEuro = 90;
let sumRubles = Number(prompt("Введите сумму в рублях:"));
let sumDollars = 0,
let sumEuro = 0;

if(sumRubles.toString() !== "NaN") {
	// sumDollars = sumRubles / kursDollar;
	// sumEuro = sumRules / kursEuro;
	sumDollars = (sumRubles / kursDollar).toFixed(2);
	sumEuro = (sumRubles / kursEuro).toFixed(2);

	alert(`Сумма в рублях ${sumRubles} в долларах = ${sumDollars},\n в евро = ${sumEuro}`);
}
else {
	alert("Неверная сумма!");
}
***/

/***
// 2. Пользователь вводит длину оснований трапеции (a и b), а также высоту трапеции h.
// Программа выводит сообщение: «Площадь трапеции будет равна <значение>». Площадь
// вычисляется по формуле ((a + b) / 2) * h, где a, b - основания, h - высота.

let a, b; // длинна основания трапеции
let h; // высота трапеции
let s; // площадь

a = +prompt("Введите длинну основания трапеции (a):");
if(a == "" || a == null || isNaN(a)) {
	alert("Поле не может быть пустым\n" +
			"и не должно содержать текст.");
}
else {
	b = +prompt("Введите длинну основания трапеции (b):");
	if(b == "" || b == null || isNaN(b)) {
		alert("Поле не может быть пустым\n" +
				"и не должно содержать текст.");
	}
	else {
		h = +prompt("Введите высоту трапеции (h):");
		if(h == "" || h == null || isNaN(h)) {
			alert("Поле не может быть пустым\n" +
					"и не должно содержать текст.");
		}
		else {
			s = ((a + b) / 2) * h;
			alert(`Площадь трапеции = ${s}`);
		}
	}
}
***/

/***
// 3. Пользователь вводит сумму вклада и процент, который будет начисляться ежегодно.
// Отобразить размер вклада поочередно на ближайшие 5 лет.

let PercentYear = 0;
let DepositSumYear = 0;

let DepositAmount = +prompt("Введите годовую сумму депозита:");
if(isNaN(DepositAmount) || DepositAmount == "" || DepositAmount == null) {
	alert("Неправильно заполнено поле «Сумма».\n" +
			"(i) Поле не может быть пустым\n" +
			"и не должно содержать текст.");
}
else if (DepositAmount <= 0) {
	alert("Неправильно заполнено поле «Сумма».\n" +
			"(i) Сумма не может быть отрицательным числом или равной 0.");
} else {
	let DepositPercent = Number(prompt("Введите годовой % от вклада:"));
	if(isNaN(DepositPercent) || DepositPercent == "" || DepositPercent == null) {
		alert("Неправильно заполнено поле «Процент».\n" +
				"(i) Поле не может быть пустым\n" +
				"и не должно содержать текст.");
	}
	else if (DepositPercent <= 0) {
		alert("Неправильно заполнено поле «Процент».\n" +
				"(i) Процентное число не может быть отрицательным или равным 0.");
	}
	else {
		// процент от суммы
		PercentYear = DepositAmount * DepositPercent / 100;
		// PercentYear = DepositAmount % DepositPercent;

		// сумма за год с процентами
		DepositSumYear = DepositAmount + PercentYear;
		
		for(let i = 1; i <= 5; i++) {
			alert(`Годовой процент: ${PercentYear}\n` +
					`Годовой размер вклада: ${DepositSumYear}`);
			
			// перезаписываем процент от годовой суммы
			PercentYear = DepositSumYear * DepositPercent / 100;
			// PercentYear = DepositSumYear % DepositPercent;
			console.log(`${PercentYear}`);

			// перезаписываем сумму за год с процентами
			DepositSumYear = DepositSumYear + PercentYear;
			console.log(`${DepositSumYear}`);
		}
	}
}
***/

/******/
// 4. Запросить у пользователя ввод числа и сохранить это число в переменную a.
// Если переменная a равна 10, то выведите 'Верно', иначе выведите 'Неверно'.

let a = +prompt("Введите число от 1 до 10:");
if(a !== 10 || a === 0 || a > 10 || a < 0 || a == null || a == "" || isNaN(a)) {
	alert(`a = ${a} - 'Неверно'`);
} else {
	alert(`a = ${a} - 'Верно'`);
}

/***
// 6. Даны переменные:
// let a = 10;
// let b = 3;
let a = 14;
let b = 3;
// Найдите остаток от деления a на b.
alert(`Остаток от деления «a» на «b» = ${a % b}`);
***/

/***
// 5. Выведите столбец чисел от 1 до 50.
// let i = 1 // инициализация переменной
// i <= 50 // условие
// i++ // оператор инкремирования, т.е.увеличение на единицу (счетчик), тоже самое что i = i + 1
for(let i = 1; i <= 50; i++) {
	console.log(`${i}\n`);
}
***/

/***
for(let i = 2; i <= 50; i = i + 2) {
	console.log(`${i}\n`);
}
***/

/***
for(let i = 2; i <= 50; i = i + 2) {
	if(i % 2 == 0) {
		console.log(`${i}\n`);
	}
}
***/

/*** нечетные
for(let i = 2; i <= 50; i = i + 2) {
	if(i % 2 !== 0) {
		console.log(`${i}\n`);
	}
}
***/

/***
let result = "";
for(let i = 1; i <= 50; i++) {
    if(i % 2 != 0) {
        console.log(`${i}\n`);
        result = result + i + "\n";
    }
}
alert(result);
***/