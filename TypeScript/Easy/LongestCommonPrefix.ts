/**
 * @Take 1:
 * @Runtime: 1ms
 * @Memory: 57.99
 */

function longestCommonPrefix(strs: string[]): string {
  const segStrings: string[][] = strs.map((str) => str.split(""));
  const minLen = Math.min(...segStrings.map((s) => s.length));

  let prefix = "";
  let pointer = 0;

  while (pointer < minLen) {
    const matcher = segStrings[0][pointer];
    for (let i = 0; i < segStrings.length; i++) {
      if (segStrings[i][pointer] !== matcher) {
        return prefix;
      }
    }
    prefix += matcher;
    pointer += 1;
  }

  return prefix;
}
