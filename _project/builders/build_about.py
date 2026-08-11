#!/usr/bin/env python3
"""Pride In Turf — About Us page template (page ID 286). Run from anywhere:
    python3 _project/builders/build_about.py
"""
import os, sys
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from pit_common import *

# ================================================================ 1 — ABOUT HERO
s1 = section("a", "1 · About Hero", bg="var(--base-ultra-light)", surface="surface-hero")
s1c = el(nid(), "container", s1, {
    "_display": "grid", "_gridTemplateColumns": "1.1fr 0.9fr",
    "_columnGap": "var(--space-xl)", "_rowGap": "var(--space-l)", "_alignItems": "center",
    "_gridTemplateColumns:tablet_portrait": "1fr"}, "Hero Grid")
s1b = el(nid(), "block", s1c, {
    "_display": "flex", "_direction": "column", "_rowGap": "var(--space-s)"}, "Hero Copy")
el(nid(), "text-basic", s1b, {"text": "{acf_hero_eyebrow}", "tag": "span",
    "_cssGlobalClasses": [C_EYEBROW],
    "_conditions": [[notempty("{acf_hero_eyebrow}")]]}, "Eyebrow")

H1 = {"tag": "h1", "_typography": {
    "font-size": "var(--h1)", "font-weight": "var(--font-weight-heading)",
    "line-height": "var(--line-height-heading)",
    "letter-spacing": "var(--letter-spacing-heading)",
    "color": {"raw": "var(--text-dark)"}}}
el(nid(), "heading", s1b, dict(H1, text="{acf_hero_heading_override}",
    _conditions=[[notempty("{acf_hero_heading_override}")]]), "H1 — hero override")
el(nid(), "heading", s1b, dict(H1, text="{post_title}",
    _conditions=[[isempty("{acf_hero_heading_override}")]]), "H1 — page title")

el(nid(), "text-basic", s1b, {"text": "{acf_hero_summary}", "tag": "p",
    "_cssGlobalClasses": [C_LEAD],
    "_conditions": [[notempty("{acf_hero_summary}")]]}, "Hero Summary")
sp = el(nid(), "block", s1b, {
    "_display": "flex", "_direction": "column", "_rowGap": "var(--space-xxs)",
    "_conditions": [[notempty("{acf_selling_point}")]]}, "Selling Points")
spl = el(nid(), "block", sp, {
    "hasLoop": True, "query": {"objectType": "acf_selling_point", "posts_per_page": "4"},
    "_cssGlobalClasses": [C_TICK]}, "Selling Point Loop")
el(nid(), "text-basic", spl, {"text": "{acf_selling_point_point}", "tag": "span"}, "Point")

acts = el(nid(), "block", s1b, {"_cssGlobalClasses": [C_ACTIONS]}, "Hero CTAs")
el(nid(), "button", acts, {
    "text": "{acf_primary_cta_label @fallback:'Request a Lawn Evaluation'}", "tag": "a",
    "size": "lg", "_cssClasses": BTN_PRIMARY,
    "link": {"type": "meta", "useDynamicData": "{acf_primary_cta_link}"},
    "_conditions": [[notempty("{acf_primary_cta_link}")]]}, "Primary CTA")
el(nid(), "button", acts, {
    "text": "{acf_primary_cta_label @fallback:'Request a Lawn Evaluation'}", "tag": "a",
    "size": "lg", "_cssClasses": BTN_PRIMARY,
    "link": {"type": "external", "url": "/contact/"},
    "_conditions": [[isempty("{acf_primary_cta_link}")]]}, "Primary CTA (fallback)")
el(nid(), "button", acts, {
    "text": "{acf_secondary_cta_label}", "tag": "a", "size": "lg",
    "_cssClasses": BTN_SECONDARY,
    "link": {"type": "meta", "useDynamicData": "{acf_secondary_cta_link}"},
    "_conditions": [[notempty("{acf_secondary_cta_label}"),
                     notempty("{acf_secondary_cta_link}")]]}, "Secondary CTA")

