function dfsRecursive(graph, startNode) {
  const visted = new Set();
  const path = [];

  function dfs(node) {
    if (visted.has(node)) {
      return;
    }

    visted.add(node);
    path.push(node);

    console.log(`Visting node ${node}`);

    const neighbours = graph[node];
    for (const neighbour of neighbours) {
      dfs(neighbour);
    }
  }

  dfs(startNode);
  return path;
}

const graph = {
  A: ["B", "C"],
  B: ["D", "E"],
  C: ["F"],
  D: [],
  E: ["F"],
  F: [],
};

console.log(dfsRecursive(graph, "A"));
