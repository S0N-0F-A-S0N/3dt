import { describe, it, expect } from 'vitest';
import { hexNumberToCSSString, cssStringToHexNumber } from './utils.js';

describe('utils', () => {
  describe('hexNumberToCSSString', () => {
    it('converts 0 to #000000', () => {
      expect(hexNumberToCSSString(0)).toBe('#000000');
    });

    it('converts white to #ffffff', () => {
      expect(hexNumberToCSSString(0xffffff)).toBe('#ffffff');
    });

    it('converts red to #ff0000', () => {
      expect(hexNumberToCSSString(0xff0000)).toBe('#ff0000');
    });

    it('pads short numbers with zeros', () => {
      expect(hexNumberToCSSString(0x12)).toBe('#000012');
      expect(hexNumberToCSSString(0x1234)).toBe('#001234');
    });
  });

  describe('cssStringToHexNumber', () => {
    it('converts #000000 to 0', () => {
      expect(cssStringToHexNumber('#000000')).toBe(0);
    });

    it('converts #ffffff to 0xffffff', () => {
      expect(cssStringToHexNumber('#ffffff')).toBe(0xffffff);
    });

    it('converts #ff0000 to 0xff0000', () => {
      expect(cssStringToHexNumber('#ff0000')).toBe(0xff0000);
    });

    it('converts padded numbers correctly', () => {
      expect(cssStringToHexNumber('#000012')).toBe(0x12);
      expect(cssStringToHexNumber('#001234')).toBe(0x1234);
    });
  });
});
