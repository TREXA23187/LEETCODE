function Parent(name) {
    this.name = name || 'parent';
    this.arr = [1];
}

Parent.prototype.say = function () {
    console.log('hello');
}

function Child(like) {
    this.like = like;
}

Child.prototype = new Parent(); //核心
Child.prototype.constructor = Child; //修复

//优点：共享了父亲构造函数的say方法
//缺点1：不能向父类构造函数传参
//缺点2：子类实例共享了父类构造函数的引用属性，比如arr
let boy1 = new Child()
// console.log(boy1.constructor)

//构造继承
function Parent2(name){
    this.name = name;
    this.arr = [1]
    this.say = function (){
        console.log("hello")
    }
}
function Child2(name,like){
    Parent.call(this,name);
    this.like = like;
}
//优点1：可向父类构造函数传参
//优点2：不共享父类构造函数的引用类型
//缺点1：方法不能复用
//缺点2：不能继承父类原型上的方法

//组合继承
function Parent3(name){
    this.name = name;
    this.arr = [1]
}
Parent3.prototype.say = function (){
    console.log("hello")
}
function Child3(name,like){
    Parent.call(this,name);
    this.like = like;
}
Child3.prototype = new Parent();
Child3.prototype.constructor = Child3;
//优点1：可以向父类构造函数传参数
//优点2：可复用父类原型上的方法
//优点3：不共享父类的引用属性
//缺点：由于调用了2次父类的构造方法，会存在一份多余的父类实例属性

//寄生组合继承
function Parent4(name){
    this.name = name;
    this.arr = [1]
}
Parent4.prototype.say = function (){
    console.log("hello")
}
function Child4(name,like){
    Parent.call(this,name);
    this.like = like;
}
Child4.prototype = Object.create(Parent4.prototype);
Child4.prototype.constructor = Child4;
//完美