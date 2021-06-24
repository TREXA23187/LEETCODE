function f(stack) {
    let result = stack.pop()
    if (stack.length === 0) {
        return result
    } else {
        let last = f(stack)
        stack.push(result)
        return last
    }
}

function reverse(stack){
    if(stack.length === 0){
        return
    }
    let i = f(stack)
    reverse(stack)
    stack.push(i)
}

const stack  = [1,2,3,4,5]
reverse(stack)
console.log(stack)