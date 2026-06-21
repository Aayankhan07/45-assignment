## 2024-06-21 - TypeScript Global Scope Conflicts

**Learning:** TypeScript files in this repository's standalone folders (e.g., TS/EX-*) often lack ES module imports/exports, making them script files in the global scope. Declaring global variables in temporary benchmark files (like `current_user` or `new_user`) can cause compilation errors (TS2451: Cannot redeclare block-scoped variable) across the entire TS workspace if `tsc` attempts to type-check multiple files.

**Action:** Always wrap temporary benchmark scripts in an IIFE, use ES modules (`export {}`), or generate generic variable names to avoid global scope contamination across the TS assignments.
