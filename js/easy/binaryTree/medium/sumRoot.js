function sumRoot(root) {
  if (!root) return 0;
  let total = 0;

  function helper(node, numberString = "") {
    if (node === null) return;

    numberString += node.val;
    helper(node.left, numberString);
    helper(node.right, numberString);

    if (node.left === null && node.right === null) {
      total += Number(numberString);
    }
  }
  helper(root);
  return total;
}
