## 2024-07-21 - TypeScript Standalone File Execution
**Learning:** In projects without a central `tsconfig.json` configuring the build environment (like this collection of assignments), compiling TypeScript files that use modern features like `Set` or `Map` requires passing specific compiler options inline to avoid errors.
**Action:** When working on standalone TypeScript files that use ES2015+ features, always compile using `tsc --lib es2015,dom <filename>` to ensure the necessary global typings are available.
