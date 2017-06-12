// Recursion

//8.1 - Write a method to generate the nth Fibonacci number.
/*
var n = 8
var fibonacciNum = n => {
    if (n===0){ return 0 }
    if (n===1){ return 1 }
    if (n > 1){
        return fibonacciNum(n-1) + fibonacciNum(n-2)
    }
}

console.log(fibonacciNum(n))
*/

//8.2 Imagine a robot sitting on the upper left hand corner of an NxN grid. 
    //The robot can only move in two directions: right and down. 
    //How many possible paths are there for the robot?

// let X = 3
// let Y = 3
let count = 0
const N = 4
const countSteps = (x, y, count) => {
    if ((x===N) || (y===N)){ return count+1}
    
    return((countSteps(x, y+1, count))+ (countSteps(x+1, y, count)))
}

console.log(countSteps(1, 1, count))