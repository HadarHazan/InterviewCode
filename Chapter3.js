//Stacks and Queues

function Stack(){
    this.top = null
    
    this.push = d => {
        var node = {data: d, next: null}
        
        if (this.top === null) {this.top = node}
        else {
            node.next = this.top
            this.top = node
        }
        console.log(this.top)
    }
    
    this.pop = () =>{
        if (this.top === null){ return null}
        else {
            var node = this.top
            this.top = node.next
            return node
        }
    }
    
}

//var stack = new Stack()
//for(var i=1;i<=5;i++){
//    stack.push(i)
//}

//console.log(stack.top)
//console.log(stack.top.next.next.next.data)
//console.log(stack.pop())
//console.log(stack.top)

//export function Queue() {

exports.Queue = function() {
    this.first = null
    this.last = null
    
    this.enqueue = d => {
        var node = {data: d, next: null}
        
        if (this.last === null){ 
            this.first = node
            this.last = node
        }
        else {
            this.last.next = node
            this.last = node
        }
    }
    
    this.dequeue = () => {
        if (this.start === null) { return null}
        else {
            var node = this.first
            this.first = node.next
            return node
        }
    }
}

//var queue = new Queue()
//for(var i=1;i<=5;i++){
//    queue.enqueue(i)
//}
//
//console.log(queue.first)
//console.log(queue.first.next.next.next.data)
//
//console.log(queue.dequeue())
//console.log(queue.first)

