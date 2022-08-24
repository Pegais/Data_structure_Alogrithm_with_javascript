// virtually we split the array into sorted array and an unsortable array.
// Assume that the first element of the array is sorted.
// select an unsorted element and compare with all elements in sorted array
// if the elements in the sorted array is smaller than the selected element,proceed to next element in the unsorted part
// else, shift the larger element to the right of sorted array.
// insert the selected element at right index.
let arr = [1, 3,-1, 8,24,12]
function InsertSort(array) {
    for (let index = 1; index < array.length; index++) {
        let numberToinsert = array[index];
        let j = index - 1;
        while (j >= 0 && array[j] > numberToinsert) {
            array[j+1] =array[j];
            j = j - 1;
        }
        array[j + 1] = numberToinsert;
    }
    return array;
}

console.log(InsertSort(arr));