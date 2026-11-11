import { getEntityName } from './utils';

describe('getEntityName', () => {
  it('should return the name if it exists', () => {
    const entity = { name: 'MyEntity', baseType: 'Object3D' };
    expect(getEntityName(entity)).toBe('MyEntity');
  });

  it('should return the baseType if name is missing', () => {
    const entity = { baseType: 'Mesh' };
    expect(getEntityName(entity)).toBe('Mesh');
  });

  it('should return the baseType if name is an empty string', () => {
    const entity = { name: '', baseType: 'Scene' };
    expect(getEntityName(entity)).toBe('Scene');
  });

  it('should return undefined if both name and baseType are missing', () => {
    const entity = { otherProp: 'value' };
    expect(getEntityName(entity)).toBeUndefined();
  });

  it('should handle undefined or null entity gracefully (throws by default in current implementation, but if we updated the implementation to avoid throw on null/undefined, this test would be different. Since we did not, lets ensure it throws to capture current behavior)', () => {
    expect(() => getEntityName(null)).toThrow(TypeError);
    expect(() => getEntityName(undefined)).toThrow(TypeError);
  });
});
