// adding elemnyts of an array in last

let veg = ["onion", "tomato", "cabbage"];

console.log("veg array before", "and  their length", veg.length, veg);

// now adding en element into an array

veg.push("carrot");

console.log("veg array after", "and  their length", veg.length, veg);

// adding element to an array from the starting

veg.unshift("potato");

console.log("veg array", "and its length", veg.length, veg);

// Removing Elements from an Array

// To remove the elements from an array we have different methods like pop(), shift(), or splice().

// The pop() method removes an element from the last index of the array.
// The shift() method removes the element from the first index of the array.
// The splice() method removes or replaces the element from the array.

// pop() method example

console.log("veg elements and their length", veg.length, veg);

// removing elements from an array from last

veg.pop();

console.log(
  "veg elements after removing last element and their length",
  veg.length,
  veg
);

// removing elements from an array from th start

console.log("veg elements and their length", veg.length, veg);

veg.shift();        

console.log(
  "veg elements after removing first element and its length",
  veg.length,
  veg
);

// The splice() method adds and/or removes array elements.

// The splice() method
// overwrites the original array.   

console.log("veg elements and their length", veg.length, veg);

// adding elements in veg array from second index

veg.splice(2, 0, "peas", "beans");

//here 2 is index position and after 0 is is you want to remove elements of an array from the defined index position

console.log(
 "veg elements and their length after adding new 2 elements", 
  veg.length, 
  veg
)

// removing elements from veg array

console.log("veg elements and their length", veg.length, veg);

veg.splice(1, 2); 

console.log(
  "veg elements and their length after removing 2 elements from index 1", 
  veg.length, 
  veg
)

// what if we try to remove the element beyond it's length let's try

veg.splice(3, 5);

console.log("veg elements and their length", veg.length, veg)