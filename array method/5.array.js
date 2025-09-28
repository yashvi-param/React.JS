// iterating through array elements

let animals = [
    "cat", 
    "dog", 
    "elephant", 
    "tiger", 
    "lion", 
    "zebra"
];

// using for loop

for(let i = 0; i < animals.length; i++){
    console.log(animals[i]);
}

// using for of loop

for(let i of animals){
    console.log("for of loop", i);
}

// using for each

animals.forEach((animal, index) => {
    console.log("animals using for Each OP", index, animal);
});

// this for each function will execute for each time for the all element of an array

// Array concatenation

// concatenation means joining two item into one

const veg = ["potato", "tomato", "ginger", "chilli"];

const shopItems = animals.concat(veg);

console.log("all available shop items :", shopItems);

// Conversion of an Array to String

console.log("converting an Array to String", animals.toString());