/**
 * LC - https://leetcode.com/problems/clear-digits/
 * 2025-02-10
 */
function nextDigitIndex(str: string[]): number {
  return str.findIndex((e) => isDigit(e));
}

function isDigit(str: string) {
  return !isNaN(Number(str));
}

function charLeftToIndex(index: number, str: string[]): number {
  for (let i = 0; i < index; i++) {
    if (!isDigit(str[i])) {
      return i;
    }
  }
  return -1;
}

function clearDigits(s: string): string {
  // get the first digit

  const str = s.split("");

  let digitIndex = nextDigitIndex(str);

  if (digitIndex === -1) return s;
  // map to store indices to delete

  let lastCharIndex = charLeftToIndex(digitIndex, str);

  if (lastCharIndex === -1) return s;

  while (digitIndex < s.length && lastCharIndex >= 0) {
    const digit = str[digitIndex];
    const char = str[lastCharIndex];
    if (isDigit(digit) && !isDigit(char)) {
      str.splice(lastCharIndex, 1);
      str.splice(digitIndex, 1);
      lastCharIndex = -1;
      digitIndex -= 1;
    }
    break;
  }
  return str.join("");
}
const s = "a3aa4a";
console.log(clearDigits(s));
