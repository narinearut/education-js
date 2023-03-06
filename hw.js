// const productName = "Droid";
// const pricePerItem = 3500;

// // Change code below this line
// const message = `You picked ${productName}, price per item is ${pricePerItem} credits`;
// console.log(message);

// FIRST AND LAST WORDS

// function getExtremeElements(array) {
//     // Change code below this line
//   let result;

//   const firstArray = array[0];
//   const lastArray = array[array.length - 1];

//     result = [firstArray, lastArray];

//   return result;

//     // Change code above this line
//   }

//   console.log(getExtremeElements(['sds', 's', 'fs', 'fsfd']));

// перетворити в масив і розділити будь чим

// function splitMessage(message, delimiter) {
//     let words;
//     // Change code below this line
//   words = message.split(delimiter)
//     // Change code above this line
//     return words;
//   }

//   console.log(splitMessage('train to to', " "))

// гравіровка, ціна за одне слово

// function calculateEngravingPrice(message, pricePerWord) {
//     // Change code below this line
//  const words = message.split(" ");

//  const numberWords = words.length;
//  const pricePerWords = numberWords * pricePerWord;

//  return pricePerWords;

//     // Change code above this line
//  }

//  console.log(calculateEngravingPrice("I love you", 200))

//  з'єднати елементи масиву в рядок

// function makeStringFromArray(array, delimiter) {
//     let string;
//     // Change code below this line

//     string = array.join(delimiter);

//     // Change code above this line
//     return string;
//   }

// console.log(makeStringFromArray(["Mango", "hurries", "to", "the", "train"], " "))

// адресна строка slug title

// function slugify(title) {
//     // Change code below this line

//   const slug = title.toLowerCase().split(" ").join("-");

//   return slug;
//     // Change code above this line
//   }

//   console.log(slugify("jhfjhgkjgk jhfjh"))

// Напиши функцію makeArray(firstArray, secondArray, maxLength) для створення нового масиву з усіма елементами двох вихідних firstArray і secondArray. Параметр maxLength містить максимально допустиму довжину нового масиву.

// Якщо кількість елементів нового масиву більша за maxLength, функція повинна повернути копію масиву довжиною maxLength елементів. В іншому випадку функція повинна повернути новий масив повністю.

// function makeArray(firstArray, secondArray, maxLength)
// {

// const allArray = firstArray.concat(secondArray);
// const allArrayLength = allArray.length;

// const newArray = allArray.slice (0, maxLength)

// return newArray;
//   }

//   console.log(makeArray(["title", "yyyy"], ["rrr", "yyy"], 3))

// приймає ціле число (параметр number) і повертає суму всіх цілих чисел від одиниці і до цього числа. Наприклад, якщо number дорівнює 3, то сума - це 1 + 2 + 3, тобто 6.
// СУМА ЧИСЕЛ for

// function calculateTotal(number) {

//    let total = 0;

//    for (let i = 0; i <= number; i += 1) {
//     total += i;
//    }

//    return total;
//    }

//    console.log(calculateTotal(6));

// ПЕРЕБРАТИ ПОЕЛЕМЕНТНО
// задача 1
// const planets = ["Earth", "Mars", "Venus"];

// for (let i = 0; i < planets.length; i += 1) {
//   console.log(planets[i]);
// }

// задача 2
// const fruits = ['apple', 'plum', 'pear', 'orange'];

// for (let i = 0; i < fruits.length; i += 1) { // Change this line
//   const fruit = fruits[i]; // Change this line
//   console.log(fruit);
// }

// задача 3 СУММА ЗАКАЗІВ
// function calculateTotalPrice(order) {
//     let total = 0;

//   for ( let i = 0; i < order.length; i += 1) {
//     total += order[i];
//   }

//     return total;
//   }

//   console.log(calculateTotalPrice([2, 4, 5]))

// задача 21 ПОШУК НАЙДОВШОГО СЛОВА for

// function findLongestWord(string) {

//  const words = string.split(" ");
//    робимо масив, щоб розбити слова

