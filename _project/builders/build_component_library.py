#!/usr/bin/env python3
"""Pride In Turf — Component Library specimen page.

Renders every canonical component from pit_common so the class system can be
reviewed visually in one place. Static content only — no ACF, no query loops.
The classes here are the SAME objects the five page templates use, so this page
is a live spec, not a mock-up: change a class in pit_common and every consumer
plus this page move together.

    python3 _project/builders/build_component_library.py
"""
import os, sys
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from pit_common import *

LOREM = ("Bermuda and Zoysia lawns respond differently to the same treatment, so the "
         "programme is matched to the grass type before anything is applied.")


def spec(title, note=None, bg="var(--white)", surface=None):
    s = section("l", title, bg=bg, surface=surface)
    sh = shell(s, "l")
    el(nid(), "text-basic", sh, {"text": title.upper(), "tag": "span",
                                 "_cssGlobalClasses": [C_EYEBROW]}, "Spec Label")
    if note:
        el(nid(), "text-basic", sh, {"text": note, "tag": "p",
                                     "_cssGlobalClasses": [C_LEAD]}, "Spec Note")
    return sh


def card(parent, variant, title, text, eyebrow=None, label=None, featured=False):
    cls = [C_CARD] + ([C_CARDFEAT] if featured else []) + ([variant] if variant else [])
    box = el(nid(), "div", parent, {"_cssGlobalClasses": cls}, label or title)
    if eyebrow:
        el(nid(), "text-basic", box, {"text": eyebrow, "tag": "span",
                                      "_cssGlobalClasses": [C_EYEBROW]}, "Eyebrow")
    el(nid(), "heading", box, {"tag": "h3", "text": title,
                               "_cssGlobalClasses": [C_CARDTTL]}, "Title")
    el(nid(), "text-basic", box, {"text": text, "tag": "p",
                                  "_cssGlobalClasses": [C_CARDTXT]}, "Text")
    acts = el(nid(), "div", box, {"_cssGlobalClasses": [C_CARDACT]}, "Actions")
    el(nid(), "text-link", acts, {"text": "View", "link": {"type": "external", "url": "#"},
                                  "_cssGlobalClasses": [C_LINK]}, "Link")
    return box


# ================================================================ 0 — TITLE
s0 = section("l", "0 · Library Header", bg="var(--base-ultra-light)", surface="surface-hero")
s0c = shell(s0, "l")
el(nid(), "text-basic", s0c, {"text": "Design System", "tag": "span",
                              "_cssGlobalClasses": [C_EYEBROW]}, "Eyebrow")
el(nid(), "heading", s0c, {"tag": "h1", "text": "Pride In Turf component library",
    "_typography": {"font-family": FONT, "font-size": "var(--h1)",
                    "font-weight": "var(--font-weight-heading)",
                    "line-height": HEADL,
                    "letter-spacing": "var(--letter-spacing-heading)",
                    "color": c("text-dark")}}, "H1")
el(nid(), "text-basic", s0c, {
    "text": "Every class on this page is the same global class the Service, Program, About, "
            "Contact and Branch templates use. Editing one here changes it everywhere.",
    "tag": "p", "_cssGlobalClasses": [C_LEAD]}, "Intro")

# ================================================================ 1 — TYPOGRAPHY
sh = spec("Typography", "Section title, lead, body and eyebrow. One H1 per page — the H1 style "
                        "is applied inline in templates, not as a class, because it is used once.")
el(nid(), "heading", sh, {"tag": "h2", "text": "Section title (h2)",
                          "_cssGlobalClasses": [C_HEAD]}, "section-title")
el(nid(), "text-basic", sh, {"text": "Section lead — 65ch measure, muted.", "tag": "p",
                             "_cssGlobalClasses": [C_LEAD]}, "section-lead")
el(nid(), "heading", sh, {"tag": "h3", "text": "Card title (h3)",
                          "_cssGlobalClasses": [C_CARDTTL]}, "card__title")
el(nid(), "text-basic", sh, {"text": LOREM, "tag": "p",
                             "_cssGlobalClasses": [C_CARDTXT]}, "card__text")
el(nid(), "text-basic", sh, {"text": "Eyebrow label", "tag": "span",
                             "_cssGlobalClasses": [C_EYEBROW]}, "eyebrow")

# ================================================================ 2 — BUTTONS
sh = spec("Buttons", "Buttons are ACSS classes attached via _cssClasses — Bricks does not define "
                     "them. btn--accent is the quote CTA (orange), btn--primary is the call CTA "
                     "(green).", bg="var(--neutral-ultra-light)", surface="surface-subtle-grid")
