// name = "naveen reddy" 
// const str = name.replace("naveen" , "sreeja")
// str1 = name.substring(0,3)
// str2 = name.split("")
// str2[3] = '1'
// str4 = Object.assign([],name)
// console.log(str4)
// // console.log(str,str1,str2)

for (var i = 0; i < 3; i++) {
    setTimeout(() => console.log(i), 1000);
}
// Output: 3, 3, 3 (because `var i` is function-scoped and shared across iterations)
