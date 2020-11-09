//TASK 1

const arr = [1, 5, 2, 3, 4, 8, 9, 2];

// function greaterThanFive(num) {
//     return num > 5;
// }

// const greaterThanFive = (num) => {
//     return num > 5;
// }

// console.log(arr.filter(greaterThanFive));

const greaterThanFive = arr.filter(num => num > 5);
console.log(greaterThanFive);


const mappedArray = arr.map(val => ({ num: val }));
console.log(mappedArray);

// let num = 1
const reducedNum = arr.reduce((currResult, currValue) => {
    return currResult * currValue;
}, 1);
console.log(reducedNum);


// TASK 2

function findMax(...arr) {
    let currMax = arr[0];
    for (const num of arr) {
        if (num > currMax) {
            currMax = num;
        }
    }
    return currMax;
}
console.log(findMax(...arr));


// TASK 3

function findMaxMin(...arr) {
    let currMax = arr[0];
    let currMin = arr[0];
    for (const num of arr) {
        if (num < currMin) {
            currMin = num;
        }
        if (num > currMax) {
            currMax = num;
        }
    }

    return [currMax, currMin];
}
const [max, min] = findMaxMin(...arr);
console.log(max);
console.log(min);


//TASK 4
const list = new Set();
list.add(10);
list.add(5);
list.add(50);
list.add(10);

console.log(list);