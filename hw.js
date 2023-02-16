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