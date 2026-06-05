## 2024-06-05 - O(N*M) nested loop optimization using Sets
**Learning:** Found an O(N*M) nested loop checking array string values with case insensitivity using `Array.some` inside `Array.forEach`. While standard JS optimizations recommend `Set`, when comparing case insensitivity, the `Set` needs to be pre-populated with `toLowerCase()` values to avoid redundant lowercase calls during lookup, resulting in true O(N+M) performance.
**Action:** When converting array checks to `Set` lookups for case-insensitive matches, always map the original array to lowercase before adding to the Set.
