## 2024-06-06 - O(n^2) nested lookups in string arrays
**Learning:** Found a common anti-pattern where a nested `.forEach()` and `.some()` loop performs redundant `.toLowerCase()` computations on arrays of strings, resulting in an O(n^2) time complexity and excess object allocations for repeated string generation.
**Action:** Use a `Set` combined with pre-computed lowercase strings (`.map(s => s.toLowerCase())`) for the target list, creating an O(1) membership check that turns the overall complexity into O(n) and avoids unnecessary string allocations.
