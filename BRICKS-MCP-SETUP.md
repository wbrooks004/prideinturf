# Bricks MCP setup

`.mcp.json` registers the Pride In Turf WordPress site's Bricks MCP endpoint as a
project-scoped MCP server, so any Claude Code session started in this repo can read
and write Bricks templates on the site.

```
https://wordpress-1624912-6418635.cloudwaysapps.com/wp-json/bricks-mcp/v1/mcp
```

## Credentials

The endpoint uses HTTP Basic auth. The credential is **not** stored in this repo —
`.mcp.json` references the `BRICKS_MCP_AUTH` environment variable instead, and Claude
Code expands it at connection time.

1. In WP Admin, go to **Users → your user → Application Passwords**, add one named
   something like `bricks-mcp`, and copy the generated password.
2. Base64-encode `username:application-password`:

   ```bash
   printf '%s' 'wpusername:xxxx xxxx xxxx xxxx xxxx xxxx' | base64
   ```

   Use `printf`, not `echo` — `echo` appends a newline and the resulting string will
   fail to authenticate.
3. Export the result wherever you launch Claude Code (`~/.zshrc`, `~/.bashrc`, or your
   environment's variable settings for remote sessions):

   ```bash
   export BRICKS_MCP_AUTH='<base64 string from step 2>'
   ```

Restart Claude Code after setting the variable — MCP servers are connected at session
start. Confirm with `/mcp`; `bricks-mcp` should list as connected.

## Notes

- Never commit the base64 string or the application password. Rotate the application
  password in WP Admin if either is ever pasted into a commit, issue, or PR.
- If the server shows as failed, check in this order: the variable is exported in the
  shell that launched Claude Code, the application password is still active in WP Admin,
  and the Bricks MCP plugin is active on the site.