s1m = el(nid(), "block", s1c, {}, "Hero Media")
el(nid(), "image", s1m, {"image": {"useDynamicData": "{acf_hero_image}", "size": "large"},
    "_cssGlobalClasses": [C_MEDIA],
    "_conditions": [[notempty("{acf_hero_image}")]]}, "Hero Image")

# ---------------------------------------------------------------- trust strip
ts = section("a", "Trust Strip (supporting module)", bg="var(--white)", tight=True,
             cond=[[notempty("{acf_trust_points}")]])
tsc = shell(ts, "a")
tsg = el(nid(), "block", tsc, {"_cssGlobalClasses": [C_GRID4]}, "Trust Grid")
tsl = el(nid(), "block", tsg, {
    "hasLoop": True, "query": {"objectType": "acf_trust_points", "posts_per_page": "4"},
    "_display": "flex", "_direction": "column", "_rowGap": "var(--space-xxs)"}, "Trust Loop")
el(nid(), "text-basic", tsl, {"text": "{acf_trust_points_trust_point_title}", "tag": "span",
    "_typography": {"font-size": "var(--text-s)", "font-weight": "700",
                    "color": {"raw": "var(--text-dark)"}}}, "Trust Title")
el(nid(), "text-basic", tsl, {"text": "{acf_trust_points_trust_point_text}", "tag": "p",
    "_typography": {"font-size": "var(--text-xs)",
                    "color": {"raw": "var(--text-dark-muted)"}}}, "Trust Text")

# ================================================================ 2 — COMPANY STORY
s2 = section("a", "2 · Company Story", bg="var(--white)",
             cond=[[notempty("{acf_company_story_text}")]])
s2c = shell(s2, "a")
el(nid(), "heading", s2c, {"tag": "h2",
    "text": "{acf_company_story_heading @fallback:'Our story'}",
    "_cssGlobalClasses": [C_HEAD]}, "Story Heading")
el(nid(), "text", s2c, {"text": "{acf_company_story_text}",
    "_typography": {"font-size": "var(--text-m)", "color": {"raw": "var(--text-dark)"}},
    "_widthMax": "70ch"}, "Story Text")

# ================================================================ 3 — LOCAL ROOTS & BRANCHES
s3 = section("a", "3 · Local Roots and Branch Model", bg="var(--neutral-ultra-light)",
             surface="surface-subtle-grid",
             cond=[[notempty("{acf_local_roots_text}")], [notempty("{acf_branch_pages}")]])
s3c = shell(s3, "a")
el(nid(), "heading", s3c, {"tag": "h2",
    "text": "{acf_local_roots_heading @fallback:'Where we work'}",
    "_cssGlobalClasses": [C_HEAD]}, "Local Roots Heading")
el(nid(), "text", s3c, {"text": "{acf_local_roots_text}", "_cssGlobalClasses": [C_LEAD],
    "_conditions": [[notempty("{acf_local_roots_text}")]]}, "Local Roots Text")
# Curated branch pages — Atlanta (291), Hoschton (292), Duluth (293).
s3g = el(nid(), "block", s3c, {"_cssGlobalClasses": [C_GRID3],
    "_conditions": [[notempty("{acf_branch_pages}")]]}, "Branch Grid")
s3l = el(nid(), "block", s3g, {
    "hasLoop": True, "query": {"objectType": "acf_branch_pages", "posts_per_page": "3"},
    "_cssGlobalClasses": [C_CARD]}, "Location Card Loop")
el(nid(), "text-basic", s3l, {"text": "Branch", "tag": "span",
    "_cssGlobalClasses": [C_SPECLBL]}, "Branch Label")
el(nid(), "heading", s3l, {"tag": "h3",
    "text": "{acf_location_display_name @fallback:'{post_title}'}",
    "_cssGlobalClasses": [C_CARDTTL]}, "Branch Name")
el(nid(), "text-basic", s3l, {"text": "{acf_location_short_summary}", "tag": "p",
    "_cssGlobalClasses": [C_CARDTXT]}, "Branch Summary")
