## 2024-05-24 - O(n*m) Array lookups in loops
**Learning:** Found an O(n*m) complexity bottleneck in `TS/EX-32/main.ts` where a loop iterated over new users and for each iteration called `.some()` on the current users array, performing a `toLowerCase()` string conversion on both sides every time.
**Action:** Replace nested array lookups (like `.some()`, `.find()`, or `.includes()`) inside loops with pre-computed `Set` or `Map` data structures. Convert items to their required state (like lowercase) once before the loop, reducing the complexity to O(n+m).
