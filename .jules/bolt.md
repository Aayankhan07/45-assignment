## 2024-05-24 - Array.prototype.some in loops
**Learning:** Checking for case-insensitive string existence inside a loop using `.some()` on an array creates an O(N*M) bottleneck, making it especially slow as arrays grow. It also triggers repeated string allocations for `.toLowerCase()`.
**Action:** Replace `Array.some()` inside a loop with a precomputed `Set` of transformed values to drop time complexity to O(N+M) and eliminate redundant transformations.
