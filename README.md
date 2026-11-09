# Practical business evidence workflows

Short, hands-on guides to monitoring public sources, comparing authorized snapshots, and reviewing business evidence. The examples link to Actors maintained by this publisher on Apify. Check each Actor's live **Pricing** tab and set a maximum cost before running: event charges may apply even when no results are found. Interactions with datasets after a run can incur standard Apify platform usage charges; consult [Apify's pricing-model guidance](https://docs.apify.com/actors/running/actors-in-store).

[Find a public example by your job and input](#find-the-right-example). Each example links to a guide that explains what to check in the output.

| Your job | Guide |
| --- | --- |
| Monitor UK software procurement or SEC disclosures | [Public-sector and company filings](guides/public-records.md) |
| Track product feeds, job boards or policy pages | [Compare changing sources](guides/change-monitoring.md) |
| Compare two catalog snapshots by SKU | [Product snapshot comparison](guides/product-snapshot-comparison.md) |
| Screen food recalls or investigate company domains | [Supplier and company evidence](guides/supplier-evidence.md) |
| Prioritize review responses, check accessibility, or research RevOps signals | [Operations and triage](guides/operations-triage.md) |

日本語の手順：[宿泊レビューを確認する順番を整理する](guides/review-triage-ja.md)（架空データの入力と結果例）。

## Choose a workflow before running

[Compare all 12 evidence workflows](guides/choose-a-business-evidence-workflow.md) by the decision you need to make, the input you have, and the output you need to review. The guide covers job-board changes, catalog feeds, SKU comparisons, policy pages, RSS, UK tenders, SEC filings, FDA recalls, company domains, hotel reviews, accessibility and RevOps research, including when a spreadsheet, direct source or browser audit may be sufficient.

Read [why a successful monitoring run can still contain incomplete evidence](guides/read-status-and-coverage.md) before turning an empty result or candidate match into an alert. It walks through capped recall queries, missing-job candidates, partial tender scans and catalog completeness using documented owner examples.

For API or AI-client use, follow [the API and MCP walkthrough](guides/use-business-evidence-actors-with-api-and-mcp.md). It lists all 12 Actor IDs and input examples, separates discovery from a potentially charged run, and explains how to retrieve an existing result.

## Use your own data, then repeat

[First useful result and repeat-use checklist for all 12 workflows](guides/first-result-and-repeat-use.md) gives one small input, the output to inspect, the settings to keep, the next review action and a dated event-charge example for each product. For a recurring catalog, start with the [two-observation catalog walkthrough](guides/catalog-two-observations.md); for hiring boards, use the [three-snapshot ATS walkthrough](guides/job-board-snapshots.md). These examples help you test whether the output saves work in your own process.

## Watch a 40-second walkthrough

| Workflow | Captioned animation and input examples |
| --- | --- |
| Compare supplier snapshots | [Catalog: baseline → 3 review changes](guides/catalog-two-observations.md#watch-the-40-second-example) |
| Investigate a missing job | [ATS: baseline → pending → closure candidate](guides/job-board-snapshots.md#watch-the-40-second-example) |

The videos use fictional inputs and offline product checks, not customer results. For an importable manual workflow, try the [n8n review-queue preview](guides/n8n-review-queue.md). It contains no credentials or network calls; the transformation has local checks, while n8n-engine verification is still pending.

## Find the right example

Choose the row that matches the source you already have and the decision you need to make. You can read the worked results below before starting an Actor. When you are ready to run, open the public example, review the live Pricing tab and set a maximum cost.

- **Investigating a static accessibility finding?** [Read a button-name finding and its target](guides/operations-triage.md#accessibility-evidence), then [open the sample HTML task](https://apify.com/logical_resourcefulnes/website-accessibility-regression-evidence/examples/check-accessibility-regression-demo).
- **Reviewing a recall watchlist?** [Read the coverage record from a capped owner test](guides/read-status-and-coverage.md#case-1-a-completed-recall-query-that-was-capped), then [open the bounded recall task](https://apify.com/logical_resourcefulnes/fda-food-recall-supplier-match/examples/screen-recent-fda-food-recalls).
- **Checking a catalog import?** [Inspect the fictional before/after input and comparison](guides/product-snapshot-comparison.md), then [open the SKU comparison task](https://apify.com/logical_resourcefulnes/revenue-pilot/examples/compare-two-product-catalog-snapshots-by-sku).

| Who uses it and when | What to bring and what to review | Open the example |
| --- | --- | --- |
| Recruiting operations · explain a missing job | An authorized Greenhouse, Lever or Ashby board → board health and a reviewable change or missing-job candidate. | [ATS job changes](https://apify.com/logical_resourcefulnes/ats-source-health-job-delta/examples/track-job-board-changes-demo) · [Change monitoring](guides/change-monitoring.md) |
| Feed operations · review a supplier update | A complete authorized CSV or JSON feed/export → price, stock and removal candidates to review before import. | [Catalog changes](https://apify.com/logical_resourcefulnes/authorized-catalog-feed-audit/examples/audit-product-catalog-changes-demo) · [Change monitoring](guides/change-monitoring.md) |
| Supplier operations · review changes to terms | An authorized static HTML page → a text diff for the selected page region. | [Policy changes](https://apify.com/logical_resourcefulnes/authorized-policy-page-change-audit/examples/monitor-policy-page-text-changes) · [Change monitoring](guides/change-monitoring.md) |
| Supplier quality · screen a recall watchlist | Supplier or product terms and a date window → candidate notices with official links and a coverage record. | [FDA recall screening](https://apify.com/logical_resourcefulnes/fda-food-recall-supplier-match/examples/screen-recent-fda-food-recalls) · [Supplier evidence](guides/supplier-evidence.md) |
| Hotel operations · prioritize guest follow-up | An authorized review export → a queue of themes and severity for a person to review. | [Review triage](https://apify.com/logical_resourcefulnes/hospitality-review-triage-queue/examples/prioritize-hotel-review-responses-demo) · [Operations triage](guides/operations-triage.md) |
| Industry research · pass new items into a review queue | An authorized RSS or Atom feed → new or changed feed items for a downstream workflow. | [Competition news](https://apify.com/logical_resourcefulnes/licensed-industry-rss-delta-feed/examples/monitor-competition-news-rss) · [Change monitoring](guides/change-monitoring.md) |
| Catalog imports · reconcile two exports | Two complete JSON arrays with unique string SKUs → added, removed and changed rows in the comparison output. | [SKU comparison example](https://apify.com/logical_resourcefulnes/revenue-pilot/examples/compare-two-product-catalog-snapshots-by-sku) · [Snapshot comparison](guides/product-snapshot-comparison.md) |
| Disclosure research · review selected 8-K items | SEC CIKs and item codes → filing metadata and amendment candidates with source links. | [SEC 8-K disclosures](https://apify.com/logical_resourcefulnes/sec-8k-item-amendment-watch/examples/track-sec-management-change-filings) · [Public records](guides/public-records.md) |
| RevOps agency · research platform-specific hiring signals | Supported public Greenhouse boards → cited Salesforce or HubSpot role evidence to check before qualifying an account. | [Salesforce and HubSpot prospects](https://apify.com/logical_resourcefulnes/revops-opportunity-radar/examples/salesforce-hubspot-prospect-check-10-companies) · [Operations triage](guides/operations-triage.md) |
| Company research · check a possible UK website | Company identifiers → a candidate domain with evidence and verification status. | [UK domain evidence](https://apify.com/logical_resourcefulnes/uk-company-domain-evidence-resolver/examples/check-uk-company-domain-evidence) · [Supplier evidence](guides/supplier-evidence.md) |
| UK IT bid team · catch an amended deadline | Find a Tender scope and a bounded date window → notice changes to confirm against the official record. | [UK software tenders](https://apify.com/logical_resourcefulnes/uk-it-tender-amendment-watch/examples/track-uk-software-tender-deadlines) · [Public records](guides/public-records.md) |
| Web QA · review a static accessibility regression | An authorized static page or HTML sample → a rule and element target for human review. | [Accessibility example](https://apify.com/logical_resourcefulnes/website-accessibility-regression-evidence/examples/check-accessibility-regression-demo) · [Operations triage](guides/operations-triage.md) |

## Move from a preset to your own data

The job-board, catalog, policy-page, hotel-review, RSS, company-domain and accessibility examples start with the rights confirmation unchecked. The built-in preset can run as a demonstration. To use your own data or source, copy the task into your account, verify that you are authorized to process it, then check **I have rights to use this input** in the Actor input before running. Use a separate monitor key when changing to a different source or dataset; retain it for later comparisons. See the individual Actor's README for its input fields and limits.

These tools provide evidence for a human to review. They do not guarantee complete coverage, business outcomes, legal compliance, or ownership. Use only inputs you are authorized to process. Fictional examples are identified as such; historical validation is not presented as customer results.

The [Apify profile](https://apify.com/logical_resourcefulnes) lists all 12 public Actors. Revenue Pilot is configured for general use without individual approval. Open its example tasks and choose Run example to copy the fictional SKU preset. One completed comparison costs USD 0.05; keep the example's USD 0.05 maximum charge. An operator emergency pause remains available.
