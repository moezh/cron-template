import { Env } from "./types";

export async function runWorker(env: Env) {
  console.log("> runWorker: ", new Date().toISOString());
}
