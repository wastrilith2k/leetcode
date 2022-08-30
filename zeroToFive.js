const convertFive = (num) => {
  // code here
  let multiplier = 1;
  let newNum = 0;
  let newMultiplier = 1;
  while (num > 9) {
    newMultiplier = newMultiplier * 10;

    let digit = num % newMultiplier;
    newNum += digit == 0 ? 5 * multiplier : digit;

    num -= digit;
    multiplier = newMultiplier;
    console.log(num);
    console.log(newNum);
  }

  return newNum;
};
