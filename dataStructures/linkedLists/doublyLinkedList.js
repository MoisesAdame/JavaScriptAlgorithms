// Author: Moisés Adame-Aguilar
// Date: February 15, 2023
// Descrption: Doubly Linked List

// Node class for every element in the LinkedList
class Node{
    // -- Methods
    constructor(data, prev, next){
        // -- Atributes
        this.data = data
        this.next = next
        this.prev = prev
    }

    print(){
        console.log(this.data)
    }
}

// LinkedList class made up of many interlocked instances of Node
class doublyLikedList{
    // -- Methods
    // Constructor method for the list.
    constructor(){
        this.head = null
        this.tail = null
        this.size = 0
    }

    // Method that appends a value to the List's head.
    addFirst(data){
        if(this.head === null && this.tail === null){
            this.head = new Node(data, null, null)
            this.tail = this.head
        }else{
            this.head = new Node(data, null, this.head)
            this.head.next.prev = this.head
        }
        this.size++
    }

    // Method that appends a value to the List's tail.
    addLast(data){
        if(this.head === null && this.tail === null){
            this.head = new Node(data, null, null)
            this.tail = this.head
        }else{
            this.tail = new Node(data, this.tail, null)
            this.tail.prev.next = this.tail
        }
        this.size++
    }
}
