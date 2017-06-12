//Bit Manipulation

//You are given two 32-bit numbers, N and M, and two bit positions, i and j. 
    //Write a method to set all bits between i and j in N equal to M 
    //(e.g., M becomes a substring of N located at i and starting at j).
    // EXAMPLE:
    // Input: N = 10000000000, M = 10101, i = 2, j = 6
    // Output: N = 10001010100
const MsubN = (N, M, i, j) => {
   
    var int_length = (''+ M).length;
    if(int_length ===  j-i){
        M = M * Math.pow(10, i);
    }
    let max = ~0
     
    console.log(max)
} 

MsubN(10000000000, 10101, 2, 6)
