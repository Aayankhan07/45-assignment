## 2024-05-19 - Case-Insensitive Array Lookups Optimization
**Learning:** Checking existence in an array with case-insensitivity using `.some(el => el.toLowerCase() === target.toLowerCase())` creates an O(N*M) loop and repeatedly allocates new strings.
**Action:** When validating against a list of static or pre-defined strings case-insensitively, pre-compute the lowercase representations into a `Set` for O(1) lookups, reducing time complexity to O(N+M) and minimizing memory allocations in the loop.
