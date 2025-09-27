// spread 

// const fruits = ["banana", "apple", "coconut", "mango"];

// const vagitables = ["cabbage", "ginger", "lemon", "sunflower"]

// const total = [...fruits, ...vagitables]

// console.log(total);


//Object

const person1 = {
    name : "yashvi",
    age : 21,
    dis : "gujrat"
}


const person2 = {
    ...person1,
    name1 : "angi",
    age1 : 22,
    dis1 : "assam"
}

console.log(person2);


const data = {...person1,...person2}

console.log(data);