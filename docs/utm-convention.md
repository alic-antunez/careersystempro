# UTM Convention

How CareerSystemPro tags links that bring people **to** `https://careersystempro.com/` so Google Analytics 4 (GA4) can attribute traffic consistently.

Only four parameters are used: `utm_source`, `utm_medium`, `utm_campaign` and `utm_content`. `utm_term` is intentionally not used yet; add it to this document when paid campaigns need keyword or audience identification.

## Parameters

| Parameter | Answers | Example |
| --- | --- | --- |
| `utm_source` | Which platform or origin sent the visitor? | `linkedin` |
| `utm_medium` | Which marketing channel type is it? | `organic_social` |
| `utm_campaign` | Which campaign does the link belong to? | `career_audit_launch` |
| `utm_content` | Which post, creative, ad or CTA was clicked? | `linkedin_post_01` |

All four are required on every tagged link. Complete example:

```
https://careersystempro.com/?utm_source=linkedin&utm_medium=organic_social&utm_campaign=career_audit_launch&utm_content=linkedin_post_01
```

## Naming rules

1. **Lowercase only.** GA4 treats `LinkedIn` and `linkedin` as different values.
2. **Underscores (`_`) between words.** No spaces, hyphens, accents or special characters. Allowed characters: `a-z`, `0-9`, `_`.
3. **One name per channel.** No synonyms (`linkedin`, never `li` or `linked_in`; `email`, never `e_mail` or `mail`).
4. **No personal or sensitive data** in any value (no names, emails, phone numbers, user IDs). URLs end up in analytics, browser history and third-party logs.
5. **Never tag internal links** between pages of the site (footer, legal pages, in-page anchors). A UTM on an internal link starts a new session and overwrites the real source of the visit.
6. **One `utm_campaign` per campaign**, reused on every channel that belongs to it. Differences between channels go in `utm_source`, `utm_medium` and `utm_content`.
7. **New values are added here first.** If a source or medium you need is not listed below, add it to this document (and keep rules 1-3) before using it.
8. Use the production domain only (`https://careersystempro.com/`). Do not tag `localhost`, preview deployments or the Hotmart checkout links.

## `utm_source` values

| Value | Use when the link is published on |
| --- | --- |
| `linkedin` | LinkedIn (posts, articles, comments, DMs, profile, ads) |
| `facebook` | Facebook (pages, groups, posts, ads) |
| `instagram` | Instagram (bio link, stories, reels, posts, ads) |
| `youtube` | YouTube (video descriptions, pinned comments, community posts) |
| `google` | Google paid search or Google Ads placements |
| `newsletter` | An email newsletter or email sequence you send |
| `whatsapp` | WhatsApp messages, groups or broadcast lists |

## `utm_medium` values

| Value | Use when | Typical source |
| --- | --- | --- |
| `organic_social` | Unpaid post, story, bio link or comment on a social network | `linkedin`, `facebook`, `instagram` |
| `paid_social` | Paid ad on a social network | `linkedin`, `facebook`, `instagram` |
| `organic_video` | Unpaid link in a video platform (description, pinned comment, community post) | `youtube` |
| `cpc` | Paid search or pay-per-click ad | `google` |
| `email` | Email you send (newsletter, sequence) | `newsletter` |
| `messaging` | Direct or group message in a chat app | `whatsapp` |
| `referral` | A link placed on a third-party site that is not one of the above (partner, blog, directory) | the sources above only if applicable; otherwise add a new source first (rule 7) |

Recommended source / medium pairs:

| Situation | `utm_source` | `utm_medium` |
| --- | --- | --- |
| LinkedIn post or comment | `linkedin` | `organic_social` |
| LinkedIn ad | `linkedin` | `paid_social` |
| Facebook / Instagram post, story or bio | `facebook` / `instagram` | `organic_social` |
| Facebook / Instagram ad | `facebook` / `instagram` | `paid_social` |
| YouTube video description or pinned comment | `youtube` | `organic_video` |
| Google paid search ad | `google` | `cpc` |
| Newsletter | `newsletter` | `email` |
| WhatsApp message or group | `whatsapp` | `messaging` |

Organic search traffic is never tagged; GA4 detects it automatically. If Google Ads auto-tagging is enabled, check in GA4 how it interacts with manual UTMs before tagging Google Ads links by hand.

