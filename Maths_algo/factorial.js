// Problem : Given a integer "n", find factorial of numbers;
// factorial(0)=> 1;
// factorial(1)=> 1;

// time complexity for factorial is O[n] due to loops.

function factorial(n) { 
    let result = 1;
    if (n < 2) {
        return result;
    }
    for (let i = 2; i <=n; i++) { 
        result = result * i;
    }
    return result;
}
console.log(factorial(3));