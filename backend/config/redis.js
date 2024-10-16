import Redis from "ioredis";
import { ENV_VARS } from "./envVars.js";

export const redis = new Redis(ENV_VARS.UPSTASH_REDIS_URL);

// Set a key-value pair in Redis
await redis.set("foo", "bar");
