import assert from "assert";
import { execute, type } from "../src/fizzbuzz";

describe("Fizz Buzz", () => {
  it("1 - get fizz for multiples of 3", () => {
    assert.equal(execute(27), type.Fizz.toString());
  });

  it("2 - get buzz for multiples of 5", () => {
    assert.equal(execute(125), type.Buzz.toString());
  });

  it("3 - get buzz for multiples of 3 and 5", () => {
    assert.equal(execute(90), type.FizzBuzz.toString());
  });

  it("4 - get any other number passed *", () => {
    assert.equal(execute(11), 11);
  });

  it("5 - should reject one of the assertions", () => {
    assert.notEqual(execute(3), type.FizzBuzz.toString());
  });

  console.log(process.argv, process.argv[2]);
});
