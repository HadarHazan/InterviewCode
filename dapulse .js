function solution(A, B) {
    // write your code in JavaScript (Node.js 6.4.0)
    let divided = 1
    let C = 0
    let digit = (''+A).length + (''+B).length 
    if(digit > 8){ return -1}
    while((A >= 1) && (B >= 1)){
        C = C + (((((A%10)>>0) * 10) + ((B%10)>>0)) *divided)
        A = A/10 >> 0
        B = B/10 >> 0
        divided = divided * 100
    }

    if(A >= 1){
        C = C + (((A%10)>>0)) * divided
    } else {
        if(B >= 1){
            C = C + (((B%10)>>0)) * divided
        }   
    }
    
    return(C)
}

let A = 1141256789
let B = 987652456

console.log(solution(A, B))

function solution(A) {
    // write your code in JavaScript (Node.js 6.4.0)
    let swapped
    let count = 0

    do{
        swapped = false
        for(let i = 0; i < A.length; i++){
            if (A[i] > A[i+1]){
                count++
                if(count > 1){ return false}
                swapped = true
                let temp = A[i]
                A[i] = A[i+1]
                A[i+1] = temp
            }
        }
    } while (swapped)   

    if(count === 1) { return true}
    else {return false}
}


function solution(A) {
    // write your code in JavaScript (Node.js 6.4.0)
    let max = 0
    for(let i=0; i < A.length; i++){
        for(let j=0; j < A.length; j++){
            let val = A[i] + A[j] + (i-j)
            if(val > max) {max = val}
        }
    }
    return(max)
}





function solution(A) {
    // write your code in JavaScript (Node.js 6.4.0)
    let swapped
    let count = 0

    do{
        swapped = false
        for(let i = 0; i < A.length; i++){
            if (A[i] > A[i+1]){
                count++
                if(count > 1){ return false}
                swapped = true
                let temp = A[i]
                A[i] = A[i+1]
                A[i+1] = temp
            }
        }
    } while (swapped)   

    return true
    // if(count === 1) { return true}
    // else {return false}
}
