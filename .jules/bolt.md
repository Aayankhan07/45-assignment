## 2025-02-19 - TypeScript DOS line endings in standalone scripts
**Learning:** Found that standalone script files here often have DOS line endings (CRLF), which makes patching them via git merge diffs fail unexpectedly because of the strict matching required.
**Action:** When I encounter syntax errors or patching failures in this project, I should use `dos2unix <filename>` before making edits with `replace_with_git_merge_diff`.
