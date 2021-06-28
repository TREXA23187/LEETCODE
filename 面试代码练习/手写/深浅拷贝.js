const deepClone = function(o){
    const obj = {}
    for(let i in o){
        if(typeof o[i] === 'object'){
            obj[i] = deepCopy(o[i])
        } else{
            obj[i] = o[i]
        }
    }
    return obj
}

const obj = {
    a:12,
    b:[1,2,3],
    c:{
        d:{
            e:'xyz'
        }
    }
}
const obj2 = {
    a:12,
    b:14
}

const shallow = Object.assign(obj)
const deep = JSON.parse(JSON.stringify(obj))
const mydeep = deepClone(obj)

console.log(mydeep);
