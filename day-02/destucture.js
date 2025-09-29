const animal = ["cat", "dog", "fish", "bat"];

console.log(animal.at(1));

console.log(animal[2]);

// destructing

const [one, three] =animal;

console.log(one);

// object

const person = {
  name: "alice",
  city: "bvn",
  age: 22,
};

console.log(person.name);

// destructure

const { name } = person;

console.log(name);