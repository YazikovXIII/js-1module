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

//11
// const keys = [];
// const values = [];
// const advert = {
//   service: "apt",
// };
// const apartment = Object.create(advert);
// apartment.descr = "Spacious apartment in the city center";
// apartment.rating = 4;
// apartment.price = 2153;

// for (const key in apartment) {
//   // Change code below this line
//     if (apartment.hasOwnProperty(key)) {
//         keys.push(key);
//         values.push(apartment[key]);
//     }

//   // Change code above this line
// }
// console.log(keys);

//12
// function countProps(object) {
//     let propCount = 0;
//     let keys = [];

//     for (key in object) {
//         if (object.hasOwnProperty(key)) {
//         keys.push(key)
//     }
//     }
//     propCount=keys.length
//   return propCount;
// }
// countProps({ name: "Mango", age: 2 })
// console.log(countProps({ name: "Mango", age: 2 }));

//13
// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// const values = [];
// // Change code below this line
// const keys = Object.keys(apartment);
// console.log(keys);
// for (key of keys) {
//     values.push(apartment[key])
// }

//14
// function countProps(object) {
//   let propCount = Object.keys(object).length;

//   return propCount;
// }
// countProps({ name: "Mango", age: 2 })

//15
// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// // Change code below this line
// const keys = Object.keys(apartment);
// const values = Object.values(apartment);
// console.log(keys);
// console.log(values);

//16
// function countTotalSalary(salaries) {
//     let totalSalary = 0;
//     let values = Object.values(salaries)
//     let keys = Object.keys(salaries)
//     for (key of keys) {
//         if (salaries.hasOwnProperty(key)) {
//             totalSalary += salaries[key]
//         }
//     }

//   return totalSalary;
// }
// countTotalSalary({})
// console.log(countTotalSalary({}));
// countTotalSalary({ mango: 100, poly: 150, alfred: 80 })
// console.log(countTotalSalary({ mango: 100, poly: 150, alfred: 80 }));
// countTotalSalary({ kiwi: 200, poly: 50, ajax: 150 })
// console.log(countTotalSalary({ kiwi: 200, poly: 50, ajax: 150 }));

//17
// const colors = [
//   { hex: "#f44336", rgb: "244,67,54" },
//   { hex: "#2196f3", rgb: "33,150,243" },
//   { hex: "#4caf50", rgb: "76,175,80" },
//   { hex: "#ffeb3b", rgb: "255,235,59" },
// ];

// const hexColors = [];
// const rgbColors = [];
// // Change code below this line
// for (const color of colors) {

//      hexColors.push(color.hex)
//      rgbColors.push(color.rgb)
// }
// console.log(hexColors);
// console.log(rgbColors);

//18
// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function getProductPrice(productName) {

//     for (const item of products) {
//         if (item.name === productName) {
//             return item.price
//         }
//     }
// return null
// }
// getProductPrice("Radar");
// console.log(getProductPrice("Radar"));
// getProductPrice("Grip");
// console.log(getProductPrice("Grip"));
// getProductPrice("Scanner");
// getProductPrice("Droid");
// getProductPrice("Engine");
// console.log(getProductPrice("Engine"));

//19
// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function getAllPropValues(propName) {
//     let someArr = [];

//     for (const item of products) {
//         for (const key in item) {
//             if (key === propName) {
//         someArr.push(item[key])
//     }
// }
//     }

//     return someArr
// }
// getAllPropValues("name")
// console.log(getAllPropValues("name"));
// getAllPropValues("category")
// console.log(getAllPropValues("category"));

//20
// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function calculateTotalPrice(productName) {
//   // Пиши код ниже этой строки
//     let totalPrice = 0;
//     for (const product of products) {
//         if (product.name === productName) {
//             totalPrice = product.price * product.quantity
//         }
//     }


// return totalPrice
//   // Пиши код выше этой строки
// }
// calculateTotalPrice("Blaster");
// console.log(calculateTotalPrice("Blaster"));
// calculateTotalPrice("Radar");
// console.log(calculateTotalPrice("Radar"));

//21
// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };
// // Change code below this line

// const { yesterday, today, tomorrow } = highTemperatures;


// // Change code above this line
// const meanTemperature = (yesterday + today + tomorrow) / 3;
// console.log(meanTemperature);

//22
//  const highTemperatures = {
//    yesterday: 28,
//    today: 26,
//    tomorrow: 33,
//  };
//  // Change code below this line

//  const { yesterday, today, tomorrow,icon="https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg" } = highTemperatures;


// // Change code above this line
//  const meanTemperature = (yesterday + today + tomorrow) / 3;
//  console.log(meanTemperature);

//23
// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };
// // Change code below this line
// const { yesterday:highYesterday,today:highToday,tomorrow:highTomorrow,icon:highIcon="https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg" } = highTemperatures

// // const highYesterday = highTemperatures.yesterday;
// // const highToday = highTemperatures.today;
// // const highTomorrow = highTemperatures.tomorrow;
// // const highIcon = highTemperatures.icon;

// // Change code above this line
// const meanTemperature = (highYesterday + highToday + highTomorrow) / 3;

// console.log(meanTemperature);
//   console.log(highIcon);

//24
// const colors = [
//   { hex: "#f44336", rgb: "244,67,54" },
//   { hex: "#2196f3", rgb: "33,150,243" },
//   { hex: "#4caf50", rgb: "76,175,80" },
//   { hex: "#ffeb3b", rgb: "255,235,59" },
// ];

