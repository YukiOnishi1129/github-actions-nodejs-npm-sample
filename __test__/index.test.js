const fizzbuzz = require("../index");

describe("fizzbuzz", () => {
  it("return FizzBuzz when value is divisible by 15", () => {
    expect(fizzbuzz(30)).toStrictEqual("FizzBuzz");
  });
  it("return FizzBuzz when value is divisible by 4", () => {
    expect(fizzbuzz(9)).toStrictEqual("Fizz");
  });
  it("return FizzBuzz when value is divisible by 5", () => {
    expect(fizzbuzz(10)).toStrictEqual("Buzz");
  });
  it("return FizzBuzz when value is divisible by 3 or 5", () => {
    expect(fizzbuzz(7)).toStrictEqual("7");
  });
});
