# Use business evidence Actors through API or MCP

Choose the workflow and inspect its inputs before connecting automation. This guide covers twelve Actors for source monitoring, catalog comparison and review queues. An API or AI client is another way to use a workflow, not evidence that its output is complete.

**Publisher disclosure:** I maintain the linked Actors. AI assisted this guide. The examples use placeholders or fictional records; no new Actor run was performed to validate these instructions. This guide does not report customer use, savings or revenue.

## Choose an Actor directly

Start with the [workflow comparison](choose-a-business-evidence-workflow.md) if you are choosing between tools. Use the stable Actor ID below when wiring an API request. Open the product page, then its **API** section for the current API and MCP instructions. The input schema and pricing belong to that specific Actor; do not reuse one Actor's fields or budget for all twelve.

| Workflow | Actor ID | Product and pricing | Public input example |
| --- | --- | --- | --- |
| ATS Source Health & Job Delta Feed | `2K4Y34k9v6oZTJSyr` | [Open Actor](https://apify.com/logical_resourcefulnes/ats-source-health-job-delta) | [Inspect example](https://apify.com/logical_resourcefulnes/ats-source-health-job-delta/examples/track-job-board-changes-demo) |
| Authorized Catalog Feed Change Audit | `iMr1RJJma7A826urc` | [Open Actor](https://apify.com/logical_resourcefulnes/authorized-catalog-feed-audit) | [Inspect example](https://apify.com/logical_resourcefulnes/authorized-catalog-feed-audit/examples/audit-product-catalog-changes-demo) |
| Product Catalog Diff by SKU / Revenue Pilot | `jfvLzmSoVRtfX9km4` | [Open Actor](https://apify.com/logical_resourcefulnes/revenue-pilot) | [Inspect example](https://apify.com/logical_resourcefulnes/revenue-pilot/examples/compare-two-product-catalog-snapshots-by-sku) |
| Authorized Policy Page Change Audit | `1N7Cc3KYKeAcm0Eaf` | [Open Actor](https://apify.com/logical_resourcefulnes/authorized-policy-page-change-audit) | [Inspect example](https://apify.com/logical_resourcefulnes/authorized-policy-page-change-audit/examples/monitor-policy-page-text-changes) |
| Licensed Industry RSS Evidence Delta Feed | `lF5wy9tMKCmFSM4FZ` | [Open Actor](https://apify.com/logical_resourcefulnes/licensed-industry-rss-delta-feed) | [Inspect example](https://apify.com/logical_resourcefulnes/licensed-industry-rss-delta-feed/examples/monitor-competition-news-rss) |
| UK IT Tender Amendment & Deadline Watch | `BPONprzClbcH1XIfV` | [Open Actor](https://apify.com/logical_resourcefulnes/uk-it-tender-amendment-watch) | [Inspect example](https://apify.com/logical_resourcefulnes/uk-it-tender-amendment-watch/examples/track-uk-software-tender-deadlines) |
| SEC 8-K Item & Amendment Watch | `Wbq7GCD5WupnqUbgP` | [Open Actor](https://apify.com/logical_resourcefulnes/sec-8k-item-amendment-watch) | [Inspect example](https://apify.com/logical_resourcefulnes/sec-8k-item-amendment-watch/examples/track-sec-management-change-filings) |
| FDA Food Recall Supplier Match Feed | `1YC2xQqcaCjDhZR76` | [Open Actor](https://apify.com/logical_resourcefulnes/fda-food-recall-supplier-match) | [Inspect example](https://apify.com/logical_resourcefulnes/fda-food-recall-supplier-match/examples/screen-recent-fda-food-recalls) |
| UK Company Domain Evidence Resolver | `EroYwyZ7kgf0qz80V` | [Open Actor](https://apify.com/logical_resourcefulnes/uk-company-domain-evidence-resolver) | [Inspect example](https://apify.com/logical_resourcefulnes/uk-company-domain-evidence-resolver/examples/check-uk-company-domain-evidence) |
| Hospitality Review Triage Queue | `Fn9UmdcDs4Pm3eahs` | [Open Actor](https://apify.com/logical_resourcefulnes/hospitality-review-triage-queue) | [Inspect example](https://apify.com/logical_resourcefulnes/hospitality-review-triage-queue/examples/prioritize-hotel-review-responses-demo) |
| Website Accessibility Regression Evidence | `KJSYIVlYDhBJoXmYY` | [Open Actor](https://apify.com/logical_resourcefulnes/website-accessibility-regression-evidence) | [Inspect example](https://apify.com/logical_resourcefulnes/website-accessibility-regression-evidence/examples/check-accessibility-regression-demo) |
| Salesforce & HubSpot Project Signals / RevOps Radar | `8Gyf5jVe3dFidD4gn` | [Open Actor](https://apify.com/logical_resourcefulnes/revops-opportunity-radar) | [Inspect example](https://apify.com/logical_resourcefulnes/revops-opportunity-radar/examples/salesforce-hubspot-prospect-check-10-companies) |

## Review input, rights and maximum cost

A small local script, spreadsheet join, feed reader or official-source lookup may already meet your need. Choose an Actor when its documented input and evidence fields fit your review process.

For authorized source workflows, confirm permission before replacing the preset with your data. Keep credentials out of URLs and public issues. Minimize personal information, and remember that the submitted input and output are stored in your Apify account. Stateful workflows need a stable monitor key for repeated observations of the same source, and a separate key when changing sources. Revenue Pilot instead accepts both JSON snapshots together.

Check the live Pricing tab, event units and input limits. A completed check or analysis can incur charges even without relevant results. The [SKU example](https://apify.com/logical_resourcefulnes/revenue-pilot/examples/compare-two-product-catalog-snapshots-by-sku) used build 0.0.10, a USD 0.05 maximum run charge, 60 seconds and 256 MB when reviewed on 2 November 2026. Those values are specific to that example; verify them before a later run. Storage and later reads or exports may incur separate platform usage.

## API: decide before starting a run

Use an existing authorized account connection. Keep any token in your own secret store; the placeholder below is not a working credential. The current [Revenue Pilot API page](https://apify.com/logical_resourcefulnes/revenue-pilot/api) is a starting point for generated examples.

Apify's [Run Actor reference](https://docs.apify.com/api/v2/actors-runs-post) documents an asynchronous POST. Run limits belong in query parameters rather than inside the Actor's input JSON. The response identifies a run; it is not the completed comparison.

This **illustrative, unexecuted request starts a potentially billable run** if you supply valid credentials and input. Review it yourself before use:

```sh
curl --request POST \
  'https://api.apify.com/v2/actors/jfvLzmSoVRtfX9km4/runs?build=0.0.10&timeout=60&memory=256&maxTotalChargeUsd=0.05' \
  --header "Authorization: Bearer ${APIFY_TOKEN}" \
  --header 'Content-Type: application/json' \
  --data-binary @authorized-sku-input.json
```

For the fictional input shape, use the [SKU walkthrough](product-snapshot-comparison.md#prepare-the-inputs). It preserves identifiers such as `"00123"` as strings and declares both exports complete. Do not declare an incomplete export complete just to make a comparison proceed. CSV, Excel and source URLs are not direct inputs to Revenue Pilot.

If a start request times out, identify whether a run was created before repeating the POST. A second start can create another charged comparison.

## Retrieve an existing run and its results

Save the run ID returned by the start request. Inspect that same run through `GET /v2/actor-runs/{RUN_ID}`; a pending run is not a finished result. The response includes the default dataset and key-value store IDs. See the [Get Actor run reference](https://docs.apify.com/api/v2/actor-run-get).

For an existing run you are authorized to read:

- Dataset rows: `GET /v2/datasets/{DEFAULT_DATASET_ID}/items?format=json&limit=20`. Paginate when needed rather than treating the first page as the whole dataset. See [Get dataset items](https://docs.apify.com/api/v2/dataset-items-get).
- A documented output record: `GET /v2/key-value-stores/{DEFAULT_KEY_VALUE_STORE_ID}/records/OUTPUT`. See [Get key-value store record](https://docs.apify.com/api/v2/key-value-store-record-get).

Use the storage IDs from that specific run, not another Actor's latest storage. Keep run IDs, private storage links and result contents within the intended audience.

Revenue Pilot's dataset contains a summary row; its key-value store `OUTPUT` contains field-level changes. Other Actors have their own output schemas and diagnostics. Read [status and coverage](read-status-and-coverage.md) before interpreting an empty dataset, a held comparison, partial coverage or a candidate match. Reading an existing result avoids starting another comparison, but is not a promise that storage access is free.

## MCP: inspect first, execute only by choice

The [official Apify MCP documentation](https://docs.apify.com/mcp) describes Actor discovery, input details and execution. The [Revenue Pilot MCP page](https://apify.com/logical_resourcefulnes/revenue-pilot/api/mcp) is a product-specific entry point. Check the selected Actor's availability and current client configuration; this guide has not connected or run all twelve through MCP.

For discovery only, Apify documents an unauthenticated configuration containing `search-actors`, `fetch-actor-details`, `search-apify-docs` and `fetch-apify-docs`. Running Actors and accessing run or storage data require authentication. Establishing a new connection is a separate access decision.

A suitable client workflow is: select the Actor directly or search; inspect its input and pricing; review the proposed input and run limits; then let the account owner decide whether to execute. For `call-actor`, limits such as `maxTotalChargeUsd` belong in `callOptions`, not the Actor input. The response supplies run status and storage IDs rather than dataset contents; retrieve existing results with the appropriate available storage tool.

Do not ask an agent to start another run merely because the first response lacks rows. Preserve completeness diagnostics and human review of business conclusions.