// const hexColors = [];
// const rgbColors = [];
// // Change code below this line

// for (const { hex,rgb } of colors) {
//   hexColors.push(hex);
//   rgbColors.push(rgb);
// }
// console.log(hexColors);

//25
// const forecast = {
//   today: {
//     low: 28,
//     high: 32,
//     icon: "https://www.flaticon.com/svg/static/icons/svg/861/861059.svg",
//   },
//   tomorrow: {
//     low: 27,
//     high: 31,
//   },
// };
// // Change code below this line

// const {
//     today: {
//         low: lowToday,
//         high: highToday,
//         icon: todayIcon,
//     },
//     tomorrow: {
//         low: lowTomorrow,
//         high: highTomorrow,
//         icon: tomorrowIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg"
//     }
// } = forecast;

// console.log(todayIcon);

//26
// Change code below this line
// function calculateMeanTemperature(forecast) {
// //   const todayLow = forecast.today.low;
// //   const todayHigh = forecast.today.high;
// //   const tomorrowLow = forecast.tomorrow.low;
// //   const tomorrowHigh = forecast.tomorrow.high;
//     const { today: {
//         low: todayLow,
//         high: todayHigh,
//     },
//         tomorrow: {
//             low: tomorrowLow,
//             high: tomorrowHigh,
//         },
//     } = forecast
//   // Change code above this line
//   return (todayLow + todayHigh + tomorrowLow + tomorrowHigh) / 4;
// }
// calculateMeanTemperature({ today: { low: 37, high: 40 }, tomorrow: { low: 33, high: 38 } })
// console.log(calculateMeanTemperature({ today: {low: 37, high: 40}, tomorrow: {low: 33, high: 38} }));

//27
// const scores = [89, 64, 42, 17, 93, 51, 26];
// // Change code below this line
// const bestScore = Math.max(...scores);
// const worstScore = Math.min(...scores);
// console.log(bestScore);
// console.log(worstScore);

//28
// const firstGroupScores = [64, 42, 93];
// const secondGroupScores = [89, 14, 51, 26];
// const thirdGroupScores = [29, 47, 18, 97, 81];
// // Change code below this line
// const allScores = [...firstGroupScores,...secondGroupScores,...thirdGroupScores];
// const bestScore = Math.max(...allScores);
// const worstScore = Math.min(...allScores);
// console.log(allScores,bestScore,worstScore);

//29
// const defaultSettings = {
//   theme: "light",
//   public: true,
//   withPassword: false,
//   minNumberOfQuestions: 10,
//   timePerQuestion: 60,
// };
// const overrideSettings = {
//   public: false,
//   withPassword: true,
//   timePerQuestion: 30,
// };
// // Change code below this line
// const finalSettings = { ...defaultSettings, ...overrideSettings };
// console.log(finalSettings);

//30
// function makeTask(data) {
//   const completed = false;
//   const category = "General";
//   const priority = "Normal";
//   // Change code below this line
//     const newObject = { completed, category, priority, ...data }
//     return newObject
// }
// makeTask({ category: "Finance", text: "Take interest" })
// console.log(makeTask({ category: "Finance", text: "Take interest" }));
// makeTask({})
// console.log(makeTask({}));

//31
// // Change code below this line
// function add(...args) {
//     let sum = 0
//     for (arg of args) {
//         sum += arg
//     }
//   return sum// Change code above this line
// }
// add(32, 6, 13, 19, 8)
// console.log(add(32, 6, 13, 19, 8));
// add(74, 11, 62, 46, 12, 36)
// console.log(add(74, 11, 62, 46, 12, 36));

//32
// Change code below this line
// function addOverNum(check,...args) {
//   let total = 0;

//     for (const arg of args) {
//         if (arg > check) {
//             total += arg;
//         }
//   }

//   return total;
//   // Change code above this line
// }
// addOverNum(15, 32, 6, 13, 19, 8)
// console.log(addOverNum(15, 32, 6, 13, 19, 8));
// addOverNum(20, 74, 11, 62, 46, 12, 36)
// console.log(addOverNum(20, 74, 11, 62, 46, 12, 36));
// addOverNum(50, 15, 27)
// console.log(addOverNum(50, 15, 27));

//33
// Change code below this line
// function findMatches(arr,...arguments) {
//   const matches = []; // Don't change this line
//     for (const item of arr) {
//         for (const arg of arguments) {
//             if (item === arg) {
//                 matches.push(arg)
//             }
//         }
//     }
//   // Change code above this line
//   return matches;
// }
// findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7)
// console.log(findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7));
// findMatches([10, 24, 41, 6, 9, 19], 24, 11, 9, 23, 41)
// console.log(findMatches([10, 24, 41, 6, 9, 19], 24, 11, 9, 23, 41));
// findMatches([63, 11, 8, 29], 4, 7, 16)
//     console.log(findMatches([63, 11, 8, 29], 4, 7, 16));

