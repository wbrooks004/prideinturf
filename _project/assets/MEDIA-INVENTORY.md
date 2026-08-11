# Media Inventory

Index of original Pride In Turf photography and video supplied for the site build, with the template
slot each asset serves and its approved alt text.

**The binaries are not in this repo.** `.gitignore` excludes the media library by design
("Licensed vendor code … and the media library are already excluded"), and
`MIGRATION-CLOUDWAYS.md` puts media on the staging filesystem, not in Git. The four videos total
53 MB, which would need LFS and would contradict that architecture. This file is the index; the
files themselves belong in the WP media library on staging.

Upload with the **suggested filename** below — descriptive, hyphenated, lowercase. That filename is
the only SEO signal a media file carries before alt text, and renaming after pages reference it
breaks links.

---

## Photography

### PIT-01 — Backyard with putting green and pool
`suggested filename:` `pride-in-turf-backyard-putting-green-pool-braselton.jpg`

Rear yard of a high-end property. Striped, uniformly green turf running to a synthetic putting green,
pool and paved patio with loungers and a fire feature at right, black aluminum fencing, mature tree
line behind. A Pride In Turf yard sign sits mid-lawn.

- **Alt text:** "Striped, weed-free backyard lawn maintained by Pride In Turf, running to a putting green beside a pool and patio"
- **Use:** Lawn Care Program Single hero (`hero_image`) — this is the strongest premium-positioning image in the set. Also viable for the About hero.
- **Note:** the putting green and hardscape were not installed by Pride In Turf. Copy near this image must not imply landscaping or installation services.

### PIT-02 — Front elevation, brick and stone home
`suggested filename:` `pride-in-turf-front-lawn-curb-appeal-brick-home.jpg`

Large two-story brick-and-stone home, curved concrete driveway, deep green cut lawn wrapping the
drive, landscaped island bed with a Japanese maple and ornamental grasses. Branded yard sign at the
curb with the phone number legible.

- **Alt text:** "Dense, dark green front lawn and landscaped beds at a Metro Atlanta home treated by Pride In Turf"
- **Use:** Service Single hero for lawn care programs; branch page supporting image.
- **Note:** the sign reads **833.388.8873**, which matches the `tel:+18333888873` in the header and footer templates. Consistent — no action needed.

### PIT-03 — Striped lawn with painted stars
`suggested filename:` `pride-in-turf-lawn-stripes-painted-stars.jpg`

Tight three-quarter view of a striped front lawn with red, white, and blue stars painted along the
bed edge, receding toward the house and driveway.

- **Alt text:** "Freshly striped front lawn with painted red, white, and blue stars along the border"
- **Use:** **Brand and community content only** — a company update, a seasonal post, social. Do not use it as a service or program image.
- **Why:** decorative turf painting is not on the coding sheet. Placing this image in a service or program section implies an offering that may not exist, which is the "do not invent services" guardrail.

### PIT-04 — Brick colonial with sloping front lawn
`suggested filename:` `pride-in-turf-striped-front-lawn-colonial-home.jpg`

Two-story brick colonial, wide front lawn sloping to the street with clean mowing stripes, black
mailbox foreground, mature trees.

- **Alt text:** "Wide striped front lawn with even color and no visible weeds at a suburban Atlanta home"
- **Use:** Results and customer proof sections; Related Services card imagery; branch page.

### PIT-05 — Ground-level turf close-up
`suggested filename:` `pride-in-turf-healthy-turf-density-closeup.jpg`

Low, close view across dense green turf, house and planted bed soft in the background. Blade texture
and density are the subject.

- **Alt text:** "Close view of dense, uniformly green turf showing healthy blade density"
- **Use:** Service Single section 2 (problem and desired outcome) or section 7 (results). This is the
  best "what good turf actually looks like" image in the set — it shows the outcome the treatments
  produce rather than the house.

---

## Video

I could not inspect these — no ffmpeg in this environment — so the descriptions come from the
filenames. **Confirm the content before anything is published**, particularly whether faces, vehicles,
license plates, or house numbers are identifiable.

| Ref | File | Size | Apparent subject |
|---|---|---:|---|
| PIT-V1 | `pestcontrol__treewalkthroughwithteammember.mp4` | 18 MB | Pest control / tree walkthrough featuring a team member |
| PIT-V2 | `prideinturfgeorgiagolfcoursepropertywalkthrough.mp4` | 25 MB | Walkthrough of a golf-course-adjacent property |
| PIT-V3 | `prideinturfteamtreeandshrubcare.mp4` | 6.9 MB | Team performing tree and shrub care |
| PIT-V4 | `prideinturfteamtreeandshrubcare2.mp4` | 4.1 MB | Second tree and shrub care clip |

**Likely placement**

- **PIT-V1, V3, V4** → the Tree & Shrub Program service page (`TSP` on the coding sheet) and the
  Lawn Pest Control page. Team-in-the-field footage is exactly the proof those pages need.
- **PIT-V2** → About page company story, or a branch page. Property-tour footage supports positioning
  rather than a specific treatment.

**Before publishing any of these**

- Do not self-host 18–25 MB MP4s in the page. Autoplaying or even lazy-loading files that size will
  wreck Largest Contentful Paint on mobile, which is the primary device for this audience. Use a
  poster image plus click-to-play, and host on a video service or serve a compressed derivative
  (720p, ~2–4 MB).
- If a team member's face is identifiable, confirm they've agreed to appear on the public site.
- If a client property is identifiable, confirm the homeowner is fine with it.

---

## Gaps this set does not cover

Three template sections need photography that isn't here:

1. **Team headshots — blocks About section 6.** There are no people photos in the still set. The
   `team-members` records need a `headshot` each: square crop, minimum 800×800, consistent framing and
   background. Frame-grabs from the videos are a poor substitute — motion blur and inconsistent
   lighting will show badly in a grid. A single session with everyone against the same background is
   worth doing properly.

2. **Before-and-after pairs — the `before_after` group stays empty without them.** Every image here
   is an "after." A pair needs the *same lawn from the same position* before and after treatment,
   plus an accurate timeframe. Without genuine pairs the module simply won't render, which is the
   correct behavior — but it means Service section 7 and Program section 8 lose their strongest proof
   element.

3. **Problem-state photography.** Service Single section 2 describes symptoms — weeds, disease, grub
   damage, thinning. Photos of actual problem lawns would carry that section far better than stock
   or than another healthy-lawn image. Field techs could capture these on a phone during normal
   diagnosis visits at effectively no cost.

---

## Rules for all site imagery

From the brief and `pride_in_turf-website-rules.txt`:

- Use original Pride In Turf photography wherever it exists. These five images qualify.
- Never present an image of one property as another, and never pair an image with a claim it does not
  support.
- Alt text describes what is visible. It is not a keyword slot.
- A before-and-after renders only when both images exist and the timeframe is accurate.
- Serve WebP with a JPEG fallback, explicit `width`/`height` to prevent layout shift, and `loading="lazy"`
  on everything except the hero image on each template.
