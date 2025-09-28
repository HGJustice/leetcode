function bfs(adjList) {
  const numVertices = adjList.length;
  const start = 0;

  const queue = [];
  const path = [];
  const visted = new Array(numVertices).fill(false);

  visted[start] = true;
  queue.push(start);

  while (queue.length > 0) {
    const current = queue.shift();
    path.push(current);

    for (let x of adjList[current]) {
      if (!visted[x]) {
        visted[x] = true;
        queue.push(x);
      }
    }
  }
  return path;
}

let adj = [
  [1, 2],
  [0, 2, 3],
  [0, 4],
  [1, 4],
  [2, 3],
];

let src = 0;
let ans = bfs(adj);
for (let i of ans) {
  console.log(i);
}
