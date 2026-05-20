## 2024-05-20 - O(N*M) lookups hidden in Array.some() calls inside loop
**Learning:** In TypeScript/JavaScript arrays, `array.some()` iterations inside a `forEach` loop on another array result in O(N*M) time complexity, and doing string manipulations (`toLowerCase`) repeatedly inside adds unnecessary overhead.
**Action:** When searching elements in an array within a loop, consider pre-calculating the inner array's values (e.g. converting string cases) and storing them in an O(1) lookup structure like a `Set` to convert O(N*M) to O(N+M).
