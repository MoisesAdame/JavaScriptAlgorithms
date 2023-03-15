// Author: Moisés Adame-Aguilar
// Date: March 15, 2023
// Descrption: Hash Table that uses the Chaining Method (an Open Hashing)

import { doublyLinkedList } from "../linkedLists/doublyLinkedList.js";

class ChainingHash{
    // -- Methods
    constructor(size){
        // -- Attributes
        this.size = size
        this.table = []

        // Instantiating the number of LinkedList inside of table
        for(var i = 0; i < size; i++){
            this.table.push(new doublyLinkedList())
        }
    }

    // Method that given a string (key) generates an int using
    // the polynomial rolling hash function.
    #hashFunction(key){
        // Constatnts
        var p = 53;
        var m = 10**9 + 9
        var sum = 0;

        // Main Sum
        for(var i = 0; i < key.length; i++){
            sum += (key.charCodeAt(0) * p ** i ) % m
        }

        return sum % this.size
    }

    // Method that inserts values given a certain key.
    insert(key, data){
        this.table[this.#hashFunction(key)].addLast([key, data])
    }

    // Method that gets a value given a certain key.
    get(key){
        return this.table[this.#hashFunction(key)]
    }
}