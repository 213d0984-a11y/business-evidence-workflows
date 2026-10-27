# Compare job boards, catalogs, policy pages and feeds

Change monitoring starts with a reliable baseline. When switching from a demonstration to your own source, choose a new monitor key to avoid comparing your real data to fictional examples. Keep one key per source and workflow, then reuse it for later observations. An incomplete source is not proof that an item disappeared.

## Job postings

[Try a fictional ATS snapshot](https://apify.com/logical_resourcefulnes/ats-source-health-job-delta/examples/track-job-board-changes-demo) to see the structure before using your own authorized Greenhouse, Lever or Ashby board. Review source-health rows alongside job records. On the first run, results are a baseline; subsequent runs can report additions and changes. Check source permissions and the Actor's limits before supplying live boards.

## Product catalogs

[Audit a fictional product feed](https://apify.com/logical_resourcefulnes/authorized-catalog-feed-audit/examples/audit-product-catalog-changes-demo). Replace it with a JSON or CSV export that you are authorized to process. Choose a stable SKU key and preserve leading zeros as strings. Declare completeness only when the whole intended snapshot was collected. Empty or unexpectedly large removals require explicit acknowledgement to avoid interpreting a partial feed as stock disappearance.

An abbreviated owner test on 27 October 2026 returned this fictional baseline row (not a customer result):

```json
{"recordType":"catalog_change","itemId":"00123","changeType":"baseline","after":{"sku":"00123","price":"19.90","currency":"GBP","stock":"12"}}
```

The `baseline` label means the first observation; it does not claim a price changed. On later runs, inspect the reported change type and completeness diagnostics.

The older [Revenue Pilot](https://apify.com/logical_resourcefulnes/revenue-pilot) accepts two JSON snapshots rather than a feed. It is currently a controlled launch, and processing is paused outside its approved verification window. Consult its availability and pricing before trying it.

## Policy pages

[Monitor a policy page](https://apify.com/logical_resourcefulnes/authorized-policy-page-change-audit/examples/monitor-policy-page-text-changes) using the GOV.UK terms preset. When adapting the example, use an authorized page, choose the relevant text region, and exclude noisy elements carefully. Review the original page and the reported evidence; text differences are not legal advice.

## RSS and Atom

[Monitor competition news](https://apify.com/logical_resourcefulnes/licensed-industry-rss-delta-feed/examples/monitor-competition-news-rss) using the GOV.UK competition authority feed. Add keywords where useful, and review the feed's own terms before replacing the preset. The Actor reads feed titles and summaries, not article full text; feed coverage and licensing vary.

For all four workflows, inspect the live Pricing tab and set a run cost limit before starting. Retrieve outputs and diagnostics after a run, and keep source URLs and timestamps with any downstream analysis.

