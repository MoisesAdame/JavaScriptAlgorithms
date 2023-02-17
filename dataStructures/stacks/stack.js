// Author: Moisés Adame-Aguilar
// Date: February 16, 2023
// Descrption: Simple Stack.

import { doublyLinkedList } from "../linkedLists/doublyLinkedList.js";

class stack extends doublyLinkedList{
    // -- Methods
    // Constructor method.
    constructor(){
        super()
    }

    // Method that adds an element to the top of the stack.
    push(value){
        this.addFirst(value)
    }

    // Method that removes an element to the top of the stack.
    pop(){
        return this.removeFirst()
    }

    // Method that returns the object at the top of the stack without removing it.
    peek(){
        if(this.head === null && this.tail === null){
            throw 'Empty stack.'
        }else{
            return this.head.data
        }
    }

    // Method that removes all objects from the stack.
    clear(){
        this.head = null
        this.tail = null
        this.size = 0
    }
}