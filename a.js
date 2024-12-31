// console.log("greater" > "aellofrgtg")
// console.log("" =true)


function Amstring(arr){
    res = 0
    for(let i of arr){
        len = arr.length
        power = 1
        for(j=0;j<len;j++){
           power *= i
        }
        res += parseInt(power)
    }
    console.log(res)
}

Amstring("407")

function name(arr) {
    let res = 0;
    for (let i of arr) {
        let len = arr.length;
        let power = 1;
        for (let j = 0; j < len; j++) {
            power *= i; // Multiply i len times
        }
        res += parseInt(power);
    }
    console.log(res);

    if (arr === res.toString()) {
        console.log("Armstrong number");
    } else {
        console.log("Not an Armstrong number");
    }
}

name("407")