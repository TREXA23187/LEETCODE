function myInstanceof(left,right){
    right = right.prototype
    left = left.__proto__
    while(1){
        if(left === null || left === undefined){
            return false
        }
        if(left === right){
            return true
        }
        left = left.__proto__
    }
}

function test(){
    console.log(myInstanceof({},Object));
    console.log(myInstanceof([],Array));
    console.log(myInstanceof({},Number));
}
test()
