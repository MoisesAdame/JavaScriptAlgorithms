// Author: Moisés Adame-Aguilar
// Date: February 15, 2023
// Descrption: AVL Tree.

// Node class for every element in the LinkedList
class Node{
    // -- Methods
    constructor(data){
        // -- Atributes
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class AVLTree{
    // -- Methods
    constructor(){
        // -- Atributes
        this.root = null
    }

    // Method that allows the insertion of elements inside the tree.
    insert(data){
        this.root = this.#insert(this.root, data)
    }

    #insert(root, data){
        if(root === null){
            return new Node(data)
        }else{
            if(root.data >= data){
                root.left = this.#insert(root.left, data)
            }else{
                root.right = this.#insert(root.right, data)
            }
        }

        return this.balance(root)
    }

    // Method that calculates the height of a given subtree root.
    height(root){
        if(root === null){
            return 0
        }else if(root.left === null && root.right === null){
            return 1
        }else if(root.right === null){
            return 1 + this.height(root.left)
        }else if(root.left === null){
            return 1 + this.height(root.right)
        }else{
            var leftHeight = this.height(root.left)
            var rightHeight = this.height(root.right)
            if(rightHeight >= leftHeight){
                return 1 + rightHeight
            }else{
                return 1 + leftHeight
            }
        }
    }

    // Method that calculates the balance factor of a given subtree root.
    balanceFactor(root){
        return this.height(root.right) - this.height(root.left)
    }

    // Method that makes a simple right rotation.
    rightRotation(root){
        var topTree = root
        var midTree = topTree.left
        var midTreeRight = topTree.left.right

        topTree.left = midTreeRight
        midTree.right = topTree

        return midTree
    }

    leftRotation(root){
        var topTree = root
        var midTree = topTree.right
        var midTreeLeft = topTree.right.left

        topTree.right = midTreeLeft
        midTree.left = topTree

        return midTree
    }

    balance(root){
        if(this.balanceFactor(root) < -1){
            if(this.balanceFactor(root.left) < 0){
                return this.rightRotation(root)
            }
        }else if(this.balanceFactor(root) > 1){
            if(this.balanceFactor(root.right) > 0){
                return this.leftRotation(root)
            }
        }
        return root
    }
}