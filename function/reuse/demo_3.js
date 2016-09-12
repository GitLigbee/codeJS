//借用和设置原型
function Parent(name){
    this.name = name || 'Par';
}
Parent.prototype.getName = function(){
    return this.name;
}
//此模式是个一次性的操作，它仅会复制父对象的属性并将其作为子对象自身的属性
//保留了__proto__链接
function Child(name){
    Parent.apply(this,arguments);
}
//该模式的缺点就是父构造函数被调用了两次，导致了效率低下的问题
Child.prototype = new Parent();

var kid = new Child('kid');
console.log(kid.name);
console.log(kid.getName());
console.log(kid.hasOwnProperty('name'));
//getName()被正确继承，但name被继承了两次
delete kid.name;
console.log(kid.getName());