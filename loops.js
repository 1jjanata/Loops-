// For-loop functions

function positiveIntSum(limit){
    let sum = 0;

    for (let i = 1; i <= limit;i++){
        sum = sum + i;
    }
    return sum;

}


function additionPatternSum(start, diff, limit){
let sum = start; 
for(let k=o;k<limit; k++)
sum = sum + diff*k;
}




// While-loop function

function multiplicationPatternSum(start, factor, max){
let k = 1; 
let sum = start;
while(k<=max){
    sum = sum + factor * k;
    k = factor*k;
}

}





//Later copy paste the checking code below here.
console.log(positiveIntSum(2000000))
