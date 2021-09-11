// Problem:1. let const

const myName = "Farhan";
let age = 20;
age = 21;

/* 

Problem:2. template string
Problem:2.a: use variable
Problem:2.b: use object  property 

*/

const myVar = 36;
const myObj = { id: 1, name: "watch", price: "300$" };

const myTemplateVar = `This man is ${myVar} years old`;
const myTemplateObj = `This is a ${myObj.name}. 
It's id number is ${myObj.id}.
It is only ${myObj.price}.
`;

/* 

Problem:3. arrow function
Problem:3.a. with one parameter. will return the number after dividing by 5
Problem:3.b. with two parameters. will add two to each number and then multiply the result.
Problem:3.c. three parameters. will multiply all three parameters
Problem:3.d. with two parameters but it will be a multi line arrow function. will add two to each number and then multiply the result.
make sure you return the result 

*/

const myArrow = () => console.log("Problem: 1");
const myArrow1 = (num) => num / 5;
const myArrow2 = (num1, num2) => (num1 + 2) * (num2 + 2);
const myArrow3 = (num1, num2, num3) => num1 * num2 * num3;
const myArrow4 = (num1, num2) => {
  return num1 + num2;
};

// Problem:5. array of numbers. and then map to get each elements multiplied by 5. must use arrow function

const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
myNumbers.map((number) => console.log(number * 5));

// Problem:6. [challenging] numbers of array. get odd numbers by using filter with arrow function

const myOdd = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

myOdd.filter((num) => {
  const odd = num % 2 != 0;
  console.log(odd);
});

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

productObj.find((obj) => {
  if (obj.price == 5000) {
    console.log(obj);
  }
});

// Problem:8. You have an object. Now use destructing to create a simple variable of any property of the object.

const myVarObj = { id: 1, name: "product - 1", price: 6000 };

const { name } = myVarObj;

//Problem:9 [challenging] You have an array. Now use destructing to create a simple (or more) variable to get the third element of the array in a variable called 'three'.

const myVarArray = [1, 2, 3, 4, 5];

const three = myVarArray[2];
console.log(three);

/*

Problem:10. [optional] just a write a function with three parameters. and the last parameter will have a default parameter with value 7.
this function will take three parameters and will return the sum of all the three parameters. 

*/

const threeSum = (num1, num2, num3 = 7) => num1 + num2 + num3;