# NAP renders only for pages that actually carry a street address.
el(nid(), "text-basic", s3l, {
    "text": "{acf_street_address}<br>{acf_city}, {acf_state} {acf_zipcode}", "tag": "p",
    "_typography": {"font-size": "var(--text-s)", "color": {"raw": "var(--text-dark-muted)"}},
    "_conditions": [[notempty("{acf_street_address}")]]}, "Branch NAP")
el(nid(), "text-basic", s3l, {"text": "{acf_areas_served_summary}", "tag": "p",
    "_typography": {"font-size": "var(--text-xs)", "color": {"raw": "var(--text-dark-muted)"}},
    "_conditions": [[notempty("{acf_areas_served_summary}")]]}, "Areas Served")
el(nid(), "text-link", s3l, {"text": "Visit this branch",
    "link": {"type": "external", "url": "{post_url}"},
    "_typography": {"font-size": "var(--text-s)", "font-weight": "600",
                    "color": {"raw": "var(--primary-dark)"}}}, "Branch Link")

# ================================================================ 4 — OWNER & LEADERSHIP
s4 = section("a", "4 · Owner and Leadership", bg="var(--white)",
             cond=[[notempty("{acf_owner_text}")]])
s4c = shell(s4, "a")
s4g = el(nid(), "block", s4c, {"_cssGlobalClasses": [C_GRID2],
    "_alignItems": "center", "_columnGap": "var(--space-xl)"}, "Owner Split")
s4i = el(nid(), "block", s4g, {}, "Owner Media")
el(nid(), "image", s4i, {"image": {"useDynamicData": "{acf_owner_image}", "size": "large"},
    "_cssGlobalClasses": [C_MEDIA], "_aspectRatio": "1",
    "_conditions": [[notempty("{acf_owner_image}")]]}, "Owner Image")
s4b = el(nid(), "block", s4g, {
    "_display": "flex", "_direction": "column", "_rowGap": "var(--space-s)"}, "Owner Copy")
el(nid(), "heading", s4b, {"tag": "h2",
    "text": "{acf_owner_heading @fallback:'Who runs Pride In Turf'}",
    "_cssGlobalClasses": [C_HEAD]}, "Owner Heading")
el(nid(), "text-basic", s4b, {"text": "{acf_owner_text}", "tag": "p",
    "_typography": {"font-size": "var(--text-m)",
                    "color": {"raw": "var(--text-dark)"}}}, "Owner Text")

# ================================================================ 5 — MISSION & VALUES
s5 = section("a", "5 · Mission and Values", bg="var(--primary-ultra-light)",
             cond=[[notempty("{acf_mission_statement}")], [notempty("{acf_values}")]])
s5c = shell(s5, "a")
h2(s5c, "a", "What we stand for")
el(nid(), "text-basic", s5c, {"text": "{acf_mission_statement}", "tag": "p",
    "_cssGlobalClasses": [C_LEAD],
    "_conditions": [[notempty("{acf_mission_statement}")]]}, "Mission Statement")
s5g = el(nid(), "block", s5c, {"_cssGlobalClasses": [C_GRID3],
    "_conditions": [[notempty("{acf_values}")]]}, "Values Grid")
s5l = el(nid(), "block", s5g, {
    "hasLoop": True, "query": {"objectType": "acf_values", "posts_per_page": "5"},
    "_cssGlobalClasses": [C_CARD]}, "Value Loop")
el(nid(), "heading", s5l, {"tag": "h3", "text": "{acf_values_value_title}",
    "_cssGlobalClasses": [C_CARDTTL]}, "Value Title")
el(nid(), "text-basic", s5l, {"text": "{acf_values_value_text}", "tag": "p",
    "_cssGlobalClasses": [C_CARDTXT]}, "Value Text")

# ================================================================ 6 — MEET THE TEAM
s6 = section("a", "6 · Meet the Team", bg="var(--white)")
s6c = shell(s6, "a")
el(nid(), "heading", s6c, {"tag": "h2",
    "text": "{acf_meet_the_team_heading @fallback:'Meet the team'}",
    "_cssGlobalClasses": [C_HEAD]}, "Team Heading")
