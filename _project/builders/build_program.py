#!/usr/bin/env python3
"""Pride In Turf — Lawn Care Program Single template. Run from anywhere:
    python3 _project/builders/build_program.py
"""
import os, sys
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from pit_common import *

# ================================================================ 1 — HERO + SNAPSHOT
s1 = section("p", "1 · Program Hero and Snapshot", bg="var(--base-ultra-light)",
             surface="surface-hero")
s1c = el(nid(), "container", s1, {
    "_display": "grid", "_gridTemplateColumns": "1.1fr 0.9fr",
    "_columnGap": "var(--space-xl)", "_rowGap": "var(--space-l)", "_alignItems": "center",
    "_gridTemplateColumns:tablet_portrait": "1fr"}, "Hero Grid")
s1b = el(nid(), "block", s1c, {
    "_display": "flex", "_direction": "column", "_rowGap": "var(--space-s)"}, "Hero Copy")

el(nid(), "text-basic", s1b, {
    "text": "{acf_hero_eyebrow}", "tag": "span", "_cssGlobalClasses": [C_EYEBROW],
    "_conditions": [[notempty("{acf_hero_eyebrow}")]]}, "Eyebrow")

H1 = {"tag": "h1", "_typography": {
    "font-size": "var(--h1)", "font-weight": "var(--font-weight-heading)",
    "line-height": "var(--line-height-heading)",
    "letter-spacing": "var(--letter-spacing-heading)",
    "color": {"raw": "var(--text-dark)"}}}
el(nid(), "heading", s1b, dict(H1, text="{acf_hero_heading}",
    _conditions=[[notempty("{acf_hero_heading}")]]), "H1 — hero override")
el(nid(), "heading", s1b, dict(H1, text="{acf_public_program_name}",
    _conditions=[[isempty("{acf_hero_heading}"), notempty("{acf_public_program_name}")]]),
    "H1 — public program name")
el(nid(), "heading", s1b, dict(H1, text="{post_title}",
    _conditions=[[isempty("{acf_hero_heading}"), isempty("{acf_public_program_name}")]]),
    "H1 — post title")

el(nid(), "text", s1b, {"text": "{acf_hero_intro}", "_cssGlobalClasses": [C_LEAD],
    "_conditions": [[notempty("{acf_hero_intro}")]]}, "Hero Intro")
quote_buttons(s1b, "p")

s1m = el(nid(), "block", s1c, {}, "Hero Media")
el(nid(), "image", s1m, {
    "image": {"useDynamicData": "{acf_hero_image}", "size": "large"},
    "_cssGlobalClasses": [C_MEDIA],
    "_conditions": [[notempty("{acf_hero_image}")]]}, "Hero Image")

# Snapshot strip — program type / turf / applications / schedule. Labels, not headings.
snap = section("p", "Program Snapshot (supporting module)", bg="var(--white)", tight=True,
               cond=[[notempty("{acf_program_type}")], [notempty("{acf_application_count}")],
                     [notempty("{acf_turf_type}")], [notempty("{acf_application_schedule}")]])
snc = shell(snap, "p")
sng = el(nid(), "block", snc, {"_cssGlobalClasses": [C_GRID4]}, "Snapshot Grid")
for lbl, tag in (("Program type", "{acf_program_type}"),
                 ("Turf types", "{acf_turf_type}"),
                 ("Applications", "{acf_application_count}"),
                 ("Schedule", "{acf_application_schedule}")):
    it = el(nid(), "div", sng, {"_cssGlobalClasses": [C_SPECITM],
        "_conditions": [[notempty(tag)]]}, f"Snapshot — {lbl}")
    el(nid(), "text-basic", it, {"text": lbl, "tag": "span",
        "_cssGlobalClasses": [C_SPECLBL]}, "Label")
    el(nid(), "text-basic", it, {"text": tag, "tag": "p",
        "_cssGlobalClasses": [C_SPECVAL]}, "Value")

