/*

1. Object with property (string, boolean, number, object, array, method which will return a property value)
2. template string. minimum 3 property will be dynamic (nested object property, array second element, another property)
3.1: no parameter arrow function. return 89
3.2: single parameter arrow function. will divide input by 7
3.3: arrow function with two parameters.
3.4 multi-line arrow function. two parameter.
.
4. map divide each element by 7
5. map, forEach, filter, find
6. destructuring on object and array

*/

// task 1

const myObj = {
  name: "pen",
  isExpensive: false,
  tk: 1200,
  funcObj: {
    a: 1,
    b: "b",
    c: true,
  },
  company: ["a", "b", "c"],
  myFunc: function (num) {
    if (num !== Number || null || undefined || num < 0) {
      return "Please Enter a positive number type value value";
    } else {
      return this.tk - num;
    }
  },
};

// task 2

const first = `${myObj.funcObj.c}`;
const second = `${myObj.company[2]}`;
const third = `${myObj.myFunc(360)}`;

// task 3

const arrow1 = () => 89;
const arrow2 = (num) => num / 7;
const arrow3 = (num1, num2) => (num1 + num2) / 2;
const arrow4 = (num1, num2) => {
  return num1 + 7 + (num2 + 7);
};

// task 4

const myArray = [36, 25, 98, 75, 26, 78, 65, 49, 37, 25, 46];

myArray.map((num) => num / 7);

// task 5

myArray.forEach((num) => console.log(num));
myArray.filter((num) => num > 30);
myArray.find((num) => num === 37);

// task 6

const myObj2 = {
  a: "1",
  b: "2",
  c: "3",
};
const { a, b, c } = myObj2;

const myArray2 = [1, 2, 3, 5, 8];
const second = myArray2[1];
