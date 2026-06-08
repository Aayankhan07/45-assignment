## 2024-03-24 - O(N^2) loops in standalone TS files
**Learning:** Found an O(N*M) nested loop (an array `some` check inside an array `forEach` loop) where `toLowerCase()` was being redundantly called in an inner loop inside `TS/EX-32/main.ts`.
**Action:** Since there are no large build steps, compiling this independently with `tsc --lib es2015,dom` allows usage of `Set` for fast O(1) lookups. By extracting the inner values into a `Set`, the time complexity drops to O(N+M).
