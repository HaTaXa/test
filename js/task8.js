// Задача № 8.
// Создайте переменную str и присвойте ей значение 'abcde'. Обращаясь к отдельным
// символам этой строки выведите на экран символ 'a', символ 'b', символ 'e'.

switch (confirm(`Задача № 8.\n` +
				`Дано значение: «abcde».\n` +
				`Вывести на экран символ «a», «b», «e» через переменную «str»?`)) {
	case true:
		let str = "abcde";
		let flag = true;
		for(let i = 0; i < str.length; i++) {
			if(i == 0 || i == 1 || i == str.length - 1) {
				flag = confirm(`Переменная «str» содержит значение «abcde»,\n` +
								`в переменной «str[${i}]» находится символ «${str[i]}».`);
				if(flag == false) {
					break;
				}
			}
		}
	case false:
		break;
}