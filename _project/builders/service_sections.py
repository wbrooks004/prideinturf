
s1 = section("svhero", "1 · Service Hero", bg="var(--base-ultra-light)", surface="surface-hero")
s1c = el(nid("svhero"), "container", s1, {
    "_display": "grid", "_gridTemplateColumns": "1.1fr 0.9fr",
    "_columnGap": "var(--space-xl)", "_rowGap": "var(--space-l)", "_alignItems": "center",
    "_gridTemplateColumns:tablet_portrait": "1fr"}, "Hero Grid")
s1b = el(nid("svhero"), "block", s1c, {
    "_display": "flex", "_direction": "column", "_rowGap": "var(--space-s)"}, "Hero Copy")

el(nid("svhero"), "text-basic", s1b, {
    "text": "{acf_hero_eyebrow}", "tag": "span", "_cssGlobalClasses": [C_EYEBROW],
    "_conditions": [[notempty("{acf_hero_eyebrow}")]]}, "Eyebrow")

H1_STYLE = {"tag": "h1", "_typography": {
    "font-size": "var(--h1)", "font-weight": "var(--font-weight-heading)",
    "line-height": "var(--line-height-heading)",
    "letter-spacing": "var(--letter-spacing-heading)",
    "color": {"raw": "var(--text-dark)"}}}
# Exactly one of these three renders — the conditions are mutually exclusive.
el(nid("svhero"), "heading", s1b, dict(H1_STYLE, text="{acf_hero_title_override}",
    _conditions=[[notempty("{acf_hero_title_override}")]]), "H1 — override")
el(nid("svhero"), "heading", s1b, dict(H1_STYLE, text="{acf_public_service_name}",
    _conditions=[[isempty("{acf_hero_title_override}"), notempty("{acf_public_service_name}")]]),
    "H1 — public service name")
el(nid("svhero"), "heading", s1b, dict(H1_STYLE, text="{post_title}",
    _conditions=[[isempty("{acf_hero_title_override}"), isempty("{acf_public_service_name}")]]),
    "H1 — post title")

el(nid("svhero"), "text", s1b, {
    "text": "{acf_hero_intro}", "_cssGlobalClasses": [C_LEAD],
    "_conditions": [[notempty("{acf_hero_intro}")]]}, "Hero Intro")
quote_buttons(s1b, "svhcta")

s1m = el(nid("svhero"), "block", s1c, {}, "Hero Media")
el(nid("svhero"), "image", s1m, {
    "image": {"useDynamicData": "{acf_service_image}", "size": "large"},
    "altText": "{acf_featured_service_image_alt}",
    "_cssGlobalClasses": [C_MEDIA],
    "_conditions": [[notempty("{acf_service_image}")]]}, "Service Image")

# ================================================================ TRUST STRIP
ts = section("svtrst", "Trust Strip (supporting module)", bg="var(--white)", tight=True,
             cond=[[notempty("{acf_trust_points}")]])
tsc = shell(ts, "svtrst")
tsg = el(nid("svtrst"), "block", tsc, {"_cssGlobalClasses": [C_GRID4]}, "Trust Grid")
tsl = el(nid("svtrst"), "block", tsg, {
    "hasLoop": True, "query": {"objectType": "acf_trust_points", "posts_per_page": "4"},
    "_display": "flex", "_direction": "column", "_rowGap": "var(--space-xxs)"}, "Trust Loop")
# Trust point titles are labels, not headings (brief: heading system).
el(nid("svtrst"), "text-basic", tsl, {
    "text": "{acf_trust_points_trust_point_title}", "tag": "span",
    "_typography": {"font-size": "var(--text-s)", "font-weight": "700",
                    "color": {"raw": "var(--text-dark)"}}}, "Trust Title")
el(nid("svtrst"), "text-basic", tsl, {
    "text": "{acf_trust_points_trust_point_text}", "tag": "p",
    "_typography": {"font-size": "var(--text-xs)",
                    "color": {"raw": "var(--text-dark-muted)"}}}, "Trust Text")

# ================================================================ SECTION 2 — PROBLEMS
s2 = section("svprob", "2 · Problem and Desired Outcome", bg="var(--neutral-ultra-light)",
             surface="surface-subtle-grid",
             cond=[[notempty("{acf_problems_solved}")], [notempty("{acf_desired_outcome}")]])
