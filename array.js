// const arr = [1,2,4,5,7,9,3,1]
// n= arr.length
// for(i=0;i< n -1 ;i++){


//   for(j=0;j< n-1 ;j++){
//     if(arr[j] > arr[j+1]){
//         let sorted = arr[j]
//         arr[j] = arr[j+1]
//         arr[j+1] = sorted
//     }
//   }

// }
// console.log(arr)

let arr = [5, 2, 9, 1, 5, 6];

// Outer loop starts from index 1 since the first element is considered sorted
for (let i = 1; i < arr.length; i++) {
    let current = arr[i];  // The element to be inserted
    let j = i - 1;

    // Shift elements of arr[0..i-1] that are greater than current, to one position ahead
    while (j >= 0 && arr[j] > current) {
        arr[j + 1] = arr[j];
        j--;
    }
    
    // Insert the current element into its correct position
    arr[j + 1] = current;
}

console.log("Sorted array:", arr);  // Output: [1, 2, 5, 5, 6, 9]
