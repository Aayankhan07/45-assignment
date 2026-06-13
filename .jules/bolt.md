## 2024-03-24 - File Encodings & Execution in standalone TS directory
**Learning:** Found that TS files in this repository often use DOS line endings (CRLF) and lack a central `tsconfig.json`. Also, there are no module wrappers, meaning identical variables in multiple files can clash in a workspace compiler context.
**Action:** Always use `dos2unix` to normalize files before patching, compile individual files with `tsc --lib es2015,dom` for modern features (like `Set`), and isolate tests by avoiding global declarations or by using scratchpads that are carefully scoped.
