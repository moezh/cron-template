import { runWorker } from "./worker";
import { Env } from "./types";

export default {
  async scheduled(event: ScheduledEvent, env: Env, ctx: ExecutionContext) {
    ctx.waitUntil(runWorker(env));
  },

  async fetch(req: Request, env: Env, ctx: ExecutionContext) {
    const result = await env.db
      .prepare("SELECT date as last_run from jobs order by date desc")
      .first();
    return new Response(
      JSON.stringify({
        message: "This worker runs on a schedule",
        last_run: result?.last_run,
        rand: Math.random(),
      }),
      { headers: { "Content-Type": "application/json" } },
    );
  },
};
