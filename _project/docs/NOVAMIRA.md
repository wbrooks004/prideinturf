# Novamira MCP — setup

Novamira is a WordPress plugin that runs an MCP server **inside** the WP install, so an AI client
(Claude Code here) can read and write the site natively — posts, options, WP-CLI, PHP, and with Pro,
Bricks templates and ACF field groups. That last part is the reason this project wants it: it means
Bricks work happens as *Bricks elements*, editable in the builder, instead of a wall of raw markup
pasted into a Code element.

This repo ships the client half (`.mcp.json`). The server half is installed in WordPress.

---

## 1. Install the plugin

Two plugins, and you need both for this project:

| Plugin | What it gives you |
|---|---|
| Novamira core (free) | Base abilities — WP-CLI, raw PHP, posts, options, users |
| Novamira Pro (paid) | **Bricks + ACF abilities**, Meta Box, Pods, JetEngine, Elementor |

Core alone cannot drive Bricks. Pride In Turf is a Bricks + ACF Pro build, so Pro is the one that
matters here.

Install both through the normal **Plugins → Add New → Upload** flow.

## 2. Turn on AI abilities

**WP Admin → Novamira → Configuration**

1. Enable **AI abilities**, then save. (Off by default — nothing works until this is on.)
2. Generate an **application password**. This is the credential the agent authenticates with.
   WordPress shows it exactly once, at creation. Copy it now.

The MCP endpoint is your site URL + `/wp-json/mcp/novamira`.

## 3. Point this repo at your install

`.mcp.json` is committed and reads three environment variables, so **no site URL and no password
ever lands in git**:

```json
"env": {
  "WP_API_URL": "${PIT_WP_URL}/wp-json/mcp/novamira",
  "WP_API_USERNAME": "${PIT_WP_USER}",
  "WP_API_PASSWORD": "${PIT_WP_APP_PASSWORD}"
}
```

Set them in your shell before launching Claude Code. `PIT_WP_URL` is the **site root** — the
`/wp-json/mcp/novamira` suffix is already in the config, don't repeat it.

**PowerShell** (authoring machine is Windows, per `.gitattributes`) — persists for your user:

```powershell
setx PIT_WP_URL          "https://prideinturf.local"
setx PIT_WP_USER         "your-wp-username"
setx PIT_WP_APP_PASSWORD "abcd EFGH ijkl MNOP qrst UVWX"
```

Open a **new** terminal afterwards — `setx` doesn't affect the session it runs in.

**bash / zsh:**

```bash
export PIT_WP_URL="https://prideinturf.local"
export PIT_WP_USER="your-wp-username"
export PIT_WP_APP_PASSWORD="abcd EFGH ijkl MNOP qrst UVWX"
```

Keep the application password's spaces exactly as WordPress printed them, and keep it in quotes.

## 4. Verify

From the repo root:

```bash
claude
/mcp
```

`novamira` should list as connected. If it doesn't, `claude --debug` shows the bridge's stderr.

---

## Cross-check against the plugin's own config

Novamira's dashboard generates a client config for you — **Novamira → Configuration**, pick the
**Claude Code** tab, or use its "Copy prompt" button and paste that into Claude Code to have it
write the config.

The `.mcp.json` here uses the documented `@automattic/mcp-wordpress-remote` stdio bridge, which is
the setup route third-party write-ups document. If the dashboard hands you a different shape for
Claude Code — a direct HTTP transport, say, rather than the npx bridge — **prefer the dashboard's
version**, it's authoritative for your installed build. Keep the `${PIT_WP_*}` variable
substitution when you do, so the credential stays out of the repo.

---

## Constraints that bite on this project

**Novamira is bound to the URL it was activated on.** Its AI abilities auto-deactivate the moment
the site answers on a live URL, even with the plugin still active. The intended workflow is: build
on local or staging with Novamira live, then push to production with a normal migration tool. That
fits the Cloudways flow in `MIGRATION-CLOUDWAYS.md`.

**Staging currently says to turn it off.** `MIGRATION-CLOUDWAYS.md` Phase 7 has
*"Deactivate `bricks-mcp` and `novamira` if you don't want dev tooling on staging."* If you want
agent-driven Bricks work against staging, that checklist item is the thing to reverse — decide
deliberately rather than letting the two docs disagree.

**Never point this at production.** The abilities include raw PHP and WP-CLI. There is no undo.

**`novamira-sandbox/` is already gitignored.** The plugin's scratch directory in `wp-content` stays
out of this repo — it's dev-only state, not project source.

## Design system

Anything the agent builds through Novamira follows [`design.md`](../../design.md) at the repo root —
that file is the source of truth for tokens, type, components, and the ACSS 4.x mapping. Load
`prideinturfacss4x.css` as global CSS so the system resolves under ACSS names. Do not let an agent
invent design values; the "Do's and Don'ts" section is the short version of the rules.
