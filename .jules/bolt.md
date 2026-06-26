
## 2024-05-24 - O(N*M) nested loop optimization in TS/EX-32
**Learning:** Found an $O(N \times M)$ nested search operation (calling `toLowerCase()` on elements inside a `some` loop on every iteration) which can be optimized with an $O(N + M)$ approach by pre-computing a `Set` of lowercased usernames.
**Action:** Replace nested loops performing repeated array scans and transformations with O(1) Set or Map lookups after pre-computing transformations. Ensure appropriate types like Set are compiled with correct target options (`tsc --lib es2015,dom`).
