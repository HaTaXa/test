let users = [];
let user;

let countUsers = prompt("Кол-во пользователей (объектов):"); //string или null (object)

if(!countUsers && typeof countUsers == "object") {
  console.log("Вы отменили!");
}
else {
  if(countUsers == "") {
    console.log("Вы ничего не ввели!");
  }
  else {
    if(isNaN(countUsers)) {
      console.log("Вы ввели не число!");
    }
    else {
      for(let i = 0; i < countUsers; i++) {
        user = User();
        users[i] = user;
      }
    }
  }
}

function User() {
  let user = {};

  user.name = prompt("Имя:");
  user.sex = prompt("Пол (м, ж):");
  user.age = randomAge();

  return user;
}

function randomAge() {
  return age = (Math.random() * 100).toFixed(0);
}

const getUserName = function(user) { return user.name; }
getUsers(users);

function getUsers(users) {
  for(let user of users) {
    console.log(`${getUserName(user)}, возраст - ${user.age}`);
  }
}



// *** Функциональное выражение (Function Expression) ***
// let number = 5;
// const factorial = function inner(number) {
//   if(number <= 1) {
//     return 1;
//   }
//   return number * inner(number - 1);
// }
// console.log(`Факториал числа ${number} = ${factorial(number)}`);



//let arr = new Map();
//let arr = new Map([
  // "key": value,
  // "key": value,
  // "key": value
// ]);

//size
//get(key), set(ket, value)
//clear()
//delete(key)

//for (let key of arr.keys()) {}
//for (let value of arr.values()) {}
//for (let elem of arr) { 
//    elem[0] //key
//    elem[1] //value
//  }

//arr.forEach((value, key) => {
// 
// })

//*** Ассоциативный массив (с помощью конструктора Map) ***
// let masMap = new Map([
//   ["userName", "Иван"],
//   ["ageUser", 20],
//   ["sex", "м"]
// ]);

// for(let key of masMap.keys()) {
//   console.log("Ключ: " + key);
// }

// console.log("*****");

// for(let value of masMap.values()) {
//   console.log("Значение: " + value);
// }

// if(masMap.has("userName")) {
//     console.log("Имя пользователя: " + masMap.get("userName"));
// }

// console.log("*****");

// for(let elem of masMap) {
//   console.log("Ключ: " + elem[0]); //ключ
//   console.log("Значение: " + elem[1]); //значение
// }

// masMap.forEach((value, key) => {
//   console.log("Ключ: " + key);
//   console.log("Значение: " + value);
// })