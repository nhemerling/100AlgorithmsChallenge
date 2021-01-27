export function alternatingSums(a: number[]): number[] {
  const teamWeights = [0, 0];
  a.forEach((weight, i) => {
    if (i % 2 === 0) {
      teamWeights[0] += weight;
    } else {
      teamWeights[1] += weight;
    }
  });

  return teamWeights;
}

console.log(alternatingSums([50, 60, 60, 45, 70]));