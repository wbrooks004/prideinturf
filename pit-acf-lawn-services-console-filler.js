/**
 * Pride In Turf — ACF Lawn Services CPT console filler
 *
 * HOW TO USE
 * 1. Log into wp-admin and open a Lawn Service post (post-new or edit).
 * 2. Open DevTools → Console.
 * 3. Paste this entire file and press Enter.
 * 4. Run:  PIT.fillCurrentPage()
 *    Or:   PIT.fillService('aeration')
 *    Or:   PIT.listServices()
 * 5. Review fields, add images/relationships manually, then click Update.
 *
 * Skips: featured_service_image, parent_service_override, related_services (manual).
 */
(() => {
  'use strict';

  const GUARANTEE =
    'If you report a concern after a scheduled application and the lawn was maintained according to the guidance we provided, we will re-check the area and explain next steps. When a re-treatment is appropriate based on findings and product timing, we will schedule it under our service policy.';

  const BONDED = 'Bonded and insured. Documentation available upon request.';

  const SHARED = {
    branch_pages_to_feature: ['atlanta', 'hoschton'],
    available_in_atlanta: 1,
    available_in_hoschton: 1,
    is_public_service: 1,
    show_in_navigation: 1,
    requires_manual_quote_review: 0,
    noindex_service_page: 0,
    service_guarantee_text: GUARANTEE,
    bonded_and_insured_text: BONDED,
    supporting_proof_heading: 'Why Metro Atlanta homeowners trust Pride In Turf',
    supporting_proof_text:
      'Locally operated since 2005. Season-timed treatments matched to Georgia turf types. Clear service notes after every visit. Real routes across the northern Atlanta metro.',
    cta_heading: 'Ready for a plan built around your lawn?',
    cta_text:
      'Request a quote and we will recommend the right next step for your grass type, property conditions, and season.',
  };

  /** @param {object} o */
  function pack(o) {
    return Object.assign({}, SHARED, o);
  }

  const SERVICES = {
    'lawn-care-programs': pack({
      service_code: 'LCP',
      public_service_name: 'Lawn Care Programs',
      internal_service_type: 'core_service',
      service_category: 'lawn_care_programs',
      grass_type_applicability: ['bermuda', 'zoysia', 'fescue', 'mixed'],
      seasonal_relevance: ['spring', 'summer', 'fall', 'year_round'],
      hero_title_override: 'Lawn Care Programs for Metro Atlanta',
      hero_intro:
        'Season-timed weed control and fertilization designed for Georgia lawns — matched to your turf type and built to improve density over the full year.',
      service_summary:
        'Complete annual lawn treatment programs with pre-emergent, post-emergent, and fertilization timed to Metro Atlanta conditions.',
      what_is_included:
        '<p>Our lawn care programs combine weed prevention, targeted weed control, and fertilization across a full treatment schedule. Each visit includes a turf check, season-appropriate applications, and service notes so you know what was done and what happens next.</p><ul><li>Pre-emergent applications before key germination windows</li><li>Post-emergent control when weeds are actively growing</li><li>Fertilization timed to your grass type and growth stage</li><li>Ongoing monitoring and plan adjustments through the season</li></ul>',
      who_is_it_for:
        '<p>Homeowners across Metro Atlanta who want a healthier, thicker lawn without guessing when to treat. Ideal if weeds keep returning, color is inconsistent, or you are tired of one-off applications that fade after a few weeks.</p><p>Programs are tailored for Bermuda, Zoysia, Tall Fescue, and mixed lawns common in north Georgia.</p>',
      service_process: [
        {
          step_title: 'Assess turf type and lawn conditions',
          step_text:
            'We confirm your grass type, review weed pressure, thin areas, and any signs of disease, compaction, or shade stress before recommending a program.',
        },
        {
          step_title: 'Build a season-timed treatment plan',
          step_text:
            'Your schedule follows Metro Atlanta timing — pre-emergent before germination, nutrients when turf is actively growing, and follow-up visits through the year.',
        },
        {
          step_title: 'Treat, document, and adjust',
          step_text:
            'Each visit includes targeted applications and clear notes. We track response over the season and adjust the plan so turf gets denser and weeds have less room to return.',
        },
      ],
      key_benefits: [
        {
          benefit_title: 'Georgia timing, not generic calendars',
          benefit_text: 'Applications follow local seasonal triggers — green-up, pre-emergent windows, and growth-stage nutrition.',
        },
        {
          benefit_title: 'Turf-type specific',
          benefit_text: 'Bermuda, Zoysia, and Fescue are treated differently because product timing and tolerance differ.',
        },
        {
          benefit_title: 'Full-season consistency',
          benefit_text: 'Weed control and fertilization work best as a repeatable plan, not isolated visits.',
        },
        {
          benefit_title: 'Clear expectations',
          benefit_text: 'You receive service notes and straightforward guidance on what improves quickly vs. over a season.',
        },
      ],
      service_faqs: [
        {
          question: 'What is included in a lawn care program?',
          answer:
            'A full program typically includes season-timed pre-emergent, post-emergent weed control, fertilization, turf monitoring, and service documentation across the year.',
        },
        {
          question: 'Do you treat warm-season and cool-season grass the same way?',
          answer:
            'No. Bermuda and Zoysia follow warm-season timing. Tall Fescue follows a different calendar. We match products and timing to your turf type.',
        },
        {
          question: 'When will I see results?',
          answer:
            'Some weeds respond within days after post-emergent treatment. Pre-emergent results show up as fewer new weeds in the next germination window. Thicker turf builds over multiple visits.',
        },
        {
          question: 'Is this a contract?',
          answer:
            'We will explain program structure and visit frequency during your quote. Ask us about terms that fit your property and goals.',
        },
      ],
      seo_title_override: 'Lawn Care Programs Atlanta GA | Pride In Turf',
      meta_description_override:
        'Season-timed lawn care programs for Metro Atlanta. Weed control and fertilization matched to Bermuda, Zoysia, and Fescue. Request a quote from Pride In Turf.',
      schema_service_name_override: 'Lawn Care Programs',
      schema_short_description:
        'Annual lawn treatment programs with weed control and fertilization for Metro Atlanta homeowners.',
      primary_keyword: 'lawn care programs Atlanta',
      secondary_keywords:
        'Atlanta lawn treatment plan\nMetro Atlanta weed control and fertilization\nlawn care program Georgia',
    }),

    'warm-season-lawn-care': pack({
      service_code: 'L8',
      public_service_name: 'Warm Season Lawn Care',
      internal_service_type: 'child_service',
      service_category: 'lawn_care_programs',
      grass_type_applicability: ['bermuda', 'zoysia'],
      seasonal_relevance: ['spring', 'summer', 'fall'],
      hero_title_override: 'Warm Season Lawn Care Program (8 Applications)',
      hero_intro:
        'Eight visit-per-year weed control and fertilization for Bermuda and Zoysia lawns — timed to north Georgia warm-season growth.',
      service_summary:
        'Eight-application warm-season program for Bermuda and Zoysia lawns across Metro Atlanta.',
      what_is_included:
        '<p>Eight scheduled visits per year built around warm-season turf biology. Includes pre-emergent and post-emergent weed control, fertilization after true green-up, and seasonal monitoring for Atlanta-area Bermuda and Zoysia lawns.</p>',
      who_is_it_for:
        '<p>Homeowners with Bermuda or Zoysia who want a structured annual plan instead of reactive spot treatments. Common across sunny front lawns and many Metro Atlanta neighborhoods.</p>',
      service_process: [
        {
          step_title: 'Confirm warm-season turf and baseline conditions',
          step_text: 'We verify Bermuda or Zoysia, assess weed types, density, and any disease or compaction concerns.',
        },
        {
          step_title: 'Execute the 8-visit warm-season schedule',
          step_text: 'Applications align to germination windows, active growth, and late-season prep — not arbitrary calendar dates.',
        },
        {
          step_title: 'Monitor density and weed rebound',
          step_text: 'Follow-up visits target persistent weeds and support thicker turf that competes naturally.',
        },
      ],
      key_benefits: [
        {
          benefit_title: 'Built for Bermuda and Zoysia',
          benefit_text: 'Product selection and timing respect warm-season growth cycles.',
        },
        {
          benefit_title: 'Pre-emergent before weeds show',
          benefit_text: 'Prevention is timed for north Georgia germination windows.',
        },
        {
          benefit_title: 'Nutrients after green-up',
          benefit_text: 'Fertilization waits until turf is actively growing — reducing burn and disease risk.',
        },
      ],
      service_faqs: [
        {
          question: 'Is this program only for Bermuda?',
          answer: 'It is designed for warm-season turf — primarily Bermuda and Zoysia lawns in Metro Atlanta.',
        },
        {
          question: 'Why eight applications?',
          answer: 'Eight visits match a full warm-season treatment cycle with prevention, active control, and seasonal follow-through.',
        },
      ],
      seo_title_override: 'Warm Season Lawn Care Atlanta | 8-Visit Program',
      meta_description_override:
        '8-application warm season lawn care for Bermuda and Zoysia in Metro Atlanta. Season-timed weed control and fertilization from Pride In Turf.',
      primary_keyword: 'warm season lawn care Atlanta',
      secondary_keywords: 'Bermuda lawn care program\nZoysia lawn treatment Atlanta',
    }),

    'cool-season-lawn-care': pack({
      service_code: 'CLC',
      public_service_name: 'Cool Season Lawn Care',
      internal_service_type: 'child_service',
      service_category: 'lawn_care_programs',
      grass_type_applicability: ['fescue'],
      seasonal_relevance: ['fall', 'winter', 'spring'],
      hero_title_override: 'Cool Season Lawn Care Program (8 Applications)',
      hero_intro:
        'Eight visit-per-year program for Tall Fescue lawns — fertilization and weed control timed to cool-season growth in north Georgia.',
      service_summary: 'Eight-application program dedicated to Tall Fescue and cool-season lawns in Metro Atlanta.',
      what_is_included:
        '<p>Eight annual visits with weed control and fertilization calibrated for Tall Fescue. Includes broadleaf and grassy weed management, fall and spring nutrition windows, and monitoring through Atlanta\'s cool-season cycle.</p>',
      who_is_it_for:
        '<p>Properties with Tall Fescue — especially shaded backyards and mixed landscapes where warm-season turf struggles. Ideal when fescue thins out, weeds invade in fall, or color fades between seasons.</p>',
      service_process: [
        { step_title: 'Identify fescue areas and weed pressure', step_text: 'We map fescue zones, note shade and drainage, and document dominant weed types.' },
        { step_title: 'Apply cool-season timed treatments', step_text: 'Nutrition and control follow fescue growth — not the same schedule as Bermuda or Zoysia.' },
        { step_title: 'Support recovery and density', step_text: 'Follow-up visits target thin spots and recurring weeds through the cool-season calendar.' },
      ],
      key_benefits: [
        { benefit_title: 'Fescue-specific calendar', benefit_text: 'Cool-season grass needs different timing than warm-season turf — we plan accordingly.' },
        { benefit_title: 'Shade-aware recommendations', benefit_text: 'We account for tree canopy and moisture when setting expectations.' },
        { benefit_title: 'Weed control without warm-season assumptions', benefit_text: 'Products and timing match fescue tolerance.' },
      ],
      service_faqs: [
        { question: 'Can I use this program on Bermuda?', answer: 'No — this program is for cool-season Tall Fescue. Warm-season lawns need the warm season program.' },
        { question: 'When is the best time to start fescue care?', answer: 'Timing depends on current weed pressure and season. We recommend the right entry point after a quick assessment.' },
      ],
      seo_title_override: 'Cool Season Lawn Care Atlanta | Tall Fescue Program',
      meta_description_override: '8-visit Tall Fescue lawn care program for Metro Atlanta. Cool-season weed control and fertilization from Pride In Turf.',
      primary_keyword: 'Tall Fescue lawn care Atlanta',
      secondary_keywords: 'cool season lawn program Georgia\nfescue weed control Atlanta',
    }),

    'split-lawn-care': pack({
      service_code: 'SLC',
      public_service_name: 'Split Lawn Care',
      internal_service_type: 'child_service',
      service_category: 'lawn_care_programs',
      grass_type_applicability: ['mixed'],
      seasonal_relevance: ['spring', 'summer', 'fall', 'year_round'],
      hero_title_override: 'Split Lawn Care Program (8 Applications)',
      hero_intro:
        'One program for properties with both warm-season and cool-season turf — front Bermuda, back Fescue, or mixed zones across Metro Atlanta.',
      service_summary: 'Eight-application program for mixed warm- and cool-season lawns on the same property.',
      what_is_included:
        '<p>Eight visits per year with zone-specific treatment logic. Warm-season areas receive warm-season timing; fescue areas receive cool-season timing — under one coordinated plan and one service relationship.</p>',
      who_is_it_for:
        '<p>Homeowners whose property has more than one turf type — a common Atlanta pattern when front lawns are sunny Bermuda and backyards stay shaded fescue.</p>',
      service_process: [
        { step_title: 'Map turf zones on the property', step_text: 'We identify where each grass type grows and flag transition areas that need extra care.' },
        { step_title: 'Coordinate dual calendars', step_text: 'Applications respect both warm- and cool-season windows without cross-contaminating timing.' },
        { step_title: 'Unified reporting', step_text: 'You receive one clear plan with notes per zone so nothing is treated on the wrong schedule.' },
      ],
      key_benefits: [
        { benefit_title: 'One plan, multiple turf types', benefit_text: 'No need to hire separate providers for front and back lawns.' },
        { benefit_title: 'Zone-aware applications', benefit_text: 'Each area gets products safe for that grass type.' },
        { benefit_title: 'Simplified scheduling', benefit_text: 'Coordinated visits reduce confusion and missed windows.' },
      ],
      service_faqs: [
        { question: 'What counts as a split lawn?', answer: 'Any property with distinct warm-season and cool-season turf areas — Bermuda or Zoysia plus Tall Fescue, for example.' },
        { question: 'Does split care cost more than a single-type program?', answer: 'Pricing reflects zone complexity. Request a quote for your specific layout.' },
      ],
      seo_title_override: 'Split Lawn Care Program Atlanta | Mixed Turf',
      meta_description_override: 'Lawn care for mixed Bermuda, Zoysia, and Fescue on one Atlanta property. Coordinated 8-visit split lawn program from Pride In Turf.',
      primary_keyword: 'mixed turf lawn care Atlanta',
      secondary_keywords: 'split lawn program\nBermuda and fescue same yard Atlanta',
    }),

    aeration: pack({
      service_code: 'SA',
      public_service_name: 'Core Aeration',
      internal_service_type: 'core_service',
      service_category: 'aeration',
      grass_type_applicability: ['bermuda', 'zoysia', 'fescue', 'mixed'],
      seasonal_relevance: ['spring', 'fall'],
      hero_title_override: 'Core Aeration for Metro Atlanta Lawns',
      hero_intro:
        'Relieve compaction in Georgia clay-influenced soil so water, air, and nutrients reach your turf roots — the foundation for thicker, healthier grass.',
      service_summary:
        'Professional core aeration for compacted Metro Atlanta lawns — spring and fall service available.',
      what_is_included:
        '<p>Mechanical core aeration pulls small plugs from the soil profile to reduce compaction, improve infiltration, and help roots access nutrients. Typical service includes:</p><ul><li>Full-lawn or targeted-area aeration based on property conditions</li><li>Equipment suited to residential turf</li><li>Post-service guidance on watering and recovery</li><li>Recommendations if overseeding or fertilization should follow</li></ul>',
      who_is_it_for:
        '<p>Homeowners with hard, compacted soil — common with Georgia red clay — or lawns that stay wet on top but dry underneath. Also ideal before overseeding, after heavy foot traffic, or when fertilizer does not seem to work despite regular applications.</p>',
      service_process: [
        {
          step_title: 'Evaluate compaction and turf readiness',
          step_text: 'We check soil conditions, turf type, and whether aeration timing fits the current season and lawn goals.',
        },
        {
          step_title: 'Core aerate the lawn',
          step_text: 'Cores are pulled across the treatment area to open channels for air, water, and root growth.',
        },
        {
          step_title: 'Guide next steps',
          step_text: 'We explain recovery timing and whether overseeding, fertilization, or additional cultural practices should follow.',
        },
      ],
      key_benefits: [
        { benefit_title: 'Breaks up compacted clay', benefit_text: 'Atlanta-area soils compact easily — aeration restores movement through the profile.' },
        { benefit_title: 'Improves nutrient uptake', benefit_text: 'Fertilizer and water penetrate deeper when compaction is relieved.' },
        { benefit_title: 'Prepares for overseeding', benefit_text: 'Seed-to-soil contact improves when aeration precedes overseeding.' },
        { benefit_title: 'Supports root depth', benefit_text: 'Healthier roots anchor turf and help it compete against weeds.' },
      ],
      service_faqs: [
        {
          question: 'When should I aerate my Atlanta lawn?',
          answer: 'Timing depends on turf type. Warm-season lawns are often aerated during active growth in late spring or early fall. Fescue may follow a different window. We recommend the right season for your grass.',
        },
        {
          question: 'Should I aerate before overseeding?',
          answer: 'Yes — aeration before overseeding improves seed contact and germination on thin or bare areas.',
        },
        {
          question: 'How long do aeration plugs stay on the lawn?',
          answer: 'Plugs typically break down within a couple of weeks with normal mowing and weather.',
        },
        {
          question: 'Will aeration fix all thin lawn problems?',
          answer: 'Aeration helps compaction and infiltration. Thin shade, disease, or severe weed pressure may need additional steps — we will tell you honestly.',
        },
      ],
      seo_title_override: 'Core Aeration Atlanta GA | Pride In Turf',
      meta_description_override:
        'Professional lawn aeration for Metro Atlanta. Relieve clay compaction and improve root health. Request a core aeration quote from Pride In Turf.',
      schema_service_name_override: 'Core Aeration',
      schema_short_description: 'Core aeration service for residential lawns in Metro Atlanta.',
      primary_keyword: 'core aeration Atlanta',
      secondary_keywords: 'lawn aeration Metro Atlanta\naeration Georgia clay soil',
      cta_heading: 'Ready to loosen compacted soil?',
      cta_text: 'Request a quote for core aeration timed to your turf type and season.',
    }),

    'fungicide-programs': pack({
      service_code: 'FP',
      public_service_name: 'Fungicide Programs',
      internal_service_type: 'core_service',
      service_category: 'fungicide_programs',
      grass_type_applicability: ['bermuda', 'zoysia', 'fescue'],
      seasonal_relevance: ['spring', 'summer', 'fall'],
      hero_title_override: 'Fungicide Programs for Atlanta Lawns',
      hero_intro:
        'Preventive and curative fungicide plans matched to your turf type — because brown patches in Metro Atlanta are often disease, not weeds.',
      service_summary: 'Turf-type-specific fungicide programs for Bermuda, Zoysia, and Fescue in Metro Atlanta.',
      what_is_included:
        '<p>Scheduled fungicide applications aligned to Georgia disease pressure — especially spring and fall transition periods when large patch and similar issues appear. Programs vary by turf type; see our Bermuda, Fescue, and Zoysia options for visit counts and timing.</p>',
      who_is_it_for:
        '<p>Homeowners seeing circular brown patches, slow spring green-up with dead edges, or recurring fungus every year — particularly on Zoysia and Bermuda during humid transitions.</p>',
      service_process: [
        { step_title: 'Diagnose fungus vs. other stress', step_text: 'We differentiate disease from drought, grub damage, or chemical injury before treating.' },
        { step_title: 'Apply turf-type-specific fungicide schedule', step_text: 'Products and intervals follow your grass type and the current pressure window.' },
        { step_title: 'Adjust cultural guidance', step_text: 'We advise on moisture, mowing height, and fertility timing that affects disease risk.' },
      ],
      key_benefits: [
        { benefit_title: 'Turf-type programs', benefit_text: 'Bermuda, Zoysia, and Fescue programs use different schedules and products.' },
        { benefit_title: 'Seasonal prevention focus', benefit_text: 'Many Atlanta fungus issues are predictable — prevention beats recovery.' },
        { benefit_title: 'Diagnostic honesty', benefit_text: 'If the problem is not fungal, we say so and recommend the right fix.' },
      ],
      service_faqs: [
        { question: 'How do I know if I need fungicide?', answer: 'Recurring brown patches in spring or fall, especially in Zoysia or Bermuda, often indicate disease. We inspect before recommending a program.' },
        { question: 'Is fungicide safe for pets?', answer: 'We follow label re-entry intervals and share guidance after each application.' },
      ],
      seo_title_override: 'Lawn Fungicide Programs Atlanta | Pride In Turf',
      meta_description_override: 'Fungicide treatment programs for Bermuda, Zoysia, and Fescue in Metro Atlanta. Stop brown patch and seasonal fungus with Pride In Turf.',
      primary_keyword: 'lawn fungicide program Atlanta',
      secondary_keywords: 'brown patch treatment Atlanta\nZoysia fungus program',
    }),

    'bermuda-fungicide-program': pack({
      service_code: 'BFP',
      public_service_name: 'Bermuda Fungicide Program',
      internal_service_type: 'child_service',
      service_category: 'fungicide_programs',
      grass_type_applicability: ['bermuda'],
      seasonal_relevance: ['summer'],
      hero_title_override: 'Bermuda Fungicide Program (4 Applications)',
      hero_intro: 'Four-application May–August fungicide plan for Bermuda lawns facing summer disease pressure in Metro Atlanta.',
      service_summary: 'Four visit-per-year fungicide program for Bermuda turf — May through August.',
      what_is_included: '<p>Four scheduled fungicide applications during peak warm-season disease months. Targets common Bermuda issues during high humidity and heat stress periods typical in north Georgia summers.</p>',
      who_is_it_for: '<p>Bermuda lawns with history of summer patch, leaf spot, or recurring brown areas during hot, humid stretches.</p>',
      service_process: [
        { step_title: 'Inspect Bermuda turf health', step_text: 'We review symptoms, thatch, and moisture patterns before starting the program.' },
        { step_title: 'Apply May–August schedule', step_text: 'Four applications spaced through the highest-risk window for Bermuda disease.' },
        { step_title: 'Monitor transitions', step_text: 'Late-season visits watch for early fall disease carryover.' },
      ],
      key_benefits: [
        { benefit_title: 'Summer-focused protection', benefit_text: 'Timing concentrates on when Bermuda disease pressure peaks in Atlanta.' },
        { benefit_title: 'Four-visit consistency', benefit_text: 'Regular coverage beats reactive one-time sprays.' },
      ],
      service_faqs: [
        { question: 'Is this only for Bermuda?', answer: 'Yes — this coded program is designed specifically for Bermuda lawns.' },
      ],
      seo_title_override: 'Bermuda Fungicide Program Atlanta | 4 Applications',
      meta_description_override: '4-application Bermuda fungicide program for Metro Atlanta lawns. May–August disease protection from Pride In Turf.',
      primary_keyword: 'Bermuda fungicide Atlanta',
      secondary_keywords: 'Bermuda brown patch treatment\nsummer lawn fungus Bermuda',
    }),

    'fescue-fungicide-program': pack({
      service_code: 'FFP',
      public_service_name: 'Fescue Fungicide Program',
      internal_service_type: 'child_service',
      service_category: 'fungicide_programs',
      grass_type_applicability: ['fescue'],
      seasonal_relevance: ['spring', 'summer'],
      hero_title_override: 'Fescue Fungicide Program (5 Applications)',
      hero_intro: 'Five-application April–August fungicide plan built for Tall Fescue lawns in Metro Atlanta.',
      service_summary: 'Five visit-per-year fungicide program for Tall Fescue — April through August.',
      what_is_included: '<p>Five fungicide applications through spring and summer when fescue is vulnerable to brown patch and related issues in humid Atlanta conditions.</p>',
      who_is_it_for: '<p>Tall Fescue lawns — especially in partial shade — with recurring spring or summer fungus damage.</p>',
      service_process: [
        { step_title: 'Assess fescue disease history', step_text: 'We note prior outbreaks, shade, and irrigation patterns.' },
        { step_title: 'Execute five-visit schedule', step_text: 'Applications span April through August at intervals suited to fescue.' },
        { step_title: 'Recommend moisture and mowing adjustments', step_text: 'Cultural changes often reduce repeat outbreaks.' },
      ],
      key_benefits: [
        { benefit_title: 'Fescue-calibrated timing', benefit_text: 'Cool-season grass needs a different fungicide calendar than Bermuda.' },
        { benefit_title: 'Five visits through high-risk months', benefit_text: 'Coverage through spring green-up and summer humidity.' },
      ],
      service_faqs: [
        { question: 'Can this program be used on Zoysia?', answer: 'No — use the Zoysia fungicide program for warm-season Zoysia turf.' },
      ],
      seo_title_override: 'Fescue Fungicide Program Atlanta | 5 Applications',
      meta_description_override: '5-application Tall Fescue fungicide program for Metro Atlanta. April–August protection from Pride In Turf.',
      primary_keyword: 'Fescue fungicide Atlanta',
      secondary_keywords: 'Tall Fescue brown patch\nfescue lawn disease Georgia',
    }),

    'zoysia-fungicide-program': pack({
      service_code: 'ZP',
      public_service_name: 'Zoysia Fungicide Program',
      internal_service_type: 'child_service',
      service_category: 'fungicide_programs',
      grass_type_applicability: ['zoysia'],
      seasonal_relevance: ['spring', 'summer', 'fall'],
      hero_title_override: 'Zoysia Fungicide Program (5 Applications)',
      hero_intro: 'Five-application fungicide plan for Zoysia — timed to Mar/Apr/May and Sept/Oct windows when Atlanta Zoysia is most vulnerable.',
      service_summary: 'Five visit-per-year fungicide program for Zoysia lawns in Metro Atlanta.',
      what_is_included: '<p>Five applications timed to Zoysia transition periods — early season green-up and fall slowdown — when large patch and related issues commonly appear in Georgia.</p>',
      who_is_it_for: '<p>Zoysia homeowners tired of spring and fall brown patches that look like drought but return every year.</p>',
      service_process: [
        { step_title: 'Confirm Zoysia and symptom pattern', step_text: 'We verify turf type and whether patterns match common Zoysia disease.' },
        { step_title: 'Apply five-visit Zoysia schedule', step_text: 'Treatments align to March/April/May and September/October focus windows.' },
        { step_title: 'Track seasonal response', step_text: 'We document improvement and adjust if pressure persists.' },
      ],
      key_benefits: [
        { benefit_title: 'Transition-period focus', benefit_text: 'Zoysia disease often spikes in spring and fall — our schedule targets those windows.' },
        { benefit_title: 'Zoysia-specific products', benefit_text: 'Application choices respect Zoysia tolerance and growth stage.' },
      ],
      service_faqs: [
        { question: 'Why does my Zoysia brown in spring and fall?', answer: 'Many Atlanta Zoysia issues are fungal and tied to temperature transitions and moisture — not always lack of water.' },
      ],
      seo_title_override: 'Zoysia Fungicide Program Atlanta | 5 Applications',
      meta_description_override: '5-application Zoysia fungicide program for Metro Atlanta. Target spring and fall disease windows with Pride In Turf.',
      primary_keyword: 'Zoysia fungicide Atlanta',
      secondary_keywords: 'Zoysia large patch treatment\nZoysia lawn disease Georgia',
    }),

    'lawn-pest-control': pack({
      service_code: 'LPC',
      public_service_name: 'Lawn Pest Control',
      internal_service_type: 'core_service',
      service_category: 'lawn_pest_control',
      grass_type_applicability: ['bermuda', 'zoysia', 'fescue', 'mixed'],
      seasonal_relevance: ['spring', 'summer', 'fall'],
      hero_title_override: 'Lawn Pest Control for Metro Atlanta',
      hero_intro:
        'Targeted outdoor pest treatments for lawns and landscapes — mosquitoes, fleas and ticks, fire ants, grubs, and more across north Georgia.',
      service_summary: 'Outdoor lawn and perimeter pest control programs for Metro Atlanta properties.',
      what_is_included:
        '<p>Pest control applications matched to the pest and season. Our lawn pest category includes specialized programs for mosquitoes, fleas and ticks, fire ants, and grubs — each with its own visit schedule and treatment logic.</p>',
      who_is_it_for:
        '<p>Families who cannot use the yard because of mosquitoes, pets picking up fleas and ticks, fire ant mounds, or turf damaged by grubs and other lawn insects.</p>',
      service_process: [
        { step_title: 'Identify the pest pressure', step_text: 'We confirm whether the issue is mosquitoes, ants, grubs, or another lawn insect before treating.' },
        { step_title: 'Apply the correct program schedule', step_text: 'Each pest type has a coded visit count and seasonal window — not a one-size-fits-all spray.' },
        { step_title: 'Provide re-entry and prevention guidance', step_text: 'Clear instructions after each visit plus tips to reduce reinfestation.' },
      ],
      key_benefits: [
        { benefit_title: 'Pest-specific programs', benefit_text: 'Mosquito, flea and tick, fire ant, and grub control each follow dedicated schedules.' },
        { benefit_title: 'Seasonal timing', benefit_text: 'Treatments align to when pests are active in Metro Atlanta — typically April through October for many programs.' },
        { benefit_title: 'Family and pet awareness', benefit_text: 'We follow label directions and communicate re-entry guidance.' },
      ],
      service_faqs: [
        { question: 'Do you treat for all lawn pests with one visit?', answer: 'No — pest type determines product and schedule. We match the program to the pest.' },
        { question: 'Are treatments safe for pets?', answer: 'We apply according to label requirements and provide re-entry guidance after each service.' },
      ],
      seo_title_override: 'Lawn Pest Control Atlanta GA | Pride In Turf',
      meta_description_override: 'Lawn pest control in Metro Atlanta — mosquitoes, fleas, ticks, fire ants, grubs, and more. Request a quote from Pride In Turf.',
      primary_keyword: 'lawn pest control Atlanta',
      secondary_keywords: 'outdoor pest control lawn\nyard pest treatment Metro Atlanta',
    }),

    'mosquito-control': pack({
      service_code: 'MO',
      public_service_name: 'Mosquito Control',
      internal_service_type: 'child_service',
      service_category: 'lawn_pest_control',
      grass_type_applicability: ['bermuda', 'zoysia', 'fescue', 'mixed'],
      seasonal_relevance: ['spring', 'summer', 'fall'],
      hero_title_override: 'Mosquito Control Program (7 Applications)',
      hero_intro: 'Seven applications April through October so you can actually use your Atlanta yard during mosquito season.',
      service_summary: 'Seven visit-per-year mosquito control for Metro Atlanta — April through October.',
      what_is_included: '<p>Seven scheduled barrier treatments during peak mosquito season. Targets resting and breeding zones on the property to reduce biting pressure through the warm months.</p>',
      who_is_it_for: '<p>Homeowners who avoid patios, play areas, and backyards from late spring through fall because of mosquitoes.</p>',
      service_process: [
        { step_title: 'Survey property for treatment zones', step_text: 'We identify perimeter, shaded, and moisture-holding areas where mosquitoes rest.' },
        { step_title: 'Apply seven-visit seasonal schedule', step_text: 'Treatments run April through October aligned to local activity.' },
        { step_title: 'Recommend source reduction', step_text: 'Simple steps — standing water, vegetation management — support longer relief.' },
      ],
      key_benefits: [
        { benefit_title: 'Full-season coverage', benefit_text: 'Seven visits span the entire Metro Atlanta mosquito season.' },
        { benefit_title: 'Barrier-focused approach', benefit_text: 'Treatments target where mosquitoes contact your usable outdoor space.' },
      ],
      service_faqs: [
        { question: 'How many mosquito treatments per year?', answer: 'Our coded mosquito program includes seven applications from April through October.' },
        { question: 'Will this eliminate every mosquito?', answer: 'No program can guarantee zero mosquitoes outdoors, but consistent barrier treatments significantly reduce biting pressure on treated properties.' },
      ],
      seo_title_override: 'Mosquito Control Atlanta | 7-Visit Program',
      meta_description_override: '7-application mosquito control for Metro Atlanta yards. April–October barrier treatments from Pride In Turf.',
      primary_keyword: 'mosquito control Atlanta lawn',
      secondary_keywords: 'yard mosquito treatment\nmosquito spray program Georgia',
    }),

    'flea-and-tick-control': pack({
      service_code: 'FT',
      public_service_name: 'Flea and Tick Control',
      internal_service_type: 'child_service',
      service_category: 'lawn_pest_control',
      grass_type_applicability: ['bermuda', 'zoysia', 'fescue', 'mixed'],
      seasonal_relevance: ['spring', 'summer'],
      hero_title_override: 'Flea and Tick Control (5 Applications)',
      hero_intro: 'Five applications April through August to reduce fleas and ticks in lawn and landscape areas your pets use.',
      service_summary: 'Five visit-per-year flea and tick control for Metro Atlanta lawns — April through August.',
      what_is_included: '<p>Five outdoor treatments targeting flea and tick habitat in turf and border areas during peak activity months.</p>',
      who_is_it_for: '<p>Pet owners dealing with fleas and ticks in the yard — especially properties bordering woods or heavy vegetation.</p>',
      service_process: [
        { step_title: 'Identify pet use zones and habitat', step_text: 'We focus on areas pets travel and where ticks and fleas harbor.' },
        { step_title: 'Apply five-visit schedule', step_text: 'April through August treatments match peak outdoor pest activity.' },
        { step_title: 'Coordinate with pet care', step_text: 'We share re-entry timing so pets return safely after treatment.' },
      ],
      key_benefits: [
        { benefit_title: 'Outdoor habitat focus', benefit_text: 'Treats the yard — where reinfestation often starts — not just indoor spaces.' },
        { benefit_title: 'Pet-conscious scheduling', benefit_text: 'Re-entry guidance included after every visit.' },
      ],
      service_faqs: [
        { question: 'Does lawn treatment replace pet medication?', answer: 'Outdoor control supports overall management but does not replace veterinarian-recommended pet preventatives.' },
      ],
      seo_title_override: 'Flea and Tick Lawn Treatment Atlanta',
      meta_description_override: '5-application flea and tick control for Metro Atlanta lawns. April–August outdoor treatments from Pride In Turf.',
      primary_keyword: 'flea and tick lawn treatment Atlanta',
      secondary_keywords: 'tick control yard Atlanta\noutdoor flea treatment Georgia',
    }),

    'fire-ant-control': pack({
      service_code: 'FAC',
      public_service_name: 'Fire Ant Control',
      internal_service_type: 'child_service',
      service_category: 'lawn_pest_control',
      grass_type_applicability: ['bermuda', 'zoysia', 'fescue', 'mixed'],
      seasonal_relevance: ['spring', 'summer', 'fall'],
      hero_title_override: 'Fire Ant Control for Metro Atlanta Lawns',
      hero_intro: 'Stop fire ant mounds from taking over your yard — targeted control for Atlanta-area lawns and play areas.',
      service_summary: 'Fire ant treatment for residential lawns across Metro Atlanta.',
      what_is_included: '<p>Fire ant control applications targeting active mounds and broadcast prevention where appropriate. Service scope confirmed during quote based on infestation level and property size.</p>',
      who_is_it_for: '<p>Families with children and pets who cannot walk the lawn without hitting fire ant mounds — a common north Georgia problem.</p>',
      service_process: [
        { step_title: 'Map mound activity', step_text: 'We locate active mounds and assess spread across the property.' },
        { step_title: 'Apply targeted fire ant control', step_text: 'Treatment method matches infestation level and label requirements.' },
        { step_title: 'Advise on follow-up', step_text: 'Fire ants reinfest from neighboring areas — we explain realistic expectations and re-treatment timing.' },
      ],
      key_benefits: [
        { benefit_title: 'Safer play areas', benefit_text: 'Reduce mound density where kids and pets spend time.' },
        { benefit_title: 'Local experience', benefit_text: 'Fire ants are persistent in Georgia — we know the reinfestation pattern.' },
      ],
      service_faqs: [
        { question: 'Will one treatment eliminate fire ants forever?', answer: 'Fire ants can return from surrounding properties. We set expectations and recommend follow-up if mounds reappear.' },
      ],
      seo_title_override: 'Fire Ant Control Atlanta | Lawn Treatment',
      meta_description_override: 'Fire ant control for Metro Atlanta lawns and yards. Target mounds and protect play areas with Pride In Turf.',
      primary_keyword: 'fire ant control Atlanta lawn',
      secondary_keywords: 'fire ant treatment yard Georgia\nfire ant mound control',
    }),

    'grub-control': pack({
      service_code: 'GRP',
      public_service_name: 'Grub Control',
      internal_service_type: 'child_service',
      service_category: 'lawn_pest_control',
      grass_type_applicability: ['bermuda', 'zoysia', 'fescue'],
      seasonal_relevance: ['spring', 'summer'],
      hero_title_override: 'Grub Control Preventative Treatment',
      hero_intro: 'Preventive May application to stop grub damage before turf pulls up like carpet — common on Atlanta Bermuda lawns.',
      service_summary: 'Preventative grub control application — typically scheduled in May for Metro Atlanta.',
      what_is_included: '<p>Preventative grub control application timed for larval development windows. Curative options may apply if damage is already present — we diagnose before treating.</p>',
      who_is_it_for: '<p>Homeowners with history of grub damage, skunk or raccoon digging, or turf that lifts in handfuls during summer.</p>',
      service_process: [
        { step_title: 'Determine preventive vs. curative need', step_text: 'We look for damage signs and timing relative to grub life cycle.' },
        { step_title: 'Apply May preventative when appropriate', step_text: 'Preventive timing targets grubs before peak feeding damage.' },
        { step_title: 'Monitor summer turf integrity', step_text: 'Follow-up guidance if animals dig or turf loosens after treatment.' },
      ],
      key_benefits: [
        { benefit_title: 'Prevention before visible damage', benefit_text: 'May timing stops many infestations before turf detaches.' },
        { benefit_title: 'Protects root zone', benefit_text: 'Healthy roots stay anchored — fewer bare patches and animal digging.' },
      ],
      service_faqs: [
        { question: 'When is the best time for grub prevention in Atlanta?', answer: 'Our coded preventative program targets May application for north Georgia lawns.' },
        { question: 'What if damage is already happening?', answer: 'Curative treatment may be needed. We inspect and recommend the correct approach.' },
      ],
      seo_title_override: 'Grub Control Atlanta | Preventative Lawn Treatment',
      meta_description_override: 'Preventative grub control for Metro Atlanta lawns. Stop turf damage before it spreads. Request a quote from Pride In Turf.',
      primary_keyword: 'grub control Atlanta',
      secondary_keywords: 'grub prevention lawn Georgia\nwhite grub treatment Atlanta',
    }),

    'tree-and-shrub-program': pack({
      service_code: 'TSP',
      public_service_name: 'Tree and Shrub Program',
      internal_service_type: 'core_service',
      service_category: 'tree_and_shrub_program',
      grass_type_applicability: ['mixed'],
      seasonal_relevance: ['spring', 'summer', 'fall', 'year_round'],
      hero_title_override: 'Tree and Shrub Care Program (8 Applications)',
      hero_intro:
        'Eight applications per year for ornamental trees and shrubs under 15 feet — fertilization, insect, and disease management for Metro Atlanta landscapes.',
      service_summary: 'Eight visit-per-year tree and shrub program for ornamentals under 15 feet.',
      what_is_included:
        '<p>Eight scheduled treatments throughout the year for qualifying ornamental trees and shrubs. Program focuses on health, insect pressure, and seasonal nutrition for landscape plants integrated with your lawn care relationship.</p>',
      who_is_it_for:
        '<p>Homeowners who want foundation plantings, ornamental trees, and shrubs to look as intentional as the turf — without juggling a separate provider.</p>',
      service_process: [
        { step_title: 'Inventory landscape plants', step_text: 'We identify species, size, and current stress factors on site.' },
        { step_title: 'Apply eight-visit annual schedule', step_text: 'Treatments rotate through seasonal needs — nutrition, insect, and disease windows.' },
        { step_title: 'Flag issues outside program scope', step_text: 'Large trees or specialized arbor work are referred appropriately — we stay transparent about limits.' },
      ],
      key_benefits: [
        { benefit_title: 'Whole-property consistency', benefit_text: 'One provider for turf and qualifying ornamentals.' },
        { benefit_title: 'Year-round attention', benefit_text: 'Eight visits catch seasonal issues before they defoliate entire plantings.' },
        { benefit_title: 'Under-15-foot focus', benefit_text: 'Program scope matches our equipment and expertise — no overpromising on large tree work.' },
      ],
      service_faqs: [
        { question: 'Do you treat large mature trees?', answer: 'This program covers ornamentals under 15 feet. Larger or specialized tree work may require a different provider or service.' },
        { question: 'Is tree and shrub care included in lawn programs?', answer: 'It is a separate coded program that can run alongside your lawn care plan.' },
      ],
      seo_title_override: 'Tree and Shrub Program Atlanta | 8 Visits',
      meta_description_override: '8-application tree and shrub care for Metro Atlanta landscapes. Ornamentals under 15 feet. Request a quote from Pride In Turf.',
      primary_keyword: 'tree and shrub program Atlanta',
      secondary_keywords: 'ornamental tree care Atlanta\nshrub fertilization program Georgia',
    }),

    'soil-testing': pack({
      service_code: 'ST',
      public_service_name: 'Soil Testing',
      internal_service_type: 'core_service',
      service_category: 'soil_testing',
      grass_type_applicability: ['bermuda', 'zoysia', 'fescue', 'mixed'],
      seasonal_relevance: ['spring', 'fall', 'year_round'],
      hero_title_override: 'Soil Testing for Metro Atlanta Lawns',
      hero_intro: 'Stop guessing on lime, phosphorus, and potassium — soil test results drive smarter fertilization and pH decisions.',
      service_summary: 'Professional soil sampling and interpretation for Metro Atlanta lawns.',
      what_is_included:
        '<p>Soil sample collection and coordination with lab analysis. We interpret results and recommend lime, nutrient, and fertility adjustments based on data — not assumptions about Georgia clay.</p>',
      who_is_it_for:
        '<p>Homeowners whose fertilizer does not seem to work, color stays off despite treatments, or lime has never been tested on the property.</p>',
      service_process: [
        { step_title: 'Collect representative samples', step_text: 'Samples follow proper depth and coverage for lawn areas.' },
        { step_title: 'Submit and interpret lab results', step_text: 'We translate pH and nutrient data into actionable recommendations.' },
        { step_title: 'Connect to treatment plan', step_text: 'Findings feed into fertilization and amendment decisions on your lawn program.' },
      ],
      key_benefits: [
        { benefit_title: 'Data-driven fertility', benefit_text: 'Apply what the soil actually needs — skip what it does not.' },
        { benefit_title: 'pH and lime clarity', benefit_text: 'Georgia clay often needs pH correction before nutrients work effectively.' },
        { benefit_title: 'Better program ROI', benefit_text: 'Correct underlying soil issues so weed control and fertilization perform as expected.' },
      ],
      service_faqs: [
        { question: 'How often should I soil test?', answer: 'Every few years is typical, or whenever lawn response to fertilizer suddenly changes.' },
        { question: 'Do you apply lime based on the test?', answer: 'We recommend amendments based on results. Lime and corrective applications can be scheduled separately.' },
      ],
      seo_title_override: 'Lawn Soil Testing Atlanta GA | Pride In Turf',
      meta_description_override: 'Soil testing for Metro Atlanta lawns. pH and nutrient analysis for smarter fertilization. Request a quote from Pride In Turf.',
      primary_keyword: 'lawn soil testing Atlanta',
      secondary_keywords: 'soil test lawn Georgia\npH test turf Atlanta',
    }),

    'bed-pre-emergent': pack({
      service_code: 'BAP',
      public_service_name: 'Bed Pre-Emergent Program',
      internal_service_type: 'core_service',
      service_category: 'bed_pre_emergent',
      grass_type_applicability: ['mixed'],
      seasonal_relevance: ['spring', 'summer', 'fall', 'winter'],
      hero_title_override: 'Bed Pre-Emergent Program (4 Applications)',
      hero_intro: 'Four quarterly applications to keep weeds out of landscape beds — one treatment each quarter across Metro Atlanta.',
      service_summary: 'Four visit-per-year pre-emergent weed control for landscape beds — quarterly schedule.',
      what_is_included: '<p>Quarterly pre-emergent applications in landscape beds to prevent weed germination before it starts. Complements lawn programs by addressing bed areas where different products and timing apply.</p>',
      who_is_it_for: '<p>Homeowners fighting constant bed weeds — nutgrass, annuals, and invasive seedlings — who want cleaner mulch and stone beds without hand-pulling every week.</p>',
      service_process: [
        { step_title: 'Assess bed types and weed history', step_text: 'We note mulch, stone, plant density, and dominant weed issues.' },
        { step_title: 'Apply quarterly pre-emergent', step_text: 'Four visits — one per quarter — maintain prevention through the year.' },
        { step_title: 'Coordinate with lawn treatments', step_text: 'Bed products and timing stay separate from turf applications for safety.' },
      ],
      key_benefits: [
        { benefit_title: 'Quarterly consistency', benefit_text: 'Four applications match seasonal germination cycles in beds.' },
        { benefit_title: 'Cleaner landscape presentation', benefit_text: 'Beds look maintained — important for curb appeal and HOA standards.' },
        { benefit_title: 'Complements turf programs', benefit_text: 'Lawns and beds need different chemistry — we handle both correctly.' },
      ],
      service_faqs: [
        { question: 'Is bed pre-emergent the same as lawn pre-emergent?', answer: 'No — landscape beds require different products and application methods than turf.' },
        { question: 'How many bed treatments per year?', answer: 'Our coded bed pre-emergent program includes four quarterly applications.' },
      ],
      seo_title_override: 'Bed Pre-Emergent Atlanta | Quarterly Weed Control',
      meta_description_override: '4-application landscape bed pre-emergent program for Metro Atlanta. Quarterly weed prevention from Pride In Turf.',
      primary_keyword: 'landscape bed pre-emergent Atlanta',
      secondary_keywords: 'bed weed control quarterly\nmulch bed pre-emergent Georgia',
    }),
  };

  // Slug aliases (WP post_name variations)
  const SLUG_ALIASES = {
    'core-aeration': 'aeration',
    'lawn-aeration': 'aeration',
    'warm-season-lawn-care-8-apps': 'warm-season-lawn-care',
    'cool-season-lawn-care-8-apps': 'cool-season-lawn-care',
    'split-lawn-care-8-apps': 'split-lawn-care',
    'bermuda-fungicide': 'bermuda-fungicide-program',
    'fescue-fungicide': 'fescue-fungicide-program',
    'zoysia-fungicide': 'zoysia-fungicide-program',
    'flea-tick-control': 'flea-and-tick-control',
    'tree-shrub-program': 'tree-and-shrub-program',
    'bed-pre-emergent-program': 'bed-pre-emergent',
  };

  function normalizeSlug(slug) {
    const s = (slug || '').trim().toLowerCase();
    return SLUG_ALIASES[s] || s;
  }

  function getCurrentSlug() {
    const editable = document.querySelector('#editable-post-name');
    if (editable && editable.value) return normalizeSlug(editable.value);
    const m = window.location.href.match(/post=(\d+)/);
    if (m) {
      const sample = document.querySelector('#sample-permalink a');
      if (sample) {
        const parts = sample.href.replace(/\/$/, '').split('/');
        return normalizeSlug(parts[parts.length - 1] || parts[parts.length - 2]);
      }
    }
    const title = document.querySelector('#title');
    if (title && title.value) {
      return normalizeSlug(
        title.value
          .toLowerCase()
          .replace(/[^a-z0-9]+/g, '-')
          .replace(/^-|-$/g, '')
      );
    }
    return null;
  }

  function waitForAcf(timeoutMs = 15000) {
    return new Promise((resolve, reject) => {
      if (window.acf && typeof window.acf.getFields === 'function') return resolve(window.acf);
      const start = Date.now();
      const t = setInterval(() => {
        if (window.acf && typeof window.acf.getFields === 'function') {
          clearInterval(t);
          resolve(window.acf);
        } else if (Date.now() - start > timeoutMs) {
          clearInterval(t);
          reject(new Error('ACF JS API not found. Open a Lawn Service edit screen and try again.'));
        }
      }, 200);
    });
  }

  function getFieldByName(acf, name) {
    const fields = acf.getFields({ name });
    return fields && fields.length ? fields[0] : null;
  }

  function setSimpleField(acf, name, value) {
    if (value === undefined || value === null) return false;
    const field = getFieldByName(acf, name);
    if (!field) {
      console.warn('[PIT] Missing field:', name);
      return false;
    }
    field.val(value);
    return true;
  }

  function setRepeater(acf, name, rows) {
    if (!Array.isArray(rows) || !rows.length) return;
    const field = getFieldByName(acf, name);
    if (!field) {
      console.warn('[PIT] Missing repeater:', name);
      return;
    }
    // Remove existing rows
    if (typeof field.remove === 'function' && field.$rows) {
      const existing = field.$rows();
      if (existing && existing.length) {
        existing.each(function () {
          field.remove(jQuery(this));
        });
      }
    }
    rows.forEach((row) => {
      if (typeof field.append === 'function') field.append(row);
    });
  }

  function fillFields(data) {
    const filled = [];
    const skipped = [
      'featured_service_image',
      'parent_service_override',
      'related_services',
      'quote_form_shortcode',
    ];

    return waitForAcf().then((acf) => {
      Object.keys(data).forEach((key) => {
        if (skipped.includes(key)) return;
        const val = data[key];
        if (key === 'service_process' || key === 'key_benefits' || key === 'service_faqs') {
          setRepeater(acf, key, val);
          filled.push(key);
        } else if (setSimpleField(acf, key, val)) {
          filled.push(key);
        }
      });

      // Scroll first tab into view so user sees changes
      const first = document.querySelector('.acf-field[data-name="service_code"]');
      if (first) first.scrollIntoView({ behavior: 'smooth', block: 'center' });

      console.log('[PIT] Filled fields:', filled);
      console.log('[PIT] Skipped (manual): featured_service_image, parent_service_override, related_services, quote_form_shortcode');
      console.log('[PIT] Review content, add images/relationships, then click Update.');
      return { filled, data };
    });
  }

  function fillService(slug) {
    const key = normalizeSlug(slug);
    const data = SERVICES[key];
    if (!data) {
      console.error('[PIT] No content pack for slug:', slug, '→ normalized:', key);
      console.log('[PIT] Available:', Object.keys(SERVICES).join(', '));
      return Promise.reject(new Error('Unknown service slug'));
    }
    console.log('[PIT] Filling service:', key);
    return fillFields(data);
  }

  function fillCurrentPage() {
    const slug = getCurrentSlug();
    if (!slug) {
      console.error('[PIT] Could not detect post slug. Use PIT.fillService("aeration") instead.');
      return Promise.reject(new Error('Slug not detected'));
    }
    console.log('[PIT] Detected slug:', slug);
    return fillService(slug);
  }

  function listServices() {
    console.table(
      Object.keys(SERVICES).map((slug) => ({
        slug,
        code: SERVICES[slug].service_code,
        name: SERVICES[slug].public_service_name,
      }))
    );
  }

  window.PIT = {
    fillCurrentPage,
    fillService,
    fillFields,
    listServices,
    SERVICES,
    getCurrentSlug,
  };

  console.log('%cPride In Turf ACF filler loaded.', 'color:#2d6a4f;font-weight:bold');
  console.log('Run PIT.fillCurrentPage() on a Lawn Service edit screen.');
  console.log('Run PIT.listServices() to see all slugs.');
})();
