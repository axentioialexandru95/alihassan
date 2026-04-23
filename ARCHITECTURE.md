# Architecture

This project is a Next.js App Router site with Storyblok as the CMS layer. The codebase is split by ownership: route code lives in `app`, CMS-rendered blocks live in `components/storyblok`, reusable UI primitives live in `components/ui`, and product-specific static compositions live in `features`.

## Route Policy

`app/[[...slug]]/page.tsx` is the single public content route. It normalizes `/` to the Storyblok story slug `home`, fetches Storyblok content, and renders the matching CMS story. If Storyblok returns a missing story, the route calls `notFound()` and renders `app/not-found.tsx`.

Static route ownership must be listed in `lib/routes.ts`. Today the only static exception is `/design-system`, which renders `features/design-system/DesignSystemPage.tsx`. Do not add standalone pages for marketing content unless the route is intentionally owned outside Storyblok.

Preview mode is handled by `app/api/preview/route.ts` and `app/api/exit-preview/route.ts`. Preview enables Next draft mode, fetches Storyblok `draft` content, and redirects back to the normalized path. Published visitors fetch `published` content.

## Folders

- `app`: App Router entry points, global layout, route handlers, and not-found behavior.
- `components/layout`: Site chrome such as `Navbar`, `SiteFooter`, and their local data files.
- `components/icons`: Shared app icons that are imported as React components.
- `components/storyblok`: Components that map directly to Storyblok component schema names.
- `components/ui`: Small shared primitives such as buttons, section shells, headings, and icon tiles.
- `features/landing`: Figma landing-page sections and static section data kept together as one feature slice.
- `features/design-system`: Local design-system route and its supporting sections/data.
- `lib/storyblok`: Storyblok client setup, component registry, and Storyblok block types.
- `lib/routes.ts`: Central route ownership and preview path normalization.

## Storyblok Components

Storyblok block components are registered in `lib/storyblok/registry.ts`. The registry keys must match Storyblok component schema technical names exactly, for example `page`, `hero`, `services`, and `feature`.

When adding a CMS component:

1. Add the React component under `components/storyblok`.
2. Add or extend its blok type in `lib/storyblok/types.ts`.
3. Register it in `lib/storyblok/registry.ts`.
4. Keep static helper data beside the component or feature that owns it.
5. Use `storyblokEditable(blok)` on the root editable element.
6. Use `StoryblokServerComponent` for nested blok arrays.

## Homepage CMS Blocks

The code can render these homepage blocks:

- `hero`
- `problem_cards`
- `solutions`
- `services`
- `holistic_approach`
- `process`
- `benefits`
- `cta`
- `faq`

To make them appear in the Storyblok insert panel, create matching component schemas inside Storyblok:

1. Go to **Block Library** in Storyblok.
2. Create a new **Nestable block** for each technical name above.
3. Keep the first version fieldless if the section is code-backed.
4. Open the `page` component schema.
5. Edit the `body` blocks field and allow these homepage components.
6. Open the `home` story and insert the blocks in the same order as the list above.

The visual editor insert panel is driven by Storyblok schema, not by local React imports. If a block is registered in code but missing in Storyblok, it will not appear in the insert panel. If a block exists in Storyblok but is missing from `lib/storyblok/registry.ts`, it will not render in Next.js.

The `hero` component currently supports these fields:

- `title`: Text field. Example: `Pharmacy`.
- `subtitle`: Textarea field. Example: `Operational bottlenecks, frequent billing errors, and mismanaged schedules can lead to revenue loss and frustrated patients.`

Legacy uppercase `Title` and `Subtitle` are also accepted by the renderer, but new Storyblok fields should use lowercase technical names.

## Preview Setup

Required environment variables:

- `STORYBLOK_DELIVERY_API_TOKEN`: Storyblok delivery or preview token.
- `STORYBLOK_PREVIEW_SECRET`: Shared secret used by `/api/preview`.
- `STORYBLOK_REGION`: Storyblok region, defaulting to `eu`.
- `STORYBLOK_API_BASE_URL`: Optional API base override for local blueprint spaces.

Configure Storyblok preview URLs to hit `/api/preview?secret=<secret>&slug=<path>` before loading a page. For the homepage, use `/api/preview?secret=<secret>&slug=/`. Use `/api/exit-preview?slug=<path>` to leave draft mode. The rendered page uses `StoryblokStory`, which includes Storyblok bridge handling for live editing in the visual editor.

## Design Tokens

Design tokens are centralized in `app/globals.css` inside the Tailwind `@theme` block. Prefer semantic classes such as `bg-brand-soft`, `text-brand-navy`, `rounded-section`, and `border-brand-border-cool` over hard-coded hex values in components.

Rebond Grotesque is the brand/display font via `--font-brand`. Plus Jakarta Sans is the body and UI font via `--font-sans`.

One-off Figma geometry values can stay inline when they are layout-specific, but shared color, radius, and typography roles should be promoted to `@theme` before reuse.

## Assets

Production assets should use semantic kebab-case names, for example `service-review-thumb.png`, `problem-staff-overload.png`, and `financial-report.svg`. Keep raw or reference exports under `public/images/source` when they are not imported by the app.
