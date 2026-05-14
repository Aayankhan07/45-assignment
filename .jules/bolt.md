## 2024-05-18 - Replacing Array.some with Set lookup for string collections
**Learning:** O(n²) nested loops for array intersection/membership are common anti-patterns in basic TypeScript array examples, especially when doing string comparisons (like `.toLowerCase()`).
**Action:** Always scan for `Array.some` or `Array.includes` inside `Array.forEach` or `map`. Pre-compute a `Set` for O(1) lookups, ensuring we convert values to lowercase once before population to avoid repeated conversions inside the loop.
