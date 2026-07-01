## 2024-05-26 - [No tsconfig.json]
**Learning:** This workspace uses standalone scripts without a root tsconfig.json. When compiling files that use modern features (like `Set`), `tsc` will fail without explicit flags like `--lib es2015,dom`.
**Action:** When working in repositories missing tsconfig, verify compilation manually using specific compiler flags rather than relying on standard `tsc` behavior.
