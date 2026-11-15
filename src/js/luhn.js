export default function isValidCardNumber(number) {
 const digits = number.split('').map(Number);
 digits.reverse();

 let sum = 0;
 digits.forEach((digit, index) => {
  if (index % 2 === 1) {
    let doubled = digit * 2;
    if(doubled > 9) {
      doubled -= 9;
    }
    sum += doubled;
  } else {
    sum += digit;
  }
 });
 return sum % 10 === 0;
}