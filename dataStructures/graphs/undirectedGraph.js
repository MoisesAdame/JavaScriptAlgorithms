// Author: Moisés Adame-Aguilar
// Date: March 23, 2023
// Descrption: Undirected Graph using and Adjacency List.

import { queue } from "../queues/queue";

class uGraph{
    // -- Methods
    // Contructor method for and Undirected Graph using and Adjacency List.
    constructor(){
        // -- Atributes
        this.adjacencyList = {}
    }

    // Method that adds a new vertex.
    addVertex(data){
        if(Object.keys(this.adjacencyList).includes(data)){
            throw 'Unable to store existing vertex.'
        }else{
            this.adjacencyList[data] = []
        }
    }

    // Method that adds a new edge.
    addEdge(vertex1, vertex2){
        if(this.adjacencyList[vertex1].includes(vertex2) && this.adjacencyList[vertex2].includes(vertex1)){
            throw 'Unable to store existing edge.'
        }else{
            this.adjacencyList[vertex1].push(vertex2)
            this.adjacencyList[vertex2].push(vertex1)
        }
    }

    // Method that removes a vertex and all the vertices related to it.
    removeVertex(data){
        if(!Object.keys(this.adjacencyList).includes(data)){
            throw 'Unable to delete a non existing vertex.'
        }else{
            var relatedVertices = this.adjacencyList[data]
            for(var vertices of relatedVertices){
                var deleteIndex = this.adjacencyList[vertices].indexOf(data)
                this.adjacencyList[vertices].splice(deleteIndex, 1)
            }
            delete this.adjacencyList[data]
        }
    }

    // Method that reoves an edge between two vertices.
    removeEdge(vertex1, vertex2){
        var deleteIndex = this.adjacencyList[vertex1].indexOf(vertex2)
        this.adjacencyList[vertex1].splice(deleteIndex, 1)

        deleteIndex = this.adjacencyList[vertex2].indexOf(vertex1)
        this.adjacencyList[vertex2].splice(deleteIndex, 1)
    }

    // Method that prints every vertex and it's neighbours.
    print(){
        var keys = Object.keys(this.adjacencyList)
        var result
        for(var key of keys){
            result = ''
            result += key + ' -> '
            for(var neighbour of this.adjacencyList[key]){
                result += neighbour + ', '
            }
            console.log(result)
        }
    }
}

var myGraph = new uGraph()
myGraph.addVertex('A')
myGraph.addVertex('B')
myGraph.addVertex('C')
myGraph.addVertex('D')
myGraph.addVertex('E')
myGraph.addVertex('F')

myGraph.addEdge('A', 'B')
myGraph.addEdge('A', 'C')
myGraph.addEdge('A', 'F')
myGraph.addEdge('A', 'E')
myGraph.addEdge('D', 'B')
myGraph.addEdge('F', 'C')

myGraph.print()