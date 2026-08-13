"""Shared Bricks builder helpers + the Pride In Turf canonical class system.

Single source of truth. Every PIT template builder and the component library
import their classes from here, so a class is defined once and imported
consistently everywhere (Bricks merges global classes by name on import).

Naming, per `pride_in_turf-website-rules.txt`:
  * Component classes are unprefixed BEM — `card`, `card__title`, `review-card__text`.
  * Layout scaffolding is `pit-` prefixed so it cannot collide with an ACSS utility.
  * Buttons are NOT defined here. ACSS owns `[class*="btn--"]`; buttons attach
    `btn--accent` / `btn--primary` through `_cssClasses`.

No hardcoded design values. Colours, spacing, radii, shadows, line heights and
font families all resolve to ACSS tokens.
"""
import json, re

NODES = []
CLASSES = {}
_ctr = {}


def nid(prefix=None):
    """Globally unique 6-char id. Bricks regenerates ids on import anyway —
    readability lives in the `label` field, not the id."""
    _ctr["n"] = _ctr.get("n", 0) + 1
    s = f"e{_ctr['n']:05d}"
    assert len(s) == 6, f"id must be 6 chars: {s}"
    return s


def el(eid, name, parent, settings=None, label=None, children=None):
    n = {"id": eid, "name": name, "parent": parent,
         "children": children if children is not None else [], "settings": settings or {}}
    if label:
        n["label"] = label
    NODES.append(n)
    if parent != 0:
        for p in NODES:
            if p["id"] == parent:
                p["children"].append(eid)
                break
        else:
            raise SystemExit(f"parent {parent} not found for {eid}")
    return eid


def gclass(cid, name, settings):
    assert len(cid) == 6, f"class id must be 6 chars: {cid}"
    CLASSES[cid] = {"id": cid, "name": name, "settings": settings, "category": None}
    return cid


# ---------------------------------------------------------------- conditions
def notempty(tag):
    return {"key": "dynamic_data", "dynamic_data": tag, "compare": "empty_not"}


def isempty(tag):
    return {"key": "dynamic_data", "dynamic_data": tag, "compare": "empty"}


def eq(tag, val):
    return {"key": "dynamic_data", "dynamic_data": tag, "compare": "==", "value": val}


# ---------------------------------------------------------------- token shorthands
def c(var):
    return {"raw": f"var(--{var})"}


def radius(size="m"):
    v = f"var(--radius-{size})"
    return {"top": v, "right": v, "bottom": v, "left": v}


def pad(*vals):
    t, r, b, l = (vals * 4)[:4] if len(vals) == 1 else (
        (vals[0], vals[1], vals[0], vals[1]) if len(vals) == 2 else vals)
    return {"top": t, "right": r, "bottom": b, "left": l}


BODY = "var(--line-height-body)"
HEADL = "var(--line-height-heading)"
FONT = "var(--primary-font)"

# ================================================================ LAYOUT (pit-)
C_SEC = gclass("pitsec", "pit-section", {
    "_padding": {"top": "var(--section-space-m)", "bottom": "var(--section-space-m)"}})
C_SECTIGHT = gclass("pitsct", "pit-section--tight", {
    "_padding": {"top": "var(--space-l)", "bottom": "var(--space-l)"}})
C_SHELL = gclass("pitshl", "pit-shell", {
    "_width": "100%", "_widthMax": "var(--content-width)",
    "_margin": {"left": "auto", "right": "auto"},
    "_display": "flex", "_direction": "column", "_rowGap": "var(--space-l)"})
C_GRID2 = gclass("pitgr2", "pit-grid-2", {
    "_display": "grid", "_gridTemplateColumns": "repeat(2, minmax(0, 1fr))",
    "_columnGap": "var(--grid-gap)", "_rowGap": "var(--grid-gap)",
    "_gridTemplateColumns:mobile_landscape": "1fr"})
C_GRID3 = gclass("pitgr3", "pit-grid-3", {
    "_display": "grid", "_gridTemplateColumns": "repeat(3, minmax(0, 1fr))",
    "_columnGap": "var(--grid-gap)", "_rowGap": "var(--grid-gap)",
    "_gridTemplateColumns:tablet_portrait": "repeat(2, minmax(0, 1fr))",
    "_gridTemplateColumns:mobile_landscape": "1fr"})
