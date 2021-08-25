const Todo = require("./Todo")
// @ponicode
describe("Todo.default", () => {
    test("0", () => {
        let callFunction = () => {
            Todo.default("a")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            Todo.default("A")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            Todo.default(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})
