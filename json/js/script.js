let JSONstr = `{
  "1": {
    "id": 1,
    "name": "Услуга 1",
    "category": "Категория 1",
    "price": 1000,
    "discont": 10
  },
  "2": {
    "id": 2,
    "name": "Услуга 2",
    "category": "Категория 1",
    "price": 2500,
    "discont": 0
  },
  "3": {
    "id": 3,
    "name": "Услуга 3",
    "category": "Категория 2",
    "price": 500,
    "discont": 0
  },
  "4": {
    "id": 4,
    "name": "Услуга 4",
    "category": "Категория 2",
    "price": 2000,
    "discont": 5
  },
  "5": {
    "id": 5,
    "name": "Услуга 5",
    "category": "Категория 3",
    "price": 1500,
    "discont": 15
  }
}`;

const services = JSON.parse(JSONstr);

// let requestURL = "../json/js/services.json";

// let request = new XMLHttpRequest();
// request.open("GET", requestURL);

// request.responseType = "json";
// request.send();

// request.onload = function () {
// let services = request.response;

let countKeys = 0; // кол-во ключей в объекте (кол-во ячеек в таблице)
let countServices = 0; // кол-во услуг (кол-во объектов)
for (let key in services[1]) {
  if (services[1].hasOwnProperty(key)) {
    countKeys++;
  }
}

for (let key in services) {
  if (services.hasOwnProperty(key)) {
    countServices++;
  }
}

let headersName = new Map(); // ассоциативный массив с именами заголовков таблицы

const btnsContainer = document.getElementById("buttons"); // div с кнопками
const btnCreate = document.getElementById("createTable"); // кнопка "Создать таблицу"
const btnDelete = document.getElementById("deleteTable"); // кнопка "Удалить таблицу"

// обработчик события "click" по кнопке "Создать таблицу"
btnCreate.addEventListener("click", () => {
  // если таблица с id "generateTable" не существует в DOM
  if (!document.getElementById("generateTable")) {
    createTable(services); // вызов функции создания таблицы
  }
});

// обработчик события "click" по кнопке "Удалить таблицу"
btnDelete.addEventListener("click", () => {
  if (document.getElementById("generateTable")) {
    document.getElementById("generateTable").remove();
  }
});

// функция создания таблицы
function createTable() {
  const table = document.createElement("table"); // объект (тег table)
  table.id = "generateTable"; // задаём тегу table id
  table.classList.add("generateTable"); // добавляем класс

  const caption = table.createCaption(); // объект (тег caption)
  caption.textContent = "Наши услуги";

  createTHead(table); // вызов функции создания заголовочной строки (тег thead)
  createTBody(table); // вызов функции создания содержимого таблицы (тег tbody)

  // добавляем объект (таблицу) после div с кнопками
  btnsContainer.insertAdjacentElement("afterend", table);
}

// функция создания заголовка таблицы
function createTHead(table) {
  let tHead = table.createTHead(); // объект (тег thead)
  let row, cellHead; // объекты: строка (тег tr) и заголовочная ячейка (тег th)

  headersName = setHeadersName(services); // вызов функции для получения массива с наименованиями заголовков таблицы

  // внешний цикл - по строкам (tr)
  for (let i = 0; i < 1; i++) {
    row = tHead.insertRow(); // добавляем строку (tr) к thead

    // внутренний цикл - по заголовочным ячейкам (th)
    for (let j = 0; j < countKeys; j++) {
      cellHead = document.createElement("th"); // создаём заголовочную ячейку (th)

      j == 0
        ? (cellHead.textContent = "№ п/п")
        : (cellHead.textContent = headersName.get((j - 1).toString()).value); // получаем из массива headersName значение ключа "value" для каждой (j - 1) ячейки

      row.append(cellHead); // добавление ячейки к строке
    }
  }
}

// функция создания содержимого таблицы (тег tbody)
function createTBody(table) {
  let tBody = table.createTBody(); // объект (тег tbody)
  let row, cell; // объекты: строка (тег tr) и ячейка (тег td)

  // внешний цикл - по строкам (tr)
  for (let i = 0; i < countServices; i++) {
    row = tBody.insertRow(); // добавляем строку (tr) к tbody

    // внутренний цикл - по ячейкам (td)
    for (let j = 0; j < countKeys; j++) {
      cell = row.insertCell(); // добавляем ячейку (td) к строке (tr)

      j == 0
        ? (cell.textContent = i + 1)
        : (cell.textContent = getValue(i, j - 1)); // получаем значение для ячейки из массива services для каждого объекта
    }
  }
}

// функция формирования ассоциативного массива с наименованиями заголовочных ячеек таблицы
function setHeadersName(services) {
  let keyName = "";
  let value = "";
  let index;

  // цикл по ключам объекта из массива services
  for (let key in services[1]) {
    switch (key) {
      case "id":
        continue;
      case "name":
        index = "0";
        keyName = "name";
        value = "Наименование";
        break;
      case "category":
        index = "1";
        keyName = "category";
        value = "Категория";
        break;
      case "price":
        index = "2";
        keyName = "price";
        value = "Цена";
        break;
      case "discont":
        index = "3";
        keyName = "discont";
        value = "Скидка";
        break;
    }
    // создания элемента массива с ключом "index" и значением в виде объекта
    headersName.set(index, { keyName: keyName, value: value });
  }

  return headersName;
}

// функция возврата значения для ячейки таблицы
function getValue(indexRow, indexCell) {
  let value = "";
  let keyName;

  // цикл по ключам ассоциативного массива headersName
  for (let key of headersName.keys()) {
    // если значение ключа совпадает с порядковым номером ячейки
    if (indexCell.toString() === key) {
      keyName = headersName.get(key).keyName;
    }
  }

  // цикл по массиву объектов
  for (let i = 1; i <= countServices; i++) {
    // если значение порядкового номера строки совпадает с индексом объекта
    if (indexRow + 1 === i) {
      value = services[i][keyName]; // записываем значение ключа "keyName"
    }
    // иначе прерываем текущую итерацию цикла (переходим к следующему элементу)
    else {
      continue;
    }
  }

  return value;
}
// };
