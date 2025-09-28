const numbers = [11, 22, 33, 44, 55, 66, 77, 88, 99, 100];

const double = numbers.map((x) => {
    return x * 2;
});

console.log(double);

const fruits = [
    "apple",
    "banana",
    "mango",
    "orange",
];

const capital = fruits.map((word) => word.toUpperCase());

console.log(capital);

const personData = [
    {
        name: "alice",
        age: 22,
        city: "bvn"
    },
    {
        name: "john",
        age: 20,
        city: "bvn"
    }
];

const personNames = personData.map((x) => x.name);

console.log(personNames);