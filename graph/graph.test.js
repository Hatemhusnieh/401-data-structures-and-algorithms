const Graph = require('./index').Graph;
const Vertex = require('./index').Vertex;

describe('Graph', () => {
  test('should instantiate a new graph', () => {
    const graph = new Graph();
    expect(graph).toBeDefined();
  });

  test('should add new vertex to a graph', () => {
    const graph = new Graph();
    const ten = new Vertex(10);
    graph.addVertex(ten);
    expect(graph.getVertexes()).toEqual([{ 'value': 10 }]);
  });

  test('should add an edge between two vertexes', () => {
    const graph = new Graph();
    const ten = new Vertex(10);
    const two = new Vertex(2);
    graph.addVertex(ten);
    graph.addVertex(two);
    graph.addDirectedEdge(ten, two);
    expect(graph.getEdges()).toEqual(['10 with 2']);
  });

  test('should calculate the size of the graph', () => {
    const graph = new Graph();

    const ten = new Vertex(10);
    const two = new Vertex(2);
    const six = new Vertex(6);
    const four = new Vertex(4);

    graph.addVertex(ten);
    graph.addVertex(two);
    graph.addVertex(six);
    graph.addVertex(four);

    graph.addDirectedEdge(ten, two);
    graph.addDirectedEdge(ten, six);
    graph.addDirectedEdge(two, six);
    graph.addDirectedEdge(two, four);
    graph.addDirectedEdge(six, four);

    expect(graph.size()).toBe(4);
  });
});
