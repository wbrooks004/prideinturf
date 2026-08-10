# Cloudways Staging Setup — bricks-site-001

**Target:** `https://wordpress-1624912-6418635.cloudwaysapps.com/`
**App state:** currently running the **Etch** build (`prideinturf`). Being wiped and replaced with the Bricks build. Decision made deliberately — the Etch site is abandoned.

**Architecture: staging is authoritative for content.** The team builds on staging and promotes to live.

| Layer | Source of truth | Moves by |
|---|---|---|
| Theme/plugin **code** | Git repo | `git pull` on the server |
| **Content + design** (pages, Bricks templates, global classes, RankMath meta) | **Staging database** | Cloudways backups; promoted to live |
| **Media** (`uploads/`) | **Staging filesystem** | Not in Git |
| Local | Code sandbox only | Synced *down* from staging |

Bricks templates, global classes, theme styles, and color palettes live in `bricks_*` options and postmeta — **not in files**. Once design work happens on staging, Local is no longer authoritative for design either. Git's job is limited to `themes/bricks-child/`, custom plugin code, and vendor plugin files.

## Source facts

| | |
|---|---|
| Source URL | `http://bricks-site-001.dev.local` (http → https on target) |
| Target URL | `https://wordpress-1624912-6418635.cloudwaysapps.com` |
| WP / PHP / DB | 7.0.3 / 8.2.29 / MySQL 8.4.0 |
| Table prefix | `wp_` |
| wp-content | 226 MB, 7,268 files, largest 7.3 MB (no LFS needed) |
| DB | ~2.5 MB |
| Builder | Bricks + bricks-child |
| Licensed | Bricks, ACF Pro, Automatic.css, Bricksfusion + Studio, WS Form Pro, WPCodeBox, BulkPress |
| Dev-only | `bricks-mcp`, `novamira` |
| Bricks tables | `wp_bricks_filters_index`, `wp_bricks_filters_element`, `wp_bricks_filters_index_job`, `wp_bricks_form_submissions` |

## What's being destroyed

The target currently serves an Etch site with populated `careers`, `lawn-care-programs`, and `lawn-services` CPTs, plus WS Form submissions and its own users table. Phase 4 replaces its `wp-content`; Phase 6 replaces its database. **Neither step is reversible without the Phase 0 backup.**

Production at `prideinturf.com` is a separate platform and is not touched by any of this.

## Read this before you start

**The repo must be private.** It will contain Bricks, ACF Pro, ACSS, Bricksfusion, WS Form Pro, WPCodeBox, and BulkPress — all licensed commercial code.

**`uploads/` is deliberately excluded from Git.** Your team uploads media through staging's wp-admin, so those files exist only on the server. If Git tracked that directory, every `git pull` would hit a dirty working tree. Media is protected by Cloudways backups, not version control.

**Phases 5–6 are a ONE-TIME SEED.** They replace the entire staging database. Running them again after the team starts working destroys every page, Bricks template, RankMath entry, and form submission on staging. Seed once, then never again.

**Order is load-bearing.** Git deploy must land before the DB restore, because the restore sets `active_plugins` from Local and every one of those plugin folders has to already exist on disk.

---

## Phase 0 — Backup before the wipe

- [ ] Cloudways → Application → **Backup → Take Backup Now**. Wait for completion.
- [ ] Note the restore point date/time

One click, recoverable for the retention window. Skip this and the Etch build is gone permanently the moment Phase 6 finishes.

## Phase 1 — Prepare the local tree

- [ ] Delete regenerable junk:

```bash
rm -rf "/c/Users/William/Local Sites/bricks-site-001/app/public/wp-content/upg
```

- [ ] Create `wp-content/.gitattributes`:

```gitattributes
* -text
```

This disables all line-ending conversion. You're on Windows deploying to Linux — without it, Git rewrites CRLF/LF on checkout and can corrupt binaries and bloat every diff. Do not skip it and do not use `text=auto` here.

## Phase 2 — Push to GitHub

- [ ] Create a **private** repo (e.g. `pit-bricks-wp-content`)

