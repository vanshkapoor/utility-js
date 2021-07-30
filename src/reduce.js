const reduce =(arr, fntype)=>{
    if(fntype=="simplesum")
    {
        if(arr.length == 0)
            return undefined;
        return arr.reduce(summition)
    }
    if(fntype == "sumatfront")
    {
        return arr.reduce(summition, 'z')
    }
}

function summition(sum, num)
{
    return sum+num;
}

module.exports = reduce;