C_GRID4 = gclass("pitgr4", "pit-grid-4", {
    "_display": "grid", "_gridTemplateColumns": "repeat(4, minmax(0, 1fr))",
    "_columnGap": "var(--grid-gap)", "_rowGap": "var(--space-s)",
    "_gridTemplateColumns:tablet_portrait": "repeat(2, minmax(0, 1fr))",
    "_gridTemplateColumns:mobile_portrait": "1fr"})
C_ACTIONS = gclass("pitact", "pit-actions", {
    "_display": "flex", "_direction": "row", "_columnGap": "var(--space-s)",
    "_rowGap": "var(--space-xs)", "_flexWrap": "wrap", "_alignItems": "center"})

# ================================================================ TYPOGRAPHY
C_HEAD = gclass("secttl", "section-title", {
    "_typography": {"font-family": FONT, "font-size": "var(--h2)",
                    "font-weight": "var(--font-weight-heading)", "line-height": HEADL,
                    "letter-spacing": "var(--letter-spacing-heading)",
                    "color": c("text-dark")}})
C_HEADLT = gclass("sectlt", "section-title--light", {
    "_typography": {"color": c("text-light")}})
C_LEAD = gclass("secled", "section-lead", {
    "_typography": {"font-family": FONT, "font-size": "var(--text-l)",
                    "line-height": BODY, "color": c("text-dark-muted")},
    "_widthMax": "65ch"})
C_EYEBROW = gclass("eyebrw", "eyebrow", {
    "_typography": {"font-family": FONT, "font-size": "var(--text-xs)",
                    "font-weight": "600", "text-transform": "uppercase",
                    "letter-spacing": "var(--letter-spacing-eyebrow)",
                    "color": c("primary-dark")}})
C_LIGHTTX = gclass("txtdrk", "text-on-dark", {
    "_typography": {"font-family": FONT, "font-size": "var(--text-m)",
                    "line-height": BODY, "color": c("text-light-muted")}})

# ================================================================ CARD BASE
# Standard card per the shadow/hierarchy rule: white, 1px border, M/2 shadow, 1.5rem.
C_CARD = gclass("cardbs", "card", {
    "_background": {"color": c("white")},
    "_border": {"width": {"top": "1px", "right": "1px", "bottom": "1px", "left": "1px"},
                "style": "solid", "color": c("neutral-light"), "radius": radius("m")},
    "_boxShadow": {"values": {"offsetX": "0", "offsetY": "1px", "blur": "3px", "spread": "0"},
                   "color": {"raw": "color-mix(in oklch, var(--base-ultra-dark) 8%, transparent)"}},
    "_padding": pad("1.5rem"),
    "_display": "flex", "_direction": "column", "_rowGap": "var(--space-xs)"})
# Featured card: 2rem padding, full M shadow.
C_CARDFEAT = gclass("cardft", "card--featured", {
    "_padding": pad("2rem"),
    "_boxShadow": {"values": {"offsetX": "0", "offsetY": "4px", "blur": "12px", "spread": "0"},
                   "color": {"raw": "color-mix(in oklch, var(--base-ultra-dark) 12%, transparent)"}}})
C_CARDMEDIA = gclass("cardmd", "card__media", {
    "_aspectRatio": "4/3", "_objectFit": "cover", "_width": "100%",
    "_border": {"radius": radius("m")}})
C_CARDTTL = gclass("cardtt", "card__title", {
    "_typography": {"font-family": FONT, "font-size": "var(--h3)",
                    "font-weight": "var(--font-weight-heading)", "line-height": HEADL,
                    "color": c("text-dark")}})
C_CARDTXT = gclass("cardtx", "card__text", {
    "_typography": {"font-family": FONT, "font-size": "var(--text-m)",
                    "line-height": BODY, "color": c("text-dark-muted")}})
C_CARDACT = gclass("cardac", "card__actions", {
    "_display": "flex", "_direction": "row", "_columnGap": "var(--space-s)",
    "_alignItems": "center", "_margin": {"top": "auto"}})

