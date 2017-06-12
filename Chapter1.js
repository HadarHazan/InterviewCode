//Hash Tables
/*
var studentArr = [
    {id: 123456, name:"Hadar"},
    {id:67890, name:"Gabi"}
]

var getHash = () => {
    for(let i in studentArr){
        console.log('key is: ' + i + ', value is: ' + studentArr[i])
    }
    
    var studentHash = {}
    for (let i in studentArr){
        studentHash[i] = ({key: i, value: studentArr[i]})
    }
    
    console.log(studentHash)
}

//console.log(getHash())

//StringBuffer / StringBuilder
var str = "hello World"
console.log(str)
str = str + "Hadar"
console.log(str)

//Since StringBuilder is a drop-in replacement for StringBuffer without the synchronization, there would not be differences between any examples.
*/

//1.1 Implement an algorithm to determine if a string has all unique characters. 
    //What if you can not use additional data structures?
//var str = "abfcb"

function swap(str, indexA, indexB){
    console.log(str)
    var temp = str[indexB]
    console.log(temp)
    str = str.replace(str[indexB], str[indexA])
    console.log(str)
    str = str.replace(str[indexA], temp)
    console.log(str)
    return (str)
}

var str = "abcd"+ n
console.log(str[3] + ' ' + str[4])
console.log(str)