// let longestWord = words[0];
//    пишемо що саме найдовше слово, наприклад перше, навмання

// for (let i = 0; i < words.length; i += 1)
//   перебираємо всі слова за довжиною
//   {

//     if (longestWord.length < words[i].length)
//         // робимо умову, що якщо слово яке ми перше обрали, коротше за наступне, то це наступне стає найдовшим

//         {
//             longestWord = words[i];
//         }
//       }
//       return longestWord;
//   }

//   console.log(findLongestWord("dgfrdg grsg gsrdgser regs"))

// 22 PUSH
// Задопомогою циклу for перебираєш числа від мін до макс, і які підпадають під умову i <= max ти пушиш в пустий масив numbers. А ретурном повертаєш відповідно результат.

// function createArrayOfNumbers(min, max) {
//     const numbers = [];

//   for (let i = min; i <= max; i += 1) {
//     numbers.push(i)
//   }
//     return numbers;
//   }

//   console.log(createArrayOfNumbers(56, 67))

// 23 ФІЛЬТРАЦІЯ МАСИВУ ЧИСЕЛ

// function filterArray(numbers, value) {
//     const filter = [];
//     for (let number of numbers) {

// перебрать цифры

// if (number > value) {
// сровнять с валуе

// filter.push(number);
// те цифры что больше чем валуе добавить пушом в фильтер
//         }
//     }
//     return filter;
//  }

//  console.log(filterArray([56, 67, 78, 90], 70))

// 24 INCLUDES

// function checkFruit(fruit) {
//     const fruits = ["apple", "plum", "pear", "orange"];
//   return fruits.includes(fruit) ? true : false;
//      // Change this line
//   }

//   console.log(checkFruit("pea"));

// 25 СПІЛЬНІ ЕЛЕМЕНТИ
// function getCommonElements(array1, array2) {
//     const newArrays = []; робимо нову змінну для нового масиву(однакових чисел)

//     for (const element of array1) {  перебирає масив по елементно
//         if(array2.includes(element)) { якщо знаходить додає в нову змінну
//             newArrays.push(element);
//             console.log(`${element} є всюди`);
//         }
//     }
// }
// return newArrays;

// console.log(getCommonElements([1,2,4], [3,4]));

// MODULE 3
// Z 12
// Напиши функцію countProps(object), яка рахує і повертає кількість власних властивостей об'єкта в параметрі object. Використовуй змінну propCount для зберігання кількості властивостей об'єкта.

// function countProps(object) {
//     let propCount = 0;
//     const element = [];
//     // Change code below this line
//   for (const key in object) {
//     if (object.hasOwnProperty(key)) {
//         element.push(key);

//     }
//   }
//   propCount = element.length;
//     // Change code above this line
//     return propCount;
//   }
//   countProps({ name: "Mango", age: 2 })

//   console.log(countProps({ name: "Mango", age: 2 }))

// Z 16

// объекты это зарплаты ключ это имя свойство это сумма

// function countTotalSalary(salaries) {
//   let totalSalary = 0;
//   // Change code below this line

//   const keys = Object.keys(salaries);

//   for (const key of keys) {
//     totalSalary += salaries[key];
//   }

//   // Change code above this line
//   return totalSalary;
// }

// console.log('TOTAL SALARY: ', countTotalSalary({ mango: 100, poly: 150, alfred: 80}))

// Z 17

// const colors = [
//     { hex: "#f44336", rgb: "244,67,54" },
//     { hex: "#2196f3", rgb: "33,150,243" },
//     { hex: "#4caf50", rgb: "76,175,80" },
//     { hex: "#ffeb3b", rgb: "255,235,59" },
//   ];

//   const hexColors = [];
//   const rgbColors = [];
//   // Change code below this line

//   for (const color of colors) {
//     hexColors.push(color.hex);
//     rgbColors.push(color.rgb)

//   }
//   console.log(`hex colors: ${hexColors}, rgb colors: ${rgbColors}`);

// Z 18

