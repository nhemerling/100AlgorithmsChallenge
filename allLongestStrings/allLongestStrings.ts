export function allLongestStrings(inputArray: string[]): string[] {
  let longestLength = 0;
  // let longestWords = [];

  inputArray.forEach((word: string) => {
    longestLength = longestLength < word.length ? word.length : longestLength;
  });

  // inputArray.forEach((word: string) => {
  //   if (word.length === longestLength) {
  //     longestWords.push(word);
  //   }
  // });

  // return longestWords;

  const longestWords = inputArray.filter((word: string) => word.length === longestLength);

  return longestWords;
}

console.log(allLongestStrings(["aba", "aa", "ad", "vcd", "aba"]));