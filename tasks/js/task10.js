// Задача № 10:
// Даны два массива: ['a', 'b', 'c'] и [1, 2, 3]. Объедините их вместе.

let arr1 = ['a', 'b', 'c'];
let arr2 = [1, 2, 3];

switch (confirm(`Задача № 10.\n` +
				`Даны два массива: arrAlphabet['a', 'b', 'c'] и arrNumeric[1, 2, 3].\n` +
				`Объединить их вмете?`)) {
	case true:
		alert(`Новый масив содержит: [${arr1.concat(arr2)}]`);
	case false:
		break;
}

// -------- без стандартных функций -----------

// let arrayOne = ['a', 'b', 'c'];
// let arrayTwo = [1, 2, 3, 4, 5];
// let arrayMix = [];

// let str = "";
// let i = 0;

// for(let index in arrayOne) {
//     arrayMix[i] = arrayOne[index];
//     i++;
// }
// for(let index in arrayTwo) {
//     arrayMix[i] = arrayTwo[index];
//     i++;
// }
// for(let index in arrayMix) {
//     str += arrayMix[index] + '\n';
// }
// alert(str);