//34
// const bookShelf = {
//   // Change code below this line
//   books: ["The last kingdom", "The guardian of dreams"],
//   getBooks() {
//     return "Returning all books";
//   },
//   addBook(bookName) {
//     return `Adding book ${bookName}`;
//     },
//     removeBook(bookName) {
//       return `Deleting book ${bookName}`
//     },
//     updateBook(oldName, newName) {
//         return `Updating book "${oldName}" to "${newName}"`
//     },
//   // Change code above this line
// };
// bookShelf.addBook("Haze")
// console.log(bookShelf.addBook("Haze"));
// bookShelf.removeBook("Red sunset")
// console.log(bookShelf.removeBook("Red sunset"));
// bookShelf.updateBook("Sands of dune", "Dune")
// console.log(bookShelf.updateBook("Sands of dune", "Dune"));

//35
// const bookShelf = {
//     books: ["The last kingdom", "Haze", "The guardian of dreams"],
  
//         updateBook(oldName, newName) {
//     // Change code below this line
//             const newBooks = this.books.splice();
//             if (this.books.includes(oldName)) {
//                 this.books.splice(this.books.indexOf(oldName),1,newName)
//             }
            
//             return this.books
//     // Change code above this line
//   },
// };

//36
// const atTheOldToad = {
//   // Change code below this line
// potions:[],


//   // Change code above this line
// };

//37
// const atTheOldToad = {
//   // Change code below this line
// potions:["Speed potion", "Dragon breath", "Stone skin"],
//     getPotions() {
//     return this.potions
// }

//   // Change code above this line
// };
// console.log(atTheOldToad.getPotions());

//38
// const atTheOldToad = {
// potions:["Speed potion", "Dragon breath", "Stone skin"],
//     getPotions() {
//     return this.potions
//     },
//     addPotion(potionName) {
//         this.potions.push(potionName)
//         return this.potions
//     }
// };

//39
// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   removePotion(potionName) {
      
//       if (this.potions.includes(potionName)) {
//           this.potions.splice(this.potions.indexOf(potionName), 1)
//           return this.potions
// }

//   },
// };

//40
// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   updatePotionName(oldName, newName) {
//     // Change code below this line
//       if (this.potions.includes(oldName)) {
//           this.potions.splice(this.potions.indexOf(oldName), 1, newName)
//           return this.potions
//       }
//   },
// };

//41
// const atTheOldToad = {
//   potions: [
//     { name: "Speed potion", price: 460 },
//     { name: "Dragon breath", price: 780 },
//     { name: "Stone skin", price: 520 },
//   ],
//   // Change code below this line
//   getPotions() {
//     return this.potions;
//   },
//     addPotion(newPotion) {
// for(const item of this.potions)
//     if (item.name === newPotion.name) {
//       return `Error! Potion ${newPotion.name} is already in your inventory!`;
//     }

//         this.potions.push(newPotion);
//   },
//     removePotion(potionName) {

//         for (const potion of this.potions) {

//             const idx = this.potions.indexOf(potion)
//              if (potion.name === potionName) {
//                  this.potions.splice(idx, 1)
//                  return this.potions
//              }
            
//         }
//         return `Potion ${potionName} is not in inventory!`;
//     },
    
//    updatePotionName(oldName, newName) {
//        for (const potion of this.potions) {
           
//            const idx = this.potions.indexOf(potion)
//            if (potion.name === oldName) {
//                potion.name = newName
//            }
//        }
//    return this.potions
//    },
//   // Change code above this line
// };
// console.log(atTheOldToad.getPotions());
//  console.log(atTheOldToad.addPotion({ name: "Stone skin", price: 240 }));
// console.log(atTheOldToad.removePotion("Dragon breath"));
// console.log(atTheOldToad.updatePotionName("Stone skin", "Invulnerability potion"));


// ___________________________________________________________________
// module 4___________________________________________________________
// ___________________________________________________________________


//1
// function makePizza() {
//   return "Your pizza is being prepared, please wait.";
// }
// // Change code below this line

// const result = makePizza();
// const pointer = makePizza;

//2
// function deliverPizza(pizzaName) {
//   return `Delivering ${pizzaName} pizza.`;
// }

// function makePizza(pizzaName) {
//   return `Pizza ${pizzaName} is being prepared, please wait...`;
// }

// // Chande code below this line
// function makeMessage(pizzaName,callback) {
//   return callback(pizzaName);
// }
// console.log(makeMessage("Royal Grand", makePizza));

//3
// function makePizza(pizzaName, callback) {
//   console.log(`Pizza ${pizzaName} is being prepared, please wait...`);
//   callback(pizzaName);
// }

// makePizza("Royal Grand", function deliverPizza(pizzaName) {
//   console.log(`Delivering pizza ${pizzaName}.`);
// });
// // Change code below this line

// makePizza("Ultracheese", function eatPizza(pizzaName) {
//     console.log(`Eating pizza ${pizzaName}.`);
// });

//4
// const pizzaPalace = {
//   pizzas: ['Ultracheese', 'Smoked', 'Four meats'],
//   order(pizzaName, onSuccess, onError) {
//     const item = [...pizzaPalace.pizzas];
//     return item.includes(pizzaName)
//       ? makePizza(pizzaName)
//       :onOrderError(`There is no pizza with a name ${pizzaName} in the assortment.`)
//   },
// };
// // Change code above this line

// // Callback for onSuccess
// function makePizza(pizzaName) {
//   return `Your order is accepted. Cooking pizza ${pizzaName}.`;
// }

// // Callback for onError
// function onOrderError(error) {
//   return `Error! ${error}`;
// }

