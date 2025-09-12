function mergeAlternately(string1, string2) {
  let newString = "";

  for (let i = 0; i < string1.length; i++) {
    newString += string1[i];
    newString += string2[i];
  }
  return newString;
}

const result = mergeAlternately("abc", "efg");
console.log(result);
