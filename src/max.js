const max = (arr) => {
    return arr.reduce(maxfn)
}

function maxfn(a,b)
{
    return Math.max(a,b);
}

module.exports = max;