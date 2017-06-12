//Linked List
var node1={ 
 data:"data1", 
 next:null 
};

var node2={ 
 data:"data2", 
 next:null 
};

var arr = ["1", "2","2", "3", "1"]
var list=null//new List()

//function List(){
//    this.start=null
//    this.end=null
//    
//    this.add=function (data){
//        if(this.start===null){ 
//            this.start=makeNode()
//            this.end=this.start
//     }
//        else{ 
//            this.end.next=makeNode()
//            this.end=this.end.next
//        }
//        this.end.data = data
//    }
//    
//    makeNode = () => {
//        return {data:null,next:null};
//    }
//}
//
//for(var i=1;i<=10;i++){ 
// list.add(arr[i])
//}
    
var creatLinkedList = () => {
    for (let i in arr){
        var node = {
            data: arr[i],
            next: null
        }
        //console.log(list)
        //console.log(node.data)
        if (list === null){
            list = node
            //console.log (list.data)
        }
        else{
            var temp = list
            while(temp.next !== null) { temp = temp.next}
            temp.next = node
            //console.log (list)
        }
    }
}

var deletingNode = (data) => {
    var node = list
    if (node.data === data){
        list = list.next
    }
        
    while (node.next !== null){
        if(node.next.data === data){
            if(node.next.next === null){node.next = null}
            else {node.next = node.next.next}
        }
        node = node.next      
    }
}


creatLinkedList();
//deletingNode("data2");
console.log(arr)
console.log(list)

//2.1 Write code to remove duplicates from an unsorted linked list.
    //FOLLOW UP
    //How would you solve this problem if a temporary buffer is not allowed?

var checkDup = (head) => {
    while (head != null){
        var current = head
        var runner = current.next
        while (runner != null){
            if(runner.data === head.data){
                current.next = runner.next
                runner = current.next
            }
            else {
                current = runner
                runner = current.next
            }
            
        }
        head = head.next
    }
}

checkDup(list)
console.log(list)