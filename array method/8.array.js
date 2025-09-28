// JavaScript indexOf() Method
// This method is used to find the index of a particular element in an array.

// Example: In this example, we will find out the index of the elements using the indexOf() method.

let fruits = [
  "apple",
  "banana",
  "cheery",
  "mango",
  "watermelon",
  "grapes",
  "strawberry",
];

console.log(
  " i want to find the index of mango and index is :",
  fruits.indexOf("mango")
);

// <--------------------------------------->

// counting from zero

// JavaScript includes() Method
// This method is used to check whether the array contains the specified element or not.

// Example: In this example, we will check whether the array contains the element or not using the includes() method.

console.log(
  " i want to find the watermelon is available in fruit array and the answer is :",
  fruits.includes("watermelon")
);

// now i want to check orange is available in fruit array or not :

console.log(
  "now i want to check orange is available in fruit array or not and the answer is :",
  fruits.includes("orange")
);

// <----------------------------------------------->

//  JavaScript sort() Method
// This method sorts the elements of an array in alphabetical order in ascending order.

// Example: In this example, we will sort the array alphabetically using the sort() method.

const alphabet = ["a", "d", "b", "e", "c"];

console.log("sort the alphabet array : ", alphabet.sort());

// now what if we want to sort number data types values

const numArray = [1, 3, 5, 67, 2, 49];

console.log(
  "sorting number array in ascending order : ",
  numArray.sort((a, b) => a - b)
);

// now in descending order

console.log(
  "sorting number array in descending order : ",
  numArray.sort((a, b) => b - a)
);