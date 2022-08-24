// Problem : given a number 'n',find the first elements of the fibonacci sequence.
// fibonacci(2)=[0,1]

// time complexity for  fibonacci sequence with for loop is O[n]

function fibonacci(n) {
let result =[0,1]
   for (let index = 2; index <=n; index++) {
    result[index] = result[index-1] +result[index-2]
    
    }
    return result;
}
console.log(fibonacci(4));