# ---------------------------------------------------------------- card variants
C_SERVICECARD = gclass("cardsv", "service-card", {"_height": "100%"})
C_PROGRAMCARD = gclass("cardpg", "program-card", {"_height": "100%"})
C_PROGRAMFEAT = gclass("cardpf", "program-card--featured", {
    "_border": {"width": {"top": "1px", "right": "1px", "bottom": "1px", "left": "1px"},
                "style": "solid", "color": c("primary"), "radius": radius("m")}})
C_BRANCHCARD = gclass("cardbr", "branch-card", {"_height": "100%"})
C_TEAMCARD = gclass("cardtm", "team-card", {"_height": "100%"})
C_PRODUCTCARD = gclass("cardpr", "product-card", {"_height": "100%"})

# Review card lives on the dark proof surface, so it carries its own palette.
C_REVCARD = gclass("cardrv", "review-card", {
    "_background": {"color": {"raw": "color-mix(in oklch, var(--white) 6%, transparent)"}},
    "_border": {"width": {"top": "1px", "right": "1px", "bottom": "1px", "left": "1px"},
                "style": "solid",
                "color": {"raw": "color-mix(in oklch, var(--white) 16%, transparent)"},
                "radius": radius("m")},
    "_padding": pad("1.5rem"), "_height": "100%",
    "_display": "flex", "_direction": "column", "_rowGap": "var(--space-xs)"})
C_REVTXT = gclass("revtxt", "review-card__text", {
    "_typography": {"font-family": FONT, "font-size": "var(--text-m)",
                    "line-height": BODY, "color": c("text-light")}})
C_REVNAME = gclass("revnam", "review-card__name", {
    "_typography": {"font-family": FONT, "font-size": "var(--text-s)",
                    "font-weight": "600", "color": c("text-light")}})
C_REVMETA = gclass("revmet", "review-card__meta", {
    "_typography": {"font-family": FONT, "font-size": "var(--text-xs)",
                    "color": c("text-light-muted")}})

# ================================================================ MODULES
C_TICK = gclass("ticklt", "ticklist__item", {
    "_display": "flex", "_direction": "row", "_columnGap": "var(--space-xs)",
    "_alignItems": "flex-start",
    "_typography": {"font-family": FONT, "font-size": "var(--text-m)",
                    "line-height": BODY, "color": c("text-dark")},
    "_padding": {"top": "var(--space-xxs)", "bottom": "var(--space-xxs)"},
    "_border": {"width": {"bottom": "1px"}, "style": "solid",
                "color": c("neutral-ultra-light")}})
C_STEPNUM = gclass("stepnm", "step__number", {
    "_typography": {"font-family": FONT, "font-size": "var(--text-s)",
                    "font-weight": "700", "color": c("primary-dark"),
                    "letter-spacing": "var(--letter-spacing-eyebrow)"}})
C_SPECITM = gclass("specit", "spec-item", {
    "_display": "flex", "_direction": "column", "_rowGap": "var(--space-xxs)",
    "_padding": {"left": "var(--space-s)"},
    "_border": {"width": {"left": "3px"}, "style": "solid", "color": c("primary")}})
C_SPECLBL = gclass("speclb", "spec-item__label", {
    "_typography": {"font-family": FONT, "font-size": "var(--text-xs)",
                    "font-weight": "600", "text-transform": "uppercase",
                    "letter-spacing": "var(--letter-spacing-eyebrow)",
                    "color": c("text-dark-muted")}})
C_SPECVAL = gclass("specvl", "spec-item__value", {
    "_typography": {"font-family": FONT, "font-size": "var(--text-m)",
                    "line-height": BODY, "color": c("text-dark")}})
C_MEDIA = gclass("mediaf", "media", {
    "_border": {"radius": radius("l")},
    "_objectFit": "cover", "_aspectRatio": "4/3", "_width": "100%"})
C_TRUSTPT = gclass("trstpt", "trust-strip__point", {
    "_display": "flex", "_direction": "column", "_rowGap": "var(--space-xxs)"})
C_TRUSTVAL = gclass("trstvl", "trust-strip__value", {
    "_typography": {"font-family": FONT, "font-size": "var(--text-s)",
                    "font-weight": "700", "color": c("text-dark")}})
