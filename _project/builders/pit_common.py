"""Shared Bricks builder helpers + the Pride In Turf global class system.
Used by every PIT template builder so imported classes merge by name."""
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
    if label: n["label"] = label
    NODES.append(n)
    if parent != 0:
        for p in NODES:
            if p["id"] == parent:
                p["children"].append(eid); break
        else:
            raise SystemExit(f"parent {parent} not found for {eid}")
    return eid

def gclass(cid, name, settings):
    assert len(cid) == 6
    CLASSES[cid] = {"id": cid, "name": name, "settings": settings}
    return cid

# ---------------------------------------------------------------- conditions
def notempty(tag):
    return {"key": "dynamic_data", "dynamic_data": tag, "compare": "empty_not"}
def isempty(tag):
    return {"key": "dynamic_data", "dynamic_data": tag, "compare": "empty"}
def eq(tag, val):
    return {"key": "dynamic_data", "dynamic_data": tag, "compare": "==", "value": val}

# ---------------------------------------------------------------- classes
C_SEC      = gclass("pitsec", "pit-section", {
    "_padding": {"top": "var(--section-space-m)", "bottom": "var(--section-space-m)"}})
C_SECTIGHT = gclass("pitsct", "pit-section--tight", {
    "_padding": {"top": "var(--space-l)", "bottom": "var(--space-l)"}})
C_SHELL    = gclass("pitshl", "pit-shell", {
    "_width": "100%", "_widthMax": "var(--content-width)",
    "_margin": {"left": "auto", "right": "auto"},
    "_display": "flex", "_direction": "column", "_rowGap": "var(--space-l)"})
C_HEAD     = gclass("pithed", "pit-section__title", {
    "_typography": {"font-size": "var(--h2)", "font-weight": "var(--font-weight-heading)",
                    "line-height": "var(--line-height-heading)",
                    "letter-spacing": "var(--letter-spacing-heading)",
                    "color": {"raw": "var(--text-dark)"}}})
C_HEADLT   = gclass("pithdl", "pit-section__title--light", {
    "_typography": {"color": {"raw": "var(--text-light)"}}})
C_LEAD     = gclass("pitled", "pit-section__lead", {
    "_typography": {"font-size": "var(--text-l)", "color": {"raw": "var(--text-dark-muted)"}},
    "_widthMax": "65ch"})
C_EYEBROW  = gclass("piteyb", "pit-eyebrow", {
    "_typography": {"font-size": "var(--text-xs)", "font-weight": "600",
                    "text-transform": "uppercase",
                    "letter-spacing": "var(--letter-spacing-eyebrow)",
                    "color": {"raw": "var(--primary-dark)"}}})
C_GRID3    = gclass("pitgr3", "pit-grid-3", {
    "_display": "grid", "_gridTemplateColumns": "repeat(3, minmax(0, 1fr))",
    "_columnGap": "var(--grid-gap)", "_rowGap": "var(--grid-gap)",
    "_gridTemplateColumns:tablet_portrait": "repeat(2, minmax(0, 1fr))",
    "_gridTemplateColumns:mobile_landscape": "1fr"})
C_GRID2    = gclass("pitgr2", "pit-grid-2", {
    "_display": "grid", "_gridTemplateColumns": "repeat(2, minmax(0, 1fr))",
    "_columnGap": "var(--grid-gap)", "_rowGap": "var(--grid-gap)",
    "_gridTemplateColumns:mobile_landscape": "1fr"})
C_GRID4    = gclass("pitgr4", "pit-grid-4", {
    "_display": "grid", "_gridTemplateColumns": "repeat(4, minmax(0, 1fr))",
    "_columnGap": "var(--grid-gap)", "_rowGap": "var(--space-s)",
    "_gridTemplateColumns:tablet_portrait": "repeat(2, minmax(0, 1fr))",
    "_gridTemplateColumns:mobile_portrait": "1fr"})
C_CARD     = gclass("pitcrd", "pit-card", {
    "_background": {"color": {"raw": "var(--white)"}},
    "_border": {"width": {"top": "1px", "right": "1px", "bottom": "1px", "left": "1px"},
                "style": "solid", "color": {"raw": "var(--neutral-light)"},
                "radius": {"top": "var(--radius-m)", "right": "var(--radius-m)",
                           "bottom": "var(--radius-m)", "left": "var(--radius-m)"}},
    "_boxShadow": {"values": {"offsetX": "0", "offsetY": "1px", "blur": "3px", "spread": "0"},
                   "color": {"raw": "rgba(35, 31, 32, .08)"}},
    "_padding": {"top": "1.5rem", "right": "1.5rem", "bottom": "1.5rem", "left": "1.5rem"},
    "_display": "flex", "_direction": "column", "_rowGap": "var(--space-xs)"})
