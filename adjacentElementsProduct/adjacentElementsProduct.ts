export function adjacentElementsProduct(inputArray: number[]): number {
  let greatestProduct = inputArray[0] * inputArray[1];

  for (let i = 1; i < inputArray.length - 1; i++) {
    let product = inputArray[i] * inputArray[i + 1];
    if (product > greatestProduct) {
      greatestProduct = product;
    }
    // Also works instead of th if statement:
    // greatestProduct = greatestProduct < product ? product : greatestProduct;
  }

  return greatestProduct;
}

console.log(adjacentElementsProduct([3, 6, -2, -5, 7, 3]));