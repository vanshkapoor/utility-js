const filterfn=(arr, fntype)=>{
    if(fntype=="true"||fntype=="false")
    {
        return arr.filter((num)=>{
            if(fntype=="true")
                return num;
        })
    }
    return arr.filter(num => {
        return num>1;
    })
}

module.exports = filterfn;