## `utm_campaign`

A short, stable name for the campaign, in `snake_case`: `career_audit_launch`, `black_friday_2026`. Use the same value for every channel in that campaign. Do not rename a campaign mid-flight; GA4 would split it in two.

## `utm_content`

Identifies the specific placement so you can compare posts, creatives or CTAs inside one campaign. Suggested pattern: `<channel>_<format>_<nn>`.

| Example | Meaning |
| --- | --- |
| `linkedin_post_01` | First LinkedIn post of the campaign |
| `linkedin_comment_02` | Second LinkedIn comment |
| `instagram_bio` | Instagram bio link |
| `youtube_description_01` | Link in the description of the first video |
| `newsletter_cta_top` | Top CTA of a newsletter |
| `whatsapp_group_01` | First WhatsApp group |

Keep a running list of the `utm_content` values used in each campaign so numbers are never reused.

## Ready-to-use examples

```
https://careersystempro.com/?utm_source=linkedin&utm_medium=organic_social&utm_campaign=career_audit_launch&utm_content=linkedin_post_01
https://careersystempro.com/?utm_source=linkedin&utm_medium=paid_social&utm_campaign=career_audit_launch&utm_content=linkedin_ad_01
https://careersystempro.com/?utm_source=instagram&utm_medium=organic_social&utm_campaign=career_audit_launch&utm_content=instagram_bio
https://careersystempro.com/?utm_source=youtube&utm_medium=organic_video&utm_campaign=career_audit_launch&utm_content=youtube_description_01
https://careersystempro.com/?utm_source=google&utm_medium=cpc&utm_campaign=career_audit_launch&utm_content=google_search_ad_01
https://careersystempro.com/?utm_source=newsletter&utm_medium=email&utm_campaign=career_audit_launch&utm_content=newsletter_cta_top
https://careersystempro.com/?utm_source=whatsapp&utm_medium=messaging&utm_campaign=career_audit_launch&utm_content=whatsapp_group_01
```

## Checklist before publishing a link

- [ ] Points to `https://careersystempro.com/` (not an internal link, preview or checkout URL).
- [ ] All four parameters are present.
- [ ] Every value uses only `a-z`, `0-9` and `_`, all lowercase.
- [ ] Source and medium come from the tables above.
- [ ] `utm_campaign` matches the other channels of the same campaign.
- [ ] No personal data in any value.
- [ ] Opened once in a browser: the page loads normally.

## How the site handles UTM parameters

- The site reads nothing from the query string itself. GA4's page view sends the full page URL, and GA4 extracts the `utm_*` parameters from it.
- **Consent applies.** GA4 only loads after the visitor accepts analytics in the cookie banner. A visitor who rejects, or has not chosen yet, is not recorded, so their UTMs are not recorded either. Analytics numbers will therefore be lower than real clicks on the platforms.
- Clicks on the purchase buttons are recorded as `purchase_cta_click` (intent to buy, not a sale). The checkout links go to Hotmart and carry no UTM parameters, so Hotmart sales are not attributed to a campaign by this convention.

## Verifying in GA4 (manual)

Looking at a URL that contains UTM parameters does **not** prove the session was attributed correctly. Confirm it in GA4:

1. Open the tagged link in a fresh browser window (private window, ad blockers off) and click **Accept All** in the cookie banner. UTMs are only collected after consent.
2. In GA4 go to **Admin → DebugView** (the browser needs debug mode, for example the Google Analytics Debugger extension) or **Reports → Realtime**.
3. Check that the `page_view` event shows a `page_location` containing the `utm_*` parameters.
4. In Realtime, check the traffic card (source / medium / campaign) shows the expected values, for example `linkedin / organic_social` and your campaign.
5. After 24-48 hours, confirm under **Reports → Acquisition → Traffic acquisition**, using the dimensions *Session source / medium* and *Session campaign*, that sessions appear with the expected values. Realtime and DebugView do not guarantee final processed attribution.
6. Navigate between pages of the site and confirm the session source/medium does not change.
7. Reload the page after clicking **Reject Non-Essential** and confirm no events arrive.

If values appear as `(not set)`, `(direct) / (none)` or in the wrong channel group, check for typos, uppercase letters, missing parameters, and whether a redirect between the link and the site strips the query string.
