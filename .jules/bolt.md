## 2026-06-09 - O(N²) array lookups in nested loops
**Learning:** Found an anti-pattern in the codebase using .some() and .toLowerCase() inside .forEach(), which causes O(n*m) complexity. Converting the base array to a Set handles string casing once and allows O(1) lookups.
**Action:** When searching for duplicates or validating sets of data across multiple inputs, look for nested loops or repeated lookups and replace with Set lookup.
