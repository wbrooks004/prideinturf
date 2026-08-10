# Claude Project Upload Guide

1. Extract the ZIP locally if Claude does not ingest nested ZIP contents automatically.
2. Add `CLAUDE.md` and the entire `00_READ_FIRST` folder first.
3. Add all files from `01_SOURCE_OF_TRUTH` and `02_BRAND_ASSETS`.
4. Add `03_IMPLEMENTATION_REFERENCES` when code/design/ACF work is needed.
5. Add `04_DERIVED_PROJECT_CONTEXT` for faster navigation.
6. Keep folder names and filenames unchanged so cross-references remain valid.

Suggested Claude Project instruction:

> Follow `CLAUDE.md`. Apply the source-authority preflight before every project decision. Never use implementation references or derived summaries to override an authoritative source. Mark unresolved conflicts rather than guessing.
