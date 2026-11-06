# Get a first useful result and repeat it

Use the workflow that matches an existing job, inspect one small result, then decide whether repeating it will save work. The publisher maintains these Actors. Fictional examples and local checks are not customer outcomes.

Start from the [all-product selection guide](choose-a-business-evidence-workflow.md) or the [public examples](../README.md#find-the-right-example). Copy an example into your account, confirm rights for your own input, review the current Pricing tab and set a maximum cost. Reading or exporting existing results can also use platform resources.

The USD examples below use the public event prices checked on **6 November 2026**, one start at the example memory setting and the stated completed units. They are charge illustrations, not quotes for total platform cost, credits, discounts or taxes. Recheck live pricing. Start fees can apply even if a later check is held; zero useful matches need not mean zero charge.

## ATS job board changes

**First input:** One authorized board or the fictional snapshot. Start with the [three-snapshot walkthrough](job-board-snapshots.md).

**Result to check:** Check board_health and job_delta. A baseline establishes state; a first complete absence is closure_pending and a second is closed_candidate.

**Next observation:** Keep monitorKey, board ID and ATS unchanged. Use a new key when switching from the demonstration. Repeat only when a fresh complete board observation is useful.

**Useful outcome:** Review the original posting and record a closure decision with its source URL; do not treat a missing row as proof of closure.

**Illustrative charges in USD:** 0.035 for one completed board check; 0.105 across the three one-board example runs. [Current product and pricing](https://apify.com/logical_resourcefulnes/ats-source-health-job-delta).

## Catalog feed monitoring

**First input:** One complete authorized JSON/CSV export. Use the [downloadable two-observation inputs](catalog-two-observations.md).

**Result to check:** Check catalog_health, changes and diagnostics. A held comparison does not advance the saved baseline.

**Next observation:** Keep monitorKey, feedId and field mapping. Use a new key for a different supplier or scope; repeat after a new complete export.

**Useful outcome:** Create a price/stock/removal review queue and record which differences a person accepted for a later import.

**Illustrative charges in USD:** 0.06 for one completed audit; 0.12 for two observations. [Current product and pricing](https://apify.com/logical_resourcefulnes/authorized-catalog-feed-audit).

## SKU snapshot comparison / Revenue Pilot

**First input:** Two complete JSON arrays with unique string SKUs. Follow [the comparison guide](product-snapshot-comparison.md). CSV, Excel and URLs must not be supplied as arrays.

**Result to check:** Inspect the dataset summary and the existing run's key-value store OUTPUT for field-level changes.

**Next observation:** Supply both before and after arrays for each comparison. There is no recurring-feed baseline to rely on. Compare the next authorized export pair when available.

**Useful outcome:** Reconcile added/removed/changed counts, review unexpected removals, and retain the approved diff alongside the import decision.

**Illustrative charges in USD:** 0.05 per completed comparison, including no-change comparisons; no start fee listed. [Current product and pricing](https://apify.com/logical_resourcefulnes/revenue-pilot).

## Policy page text

**First input:** One authorized static HTML page and a stable selected text region.

**Result to check:** Inspect OUTPUT and diagnostics, then compare the selected text with the actual source. Empty or sharply reduced content can hold comparison.

**Next observation:** Keep monitorKey, page ID and selection settings; use a new key when changing comparison scope. Choose a cadence matching policy review needs.

**Useful outcome:** Route a meaningful text change to the policy owner with source and observation time; a held result goes to collection review.

**Illustrative charges in USD:** 0.035 for one completed page check. [Current product and pricing](https://apify.com/logical_resourcefulnes/authorized-policy-page-change-audit).

## RSS and Atom evidence

**First input:** One feed you have rights to process. Inspect titles/summaries in the existing example; full articles are outside scope.

**Result to check:** Check source health, dates and actual feed contents before accepting no new items.

**Next observation:** Keep the monitor key and feed identity; observe at a cadence appropriate to the feed's update frequency.

**Useful outcome:** Add relevant new item evidence to your reading queue, deduplicating by source identity. The product does not grant a feed license.

**Illustrative charges in USD:** 0.03 for one completed feed check. [Current product and pricing](https://apify.com/logical_resourcefulnes/licensed-industry-rss-delta-feed).

## UK tender deadlines

**First input:** A narrow software CPV and date scope; the example uses CPV 48, 14 days, three pages and ten results.

**Result to check:** Inspect official notice, previous/current deadline, status and coverage. A successful bounded scan is not the entire market.

**Next observation:** Keep monitor name and intended scope stable; review on your bid team's schedule and preserve coverage on every observation.

**Useful outcome:** Update a reviewed bid deadline queue only after checking the official notice. Keep OCID and source links with the decision.

**Illustrative charges in USD:** 0.01 start plus 0.01 per new/updated tender event; ten such events would be 0.11. [Current product and pricing](https://apify.com/logical_resourcefulnes/uk-it-tender-amendment-watch).

## SEC 8-K filings

**First input:** Verified CIKs and an item filter. Begin with one company before expanding the three-company example.

**Result to check:** Inspect company health, filing dates, item codes and original filing. This covers recent submission metadata, not archive search.

**Next observation:** Keep monitor name, CIK list and item scope consistent. Recheck when fresh filings are useful to your research process.

**Useful outcome:** Put relevant metadata and possible amendments in a human review queue; verify the amendment relationship before recording it.

**Illustrative charges in USD:** 0.035 for one completed company check, including a check with no new filing. [Current product and pricing](https://apify.com/logical_resourcefulnes/sec-8k-item-amendment-watch).

## FDA recall screening

**First input:** A narrow supplier/product watchlist and bounded recent-record setting.

**Result to check:** Inspect scanned, totalAvailable, complete and capped. The bounded set is fetched before matching; a match outside the set is missed.

**Next observation:** Keep the watchlist and scope understandable across checks. The official data updates weekly; frequent repeats do not guarantee fresher records.

**Useful outcome:** Open the official recall and verify applicability. Record 'no match within this scanned set' rather than a product-safety conclusion.

**Illustrative charges in USD:** 0.04 for one completed recall check; a capped completed query can still be billable. [Current product and pricing](https://apify.com/logical_resourcefulnes/fda-food-recall-supplier-match).

## UK company domain evidence

**First input:** One company with a verified identifier. Keep optional website verification off unless authorized requests are needed.

**Result to check:** Inspect registration match, candidate source and verification status. Built-in lookup uses Wikidata; it is not direct Companies House verification.

**Next observation:** Reuse the company identity and evidence standard. Repeat for newly added companies or when existing evidence needs refreshing, not every day by default.

**Useful outcome:** Manually confirm a candidate website before adding it to an account or supplier record. No candidate does not mean no website.

**Illustrative charges in USD:** 0.04 for one completed company check, even with zero candidates. [Current product and pricing](https://apify.com/logical_resourcefulnes/uk-company-domain-evidence-resolver).

## Hospitality review triage

**First input:** A small authorized JSON/CSV review export with unnecessary personal data removed. See the [Japanese walkthrough](review-triage-ja.md).

**Result to check:** Inspect theme, severity, source and the original review before assigning priority. Pattern redaction is not complete anonymization.

**Next observation:** Keep the batch's source identifiers and your reviewed queue. Process each new export once and avoid treating already-reviewed items as new work.

**Useful outcome:** Assign each review to an owner and record the response decision. The Actor does not publish replies; original input remains in account storage.

**Illustrative charges in USD:** 0.035 for one completed review batch. [Current product and pricing](https://apify.com/logical_resourcefulnes/hospitality-review-triage-queue).

## Static accessibility regression evidence

**First input:** One authorized page/HTML input and the fictional flawed-page example.

**Result to check:** Inspect rule, target and diagnostics. The static DOM runs with scripts and external resources disabled.

**Next observation:** Keep monitor key and page scope; compare after a relevant page release. Add separate interactive/manual testing for the rendered user experience.

**Useful outcome:** Turn a reproducible rule/element finding into a reviewed defect, then verify the fix. An empty scan is not WCAG conformance.

**Illustrative charges in USD:** 0.10 for one completed check. [Current product and pricing](https://apify.com/logical_resourcefulnes/website-accessibility-regression-evidence).

## RevOps account research

**First input:** One known public Greenhouse board. For your list select Use only my boards; ordinary domains and LinkedIn profiles are not accepted.

**Result to check:** Inspect role evidence, current posting, source links, cautions and qualification questions. Scores are not proof of budget or buying intent.

**Next observation:** Retain a curated target list and review date. Recheck when account research needs refreshing; max 50 companies per input.

**Useful outcome:** Record which account merits further research and why. Do not turn a role match into permission for unsolicited contact.

**Illustrative charges in USD:** 0.02005 for one completed company analysis; 0.20005 for ten, including analyses with no matching role. [Current product and pricing](https://apify.com/logical_resourcefulnes/revops-opportunity-radar).

## Keep a small evaluation record

Keep this record in your own workspace; avoid putting private inputs or financial details into public issues:

| Field | Record |
| --- | --- |
| Workflow and source scope | Product, source identity and authorized input type |
| Observation | Date, run ID, intended baseline and completeness |
| Evidence | Status/diagnostics, relevant output and source link |
| Decision | Review action, owner and unresolved question |
| Effort and cost | Actual review time and observed charge, not a promised saving |
| Next useful check | Trigger or cadence and stable settings to retain |

Continue when a small real-input result is understandable and improves your review process. Compare the next observation with the intended baseline and record the work it helped complete. If setup and review outweigh the benefit, a direct source, spreadsheet or existing system may fit better.

## Resolve a result before repeating a run

| What you see | Next action |
| --- | --- |
| First-run baseline only | Confirm it is the intended source; wait for a later observation before expecting a delta. |
| Incomplete, duplicate, empty or large-removal hold | Fix or verify the input; keep the hold instead of asserting completeness to force output. |
| Completed check with no matches | Read coverage and dates; do not equate it with zero charge or absence across the whole source. |
| Summary but no detailed diff | For Revenue Pilot, inspect the existing run's OUTPUT. Do not start a new comparison just to retrieve it. |
| Unexpected changes after switching input | Check monitor key, source ID and scope. Separate the demonstration from real data. |
| Submission or charge outcome unclear | Inspect the existing run and billing state before retrying. A retry can be a new charged operation. |

For product help, use the Actor's **Issues** entry and include the product, run ID if suitable, expected versus observed status and a minimal non-sensitive example. Do not paste credentials, private exports, guest details or billing information into a public issue. See [status and coverage](read-status-and-coverage.md) for interpretation examples.