```bash
cd "/c/Users/William/Local Sites/bricks-site-001/app/public/wp-content"
git init -b main
git add .
git commit -m "Initial wp-content snapshot from Local"
git remote add origin git@github.com:<you>/pit-bricks-wp-content.git
git push -u origin main
```

- [ ] Confirm on GitHub that `plugins/`, `themes/`, and `uploads/` are present and no large-file warnings fired

## Phase 3 — Reconfigure the existing app

This app already exists, so you're changing settings rather than provisioning.

- [ ] **PHP → 8.2** (match Local; the Etch app may be on something else — check and change)
- [ ] **Varnish: OFF** — it caches Bricks' AJAX responses and makes the builder and query filters behave erratically
- [ ] **Deactivate Breeze** if present
- [ ] `max_execution_time` → 300+
- [ ] `memory_limit` → 512M
- [ ] **Application Access → restrict by IP or set a staging password.** The app is currently open to anonymous visitors.

## Phase 4 — Replace wp-content

- [ ] Add a GitHub **deploy key** (read-only) for the Cloudways server, or use a PAT
- [ ] SSH in and swap the tree:

```bash
ssh <master_user>@<server_ip>
cd applications/<app_name>/public_html
mv wp-content wp-content-etch-old
git clone git@github.com:<you>/pit-bricks-wp-content.git wp-content
```

- [ ] Confirm `wp-content/plugins/`, `themes/bricks/`, and `themes/bricks-child/` are present
- [ ] Application Settings → **Reset File Permissions** (fixes ownership after cloning as the master user)
- [ ] Leave `wp-content-etch-old` in place until Phase 8 passes, then delete it
- [ ] Wire up Application → **Deployment via Git** at the same repo/branch, path `wp-content`, for future pulls

## Phase 5 — Export database + media (ONE TIME)

Because `uploads/` is no longer in Git, the seed archive has to carry the media library. Themes and plugins stay excluded — Git already delivered those in Phase 4.

In Local: **All-in-One WP Migration → Export**. Under advanced options, check:

- [ ] Do not export themes
- [ ] Do not export must-use plugins
- [ ] Do not export plugins
- [ ] Do not export spam comments
- [ ] Do not export post revisions

Leave **database** and **media library** included. The archive then contains no theme/plugin sections, so the restore won't disturb your Git-managed code — but it will populate `uploads/` (5.5 MB).

- [ ] Export To → **Google Drive**, wait for upload to finish

## Phase 6 — Restore (ONE TIME — never repeat)

> Once the team begins working on staging, this phase becomes destructive. It replaces the entire database. There is no merge, no partial restore. If you ever need Local content on staging again, move it as individual posts/templates, not as a database restore.

- [ ] Log in to staging with the **Cloudways** admin credentials
- [ ] Activate **All-in-One WP Migration** + **Google Drive Extension** (arrived via Git in Phase 4)
- [ ] License AIO, authorize Google Drive
- [ ] **Restore** the DB-only archive

**Have your Local admin username and password ready before clicking Restore.** The restore overwrites `wp_users` with Local's table, so the credentials you just used stop working the instant it finishes. This is the most common way people lock themselves out.

- [ ] Log back in with your **Local** credentials
- [ ] Settings → Permalinks → Save. **Twice.**

### URL rewriting is already handled

AIO 7.107 replaces across `http`, `https`, and protocol-relative schemes (`class-ai1wm-import-database.php:247`) and generates JSON-escaped `addcslashes($url, '/')` variants of each (lines 111, 275, 300, 401, 426). That covers Bricks element data, WS Form field JSON, and ACF JSON.

**Do not run a manual `wp search-replace` afterward.** It's unnecessary and risks double-replacing.

## Phase 7 — Post-restore

Over SSH, in `applications/<app_name>/public_html`:

- [ ] Pin core to match the restored DB if it differs:

```bash
wp core version
wp core update --version=7.0.3 --force
```

- [ ] **Delete the stale robots.txt.** The current one is production's — it allows crawling and points at `Sitemap: https://prideinturf.com/sitemaps.xml`. It is a physical file and survives the DB restore:

