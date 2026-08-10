# Current Technical Stack

> **Status:** DERIVED project context. Version strings below come from project instructions/conversation and must be verified against the installed WordPress environment before implementation.

| System | Current direction | Implementation note |
|---|---|---|
| WordPress | Primary CMS | Production target |
| Etch Builder | Primary page/template builder | Build new templates/components natively in Etch |
| Bricks Builder | Legacy-only where already used | Do not use as the default for new work |
| Automatic.css | 4.0 alpha or current approved project version | Verify available utilities and breaking changes before applying classes |
| ACF Pro | Project-stated “2.102 or latest” | The stated version string may not match standard ACF release numbering; verify installed version |
| WS Form Pro | 1.11.19 or current approved version | Use for quote/contact flows |
| WPCodeBox / CodeBox | 1.4.1 or current approved version | Use for controlled PHP/CSS/JS snippets; document dependencies |
| Rank Math | Current installed version | Metadata and schema implementation must follow architecture/branch truth |
| Polylang | Current installed version | Use only when multilingual requirements are defined |

## Development rules

- Do not assume a plugin API or class name from memory. Verify it in the installed version or official documentation.
- Do not paste React/JSX into Etch. Translate structure, states, tokens, and behavior into native Etch components/templates.
- Keep content in ACF when it is editorially managed or reused; avoid hard-coding business content into templates.
- Do not let current ACF rewrite settings override the approved URL architecture.
- Document custom code ownership, location, triggers, and rollback steps.
