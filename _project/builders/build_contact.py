#!/usr/bin/env python3
"""Pride In Turf — Contact page template (page ID 287). Run from anywhere:
    python3 _project/builders/build_contact.py
"""
import os, sys
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from pit_common import *

# The WS Form embed. The form does not exist yet — this ID MUST be set after the
# form is built, or the page renders whatever form happens to be id 1.
WS_FORM_ID = "1"

# ================================================================ 1 — CONTACT HERO
s1 = section("c", "1 · Contact Hero", bg="var(--base-ultra-light)", surface="surface-hero")
s1c = el(nid(), "container", s1, {
    "_display": "flex", "_direction": "column", "_rowGap": "var(--space-s)",
    "_widthMax": "var(--content-width-narrow)",
    "_margin": {"left": "auto", "right": "auto"}}, "Hero Shell")
el(nid(), "text-basic", s1c, {"text": "{acf_hero_eyebrow}", "tag": "span",
    "_cssGlobalClasses": [C_EYEBROW],
    "_conditions": [[notempty("{acf_hero_eyebrow}")]]}, "Eyebrow")

H1 = {"tag": "h1", "_typography": {
    "font-size": "var(--h1)", "font-weight": "var(--font-weight-heading)",
    "line-height": "var(--line-height-heading)",
    "letter-spacing": "var(--letter-spacing-heading)",
    "color": {"raw": "var(--text-dark)"}}}
el(nid(), "heading", s1c, dict(H1, text="{acf_hero_heading_override}",
    _conditions=[[notempty("{acf_hero_heading_override}")]]), "H1 — hero override")
el(nid(), "heading", s1c, dict(H1, text="{post_title}",
    _conditions=[[isempty("{acf_hero_heading_override}")]]), "H1 — page title")

# 60–100 words stating who this page is for. The form itself stays out of the hero.
el(nid(), "text-basic", s1c, {"text": "{acf_contact_intro}", "tag": "p",
    "_cssGlobalClasses": [C_LEAD],
    "_conditions": [[notempty("{acf_contact_intro}")]]}, "Contact Intro")
el(nid(), "text-basic", s1c, {"text": "{acf_hero_summary}", "tag": "p",
    "_cssGlobalClasses": [C_LEAD],
    "_conditions": [[isempty("{acf_contact_intro}"),
                     notempty("{acf_hero_summary}")]]}, "Hero Summary (fallback)")
acts = el(nid(), "block", s1c, {"_cssGlobalClasses": [C_ACTIONS]}, "Hero CTAs")
el(nid(), "button", acts, {
    "text": "{acf_phone_cta_label @fallback:'Call 833.388.8873'}", "tag": "a", "size": "lg",
    "_cssClasses": BTN_SECONDARY,
    "link": {"type": "external", "url": "tel:{acf_main_phone_number}"},
    "_conditions": [[notempty("{acf_main_phone_number}")]]}, "Phone CTA")

# ================================================================ 2 — CONTACT OPTIONS
s2 = section("c", "2 · Contact Options", bg="var(--white)",
             cond=[[notempty("{acf_contact_options}")]])
s2c = shell(s2, "c")
h2(s2c, "c", "How to reach the right person")
s2g = el(nid(), "block", s2c, {"_cssGlobalClasses": [C_GRID4]}, "Method Grid")
s2l = el(nid(), "block", s2g, {
    "hasLoop": True, "query": {"objectType": "acf_contact_options", "posts_per_page": "4"},
    "_cssGlobalClasses": [C_CARD]}, "Contact Method Loop")
el(nid(), "heading", s2l, {"tag": "h3", "text": "{acf_contact_options_method_title}",
    "_cssGlobalClasses": [C_CARDTTL]}, "Method Title")
el(nid(), "text-basic", s2l, {"text": "{acf_contact_options_method_text}", "tag": "p",
    "_cssGlobalClasses": [C_CARDTXT]}, "Method Text")

LINK_STYLE = {"_typography": {"font-size": "var(--text-s)", "font-weight": "600",
                              "color": {"raw": "var(--primary-dark)"}}}
