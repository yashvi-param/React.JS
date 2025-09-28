// javascript array join() method

// This join() method creates and returns a new string by concatenating all elements of an array. It uses a specified separator between each element in the resulting string.

let birds = [
    "parrot",
    "sparrow",
    "pigeon",
    "peacock",
    "eagle"
];

console.log("return new string with each birds element ", birds.join(" * "));

// javascript array flat() method
// The flat() method is used to flatten the array i.e. it merges all the given array and reduces all the nesting present in it.

let arr = [
    [11, 22, 33],
    [44, 55, 66],
    [77, 88, 99, 100]
];

console.log("flattened number Array =>", arr.flat());

// another example with more flatted array

let arr1 = [11, 22, [33, 44], [55, 66, [77, 88, 99]]];

console.log("more nested flattened number Array OP =>", arr1.flat(Infinity));

// javascript array.slice() method
// The slice() method returns a new array containing a portion of the original array, based on the start and end index provided as arguments

console.log("birds elements", birds);

console.log("slicing birds array =>", birds.slice(1, 4)); // will return that index items only