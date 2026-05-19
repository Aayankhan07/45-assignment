## 2024-05-24 - [O(N*M) Array Search Bottleneck in Simple Scripts]
**Learning:** [Even simple TypeScript assignment scripts often suffer from O(N*M) time complexity due to nested Array iterations like `forEach` containing `.some()` or `.includes()`, compounded by redundant operations like `.toLowerCase()`. This acts as a reliable low-hanging fruit for algorithm efficiency.]
**Action:** [Use `Set` for pre-computing O(1) lookups whenever nested loops check for existence or intersection between two arrays, especially when string transformation is involved.]
