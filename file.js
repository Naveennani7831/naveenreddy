// num ="3436"

// res= parseInt(0)

// nonprime = 0
// for( i of num){
//     num1 = parseInt(i)
//     isprime = true

//     if(num1>1){
//         for(j=2;j<num1;j++){
//             if(num1 %j === 0){
//                 isprime = false
//             }
//         }
//     }else{
//         console.log('<1 is not acceptable')
//     }


//     if(isprime){
//         console.log(i)
//     }
//     else{
//        res += num1
//     }

// }
// console.log(res)




// num = "25487987"

// max =  num[0]
// min= num[0]
// for(i=1;i<num.length;i++){

//     if(num[i] > max){
//         max = num[i]
//     }
//     if(num[i] < min){
//         min = num[i]
//     }
   

// }
// console.log(max,min)


// num = "123456"
// console.log(num.split("").reverse().join())

// num = 5 

// // 5*4*3*2*1
// pro = 1
// for(i=1;i<=num;i++){

//     pro *= i

// }
// console.log(pro)


// function Factorial(num){
//     if(num === 0 || num === 1){
//         return 1 
//     }else{
//         return num*Factorial(num-1)
//     }
// }
// console.log(Factorial(5))


//max min occurance of first checking 
// num = "9854"
// max = num[0]
// min = num[0]
// minindex = 0
// maxindex= 0
// for(i=1;i<num.length;i++){
//     if(num[i] > max){
//         max = num[i]
//         maxindex = i
//     }

//     if(num[i] < min){
//         min = num[i]
//         minindex = i
//     }
// }


// console.log(max,min,minindex,maxindex)


// if(minindex > maxindex){
//     console.log("max is first")
// }else{
//     console.log("min is first ")
// }

// sum = 0
// for(i of res){
//      n = parseInt(i)
//      console.log(typeof n ,n)
//     sum += n
// }
// console.log(sum)

// function fibonacci(n) {
//     // Base cases
//     if (n === 0) return 0;
//     if (n === 1) return 1;

//     // Variables to store the previous two Fibonacci numbers
//     let a = 0, b = 1;

//     // Loop from 2 to n, updating the Fibonacci numbers
//     for (let i = 2; i <= n; i++) {
//         let c = a + b;  // Current Fibonacci number
//         a = b;  // Update 'a' to the last Fibonacci number
//         b = c;  // Update 'b' to the current Fibonacci number
//     }

//     return b;  // Return the n-th Fibonacci number
// }

// let n = 6;  // For example
// console.log(fibonacci(n));  // Output: 5

num = 7 
a = 0
b= 1
i = 0
res= []
while(i <= num){
 c =a+b;
 res.push(a)
 a= b
 b=c;
 i++

}
console.log(res)


// function fibonacci(n) {

//     if (n <= 1) {
//         return n;
//     }

//     return fibonacci(n - 1) + fibonacci(n - 2);
// }


// const n = 7;
// console.log(`Fibonacci(${n}) = ${fibonacci(n)}`);

