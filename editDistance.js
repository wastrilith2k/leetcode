/*
Question 3: Edit Distance
Write a function that returns whether two words are exactly "one edit" away using the following signature:
bool OneEditApart(string s1, string s2);
An edit is:
Inserting one character anywhere in the word (including at the beginning and end)
Removing one character
Replacing one character
Examples:
OneEditApart("cat", "dog") = false
OneEditApart("cat", "cats") = true
OneEditApart("cat", "cut") = true
OneEditApart("cat", "cast") = true
OneEditApart("cat", "at") = true
OneEditApart("cat", "act") = false
*/

function OneEditApart(s1, s2) {
  if (s1 === s2) return false;
  if (s1.length !== s2.length) {
    const longer = s1.length > s2.length ? s1 : s2;
    const shorter = s1.length > s2.length ? s2 : s1;
    if (longer.length - shorter.length > 1) return false;
    let lengthAway = 0;
    for (i = 0; i < shorter.length; i++) {
      if (shorter[i] !== longer[i + lengthAway]) lengthAway = lengthAway + 1;
      if (lengthAway > 1) return false;
    }
    return true;
  } else {
    let lengthAway = 0;

    for (i = 0; i < s1.length; i++) {
      if (s1[i] !== s2[i]) {
        lengthAway = lengthAway + 1;
      }
      if (lengthAway > 1) return false;
    }

    return true;
  }
}

console.log(OneEditApart("cat", "dog")); // false
console.log(OneEditApart("cat", "cats")); // true
console.log(OneEditApart("cat", "cut")); // true
console.log(OneEditApart("cat", "cast")); // true
console.log(OneEditApart("cat", "at")); // true
console.log(OneEditApart("cat", "act")); // false