// ПОШУК ОБ'ЄКТА ЗА ЗНАЧЕННЯМ ВЛАСТИВОСТІ

// const products = [
//     { name: "Radar", price: 1300, quantity: 4 },
//     { name: "Scanner", price: 2700, quantity: 3 },
//     { name: "Droid", price: 400, quantity: 7 },
//     { name: "Grip", price: 1200, quantity: 9 },
//   ];

//   function getProductPrice(productName) {
//     // Change code below this line

//   for (const product of products) {
//     if (product.name === productName) {
//         return product.price;
//     }
//   }
//   return null;
//     // Change code above this line
//   }

// Z 19

// const products = [
//     { name: "Radar", price: 1300, quantity: 4 },
//     { name: "Scanner", price: 2700, quantity: 3 },
//     { name: "Droid", price: 400, quantity: 7 },
//     { name: "Grip", price: 1200, quantity: 9 },
//   ];

//   function getAllPropValues(propName) {

// const findProduct = [];

//     for (const product of products) {
//       if (product[propName]) {
//         findProduct.push(product[propName])
//       }
//     }
// return findProduct;
//   }

//   getAllPropValues("name")

//   console.log( getAllPropValues("name"))

// Z 20

// const products = [
//     { name: "Radar", price: 1300, quantity: 4 },
//     { name: "Scanner", price: 2700, quantity: 3 },
//     { name: "Droid", price: 400, quantity: 7 },
//     { name: "Grip", price: 1200, quantity: 9 },
//   ];

//   function calculateTotalPrice(productName) {
//     // Change code below this line
//   let totalPrice = 0;

//     for (let product of products) {
//        if (product.name === productName) {
//          totalPrice = product.price * product.quantity;
//          return totalPrice;
//        }
//     }

//   return 0;
//     // Change code above this line
//   }

//   calculateTotalPrice("Radar")

//     console.log(calculateTotalPrice("Radar"))

// Z 31
// ...rest

// Change code below this line
// function add(...args) {
//     let total = 0;
//     for (let arg of args) {
//       total += arg;

//     }
//     // Change code above this line
//     return total;
//   }

// Z32
// Функція addOverNum() рахує суму всіх аргументів. Зміни параметри і тіло функції addOverNum() таким чином, щоб вона рахувала суму тільки тих аргументів, які більші за задане число. Це число повинно бути першим параметром функції.

// function addOverNum(number, ...args) {
//     let total = 0;
//     for (const arg of args) {
//       if (number < arg) {
//         total += arg;
//       }

//     }
//     return total;
//   }

// Z 33

// Доповни код функції таким чином, щоб вона повертала новий масив matches, в якому будуть тільки ті аргументи, починаючи з другого, які є в масиві першого аргументу.

// Наприклад, findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7) повинна повернути масив [1, 2], тому що тільки вони є в масиві першого аргументу.

// // Change code below this line
// function findMatches(numbers, ...args) {
//     const matches = []; // Don't change this line
//   for (let number of numbers) {
//     if (args.includes(number)) {
//       matches.push(number)
//     }
//   }
//     // Change code above this line
//     return matches;
//   }

// Z 35

// змінював назву книги з oldName на newName у властивості books. Використовуй indexOf() для того, щоб знайти потрібний елемент масиву, і splice() для того, щоб замінити цей елемент.

// const bookShelf = {
//     books: ["The last kingdom", "Haze", "The guardian of dreams"],
//     updateBook(oldName, newName) {
//       // Change code below this line
//        const oldNameIndex = this.books.indexOf(oldName);
//   this.books.splice(oldNameIndex, 1, newName)
//     },

//   };
// bookShelf.updateBook("The last kingdom", "Narine");
// console.log(bookShelf);

// Z 36-37 Магазин
// ЗАДАЧА. КРАМНИЦЯ ЗІЛЛЯ «У СТАРОЇ ЖАБИ»
// ЗАДАЧА. ОТРИМУЄМО ВСЕ ЗІЛЛЯ
// return
// До нас звернулася власниця крамниці зілля «У старої жаби» і замовила програму для ведення інвентарю - додавання, видалення, пошуку та оновлення зілля.
// Додай об'єкту atTheOldToad властивість potions, значенням якої зроби порожній масив.