s2c = shell(s2, "svprob")
h2(s2c, "svprob", "The problems this service solves")
s2g = el(nid("svprob"), "block", s2c, {"_cssGlobalClasses": [C_GRID3],
    "_conditions": [[notempty("{acf_problems_solved}")]]}, "Problem Grid")
s2l = el(nid("svprob"), "block", s2g, {
    "hasLoop": True, "query": {"objectType": "acf_problems_solved", "posts_per_page": "5"},
    "_cssGlobalClasses": [C_CARD]}, "Problem Loop")
el(nid("svprob"), "heading", s2l, {"tag": "h3", "text": "{acf_problems_solved_problem}",
    "_cssGlobalClasses": [C_CARDTTL]}, "Problem Title")
el(nid("svprob"), "text-basic", s2l, {"text": "{acf_problems_solved_problem_summary}", "tag": "p",
    "_cssGlobalClasses": [C_CARDTXT]}, "Problem Summary")
el(nid("svprob"), "text-basic", s2c, {
    "text": "{acf_desired_outcome}", "tag": "p", "_cssGlobalClasses": [C_LEAD],
    "_conditions": [[notempty("{acf_desired_outcome}")]]}, "Desired Outcome")

# ================================================================ SECTION 3 — WHAT'S INCLUDED
s3 = section("svincl", "3 · What the Service Includes", bg="var(--white)",
             cond=[[notempty("{acf_what_is_included}")], [notempty("{acf_best_for}")]])
s3c = shell(s3, "svincl")
s3g = el(nid("svincl"), "block", s3c, {"_cssGlobalClasses": [C_GRID2],
    "_alignItems": "flex-start", "_columnGap": "var(--space-xl)"}, "Split")
s3a = el(nid("svincl"), "block", s3g, {
    "_display": "flex", "_direction": "column", "_rowGap": "var(--space-s)"}, "Included Copy")
h2(s3a, "svincl", "What this service includes")
el(nid("svincl"), "text", s3a, {"text": "{acf_what_is_included}",
    "_typography": {"font-size": "var(--text-m)", "color": {"raw": "var(--text-dark)"}},
    "_conditions": [[notempty("{acf_what_is_included}")]]}, "Included WYSIWYG")
s3b = el(nid("svincl"), "block", s3g, {
    "_display": "flex", "_direction": "column", "_rowGap": "var(--space-xs)",
    "_conditions": [[notempty("{acf_best_for}")]]}, "Best For")
el(nid("svincl"), "heading", s3b, {"tag": "h3", "text": "Best for",
    "_cssGlobalClasses": [C_CARDTTL]}, "Best For Title")
el(nid("svincl"), "block", s3b, {
    "hasLoop": True, "query": {"objectType": "acf_best_for", "posts_per_page": "6"},
    "_cssGlobalClasses": [C_TICK]}, "Best For Loop")
el(nid("svincl"), "text-basic", NODES[-1]["id"], {
    "text": "{acf_best_for_benefit}", "tag": "span"}, "Best For Item")

# ================================================================ SECTION 4 — PROCESS
s4 = section("svstep", "4 · How the Service Works", bg="var(--neutral-ultra-light)",
             surface="surface-subtle-grid", cond=[[notempty("{acf_service_steps}")]])
s4c = shell(s4, "svstep")
h2(s4c, "svstep", "How this service works")
s4g = el(nid("svstep"), "block", s4c, {"_cssGlobalClasses": [C_GRID3]}, "Step Grid")
s4l = el(nid("svstep"), "block", s4g, {
    "hasLoop": True, "query": {"objectType": "acf_service_steps", "posts_per_page": "5"},
    "_cssGlobalClasses": [C_CARD]}, "Step Loop")
el(nid("svstep"), "text-basic", s4l, {"text": "Step {query_loop_index}", "tag": "span",
    "_cssGlobalClasses": [C_STEPNUM]}, "Step Number")
el(nid("svstep"), "heading", s4l, {"tag": "h3", "text": "{acf_service_steps_step_heading}",
    "_cssGlobalClasses": [C_CARDTTL]}, "Step Heading")
el(nid("svstep"), "text-basic", s4l, {"text": "{acf_service_steps_step_text}", "tag": "p",
    "_cssGlobalClasses": [C_CARDTXT]}, "Step Text")

