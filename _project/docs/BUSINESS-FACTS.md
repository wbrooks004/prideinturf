# Business Facts — verified reference

Source: client-supplied `Info - Pride In Turf.docx`, received 2026-08-11.

**The source file is not in this repo and must not be committed.** It contains live server, WordPress,
and email credentials plus personal data. Only the publishable business facts are reproduced here.
See the note at the end.

This is the authority for NAP, hours, approved descriptions, and the service-classification rules
below. Where it disagrees with older planning documents, this wins — except on the branch count,
which the client corrected separately (see `LOCATION-MODEL-CORRECTION.md`).

---

## Identity

| Field | Value |
|---|---|
| Business name | Pride In Turf |
| Alternate names | Pride In Turf Lawn Care · Pride in Turf Lawn Care Service · Pride In Turf Lawn Care Atlanta |
| Founded | January 2005 |
| Primary category | Lawn Care Service |
| Website | `https://prideinturf.com` |
| Main phone | **+1 833-388-8873** |
| Public email | `info@prideinturf.com` |

The phone number matches the `tel:+18333888873` already in the header and footer templates. **No
branch-specific phone numbers were supplied** — all three branches share the main line unless you tell
me otherwise. That affects branch cards and WS Form routing, which currently assume per-branch
contact is possible.

## Branches

| Branch | Address | Lat / Lon | Page ID |
|---|---|---|---|
| Atlanta | 44 Peachtree Pl NE, Suite 821, Atlanta, GA 30309 | 33.7800656 / -84.3881186 | 291 |
| Hoschton | 1900 GA Hwy 211, Hoschton, GA 30548 | 34.09015789127396 / -83.80780113172185 | 292 |
| **Duluth** | **3425 Buford Hwy NE, Duluth, GA 30096** | *not supplied* | 293 |

Duluth has no coordinates and no Google Business Profile CID in the source. Atlanta and Hoschton both
have GBP CIDs and Atlanta has a map embed. For Duluth we need lat/lon and a GBP URL before its
`LocalBusiness` schema and map are complete — the address alone is enough to render the NAP block and
the branch card.

**Hours (all locations, as supplied):** Monday–Saturday 07:00–18:00, Sunday closed.

Confirm this applies to all three branches. It's presented as a single business-wide schedule.

## Google Business Profiles

| Branch | CID |
|---|---|
| Atlanta | `17790314768886833860` |
| Hoschton | `6724504681133380339` (a second CID, `7637767109512430396`, also appears — resolve which is current) |
| Duluth | none supplied |

## Social profiles

For `Business Info → social_links`:

| Platform | URL |
|---|---|
| Facebook | `https://www.facebook.com/prideinturf/` |
| Instagram | `https://www.instagram.com/prideinturf/` |
| X | `https://twitter.com/Pride_in_Turf` |
| LinkedIn | `https://www.linkedin.com/company/pride-in-turf/` |
| Pinterest | `https://www.pinterest.ca/pride_in_turf/` |
| YouTube | `https://www.youtube.com/channel/UCY4lzohrl2VzeGUgsCxUASQ` |

Two YouTube channels appear in the source. Confirm which is current before publishing. Personal
Facebook and LinkedIn profiles also appear — those are individual accounts, not company profiles, and
should not go in the footer.

---

## Approved copy

These are client-approved and can be used as written. Using them beats writing new copy, because they
carry no invention risk.

**Footer description** *(already matches `footer-main.json`)*
> Program-based lawn care and turf-focused services for homeowners throughout Northeast Georgia and Metro Atlanta.

**Homepage positioning — "Programs Built for Georgia Lawns"**
> Pride In Turf provides lawn care programs and specialist turf services for homeowners throughout Northeast Georgia and Metro Atlanta. We match treatments to your grass type, the season, and the conditions affecting your property.

**Homepage hero — "Healthier Georgia Lawns Start With the Right Program"**
> Season-timed lawn care programs, aeration, disease protection, pest control, and soil-based recommendations for North Georgia homeowners.

