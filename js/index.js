//1
// const productName = 'Droid'
// console.log(productName)
// const pricePerItem = 2000
// console.log(pricePerItem)

//2
// let productName = "Droid";
// let pricePerItem = 2000;

// productName = 'Repair droid'
// console.log(productName)
// pricePerItem = pricePerItem +1500
// console.log(pricePerItem)

//3
// const topSpeed = 160
// console.log(topSpeed)
// console.log(typeof topSpeed)
// const distance = 617.54
// console.log(distance)
// console.log(typeof distance)
// let login = 'mango935'
// console.log(login)
// console.log(typeof login)
// let isOnline = true
// console.log(isOnline)
// console.log(typeof isOnline)
// let isAdmin = false
// console.log(isAdmin)
// console.log(typeof isAdmin)

//4
// const pricePerItem = 3500
// const orderedQuantity = 4
// const totalPrice = pricePerItem * orderedQuantity
// console.log(totalPrice)

//5
// const productName = "Droid";
// const pricePerItem = 3500;
// const message = `You picked ${productName}, price per item is ${pricePerItem} credits`
// console.log(message)
// console.log(typeof message)

//6
// const pricePerDroid = 800;
// const deliveryFee = 50;
// const orderedQuantity = 6
// const totalPrice = pricePerDroid * orderedQuantity + deliveryFee
// const message = `You ordered droids worth ${totalPrice} credits. Delivery (${deliveryFee} credits) is included in total price.`
// console.log(message)
// console.log(typeof message)

//7
// function sayHi() {
//     console.log("Hello, this is my first function!")
// };
// sayHi();

//8
// function add(a, b, c) {
//   console.log(`Addition result equals ${ a + b + c }`);
// }
// add(15, 27, 10);
// add(10, 20, 30);
// add(5, 10, 15);

//9
// function add(a, b, c) {
// return a + b + c;
// }
// add(2, 5, 8); // 15
// console.log(add(15, 27, 10));
// console.log(add(10, 20, 30));
// console.log(add(5, 10, 15));

//10
// function makeMessage (name, price) {
//     const message = `You picked ${name}, price per item is ${price} credits`;
//     return message;
// };
// makeMessage('Radar', 6150)
// makeMessage('Scaner', 3500)
// makeMessage('Reactor', 8000)
// makeMessage('Engine', 4070)
// console.log(makeMessage("Radar", 6150))
// console.log(makeMessage('Scaner', 3500))
// console.log(makeMessage('Reactor', 8000))
// console.log(makeMessage('Engine', 4070))

//11
// function calculateTotalPrice (orderedQuantity, pricePerItem) {
//   const totalPrice = orderedQuantity * pricePerItem;
//   return totalPrice;
// };
// calculateTotalPrice(5, 100)
// calculateTotalPrice(8, 60)
// calculateTotalPrice(3, 400)
// calculateTotalPrice(1, 3500)
// calculateTotalPrice(12, 70)
// console.log(calculateTotalPrice(5, 100))
// console.log(calculateTotalPrice(8, 60))
// console.log(calculateTotalPrice(3, 400))
// console.log(calculateTotalPrice(1, 3500))
// console.log(calculateTotalPrice(12, 70))

//12
// function makeOrderMessage(orderedQuantity, pricePerDroid, deliveryFee) {
//     const totalPrice = orderedQuantity * pricePerDroid + deliveryFee
//     const message = `You ordered droids worth ${totalPrice} credits. Delivery (${deliveryFee} credits) is included in total price.`
//   return message;
// }
// makeOrderMessage(2, 100, 50)
// makeOrderMessage(4, 300, 100)
// makeOrderMessage(10, 70, 200)
// console.log(makeOrderMessage(2, 100, 50))
// console.log(makeOrderMessage(4, 300, 100))
// console.log(makeOrderMessage(10, 70, 200))

//13
// function isAdult(age) {
//   const passed = age >= 18;
//   return passed;
// }
// isAdult(20)
// isAdult(14)
// isAdult(8)
// isAdult(37)
// console.log(isAdult(20))
// console.log(isAdult(14))
// console.log(isAdult(8))
// console.log(isAdult(37))