```bash
ls -la robots.txt && rm robots.txt
```

  Mandatory if you're using RankMath: it serves a *virtual* robots.txt via filter and **silently declines to manage robots.txt at all when a physical file exists**. Leave the file and RankMath's robots editor looks functional while production's directives keep serving.

- [ ] **Settings → Reading → check "Discourage search engines from indexing this site."** The staging domain is otherwise indexable and duplicates production content.

- [ ] Check for Etch leftovers that AIO didn't drop (tables outside the `wp_` prefix survive):

```bash
wp db tables --all-tables | grep -iE "etch|architech|synapse"
```

In wp-admin:

- [ ] **Bricks → Settings → Templates/Filters** — rebuild the query filters index. Migrated `wp_bricks_filters_index` rows encode stale IDs, so loops return empty until you do this.
- [ ] **Automatic.css dashboard** — save settings to regenerate `uploads/automatic-css/` (gitignored, so it doesn't exist yet)
- [ ] Confirm Breeze is still deactivated — Cloudways sometimes reinstalls it
- [ ] Reactivate licenses: ACSS, Bricksfusion, Bricksfusion Studio, WS Form Pro, WPCodeBox, BulkPress
- [ ] Deactivate `bricks-mcp` and `novamira` if you don't want dev tooling on staging

*Bricks → Settings → Performance → regenerate CSS only applies if you switch to external-files mode. `uploads/bricks/` doesn't exist locally, so you're on inline CSS and this is a no-op.*

## Phase 8 — Verification

### Confirm the swap actually happened

```bash
curl -s https://wordpress-1624912-6418635.cloudwaysapps.com/wp-json/ | grep -o '"namespace":"[^"]*"' | sort -u
```

- [ ] `bricks/v1` **present**
- [ ] `etch-api` **gone**

### Confirm no stale URLs

```bash
wp option get siteurl   # → https://wordpress-1624912-6418635.cloudwaysapps.com
wp option get home      # → same
wp db search 'dev.local' --all-tables       # → 0 rows
wp db search 'bricks-site-001' --all-tables # → 0 rows
```

### Confirm the right code is active

```bash
wp theme list --status=active     # → bricks-child
wp plugin list --status=active
wp theme list | grep -i etch      # → no output
```

### Confirm Varnish is off

```bash
curl -sI https://wordpress-1624912-6418635.cloudwaysapps.com/ | grep -iE "x-varnish|age|x-cache"
```

- [ ] No `X-Varnish` / `Age` headers

### Confirm indexing is blocked

```bash
curl -s https://wordpress-1624912-6418635.cloudwaysapps.com/robots.txt
```

- [ ] Returns WP's virtual `Disallow: /` (from the Reading setting), **not** the old file referencing `prideinturf.com`

### Manual checks

- [ ] Front page renders with ACSS variables resolving, not raw fallbacks
- [ ] A page opens in the **Bricks builder** — canvas loads, no JS console errors
- [ ] Media library thumbnails all resolve
- [ ] Query loops / filters return results (confirms the reindex worked)
- [ ] WS Form test submission succeeds
- [ ] ACF field groups present and populated on a CPT entry
- [ ] WPCodeBox snippets present and enabled
- [ ] A deep CPT permalink resolves, not just the homepage

- [ ] All green → `rm -rf wp-content-etch-old`

## Phase 9 — Ongoing workflow

### Code (child theme, custom plugins, vendor plugin updates)

Edit in Local → commit → push → pull on the server:

```bash
# local
git add . && git commit -m "..." && git push
# server
cd applications/<app_name>/public_html/wp-content && git pull
```

Plugin updates applied through staging's wp-admin write files Git tracks, leaving the server tree dirty. Either update in Local and pull, or commit from the server afterward. Pick one and stick to it — mixing them causes merge conflicts on the next pull.

### Content, design, SEO

Happens on staging. Not version-controlled. Backed up by Cloudways only.

- [ ] Set an **automated daily Cloudways backup** — this is now the sole protection for all design and content work
- [ ] Confirm the retention window matches how much rework you could absorb losing

### Promotion to live — there is no WordPress production app

Verified against `https://www.prideinturf.com` (2026-08-09):

| Probe | Result |
|---|---|
| `/wp-json/`, `/wp-login.php`, `/wp-sitemap.xml` | all **404** |
| `/sitemaps.xml` | **404** — though staging's robots.txt declares it |
| Headers | `Server: nginx`, `X-Cache: HIT`, `Age: ~6.7 days`, no `X-Powered-By` |

Production is a static/non-WordPress site behind a long-TTL cache. **Cloudways Push to Live is unavailable** — it requires two linked Cloudways WordPress applications.

Production is **static HTML** (confirmed by the site owner). There is no database, no CMS, and no content to migrate off it. Going live is a **domain cutover**, not a promotion.

**Recommended: promote this app to production, then clone a new staging.**

1. Build out the Bricks site on this app
2. When ready, add `prideinturf.com` + `www` to it, issue SSL, force HTTPS
3. Update `siteurl`/`home` to the live domain
4. Repoint DNS from the static host to the Cloudways IP
5. **Then** use Cloudways Clone to create a fresh staging app for ongoing work

Building a second app to promote *into* buys a rehearsal, but there's nothing on production worth rehearsing against — no data to lose, no rollback beyond repointing DNS back at the static host. Not worth the extra app.

### Cutover requirements (either path)

- [ ] **Redirect map.** The static site's URLs are indexed. Every one must resolve on the new site or 301 to its equivalent, or you lose the rankings. Use RankMath's Redirections module. Build this map *before* cutover by crawling the current site.
- [ ] Fix the broken sitemap declaration — production's robots.txt points at `/sitemaps.xml`, which already 404s
- [ ] Uncheck "Discourage search engines" — the staging Reading setting travels with the database and will silently noindex production
- [ ] Verify `siteurl`/`home` point at the live domain
- [ ] Confirm SSL issued and forced before DNS moves
- [ ] Lower the cache TTL ahead of cutover — the current `Age` header shows responses served for ~6.7 days
- [ ] Rebuild the Bricks filters index on production
- [ ] Back up before and after
- [ ] Keep the old static site retrievable until the new site is verified

### Never do this

**Never re-run Phases 5–6.** Once the team works on staging, a Local→staging database restore erases everything. If Local content is ever needed again, move it as individual posts or Bricks template exports.

**Never run a full AIO export/import into staging.** A full archive contains theme/plugin sections; restoring one wipes the Git working tree and leaves a detached, dirty checkout.

---

## RankMath Pro

Not currently installed anywhere — absent from `bricks-site-001`'s plugins, absent from the local DB (no `wp_rank_math_*` tables, no `rank_math_*` options or meta), and not active on the target app.

### Install it in Local, never on staging

- [ ] Install and license RankMath Pro in **Local**
- [ ] Commit and push — it reaches staging as part of `wp-content` via Git

Installing directly on staging desynchronizes the server from the repo, and the next `git pull` or forced redeploy removes it.

### Do all SEO work on staging

Staging owns content, so RankMath meta is written there and promoted to live with everything else. Its data lives entirely in the database:

| Data | Location |
|---|---|
| Titles, descriptions, focus keywords | `rank_math_*` post meta |
| Schema | post meta |
| Redirections | `wp_rank_math_redirections`, `..._cache` |
| Internal link graph | `wp_rank_math_internal_links` |
| Global settings | `rank_math_options_*` options |

None of this is in files, so Git will never carry it. It is protected only by Cloudways backups until it's promoted to live.

### Staging hygiene

- [ ] Do **not** connect RankMath Analytics / Search Console on staging — it risks writing the staging domain into production's GSC property and polluting its data
- [ ] Confirm Settings → Reading → "Discourage search engines" is checked; RankMath honors it and emits `noindex`
- [ ] Verify your license terms cover a `*.cloudwaysapps.com` activation, or whether it consumes a production seat

### Expect a larger DB export

Once RankMath is active, the AIO export grows — the internal-links graph and, with Pro Analytics enabled, `wp_rank_math_analytics_*` tables. Not a problem at your current 2.5 MB, but the export stops being near-instant.
