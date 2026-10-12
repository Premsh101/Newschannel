# Beyond Sensation

**Beyond the noise. Into perspective.**

Premium editorial website and news studio focused on world affairs, geopolitics, politics and national interest.

## Preview

https://pulsewire-news-studio.luckyplume4.chatgpt.site

The preview is owner-private and requires the owner’s ChatGPT sign-in. The intended domain is `beyondsensation.cloud`; DNS validation is pending.

## Included

- Responsive midnight-and-gold editorial homepage
- Interactive WebGL globe: drag rotation, regional views and pause control
- Reduced-motion handling and a fallback for unsupported WebGL
- Article pages with metadata and content labels
- Editorial studio: drafts, review controls, publishing and stored production packages
- D1 database schema and migrations
- Beyond Sensation transparent logo and SVG favicon under `public/brand/`
- AI editorial endpoint for headlines, articles, video scripts, shorts and captions

## Integration status

Writing, saving and publishing articles are implemented. AI generation requires a server-side `OPENAI_API_KEY`. Template production outlines work without AI. Video rendering, voiceover, automated media gathering, social posting and scheduling are **not integrated yet**. No external posts have been sent. Source links are supplied references and are not independently verified by the application.

## Stack

React 19, TypeScript, Vinext/Vite, Cloudflare Workers, D1 and Drizzle. The `.openai/hosting.json` manifest preserves the existing Sites project identity. This is a Sites/Workers project, not a standalone Express or Vercel deployment. Hosted authentication is provided by Sites.

## Local development

Use Node.js >=22.13.0 and pnpm.

```sh
pnpm install --frozen-lockfile
pnpm dev
```

Local preview runs at the URL printed by the dev server. Hosted identity headers and production D1 are not available automatically outside Sites. Do not expose fake identity headers in a public deployment.

## Validation

```sh
pnpm exec tsc --noEmit
pnpm build
```

TypeScript and the production build passed. Interactive browser QA has not been performed in the authoring environment.

## Database

Schema: `db/schema.ts`. Generate new migrations with `pnpm db:generate`. Existing migrations are in `drizzle/`. Sites applies production migrations during deployment. For a local database, build first and apply each pending SQL migration with the generated Wrangler configuration:

```sh
node --import ./scripts/sites-env.mjs ./node_modules/wrangler/bin/wrangler.js d1 execute DB --local --config dist/server/wrangler.json --persist-to .wrangler/state --file drizzle/0000_clean_black_tom.sql
node --import ./scripts/sites-env.mjs ./node_modules/wrangler/bin/wrangler.js d1 execute DB --local --config dist/server/wrangler.json --persist-to .wrangler/state --file drizzle/0001_normal_proteus.sql
```

Do not replay migrations already applied to your local database.

## Secrets

Configure `OPENAI_API_KEY` as a secret in Sites. Optional `OPENAI_MODEL` defaults to `gpt-4.1-mini`. Never put keys in frontend code or commit them to Git.

## Custom domain

Intended domain: `beyondsensation.cloud`. DNS validation is pending. Retrieve the current verification records privately from the Sites domain settings and configure them at the domain provider. Verification values are intentionally excluded from this public repository. Attaching a domain does not change the Site’s private audience.