**About the company** — for `company_story_text`:
> Pride In Turf is a locally operated lawn care company founded in 2005. From our service operations in Hoschton and Atlanta, we help homeowners throughout North Georgia care for Bermuda, Zoysia, Fescue, and split-turf lawns.
>
> Our work is centered on recurring lawn care programs and specialist turf treatments rather than mowing or general landscaping. We evaluate the grass type, season, weed pressure, disease risk, insects, soil conditions, and other factors affecting the lawn before recommending the appropriate program or service.
>
> Our goal is to provide homeowners with a clearer plan, properly timed treatments, and realistic guidance about what their lawn needs throughout the year.

Note: this paragraph says "Hoschton and Atlanta" and predates the Duluth confirmation. It needs
Duluth added before publication.

**Branch descriptions** for Atlanta and Hoschton are in the source and can be used verbatim for
`location_short_summary`. **No Duluth description exists** — one needs writing, and it should follow
the same structure: what the branch does, which communities it serves, which services it offers.

---

## Service classification — enforce this

The source is explicit that citation and GBP service lists contain entries that conflict with the
approved model.

**Real services offered:** Lawn Care · Lawn Services · Warm Season · Cool Season · Split Lawn Care ·
Aeration (Spring / Fall) · Tree & Shrub · Weed Control · Fungicide Treatments · Pest Control ·
Soil Testing

**Main services (marketing):** Lawn Fertilization · Weed Control · Core Aeration · Overseeding ·
Lawn Pest Control · Fungicide Treatment · Tree and Shrub

**Must not be marketed as offerings:**

> Irrigation installation · irrigation repair · landscape design · lawn mowing and maintenance ·
> grass cutting · sod installation · hydroseeding · yard cleanup · yard work · pulling weeds ·
> new lawn installation · **putting greens** · general lawn maintenance plans · broad "one-time services"

Two consequences for work already in flight:

1. **Image PIT-01** in `MEDIA-INVENTORY.md` shows a backyard putting green. "Putting greens" is on the
   removal list, which confirms the caution already recorded there — that image may be used for
   premium positioning but no copy near it may imply installation or maintenance of putting greens.
2. The **truck wrap in PIT-08** lists lawn fertilization, weed control, core aeration, overseeding,
   tree and shrub care, and mosquito and pest control. All six are on the approved list. That image is
   safe to publish on service grounds.

## Areas served

**Primary — Northeast Georgia (lead with this):** Hoschton · Braselton · Winder · Auburn · Dacula ·
Buford · Gainesville · Cumming · Suwanee · Lawrenceville · Johns Creek · Peachtree Corners

**Secondary — Metro Atlanta:** Atlanta · Sandy Springs · Dunwoody · Roswell · Alpharetta · Marietta ·
Smyrna · Kennesaw · Woodstock · Canton · Vinings · Fulton County · Cobb County

The source flags that these "should be confirmed against actual technician routes before being added
to GBP service areas or public coverage claims." Treat the lists as provisional until routes confirm
them.

A city on these lists is a **service area**, not a branch. Only Atlanta, Hoschton, and Duluth get
branch language, branch schema, and standalone NAP treatment.

---

## Note on the source document

`Info - Pride In Turf.docx` contains, in plain text:

- Cloudways staging and production server IPs, master usernames, and passwords
- WordPress admin credentials for `prideinturf.com` and a second site
- A shared team login
- Email account credentials, including a citation-services mailbox
- An individual's full name and date of birth

**None of it is in this repo, and none of it should be.** `.gitignore` would not have caught a `.docx`
placed in `_project/` — the exclusion here is deliberate, not automatic.

**Recommendation: rotate those credentials.** They have been distributed in a document that has now
moved through at least email, cloud storage, and this session. Rotating the Cloudways master passwords
and the two WordPress admin accounts is the high-value action; the rest can follow. Going forward,
keep credentials in a password manager and keep this document to business facts only — the two kinds
of information have completely different distribution rules, and splitting the file is what makes it
safe to share.
