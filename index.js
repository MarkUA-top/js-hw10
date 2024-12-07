// // Task 1
// const sayHello = () => {
//   const conClick = confirm("Підтвердіть привітання")
//   if (conClick === true){
//     console.log("Hello World!")
//   } else {
//     alert("bruh confirm dude")
//   }
// }
// sayHello()
// // Task 2
// const randomNumber = Math.floor(Math.random() * 100) + 1;
// console.log(randomNumber);
// const say = Number(prompt("Вгадай цифру від 1 до 100"));

// function resRanNum() {
//   if (say === randomNumber) {
//     console.log("yes u did it");
//   } else {
//     console.log("bruh dude u can do it")
//   }
// }

// resRanNum()
// task 3
// let res = 0;

// function checkClick() {
//   while (true) {
//     const addClick = confirm("Click if u stupid");
//     if (addClick) {
//       res++;
//       console.log(`U click ${res}`);
//     } else {
//       console.log("Bruh u dont click u stupid HAHAHA");
//       break;
//     }
//   }
// }

// checkClick();

// task 4

// task 5
const calculateDiscountedPrice = (price, discount, callback) => {
  const discountedPrice = price - (price * discount / 100);
  callback(discountedPrice);
};

const showDiscountedPrice = (discountedPrice) => {
  console.log(`Discounted price: ${discountedPrice}`);
};

calculateDiscountedPrice(192, 73, showDiscountedPrice);
