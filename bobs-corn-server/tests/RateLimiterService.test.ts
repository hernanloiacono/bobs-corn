import { describe, it, expect } from 'vitest';
import { RateLimiter } from '../src/domain/services/RateLimiter';
import { Client } from '../src/domain/models/Client';

describe('RateLimiter', () => {
  it('should allow purchase if client has no previous purchase', () => {
    const client = new Client(null, '127.0.0.1');
    expect(RateLimiter.canPurchase(client)).toBe(true);
  });

  it('should block purchase if last purchase was just now', () => {
    const now = new Date();
    const client = new Client(null, '127.0.0.1', now);
    expect(RateLimiter.canPurchase(client)).toBe(false);
  });

  it('should allow purchase after rate limit period', () => {
    const past = new Date(Date.now() - 61 * 1000); // hace 61 segundos
    const client = new Client(null, '127.0.0.1', past);
    expect(RateLimiter.canPurchase(client)).toBe(true);
  });
});