//14
// function isValidPassword(password) {
//   const SAVED_PASSWORD = 'jqueryismyjam';
//   const isMatch = SAVED_PASSWORD === password;
//   return isMatch;
// }
// isValidPassword("mangodab3st")
// isValidPassword("kiwirul3z")
// isValidPassword("jqueryismyjam")
// console.log(isValidPassword("mangodab3st"))
// console.log(isValidPassword("kiwirul3z"))
// console.log(isValidPassword("jqueryismyjam"))

//15
// function checkAge(age) {
//   let message;
//   if (age >= 18) {
//     message = 'You are an adult';
//   } else {
//     message = 'You are a minor';
//   }
//   return message;
// }
// checkAge(20)
// checkAge(8)
// checkAge(14)
// checkAge(38)
// console.log(checkAge(20))
// console.log(checkAge(8))
// console.log(checkAge(14))
// console.log(checkAge(38))

//16
// function checkStorage(available, ordered) {
//   let message;
//     if (available >= ordered) {
//         message = 'Order is processed, our manager will contact you.'
//     } else {
//         message = 'Not enough goods in stock!'
//     }
//   return message;
// }
// checkStorage(100, 50)
// checkStorage(100, 130)
// checkStorage(200, 20)
// console.log(checkStorage(100, 50))
// console.log(checkStorage(100, 130))
// console.log(checkStorage(200, 20))

//17
// let a = 5;
// let b = 10;
// let c = 15;
// let d = 20;
// a += 2;
// b -= 4;
// c *= 3;
// d /= 10;
// console.log(a)
// console.log(b)
// console.log(c)
// console.log(d)

//18
// function makeTransaction(pricePerDroid, orderedQuantity, customerCredits) {
//     let message;
//     let totalPrice = pricePerDroid * orderedQuantity
//     if (totalPrice <= customerCredits) {
//         message = `You ordered ${orderedQuantity} droids, you have ${customerCredits - totalPrice} credits left`
//     } else {
//         message = 'Insufficient funds!'
//     }
//   return message;
// }
// makeTransaction(3000, 5, 23000)
// makeTransaction(1000, 3, 15000)
// makeTransaction(5000, 10, 8000)
// makeTransaction(2000, 8, 10000)
// makeTransaction(500, 10, 5000)
// console.log(makeTransaction(3000, 5, 23000))
// console.log(makeTransaction(1000, 3, 15000))
// console.log(makeTransaction(5000, 10, 8000))
// console.log(makeTransaction(2000, 8, 10000))
// console.log(makeTransaction(500, 10, 5000))

//19
// function checkPassword(password) {
//   const ADMIN_PASSWORD = 'jqueryismyjam';
//   let message;
//   if (password === null) {
//     message =  'Canceled by user!';
//   } else if (password === ADMIN_PASSWORD) {
//     message = 'Welcome!';
//   } else {
//     message = 'Access denied, wrong password!';
//   }
//   return message;
// }
// checkPassword("mangohackzor")
// console.log(checkPassword("mangohackzor"))
// checkPassword(null)
// console.log(checkPassword(null))
// checkPassword("polyhax")
// console.log(checkPassword("polyhax"))
// checkPassword("jqueryismyjam")
// console.log(checkPassword("jqueryismyjam"))

//20
// function checkStorage(available, ordered) {
//   let message;
//     if (!ordered) {message = "There are no products in the order!"}
//     else if (ordered > available) {message = "Your order is too large, there are not enough items in stock!" }
//     else {message = "The order is accepted, our manager will contact you"}
//   return message;
// }
// checkStorage(100,50)
// console.log(checkStorage(100, 50))
// checkStorage(100,130)
// console.log(checkStorage(100, 130))
// checkStorage(70,0)
// console.log(checkStorage(70, 0))
// checkStorage(200, 20)
// console.log(checkStorage(200, 20))
// checkStorage(200, 250)
// console.log(checkStorage(200, 250))
// checkStorage(150, 0)
// console.log(checkStorage(150, 0))