# ================================================================ SECTION 5 — TIMING & TURF
s5 = section("svtime", "5 · Timing and Turf Compatibility", bg="var(--white)",
             cond=[[notempty("{acf_seasonal_timing}")], [notempty("{acf_turf_type}")],
                   [notempty("{acf_seasons}")]])
s5c = shell(s5, "svtime")
h2(s5c, "svtime", "When to treat and which turf types")
s5g = el(nid("svtime"), "block", s5c, {"_cssGlobalClasses": [C_GRID3]}, "Spec Grid")
for lbl, tag in (("Best timing", "{acf_seasonal_timing}"),
                 ("Turf types", "{acf_turf_type}"),
                 ("Seasons", "{acf_seasons}")):
    item = el(nid("svtime"), "div", s5g, {"_cssGlobalClasses": [C_SPECITM],
        "_conditions": [[notempty(tag)]]}, f"Spec — {lbl}")
    el(nid("svtime"), "text-basic", item, {"text": lbl, "tag": "span",
        "_cssGlobalClasses": [C_SPECLBL]}, "Label")
    el(nid("svtime"), "text-basic", item, {"text": tag, "tag": "p",
        "_cssGlobalClasses": [C_SPECVAL]}, "Value")

# ================================================================ SECTION 6 — PROGRAM FIT
s6 = section("svprog", "6 · How This Fits a Program", bg="var(--primary-ultra-light)",
             cond=[[notempty("{acf_related_programs}")], [notempty("{acf_related_products}")]])
s6c = shell(s6, "svprog")
h2(s6c, "svprog", "How this service fits your lawn care program")
s6p = el(nid("svprog"), "block", s6c, {
    "hasLoop": True, "query": {"objectType": "acf_related_programs", "posts_per_page": "1"},
    "_cssGlobalClasses": [C_CARD, C_CARDFEAT], "_widthMax": "42rem",
    "_conditions": [[notempty("{acf_related_programs}")]]}, "Program Card Loop")
el(nid("svprog"), "text-basic", s6p, {"text": "{acf_card_eyebrow @fallback:'Lawn Care Program'}",
    "tag": "span", "_cssGlobalClasses": [C_EYEBROW]}, "Program Eyebrow")
el(nid("svprog"), "heading", s6p, {"tag": "h3", "text": "{post_title}",
    "_cssGlobalClasses": [C_CARDTTL]}, "Program Title")
el(nid("svprog"), "text-basic", s6p, {"text": "{acf_card_summary}", "tag": "p",
    "_cssGlobalClasses": [C_CARDTXT]}, "Program Summary")
el(nid("svprog"), "button", s6p, {"text": "View this program", "tag": "a", "size": "md",
    "_cssClasses": BTN_SECONDARY, "link": {"type": "external", "url": "{post_url}"}},
    "Program Link")

s6pw = el(nid("svprog"), "block", s6c, {
    "_display": "flex", "_direction": "column", "_rowGap": "var(--space-s)",
    "_conditions": [[notempty("{acf_related_products}")]]}, "Products")
el(nid("svprog"), "text-basic", s6pw, {"text": "Products and treatment types used", "tag": "span",
    "_cssGlobalClasses": [C_SPECLBL]}, "Products Label")
s6pg = el(nid("svprog"), "block", s6pw, {"_cssGlobalClasses": [C_GRID3]}, "Product Grid")
s6pl = el(nid("svprog"), "block", s6pg, {
    "hasLoop": True, "query": {"objectType": "acf_related_products", "posts_per_page": "3"},
    "_cssGlobalClasses": [C_CARD],
    # Hard gate: only approved, summarised product records ever render.
    "_conditions": [[eq("{acf_approved_for_publication:value}", "1"),
                     notempty("{acf_approved_summary}")]]}, "Product Loop")
el(nid("svprog"), "text-basic", s6pl, {"text": "{acf_product_category}", "tag": "span",
    "_cssGlobalClasses": [C_SPECLBL]}, "Product Category")
el(nid("svprog"), "heading", s6pl, {"tag": "h3",
    "text": "{acf_public_display_name @fallback:'{post_title}'}",
    "_cssGlobalClasses": [C_CARDTTL]}, "Product Name")
el(nid("svprog"), "text-basic", s6pl, {"text": "{acf_approved_summary}", "tag": "p",
    "_cssGlobalClasses": [C_CARDTXT]}, "Approved Summary")
