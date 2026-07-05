## 2024-07-05 - Global Variables in Standalone TS Files
**Learning:** TypeScript files in the TS/ directory lack module exports/imports and are treated as global scripts. Reusing identical variable names (e.g., in a scratchpad or another file) causes compilation errors like 'Cannot redeclare block-scoped variable'.
**Action:** When testing or modifying these files, be aware of variable naming conflicts. Avoid creating scratchpad files with identical variable declarations to avoid breaking the global scope.
