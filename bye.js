

// const acc = new Set()
// console.log(acc)

// for(i of arr){
//     if(acc.has(i)){
//         dup.push(i)
//     }else{
//         acc.add(i)
//     }
// }
// // console.log(acc,new Set(dup))
// let dup = []
// for(i=0;i<=arr.length;i++){
//     for(j=i+1;j<arr.length;j++){
//         if(arr[i] === arr[j]){
//            dup.push[arr[i]]
//         }
//     }
// }
// console.log(dup)

let arr = [1, 2, 3, 4, 2, 1, 5, 3, 6],res = " "
// for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//         if (arr[i] === arr[j] && !duplicates.includes(arr[i]))
//              duplicates.push(arr[i]);
//     }
// }
// console.log("Duplicates:", duplicates);

// for(i=0;i<=arr.length;i++){
//     for(j=i+1;j<arr.length;j++){
//         if(arr[i] === arr[j]){
//            res += arr[i]
//         }
//     }
// }
// console.log(res)



function isprime(n){
    isprime = true
          if(n > 1){
            for(j=2;j<n;j++){
                if(n % j == 0){
                    isprime = false
                    break;
                }
            }
          }
  if(isprime){
    console.log("prime")
  }else{
    console.log("not prime")
  }

}
isprime(8)
