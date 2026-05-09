## 2024-05-09 - Replaced O(N²) loop with O(N) Set lookup
**Learning:** Found an O(N*M) nested loop checking lowercase strings with `.some()` inside `.forEach()`.
**Action:** Replaced the inner array iteration with an O(1) Set lookup by pre-computing a Set of lowercased current usernames, which improved time complexity from O(N*M) to O(N+M).
