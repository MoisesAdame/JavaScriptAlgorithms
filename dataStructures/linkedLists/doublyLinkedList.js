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

    // Method that returns the max value inside the list.
    max(){
        var maxValue = this.head
        var temp = this.head
        while(temp !== null){
            if(maxValue.data < temp.data){
                maxValue = temp
            }
            temp = temp.next
        }
        return maxValue.data
    }

    // Method that returns the min value inside the list.
    min(){
        var minValue = this.head
        var temp = this.head
        while(temp !== null){
            if(minValue.data > temp.data){
                minValue = temp
            }
            temp = temp.next
        }
        return minValue.data
    }

    // -- SORTING ALGORITHMS
    // Method that sorts the LinkedList using Insertion Sort Algorithm.
    insertionSort(){
        var currentItem = this.head
        var currentMin
        var tempMin
        while(currentItem !== null){
            currentMin = currentItem
            tempMin = currentItem
            while(tempMin !== null){
                if(currentMin.data > tempMin.data){
                    currentMin = tempMin
                }
                tempMin = tempMin.next
            }
            this.#swap(currentItem, currentMin)
            currentItem = currentItem.next
        }
    }

    // Method that sorts the LinkedList using Bubble Sort Algorithm.
    bubbleSort(){
        var currentBubble
        for(var i = this.size; i > 0; i--){
            currentBubble = this.head
            for(var j = 0; j < i - 1; j++){
                if(currentBubble.data > currentBubble.next.data){
                    this.#swap(currentBubble, currentBubble.next)
                }
                currentBubble = currentBubble.next
            }
        }
    }

    // Method that swaps the data between two nodes.
    #swap(node1, node2){
        [node1.data, node2.data] = [node2.data, node1.data]
    }

    // Method that sorts the LinkedList using Counting Sort Algorithm.
    countingSort(){
        // The array is filled up with zeros
        var maxValue = this.max() + 1
        var countingArray = Array(maxValue).fill(0);
        var temp = this.head

        // The values are counted up.
        while(temp !== null){
            countingArray[temp.data] += 1
            temp = temp.next
        }
        
        // Summing up adyacent values.
        for(var i = 1; i < countingArray.length; i++){
            countingArray[i] += countingArray[i - 1]
        }

        // Moving all the values to the right.
        countingArray.pop()
        countingArray = [0].concat(countingArray)

        // Creating the new array.
        this.clear()
        for(var i = 0; i < countingArray.length; i++){
            for(var j = 0; j < (countingArray[i + 1] - countingArray[i]); j++){
                this.addLast(i)
            }
        }
    }

    // -- SEARCHING ALGORITHMS
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

    // Method that searches an element with the binary search algorithm
    // returning it's index.
    binarySearch(target, left, right){
        // If left is bigger than right return an invalid index.
        if(left > right){
            return -1
        }

        // Mid value nad index.
        var midIndex = Math.trunc((right + left) / 2)
        var midValue = this.get(midIndex)

        // Until the target and midValue are the same, the recursion continues.
        if(midValue > target){
            return this.binarySearch(target, left, midIndex - 1)
        }else if(midValue < target){
            return this.binarySearch(target, midIndex + 1, right)
        }else{
            return midIndex
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