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

    // Method that inserts a new node where it should be。
    insert(data){
        this.root = this.#insert(this.root, data)
    }

    #insert(root, data){
        if(root === null){
            return new Node(data, null, null)
        }else if(root.data >= data){
            root.left = this.#insert(root.left, data)
        }else if(root.data < data){
            root.right = this.#insert(root.right, data)
        }
        return root
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

    // Method that returns a boolean given a certain value was found or not.
    search(value){
        if(this.root === null){
            throw 'Empty tree.'
        }else{
            return this.#search(value, this.root)
        }
    }

    #search(value, root){
        if(root.data === value){
            return true
        }else if(root.data < value && root.right !== null){
            return this.#search(value, root.right)
        }else if(root.data > value && root.left !== null){
            return this.#search(value, root.left)
        }else{
            return false
        }
    }

    // Method that deletes a given value inside the tree.
    delete(value){
        if(this.root === null){
            throw 'Empty tree.'
        }else if(!this.search(value)){
            throw 'Value not inside tree.'
        }else if(this.root.data === value){
            if(this.root.left === null && this.root.right === null){
                this.root = null
            }else if(this.root.left === null){
                this.root = this.root.right
            }else if(this.root.right === null){
                this.root = this.root.left
            }else{
                var temp = this.root.left
                this.root = this.root.right
                this.#insert(this.root, temp)
            }
        }else{
            this.#delete(value, this.root)
        }
    }

    #delete(value, root){
        var rootLeft = root.left
        var rootRight = root.right
        if(rootLeft !== null){
            if(rootLeft.data === value){
                if(rootLeft.left === null && rootLeft.right === null){
                    root.left = null
                }else if(rootLeft.left === null){
                    root.left = rootLeft.right
                }else if(rootLeft.right === null){
                    root.left = rootLeft.left
                }else{
                    var temp = rootLeft.left
                    root.left = rootLeft.right
                    this.#insert(root.left, temp)
                }
            }else{
                if(root.data > value){
                    this.#delete(value, root.left)
                }else if(root.data < value){
                    this.#delete(value, root.right)
                }
            }
        }else if(rootRight !== null){
            if(rootRight.data === value){
                if(rootRight.left === null && rootRight.right === null){
                    root.right = null
                }else if(rootRight.left === null){
                    root.right = rootRight.right
                }else if(rootRight.right === null){
                    root.right = rootRight.left
                }else{
                    var temp = rootRight.left
                    root.right = rootRight.right
                    this.#insert(root.right, temp)
                }
            }else{
                if(root.data > value){
                    this.#delete(value, root.left)
                }else if(root.data < value){
                    this.#delete(value, root.right)
                }
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