// 1. Программа хранит в двух переменных курс доллара и евро. В первой переменной у вас
// хранится стоимость одного евро в рублях, во второй - стоимость одного доллара в рублях.
// Вы спрашиваете у пользователя, сколько рублей он хочет сконвертировать, получаете это
// число и считаете. Результат надо вывести на страницу с помощью alert.

let kursDollar = 76;
let kursEuro = 90;
let sumRubles = Number(prompt("Введите сумму в рублях:"));
let sumDollars = 0;
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