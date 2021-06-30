const PENDING = 'pending'
const RESOLVED = 'resolved'
const REJECTED = 'rejected'

class myPromise{

    constructor(fn){
        this.value = null
        this.state = PENDING
        this.resolvedCallbacks = []
        this.rejectedCallbacks = []

        try {
            fn(this.resolve,this.reject)
        } catch (error) {
            this.reject(error)
        }
    }

    resolve(value){
        this.state = RESOLVED
        this.value = value
        this.resolvedCallbacks.map(cb=>cb(this.value))

    }

    reject(value){
        this.state = REJECTED
        this.value = value
        this.rejectedCallbacks.map(cb=>cb(this.value))
    }


}

myPromise.prototype.then = function(onResolved,onRejected){
    onResolved = typeof onResolved === 'function'?onResolved:v=>v
    onRejected = typeof onRejected === 'function'?onRejected:e=>{throw(e)}

    if(this.state === PENDING){
        this.resolvedCallbacks.push(onResolved)
        this.rejectedCallbacks.push(onRejected)
    }
    if(this.state === RESOLVED) {
        onFulfilled(this.value)
    }
    if(this.state === REJECTED) {
        onRejected(this.value)
    }
    
    this.rejectedCallbacks.map(cb=>cb())
}

const onResolved = function(data){
    console.log('resolved');
}
const onRejected = function(){
    console.log('rejected');
}
new myPromise((resolve,reject)=>{
    resolve('ok')
}).then((data)=>{
    console.log(data);
})