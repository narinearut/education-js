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



