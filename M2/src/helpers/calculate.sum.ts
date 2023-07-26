export const calculateSum = function (numbersArray: Array<number>): number {
  return numbersArray.reduce((acc: number, num: number) => acc + num, 0);
};