//21
// function isNumberInRange(start, end, number) {
//   const isInRange = number >= start && number <= end;
//   return isInRange;
// }
// isNumberInRange(10, 30, 17)
// console.log(isNumberInRange(10, 30, 17))
// isNumberInRange(10, 30, 5)
// console.log(isNumberInRange(10, 30, 5))
// isNumberInRange(20, 50, 24)
// console.log(isNumberInRange(20, 50, 24))
// isNumberInRange(20, 50, 76)
// console.log(isNumberInRange(20, 50, 76))

//22
// function checkIfCanAccessContent(subType) {
//   const canAccessContent = subType === 'pro' || subType === 'vip';
//   return canAccessContent;
// }
// checkIfCanAccessContent("pro")
// console.log(checkIfCanAccessContent("pro"))
// checkIfCanAccessContent("starter")
// console.log(checkIfCanAccessContent("starter"))
// checkIfCanAccessContent("vip")
// console.log(checkIfCanAccessContent("vip"))
// checkIfCanAccessContent("free")
// console.log(checkIfCanAccessContent("free"))

//23
// function isNumberNotInRange(start, end, number) {
//   const isInRange = number >= start && number <= end;
//   const isNotInRange = !isInRange;
//   return isNotInRange;
// }
// isNumberNotInRange(10, 30, 17)
// console.log(isNumberNotInRange(10, 30, 17))
// isNumberNotInRange(10, 30, 5)
// console.log(isNumberNotInRange(10, 30, 5))
// isNumberNotInRange(20, 50, 24)
// console.log(isNumberNotInRange(20, 50, 24))
// isNumberNotInRange(20, 50, 76)
// console.log(isNumberNotInRange(20, 50, 76))

//24
// function getDiscount(totalSpent) {
//   const BASE_DISCOUNT = 0;
//   const BRONZE_DISCOUNT = 0.02;
//   const SILVER_DISCOUNT = 0.05;
//   const GOLD_DISCOUNT = 0.1;
//   let discount;
//     if (totalSpent >= 50000) { discount = GOLD_DISCOUNT }
//     else if (totalSpent >= 20000) { discount = SILVER_DISCOUNT }
//     else if (totalSpent >= 5000) { discount = BRONZE_DISCOUNT }
//     else {discount = BASE_DISCOUNT}
//   return discount;
// }
// getDiscount(137000)
// console.log(getDiscount(137000))
// getDiscount(46900)
// console.log(getDiscount(46900))
// getDiscount(8250)
// console.log(getDiscount(8250))
// getDiscount(1300)
// console.log(getDiscount(1300))
// getDiscount(5000)
// console.log(getDiscount(5000))
// getDiscount(20000)
// console.log(getDiscount(20000))
// getDiscount(50000)
// console.log(getDiscount(50000))

//25
// function checkStorage(available, ordered) {
//     let message;
    
//     message = ordered > available ? "Not enough goods in stock!" : "The order is accepted, our manager will contact you";

//   return message;
// }
// checkStorage(100, 50)
// console.log(checkStorage(100, 50))
// checkStorage(100, 130)
// console.log(checkStorage(100, 130))
// checkStorage(200, 20)
// console.log(checkStorage(200, 20))
// checkStorage(200, 150)
// console.log(checkStorage(200, 150))
// checkStorage(150, 180)
// console.log(checkStorage(150, 180))

//26
// function checkPassword(password) {
//   const ADMIN_PASSWORD = "jqueryismyjam";
//   let message;
//     message = password === ADMIN_PASSWORD ? "Access is allowed" : "Access denied, wrong password!";
//   return message;
// }
// checkPassword("jqueryismyjam")
// console.log(checkPassword("jqueryismyjam"));

// checkPassword("angul4r1sl1f3")
// console.log(checkPassword("angul4r1sl1f3"));

// checkPassword("r3actsux")
// console.log(checkPassword("r3actsux"));

//27
// function getSubscriptionPrice(type) {
//   let price;

//  switch (type) {
//     case "starter":
//       price = 0;
//       break;
//     case 'professional':
//       price = 20;
//       break;
//     case 'organization':
//       price = 50;
//       break;
//   }
//   return price;
// }
// getSubscriptionPrice("professional")
// getSubscriptionPrice("organization")
// getSubscriptionPrice("starter")
// console.log(getSubscriptionPrice("professional"));
// console.log(getSubscriptionPrice("organization"));
// console.log(getSubscriptionPrice("starter"));