el(nid("svprog"), "text-basic", s6pl, {"text": "{acf_required_qualification}", "tag": "p",
    "_typography": {"font-size": "var(--text-xs)", "color": {"raw": "var(--text-dark-muted)"}},
    "_conditions": [[notempty("{acf_required_qualification}")]]}, "Required Qualification")

# ================================================================ SECTION 7 — PROOF
s7 = section("svprof", "7 · Results and Customer Proof", bg="var(--base-ultra-dark)",
             surface="surface-proof")
s7c = shell(s7, "svprof")
h2(s7c, "svprof", "Results and customer feedback", light=True)
s7g = el(nid("svprof"), "block", s7c, {"_cssGlobalClasses": [C_GRID3]}, "Review Grid")
s7l = el(nid("svprof"), "block", s7g, {
    "hasLoop": True,
    "query": {"objectType": "post", "post_type": ["reviews"], "posts_per_page": "3",
              "orderby": "meta_value_num", "meta_key": "display_priority", "order": "ASC",
              "meta_query": [{"id": "mqsvc1", "key": "related_service",
                              "value": "\"{post_id}\"", "compare": "LIKE"}]},
    "_cssGlobalClasses": [C_REVCARD]}, "Review Loop")
el(nid("svprof"), "text-basic", s7l, {"text": "{acf_review_text}", "tag": "p",
    "_cssGlobalClasses": [C_REVTXT]}, "Review Text")
el(nid("svprof"), "text-basic", s7l, {"text": "{acf_reviewer_name}", "tag": "span",
    "_cssGlobalClasses": [C_REVNAME]}, "Reviewer Name")
el(nid("svprof"), "text-basic", s7l, {
    "text": "{acf_reviewer_location} · {acf_review_source}", "tag": "span",
    "_cssGlobalClasses": [C_REVMETA]}, "Reviewer Meta")

# Before / after — renders only when BOTH originals exist.
ba_cond = [[notempty("{acf_before_after_before_image}"),
            notempty("{acf_before_after_after_image}")]]
s7b = el(nid("svprof"), "block", s7c, {
    "_display": "flex", "_direction": "column", "_rowGap": "var(--space-s)",
    "_conditions": ba_cond}, "Before / After")
s7bg = el(nid("svprof"), "block", s7b, {"_cssGlobalClasses": [C_GRID2]}, "BA Grid")
for lbl, img in (("Before", "{acf_before_after_before_image}"),
                 ("After", "{acf_before_after_after_image}")):
    fig = el(nid("svprof"), "div", s7bg, {
        "_display": "flex", "_direction": "column", "_rowGap": "var(--space-xxs)"}, lbl)
    el(nid("svprof"), "text-basic", fig, {"text": lbl, "tag": "span",
        "_typography": {"font-size": "var(--text-xs)", "font-weight": "700",
                        "text-transform": "uppercase",
                        "letter-spacing": "var(--letter-spacing-eyebrow)",
                        "color": {"raw": "var(--text-light-muted)"}}}, f"{lbl} Label")
    el(nid("svprof"), "image", fig, {"image": {"useDynamicData": img, "size": "large"},
        "_cssGlobalClasses": [C_MEDIA]}, f"{lbl} Image")
el(nid("svprof"), "text-basic", s7b, {
    "text": "{acf_before_after_caption} ({acf_before_after_timeframe})", "tag": "p",
    "_cssGlobalClasses": [C_LIGHTTX],
    "_conditions": [[notempty("{acf_before_after_caption}")]]}, "BA Caption")

el(nid("svprof"), "text-basic", s7c, {"text": "{acf_guarantee_statement}", "tag": "p",
    "_cssGlobalClasses": [C_LIGHTTX],
    "_conditions": [[notempty("{acf_guarantee_statement}")]]}, "Guarantee")

# ================================================================ SECTION 8 — RELATED SERVICES
s8 = section("svrelt", "8 · Related Services", bg="var(--white)",
             cond=[[notempty("{acf_related_services}")]])
s8c = shell(s8, "svrelt")
h2(s8c, "svrelt", "Related services")
s8g = el(nid("svrelt"), "block", s8c, {"_cssGlobalClasses": [C_GRID3]}, "Service Grid")
s8l = el(nid("svrelt"), "block", s8g, {
    "hasLoop": True, "query": {"objectType": "acf_related_services", "posts_per_page": "3"},
    "_cssGlobalClasses": [C_CARD]}, "Service Card Loop")
