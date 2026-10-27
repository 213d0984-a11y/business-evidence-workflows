# Follow a job-board change across three snapshots

This walkthrough uses a fictional Greenhouse-style snapshot to show how a missing job becomes a closure candidate. It does not query a real job board or claim the job ever existed.

## Before you start

Open the [job-board example](https://apify.com/logical_resourcefulnes/ats-source-health-job-delta/examples/track-job-board-changes-demo) and make your own copy. Review the Actor's live Pricing tab and set a maximum cost for each run. This walkthrough performs three separate runs: each successful complete board check can incur an event charge, and start charges may apply. Post-run dataset access can incur standard platform usage charges.

Choose a monitor key not already used for another workflow. Replace `example-job-board` in both inputs below if necessary, and keep your chosen key and board ID unchanged across all three runs. The snapshots are fictional and deliberately declared complete. For your own data, confirm authorization and declare completeness only when the entire intended board was obtained.

## Run 1: establish a baseline

In the copied task's full input editor, use:

```json
{
  "monitorKey": "example-job-board",
  "rightsConfirmed": true,
  "maxJobs": 100,
  "boards": [{
    "id": "sample-board",
    "ats": "greenhouse",
    "mode": "snapshot",
    "complete": true,
    "payload": {
      "jobs": [{
        "id": "101",
        "title": "Platform Engineer",
        "location": {"name": "London"},
        "absolute_url": "https://example.org/careers/101"
      }]
    }
  }]
}
```

Check the `board_health` row and `OUTPUT` status. A healthy first observation establishes a baseline; the job row has `changeType: baseline`. The URL and job are invented.

## Runs 2 and 3: compare the same complete empty snapshot

Keep the same monitor key and board ID. Replace the input with the following complete empty snapshot, run it once, then run the identical input once more:

```json
{
  "monitorKey": "example-job-board",
  "rightsConfirmed": true,
  "maxJobs": 100,
  "boards": [{
    "id": "sample-board",
    "ats": "greenhouse",
    "mode": "snapshot",
    "complete": true,
    "payload": {"jobs": []}
  }]
}
```

On 27 October 2026, an owner test on the public build using these fictional inputs and a separate monitor key produced the following sequence. It is a verification run, not a customer result:

| Run | Job 101 change | Complete observations missing |
| --- | --- | ---: |
| 1 | `baseline` | — |
| 2 | `closure_pending` | 1 |
| 3 | `closed_candidate` | 2 |

A `closed_candidate` is still evidence for review, not proof that the vacancy closed. A failed or incomplete source does not advance the missing count. For live sources, inspect board health and verify the original board before making a decision; never mark an incomplete export as complete just to reproduce this example.
