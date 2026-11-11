import { isUUID } from './utils.js';

describe('isUUID', () => {
  it('should return true for valid UUIDs', () => {
    expect(isUUID('123e4567-e89b-12d3-a456-426614174000')).toBe(true);
    expect(isUUID('550e8400-e29b-41d4-a716-446655440000')).toBe(true);
    expect(isUUID('00000000-0000-0000-0000-000000000000')).toBe(true);
  });

  it('should return false for invalid strings', () => {
    expect(isUUID('123e4567-e89b-12d3-a456-42661417400')).toBe(false); // Too short
    expect(isUUID('123e4567-e89b-12d3-a456-4266141740000')).toBe(false); // Too long
    expect(isUUID('123e4567e89b12d3a456426614174000')).toBe(false); // No dashes
    expect(isUUID('not-a-uuid')).toBe(false);
    expect(isUUID('')).toBe(false);
  });

  it('should return false for non-string values', () => {
    expect(isUUID(null)).toBe(false);
    expect(isUUID(undefined)).toBe(false);
    expect(isUUID(123)).toBe(false);
    expect(isUUID({})).toBe(false);
    expect(isUUID([])).toBe(false);
  });
});
