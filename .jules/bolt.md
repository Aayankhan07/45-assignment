## 2024-10-26 - O(N*M) nested loop optimization
**Learning:** Checking elements of one array against another via `some()` with case conversion repeatedly has O(N*M) time complexity.
**Action:** Use a `Set` with pre-converted elements to optimize the check to O(N+M).
