// 3. Пользователь вводит сумму вклада и процент, который будет начисляться ежегодно.
// Отобразить размер вклада поочередно на ближайшие 5 лет.

let PercentYear = 0;
let DepositSumYear = 0;

// a !== 10 || a === 0 || a > 10 || a < 0 || a == null || a == "" || isNaN(a)

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