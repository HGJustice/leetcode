function levelOrder(root) {
  if (!root) return [];

  const path = [];
  const queue = [];
  queue.push(root);

  while (queue.length > 0) {
    const newLevel = [];
    const currentLevel = queue.length;

    for (let i = 0; i < currentLevel; i++) {
      const current = queue.shift();
      if (current === null) continue;
      newLevel.push(current.val);
      queue.push(current.left);
      queue.push(current.right);
    }
    if (newLevel.length == 0) break;
    path.push(newLevel);
  }
  return path;
}
