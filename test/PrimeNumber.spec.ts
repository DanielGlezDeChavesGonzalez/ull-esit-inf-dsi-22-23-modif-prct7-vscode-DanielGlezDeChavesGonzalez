import "mocha";
import { expect } from "chai";
import { PrimeNumber } from "../src/PrimeNumber";

describe("PrimeNumber", () => {
  it("should be a singleton class", () => {
    const primeNumber = PrimeNumber.getInstance(8);
    const primeNumber2 = PrimeNumber.getInstance(10);
    expect(primeNumber).to.be.equal(primeNumber2);
  });
  it("should create a new instance of PrimeNumber", () => {
    const primeNumber = PrimeNumber.getInstance(8);
    expect(primeNumber).to.be.an.instanceOf(PrimeNumber);
  });
  it("should return the first 8 prime numbers", () => {
    const primeNumber = PrimeNumber.getInstance(8);
    expect(primeNumber.getPrimeNumber()).to.be.deep.equal([
      2, 3, 5, 7, 11, 13, 17, 19,
    ]);
  });
  it("getter of the instance", () => {
    const primeNumber = PrimeNumber.getInstance(8);
    expect(primeNumber.getPrimeNumber()).to.be.deep.equal([
      2, 3, 5, 7, 11, 13, 17, 19,
    ]);
  });
  it("getter of length of the instance", () => {
    const primeNumber = PrimeNumber.getInstance(8);
    expect(primeNumber.getPrimeNumberLength()).to.be.equal(8);
  });
  it("getter of element of the instance", () => {
    const primeNumber = PrimeNumber.getInstance(8);
    expect(primeNumber.getPrimeNumberElement(3)).to.be.equal(7);
  });
  it("setter of element of the instance to fail", () => {
    const primeNumber = PrimeNumber.getInstance(8);
    expect(primeNumber.setPrimeNumberElement(3, 8)).to.be.false;
  });
  it("setter of element of the instance", () => {
    const primeNumber = PrimeNumber.getInstance(8);
    primeNumber.setPrimeNumberElement(3, 11);
    expect(primeNumber.getPrimeNumberElement(3)).to.be.equal(11);
  });
  it("setter of new prime number", () => {
    const primeNumber = PrimeNumber.getInstance(8);
    primeNumber.setNewPrimeNumber(10);
    expect(primeNumber.getPrimeNumber()).to.be.deep.equal([
      2, 3, 5, 7, 11, 13, 17, 19, 23, 29,
    ]);
  });
  it("getter of first prime numbers", () => {
    const primeNumber = PrimeNumber.getInstance(8);
    expect(primeNumber.getFirstPrimeNumbers(5)).to.be.deep.equal([
      2, 3, 5, 7, 11,
    ]);
  });
  it("getter of prime numbers between 2 and 10", () => {
    const primeNumber = PrimeNumber.getInstance(8);
    expect(primeNumber.getPrimeNumbersBetween(2, 10)).to.be.deep.equal([
      2, 3, 5, 7,
    ]);
  });
  it("class should be iterable", () => {
    const primeNumber = PrimeNumber.getInstance(8);
    primeNumber.setNewPrimeNumber(10);
    let array8 = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29];
    let i = 0;
    for (let element of primeNumber) {
      expect(element).to.be.equal(array8[i]);
      i++;
    }
  });
});
