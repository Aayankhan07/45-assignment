## 2024-05-15 - Array lookup optimization with sets
**Learning:** Nested loops where one iterates and the other searches using .some() or .includes() cause O(N*M) time complexity. Using a Set beforehand makes this O(N+M)
**Action:** In array comparisons where multiple items are being checked for availability, pre-compute a Set for O(1) lookups.
