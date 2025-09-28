function maxDepth(root) {
  if (!root) return 0;

  let leftSide = maxDepth(root.left);
  let rightSide = maxDepth(root.right);

  return Math.max(rightSide, leftSide) + 1;
}
