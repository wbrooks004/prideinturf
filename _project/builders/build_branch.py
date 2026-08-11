#!/usr/bin/env python3
"""Pride In Turf — Branch page template. One template, three pages:
Atlanta (291), Hoschton (292), Duluth (293). Run from anywhere:
    python3 _project/builders/build_branch.py
"""
import os, sys
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from pit_common import *

BRANCH_IDS = [291, 292, 293]

# ================================================================ 1 — BRANCH HERO
s1 = section("b", "1 · Branch Hero", bg="var(--base-ultra-light)", surface="surface-hero")
s1c = el(nid(), "container", s1, {
    "_display": "grid", "_gridTemplateColumns": "1.1fr 0.9fr",
    "_columnGap": "var(--space-xl)", "_rowGap": "var(--space-l)", "_alignItems": "center",
    "_gridTemplateColumns:tablet_portrait": "1fr"}, "Hero Grid")
s1b = el(nid(), "block", s1c, {
    "_display": "flex", "_direction": "column", "_rowGap": "var(--space-s)"}, "Hero Copy")
el(nid(), "text-basic", s1b, {"text": "Pride In Turf branch", "tag": "span",
    "_cssGlobalClasses": [C_EYEBROW]}, "Eyebrow")

H1 = {"tag": "h1", "_typography": {
    "font-size": "var(--h1)", "font-weight": "var(--font-weight-heading)",
    "line-height": "var(--line-height-heading)",
    "letter-spacing": "var(--letter-spacing-heading)",
    "color": {"raw": "var(--text-dark)"}}}
el(nid(), "heading", s1b, dict(H1, text="{acf_location_display_name}",
    _conditions=[[notempty("{acf_location_display_name}")]]), "H1 — display name")
el(nid(), "heading", s1b, dict(H1, text="{post_title}",
    _conditions=[[isempty("{acf_location_display_name}")]]), "H1 — page title")

el(nid(), "text-basic", s1b, {"text": "{acf_location_short_summary}", "tag": "p",
    "_cssGlobalClasses": [C_LEAD],
    "_conditions": [[notempty("{acf_location_short_summary}")]]}, "Branch Summary")

# Address + phone sit in the hero because they are what a branch visitor came for.
nap = el(nid(), "block", s1b, {
    "_display": "flex", "_direction": "column", "_rowGap": "var(--space-xxs)",
    "_conditions": [[notempty("{acf_street_address}")]]}, "Hero NAP")
el(nid(), "text-basic", nap, {
    "text": "{acf_street_address}<br>{acf_address_line_2}<br>{acf_city}, {acf_state} {acf_zipcode}",
    "tag": "p", "_typography": {"font-size": "var(--text-m)",
                                "color": {"raw": "var(--text-dark)"}}}, "Address")
acts = el(nid(), "block", s1b, {"_cssGlobalClasses": [C_ACTIONS]}, "Hero CTAs")
el(nid(), "button", acts, {
    "text": "{acf_default_quote_cta_button_label @fallback:'Request a Free Quote'}",
    "tag": "a", "size": "lg", "_cssClasses": BTN_PRIMARY,
    "link": {"type": "external", "url": "/contact/"}}, "Quote CTA")
el(nid(), "button", acts, {
    "text": "{acf_phone_cta_label @fallback:'Call 833.388.8873'}", "tag": "a", "size": "lg",
    "_cssClasses": BTN_SECONDARY,
    "link": {"type": "external", "url": "tel:{acf_main_phone_number}"},
    "_conditions": [[notempty("{acf_main_phone_number}")]]}, "Phone CTA")

# Hero image lights up automatically if the Page Hero group is ever assigned to
# these pages. Today it is not, so the condition simply hides it.
s1m = el(nid(), "block", s1c, {}, "Hero Media")
el(nid(), "image", s1m, {"image": {"useDynamicData": "{acf_hero_image}", "size": "large"},
    "_cssGlobalClasses": [C_MEDIA],
    "_conditions": [[notempty("{acf_hero_image}")]]}, "Hero Image (optional)")

