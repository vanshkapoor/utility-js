const tail = require('./tail');

describe('Tail',()=>{
    test('Tail for arr[1,2,3]',()=>{
        expect(tail([1,2,3])).toEqual([2,3]);
    });

    test('Tail for arr[]',()=>{
        expect(tail([])).toEqual([]);
    })
})