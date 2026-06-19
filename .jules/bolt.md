## 2024-03-24 - DOS Line Endings in Assignments
**Learning:** Files in this repository frequently use CRLF line endings, which causes silent failures in patching and tool operations. Additionally, many files have syntax issues like trailing backticks.
**Action:** Always run dos2unix on targeted files before applying diff patches or running TS compilers to avoid confusing parse/patch failures.
