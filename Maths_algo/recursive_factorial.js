// recursive factorial ;
// establish a similar porblem wiht smaller version and also a base case;
// factorial(0)=>1;
// factorial(1)=>1;
// factorial(2)=>2*1; => 2*1!
// factorial(3)=>3*2*1 => 3*2!
// factorial(n)=> n * n-1!;


function factorial(n) { 
    if (n < 2) {
        return 1;
    }

    return n*factorial(n-1);
}

console.log(factorial(3));