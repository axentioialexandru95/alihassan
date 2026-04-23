# Architecture

This project is a Next.js App Router site with Storyblok as the CMS layer. The codebase is split by ownership: route code lives in `app`, CMS-rendered blocks live in `components/storyblok`, reusable UI primitives live in `components/ui`, and product-specific static compositions live in `features`.

## Route Policy

`app/[[...slug]]/page.tsx` is the single public content route. It normalizes `/` to the Storyblok story slug `home`, fetches Storyblok content, and renders the matching CMS story. If Storyblok returns a missing story, the route calls `notFound()` and renders `app/not-found.tsx`.

Static exceptions must be listed in `lib/routes.ts`. Today the only static exception is `/design-system`, which renders `features/design-system/DesignSystemPage.tsx`. Do not add standalone pages for marketing content unless the route is intentionally owned outside Storyblok.

Preview mode is handled by `app/api/preview/route.ts` and `app/api/exit-preview/route.ts`. Preview enables Next draft mode, fetches Storyblok `draft` content, and redirects back to the normalized path. Published visitors fetch `published` content.

## Folders

- `app`: App Router entry points, global layout, route handlers, and not-found behavior.
- `components/layout`: Site chrome such as `Navbar`, `SiteFooter`, and their local data files.
- `components/icons`: Shared app icons that are imported as React components.
- `components/storyblok`: Components that map directly to Storyblok component schema names.
- `components/ui`: Small shared primitives such as buttons, section shells, headings, and icon tiles.
- `features/landing`: Static landing-page composition and data kept together as one feature slice.
- `features/design-system`: Local design-system route and its supporting sections/data.
- `lib/storyblok`: Storyblok client setup, component registry, and Storyblok block types.
- `lib/routes.ts`: Central route ownership and preview path normalization.

## Storyblok Components

Storyblok block components are registered in `lib/storyblok/registry.ts`. The registry keys must match Storyblok component schema names exactly, for example `page`, `teaser`, `grid`, and `feature`.

When adding a CMS component:

1. Add the React component under `components/storyblok`.
2. Add or extend its blok type in `lib/storyblok/types.ts`.
3. Register it in `lib/storyblok/registry.ts`.
4. Keep static helper data beside the component or feature that owns it.
5. Use `storyblokEditable(blok)` on the root editable element.
6. Use `StoryblokServerComponent` for nested blok arrays.

## Preview Setup

Required environment variables:

- `STORYBLOK_DELIVERY_API_TOKEN`: Storyblok delivery or preview token.
- `STORYBLOK_PREVIEW_SECRET`: Shared secret used by `/api/preview`.
- `STORYBLOK_REGION`: Storyblok region, defaulting to `eu`.
- `STORYBLOK_API_BASE_URL`: Optional API base override for local blueprint spaces.

Configure Storyblok preview URLs to hit `/api/preview?secret=<secret>&slug=<path>` before loading a page. Use `/api/exit-preview?slug=<path>` to leave draft mode. The rendered page uses `StoryblokStory`, which includes Storyblok bridge handling for live editing in the visual editor.

## Design Tokens

Design tokens are centralized in `app/globals.css` inside the Tailwind `@theme` block. Prefer semantic classes such as `bg-brand-soft`, `text-brand-navy`, `rounded-section`, and `border-brand-border-cool` over hard-coded hex values in components.

Rebond Grotesque is the brand/display font via `--font-brand`. Plus Jakarta Sans is the body and UI font via `--font-sans`.

One-off Figma geometry values can stay inline when they are layout-specific, but shared color, radius, and typography roles should be promoted to `@theme` before reuse.

## Assets

Production assets should use semantic kebab-case names, for example `service-review-thumb.png`, `problem-staff-overload.png`, and `financial-report.svg`. Keep raw or reference exports under `public/images/source` when they are not imported by the app.
