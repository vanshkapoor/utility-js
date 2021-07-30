const min = (arr) => {
    return arr.reduce(minfn)
}

function minfn(a,b)
{
    return Math.min(a,b);
}

module.exports = min;