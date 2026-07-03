## 2024-05-24 - O(N*M) nested loop found in username checking logic
**Learning:** Found an $O(N \times M)$ nested loop performance bottleneck in TS/EX-32/main.ts where `current_user.some(...)` with a lowercase string comparison was being run inside a `.forEach` loop for `new_user`.
**Action:** Replaced it with an O(N) Set lookup by pre-computing a Set of lowercased current users, reducing the overall time complexity to $O(N + M)$ via $O(1)$ lookups. The optimization was clean and preserved existing functionality.
