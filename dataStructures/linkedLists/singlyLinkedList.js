// Author: Moisés Adame-Aguilar
// Date: February 15, 2023
// Descrption: Singly Linked List

// Node class for every element in the LinkedList
class Node{
    // -- Methods
    constructor(data, next){
        // -- Atributes
        this.data = data
        this.next = next
    }

    print(){
        console.log(this.data)
    }
}

// LinkedList class made up of many interlocked instances of Node
class singlyLinkedList{
    // -- Methods
    constructor(){
        // -- Atributes
        this.head = null
        this.size = 0
    }

    // Method that appends a value to the List's head.
    addFirst(data){
        if(this.head === null){
            this.head = new Node(data, null)
        }else{
            this.head = new Node(data, this.head)
        }
        this.size++
    }

    // Method that appends a value to the List's tail.
    addLast(data){
        if(this.head === null){
            this.head = new Node(data, null)
        }else{
            var temp = this.head
            while(temp.next !== null){
                temp = temp.next
            }
            
            temp.next = new Node(data, null)
        }

        this.size++
    }

    // Method that inserts a given value in a given position.
    insert(data, index){
        if(index === 0){
            this.addFirst(data)
        }else if(index === this.size){
            this.addLast(data)
        }else{
            var temp = this.head
            for(var i = 0; i < index - 1; i++){
                temp = temp.next
            }

            temp.next = new Node(data, temp.next)
        }
        this.size++
    }

    // Method that removes the first element in the LinkedList.
    removeFirst(){
        if(this.head === null){
            throw 'The list is empty.'
        }else{
            this.head = this.head.next
        }
        this.size--
    }

    // Method that prints each and every data atribute from the list's nodes.
    print(){
        var temp = this.head
        while(temp !== null){
            temp.print()
            temp = temp.next
        }
    }
}

var myList1 = new singlyLinkedList();
for(var i = 0; i < 10; i++){
    myList1.addLast(i)
}

myList1.removeFirst()

myList1.print()