MT = "{acf_contact_options_method_type:value}"
# An explicit link wins. Otherwise the destination comes from Business Info, so
# phone / email / portal stay centralised instead of being retyped per card.
el(nid(), "text-link", s2l, dict(LINK_STYLE, text="Go",
    link={"type": "meta", "useDynamicData": "{acf_contact_options_method_link}"},
    _conditions=[[notempty("{acf_contact_options_method_link}")]]), "Link — explicit")
el(nid(), "text-link", s2l, dict(LINK_STYLE, text="{acf_main_phone_number}",
    link={"type": "external", "url": "tel:{acf_main_phone_number}"},
    _conditions=[[isempty("{acf_contact_options_method_link}"), eq(MT, "phone")]]),
    "Link — phone")
el(nid(), "text-link", s2l, dict(LINK_STYLE, text="{acf_main_email}",
    link={"type": "external", "url": "mailto:{acf_main_email}"},
    _conditions=[[isempty("{acf_contact_options_method_link}"), eq(MT, "email")]]),
    "Link — email")
el(nid(), "text-link", s2l, dict(LINK_STYLE, text="Open the customer portal",
    link={"type": "external", "url": "{acf_client_portal_url}"},
    _conditions=[[isempty("{acf_contact_options_method_link}"), eq(MT, "portal")]]),
    "Link — portal")
el(nid(), "text-link", s2l, dict(LINK_STYLE, text="Request a quote",
    link={"type": "external", "url": "#quote-form"},
    _conditions=[[isempty("{acf_contact_options_method_link}"), eq(MT, "quote")]]),
    "Link — quote form")

# ================================================================ 3 — WS FORM
s3 = section("c", "3 · Quote Form", bg="var(--neutral-ultra-light)",
             surface="surface-subtle-grid", extra={"_cssId": "quote-form"})
s3c = shell(s3, "c")
s3g = el(nid(), "block", s3c, {"_cssGlobalClasses": [C_GRID2],
    "_alignItems": "flex-start", "_columnGap": "var(--space-xl)",
    "_gridTemplateColumns": "1.2fr 0.8fr"}, "Form Split")
s3f = el(nid(), "block", s3g, {
    "_display": "flex", "_direction": "column", "_rowGap": "var(--space-s)"}, "Form Column")
el(nid(), "heading", s3f, {"tag": "h2",
    "text": "{acf_form_heading @fallback:'Request your free lawn evaluation'}",
    "_cssGlobalClasses": [C_HEAD]}, "Form Heading")
el(nid(), "text-basic", s3f, {"text": "{acf_form_short_text}", "tag": "p",
    "_cssGlobalClasses": [C_LEAD],
    "_conditions": [[notempty("{acf_form_short_text}")]]}, "Form Intro")
el(nid(), "shortcode", s3f, {"shortcode": f'[ws_form id="{WS_FORM_ID}"]'},
   "WS FORM — SET THE FORM ID")

s3r = el(nid(), "block", s3g, {"_cssGlobalClasses": [C_CARD, C_CARDFEAT]},
         "Reassurance Panel")
el(nid(), "text-basic", s3r, {"text": "What to expect", "tag": "span",
    "_cssGlobalClasses": [C_SPECLBL]}, "Reassurance Label")
# Verified commitment — the same sentence must appear in the form's success message.
el(nid(), "text-basic", s3r, {
    "text": "We review your details and get back to you within 24 hours.", "tag": "p",
    "_typography": {"font-size": "var(--text-m)", "font-weight": "600",
                    "color": {"raw": "var(--text-dark)"}}}, "Response Time")
rp = el(nid(), "block", s3r, {
    "_display": "flex", "_direction": "column", "_rowGap": "var(--space-xxs)",
    "_conditions": [[notempty("{acf_form_reassurance_points}")]]}, "Reassurance Points")
rpl = el(nid(), "block", rp, {
    "hasLoop": True,
    "query": {"objectType": "acf_form_reassurance_points", "posts_per_page": "4"},
    "_cssGlobalClasses": [C_TICK]}, "Reassurance Loop")
el(nid(), "text-basic", rpl, {"text": "{acf_form_reassurance_points_point}", "tag": "span"},
   "Reassurance Point")
