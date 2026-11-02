# Choose a business evidence workflow

Start with the decision you need to make: which job disappeared, which SKU changed, which notice needs review, or which customer issue needs a response. Choose a workflow with an output you can inspect and a source you are authorized to use.

**Publisher disclosure:** the Apify Actors linked here are maintained by this repository's publisher and can incur charges. This is a practical selection guide, not an independent ranking. Alternatives below describe other ways to do the work; no performance benchmark or customer outcome is claimed. Check the live Pricing tab and set a maximum run cost before starting.

## Find your workflow

| Work you need to do | Workflow | Start with |
| --- | --- | --- |
| Review changes on a hiring board | [Job board snapshots](#job-board-snapshots) | An authorized Greenhouse, Lever or Ashby board |
| Compare a recurring product feed | [Catalog feed monitoring](#catalog-feed-monitoring) | An authorized JSON or CSV export |
| Compare two complete JSON catalogs once | [SKU snapshot comparison](#sku-snapshot-comparison) | Earlier and later JSON arrays |
| Review changes to a policy page | [Policy page text](#policy-page-text) | An authorized static HTML page |
| Track new RSS or Atom items | [RSS and Atom evidence](#rss-and-atom-evidence) | A feed you have rights to process |
| Review software tender amendments | [UK tender deadlines](#uk-tender-deadlines) | Find a Tender notices |
| Review management-change filing metadata | [SEC 8-K filings](#sec-8-k-filings) | SEC CIKs and item codes |
| Screen a supplier recall watchlist | [FDA food recall screening](#fda-food-recall-screening) | Supplier or product terms |
| Investigate candidate company websites | [UK company domain evidence](#uk-company-domain-evidence) | Company identifiers |
| Prioritize hotel review responses | [Hospitality review triage](#hospitality-review-triage) | An authorized review export |
| Compare static accessibility findings | [Accessibility regression evidence](#accessibility-regression-evidence) | An authorized page or HTML input |
| Research Salesforce or HubSpot role signals | [RevOps account research](#revops-account-research) | Public Greenhouse boards |

## Job board snapshots

**For:** recruitment operations, talent intelligence and analysts checking authorized hiring boards. You might search for “Greenhouse job changes” or “Lever missing job detection.”

A current-job scraper can collect today's list. **ATS Source Health & Job Delta Feed** adds source-health records and comparison states, useful when you need to distinguish a missing posting from a failed collection. Keep one monitor key per board workflow. The first complete observation is a baseline; missing jobs require later complete observations before becoming closure candidates.

A spreadsheet join may be sufficient for a one-off comparison. Choose the Actor when its documented board formats, repeat comparisons and health evidence fit your workflow.

[Open Actor and live pricing](https://apify.com/logical_resourcefulnes/ats-source-health-job-delta) · [Copy the fictional job-board example](https://apify.com/logical_resourcefulnes/ats-source-health-job-delta/examples/track-job-board-changes-demo) · [Follow three fictional snapshots](job-board-snapshots.md)

**Check first:** board health, completeness and the original posting. A closure candidate is not proof that hiring stopped.

## Catalog feed monitoring

**For:** ecommerce operations and feed managers reviewing recurring authorized product exports. Useful searches include “product feed changes by SKU” and “catalog price stock delta.”

**Authorized Catalog Feed Change Audit** compares observations of a JSON or CSV feed or export. Preserve SKU identifiers as strings, including leading zeros, and use a stable monitor key. Its feed workflow differs from Revenue Pilot, which takes two complete JSON arrays together.

A spreadsheet lookup is often enough for a small manual review. Choose this workflow when you want repeated feed observations with documented completeness checks. It does not establish why a price or stock value changed.

[Open Actor and live pricing](https://apify.com/logical_resourcefulnes/authorized-catalog-feed-audit) · [Copy the fictional feed example](https://apify.com/logical_resourcefulnes/authorized-catalog-feed-audit/examples/audit-product-catalog-changes-demo) · [Read feed preparation steps](change-monitoring.md#product-catalogs)

**Check first:** snapshot completeness and removal diagnostics. Do not put credentials or secret query parameters in feed URLs.

## SKU snapshot comparison

**For:** catalog-import reviewers who already have two complete JSON exports. Search terms include “compare JSON catalogs by SKU” and “added removed changed products.”

**Product Catalog Diff by SKU | Revenue Pilot** returns added, removed and field-level changed products. The dataset holds a summary row; the run's key-value store `OUTPUT` holds the full comparison. It accepts up to 10,000 rows per snapshot, 5 MiB input JSON and 16 MiB result JSON. CSV, Excel and URLs are not accepted directly.

A spreadsheet join or a local script may suit an occasional small diff. This Actor supplies a hosted comparison with explicit completion and empty-snapshot handling; it neither collects product pages nor changes your catalog.

[Open Actor and live pricing](https://apify.com/logical_resourcefulnes/revenue-pilot) · [Copy the fictional SKU example](https://apify.com/logical_resourcefulnes/revenue-pilot/examples/compare-two-product-catalog-snapshots-by-sku) · [Prepare input and retrieve results](product-snapshot-comparison.md)

**Check first:** unique string keys and complete exports. One completed comparison is USD 0.05 at the price checked on 2 November 2026, including no-change comparisons; later storage or exports can incur platform usage. Check current pricing before running.

## Policy page text

**For:** operations teams reviewing terms, policy or supplier-page text that they are authorized to monitor. Searches may include “static policy page text changes” or “terms page comparison.”

**Authorized Policy Page Change Audit** compares selected static HTML text. A visual page monitor may be a better fit for layout changes or JavaScript-rendered content. This workflow is for text evidence and source review; it does not render JavaScript or access signed-in pages.

Choose a stable page ID and monitor key. If you change the source or comparison settings, start a new key. Review the selected region so irrelevant navigation does not dominate the comparison.

[Open Actor and live pricing](https://apify.com/logical_resourcefulnes/authorized-policy-page-change-audit) · [Open the GOV.UK terms example](https://apify.com/logical_resourcefulnes/authorized-policy-page-change-audit/examples/monitor-policy-page-text-changes) · [Read page-selection and hold guidance](change-monitoring.md#policy-pages)

**Check first:** the source page, `OUTPUT` and diagnostics. An incomplete or unexpectedly reduced page may hold the comparison; a held result does not mean unchanged text.

## RSS and Atom evidence

**For:** industry analysts and research teams following feeds they have rights to process. Searches include “RSS evidence delta feed” and “industry news feed changes.”

**Licensed Industry RSS Evidence Delta Feed** reads feed titles and summaries rather than article full text. A feed reader can be enough for personal reading; this workflow fits structured feed evidence and repeat observations with a stable monitor key.

Start with the existing competition-news preset to inspect the input and output. When moving to another feed, verify its terms and use a separate monitor key rather than mixing unrelated sources. Inspect the feed and run diagnostics before treating no new rows as no new news.

[Open Actor and live pricing](https://apify.com/logical_resourcefulnes/licensed-industry-rss-delta-feed) · [Open the competition-news example](https://apify.com/logical_resourcefulnes/licensed-industry-rss-delta-feed/examples/monitor-competition-news-rss) · [Read feed guidance](change-monitoring.md#rss-and-atom)

**Check first:** permission, source freshness and the actual feed contents. The product name does not grant a license to any feed.

## UK tender deadlines

**For:** bid teams and procurement researchers checking software tenders. Searches include “UK IT tender deadline changes” and “Find a Tender amendments.”

You can inspect Find a Tender directly or build a custom API workflow. **UK IT Tender Amendment & Deadline Watch** groups related releases by OCID and provides deadline, status, source and coverage evidence for review.

The public preset uses software CPV prefix `48`, a 14-day window, at most three API pages and ten results. That is a bounded starting point, not a scan of the whole UK market. Keep the monitor name stable for later observations.

[Open Actor and live pricing](https://apify.com/logical_resourcefulnes/uk-it-tender-amendment-watch) · [Open the software-tender example](https://apify.com/logical_resourcefulnes/uk-it-tender-amendment-watch/examples/track-uk-software-tender-deadlines) · [Read the coverage walkthrough](public-records.md#uk-software-tender-deadlines)

**Check first:** official notice, previous/current deadline and coverage diagnostics. A run can succeed while its output is partial.

## SEC 8-K filings

**For:** corporate research and investor-relations teams reviewing filing metadata. Searches include “SEC 8-K item 5.02 monitor” and “8-K/A amendment candidates.”

Direct SEC submissions data is an alternative when you want to implement the collection and comparison yourself. **SEC 8-K Item & Amendment Watch** organizes recent submission metadata, company health and amendment candidates for review. It does not search historical archive files or provide an investment conclusion.

The example starts with three companies and item `5.02`. Use verified CIKs, retain a stable monitor name, and open the official filing before acting on a candidate.

[Open Actor and live pricing](https://apify.com/logical_resourcefulnes/sec-8k-item-amendment-watch) · [Open the management-change example](https://apify.com/logical_resourcefulnes/sec-8k-item-amendment-watch/examples/track-sec-management-change-filings) · [Read the filing review steps](public-records.md#sec-management-change-disclosures)

**Check first:** company-health records, dates, item codes and source filing. An amendment candidate is not a verified relationship.

## FDA food recall screening

**For:** supplier-management and food-safety teams assembling evidence for review. Searches include “FDA recall supplier watchlist” and “food enforcement recall matching.”

Manual official-source review or a custom openFDA query may fit a one-off investigation. **FDA Food Recall Supplier Match Feed** adds a supplier/product watchlist and comparison workflow, with query-health evidence that helps explain coverage.

The Actor retrieves a bounded recent set before applying the watchlist. If a record lies outside that set, a matching supplier will not appear. Inspect `scanned`, `totalAvailable`, `complete` and `capped`; a completed query can still be incomplete.

[Open Actor and live pricing](https://apify.com/logical_resourcefulnes/fda-food-recall-supplier-match) · [Open the recent-recall example](https://apify.com/logical_resourcefulnes/fda-food-recall-supplier-match/examples/screen-recent-fda-food-recalls) · [Prepare a fictional watchlist](supplier-evidence.md#reading-a-recall-screening-result)

**Check first:** official recall information and product circumstances. Name matching is screening evidence, not a product-safety determination.

## UK company domain evidence

**For:** account researchers and supplier-review teams investigating candidate company websites. Searches include “UK company website evidence” and “company number domain candidate.”

You can inspect registries and candidate websites manually. **UK Company Domain Evidence Resolver** organizes candidate domains and evidence fields. Its built-in lookup uses community-maintained Wikidata; it is not direct Companies House verification. A supplied registry export is attributed to the customer.

Start with the Tesco PLC preset, then review source, registration match, confidence and verification status. Optional website verification should be enabled only for sites you are authorized to request.

[Open Actor and live pricing](https://apify.com/logical_resourcefulnes/uk-company-domain-evidence-resolver) · [Open the domain-evidence example](https://apify.com/logical_resourcefulnes/uk-company-domain-evidence-resolver/examples/check-uk-company-domain-evidence) · [Read evidence and pricing details](supplier-evidence.md#uk-company-domain-research)

**Check first:** identifiers and independent confirmation. No candidate does not establish that a company has no website; a candidate does not establish ownership.

## Hospitality review triage

**For:** hotel operations and guest-relations teams with an authorized review export. Searches include “hotel review response priority queue” and “hospitality review triage.”

A spreadsheet or a review-management suite may already meet your needs. **Hospitality Review Triage Queue** produces a ranked review queue with themes, severity and source fields. It does not send public replies. Treat keyword matches as review prompts rather than verified incidents.

Use the fictional example to inspect the queue, then minimize personal data before supplying an authorized export. Pattern removal in excerpts is not complete anonymization, and original inputs remain in the run's account storage.

[Open Actor and live pricing](https://apify.com/logical_resourcefulnes/hospitality-review-triage-queue) · [Copy the fictional hotel-review example](https://apify.com/logical_resourcefulnes/hospitality-review-triage-queue/examples/prioritize-hotel-review-responses-demo) · [Read the English guide](operations-triage.md#review-responses) · [日本語の架空入力例](review-triage-ja.md)

**Check first:** source review, priority and a human response decision. A high-priority label is not proof of the allegation.

## Accessibility regression evidence

**For:** developers and QA teams reviewing recurring static-page findings. Searches include “axe-core static accessibility regression” and “accessibility finding comparison.”

A browser accessibility audit or a custom axe-core integration may fit interactive testing. **Website Accessibility Regression Evidence** compares findings on a static DOM, with scripts and external resources disabled. Use it when that scope matches your evidence need; it does not cover dynamic interactions or all CSS-dependent issues.

The fictional flawed-page example shows a baseline finding. Keep the same monitor key for the same page workflow, locate the rule and target, then inspect the actual rendered experience.

[Open Actor and live pricing](https://apify.com/logical_resourcefulnes/website-accessibility-regression-evidence) · [Copy the fictional accessibility example](https://apify.com/logical_resourcefulnes/website-accessibility-regression-evidence/examples/check-accessibility-regression-demo) · [Read the finding example](operations-triage.md#accessibility-evidence)

**Check first:** rule, element and manual review. An automated scan is not WCAG conformance certification.

## RevOps account research

**For:** Salesforce and HubSpot consultancies prioritizing account research. Searches include “Greenhouse Salesforce hiring signals” and “HubSpot RevOps prospect research.”

A job-board scraper provides listings; manual account research provides context. **Salesforce & HubSpot Project Signals | RevOps Radar** organizes role evidence, scores, source links, cautions and qualification questions to help choose which account to investigate.

For your own targets, provide publicly accessible Greenhouse boards and select **Use only my boards**. Plain company domains, LinkedIn profiles and other applicant-tracking systems are not accepted. Location filters refer to job locations.

[Open Actor and live pricing](https://apify.com/logical_resourcefulnes/revops-opportunity-radar) · [Open the ten-company starter example](https://apify.com/logical_resourcefulnes/revops-opportunity-radar/examples/salesforce-hubspot-prospect-check-10-companies) · [Read input and charging guidance](operations-triage.md#revops-account-research)

**Check first:** current posting, source and qualification questions. A role or score is not proof of demand, budget or permission to send unsolicited messages. Successful company analyses can be billable even without a matching role.

## A small first evaluation

1. Pick the single workflow whose output matches your decision. Open the live pricing, input limits and public example.
2. Inspect the fictional or bounded preset before replacing it. Confirm input rights, minimize personal data, and set a maximum cost.
3. For stateful workflows, use a new monitor key when switching to your own source and keep it for later comparisons. Revenue Pilot instead takes both snapshots in one input.
4. After running, read output status, source-health and coverage diagnostics as well as the rows. Retrieve an existing result before starting another charged run.
5. Decide whether the evidence is useful for your own review. Baseline rows, capped scans, candidate matches and owner demonstrations do not establish customer outcomes or complete coverage.

The [repository overview](../README.md) links all existing walkthroughs. Each Actor's current README and Pricing tab remain the source for its accepted inputs, limits and charges.

For help interpreting the output, [separate run status, source coverage and business conclusions](read-status-and-coverage.md). The walkthrough explains why a successful process can still yield partial evidence or a candidate for review.
