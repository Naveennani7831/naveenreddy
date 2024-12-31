
// amstrong numbers
// function name(arr){
//     res = 0                                                        
//     for( i of arr){
//         len = arr.length
//        const d = i**len
//        res += parseInt(d)
    
//     }
//     console.log(res)


//     if(arr === res.toString()){
//         console.log("amstrong number ")
//     }
//     else{
//         console.log("not amstrong number ")
//     }
// }

// name("407") amstrong number
// name("371") amstrong number
// name("153") amstrong number
// name("370") amstrong number
// name("1640")  not  amstrong number



// function name(arr) {
//     let res = 0;
//     for (let i of arr) {
//         let len = arr.length;
//         let power = 1;
//         for (let j = 0; j < len; j++) {
//             power *= i; // Multiply i len times
//         }
//         res += parseInt(power);
//     }
//     console.log(res);

//     if (arr === res.toString()) {
//         console.log("Armstrong number");
//     } else {
//         console.log("Not an Armstrong number");
//     }
// }

// name("407");
// name("371");
// name("153");
// name("370");

// PRIME NUMBERS PROBLEM 



// function Isprime(num){
//     if(num>1){
//         for(j=2;j<num;j++){
//             if(num % j == 0){
//                 return 'not prime'
//             }
//         }
//         return 'prime number'
//     }
//     return 'not prime'
// }

// console.log(Isprime(5))

// function Isprime(num){
//     if(num>1){
//         for(j=2;j<Math.sqrt(num);j++){
//             if(num % j == 0){
//                 return 'not prime'
//             }
//         }
//         return 'prime number'
//     }
//     return 'not prime'
// }

// console.log(Isprime(11,15))

// num = 5

// a= 0;
// b= 1;
// i=0
// res =""
// while (i<num){
//     c= a+b
//     res += " " + a
//     a=b;
//     b=c
//     i++
// }
// console.log(res)

// num = 10

// a= 0;
// b= 1;
// res =[a]
// while (res.length<num){
//     c= a+b
//     a=b;
//     res.push(a)
//     b=c
// }
// console.log(res)



// num = 10
// a= 0;
// b=1;
// res =""
// for(i=0;i<num;i++){
//       c=a+b;
//       res+= " " + a
//       a=b;

//       b=c;
// }
// console.log(res)

// factorial problem 


// function factorial(num) {
//     let result = 1;  // Initialize the result as 1
    
//     for (let i = 1; i <= num; i++) {
//         result *= i;  // Multiply result by each number from 1 to num
//     }
    
//     return result;  // Return the final result
// }

// console.log(factorial(10));  // Output: 120


// arr = [1,2,4,5]
// a = "18845"
// console.log(a.split("").reverse())

