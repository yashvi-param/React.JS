const number = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const total = number.reduce((acc, curr) => {
    return acc + curr;
});

console.log(total);

const products = [
    {
        name: "Mobile phones",
        price: 10000,
        qty: 50, //50,000
    },
    {
        name: "airdops",
        price: 3000,
        qty: 30,//90,000
    },
    {
        name: "laptop",
        price: 50000,
        qty: 30, //1,500,000
    },
];

const totalBill = products.reduce((acc, curr) => {
    return acc + curr.price * curr.qty;
}, 0);

console.log(totalBill);