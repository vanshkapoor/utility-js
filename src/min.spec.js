const min = require('./min');

describe("Min",()=>{
    test('Min for [1,2,3,4]', () => {
        expect(min([1,2,3,4])).toEqual(1);
    })
})