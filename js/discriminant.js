// ---------- функции ------------

// Мой пример задачи вычисление дискриминанта корней кв.ур.см.в js/discrim.js

// --------------------------------

// Решение уравнения

let params = setParametrs();
let solution;

if (typeof params != "string") {
    solution = calcSolution(params[0], params[1], params[2]);
    getSolution(solution);
}
else {
    alert(params);
}

function setParametrs() {
    let a, b, c; //коэф. кв. уравнения

    if(a = setParam("a")) {
        if(b = setParam("b")) {
            if(c = setParam("c"))
            {
                return [a, b, c];
            }
        }
    }
	return "Вы отменили ввод!";
}

function setParam(nameParam) {
    let param; //коэффициент уравнения
    let cancel; //флаг для проверки ввода параметра

    do {
        param = prompt(`Коэф. ${nameParam}:`);
        cancel = checkParametr(param);
    } while (cancel);

    return param;
}

function checkParametr(param) {
    if (typeof param == "object") {
        return false;
    }
    else if (isNaN(param) || param == "") {
        alert("Ошибка! Введена пустая строка или не число!");
        return true;
    }
}

function calcSolution(a, b, c) {
    let D; //дискриминант
    let result; //строка с итогом

    if(a == 0) {
        if(b == 0) {
            result = "Корней нет!";
        }
        else {
            if(c != 0) {
                result = -c / b;
            }
            else {
                result = 0;
            }
        }
    }
    else if(b == 0) {
        if(c != 0) {
            (-c / a >= 0) ? result = Math.sqrt(-c / a) : result = "Корней нет!";
        }
        else {
            result = 0;
        }
    }
    else if(c == 0) {
        result = [0, -b / a];
    }
    else {
        D = calcD(a, b, c);
        result = calcRoots(D, a, b, c);
    }
    return result;
}

function calcD(a, b, c) {
    return b ** 2 - 4 * a * c;
}

function calcRoots(D, a, b, c) {
    let x1, x2; //корни квадратного уравнения

    if(D > 0) {
        x1 = (-b + Math.sqrt(D)) / (2 * a);
        x2 = (-b - Math.sqrt(D)) / (2 * a);

        return [x1, x2];
    }
    else if (D == 0) {
        return -b / (2 * a);
    }
    else {
        return "Корней нет!";
    }
}

function getSolution(solution) {
    if(typeof solution == "string") {
        alert(solution);
    }
    else if(typeof solution == "number") {
        alert(`Уравнение имеет один корень: x = ${solution.toFixed(2)}`);
    }
    else {
        alert("Уравнение квадратное. Имеет два корня:\n" + "x1 = " + solution[0].toFixed(2) + "\nx2 = " + solution[1].toFixed(2));
    }
}