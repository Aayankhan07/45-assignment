## 2024-06-29 - [Optimizing Arrays of Strings in TypeScript]
**Learning:** Checking for elements in an array using an O(N) array method like `Array.prototype.some` or `Array.prototype.includes` inside another array loop `Array.prototype.forEach` creates an O(N*M) algorithmic bottleneck.
**Action:** Next time you see nested loops checking string array inclusion, immediately convert the target array to a `Set` to leverage O(1) lookups, changing the complexity to O(N+M). Be sure to handle normalizations (e.g., `toLowerCase()`) when constructing the Set if case insensitivity is required.
