## 2024-05-18 - [O(N^2) Array Lookup Optimization]
**Learning:** Found an O(N^2) loop where `array.some()` was being called inside `array.forEach()`. This type of pattern is common when checking multiple items against a source list. Replaced the `array.some()` call by caching the source array into a `Set` for O(1) lookups, reducing overall complexity to O(N).
**Action:** Always check inner loop logic for array lookups (`.some()`, `.find()`, `.includes()`) that could be pre-computed using a `Set` or `Map` to drastically improve performance on larger datasets.
