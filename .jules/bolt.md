## 2024-05-24 - Avoiding O(N*M) lookups with Sets
**Learning:** Using `.some` inside a `forEach` loop results in an O(N*M) complexity which is detrimental for performance, especially with string manipulations like `.toLowerCase()`. Precomputing a `Set` for lookups improves this to O(N+M).
**Action:** When searching for an element repeatedly inside a loop, pre-process the search target into a `Set` or hash map to achieve O(1) lookups instead of checking against an array sequentially.