# ================================================================ 2 — OVERVIEW & IDEAL FIT
s2 = section("p", "2 · Program Overview and Ideal Fit", bg="var(--neutral-ultra-light)",
             surface="surface-subtle-grid",
             cond=[[notempty("{acf_program_overview_text}")], [notempty("{acf_ideal_for}")]])
s2c = shell(s2, "p")
s2g = el(nid(), "block", s2c, {"_cssGlobalClasses": [C_GRID2],
    "_alignItems": "flex-start", "_columnGap": "var(--space-xl)"}, "Split")
s2a = el(nid(), "block", s2g, {
    "_display": "flex", "_direction": "column", "_rowGap": "var(--space-s)"}, "Overview")
el(nid(), "heading", s2a, {"tag": "h2",
    "text": "{acf_program_overview_heading @fallback:'What this program does'}",
    "_cssGlobalClasses": [C_HEAD]}, "Overview Heading")
el(nid(), "text", s2a, {"text": "{acf_program_overview_text}",
    "_typography": {"font-size": "var(--text-m)", "color": {"raw": "var(--text-dark)"}},
    "_conditions": [[notempty("{acf_program_overview_text}")]]}, "Overview Text")
# "What it is not designed to solve" — the section's stated job, and it filters bad leads.
nd = el(nid(), "div", s2a, {"_cssGlobalClasses": [C_SPECITM],
    "_conditions": [[notempty("{acf_not_designed_for}")]]}, "Not Designed For")
el(nid(), "text-basic", nd, {"text": "What this program does not cover", "tag": "span",
    "_cssGlobalClasses": [C_SPECLBL]}, "Label")
el(nid(), "text-basic", nd, {"text": "{acf_not_designed_for}", "tag": "p",
    "_cssGlobalClasses": [C_SPECVAL]}, "Value")

s2b = el(nid(), "block", s2g, {
    "_display": "flex", "_direction": "column", "_rowGap": "var(--space-xs)",
    "_conditions": [[notempty("{acf_ideal_for}")]]}, "Ideal For")
el(nid(), "heading", s2b, {"tag": "h3", "text": "Ideal for",
    "_cssGlobalClasses": [C_CARDTTL]}, "Ideal For Title")
idl = el(nid(), "block", s2b, {
    "hasLoop": True, "query": {"objectType": "acf_ideal_for", "posts_per_page": "5"},
    "_cssGlobalClasses": [C_TICK]}, "Ideal For Loop")
el(nid(), "text-basic", idl, {"text": "{acf_ideal_for_item}", "tag": "span"}, "Ideal For Item")

# ================================================================ 3 — WHAT IS INCLUDED
s3 = section("p", "3 · What Is Included", bg="var(--white)",
             cond=[[notempty("{acf_included_services}")]])
s3c = shell(s3, "p")
h2(s3c, "p", "What is included in this program")
s3g = el(nid(), "block", s3c, {"_cssGlobalClasses": [C_GRID3]}, "Included Grid")
s3l = el(nid(), "block", s3g, {
    "hasLoop": True, "query": {"objectType": "acf_included_services", "posts_per_page": "6"},
    "_cssGlobalClasses": [C_CARD, C_SERVICECARD]}, "Included Service Loop")
el(nid(), "image", s3l, {
    "image": {"useDynamicData": "{acf_service_icon}", "size": "medium"},
    "_width": "48px", "_height": "48px", "_objectFit": "contain",
    "_conditions": [[notempty("{acf_service_icon}")]]}, "Service Icon")
el(nid(), "heading", s3l, {"tag": "h3",
    "text": "{acf_public_service_name @fallback:'{post_title}'}",
    "_cssGlobalClasses": [C_CARDTTL]}, "Service Title")
el(nid(), "text-basic", s3l, {"text": "{acf_service_summary}", "tag": "p",
    "_cssGlobalClasses": [C_CARDTXT]}, "Service Summary")
