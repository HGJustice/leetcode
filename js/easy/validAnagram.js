function vaildAnagram(s, t) {
  if (s.length !== t.length) return false;
  const map = {};

  for (let i = 0; i < s.length; i++) {
    const letter = s[i];
    if (!map[letter]) {
      map[letter] = 1;
    } else {
      map[letter]++;
    }
  }

  for (let j = 0; j < t.length; j++) {
    const letter = t[j];
    if (map[letter] < 1) return false;
    if (map[letter] === undefined) return false;
    map[letter]++;
  }
  return true;
}
