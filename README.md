# Cron + Cloudflare Worker Quickstart Template

A quickstart template for **scheduled jobs** built with **Cloudflare Workers**, leveraging **TypeScript** for type safety and **Wrangler CLI** for deployment.

## Prerequisites

- **Node.js** and **npm** must be installed.

## Cloudflare Project Configuration

Before deployment, the project name used by Wrangler must be defined in the `config.name` field of `package.json`.

## Getting Started

1. Install dependencies: `npm install`

1. Log in to Cloudflare (if not already logged in): `npm run login`

1. Start the local **development** server (hot reload enabled): `npm run dev`

## Database (Cloudflare D1)

This project supports an optional Cloudflare **D1** database.

When D1 is used, the database binding **must** be declared in `wrangler.toml` before running locally or deploying.

### Configuration

```toml
[[d1_databases]]
binding = "db"
database_name = ""
database_id = ""
remote = true
```

### Database scripts

The following npm scripts are provided for the D1 database management:

- `npm run db:info` — show D1 database info
- `npm run db:create` — create D1 database
- `npm run db:init` — initialize D1 schema

## Quick Workflow For Deployments

1. Log in to Cloudflare (if not already logged in): `npm run login`

2. Deploy to Cloudflare: `npm run deploy`
