// num = 100
// for(i=0;i<=num;i++){
//     if(i % 3 === 0 && i % 5 === 0){
//         console.log("fizz + buzz")
//     }
//     else if(i % 5 === 0){
//        console.log("buzz")
//     }
//     else if(i % 3 === 0){
//         console.log("fizz")
//     }
//     else{
//         console.log(i)
//     }
// }

// arr = [2, 5, 3, 9,1, 2]

// max = arr[0]
// min = arr[0]

// minindex = 0
// maxindex= 0
// for(i=0;i<arr.length;i++){

//     if(arr[i] > max){
//         max = arr[i]
//         maxindex = i
//     }else if(arr[i] < min){
//         min = arr[i]
//         minindex = i
//     }

// }
// console.log(max,min)
// console.log(minindex,maxindex)

// if(minindex > maxindex){
//     console.log("max is first")
// }else{
//     console.log('min is first')
// }

// arr =[1, 2, 2, 3, 4, 4, 5]
// unique = []
// dup = []
// for(i=0;i<arr.length;i++){
//     isduplicate = true                   // 1
//     for(j=i+1;j<arr.length;j++){
//         if(arr[i] === arr[j]){
//             isduplucate =  false;
//             dup.push(arr[i])
//         }

//     }

//     if(isduplicate && !unique.includes(arr[i])){
//         unique.push(arr[i])
//     }

// }

// console.log(unique,dup)

str = "naveen reddy";
vowles = "aeiou";
vow = 0;
res = "";
// for(i of str){
//     if(vowles.includes(i)){
//          vow++
//          res +=  " " + i
//     }
// }
// console.log(vow,res)

// for(i of str){
//     for(j of vowles){
//         if(i === j) {
//             vow++
//             res += " " + i
//         }
//     }
// }
// console.log(vow,res)

// function Factorial(n){
//     num = 1
//     for(i=1;i<=n;i++){
//         num *= i
//     }
//     console.log(num)
// }

// Factorial(3)

// function Factorial(n){

//     if(n === 1 || n === 0 ){
//         return 1
//     }
//     else{
//          return n * Factorial(n-1)
//     }

// }

// console.log(Factorial(5))

// function Anagram(str2,str1){
//     let sortedStr1 = str1.toLowerCase().split("").sort().join("");
//     let sortedStr2 = str2.toLowerCase().split("").sort().join("");
//     console.log(sortedStr1,sortedStr2)
//     if(sortedStr1 === sortedStr2){
//         console.log("anagaram")
//     }else{
//         console.log("not anagram")
//     }
// }

// Anagram("listen","Silent")

// function Palindrome(str){
//     revstr = str.split("").reverse().join("")
//     console.log(revstr)
//     if(str === revstr){
//         console.log("palindrome")
//     }else{
//         console.log("not palindrome")
//     }
// }

// Palindrome("madam")

// arr = [1, [2, [3, 4]], 5]

// console.log(arr.flat(2))

// function Target(n,t){

//     for(i=0;i<n.length;i++){

//         for(j=i+1;j<n.length;j++){

//             if(n[i]+n[j] === t){
//                return [i,j]
//             }
//         }
//     }
//     return null;
// }

// console.log(Target([1,2,4,5,9,11],5))

// num = 5
// a= 0
// b=1
// i =0
// res = ""
// // while(i < num){
// //     c= a+b
// //     res += " " + a
// //     a=b
// //     b=c

// //     i++

// // }
// // console.log(res)

// for(i=0;i<num;i++){
//     c= a+b
//     res += " " + a
//     a=b
//     b=c
// }
// console.log(res)

// arr = ["{","}","[","]","(",")"]

// input = "{[/]}"
// for(let i of input){

//     if(arr.includes(i)){
//         console.log(i)
//     }
// }

// const arr = [1,2,5,4,8,7]

// n= arr.length
// for(i=0;i<n;i++){
//     for(j=i+1;j<n;j++){

//         if(arr[i] > arr[j]){

//             let temp  =arr[i]
//             arr[i] = arr[i+1]
//             arr[i+1] =temp
//         }
//     }
// }

// console.log(arr)

// class Basket{
//     constructor(array,array2){
//         this.array = array
//         this.array2 = array2
//     }

//     add(){
//       const   arr = []
//       console.log("hello")
//     }

// }

// bas = new Basket([1,2],[3,4])
// console.log(bas.add())
// //

// function Medain(a,b){
//  c = a.concat(b)
//  med =Math.floor( c.length/2)
//  console.log(med + "hello")

//   if(c.length % 2 !==0){
//     return c[med]
//   }else{
//     return c[med-1]+c[med]
//   }

// }
// console.log(Medain([1,2],[3]))

// function Medain(nums1, nums2) {
//   num = nums1.concat(nums2)
//   med =  Math.floor(num.length / 2)
//   console.log(med + 'hello')

//   if(num.length % 2 !== 0){
//    return  num[med]
//   }else{
//    return  (num[med-1]+num[med]) / 2
//   }
// };
// console.log(Medain([1,2],[3]))

// function Sum(nums) {
//   // nums = num.sort((a, b) => a - b)
//   // console.log(nums)
//  let  a = [];
//   for (i = 0; i < nums.length; i++) {
//     for (j = i + 1; j < nums.length; j++) {
//       for (k = j + 1; k < nums.length; k++) {
//         if (nums[i] + nums[j ]+ nums[k] === 0) {
//          if(a.length < 2){
//           a.push([nums[i], nums[j], nums[k]]);
//          }
//         }
//       }
//     }
//   }
//   return a;
// }

// console.log(Sum([-1, 0, 1, 2, -1, -4]));


function Sum( nums1, nums2) {
  num = nums1.concat(nums2).sort((a,b)=> (a-b))
  med =  Math.floor(num.length / 2)
  console.log(med,num)

  if(num.length % 2 !== 0){
   return  num[med]
  }else{
   return  num[med-1]+num[med] / 2
  }


};

console.log(Sum([1,2,3,4,5],[6,7,8,9,10,11,12,13,14,15,16,17]))
