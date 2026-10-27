# Compare two product catalog snapshots by SKU

An operations team preparing a catalog import may want to identify products that appeared, disappeared, or changed price between two complete exports. The [Revenue Pilot Actor](https://apify.com/logical_resourcefulnes/revenue-pilot) compares two JSON snapshots by a unique string key and returns a JSON comparison. It does not collect product pages or update the catalog.

**Availability:** Revenue Pilot is in a controlled launch. Processing is paused outside the approved buyer verification window. Check the Actor page for the current status before trying it. The sample below illustrates the input and expected interpretation; it is not a customer result or a claim that a paused run completed.

## Prepare the inputs

1. Export the earlier and later catalog as JSON arrays. Each row needs a unique string identifier, such as an SKU. Preserve leading zeros as strings.
2. Check that both exports cover the same intended catalog and are complete. Only then set `before_complete` and `after_complete` to `true`. A partial export can otherwise look like a large number of removals.
3. The Actor accepts at most 10,000 rows per snapshot, a 5 MiB input JSON document and a 16 MiB result JSON document. URLs, CSV and Excel files are not accepted directly in this version.

Here is an invented three-outcome example:

```json
{
  "key": "sku",
  "before_complete": true,
  "after_complete": true,
  "before": [
    {"sku":"00123","price":19.90},
    {"sku":"00124","price":24.00}
  ],
  "after": [
    {"sku":"00123","price":21.00},
    {"sku":"00125","price":15.00}
  ]
}
```

An offline owner check of the comparison logic returned the following abbreviated result. This is a local calculation, not an Apify run, a charge, or a customer result:

```json
{"status":"completed","counts":{"added":1,"removed":1,"changed":1},"rows_before":2,"rows_after":2,"billable_units":1}
```

The changed product is `00123`, the removed product is `00124`, and the added product is `00125`. For an actual run, review the `OUTPUT` record for the returned status, counts and field-level details. A held or rejected run is not a completed comparison. The Actor cannot verify the upstream completeness declaration independently.

## Understand the safeguards and cost

An unexpectedly empty later snapshot is held unless explicitly declared intentional. Do not allow an empty result simply because an upstream export failed. Data is stored in the run's Apify storage; avoid posting private catalog records or credentials in public issues.

The Actor's public page describes a USD 0.05 event for a completed comparison, including one with no changes. Check the live Pricing tab and the account's platform-usage charges before any run; starting another run is a new comparison. Paused runs do not perform the comparison or its comparison event, as described on the Actor page.

If you need a separate feed-monitoring workflow, the [authorized catalog feed example](https://apify.com/logical_resourcefulnes/authorized-catalog-feed-audit/examples/audit-product-catalog-changes-demo) is a different Actor with different inputs, behavior and pricing. Use a new monitor key when switching from its fictional demo to an authorized real feed; read its own documentation and price before use.

