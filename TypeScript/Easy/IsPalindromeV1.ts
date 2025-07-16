/**
    @params x: the relevant number
    @returns: if a number reads the same forward as it does in reverse
    @example: 121 returns true, 123 returns false
    @note - I wanted to have a go at solving isPalindrome practicing manual indexing and looping. I have created a
    isPalindromeV2 using native JS functions. 

 */

function isPalindromeV1(x: number): boolean {
  const splitNums = x.toString().split(""); //remember: you don't have to keep the type the same. it takes number and returns boolean.
  const newSplitNums: string[] = [];

  for (let i = splitNums.length - 1; i >= 0; i--) {
    newSplitNums.push(splitNums[i]);
  }

  const newNum = newSplitNums.join("");

  return newNum === x.toString();
}
