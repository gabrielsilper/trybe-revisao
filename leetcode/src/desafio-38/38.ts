function countAndSay(n: number): string {
  let say = '1';

  for (let i = 1; i < n; i += 1) {
    say = RLEOf(say);
  }

  return say;
}

function RLEOf(nString: string): string {
  let compressedString = '';
  let currentNum = nString.charAt(0);
  let quantityOfNum = 1;

  for (let i = 1; i < nString.length; i += 1) {
    if (currentNum == nString.charAt(i)) {
      quantityOfNum += 1;
    } else {
      compressedString += quantityOfNum + currentNum;
      currentNum = nString.charAt(i);
      quantityOfNum = 1;
    }
  }

  return compressedString + quantityOfNum + currentNum;
}

console.log(countAndSay(4)); // 33122451