//28
// function checkPassword(password) {
//   const ADMIN_PASSWORD = "jqueryismyjam";
//   let message;

//     switch (password) {
//         case null:
//             message = "Canceled by user!";
//             break;
//         case ADMIN_PASSWORD:
//             message = "Welcome!"
//             break;
//         default:
//             message = "Access denied, wrong password!"
//     }
//   return message;
// }
// checkPassword("mangohackzor")
// console.log(checkPassword("mangohackzor"));
// checkPassword(null)
// console.log(checkPassword(null));
// checkPassword("polyhax")
// console.log(checkPassword("polyhax"));
// checkPassword("jqueryismyjam")
// console.log(checkPassword("jqueryismyjam"));

//29
// function getShippingCost(country) {
//   let message;
//   let price;
//     switch (country) {
//         case 'China':
//             price = 100;
//             message = `Shipping to ${country} will cost ${price} credits`
//             break;
//         case 'Chile':
//             price = 250
//             message = `Shipping to ${country} will cost ${price} credits`
//             break;
//         case 'Australia':
//             price = 170;
//             message = `Shipping to ${country} will cost ${price} credits`
//             break;
//         case 'Jamaica':
//             price = 120;
//             message = `Shipping to ${country} will cost ${price} credits`
//             break;
//         default:
//             message = "Sorry, there is no delivery to your country"
// }
//   return message;
// }
// getShippingCost("Australia")
// console.log(getShippingCost("Australia"));
// getShippingCost("Germany")
// console.log(getShippingCost("Germany"));
// getShippingCost("China")
// console.log(getShippingCost("China"));
// getShippingCost("Chile")
// console.log(getShippingCost("Chile"));
// getShippingCost("Jamaica")
// console.log(getShippingCost("Jamaica"));
// getShippingCost("Sweden")
// console.log(getShippingCost("Sweden"));

//30
// function getNameLength(name) {
//   const message = `Name ${name} is ${name.length} characters long`;
//   return message;
// }
// getNameLength("Poly")
// console.log(getNameLength("Poly"));
// getNameLength("Harambe")
// console.log(getNameLength("Harambe"));
// getNameLength("Billy")
// console.log(getNameLength("Billy"));
// getNameLength("Joe")
// console.log(getNameLength("Joe"));

//31
// const courseTopic = "JavaScript essentials";
// const courseTopicLength = courseTopic.length;
// const firstElement = courseTopic[0];
// const lastElement = courseTopic[courseTopic.length-1];
// console.log(courseTopicLength);
// console.log(firstElement);
// console.log(lastElement);

//32
// function getSubstring(string, length) {
//   const substring = string.slice(0, length);
//   return substring;
// }
// getSubstring("Hello world", 3)
// console.log(getSubstring("Hello world", 3));
// getSubstring("Hello world", 6)
// console.log(getSubstring("Hello world", 6));
// getSubstring("Hello world", 8)
// console.log(getSubstring("Hello world", 8));
// getSubstring("Hello world", 11)
// console.log(getSubstring("Hello world", 11));
// getSubstring("Hello world", 0)
// console.log(getSubstring("Hello world", 0));

//33
//  function formatMessage(message, maxLength) {
//    let  result = message.length <= maxLength ? message : message.slice(0, maxLength) + '...';
//    return result;
//  }
//  formatMessage("Curabitur ligula sapien", 16)
//  console.log(formatMessage("Curabitur ligula sapien", 16));
//  formatMessage("Curabitur ligula sapien", 23)
//  console.log(formatMessage("Curabitur ligula sapien", 23));
//  formatMessage("Vestibulum facilisis purus nec", 20)
//  console.log(formatMessage("Vestibulum facilisis purus nec", 20));
//  formatMessage("Vestibulum facilisis purus nec", 30)
//  console.log(formatMessage("Vestibulum facilisis purus nec", 30));

