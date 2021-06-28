const debounce = function(fn,delay){
    let timer = null
    return function(){
        clearTimeout(timer)
        timer = setTimeout(()=>{
            fn.apply(this,arguments)
        },delay)
    }
}

const throttle = function(fn,delay){
    let canRun = true
    return function(){
        if(!canRun){
            return
        }
        canRun = false
        setTimeout(()=>{
            fn.apply(this,arguments)
            canRun = true
        },delay)
    }
}

function handle() {
    console.log('防抖：', Math.random());
}