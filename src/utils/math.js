export const productOfSums = mat => mat.reduce((prod, tally) => prod * tally.reduce((sum, n) => sum + n, 0), 1);
