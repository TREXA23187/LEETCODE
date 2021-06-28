function Parent(name){
    this.name = name || 'parent'
}

function Child(name, like){
    Parent.call(this,name)
    this.like = like || 'paint'
}
Child.prototype = Object.create(Parent.prototype)
Child.prototype.constructor = Child

console.log(new Child('zs','music'));