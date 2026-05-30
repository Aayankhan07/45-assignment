## 2024-05-24 - O(N*M) array lookup in EX-32
**Learning:** Found a nested loop O(N*M) searching through strings inside a `.some()` method nested in a `.forEach()` loop in TS/EX-32/main.ts, which is an anti-pattern.
**Action:** Replaced with a pre-computed `Set` for O(1) lookup, taking the complexity down to O(N+M) and skipping repeated `toLowerCase()` operations. Will look for similar `.some()` or `.includes()` usage nested inside iterations in the future.
