// Author: Moisés Adame-Aguilar
// Date: March 15, 2023
// Descrption: Red-Black Tree

// Node class for every element in the LinkedList
class Node{
    // -- Methods
    constructor(data, left, right){
        // -- Atributes
        this.data = data
        this.left = left
        this.right = right
        this.color = true // true = red
    }

    print(){
        console.log(this.data)
    }
}

class RBTree{
    constructor(){
        this.root = null
    }

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
}