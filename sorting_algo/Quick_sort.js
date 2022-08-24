// quick sort uses the pivot method to sort;
// pivot can be either the last element or the first element in the array or mid poin t of array;
// compare the elements of the array to the pivot element and the lesser element to the pivot element push it
// to left subarray and the greater element to the right subarray.
// than combine the left arrray and the pivot element and the reigth array elememtn to form sorted  array.


// we will use recursion to repeat the process until we reach the end with array of length 1;
// array.length <2 will be our base case for recursion;


// /time complexity for quick sort  => worst case=>O[n^2]=>quadratic runtime;
// the worst case happends when the array is sorted;

// Average case=> O[n logn]=> n=>linear runtime for loop and logn => because we devide the array into smaller array.

let arr = [1, 3, -1, 8]
function quickSort(arr) {
    if (arr.length < 2) { 
        return arr;
    }
    let pivot = arr[arr.length - 1];
    let leftArr = [];
    let rightArr = [];
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] < pivot) {
            leftArr.push(arr[i]);
        } else {
            rightArr.push(arr[i]);
        }

    }
  return [...quickSort(leftArr),pivot, ...quickSort(rightArr)];
}

console.log(quickSort(arr));