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
export class doublyLinkedList{
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

    // Method that inserts a given value in a given position.
    insert(data, index){
        if(index < 0 || index > this.size){
            throw 'Index out of bounds.'
        }else if(index === 0){
            this.addFirst(data)
        }else if(index === this.size){
            this.addLast(data)
        }else{
            var temp = this.head
            for(var i = 0; i < index - 1; i++){
                temp = temp.next
            }

            temp.next = new Node(data, temp, temp.next)
        }
        this.size++
    }

    // Method that returns data given a node.
    get(index){
        // Checking that the index is valid
        if(index < 0 || index >= this.size){
            throw 'Index out of bounds.'
        
        // Optimizing the search starting from the head.
        }else if(index <= this.size / 2){
            var temp = this.head
            for(var i = 0; i < index; i++){
                temp = temp.next
            }

            return temp.data

        // Optimizing the search starting from the tail.
        }else{
            var temp = this.tail
            for(var i = this.size - 1; i > index; i--){
                temp = temp.prev
            }

            return temp.data
        }
    }

    // Method that searches an element with the linear search algorithm
    // returning it's index.
    linearSearch(data){
        var temp = this.head
        for(var i = 0; i <= this.size; i++){
            if(temp === null){
                return -1
            }else if(temp.data == data){
                return i
            }
            temp = temp.next
        }
    }

    // Method that removes the first element in the LinkedList.
    removeFirst(){
        var returnValue
        if(this.head === null && this.tail === null){
            throw 'The list is empty.'
        }else if(this.size === 1){
            returnValue = this.head.data
            this.head = null
            this.tail = null
        }else{
            returnValue = this.head.data
            this.head.next.prev = null
            this.head = this.head.next
        }
        this.size--
        return returnValue
    }

    // Method that removes the first element in the LinkedList.
    removeLast(){
        var returnValue
        if(this.head === null && this.tail === null){
            throw 'The list is empty.'
        }else if(this.size === 1){
            returnValue = this.tail.data
            this.head = null
            this.tail = null
        }else{
            returnValue = this.tail.data
            this.tail.prev.next = null
            this.tail = this.tail.prev
        }
        this.size--
        return returnValue
    }

    // Method that prints each and every data atribute from the list's nodes.
    print(){
        var temp = this.head
        while(temp !== null){
            temp.print()
            temp = temp.next
        }
    }

    // Method that removes all objects from the list.
    clear(){
        this.head = null
        this.tail = null
        this.size = 0
    }
}