// Sorting and Searching

// var array = []

// for (var i = 0; i < 5; i++){
//     array[i] = parseInt(((Math.random()*100) +1).toString())
// }
// console.log(array)

// buckets sort
/*
var bucketsSize = 100
var buckets = new Array(bucketsSize)
for (i = 0; i < buckets.length; i++) {
    buckets[i] = []
  }

  array.forEach(function (currentVal) {
  	buckets[currentVal].push(currentVal);
  })

 array.length = 0
 buckets.forEach(function (currentVal) {
     if(currentVal.length > 0){
         array.push(currentVal)
     }
 })
*/
 

//Bubble Sort
/*
var swapped
do{
    swapped = false
    for(var i = 0; i < array.length; i++){
        if (array[i] > array[i+1]){
            var temp = array[i]
            array[i] = array[i+1]
            array[i+1] = temp
            swapped = true
        }
    }
} while (swapped)
*/

//Selection Sort
/*
var minPossition = 0
do{
    for(i=minPossition+1; i<array.length; i++){
        if(array[i] < array[minPossition]){
            var temp = array[i]
            array[i] = array[minPossition]
            array[minPossition] = temp
        }
    }
    minPossition ++
}while (minPossition < array.length)
*/

//Merge Sort

// var sortList = []
// for(i=0; i<array.length; i = i+2){
//     if(array[i] < array[i+1]){
//         //var item = [array[i], array[i+1]]
//         sortList.push([array[i], array[i+1]])
//     }
//     else{
//         sortList.push([array[i+1], array[i]])
//     }
// }
// for(i=sortList.length-2; i>=0; i= i-2){
//     console.log(i)
//     var a = 0
//     var b = 0
//     var item = []
//     do{
//         if(sortList[i][a] < sortList[i+1][b]){
//             item.push(sortList[i][a])
//             a++
//             //console.log('a= ' + a + ' ' + item + 'length = ' + sortList[i].length)
//             if (a === sortList[i].length){
//                 for (j=b; j< sortList[i+1].length; j++){
//                     item.push(sortList[i+1][j])       
//                 }
//             }
//         }
//         else{
//             item.push(sortList[i+1][b])
//             b++
//             //console.log('b = '+ b + ' ' + item + 'length = ' + sortList[i+1].length)
//             if (b === sortList[i+1].length){
//                 for (j=a; j< sortList[i].length; j++){
//                     item.push(sortList[i][j])       
//                 }
//             }
//         }

        
//     }while ((a < sortList[i].length) && (b < sortList[i+1].length))
// console.log(sortList + 'i = ' + i)
// sortList.pop(i)
// console.log(sortList)
// sortList.pop(i+1)
// console.log(sortList)
// sortList.push(item)

//     console.log(sortList)
// }

//9.1 You are given two sorted arrays, A and B, and A has a large enough buffer at the end to hold B. 
    //Write a method to merge B into A in sorted order.
/*    
const A = ["1", "3", "5", "7"]
const B = ["2", "1", "6", "5", "4"]

console.log(merge (mergeSort(A), mergeSort(B)))

function mergeSort(array)
{
    if (array.length < 2)
        return array;
 
    var middle = parseInt(array.length / 2);
    var left   = array.slice(0, middle);
    var right  = array.slice(middle, array.length);
 
    return merge(mergeSort(left), mergeSort(right));
}
 
function merge(left, right)
{
    var result = [];
 
    while (left.length && right.length) {
        if (left[0] <= right[0]) {
            result.push(left.shift());
        } else {
            result.push(right.shift());
        }
    }
 
    while (left.length)
        result.push(left.shift());
 
    while (right.length)
        result.push(right.shift());
 
    return result;
}
*/

//console.log(mergeSort(array))

/*
//Quick Sort
function swap(items, firstIndex, secondIndex){
    var temp = items[firstIndex];
    items[firstIndex] = items[secondIndex];
    items[secondIndex] = temp;
}

function partition(items, left, right) {
    var pivot   = items[Math.floor((right + left) / 2)],
        i       = left,
        j       = right;
    while (i <= j) {
        while (items[i] < pivot) {
            i++;
        }
        while (items[j] > pivot) {
            j--;
        }
        if (i <= j) {
            swap(items, i, j);
            i++;
            j--;
        }
    }
    return i;
}

function quickSort(array, first, last){
    var p;

    if (array.length > 1) {
        p = partition(array, first, last);
        if (first < p - 1) {
                quickSort(array, first, p - 1);
            }
        if (p < last) {
            quickSort(array, p, last);
        }

        return (array)
    }
}

console.log(quickSort(array, 0, array.length-1))

//console.log(array)
*/

//9.2 Write a method to sort an array of strings so that all the anagrams are next to each other.

let array = ["abcd", "ad","abdc", "jftu"]
let array2 = []
const bucketsSize = 30

array.forEach(function (currentVal) {
    let buckets = new Array(bucketsSize)
    for (i = 0; i < buckets.length; i++) {
        buckets[i] = []
    }
    for (i = 0; i < currentVal.length; i++) {
        let n = currentVal.charCodeAt(i)-97
        buckets[n].push(currentVal[i])  
    }
    let str = ''
    buckets.forEach(function (currentVal) {
         if(currentVal.length > 0){
             str = str + currentVal
         }
    })
    array2.push(str)
})

array = []
console.log(array2)
while (array2.length){
    let currentVal = array2.pop()
    array.push(currentVal)
    for (i=0; i<array2.length; i++){
        if(currentVal === array2[i]){
            array.push(currentVal) 
            array2.splice(i, 1)        
        }
    }
}

console.log(array)