// // Method calls with callbacks
// // pizzaPalace.order('Smoked', makePizza, onOrderError);
// console.log(pizzaPalace.order('Smoked', makePizza, onOrderError));
// // pizzaPalace.order('Four meats', makePizza, onOrderError);
// // pizzaPalace.order('Big Mike', makePizza, onOrderError);
// // pizzaPalace.order('Vienna', makePizza, onOrderError);
// console.log(pizzaPalace.order('Vienna', makePizza, onOrderError));

//5
// function calculateTotalPrice(orderedItems) {
//   let totalPrice = 0;
//     orderedItems.forEach( item => totalPrice += item );

//   return totalPrice;
// }
// console.log(calculateTotalPrice([12, 85, 37, 4]));
// console.log(calculateTotalPrice([164, 48, 291]));

//6
// function filterArray(numbers, value) {
//   const filteredNumbers = [];
//   // Change code below this line
//     numbers.forEach(element => {
//         if (element > value) {
//         filteredNumbers.push(element)
//     }
//     });

//     return filteredNumbers
//   // Change code above this line
  
// }
// console.log(filterArray([1, 2, 3, 4, 5], 3));
// console.log(filterArray([12, 24, 8, 41, 76], 38));

//7
// function getCommonElements(firstArray, secondArray) {
//   const commonElements = [];
//   // Change code below this line
//  firstArray.forEach(element => {
//      if (secondArray.includes(element)) {
//         commonElements.push(element)
//     }
//  });

//   return commonElements;
//   // Change code above this line
// }
// console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]));

//8-9

// const calculateTotalPrice=(quantity, pricePerItem) => quantity * pricePerItem

//10
// // Change code below this line
// const calculateTotalPrice=(orderedItems) => {
//   let totalPrice = 0;
//   orderedItems.forEach( item =>
//     totalPrice += item
//   );

//   return totalPrice;
// }
// // Change code above this line
// console.log(calculateTotalPrice([164, 48, 291]));

//11
// Change code below this line
// const filterArray = (numbers, value) => {
//     const filteredNumbers = [];
//     numbers.forEach(number=>{
//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//   });

//   return filteredNumbers;
// }
// console.log(filterArray([12, 24, 8, 41, 76], 20));

//12
// Change code below this line
// const getCommonElements=(firstArray, secondArray) => {
//   const commonElements = [];

//   firstArray.forEach(element => {
//     if (secondArray.includes(element)) {
//       commonElements.push(element);
//     }
//   });

//   return commonElements;
// }
// console.log(getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]));

//13
// function changeEven(numbers, value) {
//     const newArr=[]
//     numbers.forEach(element => {
        
//         if (element % 2 === 0) {
//             element = element + value
//         }
//         newArr.push(element)
//     });

//     return newArr
// }
// console.log(changeEven([1, 2, 3, 4, 5], 10));

//14
// const planets = ["Earth", "Mars", "Venus", "Jupiter"];
// const planetsLengths = planets.map(planet => planet.length);
// console.log(planetsLengths);

//15
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
// // Change code below this line

// const titles = books.map(book => book.title);
// console.log(titles);

//16
// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     genres: ["adventure", "history"],
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     genres: ["fiction"],
//   },
//   {
//     title: "Redder Than Blood",
//     author: "Tanith Lee",
//     genres: ["horror", "mysticism"],
//   },
// ];

// const genres = books.flatMap(book => book.genres);

// console.log(genres);

//17-18(getUserEmail = users => users.map(user=>user.email))

// const getUserNames = users => users.map(user=>user.name);
//   // Change code above this line
// console.log(getUserNames([
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
// ]));

//19
// const numbers = [17, 24, 82, 61, 36, 18, 47, 52, 73];
// // Change code below this line

// const evenNumbers = numbers.filter(number => number % 2 === 0);
// const oddNumbers = numbers.filter(number => number % 2 !== 0);
// console.log(evenNumbers);

//20
// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     genres: ["adventure", "history"],
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     genres: ["fiction", "mysticism"],
//   },
//   {
//     title: "Redder Than Blood",
//     author: "Tanith Lee",
//     genres: ["horror", "mysticism", "adventure"],
//   },
// ];
// // Change code below this line
// const allGenres = books.flatMap(book => book.genres);
// const uniqueGenres = allGenres.filter((genre, idx) => allGenres.indexOf(genre) === idx);

//21
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

// const topRatedBooks = books.filter(book=>book.rating >= MIN_RATING);
// const booksByAuthor = books.filter(({author})=>author===AUTHOR);
// console.log(topRatedBooks);
// console.log(booksByAuthor);

//22
// Change code below this line
// const Allusers = [
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
// const getUsersWithEyeColor = (users, color) => users.filter(user => user.eyeColor === color);

// console.log(getUsersWithEyeColor(Allusers,"green"));

//23
// Change code below this line
// const allUsers = [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male",
//     age: 37
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female",
//     age: 34
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     gender: "male",
//     age: 24
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     gender: "female",
//     age: 21
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     gender: "male",
//     age: 27
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     gender: "male",
//     age: 38
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     gender: "female",
//     age: 39
//   }
// ]
// const getUsersWithAge = (users, minAge, maxAge) => {
//     return users.filter(user => user.age > minAge && user.age < maxAge)
// };
// console.log(getUsersWithAge(allUsers,30,40));

