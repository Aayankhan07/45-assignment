## 2024-05-19 - [O(n^2) nested loops using Array methods]
**Learning:** Found an $O(n^2)$ lookup pattern where `Array.prototype.some()` is called inside `Array.prototype.forEach()`. Even with small arrays, these nested iterations can be costly when placed within hot loops.
**Action:** Replace nested array lookups (like `some`, `includes`, `find`) with $O(1)$ `Set.has()` or Map lookups, especially inside `forEach`, `map`, or `filter` iterations. This immediately drops time complexity to $O(n+m)$.