// const atTheOldToad = {
//     potions: ["Speed potion", "Dragon breath", "Stone skin"],
//     // Change code below this line
//   getPotions() {
//   return this.potions;
//   }
//     // Change code above this line
//   };

// Z 38
// ЗАДАЧА: ДОДАЄМО НОВЕ ЗІЛЛЯ
// push
// Доповни метод addPotion(potionName) таким чином, щоб він додавав зілля potionName в кінець масиву зілля у властивості potions.

// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   addPotion(potionName) {
//     this.potions.push(potionName);
//   },
// };

// Z 39
// ЗАДАЧА: ВИДАЛЯЄМО ЗІЛЛЯ
// splice
// Доповни метод removePotion(potionName) таким чином, щоб він видаляв зілля potionName з масиву зілля у властивості potions.

// const atTheOldToad = {
//     potions: ["Speed potion", "Dragon breath", "Stone skin"],
//     removePotion(potionName) {
//   const indexPotionName = this.potions.indexOf(potionName);
//   this.potions.splice(indexPotionName, 1);

//     },
//   };

// Z 40
// ЗАДАЧА: ОНОВЛЮЄМО ЗІЛЛЯ
// splice
// Доповни метод updatePotionName(oldName, newName) таким чином, щоб він оновлював назву зілля з oldName на newName в масиві зілля у властивості potions.

// const atTheOldToad = {
//     potions: ["Speed potion", "Dragon breath", "Stone skin"],
//     updatePotionName(oldName, newName) {

//       const indexOldName = this.potions.indexOf(oldName);
//       this.potions.splice(indexOldName, 1, newName)

//     },
//   };

// Z 41
// const atTheOldToad = {
//     potions: [
//       { name: "Speed potion", price: 460 },
//       { name: "Dragon breath", price: 780 },
//       { name: "Stone skin", price: 520 },
//     ],
//     // Change code below this line
//     getPotions() {
//       return this.potions;
//     },
//     addPotion(newPotion) {
//       for (let potion of this.potions) {
//           if (potion.name === newPotion.name) {
//         return `Error! Potion ${newPotion.name} is already in your inventory!`;
//       } }
// this.potions.push(newPotion);

//     },

//     removePotion(potionName) {

//         for (let i = 0; i < this.potions.length; i+=1) {
// const potion = this.potions[i];

//           if ( potion.name === potionName) {
//  return this.potions.splice(i, 1);
//         } }
//           return `Potion ${potionName} is not in inventory!`;
//       },

//       updatePotionName(oldName, newName) {
//         // const potionIndex = this.potions.indexOf(oldName);

//         for (let i = 0; i < this.potions.length; i+=1) {

//                       if ( this.potions[i].name === oldName) {
//              return this.potions[i].name = newName;
//                     } }
//  return `Potion ${oldName} is not in inventory!`;
//       },
// }

// debugger;

// console.log(atTheOldToad.addPotion({ name: 'Invisibility', price: 620 }));

// // console.log(atTheOldToad.removePotion("Dragon breath"));

// console.log(atTheOldToad.potions);

// console.log(atTheOldToad.updatePotionName("Dragon breath", "Polymorth"));

// console.log(atTheOldToad.potions);
// module 4
// Z 2
// function deliverPizza(pizzaName) {
//     return `Delivering ${pizzaName} pizza.`;
//   }

//   function makePizza(pizzaName) {
//     return `Pizza ${pizzaName} is being prepared, please wait...`;

//   }

//   // Chande code below this line
//   function makeMessage(pizzaName, callback) {
//     return callback(pizzaName);
//   }

//   console.log(makeMessage('pepperoni', makePizza));

// Z 3
// function makePizza(pizzaName, callback) {
//     console.log(`Pizza ${pizzaName} is being prepared, please wait...`);
//     callback(pizzaName);
//   }

