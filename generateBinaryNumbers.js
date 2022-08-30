function generate(N) {
  //your code here
  const binaryNums = [];
  for (let i = N; i > 0; i--) {
    let remainder = i;
    const bits = [];

    while (remainder > 1) {
      const bit = remainder % 2; // 1 // 0
      remainder = remainder - Math.floor(remainder / 2) - bit; // 2 // 1
      bits.push(bit); // 1 // 0
    }
    bits.push(remainder); // 1

    binaryNums.push(bits.reverse().join(""));
  }
  return binaryNums.join(" ");
}

const N = 25;

console.log(generate(N));