C_CARDFEAT = gclass("pitcrf", "pit-card--featured", {
    "_padding": {"top": "2rem", "right": "2rem", "bottom": "2rem", "left": "2rem"},
    "_boxShadow": {"values": {"offsetX": "0", "offsetY": "4px", "blur": "12px", "spread": "0"},
                   "color": {"raw": "rgba(35, 31, 32, .12)"}}})
C_CARDTTL  = gclass("pitctt", "pit-card__title", {
    "_typography": {"font-size": "var(--h3)", "font-weight": "var(--font-weight-heading)",
                    "line-height": "var(--line-height-heading)",
                    "color": {"raw": "var(--text-dark)"}}})
C_CARDTXT  = gclass("pitctx", "pit-card__text", {
    "_typography": {"font-size": "var(--text-m)", "color": {"raw": "var(--text-dark-muted)"}}})
C_ACTIONS  = gclass("pitact", "pit-actions", {
    "_display": "flex", "_direction": "row", "_columnGap": "var(--space-s)",
    "_rowGap": "var(--space-xs)", "_flexWrap": "wrap", "_alignItems": "center"})
C_TICK     = gclass("pittck", "pit-ticklist__item", {
    "_display": "flex", "_direction": "row", "_columnGap": "var(--space-xs)",
    "_alignItems": "flex-start",
    "_typography": {"font-size": "var(--text-m)", "color": {"raw": "var(--text-dark)"}},
    "_padding": {"top": "var(--space-xxs)", "bottom": "var(--space-xxs)"},
    "_border": {"width": {"bottom": "1px"}, "style": "solid",
                "color": {"raw": "var(--neutral-ultra-light)"}}})
C_STEPNUM  = gclass("pitstn", "pit-step__number", {
    "_typography": {"font-size": "var(--text-s)", "font-weight": "700",
                    "color": {"raw": "var(--primary-dark)"},
                    "letter-spacing": "var(--letter-spacing-eyebrow)"}})
C_SPECITM  = gclass("pitspi", "pit-spec__item", {
    "_display": "flex", "_direction": "column", "_rowGap": "var(--space-xxs)",
    "_padding": {"left": "var(--space-s)"},
    "_border": {"width": {"left": "3px"}, "style": "solid",
                "color": {"raw": "var(--primary)"}}})
C_SPECLBL  = gclass("pitspl", "pit-spec__label", {
    "_typography": {"font-size": "var(--text-xs)", "font-weight": "600",
                    "text-transform": "uppercase",
                    "letter-spacing": "var(--letter-spacing-eyebrow)",
                    "color": {"raw": "var(--text-dark-muted)"}}})
C_SPECVAL  = gclass("pitspv", "pit-spec__value", {
    "_typography": {"font-size": "var(--text-m)", "color": {"raw": "var(--text-dark)"}}})
C_REVCARD  = gclass("pitrvc", "review-card", {
    "_background": {"color": {"raw": "rgba(255, 255, 255, .06)"}},
    "_border": {"width": {"top": "1px", "right": "1px", "bottom": "1px", "left": "1px"},
                "style": "solid", "color": {"raw": "rgba(255, 255, 255, .16)"},
                "radius": {"top": "var(--radius-m)", "right": "var(--radius-m)",
                           "bottom": "var(--radius-m)", "left": "var(--radius-m)"}},
    "_padding": {"top": "1.5rem", "right": "1.5rem", "bottom": "1.5rem", "left": "1.5rem"},
    "_display": "flex", "_direction": "column", "_rowGap": "var(--space-xs)"})
C_REVTXT   = gclass("pitrvt", "review-card__text", {
    "_typography": {"font-size": "var(--text-m)", "color": {"raw": "var(--text-light)"}}})
C_REVNAME  = gclass("pitrvn", "review-card__name", {
    "_typography": {"font-size": "var(--text-s)", "font-weight": "600",
                    "color": {"raw": "var(--text-light)"}}})
