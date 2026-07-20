## 2024-07-20 - Set Optimization Compilation and DOS Endings
**Learning:** Compiling individual files using modern ES features (like `Set`) outside of a proper project requires passing explicit lib flags (`--lib es2015,dom`) due to the absence of `tsconfig.json`. Also, these files may use DOS line endings (CRLF), which need conversion with `dos2unix` to avoid issues with code patching.
**Action:** Always check file line endings and use `dos2unix` if CRLF is present before patching. Always pass `--lib es2015,dom` to `tsc` when testing standalone files.
