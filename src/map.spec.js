const map = require('./map');

describe("Map",()=>{
    it("map([], cube)",()=>{
        expect(map([],"cube")).toEqual([]);
    })
    it("map([1,2,3], identity)", ()=>{
        expect(map([1,2,3], "identity")).toEqual([1,2,3]);
    })
    it("map([1,2,3], cube)", () =>{
        expect(map([1,2,3],"cube")).toEqual([1,8,27]);
    })
})
