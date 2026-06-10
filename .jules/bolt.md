## 2024-05-24 - Missing tsconfig.json in pure TS scripts repository
**Learning:** This repository is structured as a collection of standalone `.ts` files rather than a unified Node/TypeScript project. This means standard TS features (like `Set`) may fail compilation via raw `tsc` due to the lack of a default target environment without a `tsconfig.json`.
**Action:** When running or compiling these standalone files, pass explicit library flags like `tsc --lib es2015,dom <filename>` to ensure the compiler understands modern ECMAScript features without needing to modify project structure.
