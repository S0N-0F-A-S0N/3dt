import { cssStringToHexNumber } from '../utils.js';

describe('cssStringToHexNumber', () => {
  it('converts a full 6-character hex string to a number', () => {
    expect(cssStringToHexNumber('#ff0000')).toBe(0xff0000);
    expect(cssStringToHexNumber('#00ff00')).toBe(0x00ff00);
    expect(cssStringToHexNumber('#0000ff')).toBe(0x0000ff);
    expect(cssStringToHexNumber('#ffffff')).toBe(0xffffff);
    expect(cssStringToHexNumber('#000000')).toBe(0x000000);
  });

  it('handles strings without the # prefix', () => {
    expect(cssStringToHexNumber('ff0000')).toBe(0xff0000);
    expect(cssStringToHexNumber('ffffff')).toBe(0xffffff);
  });

  it('converts short 3-character hex strings correctly', () => {
    expect(cssStringToHexNumber('#fff')).toBe(0xffffff);
    expect(cssStringToHexNumber('#abc')).toBe(0xaabbcc);
    expect(cssStringToHexNumber('000')).toBe(0x000000);
  });

  it('returns NaN for invalid strings', () => {
    expect(cssStringToHexNumber('#ff')).toBeNaN();
    expect(cssStringToHexNumber('fffffff')).toBeNaN();
    expect(cssStringToHexNumber('not-a-hex')).toBeNaN();
    expect(cssStringToHexNumber(null)).toBeNaN();
    expect(cssStringToHexNumber(undefined)).toBeNaN();
    expect(cssStringToHexNumber(123456)).toBeNaN();
  });
});