el(nid(), "text-link", s3l, {"text": "View service",
    "link": {"type": "external", "url": "{post_url}"},
    "_typography": {"font-size": "var(--text-s)", "font-weight": "600",
                    "color": {"raw": "var(--primary-dark)"}}}, "Service Link")

# ================================================================ 4 — TREATMENT SCHEDULE
s4 = section("p", "4 · Annual Treatment Schedule", bg="var(--neutral-ultra-light)",
             surface="surface-subtle-grid",
             cond=[[notempty("{acf_treatment_rounds}")], [notempty("{acf_application_schedule}")]])
s4c = shell(s4, "p")
h2(s4c, "p", "How the program runs through the year")
# Round-by-round detail renders ONLY when operations have supplied it.
s4g = el(nid(), "block", s4c, {"_cssGlobalClasses": [C_GRID3],
    "_conditions": [[notempty("{acf_treatment_rounds}")]]}, "Round Grid")
s4l = el(nid(), "block", s4g, {
    "hasLoop": True, "query": {"objectType": "acf_treatment_rounds", "posts_per_page": "12"},
    "_cssGlobalClasses": [C_CARD]}, "Treatment Round Loop")
el(nid(), "text-basic", s4l, {"text": "{acf_treatment_rounds_round_timing}", "tag": "span",
    "_cssGlobalClasses": [C_STEPNUM]}, "Round Timing")
el(nid(), "heading", s4l, {"tag": "h3", "text": "{acf_treatment_rounds_round_label}",
    "_cssGlobalClasses": [C_CARDTTL]}, "Round Label")
el(nid(), "text-basic", s4l, {"text": "{acf_treatment_rounds_round_focus}", "tag": "p",
    "_cssGlobalClasses": [C_CARDTXT]}, "Round Focus")
# Fallback: the verified summary schedule, shown only when no rounds are published.
el(nid(), "text-basic", s4c, {
    "text": "This program includes {acf_application_count} applications. "
            "{acf_application_schedule}", "tag": "p",
    "_cssGlobalClasses": [C_LEAD],
    "_conditions": [[isempty("{acf_treatment_rounds}"),
                     notempty("{acf_application_schedule}")]]}, "Summary Schedule (fallback)")

# ================================================================ 5 — FEATURES + PRODUCTS
s5 = section("p", "5 · Program Features and Treatment Approach", bg="var(--white)",
             cond=[[notempty("{acf_program_features}")], [notempty("{acf_related_products}")]])
s5c = shell(s5, "p")
h2(s5c, "p", "How this program is built")
s5g = el(nid(), "block", s5c, {"_cssGlobalClasses": [C_GRID3],
    "_conditions": [[notempty("{acf_program_features}")]]}, "Feature Grid")
s5l = el(nid(), "block", s5g, {
    "hasLoop": True, "query": {"objectType": "acf_program_features", "posts_per_page": "6"},
    "_cssGlobalClasses": [C_CARD]}, "Feature Loop")
el(nid(), "heading", s5l, {"tag": "h3", "text": "{acf_program_features_feature_title}",
    "_cssGlobalClasses": [C_CARDTTL]}, "Feature Title")
el(nid(), "text-basic", s5l, {"text": "{acf_program_features_feature_text}", "tag": "p",
    "_cssGlobalClasses": [C_CARDTXT]}, "Feature Text")

s5pw = el(nid(), "block", s5c, {
    "_display": "flex", "_direction": "column", "_rowGap": "var(--space-s)",
    "_conditions": [[notempty("{acf_related_products}")]]}, "Products")
el(nid(), "text-basic", s5pw, {"text": "Products and treatment types used", "tag": "span",
    "_cssGlobalClasses": [C_SPECLBL]}, "Products Label")
s5pg = el(nid(), "block", s5pw, {"_cssGlobalClasses": [C_GRID3]}, "Product Grid")
s5pl = el(nid(), "block", s5pg, {
    "hasLoop": True, "query": {"objectType": "acf_related_products", "posts_per_page": "3"},
    "_cssGlobalClasses": [C_CARD],
    "_conditions": [[eq("{acf_approved_for_publication:value}", "1"),
                     notempty("{acf_approved_summary}")]]}, "Product Loop")
