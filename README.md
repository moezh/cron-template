# Cron + Cloudflare Worker Quickstart Template

A quickstart template for **scheduled jobs** built with **Cloudflare Workers**, leveraging **TypeScript** for type safety and **Wrangler CLI** for deployment.

## Prerequisites

- **Node.js** and **npm** must be installed.

## Cloudflare Project Configuration

1. Install dependencies: `npm install`

1. Log in to Cloudflare (if not already logged in): `npm run login`

1. You must define the Cloudflare **project name** used by Wrangler. Edit `wrangler.toml` to update the `name` field.

1. This project uses Cloudflare **D1** database. The database binding must be declared in `wrangler.toml` before running locally or deploying.

### Database Configuration

```toml
[[d1_databases]]
binding = "db"
database_name = ""
database_id = ""
remote = true
```

### Database scripts

The following npm scripts are provided for the D1 database management:

- `npm run db:list` — list all D1 databases
- `npm run db:create <db_name>` — create D1 database
- `npm run db:info <db_name>` — show D1 database info
- `npm run db:init <db_name>` — initialize D1 schema
- `npm run db:delete <db_name>` — delete D1 database

## Development Mode

1. Install dependencies: `npm install`

1. Start the local **development** server (hot reload enabled): `npm run dev`

## Deployment to Cloudflare

2. Deploy to Cloudflare: `npm run deploy`