//24
// const allUsers = [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male",
//     age: 37
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female",
//     age: 34
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     gender: "male",
//     age: 24
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     gender: "female",
//     age: 21
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     gender: "male",
//     age: 27
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     gender: "male",
//     age: 38
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     gender: "female",
//     age: 39
//   }
// ]
// const getUsersWithFriend = (users, friendName) => users.filter(user=>user.friends.includes(friendName));
// console.log(getUsersWithFriend(allUsers, "Briana Decker"));

//25
// const allUsers = [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male",
//     age: 37
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female",
//     age: 34
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     gender: "male",
//     age: 24
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     gender: "female",
//     age: 21
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     gender: "male",
//     age: 27
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     gender: "male",
//     age: 38
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     gender: "female",
//     age: 39
//   }
// ]
// const getFriends = (users) => {
//     const allFriends = users.flatMap(user=>user.friends)
//     console.log(allFriends);
//     const uniqueFriends = allFriends.filter((friend, index) => allFriends.indexOf(friend) === index);
//     // const uniqueGenres = allGenres.filter((genre, idx) => allGenres.indexOf(genre) === idx);
//     return uniqueFriends
// };

// console.log(getFriends(allUsers));

//26-27(getActiveUseres-getInactiveUsers)
// const allUsers = [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male",
//     age: 37
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female",
//     age: 34
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     gender: "male",
//     age: 24
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     gender: "female",
//     age: 21
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     gender: "male",
//     age: 27
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     gender: "male",
//     age: 38
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     gender: "female",
//     age: 39
//   }
// ]
// const getInactiveUsers = (users) => users.filter(user=>!user.isActive);
// // Change code above this line
// console.log(getInactiveUsers(allUsers));

//28
// const books = [
//   {
//     title: 'The Last Kingdom',
//     author: 'Bernard Cornwell',
//     rating: 8.38,
//   },
//   {
//     title: 'Beside Still Waters',
//     author: 'Robert Sheckley',
//     rating: 8.51,
//   },
//   {
//     title: 'The Dream of a Ridiculous Man',
//     author: 'Fyodor Dostoevsky',
//     rating: 7.75,
//   },
//   { title: 'Redder Than Blood', author: 'Tanith Lee', rating: 7.94 },
// ];
// const BOOK_TITLE = 'The Dream of a Ridiculous Man';
// const AUTHOR = 'Robert Sheckley';
// // Change code below this line

// const bookWithTitle = books.find(book => book.title === BOOK_TITLE);
// const bookByAuthor = books.find(book => book.author === AUTHOR);
// console.log(bookWithTitle);

//29
// const allUsers = [
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
// const getUserWithEmail = (users, email) => users.find(user=>user.email===email);
// console.log(getUserWithEmail(allUsers,"blackburndotson@furnigeer.com"));

//30
// const firstArray = [26, 94, 36, 18];
// const secondArray = [17, 61, 23];
// const thirdArray = [17, 26, 94, 61, 36, 23, 18];
// // Change code below this line

// const eachElementInFirstIsEven = firstArray.every(item => item % 2 === 0);
// const eachElementInFirstIsOdd = firstArray.every(item => item % 2 !== 0);

// const eachElementInSecondIsEven = secondArray.every(item => item % 2 === 0);
// const eachElementInSecondIsOdd = secondArray.every(item => item % 2 !== 0);

// const eachElementInThirdIsEven = thirdArray.every(item => item % 2 === 0);
// const eachElementInThirdIsOdd = thirdArray.every(item => item % 2 !== 0);
// console.log(eachElementInFirstIsEven, eachElementInFirstIsOdd, eachElementInSecondIsEven, eachElementInSecondIsOdd, eachElementInThirdIsEven,
// eachElementInThirdIsOdd);

//31
// const allUsers = [
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
// const isEveryUserActive = (users) => users.every(user => user.isActive);
// console.log(isEveryUserActive(allUsers));

//32
// const firstArray = [26, 94, 36, 18];
// const secondArray = [17, 61, 23];
// const thirdArray = [17, 26, 94, 61, 36, 23, 18];
// // Change below this line

// const anyElementInFirstIsEven = firstArray.some(item => item % 2 === 0);
// const anyElementInFirstIsOdd = firstArray.some(item => item % 2 !== 0);

// const anyElementInSecondIsEven = secondArray.some(item => item % 2 === 0);
// const anyElementInSecondIsOdd = secondArray.some(item => item % 2 !== 0);

// const anyElementInThirdIsEven = thirdArray.some(item => item % 2 === 0);
// const anyElementInThirdIsOdd = thirdArray.some(item => item % 2 !== 0);
// console.log(anyElementInFirstIsEven,anyElementInFirstIsOdd);

//33
// const allUsers = [
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
// const isAnyUserActive = users => users.some(user=>user.isActive);
// console.log(isAnyUserActive(allUsers));

//34
// const players = {
//   mango: 1270,
//   poly: 468,
//   ajax: 710,
//   kiwi: 244
// };
// const playtimes = Object.values(players); // [1270, 468, 710, 244]
// // Change code below this line

// const totalPlayTime = playtimes.reduce((prev, numb) => prev + numb);

// // Change code above this line
// const averagePlayTime = totalPlayTime / playtimes.length;
// console.log(totalPlayTime);

//35
// const players = [
//   { name: "Mango", playtime: 1270, gamesPlayed: 4 },
//   { name: "Poly", playtime: 469, gamesPlayed: 2 },
//   { name: "Ajax", playtime: 690, gamesPlayed: 3 },
//   { name: "Kiwi", playtime: 241, gamesPlayed: 1 },
// ];
// // Change code below this line

