let array = [1, 2, 3, 19, 45, 67];


function recursive_binary_search(arr, target,start=0,end=null) { 
    if (end == null) {
        end = arr.length - 1;
    }
    if (start > end) {
        return -1;
    }
    let mid = Math.floor((start + end) / 2);
    if (target === arr[mid]) {
        return mid;
    }
    else if (target <arr[mid]) { 
       return binarySearch(arr, target, start,mid-1)
    }
    else if (target >arr[mid]) { 
       return binarySearch(arr, target,mid+1,end)
    }
}


console.log(recursive_binary_search(array,3));