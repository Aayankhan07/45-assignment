## 2024-07-10 - O(N^2) lookup replaced with Set
**Learning:** Found a common pattern of nested iteration over arrays when comparing elements (`.some` inside `.forEach`). This results in O(n*m) complexity.
**Action:** Replace such nested loops with O(n+m) complexity by pre-computing a `Set` from the first array for O(1) lookups, especially when checking inclusion or unique values. Be careful when dealing with case sensitivity (e.g. use `.toLowerCase()`).
