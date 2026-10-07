# Jev Global Automatic Activity Audits Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use `executing-plans` to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking. Do not delegate tasks to subagents.

**Goal:** Run a real Jev audit automatically for every newly generated pedagogical activity in the app, without blocking generation or fabricating approvals.

**Architecture:** `KiddoApp` will publish a normalized, privacy-filtered snapshot whenever a new activity is produced. `AISentinelModule` will deduplicate snapshots, call the same-origin Python API asynchronously, and show only real Jev results. Python keeps the TypeSafe key server-side; local execution binds to loopback, and Docker routes Nginx `/api` requests to a private API service.

**Tech Stack:** Vanilla JavaScript, Python `http.server`, `typesafe-sdk==0.7.2`, Nginx, Docker Compose, GitHub Actions / GHCR.

**Spec:** `docs/superpowers/specs/2026-10-07-jev-global-auto-audit-design.md`

## Global Constraints

- Audit only new pedagogical activity generations, not cosmetic re-renders, answers toggles, printing, zoom, or resize.
- Keep generation asynchronous and usable while Jev is unavailable.
- Only a valid Jev API response may produce an approved or alert result; failures are “não auditada”.
- Exclude student names, school identity, phone, CNPJ, logos, and other unnecessary identifiers from payloads.
- Keep `TYPESAFE_API_KEY` and `OPENROUTER_API_KEY` out of browser code and source control.
- Bind the local API to `127.0.0.1`; expose the Docker API only to Nginx on a private network.
- Gemini stays manual/on-demand. Jev audits but does not rewrite activities.
- Static hosting without a secure `/api` backend reports “não auditada”.
- Each unique new activity may incur TypeSafe usage; deduplicate unchanged content in memory.
- Do not add or run tests unless the user explicitly asks for tests or verification.

---

## File Map

- `requirements.txt` — pin the Python SDK used by `audit_sentinel.py`.
- `audit_sentinel.py` — make real Jev responses and failures explicit; retain existing Gemini behavior.
- `server.py` — validate API requests, return a stable JSON contract, and bind safely by runtime.
- `js/app.js` — expose a normalized snapshot and signal every activity-producing generation.
- `js/ai-sentinel.js` — deduplicate audit calls, discard stale responses, and display accurate states.
- `index.html` — make the Jev indicator and audit modal reflect pending, approved, alert, and unavailable states.
- `Dockerfile.api` — build the Python API image independently from the existing Nginx frontend image.
- `nginx.conf` — proxy same-origin `/api/` requests to the private API service.
- `docker-compose.yml` — run frontend and API with the proper private network and runtime secret.
- `.github/workflows/docker-publish.yml` — publish frontend and API images to GHCR.
- `README.md`, `HANDOFF.md`, `docs/HANDOFF.md`, `CLAUDE.md` — document real coverage, setup, deployment, limits, and current state.

## Task 1: Make the Python Jev API Real and Safe

**Files:**
- Create: `requirements.txt`
- Modify: `audit_sentinel.py`
- Modify: `server.py`

**Interfaces:**
- Request body: `{ "activityType": string, "gradeLevel": string, "data": object }`.
- Successful Jev response includes `status: "approved" | "alert"`, `model`, `latency_ms`, `tokens`, `answers`, and `needs_escalation`.
- Missing key, invalid request, timeout, or provider error returns a non-2xx response with `{ "status": "unavailable", "error_code": string, "error": string }` and no secret or traceback.

- [ ] **Step 1: Declare the installed SDK as a reproducible dependency**

Create `requirements.txt` with exactly:

```text
typesafe-sdk==0.7.2
```

- [ ] **Step 2: Require the TypeSafe credential for real audits**

In `audit_activity_with_jev`, check `TYPESAFE_API_KEY` before constructing the SDK client. If absent, raise a typed configuration error that the HTTP layer can convert to `status: "unavailable"`. Do not substitute a local approval.

- [ ] **Step 3: Derive a truthful audit status from required answers**

Keep the existing `Noul`, `Choice`, and `Score` questions. Add a `status` field only after checking the required answer keys exist. Mark the result `alert` when `needs_escalation` is true or a required adequacy judgment fails; otherwise mark it `approved`. Preserve the real `model`, usage, and latency returned by TypeSafe.

- [ ] **Step 4: Bound and validate the HTTP payload**

In `server.py`, reject malformed JSON, non-object roots, missing activity type, and request bodies larger than 8 KiB with a structured 4xx response. Keep the validation response free of submitted payload contents.

- [ ] **Step 5: Use explicit local and container bind addresses**