//34
// function normalizeInput(input) {
//   const normalizedInput = input.toLowerCase();

//   return normalizedInput;
// }
// normalizeInput("Hello world")
// console.log(normalizeInput("Hello world"));
// normalizeInput("This ISN'T SpaM")
// console.log(normalizeInput("This ISN'T SpaM"));
// normalizeInput("Big SALE")
// console.log(normalizeInput("Big SALE"));

//35
// function checkForName(fullName, name) {
//  const result = fullName.includes(name);
//   return result;
// }
// checkForName("Egor Kolbasov", "Egor");
// console.log(checkForName("Egor Kolbasov", "Egor"));
// checkForName("Egor Kolbasov", "egor");
// console.log(checkForName("Egor Kolbasov", "egor"));
// checkForName("Egor Kolbasov", "egOr");
// console.log(checkForName("Egor Kolbasov", "egOr"));
// checkForName("Egor Kolbasov", "Zhenya");
// console.log(checkForName("Egor Kolbasov", "Zhenya"));
// checkForName("Vadim Nekrasov", "Vadim");
// console.log(checkForName("Vadim Nekrasov", "Vadim"));
// checkForName("Vadim Nekrasov", "vadim")
// console.log(checkForName("Vadim Nekrasov", "vadim"));
// checkForName("Vadim Nekrasov", "Dima")
// console.log(checkForName("Vadim Nekrasov", "Dima"));

//36
// function checkForSpam(message) {
//   let result = message.toLowerCase().includes('spam') || message.toLowerCase().includes('sale');
//   return result;
// }
// checkForSpam("Latest technology news");
// console.log(checkForSpam("Latest technology news"));
// checkForSpam("JavaScript weekly newsletter");
// console.log(checkForSpam("JavaScript weekly newsletter"));
// checkForSpam("Get best sale offers now!");
// console.log(checkForSpam("Get best sale offers now!"));
// checkForSpam("Amazing SalE, only tonight!")
// console.log(checkForSpam("Amazing SalE, only tonight!"));
// checkForSpam("Trust me, this is not a spam message");
// console.log(checkForSpam("Trust me, this is not a spam message"));
// checkForSpam("[SPAM] How to earn fast money?")
// console.log(checkForSpam("[SPAM] How to earn fast money?") );


// ___________________________________________________________________
// module 2___________________________________________________________
// ___________________________________________________________________


// 1
// function checkAge(age) {
//     if (age >= 18) {
//         return "You are an adult";
//     }

//     return "You are a minor"
// }
// checkAge(20);
// console.log(checkAge(20));
// checkAge(8);
// console.log(checkAge(8));
// checkAge(14);
// checkAge(38);

// 2
// function checkPassword(password) {
//     const ADMIN_PASSWORD = "jqueryismyjam";
//     if (password === ADMIN_PASSWORD) {
//         return "Welcome!"
//     }
//     return "Access denied, wrong password!"
// }
// checkPassword("mangohackzor")
// checkPassword("polyhax")
// checkPassword("jqueryismyjam")

// 3
// function checkStorage(available, ordered) {
//   // Change code below this line

//     if (ordered === 0)
//     { return "Your order is empty!" }
//    if (ordered > available)
//     { return "Your order is too large, not enough goods in stock!" }
// return "The order is accepted, our manager will contact you"
  
//   // Change code above this line
// }

// checkStorage(100, 50);
// console.log(checkStorage(100, 50));
// checkStorage(100, 130);
// console.log(checkStorage(100, 130));
// checkStorage(70, 0);
// console.log(checkStorage(70, 0));
// checkStorage(200, 20);
// checkStorage(200, 250);

// 4
// const fruits = ["apple", "plum", "pear", "orange"];

// 5
// const fruits = ["apple", "plum", "pear", "orange"];

// const firstElement = fruits[0]
// const secondElement = fruits[1]
// const lastElement = fruits[fruits.length-1]
// console.log(lastElement);

// 6
// const fruits = ["apple", "plum", "pear", "orange"];

// fruits[1] = "peach"
// fruits[3] = "banana"
// console.log(fruits);

// 7
// const fruits = ["apple", "peach", "pear", "banana"];

