//借用构造函数模式
function Parent(name){
    this.name = name || 'Par';
}
Parent.prototype.getName = function(){
    return this.name;
}
//此模式是个一次性的操作，它仅会复制父对象的属性并将其作为子对象自身的属性
//但不会保留—__proto__链接
function Child(name){
    Parent.apply(this,arguments);
}

var kid = new Child('kid');
console.log(kid.name);
//console.log(kid.getName());
console.log(kid.hasOwnProperty('name'));