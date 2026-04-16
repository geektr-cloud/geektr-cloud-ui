import { Hono } from "hono";
import { env } from "cloudflare:workers";

export const h = new Hono();

h.get("/*", () => env.ASSETS.fetch("http://localhost/index.html"));

export default h;