# ---------------------------------------------------------------- trust strip
ts = section("b", "Trust Strip (supporting module)", bg="var(--white)", tight=True,
             cond=[[notempty("{acf_trust_points}")]])
tsc = shell(ts, "b")
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

# ================================================================ 2 — SERVICES AT THIS BRANCH
s2 = section("b", "2 · Services From This Branch", bg="var(--white)",
             cond=[[notempty("{acf_featured_lawn_services}")]])
s2c = shell(s2, "b")
h2(s2c, "b", "Services we run from this branch")
s2g = el(nid(), "block", s2c, {"_cssGlobalClasses": [C_GRID3]}, "Service Grid")
s2l = el(nid(), "block", s2g, {
    "hasLoop": True,
    "query": {"objectType": "acf_featured_lawn_services", "posts_per_page": "6"},
    "_cssGlobalClasses": [C_CARD]}, "Service Card Loop")
el(nid(), "image", s2l, {"image": {"useDynamicData": "{acf_service_icon}", "size": "medium"},
    "_width": "48px", "_height": "48px", "_objectFit": "contain",
    "_conditions": [[notempty("{acf_service_icon}")]]}, "Service Icon")
el(nid(), "heading", s2l, {"tag": "h3",
    "text": "{acf_public_service_name @fallback:'{post_title}'}",
    "_cssGlobalClasses": [C_CARDTTL]}, "Service Title")
el(nid(), "text-basic", s2l, {"text": "{acf_service_summary}", "tag": "p",
    "_cssGlobalClasses": [C_CARDTXT]}, "Service Summary")
el(nid(), "text-link", s2l, {"text": "View service",
    "link": {"type": "external", "url": "{post_url}"},
    "_typography": {"font-size": "var(--text-s)", "font-weight": "600",
                    "color": {"raw": "var(--primary-dark)"}}}, "Service Link")

# ================================================================ 3 — PROGRAMS
s3 = section("b", "3 · Lawn Care Programs", bg="var(--primary-ultra-light)")
s3c = shell(s3, "b")
h2(s3c, "b", "Lawn care programs available here")
el(nid(), "text-basic", s3c, {
    "text": "Programs are matched to your grass type, the season, and the conditions on your "
            "property.", "tag": "p", "_cssGlobalClasses": [C_LEAD]}, "Programs Intro")
s3g = el(nid(), "block", s3c, {"_cssGlobalClasses": [C_GRID3]}, "Program Grid")
# No branch-level program relationship exists, and none is needed: programs are
# offered company-wide, so this lists published programs by display priority.
s3l = el(nid(), "block", s3g, {
    "hasLoop": True,
    "query": {"objectType": "post", "post_type": ["lawn-care-programs"],
              "posts_per_page": "3", "orderby": "meta_value_num",
              "meta_key": "display_priority", "order": "ASC",
              "post_status": ["publish"]},
    "_cssGlobalClasses": [C_CARD]}, "Program Card Loop")
el(nid(), "text-basic", s3l, {"text": "{acf_card_eyebrow @fallback:'Lawn Care Program'}",
    "tag": "span", "_cssGlobalClasses": [C_EYEBROW]}, "Program Eyebrow")
el(nid(), "heading", s3l, {"tag": "h3",
    "text": "{acf_public_program_name @fallback:'{post_title}'}",
    "_cssGlobalClasses": [C_CARDTTL]}, "Program Title")
el(nid(), "text-basic", s3l, {"text": "{acf_card_summary}", "tag": "p",
    "_cssGlobalClasses": [C_CARDTXT]}, "Program Summary")
el(nid(), "text-basic", s3l, {
    "text": "{acf_application_count} applications · {acf_turf_type}", "tag": "span",
    "_cssGlobalClasses": [C_SPECLBL],
    "_conditions": [[notempty("{acf_application_count}")]]}, "Program Meta")