// const totalAveragePlaytimePerGame = players.reduce((total, player) => {
//   return player.playtime / player.gamesPlayed
//     + total
// }
// ,0);
// console.log(totalAveragePlaytimePerGame);

//36
// const allUsers = [
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
// // Change code below this line
// const calculateTotalBalance = users => users.reduce((total,user) =>total+user.balance,0)
// console.log(calculateTotalBalance(allUsers));

//37
// const allUsers = [
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
// const getTotalFriendCount = users => {
//   return users.reduce((accum, user) => {
//     return accum + user.friends.length;
//    },0)
// };
// console.log(getTotalFriendCount(allUsers));

//38
// const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
// const authors = [
//   "Tanith Lee",
//   "Bernard Cornwell",
//   "Robert Sheckley",
//   "Fyodor Dostoevsky",
// ];
// // Change code below this line

// const ascendingReleaseDates = [...releaseDates].sort();

// const alphabeticalAuthors = [...authors].sort();
// console.log(ascendingReleaseDates);
// console.log(alphabeticalAuthors);

//39
// const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
// // Change code below this line

// const ascendingReleaseDates = [...releaseDates].sort((a, b) => a - b);

// const descendingReleaseDates = [...releaseDates].sort((a, b) => b - a);
// console.log(ascendingReleaseDates);
// console.log(descendingReleaseDates);

//40
// const authors = [
//   "Tanith Lee",
//   "Bernard Cornwell",
//   "Robert Sheckley",
//   "Fyodor Dostoevsky",
//   "Howard Lovecraft",
// ];

// const authorsInAlphabetOrder = [...authors].sort((a,b)=> a.localeCompare(b) );
// const authorsInReversedOrder = [...authors].sort((a, b) => b.localeCompare(a));
// console.log(authorsInAlphabetOrder);
// console.log(authorsInReversedOrder);

//41
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
// const authors = books.map(book=>book.author)
// const sortedByAuthorName = [...books].sort((a,b)=>a.author.localeCompare(b.author));
// const sortedByReversedAuthorName = [...books].sort((first,second) => second.author.localeCompare(first.author));
// const sortedByAscendingRating = [...books].sort((a, b) => a.rating - b.rating);
// const sortedByDescentingRating = [...books].sort((a, b) => b.rating - a.rating);
// console.log(sortedByAuthorName);
// console.log(sortedByReversedAuthorName);
// console.log(sortedByAscendingRating);
// console.log(sortedByDescentingRating);
// console.log(authors);

//42
// const allUsers = [
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
// // Change code below this line
// const sortByAscendingBalance = users => [...users].sort((a,b)=>a.balance-b.balance);
// // Change code above this line
// console.log(sortByAscendingBalance(allUsers));

//43
// const allUsers = [
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
// const sortByDescendingFriendCount = users => {
//   return [...users].sort((a, b) => {
//     return b.friends.length - a.friends.length
//   })
// };
// // Change code above this line
// console.log(sortByDescendingFriendCount(allUsers));

//44
// const allUsers = [
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
// const sortByName = users => {
//    return [...users].sort((a,b)=>a.name.localeCompare(b.name))
// };
// console.log(sortByName(allUsers));

//45
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
//   {
//     title: "The Dreams in the Witch House",
//     author: "Howard Lovecraft",
//     rating: 8.67,
//   },
// ];
// const MIN_BOOK_RATING = 8;
// // Change code below this line

// const names = books
//   .filter((book) => book.rating > MIN_BOOK_RATING)
//   .map((book) => book.author)
//   .sort((a, b) => a.localeCompare(b));
// console.log(names);

//46
// const allUsers = [
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
// // Change code below this line
// const getNamesSortedByFriendCount = users => {
//   return [...users].sort((a, b) => a.friends.length - b.friends.length)
//   .map((user)=>user.name)
// };
// // Change code above this line

//47
// const allUsers = [
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
// // Change code below this line
// const getSortedFriends = users => users.flatMap((user) => user.friends)
//   .filter((friend, idx, array) => array.indexOf(friend) === idx)
//   .sort((a,b)=>a.localeCompare(b));
// console.log(getSortedFriends(allUsers));

//48
// const allUsers = [
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
// const getTotalBalanceByGender = (users, gender) => users.filter((user) => user.gender === gender)
//   .reduce((total,user)=>total + user.balance,0)
// ;
// console.log(getTotalBalanceByGender(allUsers,"male"));



// ___________________________________________________________________
// module 5___________________________________________________________
// ___________________________________________________________________

//1
// const pizzaPalace = {
//   pizzas: ["Supercheese", "Smoked", "Four meats"],
//   // Change code below this line
//   checkPizza(pizzaName) {
//     return this.pizzas.includes(pizzaName);
//   },
//   order(pizzaName) {
//     const isPizzaAvailable = this.checkPizza(pizzaName);

//     if (!isPizzaAvailable) {
//       return `Sorry, there is no pizza named «${pizzaName}»`;
//     }

//     return `Order accepted, preparing «${pizzaName}» pizza`;
//   },
//   // Change code above this line
// };

