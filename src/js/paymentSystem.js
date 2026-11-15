export default function getPaymentSystem(number) {
  // Первые 2, 3 и 4 цифры как числа — для проверки диапазонов
  const first2 = Number(number.slice(0, 2));
  const first3 = Number(number.slice(0, 3));
  const first4 = Number(number.slice(0, 4));

  // Visa: начинается с 4
  if (number.startsWith('4')) {
    return 'visa';
  }

  // Мир: 2200–2204
  if (first4 >= 2200 && first4 <= 2204) {
    return 'mir';
  }

  // Mastercard: 51–55 или 2221–2720
  if ((first2 >= 51 && first2 <= 55) || (first4 >= 2221 && first4 <= 2720)) {
    return 'mastercard';
  }

  // American Express: 34 или 37
  if (number.startsWith('34') || number.startsWith('37')) {
    return 'amex';
  }

  // Discover: 6011, 644–649 или 65
  if (number.startsWith('6011') || (first3 >= 644 && first3 <= 649) || number.startsWith('65')) {
    return 'discover';
  }

  // JCB: 3528–3589
  if (first4 >= 3528 && first4 <= 3589) {
    return 'jcb';
  }

  // Diners Club: 300–305, 36 или 38
  if ((first3 >= 300 && first3 <= 305) || number.startsWith('36') || number.startsWith('38')) {
    return 'diners';
  }

  return null;
}