el(nid(), "text-link", s3l, {"text": "View this program",
    "link": {"type": "external", "url": "{post_url}"},
    "_typography": {"font-size": "var(--text-s)", "font-weight": "600",
                    "color": {"raw": "var(--primary-dark)"}}}, "Program Link")

# ================================================================ 4 — AREAS SERVED
s4 = section("b", "4 · Areas Served", bg="var(--neutral-ultra-light)",
             surface="surface-subtle-grid",
             cond=[[notempty("{acf_areas_served_summary}")],
                   [notempty("{acf_nearby_areas_served}")]])
s4c = shell(s4, "b")
h2(s4c, "b", "Communities this branch serves")
el(nid(), "text-basic", s4c, {"text": "{acf_areas_served_summary}", "tag": "p",
    "_cssGlobalClasses": [C_LEAD],
    "_conditions": [[notempty("{acf_areas_served_summary}")]]}, "Areas Summary")
s4g = el(nid(), "block", s4c, {"_cssGlobalClasses": [C_GRID4],
    "_conditions": [[notempty("{acf_nearby_areas_served}")]]}, "Areas Grid")
s4l = el(nid(), "block", s4g, {
    "hasLoop": True,
    "query": {"objectType": "acf_nearby_areas_served", "posts_per_page": "24"},
    "_cssGlobalClasses": [C_TICK]}, "Area Loop")
# Plain text, not links — a service area only becomes a link once it has a real page.
el(nid(), "text-basic", s4l, {"text": "{acf_nearby_areas_served_area_name}", "tag": "span"},
   "Area Name")

# ================================================================ 5 — VISIT / NAP / HOURS
s5 = section("b", "5 · Visit This Branch", bg="var(--white)",
             cond=[[notempty("{acf_street_address}")]])
s5c = shell(s5, "b")
h2(s5c, "b", "Visit this branch")
s5g = el(nid(), "block", s5c, {"_cssGlobalClasses": [C_GRID2],
    "_alignItems": "flex-start", "_columnGap": "var(--space-xl)"}, "Visit Split")

s5d = el(nid(), "block", s5g, {"_cssGlobalClasses": [C_CARD, C_CARDFEAT]}, "NAP Card")
el(nid(), "heading", s5d, {"tag": "h3",
    "text": "{acf_location_display_name @fallback:'{post_title}'}",
    "_cssGlobalClasses": [C_CARDTTL]}, "Branch Name")
el(nid(), "text-basic", s5d, {
    "text": "{acf_street_address}<br>{acf_address_line_2}<br>{acf_city}, {acf_state} {acf_zipcode}",
    "tag": "p", "_cssGlobalClasses": [C_CARDTXT]}, "Address")
LINK = {"_typography": {"font-size": "var(--text-s)", "font-weight": "600",
                        "color": {"raw": "var(--primary-dark)"}}}
el(nid(), "text-link", s5d, dict(LINK, text="{acf_main_phone_number}",
    link={"type": "external", "url": "tel:{acf_main_phone_number}"},
    _conditions=[[notempty("{acf_main_phone_number}")]]), "Phone")
ohw = el(nid(), "block", s5d, {
    "_display": "flex", "_direction": "column", "_rowGap": "var(--space-xxs)",
    "_conditions": [[notempty("{acf_office_hours}")]]}, "Office Hours")
el(nid(), "text-basic", ohw, {"text": "Hours", "tag": "span",
    "_cssGlobalClasses": [C_SPECLBL]}, "Hours Label")
ohl = el(nid(), "block", ohw, {
    "hasLoop": True, "query": {"objectType": "acf_office_hours", "posts_per_page": "7"},
    "_display": "flex", "_direction": "row", "_justifyContent": "space-between",
    "_typography": {"font-size": "var(--text-s)",
                    "color": {"raw": "var(--text-dark-muted)"}}}, "Hours Loop")