//2
// const customer = {
//   username: "Mango",
//   balance: 24000,
//   discount: 0.1,
//   orders: ["Burger", "Pizza", "Salad"],
//   // Change code below this line
//   getBalance() {
//     return this.balance;
//   },
//   getDiscount() {
//     return this.discount;
//   },
//   setDiscount(value) {
//     this.discount = value;
//   },
//   getOrders() {
//     return this.orders;
//   },
//   addOrder(cost, order) {
//     this.balance -= cost - cost * this.discount;
//     this.orders.push(order);
//   },
//   // Change code above this line
// };

// customer.setDiscount(0.15);
// console.log(customer.getDiscount()); // 0.15
// customer.addOrder(5000, "Steak");
// console.log(customer.getBalance()); // 19750
// console.log(customer.getOrders()); // ["Burger", "Pizza", "Salad", "Steak"]

//3
// const historyService = {
//   orders: [
//     { email: "jacob@hotmail.com", dish: "Burrito" },
//     { email: "solomon@topmail.net", dish: "Burger" },
//     { email: "artemis@coldmail.net", dish: "Pizza" },
//     { email: "solomon@topmail.net", dish: "Apple pie" },
//     { email: "jacob@hotmail.com", dish: "Taco" },
//   ],
//   // Change code below this line
//   getOrdersLog() {
//     return this.orders
//       .map(order => `email: ${order.email} dish: ${order.dish}`)
//       .join(" - ");
//   },
//   getEmails() {
//     const emails = this.orders.map(order => order.email);
//     const uniqueEmails = new Set(emails);
//     return [...uniqueEmails];
//   },
//   getOrdersByEmail(email) {
//     return this.orders.filter(order => order.email === email);
//   },
//   // Change code above this line
// };

// console.log(historyService.getOrdersByEmail("solomon@topmail.net"));
// console.log(historyService.getOrdersByEmail("artemis@coldmail.net"));

//4
// const parent = {
//   name: "Stacey",
//   surname: "Moore",
//   age: 54,
//   heritage: "Irish",
// };
// // Change code below this line

// const child = Object.create(parent);

// // Change code above this line
// child.name = "Jason";
// child.age = 27;
// console.log(child.hasOwnProperty("name"));

//5
// const ancestor = {
//   name: "Paul",
//   age: 83,
//   surname: "Dawson",
//   heritage: "Irish",
// };
// // Change code below this line

// const parent = Object.create(ancestor);
// parent.name = "Stacey";
// parent.surname = "Moore";
// parent.age = 54;

// const child = Object.create(parent);
// child.name = "Jason";
// child.age = 27;

// // Change code above this line

//6
// class Car { }
// console.log(new Car);

//7
// class Car{
//   constructor(brand, model, price) {
//     this.brand = brand;
//     this.model = model;
//     this.price = price;
//   }
// }
// console.log(new Car("Audi", "Q3", 36000));

//8
// class Car {
//   // Change code below this line
//   constructor({brand, model, price}) {
//     this.brand = brand;
//     this.model = model;
//     this.price = price;
//   }
//   // Change code above this line
// }

//9
// class Car {
//   constructor({ brand, model, price }) {
//     this.brand = brand;
//     this.model = model;
//     this.price = price;
//   }
//   getPrice() {
//     return this.price
//   }
  
//   changePrice(newPrice) {
//     this.price = newPrice
//   }
// }

//10
// class Storage {
//   constructor(items) {
//     this.items = items;
//   }
//     getItems() {
//       return this.items
//     }

//     addItem(newItem) {
//       this.items.push(newItem)
//     }
    
//   removeItem(itemToRemove) {
//     for (const item of this.items) {
//       if (item === itemToRemove) {
//      this.items.splice(this.items.indexOf(item),1)
//       }
//     }
//   }
// }
// const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
// storage.addItem("Droid");
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
// storage.removeItem("Prolonger");
// console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]

//11
// class StringBuilder{
//     constructor(value) {
//         this.value = value
//     }
//     getValue() {
//         return this.value
//     };
//     padStart(item) {
//         this.value = item + this.value
//         return this
//     };
//     padEnd(item) {
//         this.value += item
//         return this
//     }
//     padBoth(item) {
//         this.value = item + this.value + item
//         return this
//     }
// }

// const builder = new StringBuilder(".");
// console.log(builder.getValue()); // "."
// builder.padStart("^");
// console.log(builder.getValue()); // "^."
// builder.padEnd("^");
// console.log(builder.getValue()); // "^.^"
// builder.padBoth("=");
// console.log(builder.getValue()); // "=^.^="

//12
// class Car {
//   // Change code below this line
//     #brand
//   constructor({ brand, model, price }) {
//     this.#brand = brand;
//     this.model = model;
//     this.price = price;
//   }
//     getBrand() {
//     return this.#brand
//     };
//     changeBrand(newBrand) {
//         this.#brand = newBrand
//     };
//   // Change code above this line
// }
// console.log(new Car({ brand: "bmw", model: "X5", price: 58900 }));
// const one = new Car({ brand: "bmw", model: "X5", price: 58900 })
// console.log(one.getBrand());
// one.changeBrand("Infinity")
// console.log(one);

//13
// class Storage {
//   // Change code below this line
// #items
//   constructor(items) {
//     this.#items = items;
//   }

//   getItems() {
//     return this.#items;
//   }

//   addItem(newItem) {
//     this.#items.push(newItem);
//   }

//   removeItem(itemToRemove) {
//     this.#items = this.#items.filter(item => item !== itemToRemove);
//   }
// }

