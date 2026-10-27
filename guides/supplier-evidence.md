# Screen supplier recalls and investigate company domains

## Food recall screening

Food-safety and supplier-management teams can [screen recent FDA food recall reports](https://apify.com/logical_resourcefulnes/fda-food-recall-supplier-match/examples/screen-recent-fda-food-recalls). Start with the bounded recent-report example; add supplier or product terms to build a watchlist.

Review each candidate against its official source. A name match is not proof that a supplier or product is affected, and a missing match is not proof of safety. The date window, query limits and maximum records can restrict coverage. Keep the source link, observation time and coverage diagnostics with the review record. Check current event prices and a maximum cost before running.

An abbreviated owner test on 27 October 2026 returned this query-health record:

```json
{"recordType":"recall_query_health","status":"completed","scanned":100,"totalAvailable":247,"complete":false,"capped":true}
```

The query completed, but the 100-record cap left part of the 247 available records outside this particular scan. Check `complete` and `capped` before interpreting a missing match; a completed status alone is not evidence of full coverage. Counts change over time. This was an owner test, not a customer outcome.

## Reading a recall screening result

The Actor first requests up to `maxRecords` reports in the selected `days` window, ordered by report date, then applies the watchlist to the records it received. A supplier match outside that retrieved set will not appear. Increasing the maximum (up to 500) or narrowing the date window may reduce a cap, but neither guarantees complete coverage. Always check the returned health record's `scanned`, `totalAvailable`, `complete` and `capped` fields. If the query is capped, treat the screen as incomplete and use an appropriate additional source or review process; this Actor does not paginate beyond the limit.

To adapt the example, copy the [FDA task](https://apify.com/logical_resourcefulnes/fda-food-recall-supplier-match/examples/screen-recent-fda-food-recalls), choose an independent monitor key, and enter a watchlist such as the following **fictional input**, replacing the terms with ones you are authorized to process:

```json
[
  {"supplier": "Example Bakery", "product": "oat cookies"},
  {"supplier": "Example Foods"}
]
```

One entry may specify a supplier, a product, or both; when both are supplied, both need to match the same record. The entries are alternatives. Matching uses text and may be ambiguous or miss different spellings. Check the Actor's input instructions and confirm your rights before entering your own watchlist. An empty watchlist instead returns recent recalls without supplier filtering. Use a new monitor key for a different watchlist or date-window workflow; reuse it for the same workflow and avoid concurrent runs with that key.

For each candidate, inspect `sourceUrl`, `recallingFirm`, `productDescription`, `reason`, `distribution`, `recallStatus`, and `observedAt`; follow the official record and have a person check the actual product and circumstances. With `changesOnly` enabled, unchanged matches are omitted from later runs. Consequently, no evidence rows can mean unchanged results, a failed or incomplete query, or no match among the records scanned; it does not establish that there is no recall. Check `OUTPUT.status`, diagnostics and the query-health row before interpreting the result. A completed query can still be capped, as the owner test above shows. FDA records can be delayed or updated, and absence from a later scan does not establish that a recall was resolved.

This example is for screening, not a safety or regulatory determination. Review live pricing and set a maximum run cost before starting: the start charge can apply even when no match is found, and a completed query can incur a charge even if its coverage is capped. Dataset access after the run can also incur platform usage charges.

## UK company domain research

For account research or due diligence, [check UK company domain evidence](https://apify.com/logical_resourcefulnes/uk-company-domain-evidence-resolver/examples/check-uk-company-domain-evidence) using the public Tesco PLC example. Replace the company details with your own research targets. Candidate domains and registry evidence should be checked independently; a candidate domain or name match does not establish legal ownership or a commercial relationship.

The built-in lookup uses community-maintained Wikidata: company registration numbers and official website claims are evidence supplied by Wikidata contributors, not a direct Companies House verification. A supplied registry export is attributed to the customer. The lookup examines at most three Wikidata entities per company, so no candidate does not establish that a company has no website. Review `evidenceSource`, `registrationMatch`, `confidence` and `verificationStatus`, and verify any candidate independently.

At the price displayed on 28 October 2026, one successful company check costs $0.03 even if it yields no candidate, in addition to the $0.01 start event for an ordinary 256 MB run. A failed company lookup does not incur the company-check event, although the start event can still apply. An unavailable optional website check can still leave a completed, billable company lookup; inspect its diagnostics. Check the [current price](https://apify.com/logical_resourcefulnes/uk-company-domain-evidence-resolver), run limit and any post-run dataset usage before starting.

Website verification is off in the example. Enable it only for sites you are authorized to request, and inspect the Actor's limitations and pricing first. Preserve source and confidence fields so a colleague can reproduce the review.

