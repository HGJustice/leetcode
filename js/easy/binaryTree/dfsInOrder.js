function inOrder(root) {
  if (!root) return [];

  const path = [];

  function helper(node) {
    if (node === null) return;
    helper(node.left);
    path.push(node.val);
    helper(node.right);
  }
  helper(root);
  return path;
}
