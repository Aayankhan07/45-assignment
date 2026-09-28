## 2024-05-18 - Optimized Array.some within Array.forEach
**Learning:** Found an O(N^2) complexity pattern by nesting an `Array.some` iteration inside an `Array.forEach` loop over usernames. By creating a `Set` from the static outer array first, lookups become O(1) reducing complexity to O(N). Also removed trailing double backticks from source file to fix TS syntax errors.
**Action:** Always pre-compute a lookup Set or Map before iterating when performing `includes` or `some` searches repeatedly against the same data structure, especially in TypeScript/JavaScript array operations.