el(nid("svrelt"), "image", s8l, {
    "image": {"useDynamicData": "{acf_service_icon}", "size": "medium"},
    "_width": "48px", "_height": "48px", "_objectFit": "contain",
    "_conditions": [[notempty("{acf_service_icon}")]]}, "Service Icon")
el(nid("svrelt"), "heading", s8l, {"tag": "h3",
    "text": "{acf_public_service_name @fallback:'{post_title}'}",
    "_cssGlobalClasses": [C_CARDTTL]}, "Service Title")
el(nid("svrelt"), "text-basic", s8l, {"text": "{acf_service_summary}", "tag": "p",
    "_cssGlobalClasses": [C_CARDTXT]}, "Service Summary")
el(nid("svrelt"), "text-link", s8l, {"text": "View service",
    "link": {"type": "external", "url": "{post_url}"},
    "_typography": {"font-size": "var(--text-s)", "font-weight": "600",
                    "color": {"raw": "var(--primary-dark)"}}}, "Service Link")

# ================================================================ SECTION 9 — FAQS
s9 = section("svfaqs", "9 · Service FAQs", bg="var(--neutral-ultra-light)",
             surface="surface-subtle-grid", cond=[[notempty("{acf_faqs}")]])
s9c = shell(s9, "svfaqs")
h2(s9c, "svfaqs", "Frequently asked questions")
# faqSchema emits FAQPage JSON-LD only for the items actually rendered here,
# and the whole section is gated on {acf_faqs} — so schema can never outrun visible copy.
s9a = el(nid("svfaqs"), "accordion-nested", s9c, {
    "expandFirstItem": True, "independentToggle": True, "faqSchema": True,
    "_widthMax": "var(--content-width-narrow)"}, "FAQ Accordion")
s9i = el(nid("svfaqs"), "block", s9a, {
    "hasLoop": True, "query": {"objectType": "acf_faqs", "posts_per_page": "6"}}, "FAQ Item Loop")
s9t = el(nid("svfaqs"), "block", s9i, {
    "_hidden": {"_cssClasses": "accordion-title-wrapper"},
    "_direction": "row", "_justifyContent": "space-between",
    "_alignItems": "center"}, "FAQ Title Wrapper")
el(nid("svfaqs"), "heading", s9t, {"tag": "h3", "text": "{acf_faqs_question}",
    "_typography": {"font-size": "var(--text-l)", "font-weight": "600",
                    "color": {"raw": "var(--text-dark)"}}}, "FAQ Question")
el(nid("svfaqs"), "icon", s9t, {
    "icon": {"library": "themify", "icon": "ti-angle-down"}, "isAccordionIcon": True}, "FAQ Icon")
s9w = el(nid("svfaqs"), "block", s9i, {
    "_hidden": {"_cssClasses": "accordion-content-wrapper"}}, "FAQ Content Wrapper")
el(nid("svfaqs"), "text", s9w, {"text": "{acf_faqs_answer}",
    "_typography": {"font-size": "var(--text-m)",
                    "color": {"raw": "var(--text-dark-muted)"}}}, "FAQ Answer")

# ================================================================ SECTION 10 — FINAL CTA
s10 = section("svfcta", "10 · Final Evaluation CTA", bg="var(--base-ultra-dark)",
              surface="surface-dark-cta")
s10c = el(nid("svfcta"), "container", s10, {
    "_display": "flex", "_direction": "column", "_rowGap": "var(--space-s)",
    "_alignItems": "center", "_textAlign": "center",
    "_widthMax": "var(--content-width-narrow)",
    "_margin": {"left": "auto", "right": "auto"}}, "CTA Shell")
el(nid("svfcta"), "heading", s10c, {"tag": "h2",
    "text": "{acf_default_quote_cta_heading @fallback:'Ready for a healthier lawn?'}",
    "_cssGlobalClasses": [C_HEAD, C_HEADLT]}, "CTA Heading")
el(nid("svfcta"), "text-basic", s10c, {
    "text": "{acf_default_quote_cta_text}", "tag": "p",
    "_cssGlobalClasses": [C_LIGHTTX],
    "_conditions": [[notempty("{acf_default_quote_cta_text}")]]}, "CTA Text")
quote_buttons(s10c, "svfcta")

