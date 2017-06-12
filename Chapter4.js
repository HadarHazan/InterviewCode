//Trees and Graphs
//
//(a) Inorder (Left, Root, Right) : 4 2 5 1 3
//(b) Preorder (Root, Left, Right) : 1 2 4 5 3
//(c) Postorder (Left, Right, Root) : 4 5 2 3 1
//
//Breadth First or Level Order Traversal : 1 2 3 4 5

const myModule = require('./Chapter3');

function Node(data) {
    this.data = data;
    this.parent = null;
    this.children = [];
}

function Tree(data) {
    var node = new Node(data);
    this._root = node

    this.traverseDF = (callback) =>{
         // this is a recurse and immediately-invoking function 
        (function recurse(currentNode) {
            // step 2
            for (var i = 0, length = currentNode.children.length; i < length; i++) {
                // step 3
                // console.log(currentNode.node.val)
                // console.log(currentNode.children[i].node.valu)
                if (currentNode.children[i] != undefined){recurse(currentNode.children[i]);}
            }
            // step 4
            callback(currentNode);
         
            // step 1
        })(this._root);
    }
    
    this.traverseBF = (callback) =>{
        var queue = new myModule.Queue();
        
        console.log(queue)
        queue.enqueue(this._root);
        console.log(tree._root.children[0])
        console.log(queue.first)
        currentTree = queue.dequeue();
        console.log(currentTree.children[0]) 
        while(currentTree){
            for (var i = 0, length = currentTree.children.length; i < length; i++) {
                queue.enqueue(currentTree.children[i]);
            }

            callback(currentTree);
            currentTree = queue.dequeue();
        } 
    }
    
    this.traversePreOrder = (callback) =>{
        // this is a recurse and immediately-invoking function 
        (function recurse(currentNode) {
            callback(currentNode);
            if (currentNode !== undefined){
            for (var i = 0, length = currentNode.children.length; i < length; i++) {
                recurse(currentNode.children[i]);
            }
        }
        })(this._root);
    }
    
    this.contains = (data, traversal) =>{
        
    }
    
    this.add = (child, parent) =>{
        
    }
    
    this.remove = (child, parent) =>{
        
    }
}

var tree = new Tree('1')
 
tree._root.children.push(new Node('2'));
tree._root.children[0].parent = tree;
 
tree._root.children.push(new Node('3'));
tree._root.children[1].parent = tree;
 
tree._root.children[0].children.push(new Node('4'));
tree._root.children[0].children[0].parent = tree._root.children[0];
 
tree._root.children[0].children.push(new Node('5'));
tree._root.children[0].children[1].parent = tree._root.children[0];

/*
creates this tree
 1
 ├── 2
 │   ├── 4
 │   └── 5
 ├── 3
*/
//var count = 0
// tree.traverseDF(function (node){
//     console.log(node.data)
// })
//Postorder (Left, Right, Root) : 4 5 2 3 1

// tree.traversePreOrder(function(node) {
//    console.log(node.data)
// });
//Preorder (Root, Left, Right) : 1 2 4 5 3

// tree.traverseBF(function(node) {
//     console.log(node.data)
// });

const isBalancedTree2 = (tree1) => {
    if(tree1.children.length === 0){ return {isBalanced: true, height:0}}
    let total
    if(tree1.children.length === 1){
        total = -1
    } else {
        total = 0
    }
    
    let max = 0

    for (var i = 0, length = tree1.children.length; i < length; i++){
        let res = isBalancedTree2(tree1.children[i])
        if(!res.isBalanced){return{isBalanced: false}}
        total = Math.abs(total - res.height)
        if(max < res.height) {max = res.height}
    }

    if(total > 1) {return {isBalanced: false}}
    return {
        isBalanced: true,
        height: max + 1
    }
}

console.log(isBalancedTree2(tree._root))