// const fruitsArrayLength = fruits.length
// console.log(fruitsArrayLength);

// 8
// const fruits = ["apple", "peach", "pear", "banana"];

// const lastElementIndex = fruits.length - 1;
// const lastElement = fruits[lastElementIndex];
// console.log(lastElement);

// 9
// function getExtremeElements(array) {
// return [array[0],array[array.length-1]]
// }
// getExtremeElements([1, 2, 3, 4, 5])
// console.log(getExtremeElements([1, 2, 3, 4, 5]));
// getExtremeElements(["Earth", "Mars", "Venus"]);
// getExtremeElements(["apple", "peach", "pear", "banana"])

// 10
// function splitMessage(message, delimiter) {
//   let words;
//   // Change code below this line
// words = message.split(delimiter)
//   // Change code above this line
//   return words;
// }
// splitMessage("Mango hurries to the train", " ")
// console.log(splitMessage("Mango hurries to the train", " "));
// splitMessage("Mango", "")
// splitMessage("best_for_week", "_")

// 11
// function calculateEngravingPrice(message, pricePerWord) {
//    // Change code below this line
// let quantity;
// quantity = message.split(" ");
// let totalPrice = pricePerWord * quantity.length;
    
// return totalPrice
//    // Change code above this line
// }
// calculateEngravingPrice("JavaScript is in my blood", 10)
// console.log(calculateEngravingPrice("JavaScript is in my blood", 10));
// calculateEngravingPrice("JavaScript is in my blood", 20);
// calculateEngravingPrice("Web-development is creative work", 40);
// calculateEngravingPrice("Web-development is creative work", 20)

// 12
// function makeStringFromArray(array, delimiter) {
//   let string;
//   // Change code below this line
//     string = array.join(delimiter);
//   // Change code above this line
//   return string;
// }
// makeStringFromArray(["Mango", "hurries", "to", "the", "train"], " ");
// console.log(makeStringFromArray(["Mango", "hurries", "to", "the", "train"], " "));
// makeStringFromArray(["M", "a", "n", "g", "o"], "");
// makeStringFromArray(["top", "picks", "for", "you"], "_")

// 13
// function slugify(title) {
//   // Change code below this line
// let item = title.toLowerCase().split(" ").join("-")
//   // Change code above this line
//     return item
// }
// slugify("Arrays for begginers")
// console.log(slugify("Arrays for begginers"));
// slugify("English for developer");
// slugify("Ten secrets of JavaScript");
// slugify("How to become a JUNIOR developer in TWO WEEKS");

// 14
// const fruits = ['apple', 'plum', 'pear', 'orange', 'banana'];

// // Change code below this line
// const firstTwoEls = fruits.slice(0,2);
// const nonExtremeEls = fruits.slice(1,-1);
// const lastThreeEls = fruits.slice(-3);

// 15
// const oldClients = ['Mango', 'Ajax', 'Poly', 'Kiwi'];
// const newClients = ['Peach', 'Houston'];

// const allClients = oldClients.concat(newClients);
// console.log(allClients);

// 16
// function makeArray(firstArray, secondArray, maxLength) {
//     let newArr = firstArray.concat(secondArray);
//     if (newArr.length > maxLength) {
//         newArr = newArr.slice(0,maxLength)
//     }

// return newArr
// }
// makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3)
// console.log(makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3));
// makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4)
// console.log(makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4));
// makeArray(["Mango"], ["Ajax", "Chelsea", "Poly", "Houston"], 3)
// makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 2)
// makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 4)
// makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus", "Venus"], 0)
// makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus", "Venus"], 8)
// console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus", "Venus"], 8));

// 17
// const start = 3;
// const end = 7;

// for (let i = start; i <= end; i +=1 ) { // Change this line
//   console.log(i);
// }

// 18
// function calculateTotal(number) {
//     let total = 0;
//     for (i = 1; i <= number; i++) {
//         total += i
//     }

// return total
// }
// calculateTotal(3)
// console.log(calculateTotal(3));
// calculateTotal(18)
// console.log(calculateTotal(18));

