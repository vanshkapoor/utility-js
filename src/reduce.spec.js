const reduce = require('./reduce');

describe("Reduce", ()=>{
    test("reduce([],(x,y)=>x+y)",()=>{
        expect(reduce([],"simplesum")).toEqual(undefined);
    })

    test("reduce(['a','b','c'],(x,y)=>x+y)",()=>{
        expect(reduce(['a', 'b', 'c'],"simplesum")).toEqual("abc");
    })

    test("reduce(['a','b','c'],(x,y)=>x+y, 'z')",()=>{
        expect(reduce(['a', 'b', 'c'],"sumatfront")).toEqual("zabc");
    })
})