C_TRUSTLBL = gclass("trstlb", "trust-strip__label", {
    "_typography": {"font-family": FONT, "font-size": "var(--text-xs)",
                    "line-height": BODY, "color": c("text-dark-muted")}})
C_FAQQ = gclass("faqque", "faq-item__q", {
    "_typography": {"font-family": FONT, "font-size": "var(--text-l)",
                    "font-weight": "600", "color": c("text-dark")}})
C_FAQA = gclass("faqans", "faq-item__a", {
    "_typography": {"font-family": FONT, "font-size": "var(--text-m)",
                    "line-height": BODY, "color": c("text-dark-muted")}})
C_LINK = gclass("lnkinl", "inline-link", {
    "_typography": {"font-family": FONT, "font-size": "var(--text-s)",
                    "font-weight": "600", "color": c("primary-dark")}})
C_BADGE = gclass("badgeb", "badge", {
    "_display": "inline-flex", "_alignItems": "center", "_alignSelf": "flex-start",
    "_padding": pad("var(--space-xxs)", "var(--space-xs)"),
    "_border": {"radius": radius("s")},
    "_typography": {"font-family": FONT, "font-size": "var(--text-xs)",
                    "font-weight": "700", "text-transform": "uppercase",
                    "letter-spacing": "var(--letter-spacing-eyebrow)"}})
C_BADGEACC = gclass("badgea", "badge--accent", {
    "_background": {"color": c("accent-ultra-light")},
    "_typography": {"color": c("accent-dark")}})
C_BADGENEU = gclass("badgen", "badge--neutral", {
    "_background": {"color": c("neutral-ultra-light")},
    "_typography": {"color": c("text-dark-muted")}})

BTN_PRIMARY = "btn--accent"     # orange = main conversion (per bricks-json/README.md)
BTN_SECONDARY = "btn--primary"  # green  = call
TAG_PHONE = "{acf_main_phone_number}"


# ---------------------------------------------------------------- helpers
def section(prefix, label, bg=None, surface=None, tight=False, cond=None, extra=None):
    st = {"tag": "section", "_cssGlobalClasses": [C_SECTIGHT if tight else C_SEC]}
    if surface:
        st["_cssClasses"] = surface
    if bg:
        st["_background"] = {"color": {"raw": bg}}
    if cond:
        st["_conditions"] = cond
    if extra:
        st.update(extra)
    return el(nid(prefix), "section", 0, st, label)


def shell(parent, prefix):
    return el(nid(prefix), "container", parent, {"_cssGlobalClasses": [C_SHELL]}, "Shell")


def h2(parent, prefix, text, light=False):
    cls = [C_HEAD] + ([C_HEADLT] if light else [])
    return el(nid(prefix), "heading", parent, {"tag": "h2", "text": text,
                                               "_cssGlobalClasses": cls})


def quote_buttons(parent, prefix, light=False):
    """Primary quote CTA (with per-page override) + phone CTA."""
    wrap = el(nid(prefix), "block", parent, {"_cssGlobalClasses": [C_ACTIONS]}, "CTA Buttons")
    el(nid(prefix), "button", wrap, {
        "text": "{acf_primary_cta_label @fallback:'Request a Free Quote'}",
        "tag": "a", "size": "lg", "_cssClasses": BTN_PRIMARY,
        "link": {"type": "meta", "useDynamicData": "{acf_primary_cta_link}"},
        "_conditions": [[notempty("{acf_primary_cta_link}")]]}, "Quote CTA (page)")
    el(nid(prefix), "button", wrap, {
        "text": "{acf_default_quote_cta_button_label @fallback:'Request a Free Quote'}",
        "tag": "a", "size": "lg", "_cssClasses": BTN_PRIMARY,
        "link": {"type": "external", "url": "/contact/"},
        "_conditions": [[isempty("{acf_primary_cta_link}")]]}, "Quote CTA (global)")
    el(nid(prefix), "button", wrap, {
        "text": "{acf_phone_cta_label @fallback:'Call 833.388.8873'}",
        "tag": "a", "size": "lg", "_cssClasses": BTN_SECONDARY,
        "link": {"type": "external", "url": "tel:" + TAG_PHONE},
        "_conditions": [[notempty(TAG_PHONE)]]}, "Phone CTA")
    return wrap


