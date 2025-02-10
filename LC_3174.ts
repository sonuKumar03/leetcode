/**
 * LC - https://leetcode.com/problems/clear-digits/
 * 2025-02-10
 */

function clearDigits(s: string): string {
  // get the first digit

  const str = s.split("");

  let index = nextDigitIndex(str);

  if (index === -1) return s;

  while (true) {
    index = nextDigitIndex(str);
    if (index === -1) break;
    const char = charLeftToIndex(index, str);
    if (char === "") break;
    console.log(index, char);
    str.splice(index - 1, 2);
  }
  console.log(str.join(""));
  return str.join("");
}
function nextDigitIndex(str: string[]): number {
  return str.findIndex((e) => isDigit(e));
}

function isDigit(str: string) {
  return !isNaN(Number(str));
}

function charLeftToIndex(index: number, str: string[]): string {
  for (let i = 0; i < index; i++) {
    if (!isDigit(str[i])) {
      return str[i];
    }
  }
  return "";
}

const s = "qm93xjkpaaovhqckjhg5j1o4rndtg3bobgeke";

clearDigits(s);