Replace `server_address = ("", PORT)` with a host read from `HOST`, defaulting to `127.0.0.1`. The Docker API service will set `HOST=0.0.0.0` on its private network. Read the port from `PORT`, defaulting to `8085`.

- [ ] **Step 6: Return consistent provider errors**

Catch expected TypeSafe configuration, timeout, and provider exceptions in the audit route. Return a safe error code and short message with HTTP 503; never include the API key, full request payload, or traceback. Remove wildcard CORS because the browser uses same-origin `/api`.

- [ ] **Step 7: Review the backend contract against the approved design**

Confirm the route returns `approved` only for a complete successful Jev judgment and that all error paths return `unavailable`. Do not call the metered Jev API during this source review.

## Task 2: Normalize Activity Data for Every Generator

**Files:**
- Modify: `js/app.js`

**Interfaces:**
- Add `KiddoApp.getCurrentAuditSnapshot()` returning either `null` or `{ activityType: string, gradeLevel: string, data: object }`.
- Snapshot data contains domain activity data and relevant generation parameters only. It excludes names and school or contact details.

- [ ] **Step 1: Store generated data for current renderers that keep it local**

Assign the generated domain object to `currentData` in `renderShapes`, `renderBodyParts`, `renderFlashcards`, `renderOrigami`, `renderColoring`, and `renderTracing`. Preserve existing render output and answer visibility.

- [ ] **Step 2: Store a compact drawing snapshot**

In `renderDrawing`, set `currentData` to the selected drawing’s ID, display name, category, and short step descriptions. Do not include SVG path geometry or duplicate the full 355-item database.

- [ ] **Step 3: Build snapshots for special sheets without `currentData`**

For `certificate`, `diagnostic`, and `boardgame`, construct data from the selected template and learning content. Strip student name, class identifier, school name, logo, phone, and CNPJ. Never reuse a previous tab’s `currentData`.

- [ ] **Step 4: Build the interactive puzzle snapshot**

When `SlidingPuzzle.init` creates a new board, capture only its puzzle type, board dimensions, and instructional objective. Do not send move history or student interaction data.

- [ ] **Step 5: Add the normalized snapshot accessor**

Implement `getCurrentAuditSnapshot()` to use the active tab’s current model, current grade select value, and the explicit special-mode adapters. Return `null` for infrastructure-only views that do not generate a pedagogical activity.

- [ ] **Step 6: Bound serialized activity data before dispatch**

Cap long activity arrays to the first 10 representative items while retaining total item count. Limit the serialized JSON to 8 KiB and omit fields not needed for pedagogy or difficulty assessment.

- [ ] **Step 7: Trace coverage across every activity tab**

Walk every `TAB_DEFINITIONS` entry and every early-return branch in `renderCurrentActivity`. Confirm each activity-producing path yields a snapshot, including `certificate`, `diagnostic`, `boardgame`, and `slidingpuzzle`. The category, BNCC, mascot, white-label, and sentinel infrastructure modules are not standalone activity generations.

## Task 3: Audit Every New Generation in the Browser

**Files:**
- Modify: `js/app.js`
- Modify: `js/ai-sentinel.js`
- Modify: `index.html`

**Interfaces:**
- Add `AISentinelModule.auditGeneratedActivity(snapshot, options = {})` where `options.force === true` bypasses the in-memory dedupe for an explicit manual re-audit.
- Every generated snapshot uses the Task 2 shape. The call returns immediately to the generation flow; it updates UI state asynchronously.

- [ ] **Step 1: Replace the fabricated fallback with explicit unavailable state**

Delete `generateLocalFallbackAudit`. On fetch failure, missing API, invalid JSON, or non-2xx status, set state to `unavailable` and show a short explanation. Remove fallback latency/token values and any default “approved” values from `renderJevResults`.

- [ ] **Step 2: Add request deduplication and stale-response protection**

Keep a bounded in-memory map keyed by deterministic serialization of activity type, grade, and normalized data. Track a monotonically increasing request ID; ignore a response if a newer generation has already been submitted. Reuse an existing result for an unchanged snapshot unless `force` is set.

- [ ] **Step 3: Send the approved snapshot contract**

Have `auditGeneratedActivity` POST only the supplied snapshot to `/api/audit/fast`. Do not call `getCurrentAppState()` after the request begins, since the selected tab may have changed.

- [ ] **Step 4: Connect the completed render to the auditor**

After the normal branch of `renderCurrentActivity` has generated content and applied visibility, obtain `KiddoApp.getCurrentAuditSnapshot()` and call `auditGeneratedActivity`. Do the same before each `certificate`, `diagnostic`, and `boardgame` early return. For `slidingpuzzle`, call it after `SlidingPuzzle.init` completes.

- [ ] **Step 5: Ensure initial generation is included**

