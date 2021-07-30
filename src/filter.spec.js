const filter = require('./filter');

describe('Filter', ()=>{
    test("filter([], x => true",()=>{
        expect(filter([],"true")).toEqual([]);
    })

    test("filter([1,2,3],x => true)",()=>{
        expect(filter([1,2,3],"true")).toEqual([1,2,3]);
    })

    test("filter([1,2,3],x => false)",()=>{
        expect(filter([1,2,3],"false")).toEqual([]);
    })

    test("filter([1,2,3],x => x > 1)",()=>{
        expect(filter([1,2,3],"greater")).toEqual([2,3]);
    })
})