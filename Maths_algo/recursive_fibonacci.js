// fibonacci with recursion;
// establish a base case for the recursion : 0,1 first 2 of fibanacci sequence;
// establish a smaller version of the same problem;
// f(2) =f(1) +f(0)
// where f(1) => 1 and f(0) => 0
function fibonacci(n) {
    if (n < 2) {
        return n;
    }
    return fibonacci(n - 1)+fibonacci(n-2);
}

console.log(fibonacci(3));


// time complexity is O[n] => liner runtime complexity.