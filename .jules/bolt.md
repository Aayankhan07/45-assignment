## 2024-05-29 - O(N^2) Anti-pattern in Array Searches
**Learning:** Found an instance in TS/EX-32 where `Array.prototype.some` was nested inside `Array.prototype.forEach` to compare elements between two arrays using `.toLowerCase()`. This is a classic O(N*M) bottleneck that recomputes lowercasing on every check.
**Action:** Always look for nested array searches/comparisons. Convert the static list to a lowercase Set or Map beforehand for O(1) lookups, changing the complexity to O(N+M).