In the `DOMContentLoaded` handler, initialize `AISentinelModule` before `KiddoApp.init()` so listeners and audit state exist before the first worksheet is generated.

- [ ] **Step 6: Render only returned status and metrics**

Show `Aguardando Jev`, `Aprovada`, `Alerta`, or `Não auditada` using the server response state. Display latency and tokens only when present in that response. Keep the generated activity usable in every state.

- [ ] **Step 7: Add an explicit manual Jev re-audit control**

Add a Jev button with ID `btn-rerun-jev-audit` inside the Jev section and bind it in `setupListeners`. Opening the modal displays the latest audit without calling Jev again. Clicking this button forces a re-audit of the current normalized snapshot. Keep the Gemini button user-triggered and pass it the latest real Jev result.

- [ ] **Step 8: Correct claims in the modal copy**

Replace “Zero Alucinação” with wording that describes structured answers without promising infallibility. Ensure the upper badge does not appear green or “active” before a real response arrives.

## Task 4: Route Docker Traffic to a Private Python Service

**Files:**
- Create: `Dockerfile.api`
- Modify: `nginx.conf`
- Modify: `docker-compose.yml`
- Modify: `.github/workflows/docker-publish.yml`

- [ ] **Step 1: Create an API-only container image**

Create `Dockerfile.api` using `python:3.12-slim`, install `requirements.txt`, copy `server.py` and `audit_sentinel.py`, set `HOST=0.0.0.0` and `PORT=8085`, and start `python server.py`. Do not copy the `.env` file or credentials into the image.

- [ ] **Step 2: Add a same-origin Nginx proxy**

Add a `/api/` location in `nginx.conf` that proxies to `http://jev-api:8085`, forwards the original host and scheme, and does not weaken Nginx’s existing static asset caching rules.

- [ ] **Step 3: Add a private network for the API service**

In `docker-compose.yml`, attach the frontend to an internal overlay network shared with a new `jev-api` service. Keep the existing public Traefik network on the frontend only. The API service has no `ports` mapping and receives `TYPESAFE_API_KEY` as runtime environment configuration.

- [ ] **Step 4: Publish both images without changing the existing frontend tag**

Extend `.github/workflows/docker-publish.yml` to build the existing frontend `Dockerfile` as `:latest` and `Dockerfile.api` as `:api-latest`, using the same repository-scoped GitHub token and package permissions. Do not trigger or push this workflow as part of this task.

- [ ] **Step 5: Point the stack at the API image**

Set the new Compose service to `ghcr.io/camposoberano/ensino-soberano-kids:api-latest`. Do not expose 8085 publicly. Keep the frontend reachable through the existing Traefik labels.

## Task 5: Update Operating Documentation and Handoff

**Files:**
- Modify: `README.md`
- Modify: `HANDOFF.md`
- Modify: `docs/HANDOFF.md`
- Modify: `CLAUDE.md`
- Modify: `AGENTS.md` only if implementation changes the approved rule or touched-file list.

- [ ] **Step 1: Document local setup and honest offline behavior**

In `README.md`, explain that automatic audits require `typesafe-sdk==0.7.2`, `TYPESAFE_API_KEY`, and `python server.py`/`iniciar.bat`; direct static opening still generates worksheets but reports them as unaudited.

- [ ] **Step 2: Document the Docker topology and runtime secret**

Describe the frontend Nginx image, private `jev-api` service, `TYPESAFE_API_KEY` runtime configuration, and the `:api-latest` image. State that credentials must not be committed or embedded in browser code.

- [ ] **Step 3: Reconcile both handoff copies**

Update `HANDOFF.md` and `docs/HANDOFF.md` with the exact implemented behavior, current deployment limitation, affected files, and remaining tasks. Keep the two copies identical.

- [ ] **Step 4: Update cross-chat guidance**

Update `CLAUDE.md` only with durable instructions needed to preserve the automatic Jev behavior across future sessions. Keep `AGENTS.md`’s approved decision aligned with the implementation.

## Completion Checklist

- [ ] All activity-producing views listed by `KiddoApp` provide a current, normalized snapshot.
- [ ] The API never reports approval without a complete real Jev response.
- [ ] New generations trigger one asynchronous call; unchanged re-renders do not create additional calls.
- [ ] Old network responses cannot overwrite the newest activity status.
- [ ] Student and institutional identifiers are excluded before the browser request.
- [ ] The activity remains available during missing-key, network, and provider failures.
- [ ] The Docker API port is private and the API image is built by the existing publish workflow when that workflow is run.
- [ ] Documentation and both handoff copies describe the same behavior.
- [ ] Do not run automated tests or provider calls unless the user requests verification.
