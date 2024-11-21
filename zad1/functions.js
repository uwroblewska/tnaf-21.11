function isOdd(x) {
    if (x % 2 != 0) return true;
    else return false;

}

const isEven = (x) => {
    if (x % 2 == 0) return true;
    else return false;
}

let num = 20;
console.log(isOdd(num));
console.log(isEven(num));