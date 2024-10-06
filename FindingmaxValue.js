let arr = [10, 17, 27, 1, 8];
let maxvalue = arr[0];

for (let i = 1; i < arr.length; i++) {
    if (arr[i] > maxvalue) {
        maxvalue = arr[i];
    }
}

console.log("The max value is : ", maxvalue);

