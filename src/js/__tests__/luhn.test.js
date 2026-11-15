import isValidCardNumber from '../luhn';

test.each([
  ['4111111111111111', true],
  ['5555555555554444', true],
  ['378282246310005', true],
  ['6011111111111117', true],
  ['3530111333300000', true],
  ['30569309025904', true],
  ['2200000000000004', true],
  ['4111111111111112', false],
  ['5555555555554445', false],
  ['2200000000000005', false],
])('номер %s валиден: %s', (number, expected) => {
  expect(isValidCardNumber(number)).toBe(expected);
});