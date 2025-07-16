/**
    @params x: the relevant number
    @returns: if a number reads the same forward as it does in reverse
    @example: 121 returns true, 123 returns false
    @note - SLOWER ⚠️ -  Uses native JavaScript string and array functions to reverse the number as a string.
 */

// RunTime: 9ms
// Memory: 65.83MB
function isPalindromeV2(x: number): boolean {
  if (x < 0) return false; //always return false if negative - can't be palindrome

  const reversed = x.toString().split("").reverse().join("");

  return reversed === x.toString();
}
