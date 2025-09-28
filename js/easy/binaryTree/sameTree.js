function treeBDS(root) {
  if (!root) return [];

  const path = [];
  const queue = [];
  queue.push(root);

  while (queue.length > 0) {
    const current = queue.shift();
    if (current === null) {
      path.push(null);
    } else {
      path.push(current.val);
      queue.push(current.left);
      queue.push(current.right);
    }
  }

  return path;
}

function isSameTree(p, q) {
  const path1 = treeBDS(p);
  const path2 = treeBDS(q);

  if (path1.length !== path2.length) return false;

  for (let i = 0; i < path1.length; i++) {
    if (path1[i] !== path2[i]) {
      return false;
    }
  }

  return true;
}
