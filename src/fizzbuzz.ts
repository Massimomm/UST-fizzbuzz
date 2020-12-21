export enum type {
  Fizz = "fizz",
  Buzz = "buzz",
  FizzBuzz = "fizzbuzz",
}

type outcomes = {
  [key: number]: type;
};

const resultSets: outcomes = {
  3: type.Fizz,
  5: type.Buzz,
};

export const execute = (n: number): string | number => {
  return (
    Object.keys(resultSets)
      .map((x) => parseInt(x))
      .reduce((prev, current) => {
        return prev + (n % current === 0 ? resultSets[current].toString() : "");
      }, "") || n
  );
};
