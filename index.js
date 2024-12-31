// function isPrime(num){
//     if(num > 1){
//         for(i=2;i<num;i++){
//             if(num % i == 0){
//                 return 'not prime'
//             }
//         }
//         return 'prime'
//     }
//     return 'not prime'
// }
// console.log(isPrime(5))


// function Duplicates(arr){
//     let seen = new Set()
//     let dup = []
//     for(i=0;i<=arr.length;i++){
//         if(seen.has(arr[i])){
//             dup.push(arr[i])
//         }
//         else{
//             seen.add(arr[i])
//         }
//     }
//     return dup;
// }

// console.log(Duplicates([1,2,4,5,1,3,5,8,4,5,2]))
// console.log(...new Set([1,2,4,5,1,3,5,8,4,5,2]))


// function Hello(arr){
//     const obj = {}
//     for(i=0;i<arr.length;i++){
//         if(obj[arr[i]]){
//             obj[arr[i]]++
//         }else{
//             obj[arr[i]] = 1
//         }
//     }
//     return obj
// }
// console.log(Hello([1,2,4,5,1,3,5,8,4,5,2]))

// vowels = "aeiouAEIOU"
// c = 0
// function Countvowels(name){
//     for(i of name){
//         if(vowels.includes(i)){
//             c++
//         }
//     }

// }
// Countvowels("naveenreddy")
// console.log(c)

// function Dup(arr) {
//     let dup = [];
//     let ar = [];
//     for (let i of arr) {
//         if (ar.includes(i) && !dup.includes(i)) {
//             dup.push(i);
//         } else {
//             ar.push(i);
//         }
//     }
//     return dup;
// }

// console.log(Dup([1, 8, 1, 2, 3, 6, 4, 5, 6, 1, 2,2]));
// 2