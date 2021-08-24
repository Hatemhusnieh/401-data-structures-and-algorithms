class Vertex {
  constructor(value) {
    this.value = value;
  }
}

class Edge {
  constructor(vertex, weight = 0) {
    this.vertex = vertex;
    this.weight = weight;
  }
}

class Graph {
  constructor() {
    this._adjacencyList = new Map();
  }

  addVertex(vertex) {
    // we need to add the vertex to the adjacency list and set an empty array for the edges
    return this._adjacencyList.set(vertex, []);
  }

  addDirectedEdge(startVertex, endVertex) {
    if (!this._adjacencyList.has(startVertex) || !this._adjacencyList.has(endVertex)) {
      throw new Error('Invalid vertex');
    }
    const adjacencies = this._adjacencyList.get(startVertex);
    adjacencies.push(new Edge(endVertex));
  }

  printAll() {
    for (const [vertex, edge] of this._adjacencyList.entries()) {
      console.log('print-vertex', vertex);
      console.log('print-edge', edge);
    }
  }

  getVertexes() {
    let collection = [];
    for (const [vertex] of this._adjacencyList.entries()) {
      collection.push(vertex);
    }
    return collection;
  }

  getEdges() {
    let collection = [];
    for (const [vartex, edge] of this._adjacencyList.entries()) {
      if (edge.length > 0) {
        if (edge.length > 1) {
          edge.forEach((e, i) => collection.push(`${vartex.value} with ${e.vertex.value}`));
        } else {
          collection.push(`${vartex.value} with ${edge[0].vertex.value}`);
        }
      }
    }
    return collection;
  }

  size() {
    let sum = 0;
    for (const vertex of this._adjacencyList.keys()) {
      sum++;
    }
    return sum;
  }
}

module.exports = { Graph, Vertex };
