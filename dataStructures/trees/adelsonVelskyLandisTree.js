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
}