el(nid(), "text-basic", s5pl, {"text": "{acf_product_category}", "tag": "span",
    "_cssGlobalClasses": [C_SPECLBL]}, "Product Category")
el(nid(), "heading", s5pl, {"tag": "h3",
    "text": "{acf_public_display_name @fallback:'{post_title}'}",
    "_cssGlobalClasses": [C_CARDTTL]}, "Product Name")
el(nid(), "text-basic", s5pl, {"text": "{acf_approved_summary}", "tag": "p",
    "_cssGlobalClasses": [C_CARDTXT]}, "Approved Summary")
el(nid(), "text-basic", s5pl, {"text": "{acf_required_qualification}", "tag": "p",
    "_typography": {"font-size": "var(--text-xs)", "color": {"raw": "var(--text-dark-muted)"}},
    "_conditions": [[notempty("{acf_required_qualification}")]]}, "Required Qualification")

# ================================================================ 6 — RECOMMENDED ADD-ONS
s6 = section("p", "6 · Recommended Add-Ons", bg="var(--accent-ultra-light)",
             cond=[[notempty("{acf_recommended_add_ons}")]])
s6c = shell(s6, "p")
h2(s6c, "p", "Optional add-ons for this program")
el(nid(), "text-basic", s6c, {
    "text": "These are not included in the program. They are added only when the lawn needs them.",
    "tag": "p", "_cssGlobalClasses": [C_LEAD]}, "Add-On Disclaimer")
s6g = el(nid(), "block", s6c, {"_cssGlobalClasses": [C_GRID2]}, "Add-On Grid")
s6l = el(nid(), "block", s6g, {
    "hasLoop": True, "query": {"objectType": "acf_recommended_add_ons", "posts_per_page": "4"},
    "_cssGlobalClasses": [C_CARD, C_SERVICECARD]}, "Add-On Loop")
el(nid(), "text-basic", s6l, {"text": "Optional add-on", "tag": "span",
    "_cssGlobalClasses": [C_SPECLBL]}, "Add-On Label")
el(nid(), "heading", s6l, {"tag": "h3",
    "text": "{acf_public_service_name @fallback:'{post_title}'}",
    "_cssGlobalClasses": [C_CARDTTL]}, "Add-On Title")
el(nid(), "text-basic", s6l, {"text": "{acf_service_summary}", "tag": "p",
    "_cssGlobalClasses": [C_CARDTXT]}, "Add-On Summary")
el(nid(), "text-link", s6l, {"text": "View add-on",
    "link": {"type": "external", "url": "{post_url}"},
    "_typography": {"font-size": "var(--text-s)", "font-weight": "600",
                    "color": {"raw": "var(--primary-dark)"}}}, "Add-On Link")

# ================================================================ 7 — COMPARE PROGRAMS
s7 = section("p", "7 · Compare Other Programs", bg="var(--white)",
             cond=[[notempty("{acf_related_programs}")]])
s7c = shell(s7, "p")
h2(s7c, "p", "How this compares to our other programs")
s7g = el(nid(), "block", s7c, {"_cssGlobalClasses": [C_GRID3]}, "Program Grid")
s7l = el(nid(), "block", s7g, {
    "hasLoop": True, "query": {"objectType": "acf_related_programs", "posts_per_page": "3"},
    "_cssGlobalClasses": [C_CARD, C_PROGRAMCARD]}, "Program Card Loop")
el(nid(), "text-basic", s7l, {"text": "{acf_card_eyebrow @fallback:'Lawn Care Program'}",
    "tag": "span", "_cssGlobalClasses": [C_EYEBROW]}, "Program Eyebrow")
el(nid(), "heading", s7l, {"tag": "h3",
    "text": "{acf_public_program_name @fallback:'{post_title}'}",
    "_cssGlobalClasses": [C_CARDTTL]}, "Program Title")