// 19
// const fruits = ['apple', 'plum', 'pear', 'orange'];

// for (let i = 0; i < fruits.length; i+=1) { // Change this line
//   const fruit = fruits[i]; // Change this line
//   console.log(fruit);
// }

// 20
// function calculateTotalPrice(order) {
//     let total = 0;
//     for (i = 0; i < order.length; i += 1){
//         total += order[i];
//     }

//   return total;
// }
// calculateTotalPrice([12, 85, 37, 4])
// console.log(calculateTotalPrice([12, 85, 37, 4]));
// calculateTotalPrice([412, 371, 94, 63, 176])
// console.log(calculateTotalPrice([412, 371, 94, 63, 176]));

// 21
// function findLongestWord(string) {
//     let stringToArr = string.split(" ");
//     let longestWord = [];
//     for (i = 0; i < stringToArr.length; i++){
//         if (longestWord.length < stringToArr[i].length) {
//             longestWord=stringToArr[i]
//         }
//     }

//   return longestWord
// }
// findLongestWord("The quick brown fox jumped over the lazy dog")
// console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));
// findLongestWord("Google do a roll")
//  console.log(findLongestWord("Google do a roll"));

// 22
// function createArrayOfNumbers(min, max) {
//   const numbers = [];
//     for (i = min; i <= max; i++){
//         numbers.push(i)
//     }
    
//   return numbers;
// }
// createArrayOfNumbers(1, 3)
// console.log(createArrayOfNumbers(1, 3));
// createArrayOfNumbers(14, 17)
// console.log(createArrayOfNumbers(14, 17));

// 23
// function filterArray(numbers, value) {
//     const newArr = [];
// for (i = 0; i <= numbers.length; i++) {

//     if (numbers[i] > value)
//      newArr.push(numbers[i])
// }

// return newArr

// }
// filterArray([1, 2, 3, 4, 5], 3)
//  console.log(filterArray([1, 2, 3, 4, 5], 3));
// filterArray([12, 24, 8, 41, 76], 20)
// console.log(filterArray([12, 24, 8, 41, 76], 20));

// 24
// function checkFruit(fruit) {
//     const fruits = ["apple", "plum", "pear", "orange"];
//     if (fruits.includes(fruit)) {
//         return true
//     }

//   return false // Change this line
// }
// checkFruit("plum")
// console.log(checkFruit("plum"));
// checkFruit("mandarin")
// console.log(checkFruit("mandarin"));

// 25
// function getCommonElements(array1, array2) {
//     let commonItems = [];
//     for (let i = 0; i < array1.length; i++) {
 
//         if (array2.includes(array1[i])) {
//             commonItems.push(array1[i]);
//         }
//     }

//     return commonItems
// }
// getCommonElements([1, 2, 3], [2, 4]);
// console.log(getCommonElements([1, 2, 3], [2, 4]));
// getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]);
// console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]));

// 26
// function calculateTotalPrice(order) {
//   let total = 0;
//   for (let item of order) {
//     total += item;
//   }

//   return total;
// }
// calculateTotalPrice([12, 85, 37, 4])
// console.log(calculateTotalPrice([12, 85, 37, 4]));

// 27
// function filterArray(numbers, value) {
//   const filteredNumbers = [];

//   for (let item of numbers) {
//     if (item > value) {
//       filteredNumbers.push(item);
//     }
//   }

//   return filteredNumbers;
// }
// filterArray([1, 2, 3, 4, 5], 3)
// console.log(filterArray([1, 2, 3, 4, 5], 3));
// filterArray([12, 24, 8, 41, 76], 20)
// console.log(filterArray([12, 24, 8, 41, 76], 20));

// 28
// const a = 3 % 1;
// const b = 4 % 3;
// const c = 11 % 4;
// const d = 12 % 7;
// const e = 8 % 3;
// console.log(a,b,c,d,e);

// 29
// function getEvenNumbers(start, end) {
//     let oddNumbers = [];
    
//     for (i = start; i <= end; i++) {
//         if ([i] % 2 === 0) {
//             oddNumbers.push(i)
//         }
//     }