el(nid(), "text-basic", s6c, {"text": "{acf_meet_the_team_text}", "tag": "p",
    "_cssGlobalClasses": [C_LEAD],
    "_conditions": [[notempty("{acf_meet_the_team_text}")]]}, "Team Intro")

TEAM_CARD_FIELDS = [
    ("image", {"image": {"useDynamicData": "{acf_headshot}", "size": "medium"},
               "_cssGlobalClasses": [C_MEDIA], "_aspectRatio": "1",
               "_conditions": [[notempty("{acf_headshot}")]]}, "Headshot"),
    ("heading", {"tag": "h3", "text": "{post_title}",
                 "_cssGlobalClasses": [C_CARDTTL]}, "Name"),
    # Job title is plain text, never a heading (brief: heading system).
    ("text-basic", {"text": "{acf_job_title}", "tag": "p",
                    "_typography": {"font-size": "var(--text-s)", "font-weight": "600",
                                    "color": {"raw": "var(--primary-dark)"}}}, "Job Title"),
    ("text-basic", {"text": "{acf_branch}", "tag": "span",
                    "_cssGlobalClasses": [C_SPECLBL],
                    "_conditions": [[notempty("{acf_branch}")]]}, "Branch"),
    ("text-basic", {"text": "{acf_short_bio}", "tag": "p",
                    "_cssGlobalClasses": [C_CARDTXT],
                    "_conditions": [[notempty("{acf_short_bio}")]]}, "Short Bio"),
]

def team_card(parent, label):
    for name, st, lbl in TEAM_CARD_FIELDS:
        el(nid(), name, parent, dict(st), f"{label} — {lbl}")
    creds = el(nid(), "block", parent, {
        "_display": "flex", "_direction": "column", "_rowGap": "var(--space-xxs)",
        "_conditions": [[notempty("{acf_credentials}")]]}, f"{label} — Credentials")
    cl = el(nid(), "block", creds, {
        "hasLoop": True, "query": {"objectType": "acf_credentials", "posts_per_page": "4"},
        "_cssGlobalClasses": [C_TICK]}, f"{label} — Credential Loop")
    el(nid(), "text-basic", cl, {"text": "{acf_credentials_credential}", "tag": "span"},
       f"{label} — Credential")

# Curated selection first.
s6g = el(nid(), "block", s6c, {"_cssGlobalClasses": [C_GRID4],
    "_conditions": [[notempty("{acf_featured_team_members}")]]}, "Team Grid (curated)")
s6l = el(nid(), "block", s6g, {
    "hasLoop": True,
    "query": {"objectType": "acf_featured_team_members", "posts_per_page": "12"},
    "_cssGlobalClasses": [C_CARD]}, "Team Loop (curated)")
team_card(s6l, "Team")

# Fallback: every active team member, ordered by display_priority.
s6gf = el(nid(), "block", s6c, {"_cssGlobalClasses": [C_GRID4],
    "_conditions": [[isempty("{acf_featured_team_members}")]]}, "Team Grid (auto)")
s6lf = el(nid(), "block", s6gf, {
    "hasLoop": True,
    "query": {"objectType": "post", "post_type": ["team-members"], "posts_per_page": "12",
              "orderby": "meta_value_num", "meta_key": "display_priority", "order": "ASC",
              "meta_query": [{"id": "mqtm01", "key": "is_active", "value": "1",
                              "compare": "="}]},
    "_cssGlobalClasses": [C_CARD]}, "Team Loop (auto)")
team_card(s6lf, "Team auto")

# ================================================================ 7 — TRAINING & CREDENTIALS
s7 = section("a", "7 · Training, Credentials and How the Team Works",
             bg="var(--neutral-ultra-light)", surface="surface-subtle-grid",
             cond=[[notempty("{acf_training_text}")], [notempty("{acf_training_points}")],
                   [notempty("{acf_certification_licensing_text}")]])
