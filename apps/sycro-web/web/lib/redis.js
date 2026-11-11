import { Redis } from "@upstash/redis";

let _client = null;

export function getRedis() {
  if (!_client) {
    const url = process.env.UPSTASH_REDIS_REST_URL;
    const token = process.env.UPSTASH_REDIS_REST_TOKEN;
    if (!url || !token) throw new Error("Upstash no configurado");
    _client = new Redis({ url, token });
  }
  return _client;
}
