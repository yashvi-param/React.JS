const numbers = [1, 2, 3, 4, 5];

console.log("numbers array: ", numbers);

// Any element in the array can be accessed using the index number. The index in the arrays starts with 0.

console.log("third element is ", numbers[2]);

// accessing first Element of an array

console.log("first element is", numbers[0]);

// accessing last element of an array

console.log("last element is", numbers[numbers.length - 1]);

//  Modifying the Array Elements

// numbers array before changing elements

console.log("numbers array second element before changing is :", numbers[1]);

numbers[1] = 20;

console.log(
  "now we we have changed second element in numbers array :",
  numbers[1]
);

console.log("numbers after changing second element", numbers);