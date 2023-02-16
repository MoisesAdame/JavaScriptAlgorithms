// Author: Moisés Adame-Aguilar
// Date: February 15, 2023
// Descrption: Binary Search Tree.

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

    // Method that returns the max value inside the tree.
    getMax(){
        if(this.root === null){
            throw 'Empty tree.'
        }else{
            return this.#getMax(this.root)
        }
    }
    
    #getMax(root){
        if(root.right !== null){
            return this.#getMax(root.right)
        }else{
            return root.data
        }
    }

    // Method that returns the min value inside the tree.
    getMin(){
        if(this.root === null){
            throw 'Empty tree.'
        }else{
            return this.#getMin(this.root)
        }
    }
    
    #getMin(root){
        if(root.left !== null){
            return this.#getMin(root.left)
        }else{
            return root.data
        }
    }

    // Method that prints the preOrder traversal walk of the Tree.
    preOrder(){
        this.#preOrder(this.root)
    }

    #preOrder(root){
        if(root.left !== null && root.right !== null){
            root.print()
            this.#preOrder(root.left)
            this.#preOrder(root.right)
        }else if(root.left !== null){
            root.print()
            this.#preOrder(root.left)
        }else if(root.right !== null){
            root.print()
            this.#preOrder(root.right)
        }else{
            root.print()
        }
    }

    // Method that prints the inOrder traversal walk of the Tree.
    inOrder(){
        this.#inOrder(this.root)
    }

    #inOrder(root){
        if(root.left !== null && root.right !== null){
            this.#inOrder(root.left)
            root.print()
            this.#inOrder(root.right)
        }else if(root.left !== null){
            this.#inOrder(root.left)
            root.print()
        }else if(root.right !== null){
            root.print()
            this.#inOrder(root.right)
        }else{
            root.print()
        }
    }

    // Method that prints the postOrder traversal walk of the Tree.
    postOrder(){
        this.#postOrder(this.root)
    }

    #postOrder(root){
        if(root.left !== null && root.right !== null){
            this.#postOrder(root.left)
            this.#postOrder(root.right)
            root.print()
        }else if(root.left !== null){
            this.#postOrder(root.left)
            root.print()
        }else if(root.right !== null){
            this.#postOrder(root.right)
            root.print()
        }else{
            root.print()
        }
    }
}