s7c = shell(s7, "a")
el(nid(), "heading", s7c, {"tag": "h2",
    "text": "{acf_training_heading @fallback:'How our team works'}",
    "_cssGlobalClasses": [C_HEAD]}, "Training Heading")
el(nid(), "text", s7c, {"text": "{acf_training_text}", "_cssGlobalClasses": [C_LEAD],
    "_conditions": [[notempty("{acf_training_text}")]]}, "Training Text")
s7g = el(nid(), "block", s7c, {"_cssGlobalClasses": [C_GRID3],
    "_conditions": [[notempty("{acf_training_points}")]]}, "Training Grid")
s7l = el(nid(), "block", s7g, {
    "hasLoop": True, "query": {"objectType": "acf_training_points", "posts_per_page": "6"},
    "_cssGlobalClasses": [C_CARD]}, "Training Point Loop")
el(nid(), "heading", s7l, {"tag": "h3", "text": "{acf_training_points_point_title}",
    "_cssGlobalClasses": [C_CARDTTL]}, "Point Title")
el(nid(), "text-basic", s7l, {"text": "{acf_training_points_point_text}", "tag": "p",
    "_cssGlobalClasses": [C_CARDTXT]}, "Point Text")
# Global licensing / experience — pulled from Trust Content, not duplicated per page.
cred = el(nid(), "div", s7c, {"_cssGlobalClasses": [C_SPECITM],
    "_conditions": [[notempty("{acf_certification_licensing_text}")]]}, "Licensing")
el(nid(), "text-basic", cred, {"text": "Licensing and certification", "tag": "span",
    "_cssGlobalClasses": [C_SPECLBL]}, "Label")
el(nid(), "text-basic", cred, {"text": "{acf_certification_licensing_text}", "tag": "p",
    "_cssGlobalClasses": [C_SPECVAL]}, "Value")
yrs = el(nid(), "div", s7c, {"_cssGlobalClasses": [C_SPECITM],
    "_conditions": [[notempty("{acf_years_in_business_text}")]]}, "Years in Business")
el(nid(), "text-basic", yrs, {"text": "Experience", "tag": "span",
    "_cssGlobalClasses": [C_SPECLBL]}, "Label")
el(nid(), "text-basic", yrs, {"text": "{acf_years_in_business_text}", "tag": "p",
    "_cssGlobalClasses": [C_SPECVAL]}, "Value")

# ================================================================ 8 — CUSTOMER PROOF
s8 = section("a", "8 · Customer Proof", bg="var(--base-ultra-dark)", surface="surface-proof")
s8c = shell(s8, "a")
h2(s8c, "a", "What customers say", light=True)
# Curated reviews first.
s8g = el(nid(), "block", s8c, {"_cssGlobalClasses": [C_GRID3],
    "_conditions": [[notempty("{acf_about_page_reviews}")]]}, "Review Grid (curated)")
s8l = el(nid(), "block", s8g, {
    "hasLoop": True, "query": {"objectType": "acf_about_page_reviews", "posts_per_page": "3"},
    "_cssGlobalClasses": [C_REVCARD]}, "Review Loop (curated)")
# Fallback: reviews flagged for the About page.
s8gf = el(nid(), "block", s8c, {"_cssGlobalClasses": [C_GRID3],
    "_conditions": [[isempty("{acf_about_page_reviews}")]]}, "Review Grid (auto)")
s8lf = el(nid(), "block", s8gf, {
    "hasLoop": True,
    "query": {"objectType": "post", "post_type": ["reviews"], "posts_per_page": "3",
              "orderby": "meta_value_num", "meta_key": "display_priority", "order": "ASC",
              "meta_query": [{"id": "mqab01", "key": "featured_on_about_page",
                              "value": "1", "compare": "="}]},
    "_cssGlobalClasses": [C_REVCARD]}, "Review Loop (auto)")
