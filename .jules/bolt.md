## 2024-05-24 - Array.some inside forEach Optimization
**Learning:** Found an $O(N \times M)$ performance trap in `TS/EX-32/main.ts` where case-insensitive availability checks were using `.some` with `.toLowerCase()` on every iteration.
**Action:** Replace nested array lookups (like `.some` inside `.forEach`) with a pre-computed `Set` for $O(1)$ lookups, significantly improving performance for string matching.
