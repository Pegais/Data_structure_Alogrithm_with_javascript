// problem : Given a positive integer value "n",determine if the number is a power of 2;
// isPowerOfTwo(1) = true = 2^0=>1;
// isPowerOfTwo(2) = true = 2^1=>2;

function isPowerOfTwo(value) { 
    if (value < 1) {
        return false;
    }
    while (value > 1) {
        if (value % 2 !== 0) { 
            return false;
        }
        value /= 2;
    }
    return true;
}

console.log(isPowerOfTwo(5));