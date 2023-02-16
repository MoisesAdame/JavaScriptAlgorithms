// Author: Moisés Adame-Aguilar
// Date: February 16, 2023
// Descrption: Adelson-Velsky and Landis Tree

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

class AVLTree{
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
        this.#checkBalance(this.root)
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

    // Method that calculates the height of a given subtree.
    height(){
        return this.#height(this.root)
    }

    #height(root){
        if(root === null){
            return 0
        }else if(root.left === null && root.right === null){
            return 1
        }else if(root.left === null){
            return 1 + this.#height(root.right)
        }else if(root.right === null){
            return 1 + this.#height(root.left)
        }else{
            var leftHeight = this.#height(root.left)
            var rightHeight = this.#height(root.right)

            return 1 + (leftHeight >= rightHeight ? leftHeight : rightHeight)
        }
    }

    // Method that calculates the height of a given node.
    #balanceFactor(node){
        return this.#height(node.right) - this.#height(node.left)
    }

    // Method that checks if the AVLTree is balanced.
    #checkBalance(root){
        var balanceFactor = this.#balanceFactor(root)
        if(root.left !== null && root.right !== null){
            this.#checkBalance(root.left)
            if(balanceFactor > 1 || balanceFactor < -1 ){
                ;
            }
            this.#checkBalance(root.right)
        }else if(root.left !== null){
            this.#checkBalance(root.left)
            if(balanceFactor > 1 || balanceFactor < -1 ){
                ;
            }
        }else if(root.right !== null){
            if(balanceFactor > 1 || balanceFactor < -1 ){
                ;
            }
            this.#checkBalance(root.right)
        }else{
            if(balanceFactor > 1 || balanceFactor < -1 ){
                ;
            }
        }
    }

    // Method that prints the preOrder traversal walk of the Tree.
    preOrder(){
        if(this.root === null){
            throw 'Empty tree.'
        }else{
            this.#preOrder(this.root)
        }
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
        if(this.root === null){
            throw 'Empty tree.'
        }else{
            this.#inOrder(this.root)
        }
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
        if(this.root === null){
            throw 'Empty tree.'
        }else{
            this.#postOrder(this.root)
        }
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