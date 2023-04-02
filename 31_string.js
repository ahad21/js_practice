/*var country = "Bangladesh";

console.log(

    country.substr(6,4), //desh
    country.substring(6,10), //desh
    country.toLowerCase(),
    country.toUpperCase(),
);

console.log(

    country1 = "    Bangladesh    ",
    country1.length,
    country2= country1.trim(),
    country2.length,
)*/
/*
const arr = [1, 2, 3, 4, 5];
const newArr = arr.filter(num => num > 2);
console.log(newArr);

const arr1 = [1, 2, 3, 4, 5];
const result = arr1.find(num => num > 3);
console.log(result);


const arr2 = [1, 2, 3, 4, 5];
const result2 = arr.filter(num => num % 2 === 0);
console.log(result2);


const arr3 = [1, 2, 3, 4, 5];
let sum = 0;
for (let i = 0; i < arr3.length; i++) {
    sum += arr3[i];
    if (sum >= 10) {
        break;
    }
}
console.log(sum);

const arr4 = [1, 2, 3, 4, 5];
const result4 = arr4.reduce((acc, num) => {
    if (num % 2 === 0) {
        return acc + num;
    }
    return acc;

}, 0);

console.log(result4);

const obj={
    prop1:{
        prop2:{
            prop3:'value'
        }
    }
};
console.log(obj.prop1.prop2.prop3.length);

const arr6 = [1, 2, 3, 4, 5];
const newArr6=arr6.map(num=>num*2);
console.log(newArr6);
*/

/*const originalArray=[1,6,2,7,3,8,4,9,5,10];


const newArray = originalArray.map(Item => {
    return Item + 10
})

console.log(newArray)
*/




const originalArray = [1, 6, 2, 7, 3, 8, 4, 9, 5, 10];
    const newArray = originalArray.map((value) => {
        if (value <= 5) {
            return value + 10;
        } else {
            return value;
        }
    });
    console.log(newArray)



