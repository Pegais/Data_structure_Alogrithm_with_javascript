// find cartasian porduct of two sets;
// sample: arr1 =[1,2,3,4] and arr2=[1,2]
// product :[[1,1],[1,2],[2,1],[2,2],[3,1],[3,2],[4,1],[4,2]]

// time-complexity => O[n*m] where n is the arr1.length and m is the arr2.length;
 
const arr1 = [1, 2, 3, 4]
const arr2 =[1,2]
function cartesion_product(arr1, arr2) { 
    let product = [];
    for (let i = 0; i < arr1.length; i++){
        for (let j = 0; j < arr2.length; j++){
            product.push([arr1[i],arr2[j]]);
        }
    }
    return product;
}

console.log(cartesion_product(arr1,arr2));