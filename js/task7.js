// 7. С помощью цикла for сформируйте строку '123456789' и запишите ее в переменную str.

const MAXLENSTR = 50; // константа. Обычно регистр букв делается большими
let str = "";
// let myVal;
let symbol = "*";
let flag = true;

let lenStr = Number(prompt("Длинна строки:"));

if(lenStr.toString() != "NaN") {
	if(lenStr > 0 && lenStr <= MAXLENSTR) {
		let userAnswer = confirm(`Заполняется цифрами?`);
		switch(userAnswer) {
			case true: for(let i = 1; i <= lenStr; i++ ) {
							str += i;
						}
						break; // оператор прерывания
			case false: while(flag) {
							symbol = prompt(`Укажите символ для заполнения строки:`);
							if(symbol != null) {
								if(symbol.length ==1) {
									for(let i = 1; i <= lenStr; i++) {
										str += symbol;
									}
									break; // оператор прерывания
								}
							}
							else {
								alert(`Ошибка!!!\n` +
										`Введите 1 символ`);
								flag = false;
							}
						}
						break; // оператор прерывания
		}
		flag ? alert(`Результат:\n${str}`) : alert(`Вы отменили!`);
	}
	else if(lenStr == "") {
		alert(`Ошибка!!!\n` +
				`Длина строки не должна быть пустой`);
	}
	else {
		alert(`Ошибка!!!\n` +
				`Длина строки должна быть «> 0» и «<= ${MAXLENSTR}»`);
	}
}
else {
	alert(`Ошибка!!!\n` +
			`Длина строки должна быть числом!`);
}