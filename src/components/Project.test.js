const Project = require("./Project")
// @ponicode
describe("Project.default", () => {
    test("0", () => {
        let callFunction = () => {
            Project.default("A")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            Project.default("b")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            Project.default("a")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            Project.default("c")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            Project.default("B")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            Project.default(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})