el(nid(), "text-basic", ohl, {"text": "{acf_office_hours_day}", "tag": "span"}, "Day")
el(nid(), "text-basic", ohl, {"text": "{acf_office_hours_hours}", "tag": "span"}, "Hours")
la = el(nid(), "block", s5d, {"_cssGlobalClasses": [C_ACTIONS]}, "Location Links")
el(nid(), "text-link", la, dict(LINK, text="Get directions",
    link={"type": "external", "url": "{acf_directions_link}"},
    _conditions=[[notempty("{acf_directions_link}")]]), "Directions")
el(nid(), "text-link", la, dict(LINK, text="View on Google",
    link={"type": "external", "url": "{acf_google_business_profile_url}"},
    _conditions=[[notempty("{acf_google_business_profile_url}")]]), "Google Business Profile")

# Map renders only for a branch that has a real embed URL on file.
s5m = el(nid(), "block", s5g, {
    "_conditions": [[notempty("{acf_google_map_embed_url}")]]}, "Map")
el(nid(), "html", s5m, {
    "html": '<iframe src="{acf_google_map_embed_url}" width="100%" height="420" '
            'style="border:0;border-radius:var(--radius-l);" allowfullscreen="" '
            'loading="lazy" referrerpolicy="no-referrer-when-downgrade" '
            'title="Map of {acf_location_display_name}"></iframe>'}, "Map Embed")

# ================================================================ 6 — REVIEWS
s6 = section("b", "6 · Customer Reviews", bg="var(--base-ultra-dark)", surface="surface-proof")
s6c = shell(s6, "b")
h2(s6c, "b", "What customers near here say", light=True)
s6g = el(nid(), "block", s6c, {"_cssGlobalClasses": [C_GRID3],
    "_conditions": [[notempty("{acf_featured_reviews}")]]}, "Review Grid (curated)")
s6l = el(nid(), "block", s6g, {
    "hasLoop": True, "query": {"objectType": "acf_featured_reviews", "posts_per_page": "3"},
    "_cssGlobalClasses": [C_REVCARD]}, "Review Loop (curated)")
# Fallback: reviews whose related_page points at this branch page.
s6gf = el(nid(), "block", s6c, {"_cssGlobalClasses": [C_GRID3],
    "_conditions": [[isempty("{acf_featured_reviews}")]]}, "Review Grid (auto)")
s6lf = el(nid(), "block", s6gf, {
    "hasLoop": True,
    "query": {"objectType": "post", "post_type": ["reviews"], "posts_per_page": "3",
              "orderby": "meta_value_num", "meta_key": "display_priority", "order": "ASC",
              "meta_query": [{"id": "mqbr02", "key": "related_page",
                              "value": "\"{post_id}\"", "compare": "LIKE"}]},
    "_cssGlobalClasses": [C_REVCARD]}, "Review Loop (auto)")
for loop, tag in ((s6l, "curated"), (s6lf, "auto")):
    el(nid(), "text-basic", loop, {"text": "{acf_review_text}", "tag": "p",
        "_cssGlobalClasses": [C_REVTXT]}, f"Review Text ({tag})")
    el(nid(), "text-basic", loop, {"text": "{acf_reviewer_name}", "tag": "span",
        "_cssGlobalClasses": [C_REVNAME]}, f"Reviewer Name ({tag})")
    el(nid(), "text-basic", loop, {"text": "{acf_reviewer_location} · {acf_review_source}",
        "tag": "span", "_cssGlobalClasses": [C_REVMETA]}, f"Reviewer Meta ({tag})")
el(nid(), "text-basic", s6c, {"text": "{acf_guarantee_statement}", "tag": "p",
    "_cssGlobalClasses": [C_LIGHTTX],
    "_conditions": [[notempty("{acf_guarantee_statement}")]]}, "Guarantee")

# ================================================================ 7 — BRANCH FAQS
s7 = section("b", "7 · Branch FAQs", bg="var(--neutral-ultra-light)",
             surface="surface-subtle-grid", cond=[[notempty("{acf_location_faqs}")]])
