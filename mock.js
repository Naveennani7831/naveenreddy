// num= 5

// for(i=num;i>0;i--){
//     res = " "

//     for(j=1;j<=num-i;j++){
//         res += " "
//     }
//     for(j=1;j<=i;j++){
//         res += " "+ j
//     }
//     console.log(res)
// }


// let rows = 4
// let cols = 4 

// 1 0 1 0
// 0 1 0 1
// 1 0 1 0
// 0 1 0 1

// for(i=0;i<rows;i++){
//  res = " "
//     for(j=0;j<cols;j++){
//         if((i+j) % 2 === 0){
//             res += " "+ "1"
//         }else{
//             res +=  " "+  "0"
//         }
//     }
//     console.log(res)
// }


// rows = 4
// cols= 4
// c =1
// for(i=1;i<rows;i++){
// res = ""
//     for(j=1;j<cols;j++){
//         res += " " + c++
//     }

//     console.log(res)
// }

// // Define the size of the pattern
// let rows = 4;
// let cols = 4;

// // Generate the pattern
// for (let i = 0; i < rows; i++) {
//   let rowPattern = "";
//   for (let j = 0; j < cols; j++) {
//     // Conditions for the pattern
//     if ((i === 0 && (j === 0 || j === cols - 1)) || // Corners in the first row
//         (i === rows - 1 && (j === 0 || j === cols - 1)) || // Corners in the last row
//         (i > 0 && i < rows - 1 && (j === 1 || j === cols - 2))) { // Middle rows
//       rowPattern += "* ";
//     } else {
//       rowPattern += "0 ";
//     }
//   }
//   console.log(rowPattern); // Print the row
// }

let rows = 5; // Total number of rows
let middle = Math.ceil(rows / 2); // Calculate the middle row

for (let i = 1; i <= rows; i++) {
  let res = "";

  // Determine spaces for alignment
  let spaces = Math.abs(middle - i);
  for (let j = 0; j < spaces; j++) {
    res += " ";
  }

  // Determine the numbers in the row
  if (i <= middle) {
    // Top half (increasing numbers)
    for (let j = 1; j <= i; j++) {
      res += j + " ";
    }
  } else {
    // Bottom half (decreasing numbers)
    let numbers = rows - i + 1;
    for (let j = 1; j <= numbers; j++) {
      res += j + " ";
    }
  }

  // Print the result for the current row
  console.log(res.trim());
}


