// Merge two sorted linked lists and return it as a sorted list. The list should be made by splicing together the nodes of the first two lists.

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

let l2 = new ListNode([1, 2], null);
let l1 = new ListNode([1, 2, 2, 1], l2);

console.log('List', l1);

const mergeTwoLists = function (l1, l2) {
  let merged = l1.concat(l2);
  merged.sort((a, b) => a - b);
  return merged;
};
