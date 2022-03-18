const {shuffleArray} = require('./utils')

describe('shuffleArray should', () => {
    // CODE HERE
    test("Function shuffleArray should return an array that is the same length as the array that was input", () =>{
        let testArr = [1,2,3,4,5,6,7]
        let randArr = shuffleArray(testArr)
        expect(randArr.length).toEqual(randArr.length)
    })

    test("Function shuffleArray should actually randomize the array values", () => {
        let testArr = [7,5,4,3,2,1]
        let randArr = shuffleArray(testArr)
        expect(randArr).not.toBe(testArr)
    })
})