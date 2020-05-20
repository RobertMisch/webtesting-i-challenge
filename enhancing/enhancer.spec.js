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
    describe("succeed()", () => {

        it("should make enhancements +1", () => {
            expect(enhancer.succeed(testItem).enhancments).toBe(1);
        });
        it("should make enhancements +20", () => {
            testItem.enhancments=20
            expect(enhancer.succeed(testItem).enhancments).toBe(20);
        });
        it("durability shouldnt change", () => {
            expect(enhancer.succeed(testItem).durability).toBe(20);
        });
    })
    describe("fail()", () => {

        it("should decrease durability by 5", () => {
            testItem.enhancments=10
            expect(enhancer.fail(testItem).durability).toBe(15);
        });
        it("should decrease durability by 10 when over/equal 15", () => {
            testItem.enhancments=15
            expect(enhancer.fail(testItem).durability).toBe(10);
        });
        it("should decrease durability by 10 when over 16", () => {
            testItem.enhancments=17
            expect(enhancer.fail(testItem).durability).toBe(10);
        });
        it("should decrease enchantment by 1 when over 16", () => {
            testItem.enhancments=17
            expect(enhancer.fail(testItem).enhancments).toBe(16);
        });
    })
    
})