//   makePizza("Royal Grand", function deliverPizza(pizzaName) {
//     console.log(`Delivering pizza ${pizzaName}.`);
//   });
//   // Change code below this line

//   makePizza("Ultracheese", function eatPizza(pizzaName) {
//     console.log(`Eating pizza ${pizzaName}`)
//   });

// z 4

// const pizzaPalace = {
//     pizzas: ["Ultracheese", "Smoked", "Four meats"],
//     order(pizzaName, onSuccess, onError) {
//       if (!this.pizzas.includes(pizzaName)) {
//         return onError(`There is no pizza with a name ${pizzaName} in the assortment.`);
//       }
//       return onSuccess(pizzaName);
//     },
//   };
//   // Change code above this line

//   // Callback for onSuccess
//   function makePizza(pizzaName) {
//     return `Your order is accepted. Cooking pizza ${pizzaName}.`;
//   }

//   // Callback for onError
//   function onOrderError(error) {
//     return `Error! ${error}`;
//   }

//   // Method calls with callbacks
//   console.log(pizzaPalace.order("Smoked", makePizza, onOrderError));
//   console.log(pizzaPalace.order("Four meats", makePizza, onOrderError));
//   console.log(pizzaPalace.order("Big Mike", makePizza, onOrderError));
//   console.log(pizzaPalace.order("Vienna", makePizza, onOrderError));

// Z 5
// forEach масив чисел, і розраховує загальну суму його елементів

// function calculateTotalPrice(orderedItems) {
//     let totalPrice = 0;
//     // Change code below this line

//      orderedItems.forEach(function (number, index) {
//       totalPrice += number;
//     });

//     // Change code above this line
//     return totalPrice;
//   }
//   console.log(calculateTotalPrice([164, 48, 291]));

// Z 6
// forEach перебирання МАСИВУ ЧИСЕЛ
// Функція filterArray(numbers, value) приймає масив чисел numbers і повертає новий масив, в якому будуть тільки ті елементи оригінального масиву, які більші за значення параметра value

// function filterArray(numbers, value) {
//     const filteredNumbers = [];
//     // Change code below this line

//     numbers.forEach(function (number, index) {
//       if (number > value) {
//         filteredNumbers.push(number);
//       }
//     }
//     )

//     // Change code above this line
//     return filteredNumbers;
//   }

//   console.log(filterArray([1, 2, 3, 4, 5], 3))

// Z 7
// СПІЛЬНІ ЕЛЕМЕНТИ через forEach

// function getCommonElements(firstArray, secondArray) {
//     const commonElements = [];
//     // Change code below this line

//     firstArray.forEach(function(firstElement, index) {
//       if (secondArray.includes(firstElement)) {
//         commonElements.push(firstElement);
//       }
//     }
//     )
//     return commonElements;
//     // Change code above this line
//   }

//   console.log(getCommonElements([1, 2, 3], [2, 4]))

// z11
// ФІЛЬТРАЦІЯ МАСИВУ ЧИСЕЛ 2.0 cтрілочна ф-ція
// Change code below this line
// Change code below this line
// const filterArray = (numbers, value) => {
//     const filteredNumbers = [];

//     numbers.forEach (number => {
//       if (number > value) {
//         filteredNumbers.push(number);
//       }
//     });

//     // Change code above this line
//     return filteredNumbers;
//   }

//   console.log(filterArray([1, 2, 3, 4, 5], 3))

// Z 13
// Чиста функція (pure function) - це функція, результат якої залежить тільки від значень переданих аргументів. За умови однакових аргументів вона завжди повертає один і той самий результат, і не має побічних ефектів, тобто не змінює значення аргументів.

// ПРИКЛАД

// const pureMultiply = (array, value) => {
//     const newArray = [];

//     array.forEach(element => {
//       newArray.push(element * value);
//     });

//     return newArray;
//   };

