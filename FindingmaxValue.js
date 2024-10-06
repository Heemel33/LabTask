function findLargest(arr) {
    let max_val = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max_val) {
            max_val = arr[i];
        }
    }

    return max_val;
}

let arr = [10, 5, 20, 8, 15];
console.log(" largest number is: ", findLargest(arr));