row = el(nid(), "div", sh, {"_cssGlobalClasses": [C_ACTIONS]}, "Button Row")
el(nid(), "button", row, {"text": "Request a Free Quote", "tag": "a", "size": "lg",
                          "_cssClasses": BTN_PRIMARY,
                          "link": {"type": "external", "url": "#"}}, "btn--accent")
el(nid(), "button", row, {"text": "Call 833.388.8873", "tag": "a", "size": "lg",
                          "_cssClasses": BTN_SECONDARY,
                          "link": {"type": "external", "url": "#"}}, "btn--primary")
el(nid(), "text-link", row, {"text": "Text link", "link": {"type": "external", "url": "#"},
                             "_cssGlobalClasses": [C_LINK]}, "inline-link")
brow = el(nid(), "div", sh, {"_cssGlobalClasses": [C_ACTIONS]}, "Badge Row")
el(nid(), "text-basic", brow, {"text": "Featured", "tag": "span",
                               "_cssGlobalClasses": [C_BADGE, C_BADGEACC]}, "badge--accent")
el(nid(), "text-basic", brow, {"text": "Add-on", "tag": "span",
                               "_cssGlobalClasses": [C_BADGE, C_BADGENEU]}, "badge--neutral")

# ================================================================ 3 — CARDS
sh = spec("Cards", "One base `card` plus a per-type modifier, per the card-naming rule. "
                   "Standard cards get 1.5rem padding and the M/2 shadow; featured cards get "
                   "2rem and the full M shadow.")
g = el(nid(), "div", sh, {"_cssGlobalClasses": [C_GRID3]}, "Card Grid")
card(g, C_SERVICECARD, "Core Aeration", LOREM, eyebrow="Lawn Service", label="service-card")
card(g, C_PROGRAMCARD, "Warm Season Lawn Care", LOREM, eyebrow="Lawn Care Program",
     label="program-card")
card(g, C_PRODUCTCARD, "Pre-emergent", LOREM, eyebrow="Treatment type", label="product-card")
g2 = el(nid(), "div", sh, {"_cssGlobalClasses": [C_GRID3]}, "Card Grid 2")
card(g2, C_BRANCHCARD, "Pride In Turf Hoschton", "1900 GA Hwy 211, Hoschton, GA 30548",
     eyebrow="Branch", label="branch-card")
card(g2, C_TEAMCARD, "Team member name", "Job title sits under the name as plain text, "
                                         "never as a heading.", label="team-card")
card(g2, C_PROGRAMCARD, "Split Lawn Care", LOREM, eyebrow="Recommended",
     label="program-card--featured", featured=True)

# ================================================================ 4 — REVIEW CARDS (DARK)
sh = spec("Review cards", "Review cards live on the dark proof surface and carry their own "
                          "palette — light text on a translucent fill.",
          bg="var(--base-ultra-dark)", surface="surface-proof")
rg = el(nid(), "div", sh, {"_cssGlobalClasses": [C_GRID3]}, "Review Grid")
for i in range(3):
    r = el(nid(), "div", rg, {"_cssGlobalClasses": [C_REVCARD]}, f"review-card {i+1}")
    el(nid(), "text-basic", r, {"text": LOREM, "tag": "p",
                                "_cssGlobalClasses": [C_REVTXT]}, "review-card__text")
    el(nid(), "text-basic", r, {"text": "Reviewer name", "tag": "span",
                                "_cssGlobalClasses": [C_REVNAME]}, "review-card__name")
    el(nid(), "text-basic", r, {"text": "Braselton, GA · Google", "tag": "span",
                                "_cssGlobalClasses": [C_REVMETA]}, "review-card__meta")

# ================================================================ 5 — MODULES
sh = spec("Supporting modules", "Trust strip, spec items, steps and tick lists. None of these "
                                "titles are headings — they are labels.")
tg = el(nid(), "div", sh, {"_cssGlobalClasses": [C_GRID4]}, "Trust Strip")
for t, v in (("Since 2005", "Two decades treating Georgia turf."),
             ("Licensed applicators", "Every technician is trained and certified."),
             ("Program-based", "Treatments matched to grass type and season."),
             ("Clear communication", "You know what was applied and why.")):
    p = el(nid(), "div", tg, {"_cssGlobalClasses": [C_TRUSTPT]}, "trust-strip__point")
    el(nid(), "text-basic", p, {"text": t, "tag": "span",
                                "_cssGlobalClasses": [C_TRUSTVAL]}, "value")
    el(nid(), "text-basic", p, {"text": v, "tag": "p",
                                "_cssGlobalClasses": [C_TRUSTLBL]}, "label")

