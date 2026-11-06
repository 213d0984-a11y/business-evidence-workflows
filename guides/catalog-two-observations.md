# Compare two observations of an authorized catalog feed

For catalog operations teams, this exercise turns a saved baseline into a small price and stock review queue. It uses fictional rows and does not change a shop. The publisher maintains the linked Actor.

Open [Catalog Feed Change Audit and current pricing](https://apify.com/logical_resourcefulnes/authorized-catalog-feed-audit), copy its [public example](https://apify.com/logical_resourcefulnes/authorized-catalog-feed-audit/examples/audit-product-catalog-changes-demo), and inspect the input before running. Each completed audit currently has a USD 0.05 event charge plus a USD 0.01 start at the example memory setting, checked 6 November 2026. Two completed observations therefore have USD 0.12 in these charges; platform storage and later reads may add costs. Set a maximum cost and inspect live pricing.

## Establish the baseline

Download [baseline.json](../examples/catalog/baseline.json) and paste its full contents into the copied task's JSON input. Use a monitor key that is not already used for another source.

The input has four unique string SKUs, a stable feed identity, and explicit completeness and rights declarations. All rows are invented. The expected output contains one `catalog_health` row with `baseline: true` and four `catalog_change` rows with `changeType: baseline`.

## Observe a change

Keep the same monitor key, feed identity and field mapping. Replace the input with [follow-up.json](../examples/catalog/follow-up.json). It changes SKU 00123, replaces SKU 00124 with 00125 and leaves two rows unchanged.

Expected output:

| Row | Expected evidence |
| --- | --- |
| `catalog_health` | completed, baseline false, 4 rows, 3 changes |
| SKU 00123 | updated; price and stock in changedFields |
| SKU 00125 | added |
| SKU 00124 | removed_candidate |

Only one of four previous rows is absent, so the default large-removal safeguard is not triggered. With two previous rows, removing one would exceed the 30% threshold and hold the comparison. Do not enable the override just to get output from an incomplete feed.

The expected sequence and duplicate, incomplete, empty and large-removal holds were checked against the current local product functions on 6 November 2026. This is an offline logic check, not a new cloud run or a customer result.

## Move to your real workflow

Use one small export you are authorized to process. Create a new monitor key for the real source and retain it with the feed ID and field mapping on later observations. Keep SKUs as strings. Declare completeness only after checking that the export covers the intended supplier, region and inventory. Do not put credentials in a feed URL.

Export or inspect only the existing result you need; keep SKU, change type, changed fields, before/after values and observation time in a review queue. Assign unexpected removals to a person before any import. Repeat after a fresh complete export becomes available.

A useful first result is an explainable difference on your data and a recorded review action. A useful repeat result is a later comparison against the intended baseline. If a spreadsheet already does this reliably with less effort, keep using it.

[All-product first-result and repeat-use checklist](first-result-and-repeat-use.md)
