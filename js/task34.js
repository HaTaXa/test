// Сделать 40, 42, 45.

// Задача № 34.
// Дан массив с числами. Проверьте, что в этом массиве есть число 5. Если есть - выведите 'да', а если нет - выведите 'нет'.

let int = 0;
let flag = false;
int = getPrompt();
// console.log(`int = ${int}`);

if (int == null || int == "NaN" || int == "") {
	console.log(`int = ${int}`);
}
else {
	// if (int <= 0 || int > 10) {
	// 	flag = false;
	// 	while (flag == false) {
	// 		alert(`Неверный ввод!\n` + `Введите число и повторите попытку.`);
	// 		int = getPrompt();
	// 	}
	// }
	let arr = [];
	for(let i = 0; i < int + 1; i++) {
		arr[i] = i;
		// arr[i] = Math.random().toFixed();
		console.log(`arr[${i}] = ${arr[i]}\n`);
	}
	// console.log(`arr[${arr}]`);
	alert(`${getYesNo(arr)}: arr[${arr}]`);
}

function getPrompt() {
	return +prompt(`Введите число от 1 до 10`);
}

function getYesNo(par) {
	let index = 5;

	for(let i in par) {
		// console.log(`par[${i}] = ${par[i]}`);
		if(index == par[i]) {
			return "Да";
		}
	}
	return "Нет";
}






// // Задача № 57.
// // Переменная lang может принимать 2 значения: 'ru' 'en'. Если она имеет значение 'ru', то в переменную arr запишем массив дней недели на русском языке, а если имеет значение 'en' – то на английском. Решите задачу через 2 if, через switch-case и через многомерный массив без ифов и switch.

// // потом доделать вебинар от 20.04.

// let lang = ""; // получить значение ru/en
// let ru = ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресение"];
// let en = ["Monday", "Tueasday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
// let arr = [ru, en];
// let ggg = "";

// lang = prompt(`Введите язык «ru/en»`);
// for (let i; i < arr[0].length; i++) {
// 	ggg += arr[0[i]];
// }
// 	alert(ggg);
// // alert(lang.toString(arrRu));