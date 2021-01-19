export function addTwoDigits(n: any): number {
  const nums = n.toString().split('');

  // return nums.reduce((a: string, b: string) => {
  //   return parseInt(a) + parseInt(b);
  // });

  // The above can be simplified to:
  return parseInt(nums[0]) + parseInt(nums[1]);
}

console.log(addTwoDigits(29));