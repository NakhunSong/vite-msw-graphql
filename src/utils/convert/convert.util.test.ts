import { expect, test } from 'vitest';
import { convertStringToNumber } from './convert.util';

test('should convert', () => {
  const target = convertStringToNumber('123');
  expect(target).toBe(123);
});