s7c = shell(s7, "b")
h2(s7c, "b", "Questions about this branch")
s7a = el(nid(), "accordion-nested", s7c, {
    "expandFirstItem": True, "independentToggle": True, "faqSchema": True,
    "_widthMax": "var(--content-width-narrow)"}, "FAQ Accordion")
s7i = el(nid(), "block", s7a, {
    "hasLoop": True, "query": {"objectType": "acf_location_faqs", "posts_per_page": "6"}},
    "FAQ Item Loop")
s7t = el(nid(), "block", s7i, {
    "_hidden": {"_cssClasses": "accordion-title-wrapper"},
    "_direction": "row", "_justifyContent": "space-between",
    "_alignItems": "center"}, "FAQ Title Wrapper")
el(nid(), "heading", s7t, {"tag": "h3", "text": "{acf_location_faqs_question}",
    "_typography": {"font-size": "var(--text-l)", "font-weight": "600",
                    "color": {"raw": "var(--text-dark)"}}}, "FAQ Question")
el(nid(), "icon", s7t, {"icon": {"library": "themify", "icon": "ti-angle-down"},
    "isAccordionIcon": True}, "FAQ Icon")
s7w = el(nid(), "block", s7i, {
    "_hidden": {"_cssClasses": "accordion-content-wrapper"}}, "FAQ Content Wrapper")
el(nid(), "text", s7w, {"text": "{acf_location_faqs_answer}",
    "_typography": {"font-size": "var(--text-m)",
                    "color": {"raw": "var(--text-dark-muted)"}}}, "FAQ Answer")

# ================================================================ 8 — FINAL CTA
s8 = section("b", "8 · Final CTA", bg="var(--base-ultra-dark)", surface="surface-dark-cta")
s8c = el(nid(), "container", s8, {
    "_display": "flex", "_direction": "column", "_rowGap": "var(--space-s)",
    "_alignItems": "center", "_textAlign": "center",
    "_widthMax": "var(--content-width-narrow)",
    "_margin": {"left": "auto", "right": "auto"}}, "CTA Shell")
el(nid(), "heading", s8c, {"tag": "h2",
    "text": "{acf_default_quote_cta_heading @fallback:'Request a lawn evaluation'}",
    "_cssGlobalClasses": [C_HEAD, C_HEADLT]}, "CTA Heading")
el(nid(), "text-basic", s8c, {"text": "{acf_default_quote_cta_text}", "tag": "p",
    "_cssGlobalClasses": [C_LIGHTTX],
    "_conditions": [[notempty("{acf_default_quote_cta_text}")]]}, "CTA Text")
cta = el(nid(), "block", s8c, {"_cssGlobalClasses": [C_ACTIONS]}, "CTA Buttons")
el(nid(), "button", cta, {
    "text": "{acf_default_quote_cta_button_label @fallback:'Request a Free Quote'}",
    "tag": "a", "size": "lg", "_cssClasses": BTN_PRIMARY,
    "link": {"type": "external", "url": "/contact/"}}, "Quote CTA")
el(nid(), "button", cta, {
    "text": "{acf_phone_cta_label @fallback:'Call 833.388.8873'}", "tag": "a", "size": "lg",
    "_cssClasses": BTN_SECONDARY,
    "link": {"type": "external", "url": "tel:{acf_main_phone_number}"},
    "_conditions": [[notempty("{acf_main_phone_number}")]]}, "Phone CTA")

emit({
    "name": "pit-page-branch",
    "title": "PIT — Page: Branch (Atlanta / Hoschton / Duluth)",
    "type": "content",
    "content": NODES,
    "pageSettings": {},
    "templateSettings": {
        "templateConditions": [{"main": "ids", "ids": BRANCH_IDS}],
        "templatePreviewType": "single",
        "templatePreviewPostId": BRANCH_IDS[0]},
    "global_classes": list(CLASSES.values()),
    "globalVariables": [],
    "globalVariablesCategories": []},
    "/home/user/prideinturf/_project/exports/imports/page-branch.json")
