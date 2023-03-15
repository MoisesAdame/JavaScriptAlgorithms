// Author: Moisés Adame-Aguilar
// Date: March 15, 2023
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

    // Method that makes a double right rotation.
    doubleRightRotation(root){
        var topTree = root
        var midTree = topTree.left
        var bottomTree = midTree.right
        var bottomTreeLeft = bottomTree.left
        var bottomTreeRight = bottomTree.right

        midTree.right = bottomTreeLeft
        topTree.left = bottomTreeRight

        bottomTree.left = midTree
        bottomTree.right = topTree

        return bottomTree
    }

    // Method that makes a simple left rotation.
    leftRotation(root){
        var topTree = root
        var midTree = topTree.right
        var midTreeLeft = topTree.right.left

        topTree.right = midTreeLeft
        midTree.left = topTree

        return midTree
    }

    // Method that makes a double left rotation.
    doubleLeftRotation(root){
        var topTree = root
        var midTree = topTree.right
        var bottomTree = midTree.left
        var bottomTreeLeft = bottomTree.left
        var bottomTreeRight = bottomTree.right

        midTree.left = bottomTreeLeft
        topTree.right = bottomTreeRight

        bottomTree.left = topTree
        bottomTree.right = midTree

        return bottomTree
    }

    // Method that given a subtree root, balances the subtree using balanceFactor()
    balance(root){
        if(this.balanceFactor(root) < -1){
            if(this.balanceFactor(root.left) < 0){
                return this.rightRotation(root)
            }else if(this.balanceFactor(root.left) > 0){
                return this.doubleRightRotation(root)
            }
        }else if(this.balanceFactor(root) > 1){
            if(this.balanceFactor(root.right) > 0){
                return this.leftRotation(root)
            }else if(this.balanceFactor(root.right) < 0){
                return this.doubleLeftRotation(root)
            }
        }
        return root
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