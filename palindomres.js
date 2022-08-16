function checkPalindrome(str) {
  for (offset = 0; offset < Math.floor(str.length / 2); offset++) {
    if (str.charAt(offset) != str.charAt(str.length - offset - 1)) return false;
  }
  return true;
}

function jsolution(s) {
  if (s == "") return "";
  let isPalinDrome = false;
  for (endPos = 2; endPos <= s.length; endPos++) {
    if (checkPalindrome(s.substring(0, endPos))) {
      isPalinDrome = true;
    } else {
      if (isPalinDrome) {
        isPalinDrome = false;
        return solution(s.substring(endPos));
      }
    }
  }
  return s;
}

console.log(solution("aaacodedoc"));
console.log(solution("codesignal"));