el(nid(), "text-basic", s3r, {"text": "Prefer to talk? Call {acf_main_phone_number}.",
    "tag": "p", "_cssGlobalClasses": [C_CARDTXT],
    "_conditions": [[notempty("{acf_main_phone_number}")]]}, "Phone Alternative")

# ================================================================ 4 — WHAT HAPPENS NEXT
s4 = section("c", "4 · What Happens Next", bg="var(--white)",
             cond=[[notempty("{acf_next_steps}")]])
s4c = shell(s4, "c")
h2(s4c, "c", "What happens after you get in touch")
s4g = el(nid(), "block", s4c, {"_cssGlobalClasses": [C_GRID3]}, "Step Grid")
s4l = el(nid(), "block", s4g, {
    "hasLoop": True, "query": {"objectType": "acf_next_steps", "posts_per_page": "3"},
    "_cssGlobalClasses": [C_CARD]}, "Next Step Loop")
el(nid(), "text-basic", s4l, {"text": "Step {query_loop_index}", "tag": "span",
    "_cssGlobalClasses": [C_STEPNUM]}, "Step Number")
el(nid(), "heading", s4l, {"tag": "h3", "text": "{acf_next_steps_step_heading}",
    "_cssGlobalClasses": [C_CARDTTL]}, "Step Heading")
el(nid(), "text-basic", s4l, {"text": "{acf_next_steps_step_text}", "tag": "p",
    "_cssGlobalClasses": [C_CARDTXT]}, "Step Text")

# ================================================================ 5 — LOCATIONS
s5 = section("c", "5 · Locations and Service Routing", bg="var(--neutral-ultra-light)",
             surface="surface-subtle-grid",
             cond=[[eq("{acf_show_location_cards:value}", "1")]])
s5c = shell(s5, "c")
h2(s5c, "c", "Our branches")
s5g = el(nid(), "block", s5c, {"_cssGlobalClasses": [C_GRID3]}, "Branch Grid")
# Branch pages identify themselves by carrying a real street address, so this
# needs no hardcoded IDs and cannot pick up a service-area page by mistake.
s5l = el(nid(), "block", s5g, {
    "hasLoop": True,
    "query": {"objectType": "post", "post_type": ["page"], "posts_per_page": "3",
              "orderby": "menu_order title", "order": "ASC",
              "meta_query": [{"id": "mqbr01", "key": "street_address",
                              "value": "", "compare": "!="}]},
    "_cssGlobalClasses": [C_CARD, C_BRANCHCARD]}, "Branch Loop")
el(nid(), "heading", s5l, {"tag": "h3",
    "text": "{acf_location_display_name @fallback:'{post_title}'}",
    "_cssGlobalClasses": [C_CARDTTL]}, "Branch Name")
el(nid(), "text-basic", s5l, {
    "text": "{acf_street_address}<br>{acf_city}, {acf_state} {acf_zipcode}", "tag": "p",
    "_typography": {"font-size": "var(--text-s)",
                    "color": {"raw": "var(--text-dark-muted)"}}}, "Branch NAP")
el(nid(), "text-link", s5l, dict(LINK_STYLE, text="{acf_main_phone_number}",
    link={"type": "external", "url": "tel:{acf_main_phone_number}"},
    _conditions=[[notempty("{acf_main_phone_number}")]]), "Branch Phone")
ohw = el(nid(), "block", s5l, {
    "_display": "flex", "_direction": "column", "_rowGap": "var(--space-xxs)",
    "_conditions": [[notempty("{acf_office_hours}")]]}, "Office Hours")
ohl = el(nid(), "block", ohw, {
    "hasLoop": True, "query": {"objectType": "acf_office_hours", "posts_per_page": "7"},
    "_display": "flex", "_direction": "row", "_justifyContent": "space-between",
    "_typography": {"font-size": "var(--text-xs)",
                    "color": {"raw": "var(--text-dark-muted)"}}}, "Hours Loop")
el(nid(), "text-basic", ohl, {"text": "{acf_office_hours_day}", "tag": "span"}, "Day")
el(nid(), "text-basic", ohl, {"text": "{acf_office_hours_hours}", "tag": "span"}, "Hours")
el(nid(), "text-basic", s5l, {"text": "{acf_areas_served_summary}", "tag": "p",
    "_typography": {"font-size": "var(--text-xs)", "color": {"raw": "var(--text-dark-muted)"}},
    "_conditions": [[notempty("{acf_areas_served_summary}")]]}, "Areas Served")
