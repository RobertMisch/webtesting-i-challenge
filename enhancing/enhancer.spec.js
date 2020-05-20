const enhancer = require('./enhancer.js');
// test away!
const testItem = {
    name: "first item",
    enhancments: 0,
    durability: 20
}
describe("enhancer", () => {
    describe("repair()", () => {
        // it("should add two numbers", () => {
        //   // setup - Arrange
        //   const expected = 7;
        //   const firstNumber = 4;
        //   const secondNumber = 3;

        //   // execution of the code - Act
        //   const actual = add(firstNumber, secondNumber);

        //   // check assummptions - Assert
        //   expect(actual).toBe(expected);
        // });

        it("should make durability 100", () => {
            expect(enhancer.repair(testItem).durability).toBe(100);
        });
    })
})