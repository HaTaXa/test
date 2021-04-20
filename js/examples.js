// Различные примеры

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