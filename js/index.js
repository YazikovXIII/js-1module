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