const { describe } = require("node:test")
const index = require(`./index`)

describe("testing sum function",() => {
    test("sum will return 5 when passed 2 and 3", () => {
        expect(index.sum(2,3)).toBe(5)
    })
    test("sum will NOT return 6 when passed 2 and 3", () => {
        expect(index.sum(2,3)).not.toBe(6)
    })
})
describe("testing names array",() => {
    test("the names array contains `callum`", ()=>{
        expect(index.names).toContain(`callum`)
    }) 
    test("the names array does NOT contain `robin", () => {
        expect(index.names).not.toContain(`robin`)
    })
}) 


describe("testing the testFunc function", () => {
    test("the testFunc function should be equal to 25 when passed 5 and 5",() => {
        expect(index.testFunc(5,5)).toBe(25)
    })
})

