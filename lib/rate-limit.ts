// Simple in-memory rate limiter
// For production, consider using Redis or a proper rate limiting service

interface RateLimitStore {
  [key: string]: {
    count: number;
    resetTime: number;
  };
}

const store: RateLimitStore = {};

export function rateLimit(
  identifier: string,
  maxRequests: number = 5,
  windowMs: number = 60000 // 1 minute
): { success: boolean; remaining: number } {
  const now = Date.now();
  const record = store[identifier];

  // Clean up old entries periodically
  if (Math.random() < 0.01) {
    Object.keys(store).forEach(key => {
      if (store[key].resetTime < now) {
        delete store[key];
      }
    });
  }

  if (!record || record.resetTime < now) {
    // New window
    store[identifier] = {
      count: 1,
      resetTime: now + windowMs,
    };
    return { success: true, remaining: maxRequests - 1 };
  }

  if (record.count >= maxRequests) {
    return { success: false, remaining: 0 };
  }

  record.count++;
  return { success: true, remaining: maxRequests - record.count };
}