//   const numbers = [1, 2, 3, 4, 5];
//   const doubledNumbers = pureMultiply(numbers, 2);

//   // Мутація вихідних даних не відбулася
//   console.log(numbers); // [1, 2, 3, 4, 5]
//   // Функція повернула новий масив зі зміненими даними
//   console.log(doubledNumbers); // [2, 4, 6, 8, 10]

// Z 13
// function changeEven(numbers, value) {
//     // Change code below this line
//     const newNumbers =[];

//     numbers.forEach(number => {
//       if (number % 2 === 0) {
//         number = number + value;
//         newNumbers.push(number);
//       } else
//       newNumbers.push(number)
//     })
//     return newNumbers;
// Change code above this line
//   }
//   console.log(changeEven([1, 2, 3, 4, 5], 10));

// Z 14
// MAP

// приклад

// const planets = ["Earth", "Mars", "Venus", "Jupiter"];

// const planetsInUpperCase = planets.map(planet => planet.toUpperCase());
// console.log(planetsInUpperCase); // ["EARTH", "MARS", "VENUS", "JUPITER"]

// const planetsInLowerCase = planets.map(planet => planet.toLowerCase());
// console.log(planetsInLowerCase); // ["earth", "mars", "venus", "jupiter"]

// // Оригінальний масив не змінився
// console.log(planets); // ["Earth", "Mars", "Venus", "Jupiter"]

// Z 14
// const planets = ["Earth", "Mars", "Venus", "Jupiter"];
// // Change code below this line
// const planetsLengths = planets.map(planet => planet.length);

// Z 15
// масивом об'єктів
// отримати масив значень властивості з усіх об'єктів
// У нас є масив студентів, а потрібно отримати окремий масив їхніх імен.
// const students = [
//     { name: "Mango", score: 83 },
//     { name: "Poly", score: 59 },
//     { name: "Ajax", score: 37 },
//     { name: "Kiwi", score: 94 },
//     { name: "Houston", score: 64 },
//   ];

//   const names = students.map(student => student.name);
//   console.log(names); // ["Mango", "Poly", "Ajax", "Kiwi", "Houston"]

// Використовуючи метод map(), зроби так, щоб у змінній titles вийшов масив назв книг (властивість title) з усіх об'єктів масиву books.

// const books = [
//     {
//       title: "The Last Kingdom",
//       author: "Bernard Cornwell",
//       rating: 8.38,
//     },
//     {
//       title: "Beside Still Waters",
//       author: "Robert Sheckley",
//       rating: 8.51,
//     },
//     {
//       title: "The Dream of a Ridiculous Man",
//       author: "Fyodor Dostoevsky",
//       rating: 7.75,
//     },
//     { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//     { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
//   ];
//   // Change code below this line

//   const titles = books.map(book => book.title);

// Z 16 flatMap

// Метод flatMap(callback) - аналогічний методу map(), але застосовується у випадках, коли результат - це багатовимірний масив, який необхідно «розгладити».

// const students = [
//     { name: "Mango", courses: ["mathematics", "physics"] },
//     { name: "Poly", courses: ["science", "mathematics"] },
//     { name: "Kiwi", courses: ["physics", "biology"] },
//   ];

//   students.map(student => student.courses);
//   // [["mathematics", "physics"], ["science", "mathematics"], ["physics", "biology"]]

//   students.flatMap(student => student.courses);
//   // ["mathematics", "physics", "science", "mathematics", "physics", "biology"];

// Z 17
// Change code below this line

// const users =
//   [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     skills: ["ipsum", "lorem"],
//     gender: "male",
//     age: 37,
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     skills: ["tempor", "mollit", "commodo", "veniam", "laborum"],
//     gender: "female",
//     age: 34,
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     skills: ["nulla", "anim", "proident", "ipsum", "elit"],
//     gender: "male",
//     age: 24,
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     skills: ["adipisicing", "irure", "velit"],
//     gender: "female",
//     age: 21,
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     skills: ["ex", "culpa", "nostrud"],
//     gender: "male",
//     age: 27,
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     skills: ["non", "amet", "ipsum"],
//     gender: "male",
//     age: 38,
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     skills: ["lorem", "veniam", "culpa"],
//     gender: "female",
//     age: 39,
//   },
// ];

