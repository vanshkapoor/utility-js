const mapfn=(arr,fntype)=>{
    if(fntype=="cube")
    {
        return arr.map(cube);
    }
    if(fntype=="identity")
    {
        return arr;
    }
}

function cube(num)
{
    return num*num*num;
}

module.exports = mapfn;