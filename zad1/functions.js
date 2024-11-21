function isOdd(x) {
    return x % 2 != 0;
}

const isEven = (x) => {
    return x % 2 == 0;
}

let num = 20;
console.log(isOdd(num))
console.log(isEven(num));