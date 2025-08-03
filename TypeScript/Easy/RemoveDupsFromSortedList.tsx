class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val ?? 0;
    this.next = next ?? null;
  }
}

// RunTime: 3ms
// Memory: 58.58MB
/**
 * @Take 1: I came to this solution using a new Set to store unique values and speed up duplicate checks.
 *          This gives us O(n) time complexity, but also O(n) space complexity due to the extra memory used.
 *
 *          In real-world scenarios (e.g., when the input list is unsorted), this solution is more reliable.
 *          However, for this specific LeetCode problem (which assumes a sorted list), it's not optimal.
 */
function deleteDuplicates(head: ListNode | null): ListNode | null {
  if (!head) return null;

  const seen = new Set<number>(); // Enables O(1) duplicate checks
  let current: ListNode | null = head;
  seen.add(current.val);

  while (current.next) {
    if (seen.has(current.next.val)) {
      current.next = current.next.next;
    } else {
      seen.add(current.next.val);
      current = current.next;
    }
  }

  return head;
}

// RunTime: 0ms
// Memory: 58.24MB

/**
 * @Take 2: Best for a sorted input, we use O(n) time complexity and O(1) space complexity, ensuring our execution time is constant.
 */
function deleteDuplicates2(head: ListNode | null): ListNode | null {
  let current = head;

  while (current && current.next) {
    if (current.val === current.next.val) {
      // Skip the duplicate
      current.next = current.next.next;
    } else {
      // Move to next distinct value
      current = current.next;
    }
  }

  return head;
}
