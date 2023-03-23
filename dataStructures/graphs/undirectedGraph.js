// Author: Moisés Adame-Aguilar
// Date: March 23, 2023
// Descrption: Undirected Graph using and Adjacency List.

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