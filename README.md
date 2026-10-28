# Practical business evidence workflows

Short, hands-on guides to monitoring public sources, comparing authorized snapshots, and reviewing business evidence. The examples link to Actors maintained by this publisher on Apify. Check each Actor's live **Pricing** tab and set a maximum cost before running: event charges may apply even when no results are found. Interactions with datasets after a run can incur standard Apify platform usage charges; consult [Apify's pricing-model guidance](https://docs.apify.com/actors/running/actors-in-store).

| Your job | Guide |
| --- | --- |
| Monitor UK software procurement or SEC disclosures | [Public-sector and company filings](guides/public-records.md) |
| Track product feeds, job boards or policy pages | [Compare changing sources](guides/change-monitoring.md) |
| Compare two catalog snapshots by SKU | [Product snapshot comparison](guides/product-snapshot-comparison.md) (controlled launch; currently paused) |
| Screen food recalls or investigate company domains | [Supplier and company evidence](guides/supplier-evidence.md) |
| Prioritize review responses, check accessibility, or research RevOps signals | [Operations and triage](guides/operations-triage.md) |

日本語の手順：[宿泊レビューを確認する順番を整理する](guides/review-triage-ja.md)（架空データの入力と結果例）。

## Find the right example

Each example opens a public task with a sample input and output fields. Copy it into your own Apify account, review live pricing and your maximum cost, and check the output diagnostics. A sample is a starting point, not a guarantee of complete coverage.

| Your need | Public example | Practical guide |
| --- | --- | --- |
| Compare job-board snapshots | [ATS job changes](https://apify.com/logical_resourcefulnes/ats-source-health-job-delta/examples/track-job-board-changes-demo) | [Change monitoring](guides/change-monitoring.md) |
| Compare an authorized product feed | [Catalog changes](https://apify.com/logical_resourcefulnes/authorized-catalog-feed-audit/examples/audit-product-catalog-changes-demo) | [Change monitoring](guides/change-monitoring.md) |
| Monitor a policy page | [Policy changes](https://apify.com/logical_resourcefulnes/authorized-policy-page-change-audit/examples/monitor-policy-page-text-changes) | [Change monitoring](guides/change-monitoring.md) |
| Screen recent food recalls | [FDA recall screening](https://apify.com/logical_resourcefulnes/fda-food-recall-supplier-match/examples/screen-recent-fda-food-recalls) | [Supplier evidence](guides/supplier-evidence.md) |
| Prioritize hotel reviews | [Review triage](https://apify.com/logical_resourcefulnes/hospitality-review-triage-queue/examples/prioritize-hotel-review-responses-demo) | [Operations triage](guides/operations-triage.md) |
| Track an RSS feed | [Competition news](https://apify.com/logical_resourcefulnes/licensed-industry-rss-delta-feed/examples/monitor-competition-news-rss) | [Change monitoring](guides/change-monitoring.md) |
| Compare two complete JSON catalogs | [Revenue Pilot](https://apify.com/logical_resourcefulnes/revenue-pilot) — processing paused | [Snapshot comparison](guides/product-snapshot-comparison.md) |
| Monitor SEC filings | [SEC 8-K disclosures](https://apify.com/logical_resourcefulnes/sec-8k-item-amendment-watch/examples/track-sec-management-change-filings) | [Public records](guides/public-records.md) |
| Research RevOps signals | [Salesforce and HubSpot prospects](https://apify.com/logical_resourcefulnes/revops-opportunity-radar/examples/salesforce-hubspot-prospect-check-10-companies) | [Operations triage](guides/operations-triage.md) |
| Investigate a company domain | [UK domain evidence](https://apify.com/logical_resourcefulnes/uk-company-domain-evidence-resolver/examples/check-uk-company-domain-evidence) | [Supplier evidence](guides/supplier-evidence.md) |
| Monitor UK tender deadlines | [UK software tenders](https://apify.com/logical_resourcefulnes/uk-it-tender-amendment-watch/examples/track-uk-software-tender-deadlines) | [Public records](guides/public-records.md) |
| Review static-page accessibility evidence | [Accessibility example](https://apify.com/logical_resourcefulnes/website-accessibility-regression-evidence/examples/check-accessibility-regression-demo) | [Operations triage](guides/operations-triage.md) |

## Move from a preset to your own data

The job-board, catalog, policy-page, hotel-review, RSS, company-domain and accessibility examples start with the rights confirmation unchecked. The built-in preset can run as a demonstration. To use your own data or source, copy the task into your account, verify that you are authorized to process it, then check **I have rights to use this input** in the Actor input before running. Use a separate monitor key when changing to a different source or dataset; retain it for later comparisons. See the individual Actor's README for its input fields and limits.

These tools provide evidence for a human to review. They do not guarantee complete coverage, business outcomes, legal compliance, or ownership. Use only inputs you are authorized to process. Fictional examples are identified as such; historical validation is not presented as customer results.

The [Apify profile](https://apify.com/logical_resourcefulnes) lists all 12 public Actors. Revenue Pilot is in a controlled launch and its processing is paused outside the approved verification window; see its page before attempting a run.