C_REVMETA  = gclass("pitrvm", "review-card__meta", {
    "_typography": {"font-size": "var(--text-xs)",
                    "color": {"raw": "var(--text-light-muted)"}}})
C_LIGHTTX  = gclass("pitltx", "pit-text--light", {
    "_typography": {"font-size": "var(--text-m)",
                    "color": {"raw": "var(--text-light-muted)"}}})
C_MEDIA    = gclass("pitmed", "pit-media", {
    "_border": {"radius": {"top": "var(--radius-l)", "right": "var(--radius-l)",
                           "bottom": "var(--radius-l)", "left": "var(--radius-l)"}},
    "_objectFit": "cover", "_aspectRatio": "4/3", "_width": "100%"})

BTN_PRIMARY   = "btn--accent"     # orange = main conversion (per bricks-json/README.md)
BTN_SECONDARY = "btn--primary"    # green  = call

TAG_PHONE = "{acf_main_phone_number}"

# ---------------------------------------------------------------- helpers
def section(prefix, label, bg=None, surface=None, tight=False, cond=None, extra=None):
    st = {"tag": "section", "_cssGlobalClasses": [C_SECTIGHT if tight else C_SEC]}
    if surface: st["_cssClasses"] = surface
    if bg: st["_background"] = {"color": {"raw": bg}}
    if cond: st["_conditions"] = cond
    if extra: st.update(extra)
    return el(nid(prefix), "section", 0, st, label)

def shell(parent, prefix):
    return el(nid(prefix), "container", parent, {"_cssGlobalClasses": [C_SHELL]}, "Shell")

def h2(parent, prefix, text, light=False):
    cls = [C_HEAD] + ([C_HEADLT] if light else [])
    return el(nid(prefix), "heading", parent, {"tag": "h2", "text": text, "_cssGlobalClasses": cls})

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


def emit(template, out):
    """Write + validate a template export, plus a clipboard-format twin.

    Two different doors into Bricks:
      * <name>.json           -> Bricks > Templates > Import  (template export format)
      * <name>.clipboard.json -> Ctrl/Cmd+V in the builder    (bricksCopiedElements)
    Paste validation checks `source`, and the class key is camelCase there,
    so the same tree has to be wrapped differently for each.
    """
    import json, re
    with open(out, "w", encoding="utf-8") as f:
        json.dump(template, f, indent=2, ensure_ascii=False)

    nodes_for_clip = template.get("content") or template.get("header") or template.get("footer")
    clipboard = {
        "content": nodes_for_clip,
        "source": "bricksCopiedElements",
        "sourceUrl": "https://prideinturf.com",
        "version": "2.3.6",
        "globalClasses": template["global_classes"],
        "globalElements": [],
    }
    clip_out = out.replace(".json", ".clipboard.json")
    with open(clip_out, "w", encoding="utf-8") as f:
        json.dump(clipboard, f, indent=2, ensure_ascii=False)
    nodes = template.get("content") or template.get("header") or template.get("footer")
    ids = [n["id"] for n in nodes]
    assert len(ids) == len(set(ids)), "duplicate ids"
    byid = {n["id"]: n for n in nodes}
    for n in nodes:
        assert re.fullmatch(r"[a-z0-9]{6}", n["id"]), n["id"]
        if n["parent"] != 0:
            assert n["parent"] in byid, f"orphan {n['id']}"
            assert n["id"] in byid[n["parent"]]["children"], f"not in parent children: {n['id']}"
        for c in n["children"]:
            assert c in byid and byid[c]["parent"] == n["id"], f"bad child {c}"
    used = set()
    for n in nodes:
        used.update(n["settings"].get("_cssGlobalClasses", []))
    declared = {c["id"] for c in template["global_classes"]}
    missing = used - declared
    assert not missing, f"missing global classes: {missing}"
    roots = [n for n in nodes if n["parent"] == 0]
    def cnt(t): return len([n for n in nodes if n["settings"].get("tag") == t])
    loops = [n for n in nodes if n["settings"].get("hasLoop")]
    print(f"OK  {out}")
    print(f"    nodes={len(nodes)}  classes={len(declared)}  sections={len(roots)}"
          f"  h1={cnt('h1')} h2={cnt('h2')} h3={cnt('h3')}  loops={len(loops)}")
    for r in roots:
        print("    §", r.get("label"))
    print(f"    paste copy -> {clip_out}")
    return template
