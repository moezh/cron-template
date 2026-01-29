import { runWorker } from "./worker";
import { Env } from "./types";

export default {
  async scheduled(event: ScheduledEvent, env: Env, ctx: ExecutionContext) {
    ctx.waitUntil(runWorker(env));
  },

  async fetch(req: Request, env: Env, ctx: ExecutionContext) {
    return new Response("This worker runs on a schedule.");
  },
};