// const getUserNames = users.map(user => {
//   return user.name;
// });

// const getUserNames = users => {
//     return users.map(object => object.name);
//   };

// console.log(getUserNames);

// Z 19  FILTER четные

// const numbers = [17, 24, 82, 61, 36, 18, 47, 52, 73];
// // Change code below this line

// const evenNumbers = numbers.filter(number=> {
//    return number % 2===0;
// });
// const oddNumbers = numbers.filter(number=> {
//     return number % 2!==0;
//  });

// console.log(evenNumbers);
// console.log(oddNumbers);

// // Z 20
// залишаться тільки унікальні елементи

// Масив усіх курсів
// ["mathematics", "physics", "science", "mathematics", "physics", "biology"];
// Для елемента "mathematics" під індексом 0:

// indexOf() поверне 0, тому що шукає перший збіг.
// Значення параметра index буде 0.
// Вони рівні, а отже, це унікальний елемент.
// Для елемента "mathematics" під індексом 3:

// indexOf() поверне 0, тому що шукає перший збіг.
// Значення параметра index буде 3.
// Вони не рівні, а отже, це повторюваний - не унікальний елемент.

// const books = [
//     {
//       title: "The Last Kingdom",
//       author: "Bernard Cornwell",
//       genres: ["adventure", "history"],
//     },
//     {
//       title: "Beside Still Waters",
//       author: "Robert Sheckley",
//       genres: ["fiction", "mysticism"],
//     },
//     {
//       title: "Redder Than Blood",
//       author: "Tanith Lee",
//       genres: ["horror", "mysticism", "adventure"],
//     },
//   ];
//   // Change code below this line
//   const allGenres = books.flatMap(book => {
//     return book.genres;
//   });
//   const uniqueGenres = allGenres.filter((genre, index, array) => {
//   return array.indexOf(genre) === index;
//   });

//   console.log(allGenres);

// Z 21



// У змінній topRatedBooks утворився масив книг, рейтинг яких (властивість rating) більший за або дорівнює значенню змінної MIN_RATING.
// У змінній booksByAuthor утворився масив книг, написаних автором з ім'ям (властивість author), яке збігається зі значенням у змінній AUTHOR.
// ТЕСТИ


// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
// ];

// const MIN_RATING = 8;
// const AUTHOR = "Bernard Cornwell";
// // Change code below this line

// const topRatedBooks = books.filter((book) => book.rating >= MIN_RATING);
// const booksByAuthor = books.filter((book) => book.author === AUTHOR);

// console.log(topRatedBooks);


// Z 22
// масив користувачів, у яких колір очей (властивість eyeColor) збігається зі значенням параметра color

// Change code below this line
// const users =
// [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male"
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female"
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     gender: "male"
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     gender: "female"
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     gender: "male"
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     gender: "male"
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     gender: "female"
//   }
// ]

// const getUsersWithEyeColor = (users, color) => {
//  return users.filter(user => user.eyeColor === color)
// };
// Change code above this line

// Z 23
// масив користувачів, вік яких (властивість age) потрапляє у проміжок від minAge до maxAge.

// Change code below this line
// const getUsersWithAge = (users, minAge, maxAge) => {
//     return users.filter(user => user.age >= minAge && user.age <= maxAge)
   
//    };
//    // Change code above this line


// Z 25
// uniq
// Доповни функцію getFriends(users) таким чином, щоб вона повертала масив друзів всіх користувачів (властивість friends). У декількох користувачів можуть бути однакові друзі, зроби так, щоб масив, що повертається, не містив повторень.



// const getFriends = (users) => {
//     const allFriends = users.flatMap(user => user.friends);
//     const uniqueFriends = allFriends.filter((friend, index, array) => array.indexOf(friend) === index);
//     return uniqueFriends;
//   };