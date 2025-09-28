function isSymetric(root) {
  if (!root) return false;

  const queue = [];
  queue.push(root.left);
  queue.push(root.right);

  while (queue.length > 0) {
    const node1 = queue.shift();
    const node2 = queue.shift();

    if (node1 === null && node2 === null) {
      continue;
    }

    if (node1 === null || node2 === null || node1.val !== node2.val) {
      return false;
    }

    queue.push(node1.left);
    queue.push(node2.right);
    queue.push(node1.right);
    queue.push(node2.left);
  }
  return true;
}
