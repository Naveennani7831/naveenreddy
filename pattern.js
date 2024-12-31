// num= 5

// for(i=num;i>=1;i--){
//     let row =" "

//     for(j=1;j<=num-i;j++){
//         row += " "
//     }

//     for(j=1;j<=i;j++){
//         row += " " + j
//     }
//     console.log(row)

// }

// console.log("7th table ")
// num = 10

// for(i=1;i<=num;i++){
//   res = 7 * i
//      console.log(`7 * ${i} = ${res}`)
// }

// res = 0
// for(i=1;i<=num;i++){
//     res += i

//   }

// console.log(res)

// console.log(typeof parseInt(num[0]))
// num ="1234456"

// sum = 0
// for(i=0;i<num.length;i++){
//     sum += parseInt(num[i])
// }

// console.log(sum)

// for (let i = 0; i < 10; i++) {
//     if (i === 5) {
//         break// Skip the rest of the loop when i is 5
//     }
//     console.log(i);
// }
// console.log("Loop completed.");

// num = "3436";
// res = 0
// for (i of num) {
//   n = parseInt(i);

//  isprime = true


//   if (n > 1) {

//     for (j = 2; j < n; j++) {
//       if (n % j == 0) {
//       isprime = false
//         break;
//       }
//     }
    

//     // console.log(sum)
//   }

 
//   if(isprime){
//    console.log(`prime ${n}`)
//   }
//   else{
//    res += n
//   }
//   console.log(res)
// }

num = 6

for(i=num;i>=0;i--){
    res= " "
    // for(j=1;j=num-i;j++){
    //   res += " "
    // }
    for(j=1;j<=i;j++){
    res += " " + "*"
    }

    console.log(res)
  
  }



n= 5
for(i=0;i<=n;i++){
  console.log(i)
}
  