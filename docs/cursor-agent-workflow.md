# Cursor Agent Workflow

This document operationalizes the project plan for faster, safer agent-driven work.

## Mode Routing Matrix

| Task Type | Recommended Mode | Optional Subagent | Why |
|---|---|---|---|
| Small UI tweak in 1-2 files | Agent | none | Fast implementation with low ambiguity |
| Multi-file feature/refactor | Plan -> Agent | explore | Needs up-front scoping and sequencing |
| Unknown codebase question | Ask/Plan | explore | Discovery first, edits second |
| Command-heavy validation | Agent | shell | Keeps command execution isolated and repeatable |
| Cursor usage/process question | Ask/Plan | cursor-guide | Tool-specific guidance with less drift |

## Standard Execution Flow

1. State objective + acceptance criteria in one prompt.
2. Confirm scope quickly (`explore` if needed).
3. If complex, use Plan mode and get approval.
4. Implement in focused passes.
5. Verify (`npm run lint` minimum).
6. Return concise summary + touched files + next steps.

## Reusable Prompt Templates

### 1) Quick Fix Template

Use this when the change is clear and local.

```text
Goal: <one-sentence desired outcome>
Scope: Edit only <file paths>.
Constraints: Keep existing behavior unchanged outside scope.
Validation: Run `npm run lint`.
Output: Summarize what changed and list touched files.
```

### 2) Complex Change Template

Use this when there are trade-offs or multiple files/systems.

```text
Use Plan mode first.
Goal: <feature/refactor objective>
Scope: Likely files: <paths>
Requirements: <functional + non-functional requirements>
Process:
1) Ask up to 2 critical clarifications.
2) Propose implementation plan.
3) After approval, implement and verify.
Validation: Run `npm run lint` and one targeted runtime check.
Output: Plan + implementation summary + risks.
```

### 3) Parallel Workflow Template

Use this when tasks are independent and can run concurrently.

```text
Execute in parallel with focused streams:
Stream A (Implementation): <task + file scope>
Stream B (Verification): Validate behavior and run `npm run lint`.
Stream C (Docs, optional): Update related docs/README notes.
Constraints: Do not edit overlapping files across streams.
Output: Combined report with pass/fail per stream and final recommendation.
```

## Guardrails

- Keep terminal permissions conservative; approve sensitive commands manually.
- Never include secrets in prompts, logs, or committed files.
- Prefer small, reversible edits over broad rewrites.
- Always include verification status in final response.

## Pilot Run (Completed)

### Pilot Task

Inquiry: "Where is runtime performance monitoring controlled, and how can it be toggled for profiling?"

### Flow Used

1. Clarified objective and expected output format.
2. Ran discovery with `explore` subagent (readonly).
3. Collected file-level evidence and toggling mechanism.
4. Produced a verification procedure and friction notes.

### Result

- Runtime monitor control is in `components/performance-monitor.tsx`.
- Component is mounted in `app/layout.tsx`.
- Runtime toggle: `NEXT_PUBLIC_ENABLE_PERF_MONITOR === "true"` (default off).
- Build profiling toggle: `ANALYZE === "true"` in `next.config.js`.

### Friction Observed

- Runtime monitor has no visible output by default, so verification requires breakpoints/devtools.
- README documented `ANALYZE` but not `NEXT_PUBLIC_ENABLE_PERF_MONITOR`.

### Refinements Applied to Workflow

- Require prompt outputs to include "verification evidence" (not only findings).
- Add a "documentation gap check" step when discovery surfaces env-based controls.