for loop, tag in ((s8l, "curated"), (s8lf, "auto")):
    el(nid(), "text-basic", loop, {"text": "{acf_review_text}", "tag": "p",
        "_cssGlobalClasses": [C_REVTXT]}, f"Review Text ({tag})")
    el(nid(), "text-basic", loop, {"text": "{acf_reviewer_name}", "tag": "span",
        "_cssGlobalClasses": [C_REVNAME]}, f"Reviewer Name ({tag})")
    el(nid(), "text-basic", loop, {"text": "{acf_reviewer_location} · {acf_review_source}",
        "tag": "span", "_cssGlobalClasses": [C_REVMETA]}, f"Reviewer Meta ({tag})")
el(nid(), "text-basic", s8c, {"text": "{acf_guarantee_statement}", "tag": "p",
    "_cssGlobalClasses": [C_LIGHTTX],
    "_conditions": [[notempty("{acf_guarantee_statement}")]]}, "Guarantee")

# ================================================================ 9 — FINAL CTA + CAREERS
s9 = section("a", "9 · Final CTA and Careers Bridge", bg="var(--base-ultra-dark)",
             surface="surface-dark-cta")
s9c = el(nid(), "container", s9, {
    "_display": "flex", "_direction": "column", "_rowGap": "var(--space-s)",
    "_alignItems": "center", "_textAlign": "center",
    "_widthMax": "var(--content-width-narrow)",
    "_margin": {"left": "auto", "right": "auto"}}, "CTA Shell")
el(nid(), "heading", s9c, {"tag": "h2",
    "text": "{acf_default_quote_cta_heading @fallback:'Request a lawn evaluation'}",
    "_cssGlobalClasses": [C_HEAD, C_HEADLT]}, "CTA Heading")
el(nid(), "text-basic", s9c, {"text": "{acf_default_quote_cta_text}", "tag": "p",
    "_cssGlobalClasses": [C_LIGHTTX],
    "_conditions": [[notempty("{acf_default_quote_cta_text}")]]}, "CTA Text")
quote_buttons(s9c, "a")
# Careers bridge — deliberately quieter than the customer action above it.
cb = el(nid(), "block", s9c, {
    "_display": "flex", "_direction": "column", "_rowGap": "var(--space-xxs)",
    "_alignItems": "center",
    "_padding": {"top": "var(--space-m)"},
    "_border": {"width": {"top": "1px"}, "style": "solid",
                "color": {"raw": "rgba(255, 255, 255, .16)"}},
    "_width": "100%",
    "_conditions": [[notempty("{acf_careers_bridge_text}")],
                    [notempty("{acf_careers_cta_label}")]]}, "Careers Bridge")
el(nid(), "text-basic", cb, {"text": "{acf_careers_bridge_heading}", "tag": "span",
    "_typography": {"font-size": "var(--text-s)", "font-weight": "700",
                    "color": {"raw": "var(--text-light)"}},
    "_conditions": [[notempty("{acf_careers_bridge_heading}")]]}, "Careers Heading")
el(nid(), "text-basic", cb, {"text": "{acf_careers_bridge_text}", "tag": "p",
    "_cssGlobalClasses": [C_REVMETA],
    "_conditions": [[notempty("{acf_careers_bridge_text}")]]}, "Careers Text")
el(nid(), "text-link", cb, {"text": "{acf_careers_cta_label @fallback:'View open roles'}",
    "link": {"type": "meta", "useDynamicData": "{acf_careers_bridge_cta_link}"},
    "_typography": {"font-size": "var(--text-s)", "font-weight": "600",
                    "color": {"raw": "var(--primary)"}},
    "_conditions": [[notempty("{acf_careers_bridge_cta_link}")]]}, "Careers Link")

emit({
    "name": "pit-page-about",
    "title": "PIT — Page: About Us",
    "type": "content",
    "content": NODES,
    "pageSettings": {},
    "templateSettings": {
        "templateConditions": [{"main": "ids", "ids": [286]}],
        "templatePreviewType": "single",
        "templatePreviewPostId": 286},
    "global_classes": list(CLASSES.values()),
    "globalVariables": [],
    "globalVariablesCategories": []},
    "/home/user/prideinturf/_project/exports/imports/page-about.json")
