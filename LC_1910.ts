/**
 * LC - https://leetcode.com/problems/remove-all-occurrences-of-a-substring/description/
 * 2025-02-11
 */

function removeOccurrences(s: string, part: string): string {
  // use stack to solve this

  let ans = "";
  const str = s.split("");
  let i = 0;
  let j = i;
  while (true) {
    if (i < str.length && j < str.length) {
      const res = str.slice(i, j).join("");
      if (res.localeCompare(part) === 0) {
        i = 0;
        j = i;
        continue;
      }else if()
    }
  }
  //   for (let i = 0; i < str.length; i++) {
  //     for (let j = i; j < str.length; j++) {
  //       const res = str.slice(i, j).join("");
  //       if (res.length < part.length) {
  //         continue;
  //       }
  //       if (res === part) {
  //         str.splice(i, j - i);
  //         console.log(i, j, res, str.join(""), str.join("").length);
  //         i = i - 1;
  //         j = i;
  //       }
  //     }
  //   }
  console.log(str.join(""));
  return "";
}

const _s = "daabcbaabcbc",
  part = "abc";
removeOccurrences(_s, part);
