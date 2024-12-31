function bubbleSort(arr) {
    let n = arr.length;
    let swapped;
    
    do {
        swapped = false;  // To check if any elements were swapped in the current pass
        
        for (let i = 0; i < n - 1; i++) {
            // Compare adjacent elements
            if (arr[i] > arr[i + 1]) {
                // Swap if the current element is greater than the next
                let temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
                swapped = true;
            }
        }
        n--;  // Reduce the range of comparison since the largest element is now in place
    } while (swapped);  // Repeat until no swaps are made
    
    return arr;
}

console.log(bubbleSort([5, 3, 8, 4, 2]));  // Output: [2, 3, 4, 5, 8]




function insertionSort(arr) {
    let n = arr.length;
    
    for (let i = 1; i < n; i++) {
        let key = arr[i];  // Element to be inserted in sorted portion
        let j = i - 1;
        
        // Shift elements that are greater than `key` to the right
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];  // Move the element one position to the right
            j--;
        }
        
        // Insert the key at its correct position
        arr[j + 1] = key;
    }
    
    return arr;
}

console.log(insertionSort([5, 3, 8, 4, 2]));  // Output: [2, 3, 4, 5, 8]
