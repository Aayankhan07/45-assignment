## 2024-05-24 - Array.prototype.some() in loops
**Learning:** Checking for elements in an array using `.some()` or `.includes()` inside a loop (like `forEach`) results in O(N*M) time complexity. This is essentially a nested loop.
**Action:** When performing membership checks inside a loop against another array, convert the target array to a `Set` before the loop (for O(N+M) complexity), mapping the elements to the required format (e.g., lowercased) beforehand.
