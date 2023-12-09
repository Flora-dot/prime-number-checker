// Function that checks if a number is a Prime number
// This means the number has only 2 factors 1 and itself.


function isPrimeNumber(num) {
    if(num <= 1){
        return false;
    }
    if (num === 2) {
        return true;
      }
    for(let x = 2; x < num; x++){
        if(num % x === 0){
            return false;
        }
    }

    return true;
    
}


console.log(isPrimeNumber(2));
console.log(isPrimeNumber(-1));
console.log(isPrimeNumber(1));
console.log(isPrimeNumber(17));