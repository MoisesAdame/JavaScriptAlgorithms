// Author: Moisés Adame-Aguilar
// Date: February 16, 2023
// Descrption: Simple Queue.

import { doublyLinkedList } from "../linkedLists/doublyLinkedList.js";

export class queue extends doublyLinkedList{
    // -- Methods
    // Constructor method.
    constructor(){
        super()
    }

    // Method that inserts the specified element into the queue.
    enqueue(value){
        this.addLast(value)
    }

    // Method that returns and removes the head of the queue.
    dequeue(){
        return this.removeFirst()
    }

    // Method that returns the object at the top of the queue without removing it.
    front(){
        if(this.head === null && this.tail === null){
            throw 'Empty queue.'
        }else{
            return this.head.data
        }
    }

    // Method that returns the object at the end of the queue without removing it.
    back(){
        if(this.head === null && this.tail === null){
            throw 'Empty queue.'
        }else{
            return this.tail.data
        }
    }
}