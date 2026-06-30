## 2024-05-19 - TypeScript Compile Target Context
**Learning:** This repo doesn't have a central tsconfig.json so when running standard tools like `npx tsc`, the ES version might default to older specs (e.g. ES5), which doesn't know about standard types like `Set`.
**Action:** When compiling code in unstructured TypeScript environments, supply the target libs manually like `npx tsc --lib es2015,dom`.
