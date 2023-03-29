function multiplicationTable(num) {
    for (let i = 1; i <= 10; i++) {
        let product = num * i;
        console.log(num + " x " + i + " = " + product);
    }
}

multiplicationTable(5); // generates multiplication table for 5
multiplicationTable(7); // generates multiplication table for 7
multiplicationTable(9); // generates multiplication table for 9

let age = 18;
let message = age >= 18 ? "You are an adult" : "You are not an adult";
console.log(message);