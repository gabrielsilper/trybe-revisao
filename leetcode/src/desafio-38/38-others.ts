function countAndSayOthers(n: number): string {
  if (n == 1) return '1';

  const res = countAndSayOthers(n - 1);

  let count = 1,
    str = '';
  for (let i = 0; i < res.length; i++) {
    if (res[i] == res[i + 1]) count++;
    else (str += count.toString() + res[i]), (count = 1);
  }

  return str;
}

console.log(countAndSayOthers(4));