el(nid(), "text-basic", s7l, {"text": "{acf_card_summary}", "tag": "p",
    "_cssGlobalClasses": [C_CARDTXT]}, "Program Summary")
el(nid(), "text-basic", s7l, {
    "text": "{acf_application_count} applications · {acf_turf_type}", "tag": "span",
    "_cssGlobalClasses": [C_SPECLBL],
    "_conditions": [[notempty("{acf_application_count}")]]}, "Program Meta")
el(nid(), "text-link", s7l, {"text": "Compare this program",
    "link": {"type": "external", "url": "{post_url}"},
    "_typography": {"font-size": "var(--text-s)", "font-weight": "600",
                    "color": {"raw": "var(--primary-dark)"}}}, "Program Link")

# ================================================================ 8 — PROOF
s8 = section("p", "8 · Program Results and Reviews", bg="var(--base-ultra-dark)",
             surface="surface-proof")
s8c = shell(s8, "p")
h2(s8c, "p", "Results from this program", light=True)
s8g = el(nid(), "block", s8c, {"_cssGlobalClasses": [C_GRID3]}, "Review Grid")
s8l = el(nid(), "block", s8g, {
    "hasLoop": True,
    "query": {"objectType": "post", "post_type": ["reviews"], "posts_per_page": "3",
              "orderby": "meta_value_num", "meta_key": "display_priority", "order": "ASC",
              "meta_query": [{"id": "mqprg1", "key": "related_program",
                              "value": "\"{post_id}\"", "compare": "LIKE"}]},
    "_cssGlobalClasses": [C_REVCARD]}, "Review Loop")
el(nid(), "text-basic", s8l, {"text": "{acf_review_text}", "tag": "p",
    "_cssGlobalClasses": [C_REVTXT]}, "Review Text")
el(nid(), "text-basic", s8l, {"text": "{acf_reviewer_name}", "tag": "span",
    "_cssGlobalClasses": [C_REVNAME]}, "Reviewer Name")
el(nid(), "text-basic", s8l, {"text": "{acf_reviewer_location} · {acf_review_source}",
    "tag": "span", "_cssGlobalClasses": [C_REVMETA]}, "Reviewer Meta")

s8b = el(nid(), "block", s8c, {
    "_display": "flex", "_direction": "column", "_rowGap": "var(--space-s)",
    "_conditions": [[notempty("{acf_before_after_before_image}"),
                     notempty("{acf_before_after_after_image}")]]}, "Before / After")
s8bg = el(nid(), "block", s8b, {"_cssGlobalClasses": [C_GRID2]}, "BA Grid")
for lbl, img in (("Before", "{acf_before_after_before_image}"),
                 ("After", "{acf_before_after_after_image}")):
    fig = el(nid(), "div", s8bg, {
        "_display": "flex", "_direction": "column", "_rowGap": "var(--space-xxs)"}, lbl)
    el(nid(), "text-basic", fig, {"text": lbl, "tag": "span",
        "_typography": {"font-size": "var(--text-xs)", "font-weight": "700",
                        "text-transform": "uppercase",
                        "letter-spacing": "var(--letter-spacing-eyebrow)",
                        "color": {"raw": "var(--text-light-muted)"}}}, f"{lbl} Label")
    el(nid(), "image", fig, {"image": {"useDynamicData": img, "size": "large"},
        "_cssGlobalClasses": [C_MEDIA]}, f"{lbl} Image")
el(nid(), "text-basic", s8b, {
    "text": "{acf_before_after_caption} ({acf_before_after_timeframe})", "tag": "p",
    "_cssGlobalClasses": [C_LIGHTTX],
    "_conditions": [[notempty("{acf_before_after_caption}")]]}, "BA Caption")

