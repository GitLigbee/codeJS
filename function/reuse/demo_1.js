function Parent(name){
    this.name = name || 'Par';
}
Parent.prototype.getName = function(){
    return this.name;
}
function Child(name){}

inherit(Child,Parent);

//使用Parent()构造函数创建一个对象，并将该对象赋值给Child()原型
function inherit(C,P){
    C.prototype = new P();
}

var kid = new Child('kid');
//缺点是无法将参数传递给子构造函数中，而子构造函数又将参数传递给父构造函数
console.log(kid.name);
console.log(kid.getName());
console.log(kid.hasOwnProperty('name'));