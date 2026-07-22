# Doraemon Pocket — Agent Instructions

## Project purpose

Doraemon Pocket is a lightweight, open-source, static tool-discovery website. Users search for a need such as “timestamp”, “JSON formatting”, or “image compression”; the site returns curated external tool links.

This is not an AI assistant and must not perform user tasks. It is a local-search interface over a maintained tool dataset.

## Source of truth

- Read `docs/PRD.md` before implementing any feature or changing the product behavior.
- Implement only requirements explicitly confirmed in the PRD or current user request.
- Do not add speculative features, future iterations, backend services, analytics, accounts, or recommendations without explicit approval.

## Product boundaries

- The first release has exactly two business pages: the home search page and the search results page.
- The home page is intentionally minimal: its only primary action is searching.
- The result page uses one reusable result-card template for every tool.
- Search happens entirely in the browser over local static data.
- Tool entries point to third-party websites; this project does not proxy, scrape, or host their content.

## Technical constraints

- Build a pure static frontend suitable for GitHub Pages.
- Do not introduce a backend, database, API server, authentication, secrets, or environment-dependent runtime services.
- Store tool data in a local JSON file and keep the schema consistent with `docs/PRD.md`.
- Keep search logic client-side. Search must cover name, description, tags, aliases, and scenarios.
- External links must open in a new tab with `rel="noopener noreferrer"`.
- Prefer small, maintainable dependencies. Do not add dependencies without a clear need.

## UI requirements

- Preserve the visual focus: Doraemon character visual + pocket-style search box on the home page.
- Keep character artwork isolated as a replaceable asset/component. Do not embed external hotlinked artwork.
- If a required visual asset has not been provided, use a clearly named local placeholder rather than downloading or inventing a third-party asset.
- Do not add category grids, tool walls, rankings, carousels, or promotional blocks to the home page.
- Keep result cards visually and structurally consistent. New data entries must not require new page layouts.
- Ensure desktop and mobile layouts remain usable, especially the search box and external-link action.

## Code quality

- Use descriptive component, type, and data-field names.
- Keep pages thin; extract reusable UI into components.
- Avoid duplicating tool-card markup or search-ranking logic.
- Treat TypeScript errors and build errors as blockers.
- Before handoff, run the project build and report the command/result.

## Data quality

- Each tool requires a stable `id`, `name`, `url`, `description`, tags, aliases, and priority.
- Use HTTPS URLs whenever available.
- Keep descriptions concise and task-oriented.
- Add common Chinese search synonyms to `aliases` where relevant.
- Do not add unverified or placeholder external links to production data.

## Scope discipline

- Do not change `docs/PRD.md` unless the user explicitly asks to update the requirements.
- Do not make Git commits, publish the repository, deploy, or alter GitHub settings unless explicitly requested.
- If a request conflicts with the PRD, stop and ask for clarification before changing the implementation.
