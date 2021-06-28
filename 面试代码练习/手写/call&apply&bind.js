Function.prototype.myCall = function(context){
    context = context || window
    context.fn = this
    const args = [...arguments].slice(1)
    const result = context.fn(...args)
    delete context.fn
    return result
}

Function.prototype.myApply = function(context){
    context = context || window
    context.fn = this
    let result
    if(arguments[1]){
        result = context.fn(...arguments[1])
    }else{
        result = context.fn()
    }
    return result
}

Function.prototype.myBind = function(context){
    const self = this
    const args = [...arguments].slice(1)
    return function F(){
        if (this instanceof F) {
            return new _this(...args, ...arguments)
        }
        return self.apply(context,args.concat(...arguments))
    }
}

function test(){
    const arr = [1,2,3,4]
    console.log(Math.max.myCall(Math,...arr));
    console.log(Math.max.myApply(Math,arr));
    console.log(Math.max.myBind(Math,...arr)());
}

test()