# A successful monitoring run can still contain incomplete evidence

A green run status answers whether a process finished. It does not tell you whether a source was complete, whether a missing record disappeared, or whether a candidate match is true. If a downstream automation treats all four questions as the same thing, a partial collection can become a false business alert.

**Disclosure:** this article was drafted with AI assistance and checked against the linked publisher documentation and recorded owner demonstrations. The publisher maintains the Apify tools discussed here. Examples are fictional or explicitly identified owner tests; they are not customer outcomes. The article is freely readable and is not a claim of savings, demand, compliance or investment performance.

## Separate the four questions

| Question | Evidence to inspect | What it cannot establish by itself |
| --- | --- | --- |
| Did the process finish? | Run status and exit information | Complete source coverage |
| What was actually observed? | Source-health and coverage records | That an unobserved item does not exist |
| What differs from the baseline? | Comparison status and change records | Why a business event occurred |
| What should happen next? | Original source and human review | A decision justified only by a score |

Keep these distinctions when moving a result into a spreadsheet, notification or review queue. A row count is a property of the delivered data; it is not automatically a count of every relevant event in the market.

## Case 1: a completed recall query that was capped

The publisher's existing [supplier-evidence walkthrough](https://github.com/213d0984-a11y/business-evidence-workflows/blob/main/guides/supplier-evidence.md) records this abbreviated owner-test health row from 27 October 2026:

```json
{
  "recordType": "recall_query_health",
  "status": "completed",
  "scanned": 100,
  "totalAvailable": 247,
  "complete": false,
  "capped": true
}
```

The query completed, but the retrieved set did not contain all 247 records available to that query. If a watchlist is applied after retrieval, a matching record outside the retrieved set cannot appear in the output.

There are at least three possible explanations for an empty watchlist result: no matching record in the scanned set, a matching record outside that set, or an unsuccessful or incomplete observation. They do not support the same conclusion.

For this workflow, inspect the health row alongside the matches. Narrowing a date window or adjusting a documented record cap may change coverage, but it is not a guarantee of completeness. A supplier-name match also needs review against the actual product and official recall information. The example is a lesson about bounded retrieval, not a product-safety determination.

## Case 2: a missing job needs a healthy comparison

Consider an invented job with ID `101`. A failed request that returns no jobs should not mean the same thing as a complete observation of a genuinely empty board.

In the publisher's [three-snapshot owner walkthrough](https://github.com/213d0984-a11y/business-evidence-workflows/blob/main/guides/job-board-snapshots.md), fictional complete inputs produced this sequence:

| Observation | Job 101 state | Complete observations missing |
| --- | --- | ---: |
| First complete snapshot containing job 101 | `baseline` | — |
| First complete empty snapshot | `closure_pending` | 1 |
| Second complete empty snapshot | `closed_candidate` | 2 |

A failed or incomplete source does not advance that missing count in the documented workflow. Even `closed_candidate` is a candidate for review; it is not proof that the employer stopped hiring.

For repeated comparisons, use the same source identity and monitor key. When changing from a fictional preset to your own authorized source, start with a new key so the first real observation is not compared against the invented data.

This distinction also matters for product feeds: a truncated catalog export can look like mass product removal. Confirm that the export is complete before interpreting missing identifiers.

## Case 3: a successful tender run can report partial coverage

The publisher's [public-records guide](https://github.com/213d0984-a11y/business-evidence-workflows/blob/main/guides/public-records.md) describes an owner test on 27 October 2026 where the Apify run succeeded, but the result reported `OUTPUT.status: partial` and `coverageComplete: false`.

The recorded diagnostics included:

- `page_limit_reached`
- `source_response_size_limit`
- `record_lookup_limit_reached`

Those diagnostics describe the scope of the delivered evidence. The baseline covers the notices returned by that bounded scan, rather than the whole tender market.

A bid team should open the official notice before acting on a deadline or amendment. In a downstream review queue, preserve the current deadline, prior deadline, source link, observation time and coverage diagnostics together. Avoid turning an absent row in a partial collection into a claim that a notice was withdrawn.

## A comparison may be valid without being complete research

Some workflows have a different boundary: they compare the exact input you provide.

For example, a two-snapshot catalog comparison can correctly report one added SKU, one removed SKU and one changed SKU. That proves a comparison of those supplied arrays. It does not prove that the upstream exports included every product, or that a removal represents an intentional business action.

In the documented [SKU snapshot example](https://github.com/213d0984-a11y/business-evidence-workflows/blob/main/guides/product-snapshot-comparison.md), the inputs are fictional. The first export contains `00123` and `00124`; the second contains `00123` with a different price and a new `00125`. The summary counts are one added, one removed and one changed item.

The useful review questions are:

1. Were the two snapshots meant to cover the same catalog?
2. Are identifiers unique strings, with leading zeros preserved?
3. Did the upstream export finish?
4. Is an empty later snapshot intentional?
5. Where are the full field-level differences stored?

These questions can catch an import-review mistake before someone treats every missing SKU as an approved deletion. A summary row is useful for counting; the full comparison is needed to inspect the affected fields.

## Carry the boundary into other evidence workflows

The same review habit applies beyond missing records:

| Workflow | Boundary to preserve |
| --- | --- |
| Policy-page text changes | A static text comparison does not cover JavaScript-rendered content or every visual change |
| RSS and Atom monitoring | Feed titles and summaries do not provide article full text or grant a license to the source |
| SEC filing metadata | An amendment candidate is not a verified relationship or an investment conclusion |
| UK company-domain research | A candidate domain and a community-maintained registry claim do not establish legal ownership |
| Hotel review triage | A keyword-based priority is a review prompt; it is not proof of an allegation |
| Static accessibility evidence | A static automated scan does not assess all dynamic interactions or certify WCAG conformance |
| Salesforce or HubSpot role signals | A job posting does not establish consulting demand, budget or willingness to buy |

A useful export preserves those boundaries next to the row. If a reviewer must reopen a separate manual to discover that the record is only a candidate, the spreadsheet is easy to overinterpret.

## A review process you can use before automating decisions

Start with one decision: which notice needs review, which SKU changed, or which guest issue should be checked first. Choose an input and output that match that decision.

Before running a paid workflow, inspect its accepted inputs, current price and maximum run cost. An empty result does not necessarily mean a free run. Use only sources and exports you are authorized to process.

After collection, check process status, source health and coverage before interpreting changes. If the output is held or partial, preserve that state in the downstream queue. Keep source links and observation times with the evidence, and open the original source before taking consequential action.

The publisher's [selection guide covers all 12 existing evidence workflows](https://github.com/213d0984-a11y/business-evidence-workflows/blob/main/guides/choose-a-business-evidence-workflow.md), including inputs, alternatives, public presets and the limits that matter for each. It can help you decide whether a spreadsheet, direct source, browser audit or hosted comparison fits the work.

No demonstration in this article is a customer result. A completed comparison, a candidate match and a business outcome remain separate facts.