sg = el(nid(), "div", sh, {"_cssGlobalClasses": [C_GRID3]}, "Spec Grid")
for lbl, val in (("Best timing", "Late spring into early summer"),
                 ("Turf types", "Bermuda, Zoysia"),
                 ("Applications", "8 per year")):
    it = el(nid(), "div", sg, {"_cssGlobalClasses": [C_SPECITM]}, "spec-item")
    el(nid(), "text-basic", it, {"text": lbl, "tag": "span",
                                 "_cssGlobalClasses": [C_SPECLBL]}, "label")
    el(nid(), "text-basic", it, {"text": val, "tag": "p",
                                 "_cssGlobalClasses": [C_SPECVAL]}, "value")

stg = el(nid(), "div", sh, {"_cssGlobalClasses": [C_GRID3]}, "Step Grid")
for i, (t, x) in enumerate((("Evaluation", "We inspect the lawn and identify what is limiting it."),
                            ("Treatment", "The right application for the grass and the season."),
                            ("Follow-up", "We check the response and adjust the next round.")), 1):
    st = el(nid(), "div", stg, {"_cssGlobalClasses": [C_CARD]}, f"Step {i}")
    el(nid(), "text-basic", st, {"text": f"Step {i}", "tag": "span",
                                 "_cssGlobalClasses": [C_STEPNUM]}, "step__number")
    el(nid(), "heading", st, {"tag": "h3", "text": t,
                              "_cssGlobalClasses": [C_CARDTTL]}, "Title")
    el(nid(), "text-basic", st, {"text": x, "tag": "p",
                                 "_cssGlobalClasses": [C_CARDTXT]}, "Text")

tl = el(nid(), "div", sh, {"_display": "flex", "_direction": "column",
                           "_widthMax": "var(--content-width-narrow)"}, "Tick List")
for x in ("Thin or patchy turf", "Persistent broadleaf weeds", "Disease pressure in humid months"):
    el(nid(), "text-basic", tl, {"text": x, "tag": "span",
                                 "_cssGlobalClasses": [C_TICK]}, "ticklist__item")

# ================================================================ 6 — FAQ
sh = spec("FAQ item", "Questions are H3. The accordion element supplies the interaction; these "
                      "classes supply the type.", bg="var(--neutral-ultra-light)",
          surface="surface-subtle-grid")
fw = el(nid(), "div", sh, {"_display": "flex", "_direction": "column",
                           "_rowGap": "var(--space-s)",
                           "_widthMax": "var(--content-width-narrow)"}, "FAQ Wrap")
for q, a in (("How soon will I see a difference?",
              "Most lawns show visible response within two to three weeks, depending on the "
              "season and the condition of the turf when we started."),
             ("Do I need to be home for treatment?",
              "No. We treat the lawn and leave a summary of what was applied.")):
    el(nid(), "heading", fw, {"tag": "h3", "text": q,
                              "_cssGlobalClasses": [C_FAQQ]}, "faq-item__q")
    el(nid(), "text-basic", fw, {"text": a, "tag": "p",
                                 "_cssGlobalClasses": [C_FAQA]}, "faq-item__a")

# ================================================================ 7 — CTA BAND
s9 = section("l", "CTA band", bg="var(--base-ultra-dark)", surface="surface-dark-cta")
s9c = el(nid(), "container", s9, {
    "_display": "flex", "_direction": "column", "_rowGap": "var(--space-s)",
    "_alignItems": "center", "_textAlign": "center",
    "_widthMax": "var(--content-width-narrow)",
    "_margin": {"left": "auto", "right": "auto"}}, "CTA Shell")
el(nid(), "heading", s9c, {"tag": "h2", "text": "Ready for a healthier lawn?",
                           "_cssGlobalClasses": [C_HEAD, C_HEADLT]}, "section-title--light")
el(nid(), "text-basic", s9c, {
    "text": "Tell us about your lawn and we will recommend the right programme.", "tag": "p",
    "_cssGlobalClasses": [C_LIGHTTX]}, "text-on-dark")
row = el(nid(), "div", s9c, {"_cssGlobalClasses": [C_ACTIONS]}, "CTA Buttons")
el(nid(), "button", row, {"text": "Request a Free Quote", "tag": "a", "size": "lg",
                          "_cssClasses": BTN_PRIMARY,
                          "link": {"type": "external", "url": "#"}}, "Quote")
el(nid(), "button", row, {"text": "Call 833.388.8873", "tag": "a", "size": "lg",
                          "_cssClasses": BTN_SECONDARY,
                          "link": {"type": "external", "url": "#"}}, "Phone")

emit({
    "name": "pit-component-library",
    "title": "PIT — Component Library",
    "type": "content",
    "content": NODES,
    "pageSettings": {},
    # No templateConditions: this is a reference page, it must never auto-apply.
    "templateSettings": {},
    "global_classes": list(CLASSES.values()),
    "globalVariables": [],
    "globalVariablesCategories": []},
    "/home/user/prideinturf/_project/exports/imports/component-library.json")
