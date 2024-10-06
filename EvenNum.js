let arr = [12,5,7,8,10,4,5];
let evenNumbers = [];
let index = 0;

for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
        evenNumbers[index] = arr[i];
        index++;
    }
}

console.log("Even numbers:", evenNumbers);
