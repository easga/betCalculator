/*eslint-disable*/
// Can be cleaner with template strings and a lib like xregexp
const betPatterns = [
  /^[WP]:[1-9]\d*:[1-9]\d*$/i,
  /^[EQ]:[1-9]\d*,[1-9]\d*:[1-9]\d*$/i
];
const resultPattern = /^[R]:[1-9]\d*:[1-9]\d*:[1-9]\d*$/i
/*eslint-enable*/

export const isValidBet = bet => betPatterns.some(betPattern => betPattern.test(bet));
export const isValidResult = result => resultPattern.test(result);
