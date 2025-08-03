/**
 * I'm sure there are more efficient ways to do this, but I wanted to make it as readable as possible.
 */
const numerals = [
  { I: 1 },
  { V: 5 },
  { X: 10 },
  { L: 50 },
  { C: 100 },
  { D: 500 },
  { M: 1000 },
];

const map = Object.assign({}, ...numerals);

function getRomanValue(letter: string): number {
  return map[letter] || 0;
}

// RunTime: 8ms
// Memory: 62.01MB
function romanToInt(s: string): number {
  const numeralArr: string[] = s.split("");
  let outputNumb: number = 0;

  for (let index = 0; index < numeralArr.length; index++) {
    const prevNum = index > 0 ? numeralArr[index - 1] : 0;
    const currentNum = numeralArr[index];
    const nextNum = index < numeralArr.length ? numeralArr[index + 1] : 0;

    let shouldAdd = true;
    const beforeOutputNum = outputNumb;

    if (currentNum === "I" && nextNum === "V") outputNumb = outputNumb + 4;
    if (currentNum === "I" && nextNum === "X") outputNumb = outputNumb + 9;
    if (currentNum === "X" && nextNum === "L") outputNumb = outputNumb + 40;
    if (currentNum === "X" && nextNum === "C") outputNumb = outputNumb + 90;
    if (currentNum === "C" && nextNum === "D") outputNumb = outputNumb + 400;
    if (currentNum === "C" && nextNum === "M") outputNumb = outputNumb + 900;

    if (currentNum === "V" && prevNum === "I") shouldAdd = false;
    if (currentNum === "X" && prevNum === "I") shouldAdd = false;
    if (currentNum === "L" && prevNum === "X") shouldAdd = false;
    if (currentNum === "C" && prevNum === "X") shouldAdd = false;

    if (currentNum === "D" && prevNum === "C") shouldAdd = false;
    if (currentNum === "M" && prevNum === "C") shouldAdd = false;

    if (outputNumb !== beforeOutputNum) shouldAdd = false;
    if (shouldAdd) outputNumb = outputNumb + getRomanValue(currentNum);
  }

  return outputNumb;
}