//     return oddNumbers
// }
// getEvenNumbers(2, 5)
// console.log(getEvenNumbers(2, 5));
// getEvenNumbers(3, 11)
// console.log(getEvenNumbers(3, 11));

// 30
// const start = 6;
// const end = 27;
// let number;

// for (let i = start; i < end; i += 1) {
//   if (i % 5 === 0) {
//       number = i;
//       break
//   }
// }
// console.log(number);

// 31
// function findNumber(start, end, divisor) {

//   for (let i = start; i < end; i += 1) {
//       if (i % divisor === 0) {
//         return i
//     }
//   }

// }
// findNumber(2, 6, 5)
// console.log(findNumber(2, 6, 5));
// findNumber(8, 17, 3)
// console.log(findNumber(8, 17, 3));

// 32
// function includes(array, value) {
//     for (let item of array) {
//         if (item === value) {
//             return true
//         }
//     }
// return false
// }
// includes([1, 2, 3, 4, 5], 3)
// console.log(includes([1, 2, 3, 4, 5], 3));
// includes([1, 2, 3, 4, 5], 17)
// console.log(includes([1, 2, 3, 4, 5], 17));


// ___________________________________________________________________
// module 3___________________________________________________________
// ___________________________________________________________________

// 1
// const apartment = {
//     imgUrl: "https://via.placeholder.com/640x480",
//     descr: "Spacious apartment in the city center",
//     rating: 4,
//     tags: ["premium", "promoted", "top"],
//     price: 2153,
// };
// console.log(apartment.descr);

//2
// const apartment = {
//     imgUrl: "https://via.placeholder.com/640x480",
//     descr: "Spacious apartment in the city center",
//     rating: 4,
//     tags: ["premium", "promoted", "top"],
//     price: 2153,
//     owner: {
//         name: "Henry",
//         phone: "982-126-1588",
//         email:"henry.carter@aptmail.com",
//     }
// };
// console.log(apartment.owner.name);

//3
// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
// };

// const aptRating = apartment.rating;
// const aptDescr = apartment.descr;
// const aptPrice = apartment.price;
// const aptTags = apartment.tags;
// console.log(apartment.tags);

//4
// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
//   owner: {
//     name: "Henry",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com",
//   },
// };

// const ownerName = apartment.owner.name;
// const ownerPhone = apartment.owner.phone;
// const ownerEmail = apartment.owner.email;
// const numberOfTags = apartment.tags.length;
// const firstTag = apartment.tags[0];
// const lastTag = apartment.tags[numberOfTags-1];
// console.log(numberOfTags);
// console.log(firstTag);
// console.log(lastTag);

//5
// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
// };

// const aptRating = apartment['rating'];
// const aptDescr = apartment['descr'];
// const aptPrice = apartment['price'];
// const aptTags = apartment['tags'];
// console.log(aptRating);

//6
// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
//   owner: {
//     name: "Henry",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com",
//   },
// };
// apartment.price = 5000;
// apartment.rating = 4.7;
// apartment.owner.name = "Henry Sibola";
// apartment.tags.push("trusted")
// console.log(apartment['tags']);

//7
// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4.7,
//   price: 5000,
//   tags: ["premium", "promoted", "top", "trusted"],
//   owner: {
//     name: "Henry Sibola",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com",
//   },
// };
// apartment.area = 60
// apartment.rooms = 3
// apartment.location = {
//     country: "Jamaica",
//     city: "Kingston",
// }
// console.log(apartment);

//8
// const name = "Repair Droid";
// const price = 2500;
// const image = "https://via.placeholder.com/640x480";
// const tags = ["on sale", "trending", "best buy"];

// const product = {
//     name,
//     price,
//     image,
//     tags,
// };
// console.log(product.name);

//9
// const emailInputName = "email";
// const passwordInputName = "password";
// const credentials = {
//     [emailInputName]: "henry.carter@aptmail.com",
//     [passwordInputName]:"jqueryismyjam",
// };
// console.log(credentials.email);

//10
// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// const keys = [];
// const values = [];
// // Change code below this line
// for (item in apartment)
// {
//     keys.push(item)
//     values.push(apartment[item])
// }
// console.log(keys,values);