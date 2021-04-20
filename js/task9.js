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

// -----------------------------

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

// --------------------------

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