el(nid(), "text-link", s5l, dict(LINK_STYLE, text="Directions",
    link={"type": "external", "url": "{acf_directions_link}"},
    _conditions=[[notempty("{acf_directions_link}")]]), "Directions")

# ================================================================ 6 — FAQS + COMPACT CTA
s6 = section("c", "6 · Contact FAQs and Final Reassurance", bg="var(--white)")
s6c = shell(s6, "c")
h2(s6c, "c", "Before you get in touch")
s6a = el(nid(), "accordion-nested", s6c, {
    "expandFirstItem": True, "independentToggle": True, "faqSchema": True,
    "_widthMax": "var(--content-width-narrow)",
    "_conditions": [[notempty("{acf_contact_faqs}")]]}, "FAQ Accordion")
s6i = el(nid(), "block", s6a, {
    "hasLoop": True, "query": {"objectType": "acf_contact_faqs", "posts_per_page": "6"}},
    "FAQ Item Loop")
s6t = el(nid(), "block", s6i, {
    "_hidden": {"_cssClasses": "accordion-title-wrapper"},
    "_direction": "row", "_justifyContent": "space-between",
    "_alignItems": "center"}, "FAQ Title Wrapper")
el(nid(), "heading", s6t, {"tag": "h3", "text": "{acf_contact_faqs_question}",
    "_typography": {"font-size": "var(--text-l)", "font-weight": "600",
                    "color": {"raw": "var(--text-dark)"}}}, "FAQ Question")
el(nid(), "icon", s6t, {"icon": {"library": "themify", "icon": "ti-angle-down"},
    "isAccordionIcon": True}, "FAQ Icon")
s6w = el(nid(), "block", s6i, {
    "_hidden": {"_cssClasses": "accordion-content-wrapper"}}, "FAQ Content Wrapper")
el(nid(), "text", s6w, {"text": "{acf_contact_faqs_answer}",
    "_typography": {"font-size": "var(--text-m)",
                    "color": {"raw": "var(--text-dark-muted)"}}}, "FAQ Answer")

# Compact final CTA — phone only. The form above is the page's main action.
cta = el(nid(), "block", s6c, {
    "_display": "flex", "_direction": "row", "_alignItems": "center",
    "_justifyContent": "space-between", "_columnGap": "var(--space-s)",
    "_rowGap": "var(--space-s)", "_flexWrap": "wrap",
    "_background": {"color": {"raw": "var(--primary-ultra-light)"}},
    "_padding": {"top": "var(--space-m)", "right": "var(--space-m)",
                 "bottom": "var(--space-m)", "left": "var(--space-m)"},
    "_border": {"radius": {"top": "var(--radius-m)", "right": "var(--radius-m)",
                           "bottom": "var(--radius-m)", "left": "var(--radius-m)"}},
    "_widthMax": "var(--content-width-narrow)"}, "Compact CTA")
el(nid(), "text-basic", cta, {
    "text": "Would rather talk it through? We answer during business hours.", "tag": "p",
    "_typography": {"font-size": "var(--text-m)", "font-weight": "600",
                    "color": {"raw": "var(--text-dark)"}}}, "Compact CTA Text")
el(nid(), "button", cta, {
    "text": "{acf_phone_cta_label @fallback:'Call 833.388.8873'}", "tag": "a", "size": "md",
    "_cssClasses": BTN_SECONDARY,
    "link": {"type": "external", "url": "tel:{acf_main_phone_number}"},
    "_conditions": [[notempty("{acf_main_phone_number}")]]}, "Compact Phone CTA")

emit({
    "name": "pit-page-contact",
    "title": "PIT — Page: Contact",
    "type": "content",
    "content": NODES,
    "pageSettings": {},
    "templateSettings": {
        "templateConditions": [{"main": "ids", "ids": [287]}],
        "templatePreviewType": "single",
        "templatePreviewPostId": 287},
    "global_classes": list(CLASSES.values()),
    "globalVariables": [],
    "globalVariablesCategories": []},
    "/home/user/prideinturf/_project/exports/imports/page-contact.json")