// // Change code above this line
// const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
// storage.addItem("Droid");
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
// storage.removeItem("Prolonger");
// console.log(storage.getItems()); // ["Нанитоиды", "Антигравитатор", "Droid"]

//14
// class StringBuilder {
//   // Change code below this line
// #value
//   constructor(initialValue) {
//     this.#value = initialValue;
//   }

//   getValue() {
//     return this.#value;
//   }

//   padEnd(str) {
//     this.#value += str;
//   }

//   padStart(str) {
//     this.#value = str + this.#value;
//   }

//   padBoth(str) {
//     this.padStart(str);
//     this.padEnd(str);
//   }
// }

// // Change code above this line
// const builder = new StringBuilder(".");
// console.log(builder.getValue()); // "."
// builder.padStart("^");
// console.log(builder.getValue()); // "^."
// builder.padEnd("^");
// console.log(builder.getValue()); // "^.^"
// builder.padBoth("=");
// console.log(builder.getValue()); // "=^.^="

//15
// class Car {
//   // Change code below this line
//   #brand;
//     #model;
//     #price;
//   constructor({ brand, model, price }) {
//     this.#brand = brand;
//     this.#model = model;
//     this.#price = price;
//   }

//   get brand() {
//     return this.#brand;
//   }

//   set brand(newBrand) {
//     this.#brand = newBrand;
//   }

//   get model() {
//     return this.#model;
//   }

//   set model(newModel) {
//     this.model = newModel;
//   }

//   get price() {
//     return this.price;
//   }

//   set price(newPrice) {
//     this.price = newPrice;
//   }
//   // Change code above this line
// }

//16
// class Car {
//   // Change code below this line
//     static MAX_PRICE = 50000;
//     #price;

//   constructor({ price }) {
//     this.#price = price;
//   }

//   get price() {
//     return this.#price;
//   }

//   set price(newPrice) {
//       if (newPrice <= Car.MAX_PRICE) {
//         this.#price = newPrice;
//     }
//   }
//   // Change code above this line
// }

// const audi = new Car({ price: 35000 });
// console.log(audi.price); // 35000

// audi.price = 49000;
// console.log(audi.price); // 49000

// audi.price = 51000;
// console.log(audi.price); // 49000

//17
// class Car {
//   static #MAX_PRICE = 50000;
//   // Change code below this line
//     static checkPrice(price) {
//         if (price > this.#MAX_PRICE) {
//         return "Error! Price exceeds the maximum"
//         }
//         return "Success! Price is within acceptable limits"
// }
//   // Change code above this line
//   constructor({ price }) {
//     this.price = price;
//   }
// }

// const audi = new Car({ price: 36000 });
// const bmw = new Car({ price: 64000 });

// console.log(Car.checkPrice(audi.price)); // "Success! Price is within acceptable limits"
// console.log(Car.checkPrice(bmw.price)); // "Error! Price exceeds the maximum"
// console.log(Car.checkPrice(18000));
// console.log(Car.checkPrice(57000));

//18
// class User {
//   constructor(email) {
//     this.email = email;
//   }

//   get email() {
//     return this.email;
//   }

//   set email(newEmail) {
//     this.email = newEmail;
//   }
// }
// // Change code below this line
// class Admin extends (User) {
//     static AccessLevel = {
//         BASIC: "basic",
//         SUPERUSER: "superuser",

//     }
// }
// console.log(Admin.AccessLevel.BASIC);

//19
// class User {
//   email;

//   constructor(email) {
//     this.email = email;
//   }

//   get email() {
//     return this.email;
//   }

//   set email(newEmail) {
//     this.email = newEmail;
//   }
// }

// class Admin extends User {
//   // Change code below this line

//   static AccessLevel = {
//     BASIC: "basic",
//     SUPERUSER: "superuser",
//   };
//     constructor({ email, accessLevel }){
//     super(email);
//     this.accessLevel = accessLevel;
// }
//   // Change code above this line
// }

// const mango = new Admin({
//   email: "mango@mail.com",
//   accessLevel: Admin.AccessLevel.SUPERUSER,
// });

// console.log(mango.email); // "mango@mail.com"
// console.log(mango.accessLevel); // "superuser"

//20
// class User {
//   email;

//   constructor(email) {
//     this.email = email;
//   }

//   get email() {
//     return this.email;
//   }

//   set email(newEmail) {
//     this.email = newEmail;
//   }
// }
// class Admin extends User {
//   // Change code below this line

//   static AccessLevel = {
//     BASIC: "basic",
//     SUPERUSER: "superuser",
//   };

//   constructor({ email, accessLevel,}) {
//     super(email);
//       this.accessLevel = accessLevel;
//       this.blacklistedEmails = [] 
//     }
//     blacklist(email) {
//         this.blacklistedEmails.push(email)
//     }
//     isBlacklisted(email) {
//     return this.blacklistedEmails.includes(email)
// }
//   // Change code above this line
// }


// const mango = new Admin({
//   email: "mango@mail.com",
//   accessLevel: Admin.AccessLevel.SUPERUSER,
// });
// console.log(Admin);
// console.log(mango.email); // "mango@mail.com"
// console.log(mango.accessLevel); // "superuser"

// mango.blacklist("poly@mail.com");
// console.log(mango.blacklistedEmails); // ["poly@mail.com"]
// console.log(mango.isBlacklisted("mango@mail.com")); // false
// console.log(mango.isBlacklisted("poly@mail.com")); // true