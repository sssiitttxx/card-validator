import getPaymentSystem from "../paymentSystem";

test.each([
  ['4111111111111111', 'visa'],
  ['5555555555554444', 'mastercard'],
  ['2223003122003222', 'mastercard'],
  ['378282246310005', 'amex'],
  ['6011111111111117', 'discover'],
  ['3530111333300000', 'jcb'],
  ['30569309025904', 'diners'],
  ['2200000000000004', 'mir'],
  ['9999999999999999', null],
])('номер %s - система %s', (number, expected) => {
  expect(getPaymentSystem(number)).toBe(expected);
});