# Worker + Cloudflare Cron Quickstart Template

A quickstart template for **scheduled jobs** built with **Cloudflare Workers**, leveraging **TypeScript** for type safety and **Wrangler CLI** for deployment.

## Prerequisites

- **Node.js** and **npm** must be installed.
- **Wrangler CLI** must be installed for Cloudflare deployment.

## Getting Started

1. Install dependencies: `npm install`

2. Start the local **development** server with hot reload: `npm run dev`

## Cloudflare Project Configuration

Before deploying, you must define the Cloudflare project name used by Wrangler. Edit `wrangler.toml` to update the `name` field.

## Quick Workflow For Deployments

1. Log in to Cloudflare (if not already logged in): `npm run login`

2. Deploy to Cloudflare: `npm run deploy`
