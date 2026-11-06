# Turn catalog and job-board evidence into a human review queue

For operations teams already using n8n, this manual workflow converts existing Catalog Feed Change Audit or ATS Job Delta results into consistent review rows. It keeps evidence beside the decision instead of automatically editing a shop, closing a vacancy or sending messages. The publisher maintains the linked Apify Actors.

**Status: public preview.** The exact transformation code passed 9 local checks on 6 November 2026. Import and execution inside n8n have not yet been verified; no claim of n8n directory approval is made.

## Try the fictional example

1. [Download the workflow JSON](../templates/catalog-ats-review-queue.json) using GitHub's download/raw control.
2. In your existing n8n instance, use the workflow menu's **Import from File** option. Review all nodes before execution.
3. Keep the manual trigger. The **Fictional Actor results** node contains two invented result bundles.
4. Execute manually and open **Build review queue** in Table view. Compare the rows with [expected-queue.json](../examples/review-queue/expected-queue.json).
5. Add a human decision in your own review system after checking the source. This template does not persist decisions or send them elsewhere.

The example makes no network requests, starts no Actor and contains no credentials. It does not require a paid API or a new service account. Costs for your n8n hosting, if any, are separate.

| Source | Identifier | Change | Review |
| --- | --- | --- | --- |
| Catalog | `00123` | updated | Price GBP 19.90 → 21.00; stock 12 → 10 |
| Catalog | `00125` | added | Check the new item and its after-values |
| Catalog | `00124` | removed_candidate | Verify completeness before acting on absence |
| ATS | `101` | closed_candidate | Two complete absences; verify the original posting |

## Use an existing authorized result

Replace the fictional node's data with an item containing `sourceKind: "catalog"` or `"ats"`, `demoOnly: false`, and a `rows` array holding the **complete existing result**, including its health row. Keep one catalog feed per item. An ATS bundle can contain multiple boards only when each has its matching health row. Do not paste credentials or customer contact details into a public workflow.

The examples are result rows, not Actor input: [catalog result](../examples/review-queue/catalog-2.json), [ATS result](../examples/review-queue/ats-3.json). Their `billable` flags are offline product metadata; they do not mean these example files generated any charge. The template never uses that field to calculate spending.

Catalog health must be completed with no issues; ATS health must be healthy and complete. Missing health, ambiguous feed identity, a partial export, unexpected events and non-string identifiers produce a **held** row. Baselines and complete no-change observations remain explicit audit rows. `removed_candidate` and `closed_candidate` remain candidates. The workflow does not deduplicate observations across executions or maintain a historical queue.

Keep identifiers as text when transferring to a spreadsheet. Do not turn a held row into a customer alert or treat it as proof of no change. Retain the monitor key, source identity and field mapping in the upstream Actor when comparing later observations.

## Where this saves work

Use this when you repeatedly copy Actor output into a review list and need the same evidence fields across both workflows. If a spreadsheet or manual inspection already takes less effort, this template may not help. It adds a review format, not new collection capability.

For upstream setup, use the [catalog walkthrough](catalog-two-observations.md), [ATS walkthrough](job-board-snapshots.md) and [first-result checklist](first-result-and-repeat-use.md). Starting an Actor or reading its stored results can incur Apify charges; this template deliberately does neither.

## Validation and limitations

The local checks covered the four expected rows, leading-zero preservation, absent health, an incomplete board, mixed catalog health, numeric identifiers, an unmatched board, a baseline, unknown change types and a truncated result. They executed the [same Code-node JavaScript](../templates/build-review-queue.js) with a simulated input interface, not the n8n engine. No real customer input or live board was used.

Engine import, actual node execution and compatibility with your n8n version remain to be checked before production use. Start with the bundled fictional data. Official directory submission remains pending until that verification and creator eligibility are complete.

References: [n8n workflow import/export](https://docs.n8n.io/workflows/export-import/), [Code node](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.code/).