el(nid(), "text-basic", s8c, {"text": "{acf_guarantee_statement}", "tag": "p",
    "_cssGlobalClasses": [C_LIGHTTX],
    "_conditions": [[notempty("{acf_guarantee_statement}")]]}, "Guarantee")

# ================================================================ 9 — PROGRAM FAQS
s9 = section("p", "9 · Program FAQs", bg="var(--neutral-ultra-light)",
             surface="surface-subtle-grid", cond=[[notempty("{acf_program_faqs}")]])
s9c = shell(s9, "p")
h2(s9c, "p", "Frequently asked questions")
s9a = el(nid(), "accordion-nested", s9c, {
    "expandFirstItem": True, "independentToggle": True, "faqSchema": True,
    "_widthMax": "var(--content-width-narrow)"}, "FAQ Accordion")
s9i = el(nid(), "block", s9a, {
    "hasLoop": True, "query": {"objectType": "acf_program_faqs", "posts_per_page": "6"}},
    "FAQ Item Loop")
s9t = el(nid(), "block", s9i, {
    "_hidden": {"_cssClasses": "accordion-title-wrapper"},
    "_direction": "row", "_justifyContent": "space-between",
    "_alignItems": "center"}, "FAQ Title Wrapper")
el(nid(), "heading", s9t, {"tag": "h3", "text": "{acf_program_faqs_question}",
    "_typography": {"font-size": "var(--text-l)", "font-weight": "600",
                    "color": {"raw": "var(--text-dark)"}}}, "FAQ Question")
el(nid(), "icon", s9t, {"icon": {"library": "themify", "icon": "ti-angle-down"},
    "isAccordionIcon": True}, "FAQ Icon")
s9w = el(nid(), "block", s9i, {
    "_hidden": {"_cssClasses": "accordion-content-wrapper"}}, "FAQ Content Wrapper")
el(nid(), "text", s9w, {"text": "{acf_program_faqs_answer}",
    "_typography": {"font-size": "var(--text-m)",
                    "color": {"raw": "var(--text-dark-muted)"}}}, "FAQ Answer")

# ================================================================ 10 — FINAL CTA
s10 = section("p", "10 · Final Program CTA", bg="var(--base-ultra-dark)",
              surface="surface-dark-cta")
s10c = el(nid(), "container", s10, {
    "_display": "flex", "_direction": "column", "_rowGap": "var(--space-s)",
    "_alignItems": "center", "_textAlign": "center",
    "_widthMax": "var(--content-width-narrow)",
    "_margin": {"left": "auto", "right": "auto"}}, "CTA Shell")
el(nid(), "heading", s10c, {"tag": "h2",
    "text": "{acf_default_quote_cta_heading @fallback:'Start this program on your lawn'}",
    "_cssGlobalClasses": [C_HEAD, C_HEADLT]}, "CTA Heading")
el(nid(), "text-basic", s10c, {"text": "{acf_default_quote_cta_text}", "tag": "p",
    "_cssGlobalClasses": [C_LIGHTTX],
    "_conditions": [[notempty("{acf_default_quote_cta_text}")]]}, "CTA Text")
quote_buttons(s10c, "p")
# Carries program identity into the quote form so the lead arrives pre-qualified.
el(nid(), "text-basic", s10c, {
    "text": "Ask about {acf_public_program_name @fallback:'{post_title}'} when you get in touch.",
    "tag": "p", "_cssGlobalClasses": [C_REVMETA]}, "Program Identity Hint")

emit({
    "name": "pit-single-lawn-care-program",
    "title": "PIT — Single: Lawn Care Program",
    "type": "single",
    "content": NODES,
    "pageSettings": {},
    "templateSettings": {
        "templateConditions": [{"main": "postType", "postType": ["lawn-care-programs"]}],
        "templatePreviewType": "single",
        "templatePreviewPostType": "lawn-care-programs"},
    "global_classes": list(CLASSES.values()),
    "globalVariables": [],
    "globalVariablesCategories": []},
    "/home/user/prideinturf/_project/exports/imports/single-lawn-care-program.json")