# ---------------------------------------------------------------- emit + validate
ALLOWED_KEY_RE = re.compile(
    r"^_(background|padding|margin|display|direction|gap|rowGap|columnGap|alignItems|alignSelf|"
    r"alignContent|justifyContent|flexWrap|flexGrow|flexShrink|order|typography|border|boxShadow|"
    r"width|widthMin|widthMax|height|heightMin|heightMax|aspectRatio|objectFit|objectPosition|"
    r"textAlign|cursor|opacity|overflow|position|top|left|right|bottom|zIndex|transform|transition|"
    r"gridTemplateColumns|gridTemplateRows|cssGlobalClasses|cssClasses|cssId|cssCustom|conditions|"
    r"hidden|shapeDividers|interactions|attributes)"
    r"(:(tablet_portrait|tablet_landscape|mobile_landscape|mobile_portrait|desktop))?"
    r"(:(hover|active|focus))?$")


def emit(template, out):
    """Write + validate a template export, plus a clipboard-format twin.

    Two different doors into Bricks:
      * <name>.json           -> Bricks > Templates > Import  (template export format)
      * <name>.clipboard.json -> Ctrl/Cmd+V in the builder    (bricksCopiedElements)
    Paste validation checks `source`, and the class key is camelCase there,
    so the same tree has to be wrapped differently for each.
    """
    with open(out, "w", encoding="utf-8") as f:
        json.dump(template, f, indent=2, ensure_ascii=False)

    nodes = template.get("content") or template.get("header") or template.get("footer")
    clipboard = {
        "content": nodes,
        "source": "bricksCopiedElements",
        "sourceUrl": "https://prideinturf.com",
        "version": "2.3.6",
        "globalClasses": template["global_classes"],
        "globalElements": [],
    }
    clip_out = out.replace(".json", ".clipboard.json")
    with open(clip_out, "w", encoding="utf-8") as f:
        json.dump(clipboard, f, indent=2, ensure_ascii=False)

    ids = [n["id"] for n in nodes]
    assert len(ids) == len(set(ids)), "duplicate ids"
    byid = {n["id"]: n for n in nodes}
    for n in nodes:
        assert re.fullmatch(r"[a-z0-9]{6}", n["id"]), n["id"]
        if n["parent"] != 0:
            assert n["parent"] in byid, f"orphan {n['id']}"
            assert n["id"] in byid[n["parent"]]["children"], f"not in parent children: {n['id']}"
        for c_ in n["children"]:
            assert c_ in byid and byid[c_]["parent"] == n["id"], f"bad child {c_}"

    used = set()
    for n in nodes:
        used.update(n["settings"].get("_cssGlobalClasses", []))
    declared = {g["id"]: g for g in template["global_classes"]}
    missing = used - set(declared)
    assert not missing, f"missing global classes: {missing}"

    # No invalid setting keys, no hardcoded colours.
    bad_keys, hardcoded = set(), set()
    for g in template["global_classes"]:
        for k in g["settings"]:
            if not ALLOWED_KEY_RE.match(k):
                bad_keys.add(f"{g['name']}.{k}")
        blob = json.dumps(g["settings"])
        hardcoded.update(re.findall(r'"hex":\s*"(#[0-9A-Fa-f]{3,8})"', blob))
    assert not bad_keys, f"invalid setting keys: {sorted(bad_keys)}"
    assert not hardcoded, f"hardcoded hex colours: {sorted(hardcoded)}"

    names = [g["name"] for g in template["global_classes"]]
    assert len(names) == len(set(names)), "duplicate class names"

    roots = [n for n in nodes if n["parent"] == 0]

    def cnt(t):
        return len([n for n in nodes if n["settings"].get("tag") == t])

    loops = [n for n in nodes if n["settings"].get("hasLoop")]
    print(f"OK  {out}")
    print(f"    nodes={len(nodes)}  classes={len(declared)}  sections={len(roots)}"
          f"  h1={cnt('h1')} h2={cnt('h2')} h3={cnt('h3')}  loops={len(loops)}")
    for r in roots:
        print("    §", r.get("label"))
    print(f"    paste copy -> {clip_out}")
    return template
