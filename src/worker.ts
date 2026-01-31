import { Env } from "./types";

export async function runWorker(env: Env) {
  console.log("> runWorker: ", new Date().toISOString());
  await env.db
    .prepare(
      "INSERT INTO jobs(date, status) VALUES (DATETIME('now', 'localtime'), 'done')",
    )
    .run();
}
