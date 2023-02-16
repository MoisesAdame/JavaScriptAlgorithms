// Author: Moisés Adame-Aguilar
// Date: February 15, 2023
// Descrption: Singly Linked List

// Node class for every element in the LinkedList
class Node{
    // -- Methods
    constructor(data, left, right){
        // -- Atributes
        this.data = data
        this.left = left
        this.right = right
    }

    print(){
        console.log(this.data)
    }
}

class binarySearchTree{
    // -- Methods
    constructor(){
        // -- Atributes
        this.root = null
    }

    // Method that inserts a new node where it should be
    insert(data){
        // Node that is going to be inserted.
        var newNode = new Node(data, null, null)
        if(this.root === null){
            this.root = newNode
        }else{
            this.#insert(this.root, newNode)
        }
    }

    #insert(currNode, newNode){
        if(currNode.data <= newNode.data){
            if(currNode.right === null){
                currNode.right = newNode
            }else{
                this.#insert(currNode.right, newNode)
            }
        }else if(currNode.data > newNode.data){
            if(currNode.left === null){
                currNode.left = newNode
            }else{
                this.#insert(currNode.left, newNode)
            }
        }
    }

    // Method that prints the inTraversal of the Tree
    inTraversal(){
        this.#inTraversal(this.root)
    }

    #inTraversal(root){
        if(root.left !== null && root.right !== null){
            this.#inTraversal(root.left)
            root.print()
            this.#inTraversal(root.right)
        }else if(root.left !== null){
            this.#inTraversal(root.left)
            root.print()
        }else if(root.right !== null){
            root.print()
            this.#inTraversal(root.right)
        }else{
            root.print()
        }
    }
}


var myTree = new binarySearchTree()

myTree.insert(5)
myTree.insert(-6)
myTree.insert(37)
myTree.insert(-7)


myTree.inTraversal()


