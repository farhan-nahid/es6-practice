// Problem:1. let const

const myName = "Farhan";
let age = 20;
age = 21;

// Problem:2. template string

const pera = `This is ${5 + 8}`;

// Problem:2.a: use variable

const myVar = 36;
const myTemplateVar = `This man is ${myVar} years old`;

// Problem:2.b: use object  property

const myObj = { id: 1, name: "watch", price: "300$" };
const myTemplateObj = `
      This is a ${myObj.name}. 
      It's id number is ${myObj.id}.
      It is only ${myObj.price}.
  `;

// Problem:3. arrow function

const myArrow = () => console.log("Problem: 3");

// Problem:3.a. with one parameter. will return the number after dividing by 5

const myArrow1 = (num) => num / 5;

// Problem:3.b. with two parameters. will add two to each number and then multiply the result.

const myArrow2 = (num1, num2) => (num1 + 2) * (num2 + 2);

// Problem:3.c. three parameters. will multiply all three parameters

const myArrow3 = (num1, num2, num3) => num1 * num2 * num3;

// Problem:3.d. with two parameters but it will be a multi line arrow function. will add two to each number and then multiply the result. make sure you return the result

const myArrow4 = (num1, num2) => {
  return num1 + num2;
};

// Problem:5. array of numbers. and then map to get each elements multiplied by 5. must use arrow function

const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const fiveMultiply = myNumbers.map((number) => number * 5);

// Problem:6. [challenging] numbers of array. get odd numbers by using filter with arrow function

const myOdd = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const oddNumber = myOdd.filter((num) => num % 2);

// Problem:7. [challenging] array of objects (e.g. products). use find to get the object with price 5000.

const productObj = [
  { id: 1, name: "product - 1", price: 6000 },
  { id: 2, name: "product - 2", price: 1000 },
  { id: 3, name: "product - 3", price: 8000 },
  { id: 4, name: "product - 4", price: 3000 },
  { id: 5, name: "product - 5", price: 5000 },
  { id: 6, name: "product - 6", price: 7000 },
  { id: 7, name: "product - 7", price: 2000 },
];

const price5000 = productObj.find((product) => product.price === 5000);

// Problem:8. You have an object. Now use destructing to create a simple variable of any property of the object.

const myVarObj = { id: 1, name: "product - 1", price: 6000 };

const { name } = myVarObj;

//Problem:9 [challenging] You have an array. Now use destructing to create a simple (or more) variable to get the third element of the array in a variable called 'three'.

const myVarArray = [1, 2, 3, 4, 5];

const three = myVarArray[2];

/*

Problem:10. [optional] just a write a function with three parameters. and the last parameter will have a default parameter with value 7.
this function will take three parameters and will return the sum of all the three parameters. 

*/

const threeSum = (num1, num2, num3 = 7) => num1 + num2 + num3;

/* 

  একটা nested অবজেক্ট ডিক্লেয়ার করো (অর্থাৎ একটা অবজেক্ট এর প্রপার্টি এর মধ্যেও যে অবজেক্ট থাকতে পারে। আবার সেই অবজেক্ট এর প্রপার্টি এর মধ্যেও সে অবজেক্ট থাকতে পারে। সেই রকম একটা অবজেক্ট ডিক্লেয়ার করো। এবং যেকোন একটা প্রপার্টি এর মান একটা array হবে। জাস্ট এমন একটা অবজেক্ট )

  উপরের অবজেক্ট এ ডট এর আগে যে প্রশ্নবোধক চিহ্ন দিয়ে যে অপশনাল চেইনিং করা যায়। সেটা একটু প্রাকটিস করো। 

 */

const nestedObject = {
  name: "alu",
  price: "12",
  dokan: ["mohakhali", "mirpur", "abul bhai er dokan"],
  invent: {
    year: 1000,
    inventor: "abul kasem",
    employe: [
      { name: "potol", year: 200 },
      { name: "doi", year: 100 },
      { name: "kumra", year: 600 },
    ],
  },
};

console.log(nestedObject?.invent?.employe[1]?.year);
