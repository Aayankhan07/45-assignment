## 2024-06-23 - Standalone TS File Compilation
**Learning:** Compiling individual TypeScript files without a `tsconfig.json` that use ES2015 features (like `Set`) will fail unless explicit libraries are passed to `tsc` (e.g., `tsc --lib es2015,dom`).
**Action:** Always include the `--lib es2015,dom` flag when compiling standalone scripts to ensure modern features are available.
