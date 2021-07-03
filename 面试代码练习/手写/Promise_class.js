const PENDING = 'pending'
const RESOLVED = 'resolved'
const REJECTED = 'rejected'

class myPromise{
    constructor(fn){
        this.value = null
        this.state = PENDING
        this.fn = fn 
        this.resolvedCallbacks = []
        this.rejectedCallbacks = []

        try {
            this.fn(this.resolve.bind(this),this.reject.bind(this))
        } catch (error) {
            this.reject(error)
        }
    }

    resolve(value){
        if(this.state === PENDING){
            this.state = RESOLVED
            this.value = value
            this.resolvedCallbacks.map(cb=>cb(this.value))
        }
    }

    reject(value){
        if(this.state === PENDING){
            this.state = REJECTED
            this.value = value
            this.rejectedCallbacks.map(cb=>cb(this.value))
        }
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
        onResolved(this.value)
    }
    if(this.state === REJECTED) {
        onRejected(this.value)
    }
    
}

const fn = (data)=>{
    console.log(data);
}

new myPromise((resolve,reject)=>{
    reject('error')
    resolve('ok')
    console.log('----');
}).then(fn,fn)

// new Promise((resolve)=>{
//     resolve('ok')
//     console.log('222');
// }).then((data)=>{
//     console.log(data);
// })