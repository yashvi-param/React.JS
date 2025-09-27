// rest 

function num(a, b, c, d, e) {
    const total = a + b + c + d + e ;

    console.log(total);

}

num( 5, 10, 15, 20, 25)



function total(...num) {
    console.log(...num);
}

total( 5, 10, 15, 20, 25);